"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[719],{3255:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=s(5893),r=s(1151);const o={},i="Writing templates",l={id:"templates/templates",title:"Writing templates",description:"You can create your own template UIs by creating a helm template and pushing to a git repository. Cyclops renders the",source:"@site/docs/templates/templates.md",sourceDirName:"templates",slug:"/templates/",permalink:"/docs/templates/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logs",permalink:"/docs/installation/demo/logs"},next:{title:"Roadmap",permalink:"/docs/roadmap/"}},c={},d=[];function a(e){const t={a:"a",code:"code",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"writing-templates",children:"Writing templates"}),"\n",(0,n.jsxs)(t.p,{children:["You can create your own template UIs by creating a helm template and pushing to a git repository. Cyclops renders the\nform based on the ",(0,n.jsx)(t.code,{children:"values.schema.json"})," file. That file is used to define values structure in Helm. You can learn more\nabout it and learn how to create one by following ",(0,n.jsx)(t.a,{href:"https://helm.sh/docs/topics/charts/#schema-files",children:"Helm docs"}),". The\nschema is represented as a ",(0,n.jsx)(t.a,{href:"https://json-schema.org/",children:"JSON Schema"})]}),"\n",(0,n.jsx)(t.p,{children:"On top of the usual schema, we added some more fields to help our users get as much from the UI."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{children:"Valid input"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"order"})}),(0,n.jsx)(t.td,{children:"string array"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Defines the order of the fields in an object type property. ",(0,n.jsx)("br",{})," Basically each time you use ",(0,n.jsx)(t.code,{children:"properties"}),", you should also define the order of those properties"]}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"fileExtension"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Sometimes you would like your text field not to be just a field, but also to get some highlighting based on the type of string you are saving. You can specify that in this field"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"text"}),", ",(0,n.jsx)(t.code,{children:"sh"}),", ",(0,n.jsx)(t.code,{children:"json"}),", ",(0,n.jsx)(t.code,{children:"yaml"}),", ",(0,n.jsx)(t.code,{children:"toml"}),", ",(0,n.jsx)(t.code,{children:"javascript"}),", ",(0,n.jsx)(t.code,{children:"typescript"})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>i});var n=s(7294);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);