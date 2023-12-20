"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[719],{3255:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=s(5893),r=s(1151);const i={},o="Writing templates",l={id:"templates/templates",title:"Writing templates",description:"You can create your own template UIs by creating a helm template and pushing to a git repository. Cyclops renders the",source:"@site/docs/templates/templates.md",sourceDirName:"templates",slug:"/templates/",permalink:"/docs/templates/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Feedback",permalink:"/docs/installation/demo/feedback"},next:{title:"Roadmap",permalink:"/docs/roadmap/"}},c={},d=[];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"writing-templates",children:"Writing templates"}),"\n",(0,n.jsxs)(t.p,{children:["You can create your own template UIs by creating a helm template and pushing to a git repository. Cyclops renders the\nform based on the ",(0,n.jsx)(t.code,{children:"values.schema.json"})," file. That file is used to define values structure in Helm. You can learn more\nabout it and learn how to create one by following ",(0,n.jsx)(t.a,{href:"https://helm.sh/docs/topics/charts/#schema-files",children:"Helm docs"}),". The\nschema is represented as a ",(0,n.jsx)(t.a,{href:"https://json-schema.org/",children:"JSON Schema"})]}),"\n",(0,n.jsx)(t.p,{children:"On top of the usual schema, we added some more fields to help our users get as much from the UI."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{children:"Valid input"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"order"})}),(0,n.jsx)(t.td,{children:"string array"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Defines the order of the fields in an object type property. ",(0,n.jsx)("br",{})," Basically each time you use ",(0,n.jsx)(t.code,{children:"properties"}),", you should also define the order of those properties"]}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"fileExtension"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Sometimes you would like your text field not to be just a field, but also to get some highlighting based on the type of string you are saving. You can specify that in this field"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"text"}),", ",(0,n.jsx)(t.code,{children:"sh"}),", ",(0,n.jsx)(t.code,{children:"json"}),", ",(0,n.jsx)(t.code,{children:"yaml"}),", ",(0,n.jsx)(t.code,{children:"toml"}),", ",(0,n.jsx)(t.code,{children:"javascript"}),", ",(0,n.jsx)(t.code,{children:"typescript"})]})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To be implemented"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops/issues/74",children:"Templates can be referenced only from git, and cannot be fetched from a Helm repo"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops/issues/75",children:"Helm chart dependencies are not yet supported"})}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>o});var n=s(7294);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);