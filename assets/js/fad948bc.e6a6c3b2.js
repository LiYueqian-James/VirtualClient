"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[1088],{7393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(4848),o=t(8453);const i={},r="Data/Telemetry Support",s={id:"guides/0040-telemetry",title:"Data/Telemetry Support",description:"The Virtual Client emits a range of different types of data/telemetry as part of the execution of workload and monitoring",source:"@site/docs/guides/0040-telemetry.md",sourceDirName:"guides",slug:"/guides/0040-telemetry",permalink:"/VirtualClient/docs/guides/0040-telemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/guides/0040-telemetry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Run Commercial Workloads: Bring Your Own Package",permalink:"/VirtualClient/docs/guides/0030-commercial-workloads"},next:{title:"Usage: Command Line Examples",permalink:"/VirtualClient/docs/guides/0200-usage-examples"}},l={},c=[{value:"Categories of Data",id:"categories-of-data",level:2},{value:"Log Files",id:"log-files",level:2},{value:"Metadata Contract",id:"metadata-contract",level:2},{value:"Larger-Scale Scenarios",id:"larger-scale-scenarios",level:2},{value:"Azure Event Hubs Support",id:"azure-event-hubs-support",level:3},{value:"Azure Storage Account Support",id:"azure-storage-account-support",level:3}];function m(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"datatelemetry-support",children:"Data/Telemetry Support"}),"\n",(0,a.jsx)(n.p,{children:"The Virtual Client emits a range of different types of data/telemetry as part of the execution of workload and monitoring\nprofiles. This data/telemetry might for example include measurements/metrics emitted by a particular workload, performance counters\nor just common tracing/logging output. This data is useful for using the Virtual Client as a platform for evaluating performance\nof a system while under test."}),"\n",(0,a.jsx)(n.h2,{id:"categories-of-data",children:"Categories of Data"}),"\n",(0,a.jsx)(n.p,{children:"Telemetry data emitted is divided into 3 different categories:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Logs/Traces"}),(0,a.jsx)(n.br,{}),"\n","The Virtual Client is heavily instrumented with structured logging/tracing logic. This ensures that the inner workings of the application can\nare easily visible to the user. This is particularly important for debugging scenarios. Errors experienced by the application are captured here\nas well and will contain detailed error + callstack information."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Workload and System Metrics"}),(0,a.jsx)(n.br,{}),"\n","Workload metrics are measurements and information captured from the output of a particular workload (e.g. DiskSpd, FIO, GeekBench) that represent\nperformance data from the system under test. Performance counters for example provide measurements from the system as-a-whole and are useful for determining exactly how the resources (e.g. CPU, memory, I/O, network)\nwere used during the execution of a workload."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"System Events"}),(0,a.jsx)(n.br,{}),"\n","System events describe certain types of important information on the system beyond simple performance measurements. This might for example\ninclude Windows registry changes or special event logs."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"log-files",children:"Log Files"}),"\n",(0,a.jsxs)(n.p,{children:["The Virtual Client emits ALL data/telemetry captured from workloads, monitors and from the system to standard log files. Log files can be found\nin the ",(0,a.jsx)(n.strong,{children:"logs"})," directory within the Virtual Client application's parent directory itself. Logs are separated into the following categories:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Traces"}),(0,a.jsx)(n.br,{}),"\n","operational traces about everything the Virtual Client is doing while running useful for debugging/triage purposes."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Metrics"}),(0,a.jsx)(n.br,{}),"\n","Important measurements captured from the workload and the system that can be used to analyze the performance and reliability of the workload and correspondingly\nthe system on which it is running."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Counters"}),(0,a.jsx)(n.br,{}),"\n","Similar to metrics capturing important measurements from the system itself that can be used to analyze the performance, reliability and resource usage on the system\nwhile the workload is running."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"metadata-contract",children:"Metadata Contract"}),"\n",(0,a.jsx)(n.p,{children:'Within the different categories of data emitted by the Virtual Client (as noted above), the Virtual Client includes a range of different metadata about the\nsystem and runtime context as it runs. This "metadata contract" is divided into a few different categories of metadata by default. The following section describes\nthose categories and illustrates examples of the structure of the telemetry messages emitted.'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"User-Defined Metadata"}),"\nMetadata that is supplied by the user on the command line (e.g. --metadata",":Prop1",'=Value1) will be included in the output of telemetry within the "metadata" section\nof the telemetry structure.']}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Dependency Metadata"}),(0,a.jsx)(n.br,{}),"\n","Dependency metadata describes different dependencies that were required/used during the execution of the Virtual Client. This information might for example include packages\nthat were downloaded or installed on the system."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Host/OS Metadata"}),(0,a.jsx)(n.br,{}),"\n",'Host metadata includes information about the host, the operating system and the hardware for the system in which Virtual Client is running. This information is included in the\n"metadata_host" section of the telemetry structure.']}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Runtime Metadata"}),(0,a.jsx)(n.br,{}),"\n",'Runtime metadata describes the instructions provided to the Virtual Client on the command line and aspects that are specific to the running instance of the application.\nThis information is included in the "metadata_runtime" section of the telemetry structure.']}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Scenario Metadata"}),"\nScenario metadata is information specific to a given component within a Virtual Client profile. This might include the parameters for a action, monitor or dependency component.\nIt might include installed compiler versions, the names of tools executed and their command line arguments or supplemental information in the context of a workload that is running.\nDevelopers onboarding components to the Virtual Client have the option to add additional scenario-specific metadata as is desirable to provide rich context to the\nexecution of workloads and monitors."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example Metadata/Telemetry from Physical System"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "timestamp": "2023-08-07T17:52:51.6630597Z",\n  "level": "Information",\n  "message": "OpenSSL.ScenarioResult",\n  "customDimensions": {\n      "appPlatformVersion": "1.6.0.0",\n      "appVersion": "1.6.0.0",\n      "clientId": "longrun",\n      "executionProfileName": "PERF-CPU-OPENSSL.json",\n      "executionProfilePath": "S:\\\\Debug\\\\PERF-CPU-OPENSSL.json",\n      "executionSystem": null,\n      "experimentId": "dbd29735-589d-4f15-adc7-2f1ec3991f03",\n      "metricCategorization": "",\n      "metricDescription": "",\n      "metricMetadata": {},\n      "metricName": "md5 16-byte",\n      "metricRelativity": "HigherIsBetter",\n      "metricUnit": "kilobytes/sec",\n      "metricValue": 39359.36,\n      "platformArchitecture": "win-x64",\n      "scenarioArguments": "S:\\\\VirtualClient\\\\content\\\\win-x64\\\\packages\\\\openssl.3.0.0\\\\win-x64\\\\bin\\\\openssl.exe speed -elapsed -seconds 100 md5",\n      "scenarioEndTime": "2023-08-08T00:52:51.6232956Z",\n      "scenarioName": "OpenSSL Speed",\n      "scenarioStartTime": "2023-08-08T00:52:21.4592999Z",\n      "tags": "CPU,OpenSSL,Cryptography",\n      "toolName": "OpenSSL",\n      "toolVersion": "",\n      "metadata": {\n          "experimentId": "dbd29735-589d-4f15-adc7-2f1ec3991f03",\n          "agentId": "LONGRUN"\n      },\n      "metadata_dependencies": {\n          "package_openssl": "openssl.3.0.0.zip"\n      },\n      "metadata_host": {\n          "computerName": "LONGRUN",\n          "cpuArchitecture": "X64",\n          "cpuSockets": 1,\n          "cpuPhysicalCores": 4,\n          "cpuPhysicalCoresPerSocket": 4,\n          "cpuLogicalProcessors": 8,\n          "cpuLogicalProcessorsPerCore": 8,\n          "cpuCacheBytes_L1d": 131072,\n          "cpuCacheBytes_L1i": 131072,\n          "cpuCacheBytes_L1": 262144,\n          "cpuCacheBytes_L2": 1048576,\n          "cpuCacheBytes_L3": 8388608,\n          "cpuLastCacheBytes": 8388608,\n          "memoryBytes": 17179869184,\n          "numaNodes": 0,\n          "osFamily": "Windows",\n          "osName": "Windows",\n          "osDescription": "Microsoft Windows NT 10.0.19045.0",\n          "osVersion": "10.0.19045.0",\n          "osPlatformArchitecture": "win-x64",\n          "parts": [\n              {\n                  "type": "CPU",\n                  "vendor": "Intel",\n                  "description": "Intel64 Family 6 Model 142 Stepping 11, GenuineIntel",\n                  "family": "6",\n                  "model": "Intel(R) Core(TM) i7-8565U CPU @ 1.80GHz",\n                  "stepping": "11",\n              },\n              {\n                  "type": "Memory",\n                  "vendor": "SK Hynix",\n                  "description:": "SK Hynix HMA81GS6JJR8N-VK"\n                  "bytes": 8589934592,\n                  "speed": 2400,\n                  "partNumber": "HMA81GS6JJR8N-VK"\n              },\n              {\n                  "type": "Memory",\n                  "vendor": "SK Hynix",\n                  "description:": "SK Hynix HMA81GS6JJR8N-VK"\n                  "bytes": 8589934592,\n                  "speed": 2400,\n                  "partNumber": "HMA81GS6JJR8N-VK"\n              },\n              {\n                  "type": "Network",\n                  "vendor": "Intel",\n                  "description": "Intel(R) Wireless-AC 9560 160MHz"\n              },\n              {\n                  "type": "Network",\n                  "vendor": "Realtek",\n                  "description": "Realtek PCIe GBE Family Controller"\n              }\n          ]\n      },\n      "metadata_runtime": {\n          "exitWait": "00:30:00",\n          "layout": null,\n          "logToFile": false,\n          "iterations": 2,\n          "profiles": "PERF-CPU-OPENSSL.json",\n          "timeout": null,\n          "timeoutScope": null,\n          "scenarios": null\n      },\n      "metadata_scenario": {\n          "scenario": "MD5",\n          "packageName": "openssl",\n          "extract": "True",\n          "monitorFrequency": "12:00:00",\n          "monitorWarmupPeriod": "00:05:00",\n          "commandArguments": "speed -elapsed -seconds 100 md5",\n          "tags": "CPU,OpenSSL,Cryptography",\n          "profileIteration": 1,\n          "profileIterationStartTime": "2023-08-08T00:52:20.7673266Z",\n          "toolName": "OpenSSL Speed",\n          "toolArguments": "S:\\\\VirtualClient\\\\content\\\\win-x64\\\\packages\\\\openssl.3.0.0\\\\win-x64\\\\bin\\\\openssl.exe speed -elapsed -seconds 100 md5",\n          "toolVersion": null,\n          "packageVersion": "3.0.0"\n      }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example Metadata/Telemetry from Physical System"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "timestamp": "2023-08-07T17:52:51.6630597Z",\n  "level": "Information",\n  "message": "OpenSSL.ScenarioResult",\n  "customDimensions": {\n      "appPlatformVersion": "1.6.0.0",\n      "appVersion": "1.6.0.0",\n      "clientId": "longrun",\n      "executionProfileName": "PERF-CPU-OPENSSL.json",\n      "executionProfilePath": "S:\\\\Debug\\\\PERF-CPU-OPENSSL.json",\n      "executionSystem": null,\n      "experimentId": "dbd29735-589d-4f15-adc7-2f1ec3991f03",\n      "metricCategorization": "",\n      "metricDescription": "",\n      "metricMetadata": {},\n      "metricName": "md5 16-byte",\n      "metricRelativity": "HigherIsBetter",\n      "metricUnit": "kilobytes/sec",\n      "metricValue": 39359.36,\n      "platformArchitecture": "win-x64",\n      "scenarioArguments": "/home/user/VirtualClient/packages/openssl.3.0.0/linux-x64/bin/openssl speed -multi 4 -elapsed -seconds 100 md5",\n      "scenarioEndTime": "2023-08-08T00:52:51.6232956Z",\n      "scenarioName": "OpenSSL Speed",\n      "scenarioStartTime": "2023-08-08T00:52:21.4592999Z",\n      "tags": "CPU,OpenSSL,Cryptography",\n      "toolName": "OpenSSL",\n      "toolVersion": "",\n      "metadata": {\n          "experimentId": "dbd29735-589d-4f15-adc7-2f1ec3991f03",\n          "agentId": "LONGRUN"\n      },\n      "metadata_dependencies": {\n          "package_openssl": "openssl.3.0.0.zip"\n      },\n      "metadata_host": {\n          "computerName": "Linux-Host",\n          "osFamily": "Unix",\n          "osName": "Ubuntu",\n          "osDescription": "Unix 4.15.0.140",\n          "osVersion": "4.15.0.140",\n          "osPlatformArchitecture": "linux-x64",\n          "cpuArchitecture": "X64",\n          "cpuSockets": 1,\n          "cpuPhysicalCores": 4,\n          "cpuPhysicalCoresPerSocket": 4,\n          "cpuLogicalProcessors": 4,\n          "cpuLogicalProcessorsPerCore": 4,\n          "numaNodes": 1,\n          "cpuCacheBytes_L1d": 32768,\n          "cpuCacheBytes_L1i": 32768,\n          "cpuCacheBytes_L1": 65536,\n          "cpuCacheBytes_L2": 2097152,\n          "cpuLastCacheBytes": 2097152,\n          "memoryBytes": 8589934592,\n          "parts": [\n              {\n                  "type": "CPU",\n                  "vendor": "AMD",\n                  "description": "AMD A8-7410 APU with AMD Radeon R5 Graphics Family 22 Model 48 Stepping 1, AuthenticAMD",\n                  "family": "22",\n                  "model": "AMD A8-7410 APU with AMD Radeon R5 Graphics",\n                  "stepping": "1",\n              },\n              {\n                  "type": "Memory",\n                  "vendor": "Micron",\n                  "description": "Micron, 16KTF1G64HZ-1G9P1",\n                  "bytes": 8589934592,\n                  "speed": 1866,\n                  "partNumber": "16KTF1G64HZ-1G9P1"\n              },\n              {\n                  "type": "Network",\n                  "vendor": "Realtek",\n                  "description": "Realtek Semiconductor Co., Ltd. RTL8188EE Wireless Network Adapter (rev 01)"\n              },\n              {\n                  "type": "Network",\n                  "vendor": "Realtek",\n                  "description": "Realtek Semiconductor Co., Ltd. RTL810xE PCI Express Fast Ethernet controller (rev 07)"\n              }\n          ]\n      },\n      "metadata_runtime": {\n          "exitWait": "00:30:00",\n          "layout": null,\n          "logToFile": false,\n          "iterations": 2,\n          "profiles": "PERF-CPU-OPENSSL.json",\n          "timeout": null,\n          "timeoutScope": null,\n          "scenarios": null\n      },\n      "metadata_scenario": {\n          "scenario": "MD5",\n          "packageName": "openssl",\n          "extract": "True",\n          "monitorFrequency": "12:00:00",\n          "monitorWarmupPeriod": "00:05:00",\n          "commandArguments": "speed -elapsed -seconds 100 md5",\n          "tags": "CPU,OpenSSL,Cryptography",\n          "profileIteration": 1,\n          "profileIterationStartTime": "2023-08-08T00:52:20.7673266Z",\n          "toolName": "OpenSSL Speed",\n          "toolArguments": "/home/user/VirtualClient/packages/openssl.3.0.0/linux-x64/bin/openssl speed -multi 4 -elapsed -seconds 100 md5",\n          "toolVersion": null,\n          "packageVersion": "3.0.0"\n      }\n   }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example Metadata/Telemetry from Virtual Machine System"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "timestamp": "2023-08-10T22:34:41.4831010Z",\n  "level": "Information",\n  "message": "OpenSSL.ScenarioResult",\n  "customDimensions": {\n      "appPlatformVersion": "0.0.1.0",\n      "appVersion": "1.7.02377.1059",\n      "clientId": "demo-vm02",\n      "executionProfileName": "PERF-CPU-OPENSSL.json",\n      "executionProfilePath": "/home/junovmadmin/VirtualClient/content/linux-x64/profiles/PERF-CPU-OPENSSL.json",\n      "executionSystem": null,\n      "experimentId": "416dccea-1745-4c13-9a5d-558e87aea533",\n      "metricCategorization": "",\n      "metricDescription": "",\n      "metricMetadata": {},\n      "metricName": "md5 256-byte",\n      "metricRelativity": "HigherIsBetter",\n      "metricUnit": "kilobytes/sec",\n      "metricValue": 468409.66,\n      "platformArchitecture": "linux-x64",\n      "scenarioArguments": "speed -multi 2 -elapsed -seconds 100 md5",\n      "scenarioEndTime": "2023-08-10T22:34:41.4631165Z",\n      "scenarioName": "OpenSSL Speed",\n      "scenarioStartTime": "2023-08-10T22:24:41.4456628Z",\n      "tags": "CPU,OpenSSL,Cryptography",\n      "toolName": "OpenSSL",\n      "toolResults": "",\n      "toolVersion": "",\n      "metadata": {\n          "experimentId": "416dccea-1745-4c13-9a5d-558e87aea533",\n          "agentId": "demo-vm02"\n      },\n      "metadata_dependencies": { \n          "package_openssl": "openssl.3.0.0.zip"\n      },\n      "metadata_host": {\n          "computerName": "demo-vm02",\n          "osFamily": "Unix",\n          "osName": "Ubuntu",\n          "osDescription": "Unix 5.15.0.1041",\n          "osVersion": "5.15.0.1041",\n          "osPlatformArchitecture": "linux-x64",\n          "cpuArchitecture": "X64",\n          "cpuSockets": 1,\n          "cpuPhysicalCores": 1,\n          "cpuPhysicalCoresPerSocket": 1,\n          "cpuLogicalProcessors": 2,\n          "cpuLogicalProcessorsPerCore": 2,\n          "numaNodes": 1,\n          "cpuCacheBytes_L1i": 32768,\n          "cpuCacheBytes_L1d": 49152,\n          "cpuCacheBytes_L1": 81920,\n          "cpuCacheBytes_L3": 50331648,\n          "cpuLastCacheBytes": 50331648,\n          "memoryBytes": 8078536,\n          "parts": [\n              {\n                  "type": "CPU",\n                  "vendor": "Intel",\n                  "description": "Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz Family 6 Model 106 Stepping 6, GenuineIntel",\n                  "family": "6",\n                  "model": "Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz",\n                  "stepping": "6",\n              },\n              {\n                  "type": "Network",\n                  "vendor": "Mellanox",\n                  "description": "Mellanox Technologies MT27800 Family [ConnectX-5 Virtual Function] (rev 80)"\n              }\n          ]\n      },\n      "metadata_runtime": {\n          "exitWait": "00:30:00",\n          "layout": null,\n          "logToFile": false,\n          "iterations": 3,\n          "profiles": "PERF-CPU-OPENSSL.json",\n          "timeout": null,\n          "timeoutScope": null,\n          "scenarios": null\n      },\n      "metadata_scenario": {\n          "scenario": "MD5",\n          "commandArguments": "speed -elapsed -seconds 100 md5",\n          "packageName": null,\n          "tags": "CPU,OpenSSL,Cryptography",\n          "profileIteration": 1,\n          "profileIterationStartTime": "2023-08-10T22:24:41.4182226Z",\n          "toolName": "OpenSSL Speed",\n          "toolArguments": "/home/junovmadmin/VirtualClient/content/linux-x64/packages/openssl.3.0.0/linux-x64/bin/openssl speed -multi 2 -elapsed -seconds 100 md5",\n          "toolVersion": null,\n          "packageVersion": null\n      }\n   }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example Metadata/Telemetry from Virtual Machine System"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "timestamp": "2023-08-08T23:51:19.0305451Z",\n  "level": "Information",\n  "message": "CoreMark.ScenarioResult",\n  "customDimensions": {\n      "appPlatformVersion": "0.0.1.0",\n      "appVersion": "1.7.02377.1059",\n      "clientId": "demo-vm02",\n      "executionProfileName": "PERF-CPU-COREMARK.json",\n      "executionProfilePath": "/home/junovmadmin/VirtualClient/content/linux-x64/profiles/PERF-CPU-COREMARK.json",\n      "executionSystem": null,\n      "experimentId": "6d87917a-abd4-4cdc-aa89-58ead3fa5c66",\n      "metricCategorization": "",\n      "metricDescription": "",\n      "metricMetadata": {},\n      "metricName": "Iterations/Sec",\n      "metricRelativity": "HigherIsBetter",\n      "metricUnit": "iterations/sec",\n      "metricValue": 25151.959757,\n      "platformArchitecture": "linux-x64",\n      "scenarioArguments": "XCFLAGS=\\"-DMULTITHREAD=2 -DUSE_PTHREAD\\" REBUILD=1 LFLAGS_END=-pthread",\n      "scenarioEndTime": "2023-08-08T23:51:19.0036861Z",\n      "scenarioName": "CoreMark",\n      "scenarioStartTime": "2023-08-08T23:50:18.3523003Z",\n      "tags": "",\n      "toolName": "CoreMark",\n      "toolVersion": "",\n      "metadata": {\n          "experimentId": "6d87917a-abd4-4cdc-aa89-58ead3fa5c66",\n          "agentId": "demo-vm02"\n      },\n      "metadata_dependencies": {\n          "compilerVersion_cc":"10.5.0",\n          "compilerVersion_gcc":"10.5.0",\n          "compilerVersion_gfortran":"10.5.0",\n      },\n      "metadata_host": {\n          "computerName": "demo-vm02",\n          "cpuArchitecture": "X64",\n          "cpuSockets": 1,\n          "cpuPhysicalCores": 1,\n          "cpuPhysicalCoresPerSocket": 1,\n          "cpuLogicalProcessors": 2,\n          "cpuLogicalProcessorsPerCore": 2,\n          "cpuCacheBytes_L1i": 32768,\n          "cpuCacheBytes_L1d": 49152,\n          "cpuCacheBytes_L1": 81920,\n          "cpuCacheBytes_L3": 50331648,\n          "cpuLastCacheBytes": 50331648,\n          "memoryBytes": 8078536,\n          "numaNodes": 1,\n          "osFamily": "Unix",\n          "osName": "Ubuntu",\n          "osDescription": "Unix 5.15.0.1041",\n          "osVersion": "5.15.0.1041",\n          "osPlatformArchitecture": "linux-x64",\n          "parts": [\n              {\n                  "type": "CPU",\n                  "vendor": "Intel",\n                  "description": "Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz Family 6 Model 106 Stepping 6, GenuineIntel",\n                  "family": "6",\n                  "model": "Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz",\n                  "stepping": "6",\n              },\n              {\n                  "type": "Network",\n                  "vendor": "Mellanox",\n                  "description": "Mellanox Technologies MT27800 Family [ConnectX-5 Virtual Function] (rev 80)"\n              }\n          ]\n      },\n      "metadata_runtime": {\n          "exitWait": "00:30:00",\n          "layout": null,\n          "logToFile": false,\n          "iterations": 3,\n          "profiles": "PERF-CPU-COREMARK.json,",\n          "timeout": null,\n          "timeoutScope": null,\n          "scenarios": null\n      },\n      "metadata_scenario": {\n          "scenario": "ExecuteCoremarkBenchmark",\n          "packageName": "coremark",\n          "threadCount": null,\n          "profileIteration": 1,\n          "profileIterationStartTime": "2023-08-08T23:50:18.3340033Z",\n          "toolName": "CoreMark",\n          "toolArguments": "XCFLAGS=\\"-DMULTITHREAD=2 -DUSE_PTHREAD\\" REBUILD=1 LFLAGS_END=-pthread",\n          "toolVersion": null,\n          "packageVersion": null\n      }\n   }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example Metadata/Telemetry from Virtual Machine System"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "timestamp": "2023-08-08T23:51:19.0305451Z",\n  "level": "Information",\n  "message": "Superbench.ScenarioResult",\n  "customDimensions": {\n      "appPlatformVersion": "0.0.1.0",\n      "appVersion": "1.7.02377.1059",\n      "clientId": "demo-vm02",\n      "executionProfileName": "PERF-GPU-SUPERBENCH.json",\n      "executionProfilePath": "/home/junovmadmin/VirtualClient/content/linux-x64/profiles/PERF-GPU-SUPERBENCH.json",\n      "executionSystem": null,\n      "experimentId": "6d87917a-abd4-4cdc-aa89-58ead3fa5c66",\n      "metricCategorization": "default.yaml",\n      "metricDescription": "",\n      "metricMetadata": {},\n      "metricName": "resnet_models/pytorch-resnet101/fp16_train_step_time",\n      "metricRelativity": "Undefined",\n      "metricUnit": "",\n      "metricValue": "576.05609750747681",\n      "operatingSystemPlatform": "Unix",\n      "platformArchitecture": "linux-x64",\n      "profileFriendlyName": "SuperBenchmark GPU Performance Workload",\n      "scenarioArguments": "run --host-list localhost -c default.yaml",\n      "scenarioEndTime": "2023-08-16T03:52:31.1568631Z",\n      "scenarioName": "SuperBenchmark",\n      "scenarioStartTime": "2023-08-16T03:19:56.9093053Z",\n      "tags": "",\n      "toolName": "SuperBenchmark",\n      "toolVersion": ""\n      "metadata": {\n          "experimentId": "6d87917a-abd4-4cdc-aa89-58ead3fa5c66",\n          "agentId": "demo-vm02"\n      },\n      "metadata_dependencies": { \n          "gpuVendor": "Nvidia",\n          "gpuDriverVersion": "525",\n          "cudaVersion": "12.0",\n      },\n      "metadata_host": {\n          "computerName": "demo-vm02",\n          "cpuArchitecture": "X64",\n          "cpuSockets": 1,\n          "cpuPhysicalCores": 1,\n          "cpuPhysicalCoresPerSocket": 1,\n          "cpuLogicalProcessors": 2,\n          "cpuLogicalProcessorsPerCore": 2,\n          "cpuCacheBytes_L1i": 32768,\n          "cpuCacheBytes_L1d": 49152,\n          "cpuCacheBytes_L1": 81920,\n          "cpuCacheBytes_L3": 50331648,\n          "cpuLastCacheBytes": 50331648,\n          "memoryBytes": 8078536,\n          "numaNodes": 1,\n          "osFamily": "Unix",\n          "osName": "Ubuntu",\n          "osDescription": "Unix 5.15.0.1041",\n          "osVersion": "5.15.0.1041",\n          "osPlatformArchitecture": "linux-x64",\n          "parts": [\n              {\n                  "type": "CPU",\n                  "vendor": "Intel",\n                  "description": "Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz Family 6 Model 106 Stepping 6, GenuineIntel",\n                  "family": "6",\n                  "model": "Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz",\n                  "stepping": "6",\n              },\n              {\n                  "type": "Network",\n                  "vendor": "Mellanox",\n                  "description": "Mellanox Technologies MT27800 Family [ConnectX-5 Virtual Function] (rev 80)"\n              }\n          ]\n      },\n      "metadata_runtime": {\n          "exitWait": "00:30:00",\n          "layout": null,\n          "logToFile": false,\n          "iterations": 3,\n          "profiles": "PERF-GPU-SUPERBENCH.json,",\n          "timeout": null,\n          "timeoutScope": null,\n          "scenarios": null\n      },\n      "metadata_scenario": {\n          "scenario": "ExecuteCoremarkBenchmark",\n          "packageName": "coremark",\n          "threadCount": null,\n          "profileIteration": 1,\n          "profileIterationStartTime": "2023-08-08T23:50:18.3340033Z",\n          "toolName": "CoreMark",\n          "toolArguments": "XCFLAGS=\\"-DMULTITHREAD=2 -DUSE_PTHREAD\\" REBUILD=1 LFLAGS_END=-pthread",\n          "toolVersion": null,\n          "packageVersion": null\n      }\n   }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"larger-scale-scenarios",children:"Larger-Scale Scenarios"}),"\n",(0,a.jsx)(n.p,{children:'For larger-scale scenarios where the Virtual Client may be ran on many systems for long periods of time each producing a lot of data/telemetry. In these\nscenarios, it is not that easy to gather log files from systems and to parse out the meaningful information from them required to analyze the performance\nand reliability of the systems. Virtual Client supports options to integrate with "big data" cloud resources for these type of scenarios.'}),"\n",(0,a.jsx)(n.h3,{id:"azure-event-hubs-support",children:"Azure Event Hubs Support"}),"\n",(0,a.jsx)(n.p,{children:"Azure Event Hubs is a large-scale messaging platform available in the Azure cloud. The platform integrates with other data storage and analytics resources\nsuch as Azure Data Explorer/Kusto and Azure Storage Accounts. This makes Event Hubs a very nice option for emitting data/telemetry from the operations\nof the Virtual Client. Event Hubs can support both the scale and the need to aggregate/consolidate the data so that it can be readily analyzed. The Virtual Client\nallows users to request data/telemetry be sent to a set of Event Hubs by supplying the connection string to the Event Hub Namespace on the command line."}),"\n",(0,a.jsx)(n.p,{children:"See the following documentation for more information:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/VirtualClient/docs/guides/0610-integration-event-hub",children:"Event Hubs Integration"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"azure-storage-account-support",children:"Azure Storage Account Support"}),"\n",(0,a.jsx)(n.p,{children:"An Azure Storage Account is a large-scale file/blob storage platform available in the Azure cloud. The platform is one of the most fundamental resources available\nin the Azure cloud and it integrates with many other resources such as Azure Data Factory. The Virtual Client allows users to request files and logs content to\nbe uploaded to a Storage Account by passing in a connection string or a SAS URI to the Storage Account on the command line."}),"\n",(0,a.jsx)(n.p,{children:"See the following documentation for more information:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/VirtualClient/docs/guides/0600-integration-blob-storage",children:"Storage Account Integration"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(6540);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);