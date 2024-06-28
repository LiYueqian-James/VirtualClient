"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[2762],{8960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=n(4848),s=n(8453);const r={},o="Mount Disks",l={id:"dependencies/0071-mount-disks",title:"Mount Disks",description:"Virtual Client has a dependency component that can be added to a workload or monitor profile to mount disks before execution. The following section illustrates the details for integrating this into the profile.",source:"@site/docs/dependencies/0071-mount-disks.md",sourceDirName:"dependencies",slug:"/dependencies/0071-mount-disks",permalink:"/VirtualClient/docs/dependencies/0071-mount-disks",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/dependencies/0071-mount-disks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Format Disks",permalink:"/VirtualClient/docs/dependencies/0070-format-disks"},next:{title:"Install AMD GPU Drivers",permalink:"/VirtualClient/docs/dependencies/0080-install-amd-drivers"}},d={},a=[{value:"Supported Platform/Architectures",id:"supported-platformarchitectures",level:2},{value:"Profile Component Parameters",id:"profile-component-parameters",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"mount-disks",children:"Mount Disks"}),"\n",(0,i.jsx)(t.p,{children:"Virtual Client has a dependency component that can be added to a workload or monitor profile to mount disks before execution. The following section illustrates the details for integrating this into the profile."}),"\n",(0,i.jsx)(t.p,{children:"NOTE: It is going to mount the disk volumes which does not have any mount points and are already formatted.\nIt is going to name using the mount point prefix like following example: mountpointprefix0,mountpointprefix1,etc."}),"\n",(0,i.jsx)(t.h2,{id:"supported-platformarchitectures",children:"Supported Platform/Architectures"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"linux-x64"}),"\n",(0,i.jsx)(t.li,{children:"linux-arm64"}),"\n",(0,i.jsx)(t.li,{children:"win-x64"}),"\n",(0,i.jsx)(t.li,{children:"win-arm64"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"profile-component-parameters",children:"Profile Component Parameters"}),"\n",(0,i.jsx)(t.p,{children:"The following section describes the parameters used by the individual component in the profile."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Parameter"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Required"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Description"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Default Value"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DiskFilter"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"The diskfilter will select the disks to be mounted."}),(0,i.jsxs)(t.td,{children:["OSDisk",":false"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MountPointPrefix"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"This gives the prefix name for mount point names for volumes."}),(0,i.jsx)(t.td,{children:"mountPoint"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"In this example, VC partitions unformatted disks on the system. Disks that have existing partitions/volumes are left alone, and the OS disk is never formatted."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "Type": "FormatDisks",\n    "Parameters": {\n        "Scenario": "InitializeDisks"\n    }\n},\n{\n    "Type": "MountDisks",\n    "Parameters": {\n        "Scenario": "MountDataDisk",\n        "MountPointPrefix": "/mlperftraining",\n        "DiskFilter":  "BiggestSize"\n    }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);