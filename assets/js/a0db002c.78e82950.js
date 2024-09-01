"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[7063],{6266:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var s=e(74848),l=e(28453);const o={sidebar_label:"Using kubectl"},c="Install",a={id:"installation/install/manifest",title:"Install",description:"To install Cyclops in your cluster, run commands below:",source:"@site/docs/installation/install/manifest.md",sourceDirName:"installation/install",slug:"/installation/install/manifest",permalink:"/docs/installation/install/manifest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Using kubectl"},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/docs/installation/install"},next:{title:"Using Glasskube",permalink:"/docs/installation/install/glasskube"}},i={},r=[];function u(n){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"install",children:"Install"}),"\n",(0,s.jsx)(t.p,{children:"To install Cyclops in your cluster, run commands below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/cyclops-ui/cyclops/v0.9.0/install/cyclops-install.yaml && kubectl apply -f https://raw.githubusercontent.com/cyclops-ui/cyclops/v0.9.0/install/demo-templates.yaml\n"})}),"\n",(0,s.jsxs)(t.p,{children:["It will create a new namespace called ",(0,s.jsx)(t.code,{children:"cyclops"})," and deploy everything you need for your Cyclops instance to run."]}),"\n",(0,s.jsx)(t.p,{children:"Now all that is left is to expose Cyclops server outside the cluster:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl port-forward svc/cyclops-ui 3000:3000 -n cyclops\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can now access Cyclops in your browser on ",(0,s.jsx)(t.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),"."]})]})}function p(n={}){const{wrapper:t}={...(0,l.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>c,x:()=>a});var s=e(96540);const l={},o=s.createContext(l);function c(n){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),s.createElement(o.Provider,{value:t},n.children)}}}]);