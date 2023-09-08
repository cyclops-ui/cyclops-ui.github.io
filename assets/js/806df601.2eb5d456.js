"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[6930],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(o),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,i[1]=r;for(var p=2;p<l;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7518:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const l={},i="Logs",r={unversionedId:"installation/demo/logs",id:"installation/demo/logs",title:"Logs",description:"In this short tutorial we will demonstrate our logging feature and how it works. For the purposes of this tutorial you",source:"@site/docs/installation/demo/logs.md",sourceDirName:"installation/demo",slug:"/installation/demo/logs",permalink:"/docs/installation/demo/logs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Edit Module",permalink:"/docs/installation/demo/edit_module"},next:{title:"Writing templates",permalink:"/docs/templates/"}},s={},p=[{value:"New Module",id:"new-module",level:2},{value:"Pods and Containers",id:"pods-and-containers",level:2},{value:"View Logs",id:"view-logs",level:2},{value:"Potential problems",id:"potential-problems",level:2},{value:"Error loading template",id:"error-loading-template",level:3},{value:"Naming",id:"naming",level:3},{value:"Contact info@cyclops-ui.com",id:"contact-infocyclops-uicom",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logs"},"Logs"),(0,a.kt)("p",null,"In this short tutorial we will demonstrate our logging feature and how it works. For the purposes of this tutorial you\nare free to use our ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/petarcvit223/logs"},"Docker image")," that creates a log every few\nseconds, or use your own image that creates logs."),(0,a.kt)("h2",{id:"new-module"},"New Module"),(0,a.kt)("p",null,"We will create a new module, like we did in the ",(0,a.kt)("a",{parentName:"p",href:"new_module"},"previous tutorial")," but this time we will use a different\ntemplate. When prompted to insert the GitHub repository and path, use these values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"repository: https://github.com/cyclops-ui/templates\npath: multi\n")),(0,a.kt)("p",null,"Fill in the values, but the image should be ",(0,a.kt)("inlineCode",{parentName:"p"},"petarcvit223/logs")," if you are using our image. Set the version to ",(0,a.kt)("inlineCode",{parentName:"p"},"latest"),".\nServices can be toggled off, they are not needed for this tutorial."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Module &#39;multi&#39; Filled",src:o(9994).Z,title:"Module 'multi' Filled",width:"3010",height:"1708"})),(0,a.kt)("h2",{id:"pods-and-containers"},"Pods and Containers"),(0,a.kt)("p",null,"If you have successfully created the module, you should see the pods with multiple images."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Multiple Container Pods",src:o(8497).Z,title:"Multiple Container Pods",width:"2382",height:"1380"})),(0,a.kt)("p",null,"These pods actually house multiple containers inside them, hence the multiple images in the column, one for each of the\ncontainers."),(0,a.kt)("h2",{id:"view-logs"},"View Logs"),(0,a.kt)("p",null,"Now click on the ",(0,a.kt)("em",{parentName:"p"},"View Logs")," button. A new popup window has appeared. It contains the last 100 logs of our container.\nSince we have 2 containers in the pod, there are 2 tabs in the popup window - one for each of the containers."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Logs",src:o(602).Z,title:"Logs",width:"3022",height:"1710"})),(0,a.kt)("p",null,"If the pod doesn't have any logs, it will be indicated that there are no logs available for the pod."),(0,a.kt)("p",null,"Also, you can download the logs into a file to inspect all container logs."),(0,a.kt)("h2",{id:"potential-problems"},"Potential problems"),(0,a.kt)("h3",{id:"error-loading-template"},"Error loading template"),(0,a.kt)("p",null,"This usually means that you didn't input the right ",(0,a.kt)("inlineCode",{parentName:"p"},"url + path"),". When loading the template to Cyclops, you need to copy\nthe URL from the GitHub repository that leads to the template. The URL must lead towards a directory that holds a\n",(0,a.kt)("inlineCode",{parentName:"p"},"template")," folder."),(0,a.kt)("p",null,"In our example we used this URL { ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cyclops-ui/templates/tree/main/multi"},"https://github.com/cyclops-ui/templates/tree/main/multi")," } and filled\nthe form with the values bellow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"repository: https://github.com/cyclops-ui/templates\npath: multi    \n")),(0,a.kt)("h3",{id:"naming"},"Naming"),(0,a.kt)("p",null,"If Cyclops seemingly freezes when trying to save the module, it probably means you didn't follow ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/"},"the Kubernetes naming\nconvention"),"."),(0,a.kt)("ol",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ol",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","contain no more than 253 characters"),(0,a.kt)("li",{parentName:"ol",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","contain only ",(0,a.kt)("strong",{parentName:"li"},"lowercase")," alphanumeric characters, '-' or '. '"),(0,a.kt)("li",{parentName:"ol",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","start with an alphanumeric character"),(0,a.kt)("li",{parentName:"ol",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","end with an alphanumeric character")),(0,a.kt)("h3",{id:"contact-infocyclops-uicom"},"Contact ",(0,a.kt)("a",{parentName:"h3",href:"mailto:info@cyclops-ui.com"},"info@cyclops-ui.com")),(0,a.kt)("p",null,"If you have any problems with following the tutorial or the application itself, please contact us and we will reply as\nsoon as possible!"))}d.isMDXComponent=!0},9994:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/filled_logs_form-19ace9f9cadadb01429a0c9f36be7b9d.png"},602:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/logs-d214a1fe60e9525161383d3c1ac655d9.png"},8497:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/multiple_container_pods-79b179bd3dee435123b6bbc596c6394a.png"}}]);