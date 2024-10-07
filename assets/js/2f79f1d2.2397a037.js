"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[9522],{95997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=n(74848),i=n(28453);const c={},r="Usage metrics",o={id:"usage_metrics/usage_metrics",title:"Usage metrics",description:"Cyclops tracks usage metrics so that the maintainers can gain better insights into Cyclops usage. No sensitive or user data is sent; only triggered events, like a Cyclops instance start, are sent.",source:"@site/docs/usage_metrics/usage_metrics.md",sourceDirName:"usage_metrics",slug:"/usage_metrics/",permalink:"/docs/usage_metrics/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/docs/roadmap/"}},a={},l=[{value:"Turn off",id:"turn-off",level:2},{value:"Other",id:"other",level:2}];function d(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"usage-metrics",children:"Usage metrics"}),"\n",(0,s.jsx)(t.p,{children:"Cyclops tracks usage metrics so that the maintainers can gain better insights into Cyclops usage. No sensitive or user data is sent; only triggered events, like a Cyclops instance start, are sent."}),"\n",(0,s.jsx)(t.p,{children:"These events include:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.strong,{children:["- ",(0,s.jsx)(t.code,{children:"cyclops-instance-start"})]})," - triggered once at the start of cyclops-ctrl pod",(0,s.jsx)(t.br,{}),"\n",(0,s.jsxs)(t.strong,{children:["- ",(0,s.jsx)(t.code,{children:"module-creation"})]})," - called by the UI each time you create a new module",(0,s.jsx)(t.br,{}),"\n",(0,s.jsxs)(t.strong,{children:["- ",(0,s.jsx)(t.code,{children:"module-reconciliation"})]})," - each time a Module CRD in the cluster is changed",(0,s.jsx)(t.br,{}),"\n",(0,s.jsxs)(t.strong,{children:["- ",(0,s.jsx)(t.code,{children:"template-creation"})]})," - called each time a template is added in the ",(0,s.jsx)(t.code,{children:"Templates"})," tab",(0,s.jsx)(t.br,{}),"\n",(0,s.jsxs)(t.strong,{children:["- ",(0,s.jsx)(t.code,{children:"template-edit"})]})," - called each time a template is edited in the ",(0,s.jsx)(t.code,{children:"Templates"})," tab"]}),"\n",(0,s.jsxs)(t.p,{children:["The metric collection is implemented using ",(0,s.jsx)(t.a,{href:"https://posthog.com",children:"posthog"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Each time one of the events above is triggered, Cyclops sends an HTTP request to the posthog API with the following information:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "type": "capture",\n  "timestamp": "2024-03-23T19:05:38.808279+01:00",\n  "distinct_id": "f46d57f0-e93f-11ee-924c-8281c5d92ae4",\n  "event": "cyclops-instance-start",\n  "properties": {\n    "version": "v0.10.0"\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"distinct_id"})," - generated for each Cyclops instance using ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/google/uuid#NewUUID",children:"NewUUID"})," from google/uuid package",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.code,{children:"event"})," - which event was triggered; see events above",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.code,{children:"properties.version"})," - version of your Cyclops instance"]}),"\n",(0,s.jsx)(t.h2,{id:"turn-off",children:"Turn off"}),"\n",(0,s.jsxs)(t.p,{children:["If you wish to turn off tracking metrics, add an environment variable to cyclops-ctrl:",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.code,{children:"DISABLE_TELEMETRY: true"})]}),"\n",(0,s.jsxs)(t.p,{children:["You can turn it off by adding the env variable to your ",(0,s.jsx)(t.code,{children:"cyclops-ctrl"})," Deployment definition. Navigate to the ",(0,s.jsx)(t.code,{children:"env"})," part of the deployment definition and add the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'env:\n    - name: PORT\n      value: "8080"\n+   - name: DISABLE_TELEMETRY\n+     value: "true"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The metric collection is enabled by default but is ",(0,s.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops/blob/main/cyclops-ctrl/.env",children:"disabled in development"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"other",children:"Other"}),"\n",(0,s.jsxs)(t.p,{children:["If you have any additional questions about Cyclops and tracking usage metrics, reach out to us at ",(0,s.jsx)(t.a,{href:"mailto:info@cyclops-ui.com",children:"info@cyclops-ui.com"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const i={},c=s.createContext(i);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);