using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Polly;
using VirtualClient.Common;
using VirtualClient.Common.Extensions;
using VirtualClient.Common.Telemetry;
using VirtualClient.Contracts;

namespace VirtualClient.Dependencies
{
    /// <summary>
    /// Provides functionality for installing Nvidia GPU driver.
    /// </summary>
    public abstract class NvidiaGPUDriverInstallation : VirtualClientComponent
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NvidiaGPUDriverInstallation"/> class.
        /// </summary>
        /// <param name="dependencies"></param>
        /// <param name="parameters"></param>
        public NvidiaGPUDriverInstallation(IServiceCollection dependencies, IDictionary<string, IConvertible> parameters = null)
            : base(dependencies, parameters)
        {
            this.RetryPolicy = Policy.Handle<Exception>().WaitAndRetryAsync(5, (retries) => TimeSpan.FromSeconds(retries + 1));
        }

        /// <summary>
        /// A policy that defines how the component will retry when
        /// it experiences transient issues.
        /// </summary>
        public IAsyncPolicy RetryPolicy { get; set; }

        /// <summary>
        /// The version of GPU driver to be installed.
        /// </summary>
        public string DriverVersion
        {
            get
            {
                return this.Parameters.GetValue<string>(nameof(NvidiaGPUDriverInstallation.DriverVersion), string.Empty);
            }

            set
            {
                this.Parameters[nameof(NvidiaGPUDriverInstallation.DriverVersion)] = value;
            }
        }

        /// <summary>
        /// Determines whether Reboot is required or not after Driver installation.
        /// </summary>
        public bool RebootRequired
        {
            get
            {
                switch (this.Platform)
                {
                    case PlatformID.Unix:
                    case PlatformID.Win32NT:
                        return this.Parameters.GetValue<bool>(nameof(NvidiaGPUDriverInstallation.RebootRequired), false);

                    default:
                        return this.Parameters.GetValue<bool>(nameof(NvidiaGPUDriverInstallation.RebootRequired), true);
                }
            }
        }

        /// <summary>
        /// Checks if Nvidia driver is installed and logs its version.
        /// </summary>
        /// <param name="telemetryContext"></param>
        /// <param name="cancellationToken"></param>
        /// <returns>A <see cref="Task{TResult}"/> representing the result of the asynchronous operation.</returns>
        protected async Task<bool> CheckIfDriverInstalledAsync(EventContext telemetryContext, CancellationToken cancellationToken)
        {
            string nvidiaSMICommand = "nvidia-smi --query-gpu=driver_version --format=csv,noheader";
            string driverVersionCommand = this.Platform == PlatformID.Unix ? $"-c \"{nvidiaSMICommand}\"" : nvidiaSMICommand;
            string shell = this.Platform == PlatformID.Unix ? "bash" : "powershell";

            var process = await this.ExecuteCommandAsync(shell, driverVersionCommand, Environment.CurrentDirectory, telemetryContext, cancellationToken, true)
                .ConfigureAwait(false);

            if (ProcessProxy.DefaultSuccessCodes.Contains(process.ExitCode))
            {
                string driverVersion = process.StandardOutput.ToString().Trim();
                if (driverVersion != (this.DriverVersion))
                {
                    this.Logger.LogWarning($"NVIDIA driver version mismatch: NVIDIA driver {driverVersion} installed mismatches tested driver version {this.DriverVersion}");
                }

                // Always log the current driver version to Events for telemetry purposes.
                this.Logger.LogSystemEvents($"NVIDIA driver {driverVersion} detected", new Dictionary<string, object> { { "DriverVersion", process.StandardOutput.ToString().Trim() } }, telemetryContext);

                return true;
            }
            else
            {
                return false;
            }
        }

        /// <summary>
        /// Prevents apt update commands from updating Linux kernel
        /// </summary>
        /// <param name="linuxDistribution"></param>
        /// <param name="telemetryContext"></param>
        /// <param name="cancellationToken"></param>
        /// <returns>A <see cref="Task"/> representing the result of the asynchronous operation.</returns>
        protected async Task HoldKernelPackage(LinuxDistribution linuxDistribution, EventContext telemetryContext, CancellationToken cancellationToken)
        {
            string command = string.Empty;

            switch (linuxDistribution)
            {
                case LinuxDistribution.Ubuntu:
                    command = "apt-mark hold";
                    break;

                case LinuxDistribution.CentOS7:
                case LinuxDistribution.CentOS8:
                case LinuxDistribution.RHEL7:
                case LinuxDistribution.RHEL8:
                    command = "dnf versionlock add";
                    break;
            }

            var process = await this.ExecuteCommandAsync("bash -c \"uname -r\"", null, Environment.CurrentDirectory, telemetryContext, cancellationToken, true)
                .ConfigureAwait(false);

            string kernelVersion = process.StandardOutput.ToString().Trim();

            await this.ExecuteCommandAsync($"bash -c \"{command} linux-image-{kernelVersion}\"", null, Environment.CurrentDirectory, telemetryContext, cancellationToken, true)
                .ConfigureAwait(false);

            await this.ExecuteCommandAsync($"bash -c \"{command} linux-headers-{kernelVersion}\"", null, Environment.CurrentDirectory, telemetryContext, cancellationToken, true)
                .ConfigureAwait(false);
        }

        /// <summary>
        /// Driver installation steps are implemented in derived classes.
        /// </summary>
        /// <returns></returns>
        protected abstract override Task ExecuteAsync(EventContext telemetryContext, CancellationToken cancellationToken);
    }
}
