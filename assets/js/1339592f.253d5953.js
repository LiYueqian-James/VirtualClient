"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[8415],{7147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(5893),i=n(3905);const o={},s="Coding Standards",l={id:"developing/0080-coding-standards",title:"Coding Standards",description:"Style Guidelines",source:"@site/docs/developing/0080-coding-standards.md",sourceDirName:"developing",slug:"/developing/0080-coding-standards",permalink:"/VirtualClient/docs/developing/0080-coding-standards",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/developing/0080-coding-standards.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Error Handling Recommendations",permalink:"/VirtualClient/docs/developing/0070-error-handling"},next:{title:"Testing Practices",permalink:"/VirtualClient/docs/developing/0090-testing"}},a={},c=[{value:"Style Guidelines",id:"style-guidelines",level:3},{value:"Test Guidelines",id:"test-guidelines",level:3},{value:"Pull Request(PR) Process",id:"pull-requestpr-process",level:3},{value:"Creating/Submitting Changes",id:"creatingsubmitting-changes",level:5},{value:"Getting Approvals",id:"getting-approvals",level:5}];function d(e){const t={a:"a",h1:"h1",h3:"h3",h5:"h5",li:"li",p:"p",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"coding-standards",children:"Coding Standards"}),"\n",(0,r.jsx)(t.h3,{id:"style-guidelines",children:"Style Guidelines"}),"\n",(0,r.jsx)(t.p,{children:"Most of the coding style is enforced using static code/style analysis toolsets that are integrated into the project when built.\nThis makes it easier for developers to follow the patterns. The important thing to remember here is that new projects must import\nthe build environment settings. You can see examples of the import at the bottom of any project (e.g. csproj) file in the\nrepo."}),"\n",(0,r.jsx)(t.p,{children:"As a general rule, if it builds, the majority of your style requirements are already completed! :)"}),"\n",(0,r.jsx)(t.h3,{id:"test-guidelines",children:"Test Guidelines"}),"\n",(0,r.jsx)(t.p,{children:"Any changes or additions to source code in this repo carry the requirement at a minimum that unit tests be written to verify\nimportant behaviors. The team does not typically accept changes to source code in this repo without having proper unit tests.\nTake the time to look at existing unit tests within the project. A lot of effort was made to create unit tests that are clear,\nclean and effective. Additionally, there are a lot of good patterns in place to help other developers quickly write a set of\nrobust unit tests for code in this repo."}),"\n",(0,r.jsx)(t.p,{children:"Review our documentation on testing if you would like to learn more on our practices and philosophies around testing."}),"\n",(0,r.jsx)(t.h3,{id:"pull-requestpr-process",children:"Pull Request(PR) Process"}),"\n",(0,r.jsx)(t.p,{children:"The following steps will help you get your changes in for review by the team. Review the repo README if you need a reminder\nor examples on how to build and test code within the repo."}),"\n",(0,r.jsx)(t.h5,{id:"creatingsubmitting-changes",children:"Creating/Submitting Changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Create a topic branch for your changes (e.g. users/alias/ChangeDescription). We do not allow users to push changes directly to the main branch."}),"\n",(0,r.jsx)(t.li,{children:"Ensure all solutions/projects within the repo build successfully before submitting your PR."}),"\n",(0,r.jsx)(t.li,{children:"Ensure all tests within the repo pass before submitting your PR. Passing unit and functional tests is a gate to complete the PR."}),"\n",(0,r.jsxs)(t.li,{children:["Update any documentation, user and contributor, that is impacted by your changes.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Check for markdown (e.g. README.md) files within the solution or project directory."}),"\n",(0,r.jsx)(t.li,{children:"Team members will typically help you with pointers to documentation needing update as part of the pull request process."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Increase the version numbers for any assemblies (.exe or .dll) for which you have changed.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["We use ",(0,r.jsx)(t.a,{href:"http://semver.org/",children:"semantic versioning"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Push your changes to the remote."}),"\n",(0,r.jsx)(t.li,{children:"Browse to the Azure DevOps location for the repo and create a pull request for your branch/changes. You do not need to\nadd reviewers to the pull request. The team will be automatically added.  Feel free to add any other reviewers that you'd like\nto the pull request though."}),"\n",(0,r.jsx)(t.li,{children:"Add a referenced work item to the pull request you created."}),"\n"]}),"\n",(0,r.jsx)(t.h5,{id:"getting-approvals",children:"Getting Approvals"}),"\n",(0,r.jsx)(t.p,{children:"After you've created the pull request, the following requirements must be met before you will be able to complete the pull request:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"An automated PR build must complete successfully."}),"\n",(0,r.jsxs)(t.li,{children:["Team reviewers must review the code and provide at least 1 approval.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Any feedback/comments provided by reviewers must be resolved and changes committed + pushed to the remote."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,m=h["".concat(a,".").concat(p)]||h[p]||d[p]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));u.displayName="MDXCreateElement"}}]);