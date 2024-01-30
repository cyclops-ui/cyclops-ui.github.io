"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[5896],{4110:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=s(5893),r=s(1151);const a={title:"Coexistence of containers and Helm charts - OCI based registries",authors:["jurajk"]},i="OCI blog post",o={permalink:"/blog/2024/01/29/OCI-based-registries",source:"@site/blog/2024-01-29-OCI-based-registries/index.md",title:"Coexistence of containers and Helm charts - OCI based registries",description:"Docker Ship",date:"2024-01-29T00:00:00.000Z",formattedDate:"January 29, 2024",tags:[],readingTime:9.52,hasTruncateMarker:!1,authors:[{name:"Juraj Karad\u017ea",title:"Cyclops CEO",url:"https://github.com/KaradzaJuraj",imageURL:"https://github.com/KaradzaJuraj.png",key:"jurajk"}],frontMatter:{title:"Coexistence of containers and Helm charts - OCI based registries",authors:["jurajk"]},unlisted:!1,nextItem:{title:"\ud83c\udf80 Five tools to make your K8s experience more enjoyable \ud83c\udf80",permalink:"/blog/2024/01/15/five-kubernetes-UIs"}},l={authorsImageUrls:[void 0]},c=[{value:"Show us your support \ud83d\ude4f\ud83c\udffb",id:"show-us-your-support-",level:3},{value:"Creating a Helm chart on OCI registry",id:"creating-a-helm-chart-on-oci-registry",level:2},{value:"Chart.yaml",id:"chartyaml",level:3},{value:"Templates folder",id:"templates-folder",level:3},{value:"Values definition",id:"values-definition",level:3},{value:"Pushing to Docker Hub",id:"pushing-to-docker-hub",level:3},{value:"Using OCI charts",id:"using-oci-charts",level:2},{value:"Create a minikube Cluster",id:"create-a-minikube-cluster",level:3},{value:"Deploy OCI chart into a Kubernetes cluster",id:"deploy-oci-chart-into-a-kubernetes-cluster",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Docker Ship",src:s(2080).Z+"",width:"1600",height:"900"})}),"\n",(0,t.jsx)(n.p,{children:"If you are using Kubernetes, there's a fair chance you are using Helm or at least considered to. This article will guide you on how to publish your Helm charts in a less conventional way - using OCI-based registries."}),"\n",(0,t.jsx)(n.p,{children:"First of all, we will briefly cover what OCI-based registries are and how they can help us, and after some theory, we will create a Helm chart, push it to the OCI registry, and actually deploy something using it."}),"\n",(0,t.jsx)(n.h3,{id:"show-us-your-support-",children:"Show us your support \ud83d\ude4f\ud83c\udffb"}),"\n",(0,t.jsx)("div",{style:{"text-align":"center"},children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ProductHunt Launch",src:s(22).Z+"",width:"480",height:"480"})})}),"\n",(0,t.jsxs)(n.p,{children:["Before we start, we want to mention that we scheduled our",(0,t.jsx)(n.a,{href:"https://www.producthunt.com/products/cyclops",children:"first release on Product Hunt"}),"! Click the notify me button to be alerted when we are out and ready to receive your feedback \ud83d\udd14"]}),"\n",(0,t.jsxs)(n.p,{children:["We would love it if you starred our ",(0,t.jsx)(n.a,{href:"https://github.com/cyclops-ui/cyclops",children:"repository"})," and helped us get our tool in front of other developers \u2b50"]}),"\n",(0,t.jsx)(n.h1,{id:"helm-oci-based-registries",children:"Helm OCI-based registries"}),"\n",(0,t.jsx)(n.p,{children:"Helm repositories are used to store Helm charts. Using them, we can publish and version our applications as packaged Helm charts others can install into their cluster. They also allow for easier versioning and rollback of resources. All in all, a single, centralized place to store your Helm charts."}),"\n",(0,t.jsxs)(n.p,{children:["Under the hood, a Helm repository is a simple HTTP server that serves an ",(0,t.jsx)(n.code,{children:"index.yaml"})," file that contains information about charts stored in that repository, like versions, descriptions, and URLs on where to download chart contents (usually on the same server). Read more about ",(0,t.jsx)(n.code,{children:"index.yaml"})," file ",(0,t.jsx)(n.a,{href:"https://helm.sh/docs/topics/chart_repository/#the-index-file",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["OCI stands for ",(0,t.jsx)(n.a,{href:"https://opencontainers.org/",children:"Open Container Initiative"}),", and its goal as an organization is to define a specification for container formats and runtime."]}),"\n",(0,t.jsx)(n.p,{children:"At first glance, it does not seem related to the Helm repositories we just mentioned; at least for me it wasn\u2019t. OCI registries mostly host container images, but we can store different types of content there. One of the types we can host is Helm charts!"}),"\n",(0,t.jsxs)(n.p,{children:["With such a registry, you can host all your images and Helm charts in the same place. On top of that, you don\u2019t need to maintain a Helm repository ",(0,t.jsx)(n.code,{children:"index.yaml"})," file, which makes the management of your chart easier."]}),"\n",(0,t.jsx)(n.p,{children:"You can serve the exact same chart on a Helm repository and a container (OCI) registry; the only difference between those two approaches is how you maintain the charts."}),"\n",(0,t.jsx)(n.p,{children:"You can use multiple different container registries to store Helm charts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/push-oci-artifact.html",children:"Amazon ECR"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/azure/container-registry/container-registry-helm-repos#push-chart-to-registry-as-oci-artifact",children:"Azure Container Registry"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.docker.com/docker-hub/oci-artifacts/",children:"Docker Hub"})," (used in this demo)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://cloud.google.com/artifact-registry/docs/helm/manage-charts",children:"Google Artifact Registry"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://goharbor.io/docs/main/administration/user-defined-oci-artifact/",children:"Harbor"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://cloud.ibm.com/docs/Registry?topic=Registry-registry_helm_charts",children:"IBM Cloud Container Registry"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.jfrog.com/confluence/display/JFROG/Docker+Registry",children:"JFrog Artifactory"})}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"getting-our-hands-dirty",children:"Getting our hands dirty"}),"\n",(0,t.jsx)(n.p,{children:"Now that we have our basics down, let's see those OCI charts in practice and use them to deploy our applications. We will create a chart, push it to DockerHub, and then use it to deploy our apps in a Kubernetes cluster. In order to deploy resources from the chart we defined into a Kubernetes cluster, we are going to use Cyclops."}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-helm-chart-on-oci-registry",children:"Creating a Helm chart on OCI registry"}),"\n",(0,t.jsx)(n.p,{children:"Firstly, we are going to create a Helm chart. To create a chart, create a new directory"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir oci-demo\n"})}),"\n",(0,t.jsx)(n.p,{children:"and add the files listed below to the created directory. Feel free to customize the chart to fit your needs, but for the sake of this demo, we are going to create a basic one with the following structure:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:".\n\u2514\u2500\u2500 oci-demo\n    \u251c\u2500\u2500 Chart.yaml                 # YAML file containing information about the chart\n    \u251c\u2500\u2500 templates                  # Directory of templates that, when combined with values, will generate valid Kubernetes manifest files.\n    \u2502         \u251c\u2500\u2500 deployment.yaml  # K8s resources are separated into multiple files. Feel free to add more or change existing\n    \u2502         \u2514\u2500\u2500 service.yaml\n    \u251c\u2500\u2500 values.schema.json         # JSON Schema for imposing a structure on the values.yaml file\n    \u2514\u2500\u2500 values.yaml                # The default configuration values for this chart\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can find out more about each of those files/directories on Helm's ",(0,t.jsx)(n.a,{href:"https://helm.sh/docs/topics/charts/",children:"official docs"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"chartyaml",children:"Chart.yaml"}),"\n",(0,t.jsxs)(n.p,{children:["Let's start with ",(0,t.jsx)(n.code,{children:"[Chart.yaml](https://helm.sh/docs/topics/charts/#the-chartyaml-file)"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# Chart.yaml\n\napiVersion: v1\nname: oci-demo\nversion: 0.0.0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Not to go into detail, I'm going to ",(0,t.jsx)(n.code,{children:"302"})," you to the Helm docs."]}),"\n",(0,t.jsx)(n.h3,{id:"templates-folder",children:"Templates folder"}),"\n",(0,t.jsxs)(n.p,{children:["The next step is defining what Kubernetes resources our packaged application need. We define those in the ",(0,t.jsx)(n.code,{children:"/templates"})," folder. As seen in the chart structure from earlier, we are going to add only a ",(0,t.jsx)(n.code,{children:"deployment"})," and a ",(0,t.jsx)(n.code,{children:"service"})," to our application."]}),"\n",(0,t.jsx)(n.p,{children:"Contents of those files are below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# templates/deployment.yaml\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: {{ .Values.name }}\n  name: {{ .Values.name }}\nspec:\n  replicas: {{ .Values.replicas }}\n  selector:\n    matchLabels:\n      app: {{ .Values.name }}\n  template:\n    metadata:\n      labels:\n        app: {{ .Values.name }}\n    spec:\n      containers:\n      - image: {{ .Values.image -}}:{{ .Values.version }}\n        name: {{ .Values.name }}\n        ports:\n        - containerPort: 80\n          name: http\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"and"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# templates/service.yaml\n\n{{- if .Values.service }}\napiVersion: v1\nkind: Service\nmetadata:\n  name: {{ .Values.name }}\n  labels:\n    app: {{ .Values.name }}\nspec:\n  type: LoadBalancer\n  ports:\n    - port: 80\n      targetPort: 80\n      protocol: TCP\n      name: http\n  selector:\n    app: {{ .Values.name }}\n{{- end }}\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"values-definition",children:"Values definition"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"/templates"})," folder we defined, obviously, just the templates. It would be a good idea to define default values for those. We are going to use ",(0,t.jsx)(n.code,{children:"values.yaml"})," for that:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"name: demo\nreplicas: 3\n\nimage: nginx\nversion: 1.14.2\n\nservice: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["These are default values, and anybody using your chart will most probably want to change those. But what happens if someone using your chart messes up values by providing invalid data? For example, setting ",(0,t.jsx)(n.code,{children:"replicas: two"})," or ",(0,t.jsx)(n.code,{children:"service: no"}),". Another thing that can get messed up is the name of the value, so somebody might use ",(0,t.jsx)(n.code,{children:"instance: 3"})," instead of ",(0,t.jsx)(n.code,{children:"replicas: 3"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Both of these examples seem pretty obvious and something you wouldn\u2019t mess up, but as your chart grows, so does your ",(0,t.jsx)(n.code,{children:"values.yaml"})," file. A great example is the Redis chart by Bitnami. I encourage you to scroll through its ",(0,t.jsx)(n.a,{href:"https://github.com/bitnami/charts/blob/main/bitnami/redis/values.yaml",children:"values file"}),". See you in a minute!"]}),"\n",(0,t.jsx)(n.p,{children:"Now that you are back, you probably understand why validating values and defining their structure makes sense. Let\u2019s do the same for our chart."}),"\n",(0,t.jsx)(n.p,{children:"But first, let\u2019s define what are the rules of this validation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"service"})," is type boolean"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"image"})," and ",(0,t.jsx)(n.code,{children:"version"})," are strings"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"replicas"})," is an integer"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"replicas"})," is \u2265 0"]}),"\n",(0,t.jsxs)(n.li,{children:["allow only certain values for ",(0,t.jsx)(n.code,{children:"version"}),"; let those be ",(0,t.jsx)(n.code,{children:"1.14.1"}),", ",(0,t.jsx)(n.code,{children:"1.14.2"}),", or ",(0,t.jsx)(n.code,{children:"1.15.0"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"There are quite a few rules packed for such short values file! However, having them in place gives us the confidence to deploy the chart without worrying about making mistakes."}),"\n",(0,t.jsx)(n.p,{children:"Now that we have those defined, our JSON schema will look like the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "properties": {\n    "name": {\n      "description": "Application name",\n      "type": "string"\n    },\n    "replicas": {\n      "description": "Number of replicas",\n      "type": "integer",\n      "minimum": 0\n    },\n    "image": {\n      "description": "Container Image",\n      "type": "string"\n    },\n    "version": {\n      "description": "Container image version",\n      "type": "string",\n      "enum": ["1.14.1", "1.14.2", "1.15.0"]\n    },\n    "service": {\n      "description": "Expose your application",\n      "type": "boolean"\n    }\n  },\n  "order": ["name", "replicas", "image", "version", "service"],\n  "title": "Values",\n  "type": "object"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can find more on how to write a JSON schema for a Helm chart in the ",(0,t.jsx)(n.a,{href:"https://helm.sh/docs/topics/charts/#schema-files",children:"Helm docs"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"pushing-to-docker-hub",children:"Pushing to Docker Hub"}),"\n",(0,t.jsx)(n.p,{children:"If you don\u2019t already have a Docker Hub account, you should create one to host your charts."}),"\n",(0,t.jsx)(n.p,{children:"To push our chart to an OCI registry, we will need to package the chart into a tarball with the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm package oci-demo\n"})}),"\n",(0,t.jsxs)(n.p,{children:["There should now be a tarball file called ",(0,t.jsx)(n.code,{children:"oci-demo-0.0.0.tgz"})," ."]}),"\n",(0,t.jsx)(n.p,{children:"Next, you will need to sign in to Docker Hub using Helm:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm registry login registry-1.docker.io -u {username}\n"})}),"\n",(0,t.jsx)(n.p,{children:"And finally, push your chart to the remote registry:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm push oci-demo-0.0.0.tgz oci://registry-1.docker.io/{username}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check your artifacts on ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/",children:"Docker Hub"}),", and you should see your newly created Helm chart. If you click on the chart, you\u2019ll see more info about the chart and its versions."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Docker Hub tags",src:s(510).Z+"",width:"740",height:"290"})}),"\n",(0,t.jsx)(n.h2,{id:"using-oci-charts",children:"Using OCI charts"}),"\n",(0,t.jsx)(n.p,{children:"We now have our Helm chart locked and loaded, so let\u2019s use it. First of all, let's spin up a Kubernetes cluster. If you already have a running Kubernetes cluster, feel free to use it and skip this step."}),"\n",(0,t.jsx)(n.h3,{id:"create-a-minikube-cluster",children:"Create a minikube Cluster"}),"\n",(0,t.jsx)(n.p,{children:"When I want to play around with a new Kubernetes tool, I try it out on a minikube cluster. Minikube is basically a Kubernetes cluster you can run on your own machine and easily tear down once you are done."}),"\n",(0,t.jsx)(n.p,{children:"If you are using a mac, you can install it via brew:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew install minikube\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check their installation guide here \u2192 ",(0,t.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"https://minikube.sigs.k8s.io/docs/start/"})]}),"\n",(0,t.jsx)(n.p,{children:"To actually run the cluster, just hit:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"minikube start\n"})}),"\n",(0,t.jsx)(n.p,{children:"A quick check that everything is ok; let's list all the namespaces:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get ns\n\nNAME              STATUS   AGE\ndefault           Active   11s\nkube-node-lease   Active   13s\nkube-public       Active   13s\nkube-system       Active   13s\n"})}),"\n",(0,t.jsx)(n.h3,{id:"deploy-oci-chart-into-a-kubernetes-cluster",children:"Deploy OCI chart into a Kubernetes cluster"}),"\n",(0,t.jsx)(n.p,{children:"You can deploy your newly created Helm chart using pure Helm, but let\u2019s take it a step further. Chances are we will want to edit that deployment with our specific values and change those over time, so let's make it more user-friendly."}),"\n",(0,t.jsx)(n.p,{children:"We can use Cyclops to help us with that! It can help you deploy and visualize your applications by giving you a simple UI where you get your chart deployed in just a couple of clicks. Let\u2019s install Cyclops into our cluster and deploy that newly created chart!"}),"\n",(0,t.jsx)(n.p,{children:"You can install Cyclops with a single command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/cyclops-ui/cyclops/v0.0.1-alpha.12/install/cyclops-install.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It will create a new namespace called ",(0,t.jsx)(n.code,{children:"cyclops"})," and start a Cyclops deployment inside it."]}),"\n",(0,t.jsx)(n.p,{children:"Check that pods are up and running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get pods -n cyclops\n\nNAME                           READY   STATUS    RESTARTS   AGE\ncyclops-ctrl-d6fd877d8-tpdqd   1/1     Running   0          62s\ncyclops-ui-5c858b44d4-dhn2c    1/1     Running   0          62s\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once those are up, you need to port-forward both deployments:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward svc/cyclops-ui 3000:3000 -n cyclops\n"})}),"\n",(0,t.jsx)(n.p,{children:"and in a separate window, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward svc/cyclops-ctrl 8080:8080 -n cyclops\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can now access Cyclops at ",(0,t.jsx)(n.a,{href:"http://localhost:3000/",children:"http://localhost:3000"})]}),"\n",(0,t.jsxs)(n.p,{children:["When you open your local Cyclops, you can hit ",(0,t.jsx)(n.code,{children:"Add module"})," in the upper right corner."]}),"\n",(0,t.jsxs)(n.p,{children:["This is where we get to use our OCI chart! You are prompted for the ",(0,t.jsx)(n.code,{children:"repository"}),", ",(0,t.jsx)(n.code,{children:"path"}),", and ",(0,t.jsx)(n.code,{children:"version"})," of the template. You can fill those out with the OCI chart you created earlier, like I did below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Repository: oci://registry-1.docker.io/{username}\nPath:       oci-demo\nVersion:    0.0.0\n"})}),"\n",(0,t.jsx)(n.p,{children:"From here, you can just hit load and let Cyclops render a form based on your chart."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(1408).Z+"",width:"3024",height:"1708"})}),"\n",(0,t.jsxs)(n.p,{children:["Do you remember that schema file we added to our chart earlier? This is what Cyclops uses to render this form for you. All the fields and validations you set in the ",(0,t.jsx)(n.code,{children:"values.schema.json"})," file are taken into account so you can get a completely custom UI for your applications."]}),"\n",(0,t.jsx)(n.p,{children:"You can now fill those fields out and hit save, and Cyclops will do the rest for you. Firstly, it will inject those form values into the template and then deploy each of the resources into the cluster."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(866).Z+"",width:"3024",height:"1710"})}),"\n",(0,t.jsx)(n.h1,{id:"any-last-words",children:"Any last words?"}),"\n",(0,t.jsx)(n.p,{children:"We started from scratch and, in a couple of minutes, deployed an application with our own Helm chart and a custom UI tailored specifically for our application. On top of that, we did it using an OCI-based registry and didn\u2019t go through setting up a Helm repository to serve our chart."}),"\n",(0,t.jsx)(n.p,{children:"Hope you had fun throughout the article and found the information and steps we did useful. Thank you for checking out our article!"})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},510:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/docker-hub-c14a2fa28d9b04fcd60cf6489c739b00.png"},866:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/module-details-f61109d57ebbaa54b1567b8ac386afe0.png"},2080:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/oci_helm_docker-1bc4366df1aaceb459551a0c53298c70.jpeg"},1408:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/rendered-form-7c6b823820621111a8f4411eefd1aa15.png"},22:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/product-hunt-675246984f76522e190a985eed4a6f51.gif"},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(7294);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);