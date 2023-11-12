"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[424],{1441:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=o(5893),l=o(1151);const i={},s="New Module",a={id:"installation/demo/new_module",title:"New Module",description:"Now that you have your Cyclops instance deployed locally, you can try to deploy an application into the cluster through",source:"@site/docs/installation/demo/new_module.md",sourceDirName:"installation/demo",slug:"/installation/demo/new_module",permalink:"/docs/installation/demo/new_module",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/installation/configuration"},next:{title:"The Module Screen",permalink:"/docs/installation/demo/module"}},c={},d=[{value:"Add a new module",id:"add-a-new-module",level:2},{value:"Define your module",id:"define-your-module",level:2},{value:"Try it out",id:"try-it-out",level:2},{value:"Potential problems",id:"potential-problems",level:2},{value:"Error loading template",id:"error-loading-template",level:3},{value:"Naming",id:"naming",level:3},{value:"Contact info@cyclops-ui.com",id:"contact-infocyclops-uicom",level:3}];function r(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"new-module",children:"New Module"}),"\n",(0,n.jsx)(t.p,{children:"Now that you have your Cyclops instance deployed locally, you can try to deploy an application into the cluster through\nCyclops"}),"\n",(0,n.jsx)(t.h2,{id:"add-a-new-module",children:"Add a new module"}),"\n",(0,n.jsxs)(t.p,{children:["When you start up Cyclops, the first screen that will be shown to you is the ",(0,n.jsx)(t.em,{children:"Modules"})," screen. This screen should be\nempty at the moment. What we want to do next is click on the ",(0,n.jsx)(t.em,{children:"Add module"})," button in the top right corner."]}),"\n",(0,n.jsx)(t.h2,{id:"define-your-module",children:"Define your module"}),"\n",(0,n.jsxs)(t.p,{children:["Now we want to define our new module. Under the ",(0,n.jsx)(t.em,{children:"Module template"})," we want to put the url that leads towards a GitHub\nrepository where we saved our configuration files. For the sake of this tutorial we will be using our own\n",(0,n.jsx)(t.a,{href:"https://github.com/cyclops-ui/templates",children:"template"})," which holds a configuration template we made for testing purposes.\nFeel free to use our template repository! We will be using the ",(0,n.jsx)(t.em,{children:"demo"})," template from the repository. Also for any\ntemplate you can specify the version which is the third field. If you are referncing a template stored in git you can\nspecify a version as a branch name, tag or a commit hash. If you don't specify anything, it would default to the latest\ncommit on the default branch."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Filled Module Template",src:o(1426).Z+"",title:"Filled Module Template",width:"1966",height:"208"})}),"\n",(0,n.jsx)(t.p,{children:"The left field should be the root folder of your repository, while the right field should be the path towards the\ntemplate directory. After populating the fields, click load and if you filled the fields correctly, there will be a success\nmessage at the top of the screen and you will receive new fields to fill."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Successfully loaded template",src:o(8692).Z+"",title:"Successfully loaded template",width:"3020",height:"1714"})}),"\n",(0,n.jsx)(t.p,{children:"Now all that's left to do is fill the form with values!\nHere is an example of values you could use:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"Module name: demo\nname: demo-1\nreplicas: 3\nimage: nginx\nversion: 1.14.2\nservice: true\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now click save and you should see your new module listed!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Listed Module",src:o(6848).Z+"",title:"Listed Module",width:"3022",height:"1708"})}),"\n",(0,n.jsx)(t.h2,{id:"try-it-out",children:"Try it out"}),"\n",(0,n.jsxs)(t.p,{children:["Once you have deployed your application, you can check its resources and information on the Module details page. If you\nhave tried out Cyclops with the suggested template and values, you can open your application by exposing it to the\noutside world and visiting it.",(0,n.jsx)(t.br,{}),"\n","You can expose it with the following command"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"kubectl port-forward svc/demo-1 8888:80\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If this step was successful, you could try visiting ",(0,n.jsx)(t.a,{href:"http://localhost:8888",children:"http://localhost:8888"}),", and you should see the Nginx hello message."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Welcome to Nginx",src:o(9893).Z+"",title:"Listed Module",width:"1300",height:"480"})}),"\n",(0,n.jsx)(t.p,{children:"Of course, this is just a simple example, but using Cyclops and a predefined template, you could deploy and expose your\napplication in a few clicks without having to get into the details of Kubernetes figuring out how to deploy your\napplication."}),"\n",(0,n.jsx)(t.h2,{id:"potential-problems",children:"Potential problems"}),"\n",(0,n.jsx)(t.h3,{id:"error-loading-template",children:"Error loading template"}),"\n",(0,n.jsxs)(t.p,{children:["This usually means that you didn't input the right ",(0,n.jsx)(t.code,{children:"url + path + version"}),". When loading the template to Cyclops, you\nneed to copy the URL from the GitHub repository that leads to the template. The URL must lead towards a directory that\nholds a ",(0,n.jsx)(t.code,{children:"template"})," folder."]}),"\n",(0,n.jsx)(t.p,{children:"In our example we filled the form with the values bellow:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"repository: https://github.com/cyclops-ui/templates\npath: demo    \nversion: main\n"})}),"\n",(0,n.jsx)(t.h3,{id:"naming",children:"Naming"}),"\n",(0,n.jsxs)(t.p,{children:["If Cyclops seemingly freezes when trying to save the module, it probably means you didn't follow ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/",children:"the Kubernetes naming\nconvention"}),"."]}),"\n",(0,n.jsxs)(t.ol,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","contain no more than 253 characters"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","contain only ",(0,n.jsx)(t.strong,{children:"lowercase"})," alphanumeric characters, '-' or '. '"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","start with an alphanumeric character"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","end with an alphanumeric character"]}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"contact-infocyclops-uicom",children:["Contact ",(0,n.jsx)(t.a,{href:"mailto:info@cyclops-ui.com",children:"info@cyclops-ui.com"})]}),"\n",(0,n.jsx)(t.p,{children:"If you have any problems with following the tutorial or the application itself, please contact us and we will reply as\nsoon as possible!"})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},6848:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/module_listed-0b731b7a9d3d4fdc8c5438762f219497.png"},1426:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/module_template-7a6b7a86ce52cf405086dd9139294981.png"},9893:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/nginx_hello-1dfffec4ac61a29a913daead93a5793d.png"},8692:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/template_load_success-5ad6ca581895e9eb68c4461598fa37be.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>s});var n=o(7294);const l={},i=n.createContext(l);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);