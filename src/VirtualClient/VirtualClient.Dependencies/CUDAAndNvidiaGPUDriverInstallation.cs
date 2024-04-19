// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace VirtualClient.Dependencies
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics.CodeAnalysis;
    using System.IO;
    using System.IO.Abstractions;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;
    using Microsoft.CodeAnalysis;
    using Microsoft.Extensions.DependencyInjection;
    using Polly;
    using VirtualClient.Common;
    using VirtualClient.Common.Extensions;
    using VirtualClient.Common.Rest;
    using VirtualClient.Common.Telemetry;
    using VirtualClient.Contracts;
    using VirtualClient.Contracts.Metadata;

    /// <summary>
    /// Provides functionality for installing specific version of CUDA and supported Nvidia GPU driver on linux and Windows.
    /// </summary>
    public class CudaAndNvidiaGPUDriverInstallation : NvidiaGPUDriverInstallation
    {
        private IPackageManager packageManager;
        private IFileSystem fileSystem;
        private ISystemManagement systemManager;

        /// <summary>
        /// Initializes a new instance of the <see cref="CudaAndNvidiaGPUDriverInstallation"/> class.
        /// </summary>
        /// <param name="dependencies">An enumeration of dependencies that can be used for dependency injection.</param>
        /// <param name="parameters">A series of key value pairs that dictate runtime execution.</param>
        public CudaAndNvidiaGPUDriverInstallation(IServiceCollection dependencies, IDictionary<string, IConvertible> parameters)
            : base(dependencies, parameters)
        {
            this.systemManager = dependencies.GetService<ISystemManagement>();
            this.fileSystem = this.systemManager.FileSystem;
            this.packageManager = this.systemManager.PackageManager;
        }

        /// <summary>
        /// The version of CUDA to be installed in Linux Systems
        /// </summary>
        public string LinuxCudaVersion
        {
            get
            {
                return this.Parameters.GetValue<string>(nameof(CudaAndNvidiaGPUDriverInstallation.LinuxCudaVersion), string.Empty);
            }

            set
            {
                this.Parameters[nameof(CudaAndNvidiaGPUDriverInstallation.LinuxCudaVersion)] = value;
            }
        }

        /// <summary>
        /// The local runfile to install Cuda and Nvidia GPU driver in Linux Systems
        /// </summary>
        public string LinuxLocalRunFile
        {
            get
            {
                return this.Parameters.GetValue<string>(nameof(CudaAndNvidiaGPUDriverInstallation.LinuxLocalRunFile), string.Empty);
            }

            set
            {
                this.Parameters[nameof(CudaAndNvidiaGPUDriverInstallation.LinuxLocalRunFile)] = value;
            }
        }

        /// <summary>
        /// The user who has the ssh identity registered for.
        /// </summary>
        public string Username
        {
            get
            {
                string username = this.Parameters.GetValue<string>(nameof(CudaAndNvidiaGPUDriverInstallation.Username), string.Empty);
                if (string.IsNullOrWhiteSpace(username))
                {
                    username = Environment.UserName;
                }

                return username;
            }
        }

        /// <summary>
        /// Executes CUDA and Nvidia GPU driver installation steps.
        /// </summary>
        /// <returns></returns>
        protected override async Task ExecuteAsync(EventContext telemetryContext, CancellationToken cancellationToken)
        {
            this.Logger.LogTraceMessage($"{this.TypeName}.ExecutionStarted", telemetryContext);

            bool isDriverInstalled = await this.CheckIfDriverInstalledAsync(telemetryContext, cancellationToken);

            if (isDriverInstalled == false)
            {
                if (this.Platform == PlatformID.Unix)
                {
                    LinuxDistributionInfo linuxDistributionInfo = await this.systemManager.GetLinuxDistributionAsync(cancellationToken)
                        .ConfigureAwait(false);

                    telemetryContext.AddContext("LinuxDistribution", linuxDistributionInfo.LinuxDistribution);

                    switch (linuxDistributionInfo.LinuxDistribution)
                    {
                        case LinuxDistribution.Ubuntu:
                        case LinuxDistribution.Debian:
                        case LinuxDistribution.CentOS7:
                        case LinuxDistribution.RHEL7:
                        case LinuxDistribution.RHEL8:
                        case LinuxDistribution.SUSE:
                            break;

                        default:
                            // different distro installation to be addded.
                            throw new WorkloadException(
                                $"CUDA and Nvidia GPU driver installation is not supported by Virtual Client on the current Linux distro '{linuxDistributionInfo.LinuxDistribution}'.",
                                ErrorReason.LinuxDistributionNotSupported);
                    }

                    await this.HoldKernelPackage(linuxDistributionInfo.LinuxDistribution, telemetryContext, cancellationToken)
                        .ConfigureAwait(false);

                    await this.InstallCudaAndDriversAsync(linuxDistributionInfo.LinuxDistribution, telemetryContext, cancellationToken)
                        .ConfigureAwait(false);
                }
                else if (this.Platform == PlatformID.Win32NT)
                {
                    await this.CudaAndNvidiaGPUDriverInstallationOnWindowsAsync(telemetryContext, cancellationToken)
                               .ConfigureAwait(false);
                }

                isDriverInstalled = await this.CheckIfDriverInstalledAsync(telemetryContext, cancellationToken);

                if (isDriverInstalled == false)
                {
                    throw new DependencyException("Failed to install NVIDIA driver");
                }

                VirtualClientRuntime.IsRebootRequested = this.RebootRequired;
            }

            this.Logger.LogTraceMessage($"{this.TypeName}.ExecutionCompleted", telemetryContext);
        }

        [SuppressMessage("StyleCop.CSharp.ReadabilityRules", "SA1118:Parameter should not span multiple lines", Justification = "Readability")]
        private async Task InstallCudaAndDriversAsync(LinuxDistribution linuxDistribution, EventContext telemetryContext, CancellationToken cancellationToken)
        {
            MetadataContract.Persist(
                new Dictionary<string, object>
                {
                    { "gpuVendor", "Nvidia" },
                    { "gpuDriverVersion_nvidia", this.DriverVersion },
                    { "cudaVersion", this.DriverVersion }
                },
                MetadataContractCategory.Dependencies,
                true);

            // The .bashrc file is used to define commands that should be run whenever the system
            // is booted. For the purpose of the CUDA driver installation, we want to include extra
            // paths in the $PATH environment variable post installation.
            string bashRcPath = $"/home/{this.Username}/.bashrc";

            // We hit a bug where the .bashrc file does not exist on the system. To prevent issues later
            // we are creating the file if it is missing.
            if (!this.fileSystem.File.Exists(bashRcPath))
            {
                await this.fileSystem.File.WriteAllLinesAsync(
                    bashRcPath,
                    new string[]
                    {
                        "# ~/.bashrc: executed by bash(1) for non-login shells.",
                        "# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)",
                        "# for examples"
                    },
                    cancellationToken);
            }

            // List<string> cleanupCommands = this.CleanupCommands(linuxDistribution);
            List<string> prerequisiteCommands = this.PrerequisiteCommands(linuxDistribution);
            List<string> installationCommands = this.VersionSpecificInstallationCommands(linuxDistribution);
            List<string> postInstallationCommands = this.PostInstallationCommands();

            List<List<string>> commandsLists = new List<List<string>>
            {
                // cleanup needs rebopot again, did not find any need of doing it as of now.
                // keeping the commands in here for reference in case we may need cleanup in future.
                // cleanupCommands,
                prerequisiteCommands,
                installationCommands,
                postInstallationCommands
            };

            foreach (var commandsList in commandsLists)
            {
                foreach (string command in commandsList)
                {
                    await this.ExecuteCommandAsync(command, null, Environment.CurrentDirectory, telemetryContext, cancellationToken, true)
                        .ConfigureAwait(false);
                }
            }
        }

        private List<string> CleanupCommands(LinuxDistribution linuxDistribution)
        {
            List<string> commands = new List<string>();

            switch (linuxDistribution)
            {
                case LinuxDistribution.Ubuntu:
                case LinuxDistribution.Debian:

                    commands.Add($"bash -c \"apt-get --purge remove \"*cuda*\" \"*cublas*\" \"*cufft*\" \"*cufile*\" \"*curand*\"" +
                        $" \"*cusolver*\" \"*cusparse*\" \"*gds-tools*\" \"*npp*\" \"*nvjpeg*\" \"nsight*\" 2>/dev/null || true\"");
                    commands.Add("bash -c \"apt-get --purge remove \"*nvidia*\" 2>/dev/null || true\"");
                    commands.Add("sudo apt-get autoremove");

                    break;

                case LinuxDistribution.RHEL7:
                case LinuxDistribution.CentOS7:

                    commands.Add($"bash -c \"yum remove \"cuda*\" \"*cublas*\" \"*cufft*\" \"*cufile*\" \"*curand*\"" +
                        $" \"*cusolver*\" \"*cusparse*\" \"*gds-tools*\" \"*npp*\" \"*nvjpeg*\" \"nsight*\" 2>/dev/null || true\"");
                    commands.Add("bash -c \"yum remove \"*nvidia*\" 2>/dev/null || true\"");

                    break;

                case LinuxDistribution.RHEL8:

                    commands.Add($"bash -c \"dnf remove \"cuda*\" \"*cublas*\" \"*cufft*\" \"*cufile*\" \"*curand*\" " +
                        $"\"*cusolver*\" \"*cusparse*\" \"*gds-tools*\" \"*npp*\" \"*nvjpeg*\" \"nsight*\" 2>/dev/null || true\"");
                    commands.Add("bash -c \"dnf module remove --all nvidia-driver 2>/dev/null || true\"");
                    commands.Add("sudo dnf module reset nvidia-driver");

                    break;

                case LinuxDistribution.SUSE:

                    commands.Add($"bash -c \"zypper remove \"cuda*\" \"*cublas*\" \"*cufft*\" \"*cufile*\" \"*curand*\"" +
                        $" \"*cusolver*\" \"*cusparse*\" \"*gds-tools*\" \"*npp*\" \"*nvjpeg*\" \"nsight*\" 2>/dev/null || true\"");
                    commands.Add("bash -c \"zypper remove \"*nvidia*\" 2>/dev/null || true\"");

                    break;
            }           

            return commands;
        }

        private List<string> PrerequisiteCommands(LinuxDistribution linuxDistribution)
        {
            List<string> commands = new List<string>();

            switch (linuxDistribution)
            {
                case LinuxDistribution.Ubuntu:
                case LinuxDistribution.Debian:

                    commands.Add("apt update");
                    commands.Add("apt install build-essential -yq");
                    break;

                case LinuxDistribution.CentOS7:
                case LinuxDistribution.CentOS8:
                case LinuxDistribution.RHEL7:
                    commands.Add("yum check-update");
                    commands.Add("dnf install make automake gcc gcc-c++ kernel-devel");
                    break;

                case LinuxDistribution.SUSE:
                    commands.Add("zypper refresh");
                    commands.Add("zypper info -t pattern devel_basis");
                    commands.Add("sudo zypper install -t pattern devel_basis");
                    break;
            }

            return commands;
        }

        private List<string> VersionSpecificInstallationCommands(LinuxDistribution linuxDistribution)
        {
            string runFileName = this.LinuxLocalRunFile.Split('/').Last();
            List<string> commands = new List<string>()
            {
                $"wget {this.LinuxLocalRunFile}",
                $"sh {runFileName} --silent"
            };

            switch (linuxDistribution)
            {
                case LinuxDistribution.Debian:
                case LinuxDistribution.Ubuntu:
                    commands.Add("apt update");
                    commands.Add("apt upgrade -y");
                    commands.Add($"apt install nvidia-driver-{this.DriverVersion} nvidia-dkms-{this.DriverVersion} -y");
                    commands.Add($"apt install cuda-drivers-fabricmanager-{this.DriverVersion} -y");

                    break;

                case LinuxDistribution.CentOS7:
                case LinuxDistribution.CentOS8:
                case LinuxDistribution.RHEL7:
                    commands.Add($"dnf module install nvidia-driver:{this.DriverVersion}/fm");
                    break;

                case LinuxDistribution.SUSE:
                    commands.Add($"zypper install cuda-drivers-fabricmanager-{this.DriverVersion}");
                    break;
            }
            
            return commands;
        }

        private List<string> PostInstallationCommands()
        {
            return new List<string>
            {
                $"bash -c \"echo 'export PATH=/usr/local/cuda-{this.LinuxCudaVersion}/bin${{PATH:+:${{PATH}}}}' | " +
                $"sudo tee -a /home/{this.Username}/.bashrc\"",

                $"bash -c \"echo 'export LD_LIBRARY_PATH=/usr/local/cuda-{this.LinuxCudaVersion}/lib64${{LD_LIBRARY_PATH:+:${{LD_LIBRARY_PATH}}}}' | " +
                $"sudo tee -a /home/{this.Username}/.bashrc\""
            };
        }

        private async Task CudaAndNvidiaGPUDriverInstallationOnWindowsAsync(EventContext telemetryContext, CancellationToken cancellationToken)
        {
            string installerPath = string.Empty;

            DependencyPath nvidiaDriverInstallerPackage = await this.packageManager.GetPackageAsync(this.PackageName, cancellationToken);

            MetadataContract.Persist(
                new Dictionary<string, object>
                {
                    { "package_nvidia_driver", this.PackageName }
                },
                MetadataContractCategory.Dependencies,
                true);

            if (this.fileSystem.Directory.GetFiles(nvidiaDriverInstallerPackage.Path, "*.exe", SearchOption.AllDirectories).Length > 0)
            {
                installerPath = this.fileSystem.Directory.GetFiles(nvidiaDriverInstallerPackage.Path, "*.exe", SearchOption.AllDirectories)[0];
            }
            else
            {
                throw new DependencyException($"The installer file was not found in the directory {nvidiaDriverInstallerPackage.Path}", ErrorReason.DependencyNotFound);
            }

            await this.ExecuteCommandAsync(installerPath, "-y -s", Environment.CurrentDirectory, telemetryContext, cancellationToken, true)
                .ConfigureAwait(false);
        }
    }
}
