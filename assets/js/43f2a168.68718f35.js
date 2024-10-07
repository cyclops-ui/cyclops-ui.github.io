"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[7656],{57497:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(74848),i=s(28453);const r={title:"Debunking Common Kubernetes Myths",authors:["jurajk"]},o=void 0,a={permalink:"/blog/2024/05/17/k8s-myths",source:"@site/blog/2024-05-17-k8s-myths/index.md",title:"Debunking Common Kubernetes Myths",description:"k8s-myths-cover",date:"2024-05-17T00:00:00.000Z",formattedDate:"May 17, 2024",tags:[],readingTime:3.865,hasTruncateMarker:!1,authors:[{name:"Juraj Karad\u017ea",title:"Cyclops CEO",url:"https://github.com/KaradzaJuraj",imageURL:"https://github.com/KaradzaJuraj.png",key:"jurajk"}],frontMatter:{title:"Debunking Common Kubernetes Myths",authors:["jurajk"]},unlisted:!1,prevItem:{title:"Is Kubernetes a database? CRDs explained in 5 minutes",permalink:"/blog/2024/05/24/is-k8s-database"},nextItem:{title:"How Telemetry Saved my Open-Source Platform",permalink:"/blog/2024/04/12/telemetry"}},l={authorsImageUrls:[void 0]},c=[{value:"Support us \ud83d\ude4f",id:"support-us-",level:3},{value:"1. Kubernetes is Only for Large Enterprises",id:"1-kubernetes-is-only-for-large-enterprises",level:3},{value:"2. Kubernetes Replaces Docker",id:"2-kubernetes-replaces-docker",level:3},{value:"3. Kubernetes Manages Everything Automatically",id:"3-kubernetes-manages-everything-automatically",level:3},{value:"4. Kubernetes is Only for Microservices",id:"4-kubernetes-is-only-for-microservices",level:3},{value:"5. Kubernetes is Too Complex to Learn and Implement",id:"5-kubernetes-is-too-complex-to-learn-and-implement",level:3},{value:"Thanks for reading \ud83d\ude4c",id:"thanks-for-reading-",level:3}];function u(e){const n={a:"a",em:"em",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"k8s-myths-cover",src:s(82584).A+"",width:"1024",height:"1024"})}),"\n",(0,t.jsx)(n.p,{children:"Kubernetes has risen to fame over the past couple of years, transforming from a geeky buzzword into a cornerstone of modern software development."}),"\n",(0,t.jsxs)(n.p,{children:["Yet, with its rise to fame, Kubernetes has also become shrouded in myths and misconceptions, which can often deter potential users - \u201c",(0,t.jsx)(n.em,{children:"Kubernetes is only for large companies"}),"\u201d or \u201c",(0,t.jsx)(n.em,{children:"I need microservices for Kubernetes"}),"\u201d\u2026"]}),"\n",(0,t.jsx)(n.p,{children:"While most of these misconceptions can be said about other container orchestrators, in this article, I focused on Kubernetes as it is the most popular and the first one that comes to mind when people think of container orchestration."}),"\n",(0,t.jsx)(n.p,{children:"That being said, let\u2019s dive into five of the most common misconceptions about Kubernetes and set the record straight!"}),"\n",(0,t.jsx)(n.h3,{id:"support-us-",children:"Support us \ud83d\ude4f"}),"\n",(0,t.jsxs)(n.p,{children:["We know that Kubernetes can be difficult. That is why we created Cyclops, a ",(0,t.jsx)(n.strong,{children:"truly"})," developer-oriented Kubernetes platform. Abstract the complexities of Kubernetes, and deploy and manage your applications through a UI. Because of its platform nature, the UI itself is highly customizable - you can change it to fit your needs."]}),"\n",(0,t.jsxs)(n.p,{children:["We're developing Cyclops as an open-source project. If you're keen to give it a try, here's a quick start guide available on our ",(0,t.jsx)(n.a,{href:"https://github.com/cyclops-ui/cyclops",children:"repository"}),". If you like what you see, consider showing your support by giving us a star \u2b50"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"gh-stars",src:s(3950).A+"",width:"480",height:"360"})}),"\n",(0,t.jsx)(n.h3,{id:"1-kubernetes-is-only-for-large-enterprises",children:"1. Kubernetes is Only for Large Enterprises"}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca8 ",(0,t.jsx)(n.strong,{children:"Misconception"}),": ",(0,t.jsx)(n.em,{children:"Kubernetes is too complex and resource-intensive for small to medium-sized businesses and is only practical for large enterprises."})]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd0d\xa0 ",(0,t.jsx)(n.strong,{children:"Reality"}),": Kubernetes is highly scalable and can be used by organizations of any size. With managed services like EKS, GKE, and AKS, even small teams can set up and manage Kubernetes clusters. These services take care of much of the heavy lifting, so smaller organizations can easily benefit from the features Kubernetes provides without needing a ton of infrastructure or a big DevOps team."]}),"\n",(0,t.jsx)(n.p,{children:"For example, a startup can easily set up a Kubernetes cluster on AWS using EKS. This takes advantage of AWS\u2019s infrastructure and managed services, making it simpler and more cost-effective to manage."}),"\n",(0,t.jsx)(n.h3,{id:"2-kubernetes-replaces-docker",children:"2. Kubernetes Replaces Docker"}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca8 ",(0,t.jsx)(n.strong,{children:"Misconception"}),": ",(0,t.jsx)(n.em,{children:"Kubernetes is a replacement for Docker."})]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd0d\xa0 ",(0,t.jsx)(n.strong,{children:"Reality"}),": Kubernetes and Docker serve different, yet complementary, purposes. Docker is a platform for containerizing applications, while Kubernetes is an orchestration system for managing those containers across multiple hosts/servers. Docker handles the creation and running of containers, but Kubernetes takes on the orchestration tasks, such as scaling, load balancing, and self-healing."]}),"\n",(0,t.jsx)(n.p,{children:"In practice, Docker containers are often used as the building blocks that Kubernetes orchestrates. For instance, developers use Docker to create container images, which are then deployed and managed by Kubernetes."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"docker-and-k8s",src:s(11969).A+"",width:"5692",height:"3517"})}),"\n",(0,t.jsx)(n.h3,{id:"3-kubernetes-manages-everything-automatically",children:"3. Kubernetes Manages Everything Automatically"}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca8 ",(0,t.jsx)(n.strong,{children:"Misconception"}),": ",(0,t.jsx)(n.em,{children:"Kubernetes fully automates all aspects of container management without the need for manual intervention."})]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd0d\xa0",(0,t.jsx)(n.strong,{children:"Reality"}),": Kubernetes takes care of many tasks like container deployment, scaling, and failover, but it still needs proper setup and ongoing management. You\u2019ll have to configure things like network policies, resource limits, and storage. Plus, keeping an eye on the cluster with regular monitoring and updates is crucial for its health and security."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, deploying applications requires configuration files in which you describe declaratively what you want Kubernetes to do with your application. Tools like ",(0,t.jsx)(n.a,{href:"https://cyclops-ui.com/",children:"Cyclops"})," help manage these configurations by providing a user-friendly interface."]}),"\n",(0,t.jsx)(n.h3,{id:"4-kubernetes-is-only-for-microservices",children:"4. Kubernetes is Only for Microservices"}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca8 ",(0,t.jsx)(n.strong,{children:"Misconception"}),": ",(0,t.jsx)(n.em,{children:"Kubernetes is not suitable for monolithic applications"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd0d\xa0 ",(0,t.jsx)(n.strong,{children:"Reality"}),": While Kubernetes excels at managing microservices, it is equally capable of handling monolithic applications. Kubernetes provides features like horizontal pod autoscaling (HPA), which can be utilized by both microservices and monolithic applications. HPA allows applications to scale based on the load automatically, ensuring your application will not crash under high pressure."]}),"\n",(0,t.jsx)(n.p,{children:"For example, a monolithic application can be containerized and deployed in a Kubernetes cluster. With proper configuration, Kubernetes can manage the application's scaling, deployment, and monitoring just as effectively as it does with microservices."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"no-monoliths-allowed",src:s(71412).A+"",width:"1920",height:"1080"})}),"\n",(0,t.jsx)(n.h3,{id:"5-kubernetes-is-too-complex-to-learn-and-implement",children:"5. Kubernetes is Too Complex to Learn and Implement"}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca8 ",(0,t.jsx)(n.strong,{children:"Misconception"}),": ",(0,t.jsx)(n.em,{children:"Kubernetes is too complicated for individuals and small teams to learn and implement."})]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd0d\xa0 ",(0,t.jsx)(n.strong,{children:"Reality"}),": While Kubernetes does have a steep learning curve, there are numerous tools, tutorials, and resources available to simplify the learning and implementation process. Platforms like ",(0,t.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/",children:"Minikube"})," allow developers to run Kubernetes locally, providing a sandbox environment to experiment and learn."]}),"\n",(0,t.jsx)(n.p,{children:"Online courses, documentation, and community support also significantly contribute to making Kubernetes more accessible. With the right tools, even small teams can effectively use Kubernetes for their projects."}),"\n",(0,t.jsx)(n.h3,{id:"thanks-for-reading-",children:"Thanks for reading \ud83d\ude4c"}),"\n",(0,t.jsxs)(n.p,{children:["I hope this article clarified some common myths about Kubernetes. If you enjoyed the read, consider supporting us by giving us a star on our ",(0,t.jsx)(n.a,{href:"https://github.com/cyclops-ui/cyclops",children:"repo"}),"!"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11969:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/docker-and-k8s-76c2ebc12e42b6771d07aa8227e25db0.png"},82584:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/k8s-myths-cover-9c790dc4e291459852450e7b9fb5ef4e.png"},71412:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/\u200eno-monoliths-allowed-909cabbd65826eae858a567d07977436.png"},3950:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/github-stars-1ca0ec90e9bd7695498845c4cad2c579.gif"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);