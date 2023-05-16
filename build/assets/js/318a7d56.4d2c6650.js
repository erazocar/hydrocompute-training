"use strict";(self.webpackChunkhydrolang_training=self.webpackChunkhydrolang_training||[]).push([[768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=r,h=c["".concat(l,".").concat(f)]||c[f]||d[f]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a=n.p+"assets/images/function_simulation-7969abc7106f4dbe1a073ce3d364e466.png",o=n.p+"assets/images/step_simulation-ec009d918597f504e3e1c7ecf40fbff9.png",s={sidebar_position:2},l="Scheduler",u={unversionedId:"tutorial/Scheduler",id:"tutorial/Scheduler",title:"Scheduler",description:"The HydroCompute library was developed with the goal of supporting simulations that require executing N steps with M functions within each step. It provides flexibility in how data is passed to functions within each step, allowing for the use of the same data, different data, or results from previous functions.",source:"@site/docs/tutorial/Scheduler.mdx",sourceDirName:"tutorial",slug:"/tutorial/Scheduler",permalink:"/tutorials/hydrocompute/docs/tutorial/Scheduler",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Data",permalink:"/tutorials/hydrocompute/docs/tutorial/data"},next:{title:"Multithreading",permalink:"/tutorials/hydrocompute/docs/tutorial/multithread"}},p={},c=[{value:"Functions",id:"functions",level:2},{value:"Steps",id:"steps",level:2}],d={toc:c},f="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scheduler"},"Scheduler"),(0,r.kt)("p",null,"The HydroCompute library was developed with the goal of supporting simulations that require executing N steps with M functions within each step. It provides flexibility in how data is passed to functions within each step, allowing for the use of the same data, different data, or results from previous functions."),(0,r.kt)("p",null,"The core engine of HydroCompute manages the execution of steps and functions by leveraging a thread manager to run computations in parallel or sequentially. Here's an overview of the parameters used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"functions"),": An array of functions to be executed in each step."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"funcArgs"),": An array of arguments for each function in each step."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dependencies"),": An array specifying the dependencies between functions in each step."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"linked"),": A boolean indicating whether the results from the previous step should be used in subsequent steps."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),": An array of data arrays to be used in each step."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"length"),": An array specifying the length of the data submitted for analysis in each step."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isSplit"),": An array indicating whether data splits should be performed in each step."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scriptName"),": An array of script names used in the passed arguments.")),(0,r.kt)("p",null,"The arguments given by each step depend on the definiton that the user is providing at the moment of running and are used within the scheduler as is."),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"Functions within steps can be run in a connected or disconnected manner. The run() method in HydroCompute handles various arguments and configurations to support stepwise execution."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:a,alt:"function-execution",width:"300"})),(0,r.kt)("p",null,"A single step runs using the following schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"compute.run({functions: [function1, function2], //additional args})\n")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("p",null,"Steps in HydroCompute can be linked or independent. Linked steps indicate that the results from one step are used to execute the next step. To configure a simulation with stepwise execution, you need to define the simulation configuration using array objects."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:o,alt:"function-execution",width:"200"})),(0,r.kt)("p",null,"For example, a definiton of 2 steps would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"compute.run({functions: [[function1, function2], [function1, function2]], //additional args})\n")),(0,r.kt)("admonition",{title:"Note",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Default configuration is that the steps are not linked.")),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"More about graph scheduling ",(0,r.kt)("a",{parentName:"p",href:"https://link.springer.com/referenceworkentry/10.1007/978-0-387-09766-4_42"},"here"),".")))}h.isMDXComponent=!0}}]);