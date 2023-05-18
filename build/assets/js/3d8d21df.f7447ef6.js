"use strict";(self.webpackChunkhydrolang_training=self.webpackChunkhydrolang_training||[]).push([[535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="About this lesson",l={unversionedId:"about",id:"about",title:"About this lesson",description:"This lesson space serves as an introduction to the use of HydroCompute, a client-side computational library for hydrology and environmental sciences.",source:"@site/docs/about.md",sourceDirName:".",slug:"/about",permalink:"/tutorials/hydrocompute/docs/about",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/tutorials/hydrocompute/docs/intro"},next:{title:"Getting Started",permalink:"/tutorials/hydrocompute/docs/getting_started"}},s={},u=[{value:"Objectives",id:"objectives",level:2},{value:"Skills You&#39;ll Gain",id:"skills-youll-gain",level:2},{value:"Syllabus",id:"syllabus",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about-this-lesson"},"About this lesson"),(0,o.kt)("p",null,"This lesson space serves as an introduction to the use of ",(0,o.kt)("strong",{parentName:"p"},"HydroCompute"),", a client-side computational library for hydrology and environmental sciences."),(0,o.kt)("h2",{id:"objectives"},"Objectives"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Familiarize yourself with the object-oriented architecture developed with HydroCompute."),(0,o.kt)("li",{parentName:"ul"},"Explore different engines and their corresponding functions for hydrological sciences."),(0,o.kt)("li",{parentName:"ul"},"Create end-to-end projects and workflows that run using minimal code.")),(0,o.kt)("h2",{id:"skills-youll-gain"},"Skills You'll Gain"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Understand the use of multithreading technology available in web browsers."),(0,o.kt)("li",{parentName:"ul"},"Get acquainted with new technologies such as WebRTC, WebGPU, and WebAssembly."),(0,o.kt)("li",{parentName:"ul"},"Create complete workflows for hydrological sciences."),(0,o.kt)("li",{parentName:"ul"},"Learn how to use HydroCompute to run a simulation through sequential and parallel code execution.")),(0,o.kt)("h2",{id:"syllabus"},"Syllabus"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/tutorials/hydrocompute/docs/tutorial/data"},"Data")),": Learn about how to feed data into the HydroCompute library."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"../docs/tutorial/multithread"},"Multithreading")),": Learn about running parallel and sequential tasks through the use of web worker technologies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"../docs/tutorial/scheduler"},"Scheduler")),": Learn about the underlying mechanisms implemented for scheduling tasks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"../docs/tutorial/engines"},"Engines")),": Learn how to run code from different sources and programming languages and port them into a common ground for web usage."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{target:"_blank",href:n(4759).Z},"Case Studies")),": Learn about the development of a case study evaluating speed and using different libraries for development.")),(0,o.kt)("admonition",{title:"Caution",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some of the technologies that will be covered in this presentation are still ",(0,o.kt)("strong",{parentName:"p"},"experimental")," and not fully supported in all web browsers. Please take this in consideration when using the library.")))}p.isMDXComponent=!0},4759:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/_category_-bf9474de76205460947d0547e3bde5fd.json"}}]);