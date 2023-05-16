"use strict";(self.webpackChunkhydrolang_training=self.webpackChunkhydrolang_training||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:r,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:6},a="Contribution Guide",u={unversionedId:"contribution-guide",id:"contribution-guide",title:"Contribution Guide",description:"HydroCompute was thought of as an open source software that serves the community of hydrologist and environmental scientists to be used as a plug-and-play tool to leverage threading technology of web browsers. However, we need the community of users to help grow the library to enable a more resilient and robust tool. Based on this, please consider the following:",source:"@site/docs/contribution-guide.md",sourceDirName:".",slug:"/contribution-guide",permalink:"/tutorials/hydrocompute/docs/contribution-guide",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Case Study 3: Statistical forecasting",permalink:"/tutorials/hydrocompute/docs/tutorial/case-studies/case-study-3"}},s={},l=[{value:"Non Github Contributions",id:"non-github-contributions",level:2},{value:"Submitting Changes (Github)",id:"submitting-changes-github",level:2},{value:"Coding Conventions",id:"coding-conventions",level:3}],c={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contribution-guide"},"Contribution Guide"),(0,r.kt)("p",null,"HydroCompute was thought of as an open source software that serves the community of hydrologist and environmental scientists to be used as a plug-and-play tool to leverage threading technology of web browsers. However, we need the community of users to help grow the library to enable a more resilient and robust tool. Based on this, please consider the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you want to add a functionality not included in the base code or any subsequent releases, please raise an issue with the functionality you would like to add."),(0,r.kt)("li",{parentName:"ul"},"Follow the code styles within any of the modules of the framework to get sense of how we like to format."),(0,r.kt)("li",{parentName:"ul"},"Share your insights based on our community guidelines and code of conduct.")),(0,r.kt)("h2",{id:"non-github-contributions"},"Non Github Contributions"),(0,r.kt)("p",null,"HydroCompute is a new project that is leverages new technologies and that be benefitial for research and education tools. If you would like to contribute please let us know by sending an email, joining us on online and onsite Hackathons and other events announced on the lab's ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/uihilab"},"twitter page"),"."),(0,r.kt)("h2",{id:"submitting-changes-github"},"Submitting Changes (Github)"),(0,r.kt)("p",null,"Send a Github Pull Request with a detailed list of your contributions. We would appreciate it if you could provide any examples of how the features you are adding might be used whenever you submit a request. Any new functionality and development must adhere to our code standards. Last but not least, make sure to include one feature each commit along with concise log statements. Larger commits must resemble the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ git commit -m "Summary of the changes including large modules or functions.\n> some additional comment.\n> more information about the function"\n')),(0,r.kt)("h3",{id:"coding-conventions"},"Coding Conventions"),(0,r.kt)("p",null,"Please read our code at any of the included modules to have a hang of it. We try to maintain consistency with ES5 for function definition in the main modules, and ES6 for the inner scope of each function. We optimize for readability and functionality in the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each function should be written with the ",(0,r.kt)("inlineCode",{parentName:"li"},"params:{}, args:{}, data:[]")," ontology, but not all options are required for to be used.We believe that parameter destructuring will work better when the project expands to include new features in the future. "),(0,r.kt)("li",{parentName:"ul"},"We indent using two spaces."),(0,r.kt)("li",{parentName:"ul"},"Please define any variables for your function using multiple variable definitions in the top part of the function (",(0,r.kt)("inlineCode",{parentName:"li"},"const someVar, someVar2, someVar3; var myVar1, myVar2, myVar3;"),")."),(0,r.kt)("li",{parentName:"ul"},"We implement ",(0,r.kt)("a",{parentName:"li",href:"https://jsdoc.app/"},"JSDocs")," syntax to produce straightforward and understandable documentation for each function. Please look at the definition of any variable to see the structure. Basic explanation with references if needed, function name, parameters, returns, and an example are the minimum requirements.")))}p.isMDXComponent=!0}}]);