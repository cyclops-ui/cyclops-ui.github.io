"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[9515],{24218:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var o=s(74848),r=s(28453);const n={title:"How we manage secrets, the Kubernetes way",authors:["jurajk"]},a=void 0,c={permalink:"/blog/2024/07/24/how-we-manage-secrets",source:"@site/blog/2024-07-24-how-we-manage-secrets/index.md",title:"How we manage secrets, the Kubernetes way",description:"how-we-manage-secrets-cover",date:"2024-07-24T00:00:00.000Z",formattedDate:"July 24, 2024",tags:[],readingTime:4.17,hasTruncateMarker:!1,authors:[{name:"Juraj Karad\u017ea",title:"Cyclops CEO",url:"https://github.com/KaradzaJuraj",imageURL:"https://github.com/KaradzaJuraj.png",key:"jurajk"}],frontMatter:{title:"How we manage secrets, the Kubernetes way",authors:["jurajk"]},unlisted:!1,prevItem:{title:"A Kubernetes Setup Speedrun \ud83c\udfc3\ud83d\udca8",permalink:"/blog/2024/09/17/civo-x-cyclops"},nextItem:{title:"What the Helm?!",permalink:"/blog/2024/07/05/what-the-helm"}},i={authorsImageUrls:[void 0]},l=[{value:"Why did we need to manage secrets?",id:"why-did-we-need-to-manage-secrets",level:2},{value:"<em>By the way\u2026</em>",id:"by-the-way",level:3},{value:"Kubernetes Secrets",id:"kubernetes-secrets",level:2},{value:"Kubernetes Custom Resources (CRDs)",id:"kubernetes-custom-resources-crds",level:2},{value:"How we manage secrets, the Kubernetes way",id:"how-we-manage-secrets-the-kubernetes-way",level:2},{value:"Any questions?",id:"any-questions",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"how-we-manage-secrets-cover",src:s(48999).A+"",width:"1792",height:"1024"})}),"\n",(0,o.jsx)(t.p,{children:"For the past few days, we at Cyclops have been walking between the whiteboard and our laptops, trying to figure out how to design one important part of our project: the authentication of Cyclops to different services. To be more precise, we wanted to allow users to access their private GitHub repos through Cyclops."}),"\n",(0,o.jsxs)(t.p,{children:["Why was this an issue? In the beginning, we were torn between solutions that either ",(0,o.jsx)(t.strong,{children:"bloated the codebase"})," by adding a database that Cyclops would not use apart for the authentication or made the ",(0,o.jsx)(t.strong,{children:"onboarding"})," ",(0,o.jsx)(t.strong,{children:"process overly complicated"})," and scare away potential new users."]}),"\n",(0,o.jsx)(t.p,{children:"After some brainstorming, we found a solution that checked all of our requirements. In this article, I will showcase how Cyclops manages your secrets, the Kubernetes way\u2026"}),"\n",(0,o.jsx)(t.h2,{id:"why-did-we-need-to-manage-secrets",children:"Why did we need to manage secrets?"}),"\n",(0,o.jsx)(t.p,{children:"A short background about Cyclops so the rest of the article is easier to follow:"}),"\n",(0,o.jsx)(t.p,{children:"Cyclops is a developer-oriented Kubernetes platform. Instead of making your devs learn Helm, Kustomize, or some other Kubernetes configuration manager, Cyclops provides a user interface where they can easily fill in the values to generate needed Kubernetes manifests."}),"\n",(0,o.jsxs)(t.p,{children:["We say it's a platform because you can easily create custom UIs for your Kubernetes workloads (read more about it ",(0,o.jsx)(t.a,{href:"https://cyclops-ui.com/",children:"here"}),"). You would store these UIs as templates. You can store templates in several ways, like Helm charts or OCI repositories, but the most popular is probably GitHub repositories."]}),"\n",(0,o.jsxs)(t.p,{children:["Cyclops can access templates stored in public repos without issues; provide a ",(0,o.jsx)(t.code,{children:"repo + path + version"}),", and BAM, you got it. ",(0,o.jsx)(t.strong,{children:"But we wanted to enable Cyclops users to access the templates they stored on their private GitHub repositories"})," (because you rarely make your infra code public)."]}),"\n",(0,o.jsx)(t.p,{children:"We knew we could use GitHub tokens as a form of authentication, but how do we securely handle them?"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.h3,{id:"by-the-way",children:(0,o.jsx)(t.em,{children:"By the way\u2026"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["Cyclops is ",(0,o.jsx)(t.strong,{children:"open-source"}),", we would greatly appreciate it if you could support us by giving us a star on our ",(0,o.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops",children:"repo"})," \u2b50 \ud83d\ude4f"]})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"github-stars",src:s(3950).A+"",width:"480",height:"360"})}),"\n",(0,o.jsx)(t.h2,{id:"kubernetes-secrets",children:"Kubernetes Secrets"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"The first issue"})," ",(0,o.jsx)(t.strong,{children:"was"})," ",(0,o.jsx)(t.strong,{children:"storing the GitHub access tokens"}),". Cyclops does not have a database of its own, so implementing one just for storing GitHub tokens seemed like a bad idea. So, we opted to use Kubernetes secrets."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\u201c",(0,o.jsxs)(t.em,{children:["A Secret is an object that contains a small amount of sensitive data, such as a password, ",(0,o.jsx)(t.strong,{children:"a token"}),", or a key."]}),"\u201c ~ ",(0,o.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/",children:"Kubernetes docs"})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Kubernetes secrets are a great way of storing sensitive data (like tokens) without exposing it in the pod definition or configuration files, so they seemed like a great fit."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"However, the second issue was how to use these secrets securely."})}),"\n",(0,o.jsx)(t.h2,{id:"kubernetes-custom-resources-crds",children:"Kubernetes Custom Resources (CRDs)"}),"\n",(0,o.jsx)(t.p,{children:"Let\u2019s quickly discuss custom resource definitions and then we can go on to how we implemented access to private repos."}),"\n",(0,o.jsx)(t.p,{children:"In Kubernetes, Custom Resource Definitions (CRDs) let you create your own resource types, adding to the default ones Kubernetes provides (pods, deployments, \u2026)."}),"\n",(0,o.jsx)(t.p,{children:"You can define a schema for your custom object with a YAML file and inform Kubernetes. From then on, you can use your custom resource as any other native Kubernetes resource."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["Check out our ",(0,o.jsx)(t.a,{href:"https://dev.to/cyclops-ui/is-kubernetes-a-database-crds-explained-in-three-minutes-361d",children:"previous blog"}),", where we explore CRDs and use ",(0,o.jsx)(t.code,{children:"kubectl"})," to gather apples!\ud83c\udf4f"]})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"kubectl get apples\n\nNAME          AGE\ngreen-apple   6s\n"})}),"\n",(0,o.jsx)(t.h2,{id:"how-we-manage-secrets-the-kubernetes-way",children:"How we manage secrets, the Kubernetes way"}),"\n",(0,o.jsxs)(t.p,{children:["Cyclops has a CRD called ",(0,o.jsx)(t.code,{children:"TemplateAuthRule"})," that allows you to define authorization for specific repositories. The CRD defines which templates you want to authorize and points Cyclops to the authorization data needed for those templates (Kubernetes secrets)."]}),"\n",(0,o.jsxs)(t.p,{children:["Each time the Cyclops controller fetches a template, it retrieves all ",(0,o.jsx)(t.code,{children:"TemplateAuthRules"})," from the cluster and tries to match the templates repository to any of the ",(0,o.jsx)(t.code,{children:"TemplateAuthRules"})," repositories (in the picture below ",(0,o.jsx)(t.code,{children:"spec.repo"}),"). If it does, it will fetch the referenced Kubernetes secrets and apply username and password to authenticate."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"tar_arch.png",src:s(89146).A+"",width:"1056",height:"763"})}),"\n",(0,o.jsxs)(t.p,{children:["In the image above, the Cyclops controller fetches all ",(0,o.jsx)(t.code,{children:"TemplateAuthRules"})," and tries to match the template repository to ",(0,o.jsx)(t.code,{children:"spec.repo"})," from a ",(0,o.jsx)(t.code,{children:"TemplateAuthRule"}),". If it matches, it will fetch the username and password from the referenced secret. In this case, both username and password reference the same secret\xa0",(0,o.jsx)(t.code,{children:"my-cyclops-secret"})," (",(0,o.jsx)(t.code,{children:"spec.username.name"}),"\xa0and\xa0",(0,o.jsx)(t.code,{children:"spec.password.name"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:["To fetch the ",(0,o.jsx)(t.code,{children:"username"})," secret value, the Cyclops controller will fetch the referenced secret and use the key provided in\xa0",(0,o.jsx)(t.code,{children:"spec.username.key"}),"\xa0to get the value from the fetched secret. The same goes for the ",(0,o.jsx)(t.code,{children:"password"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Since ",(0,o.jsx)(t.code,{children:"TemplateAuthRules"}),"does not store secrets directly, you can still integrate your cluster with the\xa0",(0,o.jsx)(t.a,{href:"https://external-secrets.io/",children:"External Secret Operator"}),"\xa0or other secrets management solutions!"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:(0,o.jsxs)(t.em,{children:["Find a more detailed view into ",(0,o.jsx)(t.code,{children:"TemplateAuthRules"})," and a tutorial on how to allow access to your own private repos ",(0,o.jsx)(t.a,{href:"https://cyclops-ui.com/docs/templates/private_templates",children:"here"})," or by using our CLI ",(0,o.jsx)(t.a,{href:"https://cyclops-ui.com/docs/cyctl/cyctl_create_templateauthrules",children:"here"})]})})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"any-questions",children:"Any questions?"}),"\n",(0,o.jsx)(t.p,{children:"Hope I managed to explain how Cyclops manages your GitHub tokens and maybe even given you an idea of how to manage secrets in your own projects."}),"\n",(0,o.jsxs)(t.p,{children:["If you are interested in being a part of the Cyclops community, to contribute with code, content, or even critique, be sure to join our ",(0,o.jsx)(t.a,{href:"https://discord.com/invite/8ErnK3qDb3",children:"Discord community"})," and leave a star on the ",(0,o.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops",children:"repo"})," \u2b50\xa0\ud83d\ude4f"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},48999:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/cover-c0e5a84571213e3aba97f1dd8ec01b46.jpg"},3950:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/github-stars-1ca0ec90e9bd7695498845c4cad2c579.gif"},89146:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/tar_arch-5b6899ed6cccdacf11d3f4348f97a284.png"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var o=s(96540);const r={},n=o.createContext(r);function a(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);