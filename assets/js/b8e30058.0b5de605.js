"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[9836],{16734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(85893),o=n(11151);const r={},c="Core concepts",a={id:"concepts/concepts",title:"Core concepts",description:"For the sake of the rest of the docs to be more clear, here are some Cyclops-specific terms that will be used:",source:"@site/docs/concepts/concepts.md",sourceDirName:"concepts",slug:"/concepts/",permalink:"/docs/concepts/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"About Cyclops",permalink:"/docs/about/"},next:{title:"Prerequisites",permalink:"/docs/installation/prerequisites"}},i={},l=[];function p(e){const t={h1:"h1",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"core-concepts",children:"Core concepts"}),"\n",(0,s.jsx)(t.p,{children:"For the sake of the rest of the docs to be more clear, here are some Cyclops-specific terms that will be used:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)("strong",{children:"Module"})," - an umbrella for all the Kubernetes resources your application needs to work as expected. For\nexample, your application might require a deployment, a service, and an ingress to do its job. All of those are\nabstracted under a Cyclops Module. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)("strong",{children:"Template"})," - each Module references a Template that maps values from the Module into a valid Kubernetes\nmanifest. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)("strong",{children:"Template origin"})," - templates can live on different places. You can store your templates as Helm charts,\non git, or even inside Cyclops. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)("strong",{children:"Template version"})," - a part of the template reference in each Module is the version of the template.\nTemplates can evolve and change over time, and in order to maintain changes in your system, you can reference different\ntemplate versions in different Modules. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var s=n(67294);const o={},r=s.createContext(o);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);