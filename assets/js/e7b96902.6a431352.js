"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[7629],{90033:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=s(85893),o=s(11151);const i={title:"The Easiest Way to Get Started with Kubernetes",authors:["jurajk"]},r=void 0,a={permalink:"/blog/2024/06/07/k8s-easy-start",source:"@site/blog/2024-06-07-k8s-easy-start/index.md",title:"The Easiest Way to Get Started with Kubernetes",description:"k8s-easy-start-cover",date:"2024-06-07T00:00:00.000Z",formattedDate:"June 7, 2024",tags:[],readingTime:5.13,hasTruncateMarker:!1,authors:[{name:"Juraj Karad\u017ea",title:"Cyclops CEO",url:"https://github.com/KaradzaJuraj",imageURL:"https://github.com/KaradzaJuraj.png",key:"jurajk"}],frontMatter:{title:"The Easiest Way to Get Started with Kubernetes",authors:["jurajk"]},unlisted:!1,nextItem:{title:"Is Kubernetes a database? CRDs explained in 5 minutes",permalink:"/blog/2024/05/24/is-k8s-database"}},l={authorsImageUrls:[void 0]},c=[{value:"Support us \ud83d\ude4f",id:"support-us-",level:3},{value:"A Cluster \ud83c\udf10",id:"a-cluster-",level:2},{value:"The Configuration \ud83d\uddc4\ufe0f",id:"the-configuration-\ufe0f",level:2},{value:"Running your App inside the Cluster \ud83c\udfc3",id:"running-your-app-inside-the-cluster-",level:2},{value:"Anatomy of an App \ud83e\udec0",id:"anatomy-of-an-app-",level:2},{value:"Next steps \ud83d\udc63",id:"next-steps-",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"k8s-easy-start-cover",src:s(75892).Z+"",width:"1792",height:"1024"})}),"\n",(0,n.jsxs)(t.p,{children:['They say the first step is always the hardest. And when that step is in the direction of Kubernetes, it can feel even more intimidating. You can sometimes feel "paralyzed" by the sheer number of things you don\'t understand. Or better said, you don\u2019t understand ',(0,n.jsx)(t.strong,{children:"yet"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"But once the first step is conquered, the rest feels more attainable. So, let\u2019s take the first step together. Oh, and we'll be using a couple of tools to help us out. After all, we are trying to make this as simple as possible \ud83d\ude09"}),"\n",(0,n.jsx)(t.h3,{id:"support-us-",children:"Support us \ud83d\ude4f"}),"\n",(0,n.jsxs)(t.p,{children:["We know that Kubernetes can be difficult. That is why we created Cyclops, a ",(0,n.jsx)(t.strong,{children:"truly"})," developer-oriented Kubernetes platform. Abstract the complexities of Kubernetes, and deploy and manage your applications through a UI. Because of its platform nature, the UI itself is highly customizable - you can change it to fit your needs."]}),"\n",(0,n.jsxs)(t.p,{children:["We're developing Cyclops as an open-source project. If you're keen to give it a try, here's a quick start guide available on our ",(0,n.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops",children:"repository"}),". If you like what you see, consider showing your support by giving us a star \u2b50"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"github-stars",src:s(47892).Z+"",width:"480",height:"360"})}),"\n",(0,n.jsx)(t.h2,{id:"a-cluster-",children:"A Cluster \ud83c\udf10"}),"\n",(0,n.jsx)(t.p,{children:"The first thing you need to get started with Kubernetes is a cluster. Typically, a cluster represents the pool of servers on which you run your apps. But for now, you don\u2019t need a pool of servers. Let\u2019s start with something simple: a local playground that will help us get the hang of it."}),"\n",(0,n.jsx)(t.p,{children:"One of the easiest ways to quickly get a cluster running is with Minikube. Minikube is a tool that sets up a local Kubernetes cluster on your computer. It\u2019s perfect for development and testing purposes. To get started, you need to:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Install Docker"}),": docker will allow us to run Minikube in an isolated environment, you can find out how to download it ",(0,n.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"here"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Install Minikube"}),": Follow the instructions on the ",(0,n.jsx)(t.a,{href:"https://minikube.sigs.k8s.io/docs/",children:"Minikube site"})," to install it on your machine."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Start Minikube"}),": Once installed, you can start your local cluster with the command:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"minikube start\n"})}),"\n",(0,n.jsx)(t.p,{children:"This will set up a single-node (single-server) Kubernetes cluster on your machine."}),"\n",(0,n.jsx)(t.h2,{id:"the-configuration-\ufe0f",children:"The Configuration \ud83d\uddc4\ufe0f"}),"\n",(0,n.jsx)(t.p,{children:"This is usually the trickiest part of working with Kubernetes. For Kubernetes to run your application, you must create a configuration file that tells Kubernetes how to handle your application. These files are traditionally written in YAML and follow their own syntax and rules."}),"\n",(0,n.jsxs)(t.p,{children:["But here\u2019s the good news: ",(0,n.jsx)(t.strong,{children:"Cyclops lets you skip this process entirely."}),(0,n.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops",children:"Cyclops"})," is an open-source tool that provides a user-friendly interface for configuring your applications to run in Kubernetes."]}),"\n",(0,n.jsx)(t.p,{children:"The UI that Cyclops provides is highly customizable when it comes to defining your configurations through its templates feature. It also comes with a couple of predefined templates to get you started on your journey."}),"\n",(0,n.jsx)(t.p,{children:"Cyclops is simple to set up and requires just two commands:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/cyclops-ui/cyclops/v0.6.2/install/cyclops-install.yaml &&\nkubectl apply -f https://raw.githubusercontent.com/cyclops-ui/cyclops/v0.6.2/install/demo-templates.yaml\n"})}),"\n",(0,n.jsx)(t.p,{children:"and secondly:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"kubectl port-forward svc/cyclops-ui 3000:3000 -n cyclops\n"})}),"\n",(0,n.jsx)(t.p,{children:"Just wait a few seconds between these commands to let your Kubernetes cluster start Cyclops."}),"\n",(0,n.jsxs)(t.p,{children:["Now, head over to ",(0,n.jsx)(t.a,{href:"%5Bhttp://localhost:3000%5D(http://localhost:3000/modules)",children:"localhost:3000"}),", and you should be all set!"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"cyclops-modules-screen",src:s(64020).Z+"",width:"2906",height:"1818"})}),"\n",(0,n.jsx)(t.h2,{id:"running-your-app-inside-the-cluster-",children:"Running your App inside the Cluster \ud83c\udfc3"}),"\n",(0,n.jsx)(t.p,{children:"Once inside Cyclops, you\u2019ll be greeted with a screen that says \u201cNo Modules Found.\u201d Modules are Cyclops\u2019s way of saying applications. The next step is running your application (module) in the Kubernetes cluster, or in Kubernetes terms, \u201cdeploying your application.\u201d"}),"\n",(0,n.jsxs)(t.p,{children:["Start by clicking on the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Add module"})})," button at the top right. This will take you to a new screen ",(0,n.jsx)(t.strong,{children:"where the configuration file from the last step will be generated."})]}),"\n",(0,n.jsxs)(t.p,{children:["Cyclops uses templates to generate the configuration file (find more about it ",(0,n.jsx)(t.a,{href:"https://cyclops-ui.com/docs/templates",children:"here"}),"). You can create your own, but Cyclops comes with a few predefined templates that are perfect for getting started."]}),"\n",(0,n.jsxs)(t.p,{children:["At the top of the screen, choose the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"demo-template"})}),". You\u2019ll notice the screen changes, and new fields appear! Switching to another template will change the fields on the screen, but let\u2019s stick to the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"demo-template"})})," for now."]}),"\n",(0,n.jsx)(t.p,{children:"You can leave the inputs in the fields as they are or change them to your liking, but you must give your module a name!"}),"\n",(0,n.jsxs)(t.p,{children:["If you have a Docker image of an application that you created and want to run in Kubernetes, you can do that too! Just put the name of your image in the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"image"})})," field and its version in the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"version"})})," field."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"cyclops-config-screen",src:s(25326).Z+"",width:"3022",height:"1890"})}),"\n",(0,n.jsxs)(t.p,{children:["Once you\u2019re satisfied with these fields, click ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Save"})})," at the bottom, and ",(0,n.jsx)(t.em,{children:"voil\xe0,"})," ",(0,n.jsx)(t.strong,{children:"your application is deployed!"})]}),"\n",(0,n.jsx)(t.h2,{id:"anatomy-of-an-app-",children:"Anatomy of an App \ud83e\udec0"}),"\n",(0,n.jsxs)(t.p,{children:["One of the challenges with Kubernetes is the variety of resources it uses. However, Cyclops makes it easy by ",(0,n.jsx)(t.strong,{children:"displaying all the resources"})," your modules have created. This visual representation really helps you understand the anatomy of your applications."]}),"\n",(0,n.jsxs)(t.p,{children:["With our ",(0,n.jsx)(t.code,{children:"demo-template"})," and the inputs we entered, we created a simple Kubernetes configuration consisting of a service and deployment, as shown on the screen. These are the two most common resources you will encounter and are a good entry point into the whole system."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"cyclops-module-overview",src:s(47466).Z+"",width:"3024",height:"1892"})}),"\n",(0,n.jsx)(t.p,{children:"The Cyclops interface displays all these components in a clear, organized manner, making it easy to understand how your application is structured and how the different pieces fit together."}),"\n",(0,n.jsx)(t.p,{children:'For instance, you can see that the application named "my-app" is running on Minikube, with one replica of the Nginx container (version 1.14.2). You can view logs or modify settings right from this interface.'}),"\n",(0,n.jsx)(t.p,{children:"This visual approach helps bridge the gap between developers and Kubernetes' underlying infrastructure, making it easier to manage and understand your applications."}),"\n",(0,n.jsx)(t.h2,{id:"next-steps-",children:"Next steps \ud83d\udc63"}),"\n",(0,n.jsx)(t.p,{children:"Now that you\u2019ve broken the ice, Kubernetes feels a lot less scary. I suggest you play around with the other templates Cyclops provides and see how different templates create different resources."}),"\n",(0,n.jsxs)(t.p,{children:["The journey to mastering Kubernetes is long and can be tedious. However, you don\u2019t have to walk that path alone! Join our ",(0,n.jsx)(t.a,{href:"https://discord.com/invite/8ErnK3qDb3",children:"Discord community"})," and connect with others who can help you if you ever feel lost!"]}),"\n",(0,n.jsxs)(t.p,{children:["If you enjoyed this post, remember to support us by giving us a star on our ",(0,n.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops",children:"repo"})," \u2b50"]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},25326:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/cyclops-config-screen-2b35aa7b2b40def479dff954b7865a35.png"},47466:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/cyclops-module-overview-screen-3d929a52a38cfdd7e7a420b78ffcda02.png"},64020:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/cyclops-modules-screen-ef358c11e31b9b8ffd79b66dee9633ea.png"},75892:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/k8s-easy-start-cover-5bcf191978680bca20efa3754de749cb.png"},47892:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/github-stars-1ca0ec90e9bd7695498845c4cad2c579.gif"},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var n=s(67294);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);