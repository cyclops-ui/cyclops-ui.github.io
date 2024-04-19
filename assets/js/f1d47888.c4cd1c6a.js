"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[5808],{89749:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=o(85893),s=o(11151);const i={title:"Kubernetes Made Simple - Introducing Cyclops",authors:["jurajk"]},r=void 0,l={permalink:"/blog/2024/1/3/cyclops-overview",source:"@site/blog/2024-1-3-cyclops-overview/index.md",title:"Kubernetes Made Simple - Introducing Cyclops",description:"Modules in Cyclops",date:"2024-01-03T00:00:00.000Z",formattedDate:"January 3, 2024",tags:[],readingTime:6.805,hasTruncateMarker:!1,authors:[{name:"Juraj Karad\u017ea",title:"Cyclops CEO",url:"https://github.com/KaradzaJuraj",imageURL:"https://github.com/KaradzaJuraj.png",key:"jurajk"}],frontMatter:{title:"Kubernetes Made Simple - Introducing Cyclops",authors:["jurajk"]},unlisted:!1,prevItem:{title:"\ud83c\udf80 Five tools to make your K8s experience more enjoyable \ud83c\udf80",permalink:"/blog/2024/01/15/five-kubernetes-UIs"},nextItem:{title:"Complexity by Simplicity - A Deep Dive Into Kubernetes Components",permalink:"/blog/2023/12/18/k8s-cluster-components"}},a={authorsImageUrls:[void 0]},c=[{value:"Show us your support \ud83d\ude4f\ud83c\udffb",id:"show-us-your-support-",level:3},{value:"Before we start",id:"before-we-start",level:2},{value:"Installing Cyclops",id:"installing-cyclops",level:2},{value:"It\u2019s Demo Time \ud83d\udca5",id:"its-demo-time-",level:2},{value:"Finish",id:"finish",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Modules in Cyclops",src:o(44686).Z+"",width:"3020",height:"1884"})}),"\n",(0,n.jsxs)(t.p,{children:["If you are a developer, the chances are you have heard about Kubernetes. You heard that it is an amazing tool to help\nyou scale your applications and manage your micro-services. But, you probably also heard that it is ",(0,n.jsx)(t.strong,{children:"VERY"})," complex.\nIt is so complex that you were probably scared off. And I don\u2019t blame you; that is the first reaction I got as well."]}),"\n",(0,n.jsxs)(t.p,{children:["If you search the top posts with the Kubernetes tags on this website, you will find a myriad of tutorials and people\nexplaining Kubernetes. These posts are the most trending because people ",(0,n.jsx)(t.strong,{children:"WANT"})," to understand Kubernetes because we\nfeel like, in today's software development world, Kubernetes is unavoidable. And this is true, to an extent\u2026"]}),"\n",(0,n.jsx)(t.p,{children:"Software developers are often required to understand and work with Kubernetes; if you have ever looked for jobs in this\nsector, you know this already. But what if there was a tool to minimize your touching points with Kubernetes? A tool\nthat simplifies the process and gives you guidance when trying to deploy applications into Kubernetes clusters. A tool\nthat is highly customizable and lets someone in your organization (who understands Kubernetes, commonly known as a\nDevOps) create a user interface for you!"}),"\n",(0,n.jsx)(t.p,{children:"Yep, you guessed it, it\u2019s Cyclops! \ud83d\ude04"}),"\n",(0,n.jsx)(t.p,{children:"And just to clarify, Cyclops is not used to create and manage Kubernetes clusters and other infrastructure; rather,\nCyclops is used for deploying and managing applications INSIDE the cluster."}),"\n",(0,n.jsx)(t.h3,{id:"show-us-your-support-",children:"Show us your support \ud83d\ude4f\ud83c\udffb"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Github Stars",src:o(90472).Z+"",width:"480",height:"360"})}),"\n",(0,n.jsxs)(t.p,{children:["We are building Cyclops to be ",(0,n.jsx)(t.strong,{children:"open-source"}),", and your support would mean the world to us. Consider giving us a star\non ",(0,n.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops",children:"GitHub"})," and following us on ",(0,n.jsx)(t.a,{href:"https://www.producthunt.com/products/cyclops",children:"ProductHunt"}),", where we scheduled our very\nfirst release!"]}),"\n",(0,n.jsx)(t.h2,{id:"before-we-start",children:"Before we start"}),"\n",(0,n.jsx)(t.p,{children:"In order to test out Cyclops, you are going to need a few things. If this is not your first time using Kubernetes, the\nchances are you already have everything ready, but we will still describe each of the components for the newcomers to\nthe Kubernetes space. These tools are not only used for Cyclops, and you can use them for anything Kubernetes-related."}),"\n",(0,n.jsx)(t.p,{children:"The main thing you are going to need to test out Cyclops is a Kubernetes cluster. If you have one that you can use to\nplay with, great; if not, we will show you how to spin up a cluster on your own computer. So, the three prerequisites\nfor doing this are:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.docker.com/products/docker-desktop/",children:(0,n.jsx)(t.strong,{children:"1. Docker"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://minikube.sigs.k8s.io/docs/",children:(0,n.jsx)(t.strong,{children:"2. Minikube"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:(0,n.jsx)(t.strong,{children:"3. kubectl"})})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Docker is the most popular containerization tool, and we will use it to download and spin up a Minikube image.\nDownloading Docker is straightforward: go to their webpage and download the Docker Desktop application."}),"\n",(0,n.jsxs)(t.p,{children:["Minikube plays the role of a Kubernetes cluster on your local machine. It is a great tool for developing and\ntesting out your Kubernetes applications, and it is perfect for this scenario. You can find a guide on how to install\nit ",(0,n.jsx)(t.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The final thing missing is a way of communicating with your Kubernetes cluster, and this is done through the Kubernetes\ncommand line tool called ",(0,n.jsx)(t.code,{children:"kubectl"}),". It can be used to deploy applications, inspect and manage cluster resources, and\nview logs. In this tutorial, we will use it to install Cyclops into our cluster on Minikube and expose its\nfunctionality outside the cluster."]}),"\n",(0,n.jsx)(t.h2,{id:"installing-cyclops",children:"Installing Cyclops"}),"\n",(0,n.jsxs)(t.p,{children:["Once you have your Kubernetes cluster ready (check the ",(0,n.jsx)(t.em,{children:"Before We Start"})," section), installing Cyclops is a\nstraightforward process. Using ",(0,n.jsx)(t.code,{children:"kubectl"}),", run the following command in your terminal:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/cyclops-ui/cyclops/v0.2.0/install/cyclops-install.yaml\n"})}),"\n",(0,n.jsxs)(t.p,{children:["It will create a new namespace called ",(0,n.jsx)(t.code,{children:"cyclops"})," and deploy everything you need for your Cyclops instance to run."]}),"\n",(0,n.jsx)(t.p,{children:"Now, all that is left is to expose the Cyclops server outside the cluster. You will need to expose both the backend and\nfrontend with the commands below."}),"\n",(0,n.jsx)(t.p,{children:"Expose frontend through:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"kubectl port-forward svc/cyclops-ui 3000:3000 -n cyclops\n"})}),"\n",(0,n.jsx)(t.p,{children:"And the backend through:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"kubectl port-forward svc/cyclops-ctrl 8080:8080 -n cyclops\n"})}),"\n",(0,n.jsxs)(t.p,{children:["And that's it! You can now access Cyclops in your browser at ",(0,n.jsx)(t.a,{href:"http://localhost:3000/",children:"http://localhost:3000"}),".\nIf you are having trouble with the ",(0,n.jsx)(t.code,{children:"port-forward"})," commands, you probably just need to wait a few of seconds after\ninstalling Cyclops into your cluster, it can take a while to start all it\u2019s resources."]}),"\n",(0,n.jsx)(t.h2,{id:"its-demo-time-",children:"It\u2019s Demo Time \ud83d\udca5"}),"\n",(0,n.jsx)(t.p,{children:"Now that you have your Cyclops instance up and running, it\u2019s time to see what it\u2019s capable of."}),"\n",(0,n.jsxs)(t.p,{children:["You should be greeted with an almost empty screen with no deployed modules showing. ",(0,n.jsx)(t.em,{children:"Module"})," is Cyclops\u2019s slang for\napplication \ud83d\ude0e. So, let\u2019s start by creating our first module!"]}),"\n",(0,n.jsxs)(t.p,{children:["By clicking on the ",(0,n.jsx)(t.em,{children:"Add module"})," button in the top right corner, you should be taken to a new screen. Here, Cyclops asks\nus which Helm chart do we want to deploy."]}),"\n",(0,n.jsxs)(t.p,{children:["Not to go too deep, but ",(0,n.jsx)(t.a,{href:"https://helm.sh/",children:"Helm"})," is a very popular open-source package manager for Kubernetes. It helps\nyou create configuration files that are needed for applications running in Kubernetes. These charts let Kubernetes know\nhow to handle your application in the cluster."]}),"\n",(0,n.jsxs)(t.p,{children:["Don\u2019t worry; to showcase the basics of Cyclops, we created a simple Helm chart so that anyone can follow along. You can\nfind what it looks like in our ",(0,n.jsx)(t.a,{href:"https://github.com/cyclops-ui/templates/tree/main/demo",children:"GitHub repository"}),", along with\na couple of more examples of Helm charts that you can use!"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Loaded Chart",src:o(15580).Z+"",width:"3022",height:"1888"})}),"\n",(0,n.jsxs)(t.p,{children:["As you can see, once you enter the repository of your chart, Cyclops will render a user interface. ",(0,n.jsxs)(t.em,{children:["If you want to\nfind out the magic behind the rendering, check out our previous\n",(0,n.jsx)(t.a,{href:"https://dev.to/cyclops-ui/how-cyclops-utilizes-json-schema-to-deliver-dynamical-ui-49e",children:"blog"}),"."]})]}),"\n",(0,n.jsxs)(t.p,{children:["You can fill out the fields as you wish, but be mindful of\n",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/",children:"the Kubernetes naming conventions"}),"!"]}),"\n",(0,n.jsx)(t.p,{children:"If you want to follow along, my input is as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"name: demo\nreplicas: 1\nimage: nginx\nversion: 1.14.2\nservice: true\n"})}),"\n",(0,n.jsxs)(t.p,{children:["We will set the module name to ",(0,n.jsx)(t.code,{children:"demo"})," as well. Click save, and Cyclops will show you the details of your new module."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Single pod Deployment",src:o(99538).Z+"",width:"3012",height:"1888"})}),"\n",(0,n.jsxs)(t.p,{children:["This screen shows you all the resources your application is using at the moment. It will list all the deployments,\nservices, pods, or any other resource. Here, we can see that Cyclops deployed one pod into your cluster, as we specified\nin the replicas field. If you want to make sure that it really is running in your cluster, you can check it out by using\nthe following ",(0,n.jsx)(t.code,{children:"kubectl"})," command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"kubectl get pods\n"})}),"\n",(0,n.jsx)(t.p,{children:"But what if all of a sudden, there was a need to scale up your application or any other resource? Well, don't worry;\nwith Cyclops, it\u2019s really easy!"}),"\n",(0,n.jsxs)(t.p,{children:["By clicking the ",(0,n.jsx)(t.em,{children:"Edit"})," button, you can change the values of your application\u2019s resources. Let\u2019s try to scale our\napplication up to 3 replicas and see what happens."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Three pod Deployment",src:o(3986).Z+"",width:"3023",height:"1885"})}),"\n",(0,n.jsxs)(t.p,{children:["You should now see two more pods in the ",(0,n.jsx)(t.em,{children:"Deployment"})," tab; hurray! \ud83c\udf89"]}),"\n",(0,n.jsx)(t.p,{children:"Of course, this works for any other change you might want to make to your application. Like, the service, perhaps? What\nif we realized we don't really need it anymore? Well, with Cyclops, it's really easy to shut it down if need be."}),"\n",(0,n.jsxs)(t.p,{children:["Click again on the ",(0,n.jsx)(t.em,{children:"Edit"})," button, and this time, turn off the service toggle."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Service shut down",src:o(52944).Z+"",width:"3020",height:"1880"})}),"\n",(0,n.jsx)(t.p,{children:"Cyclops won't delete it automatically but will warn you (via the warning triangle sign) that you shut it down, and it is\nnot in function anymore. This means you can safely delete it!"}),"\n",(0,n.jsx)(t.p,{children:"And if you are sick and tired of your application, you can delete the whole thing as well \ud83d\uddd1\ufe0f"}),"\n",(0,n.jsxs)(t.p,{children:["Click on the Delete button and fill in the name of the module to safely delete it. You can, again, check if it really\nwas deleted with ",(0,n.jsx)(t.code,{children:"kubectl"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"kubectl get pods\n"})}),"\n",(0,n.jsx)(t.h2,{id:"finish",children:"Finish"}),"\n",(0,n.jsxs)(t.p,{children:["And that\u2019s all there really is to it! Cyclops allows people with varying knowledge of Kubernetes to leverage its power.\nIf you followed this tutorial, you should have deployed your very first application using Cyclops; congratz! \ud83c\udf89 On our\n",(0,n.jsx)(t.a,{href:"https://cyclops-ui.com/",children:"webpage"}),", you can find one more tutorial showcasing more features and a more complicated use\ncase, as well as our contact and community info."]}),"\n",(0,n.jsxs)(t.p,{children:["If you have any sort of feedback or ideas on how to make Cyclops better, you can fill out our short\n",(0,n.jsx)(t.a,{href:"https://forms.gle/jrwcBHRtpwmK91v47",children:"Google form"}),"!"]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},90472:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/github_stars-1ca0ec90e9bd7695498845c4cad2c579.gif"},44686:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cyclops_overview_1-d1425a739c34f331d274dbe06cb045bf.png"},15580:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cyclops_overview_2-5dbec3f9333dfd03513b07d18d38fbf7.png"},99538:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cyclops_overview_3-deebf8463a3ff3a938a9c446c043bf21.png"},3986:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cyclops_overview_4-acc177a28698ca61b661518764651db8.png"},52944:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cyclops_overview_5-4db38c52e986a5f2d999bb09367da14e.png"},11151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>r});var n=o(67294);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);