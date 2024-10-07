"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[4548],{79968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(74848),i=n(28453);const s={},l="New Module",a={id:"installation/demo/new_module",title:"New Module",description:"Now that your Cyclops instance is deployed locally, you can deploy an application into the cluster through Cyclops.",source:"@site/docs/installation/demo/new_module.md",sourceDirName:"installation/demo",slug:"/installation/demo/new_module",permalink:"/docs/installation/demo/new_module",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/installation/configuration"},next:{title:"The Module Screen",permalink:"/docs/installation/demo/module"}},r={},d=[{value:"Add a New Module",id:"add-a-new-module",level:2},{value:"Define Your Module",id:"define-your-module",level:2},{value:"Module Overview",id:"module-overview",level:2},{value:"Potential Problems",id:"potential-problems",level:2},{value:"Naming",id:"naming",level:3},{value:"Error Loading Template",id:"error-loading-template",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"new-module",children:"New Module"}),"\n",(0,o.jsx)(t.p,{children:"Now that your Cyclops instance is deployed locally, you can deploy an application into the cluster through Cyclops."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Modules",src:n(90754).A+"",width:"3024",height:"1890"})}),"\n",(0,o.jsx)(t.h2,{id:"add-a-new-module",children:"Add a New Module"}),"\n",(0,o.jsxs)(t.p,{children:["When you start up Cyclops, the first screen shown to you is the ",(0,o.jsx)(t.em,{children:"Modules"})," screen. This screen should be empty at the moment. What we want to do next is click on the ",(0,o.jsx)(t.em,{children:"Add module"})," button in the top right corner."]}),"\n",(0,o.jsx)(t.h2,{id:"define-your-module",children:"Define Your Module"}),"\n",(0,o.jsxs)(t.p,{children:["Now, we want to define our new module. Every Cyclops instance comes with a couple of predefined templates, which we included. From the dropdown under ",(0,o.jsx)(t.em,{children:"Module template"}),", you can choose which predefined templates you want to use. For the sake of this tutorial, we will use ",(0,o.jsx)(t.code,{children:"demo-template"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you want to learn more about templates and how to create your own, check out the ",(0,o.jsx)(t.a,{href:"/docs/templates/",children:"Templates section"}),"!"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Loaded Template",src:n(88258).A+"",width:"3024",height:"1892"})}),"\n",(0,o.jsx)(t.p,{children:"If you play around with different templates, you will find that Cyclops is highly customizable. Depending on the template used, this screen will be different."}),"\n",(0,o.jsxs)(t.p,{children:["Now, all left to do is fill the form with values and click ",(0,o.jsx)(t.em,{children:"Save"}),"!"]}),"\n",(0,o.jsx)(t.p,{children:"Here is an example of values you could use:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"Module name: demo\nname: demo-1\nreplicas: 3\nimage: nginx\nversion: 1.14.2\nservice: true\n"})}),"\n",(0,o.jsx)(t.h2,{id:"module-overview",children:"Module Overview"}),"\n",(0,o.jsx)(t.p,{children:"Once you have deployed your application, you will be taken to a new page to find the overview of all the resources your new module uses."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Module Details",src:n(78663).A+"",width:"3024",height:"1892"})}),"\n",(0,o.jsx)(t.p,{children:"If you have tried out Cyclops with the suggested template and values, you can open your deployed application by exposing it to the outside world and visiting it.\nExpose it with the following command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"kubectl port-forward svc/demo-1 8888:80\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If this step was successful, you could try visiting ",(0,o.jsx)(t.a,{href:"http://localhost:8888",children:"http://localhost:8888"}),", and you should see the Nginx hello message."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Welcome to Nginx",src:n(13643).A+"",width:"1300",height:"480"})}),"\n",(0,o.jsx)(t.p,{children:"This was just a simple example. There are more templates for you to explore, and you could try creating your own."}),"\n",(0,o.jsx)(t.h2,{id:"potential-problems",children:"Potential Problems"}),"\n",(0,o.jsx)(t.h3,{id:"naming",children:"Naming"}),"\n",(0,o.jsxs)(t.p,{children:["If an error pops up referencing ",(0,o.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/",children:"the Kubernetes naming\nconvention"}),", try conforming to the following rules:"]}),"\n",(0,o.jsxs)(t.ol,{className:"contains-task-list",children:["\n",(0,o.jsxs)(t.li,{className:"task-list-item",children:[(0,o.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","contain no more than 63 characters"]}),"\n",(0,o.jsxs)(t.li,{className:"task-list-item",children:[(0,o.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","contain only ",(0,o.jsx)(t.strong,{children:"lowercase"})," alphanumeric characters or '-'"]}),"\n",(0,o.jsxs)(t.li,{className:"task-list-item",children:[(0,o.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","start with an alphanumeric character"]}),"\n",(0,o.jsxs)(t.li,{className:"task-list-item",children:[(0,o.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","end with an alphanumeric character"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"error-loading-template",children:"Error Loading Template"}),"\n",(0,o.jsx)(t.p,{children:"If you are using your own template, be sure that you connected it correctly."}),"\n",(0,o.jsxs)(t.p,{children:["This usually means that you didn't input the right ",(0,o.jsx)(t.code,{children:"url + path + version"}),". When connecting the template to Cyclops, you need to copy the URL from the GitHub repository that leads to the template. The URL must lead to a directory that holds a ",(0,o.jsx)(t.code,{children:"template"})," folder."]}),"\n",(0,o.jsx)(t.p,{children:"In our example, we filled the form with the values below:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"repository: https://github.com/cyclops-ui/templates\npath: demo\nversion: main\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Try connecting it again in the ",(0,o.jsx)(t.code,{children:"Templates"})," tab."]}),"\n",(0,o.jsxs)(t.admonition,{type:"warning",children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Private repositories are not yet supported!"})}),(0,o.jsx)(t.p,{children:"This is currently a high priority on our roadmap, and you should expect support for private repositories sooner rather than later."})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},88258:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/loaded-template-a761ad3e27e07d0440514cdd4626bedc.png"},78663:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/module-details-ffff0c0001251be8a4c59fea9384d259.png"},90754:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/modules-list-85405305622b9e02e978b4db2a35083f.png"},13643:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/nginx-hello-1dfffec4ac61a29a913daead93a5793d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function l(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);