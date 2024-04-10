"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[3240],{8209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(5893),a=n(1151);const i={},o="Template Storage",r={id:"templates/template_storage",title:"Template Storage",description:'Version v0.3.0 introduced a new tab to the sidebar: Templates. Here, you can find your "storage" of templates. Each entry references a Helm chart located in either a GitHub, Helm, or Oci repository.',source:"@site/docs/templates/template_storage.md",sourceDirName:"templates",slug:"/templates/template_storage",permalink:"/docs/templates/template_storage",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/templates/"},next:{title:"Validation",permalink:"/docs/templates/validations"}},l={},c=[{value:"Adding New Templates",id:"adding-new-templates",level:2},{value:"Naming",id:"naming",level:3},{value:"Editing Template References",id:"editing-template-references",level:2},{value:"Deleting Template References",id:"deleting-template-references",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"template-storage",children:"Template Storage"}),"\n",(0,s.jsxs)(t.p,{children:["Version ",(0,s.jsx)(t.code,{children:"v0.3.0"})," introduced a new tab to the sidebar: ",(0,s.jsx)(t.em,{children:"Templates"}),'. Here, you can find your "storage" of templates. Each entry references a Helm chart located in either a GitHub, Helm, or Oci repository.']}),"\n",(0,s.jsxs)(t.p,{children:["Each instance of Cyclops has a couple of templates to get you started. You can see how these charts look in our open ",(0,s.jsx)(t.a,{href:"https://github.com/cyclops-ui/templates",children:"templates repository"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Template Storage",src:n(1763).Z+"",width:"3024",height:"1886"})}),"\n",(0,s.jsx)(t.h2,{id:"adding-new-templates",children:"Adding New Templates"}),"\n",(0,s.jsxs)(t.p,{children:["If you want to add your own templates, click the ",(0,s.jsx)(t.em,{children:"Add template reference"}),". A modal will appear asking you for a pointer to your template."]}),"\n",(0,s.jsx)(t.p,{children:"Here are some things to watch out for when connecting your templates.\nLet's take this repository for example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"-repository/\n    - demo/\n        - templates/\n        - Chart.yaml\n        - values.schema.json\n        - values.yaml\n"})}),"\n",(0,s.jsx)(t.p,{children:"If we wanted to connect the demo template:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Name"})," must follow the ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names",children:"Kubernetes naming convention"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Repository URL"})," must lead to ",(0,s.jsx)(t.code,{children:"repository/"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Path"})," must be ",(0,s.jsx)(t.code,{children:"demo"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Version"})," can be left empty / branch name / tag / commit hash"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Once you store a reference to your template, the next time you try to create a new module, it will be shown in the dropdown when selecting templates."}),"\n",(0,s.jsx)(t.h3,{id:"naming",children:"Naming"}),"\n",(0,s.jsxs)(t.p,{children:["Cyclops does not have storage of its own. It uses our CRD and the ETCD database of Kubernetes to store your template references. That is why the name of your templates has to adhere to the ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names",children:"Kubernetes naming convention"})," because it is a Kubernetes resource.\nFollow these rules when naming your templates:"]}),"\n",(0,s.jsxs)(t.ol,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","contain no more than 63 characters"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","contain only ",(0,s.jsx)(t.strong,{children:"lowercase"})," alphanumeric characters or '-'"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","start with an alphanumeric character"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","end with an alphanumeric character"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"editing-template-references",children:"Editing Template References"}),"\n",(0,s.jsx)(t.p,{children:"You can edit yout template references by clicking on the blue pencil icon on your template. Everything except the name of the template is editable."}),"\n",(0,s.jsx)(t.h2,{id:"deleting-template-references",children:"Deleting Template References"}),"\n",(0,s.jsxs)(t.p,{children:["If you find yourself with unwanted templates, you can easily delete them by clicking on the red trash can icon. A modal will open asking you to input the name of the template. Once written, the ",(0,s.jsx)(t.em,{children:"delete"})," button will be enabled."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1763:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/templates-tab-183a2b39c0c77f41b82c94f67f0362e3.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(7294);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);