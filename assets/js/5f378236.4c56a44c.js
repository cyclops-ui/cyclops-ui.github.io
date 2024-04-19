"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[3861],{46402:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=s(85893),o=s(11151);const i={title:"\ud83c\udf80 Five tools to make your K8s experience more enjoyable \ud83c\udf80",authors:["jurajk"]},a=void 0,r={permalink:"/blog/2024/01/15/five-kubernetes-UIs",source:"@site/blog/2024-01-15-five-kubernetes-UIs/index.md",title:"\ud83c\udf80 Five tools to make your K8s experience more enjoyable \ud83c\udf80",description:"Kubernetes Enjoyer",date:"2024-01-15T00:00:00.000Z",formattedDate:"January 15, 2024",tags:[],readingTime:6.78,hasTruncateMarker:!1,authors:[{name:"Juraj Karad\u017ea",title:"Cyclops CEO",url:"https://github.com/KaradzaJuraj",imageURL:"https://github.com/KaradzaJuraj.png",key:"jurajk"}],frontMatter:{title:"\ud83c\udf80 Five tools to make your K8s experience more enjoyable \ud83c\udf80",authors:["jurajk"]},unlisted:!1,prevItem:{title:"Coexistence of containers and Helm charts - OCI based registries",permalink:"/blog/2024/01/29/OCI-based-registries"},nextItem:{title:"Kubernetes Made Simple - Introducing Cyclops",permalink:"/blog/2024/1/3/cyclops-overview"}},l={authorsImageUrls:[void 0]},h=[{value:"Show us your support \ud83d\ude4f\ud83c\udffb",id:"show-us-your-support-",level:3},{value:"Kubernetes Dashboard",id:"kubernetes-dashboard",level:2},{value:"K9s",id:"k9s",level:2},{value:"Cyclops",id:"cyclops",level:2},{value:"DevSpace",id:"devspace",level:2},{value:"Kubevious",id:"kubevious",level:2},{value:"Final thoughts",id:"final-thoughts",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Kubernetes Enjoyer",src:s(21655).Z+"",width:"900",height:"384"})}),"\n",(0,n.jsxs)(t.p,{children:["For the uninitiated, ",(0,n.jsx)(t.strong,{children:"K8s stands for Kubernetes"}),", with the number 8 representing the eight letters between ",(0,n.jsx)(t.strong,{children:"K"})," and\n",(0,n.jsx)(t.strong,{children:"s."})," Kubernetes has become pretty much unavoidable in the current tech landscape but remains uninviting because of its\ncomplexity and steep learning curve."]}),"\n",(0,n.jsx)(t.p,{children:"The terminal-based interaction has a part to play in this story. If you ever had the privilege of watching a seasoned\nDevOps work his way with a Kubernetes cluster, you might look at him like you would a seasoned martial artist showcasing\nhis fighting skills. That is because everything that is done through a terminal always looks more frightening and seems\nlike it requires years and years of training. \ud83e\udd4b"}),"\n",(0,n.jsxs)(t.p,{children:["Now the question stands: how can we make such a complex issue (one that even had its name beautified) more enjoyable?\nWell, in the same way we make everything more enjoyable \u2192 make it easier and make it prettier! \ud83c\udf80 And how would you do\nthat, you might ask. With a ",(0,n.jsx)(t.strong,{children:"graphical user interface,"})," or GUI for short! Let\u2019s take a look at ",(0,n.jsx)(t.strong,{children:"five tools"})," that\nprovide you with a user interface when dealing with Kubernetes."]}),"\n",(0,n.jsx)(t.h3,{id:"show-us-your-support-",children:"Show us your support \ud83d\ude4f\ud83c\udffb"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ProductHunt Launch",src:s(70022).Z+"",width:"480",height:"480"})}),"\n",(0,n.jsxs)(t.p,{children:["Before we start, we want to mention that we scheduled our\n",(0,n.jsx)(t.a,{href:"https://www.producthunt.com/products/cyclops",children:"first release on Product Hunt"}),"! Click the notify me button to be alerted\nwhen we are out and ready to receive your feedback \ud83d\udd14"]}),"\n",(0,n.jsxs)(t.p,{children:["And we would love it if you starred our ",(0,n.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops",children:"repository"})," and helped us get our tool\nin front of other developers \u2b50"]}),"\n",(0,n.jsx)(t.h2,{id:"kubernetes-dashboard",children:"Kubernetes Dashboard"}),"\n",(0,n.jsxs)(t.p,{children:["Let's dive into the ",(0,n.jsx)(t.strong,{children:"quintessential tool for Kubernetes management"})," \u2013\n",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/",children:(0,n.jsx)(t.strong,{children:"the Kubernetes Dashboard"})}),". Automatically bundled with\nyour cluster, it delivers a graphical overview of your Kubernetes environment. You can use it to get an overview of\napplications running on a cluster, deploy containerized applications to a Kubernetes cluster, and manage cluster\nresources."]}),"\n",(0,n.jsx)(t.p,{children:"The Kubernetes Dashboard not only offers an overview but also helps with troubleshooting. It provides insights into the\nhealth of Kubernetes resources, spotlighting any operational errors."}),"\n",(0,n.jsx)(t.p,{children:"Through it, you can deploy applications as well. You can do it with a manifest that you wrote or through a form that you\njust fill in. However, it's worth noting that the form, while user-friendly, lacks the flexibility for customization\nbeyond basic examples."}),"\n",(0,n.jsxs)(t.p,{children:["While the K8s dashboard is a ",(0,n.jsx)(t.strong,{children:"jack-of-all-trades"}),", many find it to be a generalist, lacking in-depth features. This\nlimitation encourages us to explore more tools, each designed for specific purposes, and so we embark on our journey\nthrough the list of tools we\u2019ve explored."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"K8s Dashboard",src:s(17511).Z+"",width:"2048",height:"1120"})}),"\n",(0,n.jsx)(t.h2,{id:"k9s",children:"K9s"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://k9scli.io/",children:(0,n.jsx)(t.strong,{children:"K9s"})})," is your best friend (get it? \ud83d\udc36) when exploring your cluster via the terminal. It shares commonality with Vim\nfor its interaction style using shortcuts and starting commands with",(0,n.jsx)(t.code,{children:":"})," but don\u2019t let that discourage you. K9s keeps a\nvigilant eye on Kubernetes activities, providing ",(0,n.jsx)(t.strong,{children:"real-time"})," information and intuitive commands for resource\ninteraction."]}),"\n",(0,n.jsxs)(t.p,{children:["It can almost replace the standard ",(0,n.jsx)(t.code,{children:"kubectl"})," and doesn\u2019t require you to have a \u201ccheat sheet\u201d next to you when\ninteracting with Kubernetes. You traverse through your resources just by selecting them and drilling down to the lowest\nlevel. This allows for easy log extraction and access to its shell."]}),"\n",(0,n.jsxs)(t.p,{children:["K9s gives you the ability to see the manifest of each of your resources and the ability to edit and apply changes. As I\nmentioned, it ",(0,n.jsx)(t.strong,{children:"almost"})," replaces the ",(0,n.jsx)(t.code,{children:"kubectl"}),". One of the differentiators is that you ",(0,n.jsx)(t.strong,{children:"cannot"})," deploy new resources\nvia the K9s."]}),"\n",(0,n.jsxs)(t.p,{children:["K9s comes with the ability to filter out your resources and search them with the ",(0,n.jsx)(t.code,{children:"/"})," command, making it easier to locate\nthe ones you are looking for in the sea of resources or filter through the logs of a specific pod."]}),"\n",(0,n.jsx)(t.p,{children:"A nice touch is the list of commands and shortcuts available to you at any given moment at the top of the screen, and\nits customization with skins and plugins gives you room for additional utility."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"K9s UI",src:s(50398).Z+"",width:"2504",height:"1373"})}),"\n",(0,n.jsx)(t.h2,{id:"cyclops",children:"Cyclops"}),"\n",(0,n.jsxs)(t.p,{children:["If you are having difficulties fighting with manifest files, ",(0,n.jsx)(t.a,{href:"https://cyclops-ui.com/",children:(0,n.jsx)(t.strong,{children:"Cyclops"})})," is the tool for you!\nCyclops removes the clutter and complexity when dealing with manifests by transforming them into a structured web-based\nform, eliminating the need for manual configuration and command-line interactions."]}),"\n",(0,n.jsxs)(t.p,{children:["This makes the deployment process ",(0,n.jsx)(t.strong,{children:"more accessible"})," to individuals with varying levels of technical expertise."]}),"\n",(0,n.jsxs)(t.p,{children:["Within the architecture of Cyclops, a central component is the ",(0,n.jsx)(t.a,{href:"https://helm.sh/",children:"Helm"})," engine. Helm is very\npopular within the Kubernetes community; chances are you have already run into it. The popularity of Helm plays to\nCyclops's strength because of its straightforward integration."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Cyclops Form",src:s(59010).Z+"",width:"3024",height:"1964"})}),"\n",(0,n.jsxs)(t.p,{children:["With Cyclops, you're not boxed into a one-size-fits-all approach. ",(0,n.jsx)(t.strong,{children:"You can customize the form to suit your unique\nneeds."})," For instance, a team member can generate a Helm chart, allowing others to define necessary values using\nCyclops for painless application deployment."]}),"\n",(0,n.jsx)(t.p,{children:"Once you have declared the wanted state of your application, deploying it is as straightforward as clicking a button.\nFurthermore, once you deploy your application, the wanted state is also easily changeable through Cyclops."}),"\n",(0,n.jsx)(t.p,{children:"In Cyclops, every application lays out a detailed list of resources it uses - deployments, services, pods, and others,\nall in plain view. You can easily track their status, helping you quickly spot and fix any hiccups in your application.\nIt's like having a clear roadmap to navigate and troubleshoot any issues that pop up."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Cyclops Resources",src:s(14464).Z+"",width:"3024",height:"1964"})}),"\n",(0,n.jsx)(t.h2,{id:"devspace",children:"DevSpace"}),"\n",(0,n.jsx)(t.p,{children:"Consider the convenience and time saving of your local server refreshing automatically with every code save, providing\nreal-time visualization of your code changes."}),"\n",(0,n.jsxs)(t.p,{children:["Imagine taking this smooth experience a step further into Kubernetes clusters; ",(0,n.jsx)(t.a,{href:"https://www.devspace.sh/",children:(0,n.jsx)(t.strong,{children:"DevSpace"})}),"\nmakes that possible. With DevSpace, you can ",(0,n.jsx)(t.strong,{children:"deploy applications in real time"})," during the coding process, facilitating\nswift iteration."]}),"\n",(0,n.jsx)(t.p,{children:"DevSpace streamlines the process by automatically applying changes to your K8s cluster without needing the entire image\nbuilding and deployment pipeline. It builds the image locally without pushing it to a registry, although the option to\nautomatically push images is available for those who require it during development."}),"\n",(0,n.jsxs)(t.p,{children:["Moreover, DevSpace features a user interface that, while somewhat limited, offers a quick overview of all pods in your\ncluster. It allows you to ",(0,n.jsx)(t.strong,{children:"easily access pod logs and even execute commands"})," directly within them, enhancing your\ndevelopment workflow."]}),"\n",(0,n.jsxs)(t.p,{children:["Although I have focused on local development, DevSpace is used for creating workflows as well. All your workflows are\nsaved in one file, making it easy to reproduce environments on any machine with a single ",(0,n.jsx)(t.code,{children:"devspace deploy"})," command."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"DevSpace UI",src:s(21908).Z+"",width:"2560",height:"1440"})}),"\n",(0,n.jsx)(t.h2,{id:"kubevious",children:"Kubevious"}),"\n",(0,n.jsxs)(t.p,{children:["Unlike the other tools mentioned in this post, ",(0,n.jsx)(t.a,{href:"https://kubevious.io/",children:(0,n.jsx)(t.strong,{children:"Kubevious"})})," has no way of changing the cluster\nstate. It is intended solely as an observability tool, focusing on potential issues in your cluster. It highlights\npotential threats and risks for every resource you may run."]}),"\n",(0,n.jsx)(t.p,{children:"The graphical views offer insights into containers, networking, exposure, RBAC, and Helm charts for intuitive\ntroubleshooting."}),"\n",(0,n.jsxs)(t.p,{children:["Kubevious has a ",(0,n.jsx)(t.strong,{children:"rule engine"})," that helps with the detection and prevention of misconfigurations. It comes with rules\nout of the box, but it allows you to create custom rules as well (for example, \u201cdon\u2019t allow images to be on the\n",(0,n.jsx)(t.em,{children:"latest"})," tag\u201d)."]}),"\n",(0,n.jsxs)(t.p,{children:["It also comes with the cool ",(0,n.jsx)(t.strong,{children:"time machine"})," feature that allows users to travel back in time, audit applications, root\ncause outages, and recover manifests, ensuring a complete understanding of cluster history."]}),"\n",(0,n.jsxs)(t.p,{children:["And I have to mention the ",(0,n.jsx)(t.strong,{children:"full-text"})," search it provides! You can search for any resource without knowing the specific\nname of it. One great example is searching for any resources that use a specific port by just typing in \u201c",(0,n.jsx)(t.em,{children:"port 3000"}),",\u201d\nand Kubevious will find your resource."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Kubevious Dashboard",src:s(81545).Z+"",width:"2550",height:"1398"})}),"\n",(0,n.jsx)(t.h2,{id:"final-thoughts",children:"Final thoughts"}),"\n",(0,n.jsx)(t.p,{children:"In our quest to enhance the Kubernetes experience, we've unwrapped five delightful tools, each offering its unique charm\nto make your journey smoother and more enjoyable."}),"\n",(0,n.jsx)(t.p,{children:"These are not the only tools that provide a UI for Kubernetes, but we wanted to shine a spotlight on some, maybe\nlesser-known ones."}),"\n",(0,n.jsx)(t.p,{children:"All of these tools are open-source, so give them a go; they're free!"}),"\n",(0,n.jsxs)(t.p,{children:["I want to end this post with a question directed to you, the reader: What are your thoughts on graphical representations\nof Kubernetes? Is it needed, or does ",(0,n.jsx)(t.code,{children:"kubectl"})," reign supreme?"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},59010:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/cyclops-form-f02111db0c12090a41351f21165fa807.png"},14464:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/cyclops-resources-4f9d576524085a671f5907bd9842c1cd.png"},21908:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/devspace-ui-7c7d482f3663a0c109a553b7b422057f.png"},17511:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/k8s-dashboard-9993e00d22fd6c62b1a3237d6cb01741.png"},50398:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/k9s-ui-95826c58943d0a2b8628e088c89f5995.png"},21655:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/kubernetes_enjojyer-f74fdfff15a9131c5bc1efd6b273e5b6.png"},81545:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/kubevious-dashboard-4fc7adeebc80aeac7154eda6832e02d7.png"},70022:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/product-hunt-675246984f76522e190a985eed4a6f51.gif"},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>a});var n=s(67294);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);