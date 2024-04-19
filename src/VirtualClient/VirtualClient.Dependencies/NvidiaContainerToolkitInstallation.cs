// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace VirtualClient.Dependencies
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;
    using Microsoft.Extensions.DependencyInjection;
    using Polly;
    using VirtualClient.Common;
    using VirtualClient.Common.Extensions;
    using VirtualClient.Common.Telemetry;
    using VirtualClient.Contracts;

    /// <summary>
    /// Provides functionality for installing Nvidia container toolkit on linux.
    /// </summary>
    public class NvidiaContainerToolkitInstallation : VirtualClientComponent
    {
        private const string NvidiaContainerToolkit = "nvidia-container-toolkit";

        private ISystemManagement systemManager;

        /// <summary>
        /// Initializes a new instance of the <see cref="NvidiaContainerToolkitInstallation"/> class.
        /// </summary>
        /// <param name="dependencies">An enumeration of dependencies that can be used for dependency injection.</param>
        /// <param name="parameters">A series of key value pairs that dictate runtime execution.</param>
        public NvidiaContainerToolkitInstallation(IServiceCollection dependencies, IDictionary<string, IConvertible> parameters)
            : base(dependencies, parameters)
        {
            this.RetryPolicy = Policy.Handle<Exception>().WaitAndRetryAsync(5, (retries) => TimeSpan.FromSeconds(retries + 1));
            this.systemManager = dependencies.GetService<ISystemManagement>();
        }

        /// <summary>
        /// A policy that defines how the component will retry when
        /// it experiences transient issues.
        /// </summary>
        public IAsyncPolicy RetryPolicy { get; set; }

        /// <summary>
        /// Executes Nvidia container toolkit installation steps.
        /// </summary>
        /// <returns></returns>
        protected override async Task ExecuteAsync(EventContext telemetryContext, CancellationToken cancellationToken)
        {
            this.Logger.LogTraceMessage($"{this.TypeName}.ExecutionStarted", telemetryContext);

            if (this.Platform == PlatformID.Unix)
            {
                LinuxDistributionInfo distroInfo = await this.systemManager.GetLinuxDistributionAsync(cancellationToken)
                    .ConfigureAwait(false);

                telemetryContext.AddContext("linuxDistribution", distroInfo.LinuxDistribution);

                switch (distroInfo.LinuxDistribution)
                {
                    case LinuxDistribution.Ubuntu:
                    case LinuxDistribution.Debian:
                    case LinuxDistribution.CentOS8:
                    case LinuxDistribution.CentOS7:
                    case LinuxDistribution.RHEL7:
                    case LinuxDistribution.SUSE:
                        break;

                    default:
                        // different distro installation to be addded.
                        throw new WorkloadException(
                            $"Nvidia Container Toolkit Installation is not supported by Virtual Client on the current Linux distro '{distroInfo.LinuxDistribution}'",
                            ErrorReason.LinuxDistributionNotSupported);
                }

                bool isToolkitInstalled = await this.CheckIfNvidiaContainerToolkitInstalledAsync(distroInfo.LinuxDistribution, telemetryContext, cancellationToken);

                if (!isToolkitInstalled)
                {
                    await this.NvidiaContainerToolkitInstallationAsync(distroInfo.LinuxDistribution, telemetryContext, cancellationToken)
                            .ConfigureAwait(false);

                    isToolkitInstalled = await this.CheckIfNvidiaContainerToolkitInstalledAsync(distroInfo.LinuxDistribution, telemetryContext, cancellationToken);

                    if (isToolkitInstalled == false)
                    {
                        throw new DependencyException("Failed to install NVIDIA toolkit");
                    }
                }
            }
            else
            {
                // CUDA and Nvidia driver installation for other platforms to be added.
                throw new WorkloadException(
                    $"Nvidia Container Toolkit is not supported by Virtual Client on the current platform '{this.Platform}'.",
                    ErrorReason.PlatformNotSupported);
            }
        }

        private async Task NvidiaContainerToolkitInstallationAsync(LinuxDistribution linuxDistribution, EventContext telemetryContext, CancellationToken cancellationToken)
        {
            List<string> installationCommands = this.NvidiaContainerToolkitInstallationCommands(linuxDistribution);

            foreach (string command in installationCommands)
            {
                await this.ExecuteCommandAsync(command, null, Environment.CurrentDirectory, telemetryContext, cancellationToken, true)
                    .ConfigureAwait(false);
            }
        }

        private List<string> NvidiaContainerToolkitInstallationCommands(LinuxDistribution linuxDistribution)
        {
            List<string> commands = new List<string>();

            switch (linuxDistribution)
            {
                case LinuxDistribution.Ubuntu:
                case LinuxDistribution.Debian:

                    string setupCommand = "distribution=$(. /etc/os-release;echo $ID$VERSION_ID) && " +
                        "curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | " +
                        $"sudo gpg --dearmor -o /usr/share/keyrings/{NvidiaContainerToolkit}-keyring.gpg --yes --no-tty && " +
                        "curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list | " +
                        $"sed 's#deb https://#deb [signed-by=/usr/share/keyrings/{NvidiaContainerToolkit}-keyring.gpg] https://#g' |  " +
                        $"sudo tee /etc/apt/sources.list.d/{NvidiaContainerToolkit}.list";

                    commands.Add($"bash -c \"{setupCommand}\"");
                    commands.Add("apt-get update");
                    commands.Add("apt-get install -y nvidia-docker2");
                    commands.Add("systemctl restart docker");
                    
                    break;

                case LinuxDistribution.CentOS7:

                    setupCommand = "distribution=$(. /etc/os-release;echo $ID$VERSION_ID && " +
                        "curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.repo | " +
                        $"sudo tee /etc/yum.repos.d/{NvidiaContainerToolkit}.repo";

                    commands.Add($"bash -c \"{setupCommand}\"");
                    commands.Add("yum clean expire-cache");
                    commands.Add("yum install -y nvidia-docker2");
                    commands.Add("systemctl restart docker");

                    break;

                case LinuxDistribution.CentOS8:

                    setupCommand = "distribution=$(. /etc/os-release;echo $ID$VERSION_ID && " +
                        "curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.repo | " +
                        $"sudo tee /etc/yum.repos.d/{NvidiaContainerToolkit}.repo";

                    commands.Add($"bash -c \"{setupCommand}\"");
                    commands.Add("dnf clean expire-cache --refresh");
                    commands.Add("dnf install -y nvidia-docker2");
                    commands.Add("systemctl restart docker");

                    break;

                case LinuxDistribution.RHEL7:

                    setupCommand = "distribution=$(. /etc/os-release;echo $ID$VERSION_ID) " +
                        "&& curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.repo | " +
                        $"sudo tee /etc/yum.repos.d/{NvidiaContainerToolkit}.repo";

                    commands.Add($"bash -c \"{setupCommand}\"");
                    commands.Add("yum clean expire-cache");
                    commands.Add($"yum install {NvidiaContainerToolkit} -y");
                    commands.Add("systemctl restart docker");

                    break;

                case LinuxDistribution.SUSE:

                    setupCommand = "distribution=$(. /etc/os-release;echo $ID$VERSION_ID) &&" +
                        " sudo zypper ar https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.repo";

                    commands.Add($"bash -c \"{setupCommand}\"");
                    commands.Add("zypper refresh");
                    commands.Add("zypper install -y nvidia-docker2");
                    commands.Add("systemctl restart docker");

                    break;
            }

            return commands;
        }

        private async Task<bool> CheckIfNvidiaContainerToolkitInstalledAsync(LinuxDistribution linuxDistribution, EventContext telemetryContext, CancellationToken cancellationToken)
        {
            string unixCommand = string.Empty;

            switch (linuxDistribution)
            {
                case LinuxDistribution.Ubuntu:
                    unixCommand = $"dpkg -l | grep -i \"{NvidiaContainerToolkit}\"";
                    break;
                case LinuxDistribution.Debian:
                    unixCommand = $"dpkg -l | grep \"{NvidiaContainerToolkit}\"";
                    break;
                case LinuxDistribution.CentOS8:
                case LinuxDistribution.CentOS7:
                case LinuxDistribution.RHEL7:
                    unixCommand = $"yum list installed | \"grep {NvidiaContainerToolkit}\"";
                    break;
                case LinuxDistribution.SUSE:
                    unixCommand = $"zypper se -i | \"grep {NvidiaContainerToolkit}\"";
                    break;

                default:
                    return false;
            }

            string executeCommand = $"bash -c \"{unixCommand}\"";

            var process = await this.ExecuteCommandAsync(executeCommand, null, Environment.CurrentDirectory, telemetryContext, cancellationToken, true)
                .ConfigureAwait(false);

            if (ProcessProxy.DefaultSuccessCodes.Contains(process.ExitCode))
            {
                string output = process.StandardOutput.ToString();
                this.Logger.LogSystemEvents($"NVIDIA toolkit detected: {output}", new Dictionary<string, object> { { "NvidiaToolkit", output } }, telemetryContext);

                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
