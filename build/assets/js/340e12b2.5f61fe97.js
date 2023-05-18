"use strict";(self.webpackChunkhydrolang_training=self.webpackChunkhydrolang_training||[]).push([[660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3},s="Case Study 3: Dashboard for Station Statistical Analysis",o={unversionedId:"tutorial/case-studies/case-study-3",id:"tutorial/case-studies/case-study-3",title:"Case Study 3: Dashboard for Station Statistical Analysis",description:"Using the HydroLang library coupled with the HydroCompute library, let's create a simple dashboard that retrieves all the stations from a particular area and does statistical forecasting on the dataset given the time window and display the results of both the retrieved data and the simulations on a graph.",source:"@site/docs/tutorial/case-studies/case-study-3.mdx",sourceDirName:"tutorial/case-studies",slug:"/tutorial/case-studies/case-study-3",permalink:"/tutorials/hydrocompute/docs/tutorial/case-studies/case-study-3",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Case Study 2: Matrix Multiplication",permalink:"/tutorials/hydrocompute/docs/tutorial/case-studies/case-study-2"},next:{title:"Contribution Guide",permalink:"/tutorials/hydrocompute/docs/contribution-guide"}},l={},u=[{value:"Objectives",id:"objectives",level:2},{value:"Data Preparation",id:"data-preparation",level:2},{value:"Setting up the Pipeline",id:"setting-up-the-pipeline",level:2},{value:"Running the Simulation",id:"running-the-simulation",level:2},{value:"Visualizing Results",id:"visualizing-results",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"case-study-3-dashboard-for-station-statistical-analysis"},"Case Study 3: Dashboard for Station Statistical Analysis"),(0,i.kt)("p",null,"Using the HydroLang library coupled with the HydroCompute library, let's create a simple dashboard that retrieves all the stations from a particular area and does statistical forecasting on the dataset given the time window and display the results of both the retrieved data and the simulations on a graph."),(0,i.kt)("h2",{id:"objectives"},"Objectives"),(0,i.kt)("p",null,"This case study aims to show the capability to create powerful applications using pipelines that can run in paralell or sequentially to analyze real time data sources using the HydroCompute library. We will be creating an online application that retrieves stations from a USGS Daily Values from a bounding box within the Salt Lake City Area, and we will run simulations for montecarlo and arima processes as we as simple and exponential moving averages over the data."),(0,i.kt)("h2",{id:"data-preparation"},"Data Preparation"),(0,i.kt)("p",null,"For this study, we will be modifying an application created using HydroLang that which a simple dashboard that retrieves and visualizes information from particular stations in the Salt Lake City area."),(0,i.kt)("br",null),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/case-study-1-dimbnw?codemirror=1&fontsize=14&hidenavigation=1&theme=light",width:"100%",height:"300px",border:"0","border-radius":"4px",title:"case-study-1",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("p",null,"The body of our application will be modified by adding a chart div so we can visualize the results from the compute pipeline as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <div id="map"></div>\n  <div id="overlay">\n    <div id="content">\n      <div id="retrieved-data"></div>\n      <div id="result-graph"></div>\n      //Visualize graph\n      <div id="stats-table"></div>\n      <button id="download-raw-btn">Download Data</button>\n      <button id="download-simulationRes-btn">\n        Download Simulation Results</button\n      >//Attach the simulation results\n    </div>\n  </div>\n</body>\n')),(0,i.kt)("h2",{id:"setting-up-the-pipeline"},"Setting up the Pipeline"),(0,i.kt)("p",null,"Let's start by defining what we will want to observe from the retrieved data. In particular, since we are talking about time series information, it would be good to see how forecasting models and moving averages work with the retrived information."),(0,i.kt)("p",null,"Define the functions that we want to run as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'let jsFuns = ["expoMovingAverage_js", "simpleMovingAverage_js"];\nlet cFuns1 = ["_monteCarlo_c", "_arima_autoParams"];\nlet cFuns2 = [\n  "_arima_autoParams",\n  "_linear_detrend",\n  "_monteCarlo_c",\n  "_linear_detrend",\n];\n')),(0,i.kt)("p",null,"We will run the first two sets of functions in parallel, while the last one will run sequentially trailing down results."),(0,i.kt)("p",null,"For doing this, let's create new function that will use the downloaded data as inputs for all the simulations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"async function computeRun(site, data) {\n  //Removing the date values and leaving only the results\n  data = data[1].slice(1);\n\n  //resetting the result spaces in the engine\n  compute.availableData = [];\n  compute.engineResults = {};\n  compute.instanceRun = 0;\n\n  //saving the results inside the compute library\n  compute.data({ id: site, data });\n  let jsFuns = [\"expoMovingAverage_js\", \"simpleMovingAverage_js\"];\n  let cFuns1 = ['_monteCarlo_c', '_arima_autoParams'];\n  let cFuns2 = ['_linear_detrend', '_arima_autoParams', '_monteCarlo_c'];\n  //...\n}\n")),(0,i.kt)("h2",{id:"running-the-simulation"},"Running the Simulation"),(0,i.kt)("p",null,"Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"computeRun")," function, let's run the different simulations as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'async function computeRun(site, data) {\n  //...\n  compute.setEngine("wasm");\n\n  await compute.run({\n    functions: cFuns1,\n  });\n\n  await compute.run({\n    functions: cFuns2,\n    dependencies: true,\n  });\n\n  compute.setEngine("javascript");\n\n  await compute.run({\n    functions: jsFuns,\n  });\n\n  //...\n}\n')),(0,i.kt)("p",null,"We switch the engine that we are running at the middle of the simulation. For the results dependent on each other, we add the ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," flag to the dependencies. Once the simulations have finished, we need to do some data manipulation before we can visualize them in a graph. We add inside the function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'async function computeRun(site, data) {\n  //Result holders\n  let return_Values = [];\n  let return_Names = [];\n\n  //Retrieving each of the simulation runs\n  let results1 = compute.results("Simulation_1")[0];\n  let results2 = compute.results("Simulation_2")[0];\n  let results3 = compute.results("Simulation_3")[0];\n\n  //cleaning up some Infinity, NaN, and null values\n  for (let i = 0; i < results1.functions.length; i++) {\n    return_Values.push(compute.utils.cleanArray(results1.results[i]));\n    return_Names.push(results1.functions[i]);\n  }\n\n  //Same for results 2 and 3\n\n  return [return_Values, return_Names];\n}\n')),(0,i.kt)("h2",{id:"visualizing-results"},"Visualizing Results"),(0,i.kt)("p",null,"We need to call the newly created function inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"retrieveValues")," function and attach the results to the graph and download button."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'async function retrieveValues(site) {\n    //We add a new button\n  let button2 = document.getElementById("download-simulationRes-btn");\n\n  //...\n\n  //After the results have been downloaded, we call the computeRun function\n  let [results, fun_names] = await computeRun(site, await usgs_data);\n\n  //Reattach the date values to the result array\n  results.unshift(usgs_data[0]);\n\n  //Graph the results\n  hydro.visualize.draw({\n    params: { type: "chart", id: "result-graph" },\n    args: { names: fun_names },\n    data: results,\n  });\n\n  //...\n\n  //Attach the values from the simulations to the button for donwloading\n  button2.removeAttribute("hidden");\n  button2.addEventListener("click", () => {\n    hydro.data.download({ args: { type: "CSV" }, data: results });\n  });\n  showOverlay();\n}\n')),(0,i.kt)("p",null,"With this, we are able to see the modified version of our dashboard which now contains a powerful way to visaulize results from functions running on the background using the hydroCompute library."))}p.isMDXComponent=!0}}]);