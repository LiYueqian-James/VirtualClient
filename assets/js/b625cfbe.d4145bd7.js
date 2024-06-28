"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[2620],{2815:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=i(4848),t=i(8453);const s={},d="Install CUDA and NVIDIA GPU Drivers",o={id:"dependencies/0031-install-cuda-and-nvidia-drivers",title:"Install CUDA and NVIDIA GPU Drivers",description:"Virtual Client has a dependency component that can be added to a workload or monitor profile to install CUDA and NVIDIA drivers in Linux and Windows systems. The following section illustrates the",source:"@site/docs/dependencies/0031-install-cuda-and-nvidia-drivers.md",sourceDirName:"dependencies",slug:"/dependencies/0031-install-cuda-and-nvidia-drivers",permalink:"/VirtualClient/docs/dependencies/0031-install-cuda-and-nvidia-drivers",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/dependencies/0031-install-cuda-and-nvidia-drivers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation Chocolatey Packages",permalink:"/VirtualClient/docs/dependencies/0030-install-chocolatey-packages"},next:{title:"Compiler Installation",permalink:"/VirtualClient/docs/dependencies/0032-compiler-installation"}},a={},l=[{value:"Supported Platform/Architectures",id:"supported-platformarchitectures",level:2},{value:"Profile Component Parameters for Windows",id:"profile-component-parameters-for-windows",level:2},{value:"Profile Component Parameters for Linux",id:"profile-component-parameters-for-linux",level:2},{value:"Example",id:"example",level:2},{value:"Windows example for downloading drivers from Web",id:"windows-example-for-downloading-drivers-from-web",level:3},{value:"Windows example for downloading drivers from Web",id:"windows-example-for-downloading-drivers-from-web-1",level:3},{value:"Linux example for downloading drivers",id:"linux-example-for-downloading-drivers",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"install-cuda-and-nvidia-gpu-drivers",children:"Install CUDA and NVIDIA GPU Drivers"}),"\n",(0,r.jsx)(n.p,{children:"Virtual Client has a dependency component that can be added to a workload or monitor profile to install CUDA and NVIDIA drivers in Linux and Windows systems. The following section illustrates the\ndetails for integrating this into the profile."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.nvidia.com/Download/index.aspx",children:"NVIDIA Official Drivers Page"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developer.nvidia.com/cuda-downloads",children:"CUDA Toolkit Downloads"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"supported-platformarchitectures",children:"Supported Platform/Architectures"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"linux-x64 (Ubuntu, Debian, CentOS7, RHEL7, RHEL8, SUSE)"}),"\n",(0,r.jsx)(n.li,{children:"win-x64"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"profile-component-parameters-for-windows",children:"Profile Component Parameters for Windows"}),"\n",(0,r.jsx)(n.p,{children:"This dependency component can be used to download the drivers on Windows either from Web using Wget, or from a blob storage using the DependencyPackageInstallation.\nThe following section describes the parameters used by the individual component in the profile in Windows:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Parameter"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Required"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Default"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PackageName"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The logical name of the package that will be registered with the Virtual Client runtime. This name can be used by other profile components to reference the installation parent directory location for Drivers."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Scenario"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"A name/identifier for the specific component in the profile. This is used for telemetry purposes only with components in dependency sections of the profile (i.e. cannot be used with --scenarios option on the command line)."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RebootRequired"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Whether or not reboot is required after installing the drivers."}),(0,r.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"profile-component-parameters-for-linux",children:"Profile Component Parameters for Linux"}),"\n",(0,r.jsx)(n.p,{children:"The following section describes the parameters used by the individual component in the profile in Windows:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Parameter"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Required"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Default"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PackageName"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The logical name of the package that will be registered with the Virtual Client runtime. This name can be used by other profile components to reference the installation parent directory location for Drivers."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Scenario"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"A name/identifier for the specific component in the profile. This is used for telemetry purposes only with components in dependency sections of the profile (i.e. cannot be used with --scenarios option on the command line)."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LinuxCudaVersion"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The version of CUDA to be installed in Linux Systems"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LinuxDriverVersion"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The version of Nvidia GPU driver to be installed in Linux Systems"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LinuxLocalRunFile"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The link to local runfile to install Cuda and Nvidia GPU driver in Linux Systems"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Username"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"The user who has the ssh identity registered for."}),(0,r.jsx)(n.td,{children:"The current logged in user."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RebootRequired"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Whether or not reboot is required after installing the drivers."}),(0,r.jsx)(n.td,{children:"true"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following sections provides examples for how to integrate the component into a profile."}),"\n",(0,r.jsx)(n.h3,{id:"windows-example-for-downloading-drivers-from-web",children:"Windows example for downloading drivers from Web"}),"\n",(0,r.jsx)(n.p,{children:"A sample URL for NVIDIA Drivers for Windows 10/11 is mentioned in example. The exact URL for the specific OS and Driver Version can be taken from NVIDIA Drivers website, given above."}),"\n",(0,r.jsx)("div",{class:"code-section",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "Type": "WgetPackageInstallation",\n    "Parameters": {\n        "Scenario": "DownloadCudaAndNvidiaDriverUsingWget",\n        "PackageUri": "https://us.download.nvidia.com/tesla/528.33/528.33-data-center-tesla-desktop-win10-win11-64bit-dch-international.exe",\n        "PackageName": "nvidiaDrivers",\n        "Extract": true\n    }\n},\n{\n    "Type": "CudaAndNvidiaGPUDriverInstallation",\n    "Parameters": {\n        "Scenario": "InstallCudaAndNvidiaGPUDriverForWindows",\n        "RebootRequired": false,\n        "PackageName": "nvidiaDrivers"  \n    }\n}\n'})})}),"\n",(0,r.jsx)(n.h3,{id:"windows-example-for-downloading-drivers-from-web-1",children:"Windows example for downloading drivers from Web"}),"\n",(0,r.jsx)("div",{class:"code-section",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "Type": "DependencyPackageInstallation",\n    "Parameters": {\n        "Scenario": "DownloadCudaAndNvidiaDriverFromBlob",\n        "BlobContainer": "packages",\n        "BlobName": "<package-name-in-blob>",\n        "PackageName": "nvidiaDrivers",\n        "Extract": true\n    }\n},\n{\n    "Type": "CudaAndNvidiaGPUDriverInstallation",\n    "Parameters": {\n        "Scenario": "InstallCudaAndNvidiaGPUDriverForWindows",\n        "RebootRequired": false,\n        "PackageName": "nvidiaDrivers"  \n    }\n}\n'})})}),"\n",(0,r.jsx)(n.h3,{id:"linux-example-for-downloading-drivers",children:"Linux example for downloading drivers"}),"\n",(0,r.jsx)(n.p,{children:"A sample URL for NVIDIA Drivers RunFile for Linux Ubuntu is mentioned in example. The exact URL for the specific OS and Driver Version can be taken from CUDA Toolkit website, given above."}),"\n",(0,r.jsx)("div",{class:"code-section",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "Type": "NvidiaCudaInstallation",\n    "Parameters": {\n        "Scenario": "InstallNvidiaCuda",\n        "LinuxCudaVersion": "12.0",\n        "LinuxDriverVersion": "525",\n        "Username": "",\n        "LinuxLocalRunFile": "https://developer.download.nvidia.com/compute/cuda/12.0.0/local_installers/cuda_12.0.0_525.60.13_linux.run"\n    }\n},\n'})})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var r=i(6540);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);