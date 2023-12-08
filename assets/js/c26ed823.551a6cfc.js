"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[221],{1244:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=s(5893),o=s(1151);const a={title:"How Cyclops utilizes JSON schema to deliver dynamical UI",authors:["petarc"]},i=void 0,l={permalink:"/blog/2023/11/13/JSON-schemas",source:"@site/blog/2023-11-13-JSON-schemas/index.md",title:"How Cyclops utilizes JSON schema to deliver dynamical UI",description:"Cyclops turns complicated YAML manifests into simple and structured UIs where developers can click away their Kubernetes application configuration.",date:"2023-11-13T00:00:00.000Z",formattedDate:"November 13, 2023",tags:[],readingTime:3.725,hasTruncateMarker:!1,authors:[{name:"Petar Cvitanovi\u0107",title:"Cyclops CTO",url:"https://github.com/petar-cvit",imageURL:"https://github.com/petar-cvit.png",key:"petarc"}],frontMatter:{title:"How Cyclops utilizes JSON schema to deliver dynamical UI",authors:["petarc"]},unlisted:!1,prevItem:{title:"Five Kubernetes Development Tools for Efficient Cluster Management",permalink:"/blog/2023/12/08/five-kubernetes-tools"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},r={authorsImageUrls:[void 0]},c=[{value:"A bit about Helm",id:"a-bit-about-helm",level:2},{value:"Helm values schema and Cyclops UI",id:"helm-values-schema-and-cyclops-ui",level:2},{value:"Final thoughts",id:"final-thoughts",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Cyclops turns complicated YAML manifests into simple and structured UIs where developers can click away their Kubernetes application configuration.\n\u201dGreat! But how does it know how to render this UI? Should I implement a UI form each time I need a new set of fields to configure? I don\u2019t know React! I don\u2019t know frontend!\u201c"}),"\n",(0,n.jsx)(t.p,{children:"This blog post should cure your anxiety about implementing a UI for each type of application and explain how Cyclops knows what to render so you can deploy to your K8s cluster carefree."}),"\n",(0,n.jsx)(t.p,{children:"To better understand how Cyclops renders the UI, we will scratch the surface of Helm, which Cyclops uses as its templating engine."}),"\n",(0,n.jsx)(t.h2,{id:"a-bit-about-helm",children:"A bit about Helm"}),"\n",(0,n.jsx)(t.p,{children:"Helm is a Kubernetes package manager that helps deploy and manage Kubernetes resources by packing them into charts. It also has a templating engine that allows developers to configure their apps depending on the specific values injected into the helm template."}),"\n",(0,n.jsx)(t.p,{children:"The usual Helm chart structure is as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"\u251c\u2500\u2500 Chart.yaml\n\u251c\u2500\u2500 templates\n\u2502   \u251c\u2500\u2500 deployment.yaml\n\u2502   \u2514\u2500\u2500 service.yaml\n\u251c\u2500\u2500 values.schema.json\n\u2514\u2500\u2500 values.yaml\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["A few other Helm chart parts are left out on purpose since they are not tangible to the rest of the blog. You can read more about each of those in ",(0,n.jsx)(t.a,{href:"https://helm.sh/docs/topics/charts/",children:"Helm\u2019s official documentation"})]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Chart.yaml"})," - A YAML file containing information about the chart (like name, version\u2026)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"templates"})," - A directory of templates that, when combined with values, will generate valid Kubernetes manifest files"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"values.yaml"})," - The default configuration values for this chart"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"values.schema.json"})," - A JSON Schema for imposing a structure on the ",(0,n.jsx)(t.code,{children:"values.yaml"})," file"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["When using Helm, you can change your ",(0,n.jsx)(t.code,{children:"values.yaml"})," however you see fit for your application. The problem is that you can change them ",(0,n.jsx)(t.strong,{children:"however"})," you like, which allows you to misconfigure some parts of your application because you misspelled a field or messed up indentation in the ",(0,n.jsx)(t.code,{children:"values.yaml"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Here is where ",(0,n.jsx)(t.a,{href:"https://json-schema.org",children:"JSON schema"})," from the ",(0,n.jsx)(t.code,{children:"values.schema.json"})," comes in. It will define which fields you should set and even to which values (e.g., you can specify that a field called replicas can\u2019t be set to lower than 0). Helm won\u2019t let you render a Kubernetes manifest with values that don\u2019t comply with the schema. There is an example of such schema later in the blog, but you can also check it out on ",(0,n.jsx)(t.a,{href:"https://helm.sh/docs/topics/charts/#schema-files",children:"Helms official docs"})]}),"\n",(0,n.jsx)(t.h2,{id:"helm-values-schema-and-cyclops-ui",children:"Helm values schema and Cyclops UI"}),"\n",(0,n.jsx)(t.p,{children:"Now that the schema's purpose in a Helm chart is explained let\u2019s get into how Cyclops uses it."}),"\n",(0,n.jsx)(t.p,{children:"Since the primary purpose of the values schema is to describe what the Helm chart needs to render all the Kubernetes resources, we naturally decided to use it for rendering the UI. On the first iterations of Cyclops, we implemented a solution where users can define those fields in the UI, but why reinvent the wheel when Helm already provided a way to specify this?"}),"\n",(0,n.jsxs)(t.p,{children:["Cyclops controller reads the Helm chart and values schema. Then, it recursively traverses through all the fields in the schema and renders the field based on the field specification. It knows how to render a field based on the field type (",(0,n.jsx)(t.code,{children:"string"}),", ",(0,n.jsx)(t.code,{children:"boolean"}),", ",(0,n.jsx)(t.code,{children:"object"}),", ",(0,n.jsx)(t.code,{children:"array"}),"...), description of the field, field rules (e.g., minimum or maximum value), and many more."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Untitled",src:s(4090).Z+"",width:"3280",height:"1234"})}),"\n",(0,n.jsxs)(t.p,{children:["Now that the UI is rendered, a user of Cyclops can click through the form and fill in those fields. Thanks to the schema, values entered by a developer will now always conform to the schema since the UI won\u2019t let you specify any fields (e.g., allow you typos in field names) or set the number of replicas to ",(0,n.jsx)(t.code,{children:"three"})," instead of ",(0,n.jsx)(t.code,{children:"3"}),". This is an exaggerated example, but you can probably see the point. The UI will take care of validating your input, and you will have clear guidelines on how to configure your service."]}),"\n",(0,n.jsxs)(t.p,{children:["Once values are entered and saved in the UI, they are passed to the Helm templating engine and the templates from the ",(0,n.jsx)(t.code,{children:"/templates"})," folder. This results in all Kubernetes resources being configured for the needs of each team/developer without getting into specific implementation details of each resource."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Untitled",src:s(1050).Z+"",width:"2392",height:"1770"})}),"\n",(0,n.jsx)(t.h2,{id:"final-thoughts",children:"Final thoughts"}),"\n",(0,n.jsxs)(t.p,{children:["Hope this blog post helped you understand how the rendering part of Cyclops works and demystified the whole project. We briefly touched on ",(0,n.jsx)(t.a,{href:"https://helm.sh/docs/",children:"Helm"})," and ",(0,n.jsx)(t.a,{href:"https://json-schema.org/",children:"JSON schema"}),", but both are larger pieces of software that we can't describe in such a short blog post, so we encourage you to check their documentation."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4090:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/JSON-to-UI-bbad50b21fb22fc8fcbeb19b83d053cb.png"},1050:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/UI-to-K8s-caa869f6d4e68f2a961c636ef5ccb882.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>i});var n=s(7294);const o={},a=n.createContext(o);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);