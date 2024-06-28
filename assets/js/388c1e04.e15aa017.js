"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[7351],{2891:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(4848),i=t(8453);const s={},a="Configure MySQL Database",o={id:"dependencies/0060-configure-mysql",title:"Configure MySQL Database",description:"Virtual Client has dependency components that can be added to a workload or monitor profile to create and configure a MySQL database on the system. The following section illustrates the details for integrating this into the profile.",source:"@site/docs/dependencies/0060-configure-mysql.md",sourceDirName:"dependencies",slug:"/dependencies/0060-configure-mysql",permalink:"/VirtualClient/docs/dependencies/0060-configure-mysql",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/dependencies/0060-configure-mysql.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MsMPI Installation",permalink:"/VirtualClient/docs/dependencies/0053-install-msmpi"},next:{title:"Install MySQL",permalink:"/VirtualClient/docs/dependencies/0060-install-mysql"}},l={},d=[{value:"Preliminaries",id:"preliminaries",level:2},{value:"Supported Platform/Architectures",id:"supported-platformarchitectures",level:2},{value:"Profile Component Parameters",id:"profile-component-parameters",level:2},{value:"Actions",id:"actions",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"configure-mysql-database",children:"Configure MySQL Database"}),"\n",(0,r.jsx)(n.p,{children:"Virtual Client has dependency components that can be added to a workload or monitor profile to create and configure a MySQL database on the system. The following section illustrates the details for integrating this into the profile."}),"\n",(0,r.jsx)(n.h2,{id:"preliminaries",children:"Preliminaries"}),"\n",(0,r.jsx)(n.p,{children:"Reference the following documentation before proceeding."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://microsoft.github.io/VirtualClient/docs/dependencies/install-mysql",children:"Install MySQL"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"supported-platformarchitectures",children:"Supported Platform/Architectures"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"linux-x64"}),"\n",(0,r.jsx)(n.li,{children:"linux-arm64"}),"\n",(0,r.jsx)(n.li,{children:"win-x64"}),"\n",(0,r.jsx)(n.li,{children:"win-arm64"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"profile-component-parameters",children:"Profile Component Parameters"}),"\n",(0,r.jsx)(n.p,{children:"The following section describes the parameters used by the individual component in the profile."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Parameter"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Required"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Action"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Informs of action to take on server configuration."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DatabaseName"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Name of database used by the workload."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Scenario"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Name for telemetry purpose. Does not change functionality."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,r.jsx)(n.p,{children:"The following section describes the different options for the 'Action' parameter noted above."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Action"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"StartDatabaseServer"}),(0,r.jsx)(n.td,{children:"Starts the MySQL server."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CreateDatabase"}),(0,r.jsx)(n.td,{children:"Creates a database under <Database Name> in the MySQL server."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RaisedStatementCount"}),(0,r.jsx)(n.td,{children:"Increases number of statements MySQL can prepare (only recommended for larger VMs)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ConfigureNetwork"}),(0,r.jsx)(n.td,{children:"Modifies the configuration file to make MySQL server accessible to the private network of VMs."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CreateUser"}),(0,r.jsx)(n.td,{children:"Creates user access to the server for each client VM in the provided environment layout."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Here is the usage of the dependency by the Sysbench OLTP workload as an example, that uses all three actions to configure the server."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-MYSQL-SYSBENCH-OLTP.json",children:"Profile Example"})}),"\n"]}),"\n",(0,r.jsx)("div",{class:"code-section",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "Type": "MySQLServerConfiguration",\n    "Parameters": {\n    "Scenario": "StartDatabaseServer",\n    "Action": "StartServer",\n    "DatabaseName": "$.Parameters.DatabaseName",\n    "Role":  "Server"\n    }\n},\n{\n    "Type": "MySQLServerConfiguration",\n    "Parameters": {\n    "Scenario": "CreateDatabase",\n    "Action": "CreateDatabase",\n    "DatabaseName": "$.Parameters.DatabaseName",\n    "Role": "Server"\n    }\n},\n{\n    "Type": "MySQLServerConfiguration",\n    "Parameters": {\n    "Scenario": "RaisedStatementCount",\n    "Action": "RaisedStatementCount",\n    "DatabaseName": "$.Parameters.DatabaseName",\n    "Role": "Server"\n    }\n},\n{\n    "Type": "MySQLServerConfiguration",\n    "Parameters": {\n    "Scenario": "ConfigureNetwork",\n    "Action": "ConfigureNetwork",\n    "DatabaseName": "$.Parameters.DatabaseName",\n    "Role": "Server"\n    }\n},\n{\n    "Type": "MySQLServerConfiguration",\n    "Parameters": {\n    "Scenario": "CreateUser",\n    "Action": "CreateUser",\n    "DatabaseName": "$.Parameters.DatabaseName",\n    "Role": "Server"\n    }\n}\n'})})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);