"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[6930],{580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(5893),s=n(1151);const i={},l="Logs",a={id:"installation/demo/logs",title:"Logs",description:"In this short tutorial we will demonstrate our logging feature and how it works. For the purposes of this tutorial you",source:"@site/docs/installation/demo/logs.md",sourceDirName:"installation/demo",slug:"/installation/demo/logs",permalink:"/docs/installation/demo/logs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Edit Module",permalink:"/docs/installation/demo/edit_module"},next:{title:"Feedback",permalink:"/docs/installation/demo/feedback"}},r={},d=[{value:"New Module",id:"new-module",level:2},{value:"Pods and Containers",id:"pods-and-containers",level:2},{value:"View Logs",id:"view-logs",level:2},{value:"Potential problems",id:"potential-problems",level:2},{value:"Error loading template",id:"error-loading-template",level:3},{value:"Naming",id:"naming",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"logs",children:"Logs"}),"\n",(0,o.jsxs)(t.p,{children:["In this short tutorial we will demonstrate our logging feature and how it works. For the purposes of this tutorial you\nare free to use our ",(0,o.jsx)(t.a,{href:"https://hub.docker.com/r/petarcvit223/logs",children:"Docker image"})," that creates a log every few\nseconds, or use your own image that creates logs."]}),"\n",(0,o.jsx)(t.h2,{id:"new-module",children:"New Module"}),"\n",(0,o.jsxs)(t.p,{children:["We will create a new module, like we did in the ",(0,o.jsx)(t.a,{href:"new_module",children:"previous tutorial"})," but this time we will use a different\ntemplate. When prompted to insert the GitHub repository and path, use these values:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"repository: https://github.com/cyclops-ui/templates\npath: multi\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Fill in the values, but the image should be ",(0,o.jsx)(t.code,{children:"petarcvit223/logs"})," if you are using our image. Set the version to ",(0,o.jsx)(t.code,{children:"latest"}),".\nServices can be toggled off, they are not needed for this tutorial."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Module &#39;multi&#39; Filled",src:n(9994).Z+"",title:"Module &#39;multi&#39; Filled",width:"3010",height:"1708"})}),"\n",(0,o.jsx)(t.h2,{id:"pods-and-containers",children:"Pods and Containers"}),"\n",(0,o.jsx)(t.p,{children:"If you have successfully created the module, you should see the pods with multiple images."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Multiple Container Pods",src:n(8497).Z+"",title:"Multiple Container Pods",width:"2382",height:"1380"})}),"\n",(0,o.jsx)(t.p,{children:"These pods actually house multiple containers inside them, hence the multiple images in the column, one for each of the\ncontainers."}),"\n",(0,o.jsx)(t.h2,{id:"view-logs",children:"View Logs"}),"\n",(0,o.jsxs)(t.p,{children:["Now click on the ",(0,o.jsx)(t.em,{children:"View Logs"})," button. A new popup window has appeared. It contains the last 100 logs of our container.\nSince we have 2 containers in the pod, there are 2 tabs in the popup window - one for each of the containers."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Logs",src:n(602).Z+"",title:"Logs",width:"3022",height:"1710"})}),"\n",(0,o.jsx)(t.p,{children:"If the pod doesn't have any logs, it will be indicated that there are no logs available for the pod."}),"\n",(0,o.jsx)(t.p,{children:"Also, you can download the logs into a file to inspect all container logs."}),"\n",(0,o.jsx)(t.h2,{id:"potential-problems",children:"Potential problems"}),"\n",(0,o.jsx)(t.h3,{id:"error-loading-template",children:"Error loading template"}),"\n",(0,o.jsxs)(t.p,{children:["This usually means that you didn't input the right ",(0,o.jsx)(t.code,{children:"url + path"}),". When loading the template to Cyclops, you need to copy\nthe URL from the GitHub repository that leads to the template. The URL must lead towards a directory that holds a\n",(0,o.jsx)(t.code,{children:"template"})," folder."]}),"\n",(0,o.jsx)(t.p,{children:"In our example we filled the form with the values bellow:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"repository: https://github.com/cyclops-ui/templates\npath: multi\n"})}),"\n",(0,o.jsx)(t.h3,{id:"naming",children:"Naming"}),"\n",(0,o.jsxs)(t.p,{children:["If Cyclops seemingly freezes when trying to save the module, it probably means you didn't follow ",(0,o.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/",children:"the Kubernetes naming\nconvention"}),"."]}),"\n",(0,o.jsxs)(t.ol,{className:"contains-task-list",children:["\n",(0,o.jsxs)(t.li,{className:"task-list-item",children:[(0,o.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","contain no more than 253 characters"]}),"\n",(0,o.jsxs)(t.li,{className:"task-list-item",children:[(0,o.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","contain only ",(0,o.jsx)(t.strong,{children:"lowercase"})," alphanumeric characters, '-' or '. '"]}),"\n",(0,o.jsxs)(t.li,{className:"task-list-item",children:[(0,o.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","start with an alphanumeric character"]}),"\n",(0,o.jsxs)(t.li,{className:"task-list-item",children:[(0,o.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","end with an alphanumeric character"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},9994:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/filled_logs_form-19ace9f9cadadb01429a0c9f36be7b9d.png"},602:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/logs-d214a1fe60e9525161383d3c1ac655d9.png"},8497:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/multiple_container_pods-79b179bd3dee435123b6bbc596c6394a.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var o=n(7294);const s={},i=o.createContext(s);function l(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);