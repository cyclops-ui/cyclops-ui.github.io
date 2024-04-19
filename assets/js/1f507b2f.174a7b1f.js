"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[2371],{79992:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>h});var s=o(85893),r=o(11151);const n={title:"How Telemetry Saved my Open-Source Platform",authors:["jurajk"]},i=void 0,a={permalink:"/blog/2024/04/12/telemetry",source:"@site/blog/2024-04-12-telemetry/index.md",title:"How Telemetry Saved my Open-Source Platform",description:"telescope-cover-image",date:"2024-04-12T00:00:00.000Z",formattedDate:"April 12, 2024",tags:[],readingTime:5.25,hasTruncateMarker:!1,authors:[{name:"Juraj Karad\u017ea",title:"Cyclops CEO",url:"https://github.com/KaradzaJuraj",imageURL:"https://github.com/KaradzaJuraj.png",key:"jurajk"}],frontMatter:{title:"How Telemetry Saved my Open-Source Platform",authors:["jurajk"]},unlisted:!1,nextItem:{title:"Kubernetes Through the Developer's Perspective",permalink:"/blog/2024/03/26/devs-perspective"}},l={authorsImageUrls:[void 0]},h=[{value:"Support us \ud83d\ude4f",id:"support-us-",level:3},{value:"User Feedback \ud83d\udde3\ufe0f",id:"user-feedback-\ufe0f",level:2},{value:"The Problem \u2757",id:"the-problem-",level:2},{value:"A Theory \ud83e\uddd1\u200d\ud83d\udd2c",id:"a-theory-",level:2},{value:"The Results \ud83d\udcca",id:"the-results-",level:2},{value:"Credits \ud83e\udd94",id:"credits-",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"telescope-cover-image",src:o(9415).Z+"",width:"1920",height:"1080"})}),"\n",(0,s.jsx)(t.p,{children:"What started as a frustration with not being able to get in touch with our users, quickly developed into a redesign of the flow of our platform."}),"\n",(0,s.jsx)(t.p,{children:"My team and I are developing an open-source platform that helps developers deploy and manage their applications in Kubernetes. We have been working hard to expand our user base, and the efforts were starting to show results."}),"\n",(0,s.jsx)(t.p,{children:"The rising number of installations was satisfying to see. However, that was the only thing we were able to observe. We wanted to know more. We wanted to know what users are doing with our platform and what they are struggling with."}),"\n",(0,s.jsx)(t.p,{children:"The following short story could be considered a #building-in-public entry of our startup, but I just found it interesting and wanted to share it with you."}),"\n",(0,s.jsx)(t.h3,{id:"support-us-",children:"Support us \ud83d\ude4f"}),"\n",(0,s.jsxs)(t.p,{children:["We know that Kubernetes can be difficult. That is why we created Cyclops, a ",(0,s.jsx)(t.strong,{children:"truly"})," developer-oriented Kubernetes platform. Abstract the complexities of Kubernetes, and deploy and manage your applications through a UI. Because of its platform nature, the UI itself is highly customizable - you can change it to fit your needs."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"github-stars.gif",src:o(47892).Z+"",width:"480",height:"360"})}),"\n",(0,s.jsxs)(t.p,{children:["We're developing Cyclops as an open-source project. If you're keen to give it a try, here's a quick start guide available on our ",(0,s.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops",children:"repository"}),". If you like what you see, consider showing your support by giving us a star \u2b50"]}),"\n",(0,s.jsx)(t.h2,{id:"user-feedback-\ufe0f",children:"User Feedback \ud83d\udde3\ufe0f"}),"\n",(0,s.jsx)(t.p,{children:"Since the beginning, we have been trying to talk to our users and gather as much feedback as we can. However, that turned out to be sort of a problem. We knew that people were downloading Cyclops; on our DockerHub, we could see the number of pulled images getting larger by the day."}),"\n",(0,s.jsxs)(t.p,{children:["The problem was that we had no way of contacting our users. ",(0,s.jsx)(t.strong,{children:"We could only see the number of pulls, not who pulled them."})]}),"\n",(0,s.jsxs)(t.p,{children:["In an attempt to get in touch with our users, we created a ",(0,s.jsx)(t.a,{href:"https://discord.com/invite/8ErnK3qDb3",children:"Discord server"}),". Discord is a great way to keep your community close to you, and because of it, we have a way of getting to know our users."]}),"\n",(0,s.jsx)(t.p,{children:"So we started talking to them. The feedback wasn\u2019t always constructive\u2026"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Unsatisfied User",src:o(32887).Z+"",width:"3024",height:"816"})}),"\n",(0,s.jsx)(t.p,{children:"\u2026 but most of it was really positive. However, there is a caveat; a lot of the positive feedback we were getting was from 1-on-1 meetings with our users. In these meetings, we could demonstrate Cyclops's capabilities better than users could on their own. This turned out to be a bigger issue than we thought."}),"\n",(0,s.jsx)(t.p,{children:"Recently, we implemented telemetry to better understand how our users utilize Cyclops. As soon as the statistics started to come in, boy, were we surprised."}),"\n",(0,s.jsx)(t.h2,{id:"the-problem-",children:"The Problem \u2757"}),"\n",(0,s.jsx)(t.p,{children:"We were really pleased with the number of installations of Cyclops. As it turns out, we were correct in thinking that Cyclops is pretty simple and straightforward to install. But when it came to starting to use it, more than 60% of our users got lost."}),"\n",(0,s.jsx)(t.p,{children:"So what was the problem?"}),"\n",(0,s.jsxs)(t.p,{children:["The thing is, when you want to deploy an application to your Kubernetes cluster, you must provide a template in the form of a Helm chart. We have created a few examples of such charts and published them on our ",(0,s.jsx)(t.a,{href:"https://github.com/cyclops-ui/templates",children:"open repository"}),". In all our documentation and blogs, we pointed people toward that repository when starting out with Cyclops. However, it seems that it didn\u2019t catch on. ",(0,s.jsx)(t.strong,{children:"The number of deployed applications was still much lower than the number of started instances of Cyclops."})]}),"\n",(0,s.jsx)(t.h2,{id:"a-theory-",children:"A Theory \ud83e\uddd1\u200d\ud83d\udd2c"}),"\n",(0,s.jsxs)(t.p,{children:["Here is a fun fact for you, dear reader: the majority of online readers spend less than 15 seconds on a web page (",(0,s.jsx)(t.a,{href:"https://time.com/12933/what-you-think-you-know-about-the-web-is-wrong/",children:"source"}),"). Knowing this, could it be that most of our users skimmed over the blogs and documentation and missed out on the reference to our template repository?"]}),"\n",(0,s.jsxs)(t.p,{children:["We wanted to test this theory. In our last ",(0,s.jsx)(t.a,{href:"https://cyclops-ui.com/blog/2024/03/26/devs-perspective",children:"blog"}),", we did another tutorial on Cyclops showcasing its benefits. However, for this specific article, we created a special version of Cyclops. What was so special about this version? ",(0,s.jsx)(t.strong,{children:"We added a default value for the template when creating new modules."})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Small Change",src:o(70613).Z+"",width:"3024",height:"894"})}),"\n",(0,s.jsx)(t.p,{children:"After gathering statistics for some time, the results were in."}),"\n",(0,s.jsx)(t.h2,{id:"the-results-",children:"The Results \ud83d\udcca"}),"\n",(0,s.jsxs)(t.p,{children:["With a simple change, we saw an ",(0,s.jsx)(t.strong,{children:"improvement"})," in our users' behavior, they no longer got lost at the very first step of using our platform! However, it wasn\u2019t as big of an improvement as we initially hoped for but it was certainly in the right direction. We asked ourselves how to further improve on this issue. And we think we got it \ud83d\ude4c"]}),"\n",(0,s.jsxs)(t.p,{children:["Since our most recent version (v0.3.0), we have reworked the platform's flow. Choosing a template is no longer an ",(0,s.jsx)(t.strong,{children:"input field"})," but a ",(0,s.jsx)(t.strong,{children:"dropdown"}),". Every instance of Cyclops comes with a couple of premade templates (stored in our ",(0,s.jsx)(t.a,{href:"https://github.com/cyclops-ui/templates",children:"templates repository"}),"), which you are free to use and abuse. We feel like this will go a long way in showcasing the customizable nature of Cyclops to our users."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"v0.3.0",src:o(60554).Z+"",width:"2832",height:"1046"})}),"\n",(0,s.jsxs)(t.p,{children:["But an important part of Cyclops is its ",(0,s.jsx)(t.strong,{children:"ability to use your own templates"}),", and we weren\u2019t ready to compromise on that! That is why we added a new ",(0,s.jsx)(t.code,{children:"Templates"})," tab where you can add new templates and manage the existing ones. Once added, your new templates will be shown in the dropdown the next time you find yourself deploying an application."]}),"\n",(0,s.jsx)(t.h2,{id:"credits-",children:"Credits \ud83e\udd94"}),"\n",(0,s.jsx)(t.p,{children:"We released v0.3.0 earlier this week, so it is still too early to say how much of an impact it had on our users, but we have high expectations! We might share the statistics once enough time passes, so make sure to follow us to find out!"}),"\n",(0,s.jsxs)(t.p,{children:["It would be a shame not to mention ",(0,s.jsx)(t.a,{href:"https://posthog.com/",children:"PostHog"})," as the telemetry provider we are using, since it turned out to be extremely useful. Because it is hard to find people who will talk with you about your product, gathering statistics gave us a much greater insight into our users."]}),"\n",(0,s.jsx)(t.p,{children:"If you are one of the few readers who gave this article more than the previously mentioned 15 seconds, I hope you found it amusing at least \ud83d\ude01"}),"\n",(0,s.jsxs)(t.p,{children:["If you are interested in contributing to our project, whether through coding or providing feedback, join our ",(0,s.jsx)(t.a,{href:"https://discord.com/invite/8ErnK3qDb3",children:"Discord community"})," and come talk to us!"]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},70613:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/b4-after-becb921e76efc245165eb98452611b70.png"},9415:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/telemetry-cover-50033d4b1433338461d33857f4191492.png"},32887:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/unsatisfied-user-1ad89c70ea3adfb5fdc1b05498906197.png"},60554:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/v03-dropdown-1d7cf189b19a238dcac7426404d710a5.png"},47892:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/github-stars-1ca0ec90e9bd7695498845c4cad2c579.gif"},11151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>i});var s=o(67294);const r={},n=s.createContext(r);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);