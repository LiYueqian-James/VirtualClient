"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[7123],{6601:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=i(5893),l=i(3905);const r={},s="Automated Build and CI/CD pipeline",o={id:"developing/0001-ci-cd",title:"Automated Build and CI/CD pipeline",description:"The following sections describe the automated build and release process.",source:"@site/docs/developing/0001-ci-cd.md",sourceDirName:"developing",slug:"/developing/0001-ci-cd",permalink:"/VirtualClient/docs/developing/0001-ci-cd",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/developing/0001-ci-cd.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Developing",permalink:"/VirtualClient/docs/category/developing"},next:{title:"Developer Guide",permalink:"/VirtualClient/docs/developing/0010-develop-guide"}},a={},c=[{value:"Pull Request",id:"pull-request",level:2},{value:"Documentation Site Build and Publishing",id:"documentation-site-build-and-publishing",level:2},{value:"Build Release Publishing",id:"build-release-publishing",level:2}];function u(e){const t={a:"a",br:"br",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"automated-build-and-cicd-pipeline",children:"Automated Build and CI/CD pipeline"}),"\n",(0,n.jsx)(t.p,{children:"The following sections describe the automated build and release process."}),"\n",(0,n.jsx)(t.h2,{id:"pull-request",children:"Pull Request"}),"\n",(0,n.jsx)(t.p,{children:"Every pull request need to pass PR build."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/actions/workflows/pull-request.yml",children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/VirtualClient/actions/workflows/pull-request.yml/badge.svg",alt:"Pull Request Build"})})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"GitHub Action:"})," ",(0,n.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/actions/workflows/pull-request.yml",children:"https://github.com/microsoft/VirtualClient/actions/workflows/pull-request.yml"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"documentation-site-build-and-publishing",children:"Documentation Site Build and Publishing"}),"\n",(0,n.jsxs)(t.p,{children:["Virtual Client uses ",(0,n.jsx)(t.a,{href:"https://docusaurus.io/",children:"Docusaurus"})," to host front page and documents. Every main branch check-in will trigger a document yarn build and publish to gh-pages branch."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"GitHub Action:"})," ",(0,n.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/actions/workflows/deploy-doc.yml",children:"https://github.com/microsoft/VirtualClient/actions/workflows/deploy-doc.yml"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If the action is successful and deploys the ",(0,n.jsx)(t.strong,{children:"gh-pages"})," branch and the documentation is updated, you will see the following:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/actions/workflows/pages/pages-build-deployment",children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/VirtualClient/actions/workflows/pages/pages-build-deployment/badge.svg",alt:"Document Deployment"})})]}),"\n",(0,n.jsx)(t.p,{children:"If the action is NOT successful, you can find out why the Docusaurus build is failing by attempting to build and run it locally. The following documentation\ncovers the details for how to do this."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/website/README.md",children:"Docusaurus Integration and Debugging"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"build-release-publishing",children:"Build Release Publishing"}),"\n",(0,n.jsx)(t.p,{children:"This build pipeline is not publicly available because it involves Microsoft signing processes. Because of this distinction, pull requests will\nalways require at least one Microsoft employee to sign off."}),"\n",(0,n.jsx)(t.p,{children:"New releases of the Virtual Client are published to NuGet.org in the following location:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.nuget.org/packages/VirtualClient",children:"https://www.nuget.org/packages/VirtualClient"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.nuget.org/packages/VirtualClient.Framework",children:"https://www.nuget.org/packages/VirtualClient.Framework"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.nuget.org/packages/VirtualClient.TestFramework",children:"https://www.nuget.org/packages/VirtualClient.TestFramework"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,l.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3905:(e,t,i)=>{i.d(t,{ah:()=>c});var n=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var a=n.createContext({}),c=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,r=e.originalType,a=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(i),h=l,g=p["".concat(a,".").concat(h)]||p[h]||u[h]||r;return i?n.createElement(g,s(s({ref:t},d),{},{components:i})):n.createElement(g,s({ref:t},d))}));d.displayName="MDXCreateElement"}}]);