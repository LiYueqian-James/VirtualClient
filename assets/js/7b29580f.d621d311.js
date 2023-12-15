"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3617],{8265:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=n(5893),i=n(3905);const a={},o="MLPerf Trainging Bert Preprocessing Data",s={id:"workloads/mlperf/mlperf-trainining-bert-preprocessing-data",title:"MLPerf Trainging Bert Preprocessing Data",description:"The following document will show steps ran for Downloading,Preprocessing and Packaging the training data used in Bert training.",source:"@site/docs/workloads/mlperf/mlperf-trainining-bert-preprocessing-data.md",sourceDirName:"workloads/mlperf",slug:"/workloads/mlperf/mlperf-trainining-bert-preprocessing-data",permalink:"/VirtualClient/docs/workloads/mlperf/mlperf-trainining-bert-preprocessing-data",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/mlperf/mlperf-trainining-bert-preprocessing-data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MLPerf Workload Profiles",permalink:"/VirtualClient/docs/workloads/mlperf/mlperf-profiles"},next:{title:"NAS Parallel",permalink:"/VirtualClient/docs/workloads/nasparallel/"}},l={},c=[{value:"VM Configuration used",id:"vm-configuration-used",level:2},{value:"Steps followed to preprocess data",id:"steps-followed-to-preprocess-data",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"mlperf-trainging-bert-preprocessing-data",children:"MLPerf Trainging Bert Preprocessing Data"}),"\n",(0,t.jsx)(r.p,{children:"The following document will show steps ran for Downloading,Preprocessing and Packaging the training data used in Bert training."}),"\n",(0,t.jsx)(r.h2,{id:"vm-configuration-used",children:"VM Configuration used"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"VMSKU: Standard ND96asr v4 (96 vcpus, 900 GiB memory)"}),"\n",(0,t.jsx)(r.li,{children:"Operating System : Ubuntu 20.04"}),"\n",(0,t.jsx)(r.li,{children:"OS Disk Size: 256 GB"}),"\n",(0,t.jsxs)(r.li,{children:["Dats Disk Size : 8TB (Mounted on ",(0,t.jsx)(r.code,{children:"/data/mlperf/bert"}),")"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"steps-followed-to-preprocess-data",children:"Steps followed to preprocess data"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Git cloned ",(0,t.jsx)(r.a,{href:"https://github.com/mlcommons/training_results_v2.1",children:"MLPerfTraining"})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Visit ",(0,t.jsx)(r.a,{href:"https://github.com/mlcommons/training_results_v2.1/tree/main/NVIDIA/benchmarks/bert/implementations/pytorch-22.09",children:"Bert Benchmark"})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:['Update "',(0,t.jsx)(r.a,{href:"https://github.com/mlcommons/training_results_v2.1/blob/main/NVIDIA/benchmarks/bert/implementations/pytorch-22.09/requirements.txt",children:"requirements.txt"}),'" gdown section\n"gdown==4.4.0" to "gdown==4.7.1" (Current Latest)\nTo avoid failure of download from Google Drive.']}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Run following commands:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"docker build --pull -t mlperf-training:language_model .\n\ndocker push mlperf-training:language_model\n\ndocker run --runtime=nvidia --ipc=host -v /data/mlperf/bert:/workspace/bert_data mlperf-training:language_model\n"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Inside docker container run following commands:"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"cd /workspace/bert\n./input_preprocessing/prepare_data.sh --outputdir /workspace/bert_data\n"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Inside container follow steps to package data ",(0,t.jsx)(r.a,{href:"https://github.com/mlcommons/training_results_v2.1/tree/main/NVIDIA/benchmarks/bert/implementations/pytorch-22.09/input_preprocessing/packed_data",children:"link"})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Exit container and zip ",(0,t.jsx)(r.code,{children:"/data/mlperf/bert"})]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,i.ah)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3905:(e,r,n)=>{n.d(r,{ah:()=>c});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?t.createElement(f,o(o({ref:r},p),{},{components:n})):t.createElement(f,o({ref:r},p))}));p.displayName="MDXCreateElement"}}]);