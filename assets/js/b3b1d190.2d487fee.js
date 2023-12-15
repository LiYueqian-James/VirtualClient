"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[9389],{4720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(5893),s=n(3905);const r={},o="Testing Practices",a={id:"developing/0090-testing",title:"Testing Practices",description:"The following standards and practices that the Virtual Client team employs when adding new features to the platform. It is expected that developers",source:"@site/docs/developing/0090-testing.md",sourceDirName:"developing",slug:"/developing/0090-testing",permalink:"/VirtualClient/docs/developing/0090-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/developing/0090-testing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Coding Standards",permalink:"/VirtualClient/docs/developing/0080-coding-standards"}},l={},c=[{value:"Unit Testing",id:"unit-testing",level:2},{value:"Testing Framework Libraries",id:"testing-framework-libraries",level:2},{value:"Testing Fixtures",id:"testing-fixtures",level:2},{value:"Test Setup Mechanics",id:"test-setup-mechanics",level:2},{value:"Cross-Platform Testing",id:"cross-platform-testing",level:2}];function d(e){const t={a:"a",br:"br",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"testing-practices",children:"Testing Practices"}),"\n",(0,i.jsx)(t.p,{children:"The following standards and practices that the Virtual Client team employs when adding new features to the platform. It is expected that developers\nadding features to the application are also adding programmatic tests at the same time. This enables a rapid inner development process at the same time\nas it helps the team to preserve the quality of the application over time as the codebase grows."}),"\n",(0,i.jsx)(t.h2,{id:"unit-testing",children:"Unit Testing"}),"\n",(0,i.jsx)(t.p,{children:"The following sections provide insights into a testing methodology that can be applied to testing workload executors in the Virtual Client\ncodebase. The goal here is to shine a light on the basic techniques applied and the mechanics they drive when testing Virtual Client logic."}),"\n",(0,i.jsx)(t.p,{children:"Before reading the documentation below, familiarize yourself with the general principles involved in writing tests for components in an\napplication or system codebase."}),"\n",(0,i.jsx)(t.h2,{id:"testing-framework-libraries",children:"Testing Framework Libraries"}),"\n",(0,i.jsx)(t.p,{children:"The following open source libraries are used to enable rich and robust testing outcomes in the Virtual Client codebase."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://github.com/AutoFixture/AutoFixture/wiki",children:"AutoFixture"})}),(0,i.jsx)(t.br,{}),"\n","AutoFixture is a library/framework that is used to create mock/fake objects that are used in testing scenarios. The ability to create valid mock objects in test\ncode is a very common requirement. The AutoFixture framework makes mock object setup a triviality."]}),"\n",(0,i.jsxs)(t.p,{children:["Within the Virtual Client codebase, a C# ",(0,i.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/tree/main/src/VirtualClient/VirtualClient.TestFramework/FixtureExtensions.cs",children:"extension method approach"}),"\nin conjunction with AutoFixture to define the setup of a wide range of different mock objects in a single, consolidated place minimizing the need for that setup in all of the tests."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://github.com/Moq/moq4/wiki/Quickstart",children:"Moq"})}),(0,i.jsx)(t.br,{}),"\n","The Moq library provides a robust yet simple framework allowing developers to setup mock behaviors when testing. The MockFixture noted below uses the Moq framework\nextensively to setup and change behaviors for core dependencies of Virtual Client components/classes. This enables a wide range of scenarios and code handling mechanics to\nbe tested."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"testing-fixtures",children:"Testing Fixtures"}),"\n",(0,i.jsx)(t.p,{children:"The Virtual Client solution uses a few different types of testing fixtures to simplify the requirements for setting up dependency behaviors required to\ntest workload executor and supporting classes. Testing fixtures enable a reduction in the code required to setup mock/test behaviors by encapsulating the logic\nin a single place or to use C# extension methods to do the same."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/tree/main/src/VirtualClient/VirtualClient.TestFramework/MockFixture.cs",children:"MockFixture"})}),(0,i.jsx)(t.br,{}),"\n","The MockFixture provides/encapsulates all of the dependencies required by Virtual Client workload executors implemented as mock objects using the Moq\nframework. Mock fixtures help to minimize lines of code required to properly test classes and components in a few different ways. Firstly, the developer does\nnot have to duplicate all of the mock class/interface dependencies over and over in individual test classes. Almost every dependency needed is on the MockFixture\nclass. The MockFixture is also used as to create reusable C# extensions methods. These extensions method allow the developer to perform setup and verifications\nof test code more simply."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/tree/main/src/VirtualClient/VirtualClient.TestFramework/DependencyFixture.cs",children:"DependencyFixture"})}),(0,i.jsx)(t.br,{}),"\n",'The DependencyFixture provides/encapsulates all of the dependencies required by Virtual Client workload executors implemented to work the same way\nas live/real dependencies except using only in-memory backing. In-memory backing means that the dependency keeps track of its assets/objects purely\nin-memory. For example, the real package management dependency in Virtual Client uses the file system to reference and manage workload packages. The\nin-memory version of it supplied by the DependencyFixture keeps the references to the packages and to the file system all in-memory (i.e. no actual interaction\nwith the real file system). The DependencyFixture is often used with functional tests in the Virtual Client codebase. This is because functional tests are\nfocused on the end-to-end behavioral correctness of the code flow (e.g. the execution of all components in a single profile) and the DependencyFixture more\nclosely mimics certain "real-life" environment/system behavior.']}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"test-setup-mechanics",children:"Test Setup Mechanics"}),"\n",(0,i.jsx)(t.p,{children:"Each of the tests in the Virtual Client codebase (unit as well as functional) uses one or more of the testing fixtures noted above. This simplifes the process of testing code\nby instilling repeatable patterns and reducing redundancy/duplication in setup requirements. The ultimate goals are as follows:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Remove code from individual tests and test methods that is used purely to setup mock/fake behaviors."}),"\n",(0,i.jsx)(t.li,{children:"Improve the readability of the tests."}),"\n",(0,i.jsx)(t.li,{children:"Reduces the learning curve for new engineers needing to write tests."}),"\n",(0,i.jsx)(t.li,{children:"Increases the speed at which the team can do the work to write new code and test it thoroughly."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Towards meet these goals, we use a set of general techniques to ensure the testing fixtures can be used easily at the same time as they are flexible enough to\ncover a wide range of scenario setups. The following list describes some of the techniques involved."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Testing fixtures should have ALL dependencies necessary for testing Virtual Client components as properties. This prevents the duplication of these as member\nvariables in test classes. See the 'MockFixture' class noted above for examples."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Testing fixtures should have helper methods that make it easy to accomplish the setup of very common mock/fake behaviors on dependencies. One of the most common\nways we do this is to implement C# extension methods. This can significantly reduce the code required in the test classes and methods and improve readability.\nSee the ",(0,i.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/tree/main/src/VirtualClient/VirtualClient.TestExtensions/MockSetupExtensions.cs",children:"MockSetupExtensions"}),"\nclass for examples."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'The best way to illustrate the ideas is to showcase the usage patterns. The following links provide good examples of using the various testing fixtures to establish robust\ntests for a given class or component. For developers using the Visual Studio IDE, it is easy to debug the code. Simply set a breakpoint in any one of the test methods,\nright-click on the test and select "Debug Test(s)" to see the mechanics in motion.'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/tree/main/src/VirtualClient/VirtualClient.Actions.UnitTests/Example2WorkloadExecutorTests_MockFixture.cs",children:"Example Using MockFixture Mechanics"}),(0,i.jsx)(t.br,{}),"\n","Example of how to write unit or functional tests using the Moq framework and MockFixture class as the foundation for the testing fixture and setup mechanics."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/microsoft/VirtualClient/tree/main/src/VirtualClient/VirtualClient.Actions.UnitTests/Example2WorkloadExecutorTests_DependencyFixture.cs",children:"Example Using DependencyFixture Mechanics"}),(0,i.jsx)(t.br,{}),"\n","Example of how to write unit or functional tests using the in-memory dependency implementations as the foundation for the testing fixture\nand setup mechanics."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"cross-platform-testing",children:"Cross-Platform Testing"}),"\n",(0,i.jsx)(t.p,{children:"When doing development of Virtual Client components, you will often need to consider debugging in cross-platform scenarios (e.g. Windows and Linux). The following\nsection provides some useful information to help you do development where you need to validate on different OS platforms."})]})}function h(e={}){const{wrapper:t}={...(0,s.ah)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>c});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),u=c(n),p=s,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return n?i.createElement(m,o(o({ref:t},h),{},{components:n})):i.createElement(m,o({ref:t},h))}));h.displayName="MDXCreateElement"}}]);