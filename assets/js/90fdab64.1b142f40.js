"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4298],{8244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=r(5893),i=r(3905);const s={},o="DCGMI",c={id:"workloads/dcgmi/dcgmi",title:"DCGMI",description:"The NVIDIA Data Center GPU Manager (DCGM) has DCGMI (Data Center GPU Management Interface) as a command line utility, which is a software tool for managing and monitoring GPU resources in a data center environment. DCGMi provides administrators with access to a wide range of information about the state of GPUs in their data center, including utilization, temperature, power consumption, and more.",source:"@site/docs/workloads/dcgmi/dcgmi.md",sourceDirName:"workloads/dcgmi",slug:"/workloads/dcgmi/",permalink:"/VirtualClient/docs/workloads/dcgmi/",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/dcgmi/dcgmi.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CtsTraffic Workload Profiles",permalink:"/VirtualClient/docs/workloads/ctstraffic/ctstraffic-profiles"},next:{title:"DCGMI Workload Profiles",permalink:"/VirtualClient/docs/workloads/dcgmi/dcgmi-profiles"}},d={},a=[{value:"Supported Commands",id:"supported-commands",level:2},{value:"DCGMI Output Description",id:"dcgmi-output-description",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"dcgmi",children:"DCGMI"}),"\n",(0,n.jsx)(t.p,{children:"The NVIDIA Data Center GPU Manager (DCGM) has DCGMI (Data Center GPU Management Interface) as a command line utility, which is a software tool for managing and monitoring GPU resources in a data center environment. DCGMi provides administrators with access to a wide range of information about the state of GPUs in their data center, including utilization, temperature, power consumption, and more."}),"\n",(0,n.jsx)(t.p,{children:"DCGM is part of the Nvidia GPU Deployment Kit and is designed to work with Nvidia's Tesla GPU accelerators, which are commonly used in data centers for high-performance computing and other GPU-accelerated workloads."}),"\n",(0,n.jsx)(t.p,{children:"At its heart, DCGM is an intelligent, lightweight user space library/agent that performs a variety of functions on each host system:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"GPU behavior monitoring"}),"\n",(0,n.jsx)(t.li,{children:"GPU configuration management"}),"\n",(0,n.jsx)(t.li,{children:"GPU policy oversight"}),"\n",(0,n.jsx)(t.li,{children:"GPU health and diagnostics"}),"\n",(0,n.jsx)(t.li,{children:"GPU accounting and process statistics"}),"\n",(0,n.jsx)(t.li,{children:"NVSwitch configuration and monitoring"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.nvidia.com/datacenter/dcgm/latest/user-guide/index.html",children:"DCGMI user guide"})}),"\n",(0,n.jsx)(t.h2,{id:"supported-commands",children:"Supported Commands"}),"\n",(0,n.jsx)(t.p,{children:"DCGM Diagnostics are designed to:"}),"\n",(0,n.jsx)(t.p,{children:"Provide multiple test timeframes to facilitate different preparedness or failure conditions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Level 1 tests to use as a readiness metric"}),"\n",(0,n.jsx)(t.li,{children:"Level 2 tests to use as an epilogue on failure"}),"\n",(0,n.jsx)(t.li,{children:"Level 3 and Level 4 tests to be run by an administrator as post-mortem."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"It is a single tool to discover deployment, system software and hardware configuration issues, basic diagnostics, integration issues, and relative system performance."}),"\n",(0,n.jsx)(t.p,{children:'Commands supported are "dcgmi diag", "dcgmi discovery","dcgmi fieldgroup", " dcgmi group", "dcgmi modules", "dcgmi health" and CUDA Generator scenario.'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"dcgmi diag -r {level} -j\ndcgmi discovery -l\ndcgmi fieldgroup -l\ndcgmi group -l\ndcgmi modules -l\ndcgmi health -c -j\nCUDA generator scenario:\n/usr/bin/dcgmproftester11 --no-dcgm-validation -t {FieldID} -d 10\ndcgmi dmon -e {ListOfFieldIDs} -c 15\n"})}),"\n",(0,n.jsx)(t.p,{children:"Please create a feature request if you need support for any other commands."}),"\n",(0,n.jsx)(t.h2,{id:"dcgmi-output-description",children:"DCGMI Output Description"}),"\n",(0,n.jsx)(t.p,{children:"The following section describes the various counters/metrics that are available with the dcgmi toolset."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Metric Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Deployment_Denylist"}),(0,n.jsx)(t.td,{children:"checks if machine has expected deny list of processes to run on GPU"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Deployment_NVML Library"}),(0,n.jsx)(t.td,{children:"NVML library access and versioning check"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Deployment_CUDA Main Library"}),(0,n.jsx)(t.td,{children:"CUDA library access and versioning"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Deployment_Permissions and OS Blocks"}),(0,n.jsx)(t.td,{children:"checks permissions for a specific GPU and enforce OS level block to ensure GPU resources are being used in secure way"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Deployment_Persistence Mode"}),(0,n.jsx)(t.td,{children:"checks the behaviour of GPU persistence mode, which allows GPUs to maintain their state even when a process terminates or the GPU is reset"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Deployment_Environment Variables"}),(0,n.jsx)(t.td,{children:"checks the behaviour of environment variables, which are used to control and configure the behaviour of DCGM."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Deployment_Page Retirement/Row Remap"}),(0,n.jsx)(t.td,{children:"checks the behaviour of Page Retirement and Row Remap, which are advanced memory management features that can help to improve the reliability and stability of GPU-based applications."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Deployment_Graphics Processes"}),(0,n.jsx)(t.td,{children:"checks the behaviour of graphics processes, which are processes that are run on GPUs to perform graphical or computational tasks."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Integration_PCIe"}),(0,n.jsx)(t.td,{children:"Verify PCIe connection, Monitor PCIe performance, Verify results"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Deployment_Inforom"}),(0,n.jsx)(t.td,{children:"checks the behavior of the Inforom, which is a chip located on the GPU that provides information about the GPU, its configuration, and its performance."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Hardware_GPU Memory"}),(0,n.jsx)(t.td,{children:"checks the GPU memory behaviour which is used to store data and perform computations."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Hardware_Diagnostic"}),(0,n.jsx)(t.td,{children:"diagnose any issues with the GPU and its components"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Hardware_Pulse Test"}),(0,n.jsx)(t.td,{children:"performance test that is used to check the performance of the GPU"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Stress_Targeted Stress"}),(0,n.jsx)(t.td,{children:"check the performance and stability under heavy load."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Stress_Targeted Power"}),(0,n.jsx)(t.td,{children:"check the power consumption under different load conditions"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Hardware_EUD Test"}),(0,n.jsx)(t.td,{children:"check the error detection and correction capabilities of the GPU memory."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Stress_Memory Bandwidth"}),(0,n.jsx)(t.td,{children:"check the memory bandwidth performance of a GPU"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Stress_Memtest"}),(0,n.jsx)(t.td,{children:"stresses the GPU memory in order to identify any issues or errors"}),(0,n.jsx)(t.td,{children:"1"})]})]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"NOTE: Value 1,-1,0 indicates pass, skip, fail of tests respectively.\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3905:(e,t,r)=>{r.d(t,{ah:()=>a});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),a=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),m=a(r),p=i,u=m["".concat(d,".").concat(p)]||m[p]||l[p]||s;return r?n.createElement(u,o(o({ref:t},h),{},{components:r})):n.createElement(u,o({ref:t},h))}));h.displayName="MDXCreateElement"}}]);