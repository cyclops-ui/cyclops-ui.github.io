"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[5301],{79752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(74848),s=n(28453);const r={title:"What is Platform Engineering?",authors:["jurajk"]},i=void 0,a={permalink:"/blog/2024/10/17/platform-engineering",source:"@site/blog/2024-10-17-platform-engineering/index.md",title:"What is Platform Engineering?",description:"Platform Engineering",date:"2024-10-17T00:00:00.000Z",formattedDate:"October 17, 2024",tags:[],readingTime:4.63,hasTruncateMarker:!1,authors:[{name:"Juraj Karad\u017ea",title:"Cyclops CEO",url:"https://github.com/KaradzaJuraj",imageURL:"https://github.com/KaradzaJuraj.png",key:"jurajk"}],frontMatter:{title:"What is Platform Engineering?",authors:["jurajk"]},unlisted:!1,prevItem:{title:"5 Internal Developer Platforms you need to know about!",permalink:"/blog/2024/10/24/five-idps"},nextItem:{title:"A Kubernetes Setup Speedrun \ud83c\udfc3\ud83d\udca8",permalink:"/blog/2024/09/17/civo-x-cyclops"}},l={authorsImageUrls:[void 0]},c=[{value:"Support us \ud83d\ude4f",id:"support-us-",level:3},{value:"What is platform engineering?",id:"what-is-platform-engineering",level:2},{value:"Why platform engineering?",id:"why-platform-engineering",level:2},{value:"Internal Developer Platforms (IDPs)",id:"internal-developer-platforms-idps",level:2},{value:"Cyclops",id:"cyclops",level:2},{value:"Looking for more?",id:"looking-for-more",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Platform Engineering",src:n(31790).A+"",width:"1792",height:"1024"})}),"\n",(0,o.jsx)(t.p,{children:"Modern software engineering is becoming more and more complicated, especially in cloud-native environments like Kubernetes. There are countless moving parts and pieces and no two applications are built the same."}),"\n",(0,o.jsx)(t.p,{children:"The larger the company, the more moving parts there are. With more moving parts, development cycles become stretched, onboarding developers takes longer, and the chances of mistakes increase. Because of this, companies stagnate and become slower to innovate and push new products and features."}),"\n",(0,o.jsxs)(t.p,{children:["The modern answer to this problem is ",(0,o.jsx)(t.strong,{children:"Platform Engineering"})," and, according to ",(0,o.jsx)(t.a,{href:"https://www.gartner.com/en/information-technology/insights/top-technology-trends",children:"Gartner"}),", ",(0,o.jsx)(t.strong,{children:"80%"})," of software engineering organizations will ",(0,o.jsx)(t.strong,{children:"establish platform teams"})," by 2026."]}),"\n",(0,o.jsx)(t.p,{children:"In this blog we will discuss what platform engineering is and what can you do to stay ahead of the curve\u2026"}),"\n",(0,o.jsx)(t.h3,{id:"support-us-",children:"Support us \ud83d\ude4f"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["We know that Kubernetes can be difficult. That is why we created Cyclops, a ",(0,o.jsx)(t.strong,{children:"truly"})," developer-oriented Kubernetes platform. Abstract the complexities of Kubernetes, and deploy and manage your applications through a customizable UI that you can fit to your needs."]})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["We're developing Cyclops as an open-source project. If you're keen to give it a try, here's a quick start guide available on our ",(0,o.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops",children:"repository"}),". If you like what you see, consider showing your support by giving us a star \u2b50"]})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Support us with Github stars",src:n(3950).A+"",width:"480",height:"360"})}),"\n",(0,o.jsx)(t.h2,{id:"what-is-platform-engineering",children:"What is platform engineering?"}),"\n",(0,o.jsx)(t.p,{children:"Platform engineering acts like an internal product team, but instead of serving external customers, its primary users are the company's own developers and internal teams."}),"\n",(0,o.jsxs)(t.p,{children:["The job of platform engineers is designing and building toolsets, infrastructure, and workflows that make it easier for developers to build, test, deploy, and manage software. The goal is to create a unified platform, often called an ",(0,o.jsx)(t.strong,{children:"Internal Developer Platform (IDP)"}),", which provides developers with self-service access to everything they need without depending on other teams, like operations or DevOps."]}),"\n",(0,o.jsx)(t.h2,{id:"why-platform-engineering",children:"Why platform engineering?"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["\u201cThe goal of Platform Engineering is to allow as much speed as possible, with as much safety as possible\u201d ~ Jason Warner, CEO @ poolside, former CTO @ GitHub (",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=4fHjAYZIxwQ",children:"source"}),")"]})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Platform engineering creates an abstraction layer that simplifies infrastructure management for developers. Instead of dealing with the complexities of infrastructure, developers can focus on writing code, leading to ",(0,o.jsx)(t.strong,{children:"quicker onboarding"})," and ",(0,o.jsx)(t.strong,{children:"faster time to market"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["A good IDP enables ",(0,o.jsx)(t.strong,{children:"separation of concerns"}),". Most of the time your DevOps teams and Product teams do not need to talk to each other and they can move independently. It also provides ",(0,o.jsx)(t.strong,{children:"guard-rails"})," and ensure standard and secure practices across the organization."]}),"\n",(0,o.jsxs)(t.p,{children:["Fun fact: when Spotify built its own Internal Developer Platform (now known as Backstage) they realized that their developers were ",(0,o.jsx)(t.a,{href:"https://backstage.spotify.com/discover/blog/how-spotify-measures-backstage-roi/",children:(0,o.jsx)(t.strong,{children:"5% more likely to stay at the company"})})," one year later. Developer experience matters!"]}),"\n",(0,o.jsx)(t.h2,{id:"internal-developer-platforms-idps",children:"Internal Developer Platforms (IDPs)"}),"\n",(0,o.jsxs)(t.p,{children:["When it comes to Internal Developer Platforms (IDPs), you typically have ",(0,o.jsx)(t.strong,{children:"two options"}),": build one yourself or buy an off-the-shelf solution."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Building your own"})," may seem like the ideal choice. You can tailor it perfectly to your specific needs, ensuring it integrates with your existing tech stack, workflows, and infrastructure. However, building an IDP from scratch is both time-consuming and expensive, it\u2019s essentially a full product in itself. For this reason, custom-built platforms are typically reserved for larger organizations with the resources to invest in such an undertaking."]}),"\n",(0,o.jsxs)(t.p,{children:["On the other hand, ",(0,o.jsx)(t.strong,{children:"off-the-shelf platforms"})," offer a quicker, more affordable alternative. These platforms are designed to cater to a wide range of users and needs, which can be both a blessing and a drawback. You may end up with features you don\u2019t need or find key functionality missing. In the latter case, you\u2019re dependent on the vendor\u2019s roadmap, which may not prioritize your needs. While they provide immediate value and are a solid starting point, you have to keep in mind that your organization will eventually outgrow them as your requirements evolve."]}),"\n",(0,o.jsx)(t.p,{children:"But, at Cyclops, we are building something in between\u2026"}),"\n",(0,o.jsx)(t.h2,{id:"cyclops",children:"Cyclops"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops",children:(0,o.jsx)(t.strong,{children:"Cyclops"})})," is an ",(0,o.jsx)(t.strong,{children:"open-source"})," tool that bridges the gap between fully custom-built Internal Developer Platforms (IDPs) and off-the-shelf solutions. It enables you to ",(0,o.jsx)(t.strong,{children:"build"})," ",(0,o.jsx)(t.strong,{children:"IDPs for Kubernetes"})," in ",(0,o.jsx)(t.strong,{children:"hours instead of months"}),", providing the flexibility to tailor the platform to your specific needs without the high cost and time investment of building from scratch."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Cyclops logo",src:n(17403).A+"",width:"1656",height:"422"})}),"\n",(0,o.jsxs)(t.p,{children:["Cyclops enables your Platform teams to build custom user interfaces for configuring and deploying applications and services to Kubernetes clusters. It leverages Helm charts (learn more ",(0,o.jsx)(t.a,{href:"https://cyclops-ui.com/blog/2024/07/05/what-the-helm",children:"here"}),") to generate these UIs. You can easily import any of your existing Helm charts into Cyclops as templates and create a user-friendly interface tailored to your specific needs."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Define Module in Cyclops",src:n(77790).A+"",width:"2000",height:"1248"})}),"\n",(0,o.jsx)(t.p,{children:"The fields shown above are entirely customizable along with the validations. Cyclops allows you to define how much of configuration you want to expose to your developers, while the validations you put in place prevent them from making mistakes."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Module Overview in Cyclops",src:n(29664).A+"",width:"2000",height:"1246"})}),"\n",(0,o.jsx)(t.p,{children:"After a developer has configured the application, with a click of a button it is deployed to the cluster. Cyclops then displays all resources related to the application, offering easy access to relevant information, including logs, health checks, and status updates."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"In a nutshell, Cyclops lets you provide the guard rails for your developers to safely deploy their application to Kubernetes and then overview the status of their apps."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"looking-for-more",children:"Looking for more?"}),"\n",(0,o.jsxs)(t.p,{children:["Thanks for reading! In future blogs you can expect us going more in depth on Cyclops and how you can create some pretty fun stuff with it. If you enjoyed this article and are looking forward to more, remember to show your support by starring our ",(0,o.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops",children:"repo"})," \u2b50\ud83d\ude4f"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},31790:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/cover-9bc2d4b5ef4ee39f729acdbf94c0f0ef.jpeg"},77790:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/define-module-fc52adeb54bd84a15fbaa7dde4038755.png"},29664:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/module-overview-810ceefe1d620e1800e383ac607ed768.png"},17403:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/cyclops-simplistic-dbdbf9a790db6efc551e6e3884ecb61b.png"},3950:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/github-stars-1ca0ec90e9bd7695498845c4cad2c579.gif"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);