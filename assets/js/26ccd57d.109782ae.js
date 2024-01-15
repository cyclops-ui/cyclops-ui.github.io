"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[4672],{6345:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var s=t(5893),i=t(1151);const o={title:"Helm chart dependencies"},d="Helm chart dependencies",a={id:"templates/dependencies",title:"Helm chart dependencies",description:"Supported from  v0.0.1-alpha.8",source:"@site/docs/templates/dependencies.md",sourceDirName:"templates",slug:"/templates/dependencies",permalink:"/docs/templates/dependencies",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Helm chart dependencies"},sidebar:"tutorialSidebar",previous:{title:"Validation",permalink:"/docs/templates/validations"},next:{title:"Roadmap",permalink:"/docs/roadmap/"}},c={},r=[{value:"Demo time \u2692\ufe0f",id:"demo-time-\ufe0f",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"helm-chart-dependencies",children:"Helm chart dependencies"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Supported from ",(0,s.jsx)(n.a,{href:"https://github.com/cyclops-ui/cyclops/releases/tag/v0.0.1-alpha.8",children:" v0.0.1-alpha.8 "})]})}),"\n",(0,s.jsxs)(n.p,{children:["This part will go over how Cyclops implements Helm chart dependencies. You can find out more about chart dependencies on ",(0,s.jsx)(n.a,{href:"https://helm.sh/docs/helm/helm_dependency/",children:"Helm docs"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Dependencies allow us to reference another Helm chart and use it in the context of our application without having to configure multiple K8s resources separately."}),"\n",(0,s.jsx)(n.p,{children:"For instance, you might want to deploy an application that uses Redis as its cache storage, but you don't want to add all of those resources for a Redis deployment into your template. You can simply add an existing Redis Helm chart as a dependency to your chart and get your Redis up and running without the hassle of copy-pasting resources."}),"\n",(0,s.jsxs)(n.p,{children:["Since Helm supports dependencies, it makes sense that Cyclops also supports them. You can reference dependencies in the ",(0,s.jsx)(n.code,{children:"Chart.yaml"})," of your root template if you want to use dependencies. Refer to Helm docs for more info on how to do it, but here is an ",(0,s.jsx)(n.a,{href:"https://github.com/cyclops-ui/templates/blob/c3ade79f4d0a7d7147650e1fcc393da082d1b753/demo/Chart.yaml",children:"example"})," of how to do it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# Chart.yaml from the earlier example\n\napiVersion: v1\nname: application\nversion: 0.0.0\ndependencies:\n  - name: application\n    version: "0.3.0"\n    repository: "https://petar-cvit.github.io"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Cyclops will render a new object in your UI for each dependency you specify. This object will be named after the dependency, and its fields will be rendered based on its JSON schema. It does that recursively for all dependencies."}),"\n",(0,s.jsx)(n.h2,{id:"demo-time-\ufe0f",children:"Demo time \u2692\ufe0f"}),"\n",(0,s.jsx)(n.p,{children:"You can try out dependencies by loading the module with the following values:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"repository: https://github.com/cyclops-ui/templates\npath: dependencies-demo\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You should get a screen similar to the one in the picture below. All the fields from the template have been rendered as expected and alongside them on an additional object --  ",(0,s.jsx)(n.code,{children:"application"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Dependencies rendering",src:t(7354).Z+"",title:"Dependencies rendering",width:"3024",height:"1710"})}),"\n",(0,s.jsxs)(n.p,{children:["It is called ",(0,s.jsx)(n.code,{children:"application"})," since it is the name of the dependency we pulled. All the nested fields inside it are rendered based on dependency schema, so be aware that your dependencies must also have a schema defined. It is also automatically populated with default fields from the dependent charts ",(0,s.jsx)(n.code,{children:"values.yaml"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Here is the link to the GitHub repo where the dependency chart is stored ",(0,s.jsx)(n.a,{href:"https://github.com/petar-cvit/petar-cvit.github.io/tree/gh-pages",children:"https://github.com/petar-cvit/petar-cvit.github.io/tree/gh-pages"})]}),"\n",(0,s.jsxs)(n.p,{children:["Once you input all the fields and hit the ",(0,s.jsx)(n.code,{children:"save"})," button, all resources from your root template and all its dependencies get deployed and shown on your Module detail page."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(1984).Z+"",width:"3024",height:"1712"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Version ",(0,s.jsx)(n.code,{children:"v0.0.8-alpha"})," does not support ",(0,s.jsx)(n.code,{children:"alias"})," and ",(0,s.jsx)(n.code,{children:"import-values"}),"."]}),(0,s.jsxs)(n.p,{children:["At the moment, when you reference a dependency, it is automatically included in your chart. ",(0,s.jsx)(n.code,{children:"condition"})," and ",(0,s.jsx)(n.code,{children:"tags"})," properties are not yet supported."]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1984:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/dependencies-resources-29ba3a1519a398d4580f4e3d08e63f56.png"},7354:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/dependencies-8ce74c5776bf48e5991e433cab385935.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>d});var s=t(7294);const i={},o=s.createContext(i);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);