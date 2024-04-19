"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[1948],{43803:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>r});var s=e(85893),l=e(11151);const a={sidebar_label:"Using kubectl"},o="Install",c={id:"installation/install/manifest",title:"Install",description:"To install Cyclops in your cluster, run commands below:",source:"@site/docs/installation/install/manifest.md",sourceDirName:"installation/install",slug:"/installation/install/manifest",permalink:"/docs/installation/install/manifest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Using kubectl"},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/docs/installation/install"},next:{title:"Using Glasskube",permalink:"/docs/installation/install/glasskube"}},i={},r=[];function u(n){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"install",children:"Install"}),"\n",(0,s.jsx)(t.p,{children:"To install Cyclops in your cluster, run commands below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/cyclops-ui/cyclops/v0.3.1/install/cyclops-install.yaml && kubectl apply -f https://raw.githubusercontent.com/cyclops-ui/cyclops/v0.3.1/install/demo-templates.yaml\n"})}),"\n",(0,s.jsxs)(t.p,{children:["It will create a new namespace called ",(0,s.jsx)(t.code,{children:"cyclops"})," and deploy everything you need for your Cyclops instance to run."]}),"\n",(0,s.jsx)(t.p,{children:"Now all that is left is to expose Cyclops server outside the cluster:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl port-forward svc/cyclops-ui 3000:3000 -n cyclops\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can now access Cyclops in your browser on ",(0,s.jsx)(t.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),"."]})]})}function p(n={}){const{wrapper:t}={...(0,l.a)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>c,a:()=>o});var s=e(67294);const l={},a=s.createContext(l);function o(n){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),s.createElement(a.Provider,{value:t},n.children)}}}]);