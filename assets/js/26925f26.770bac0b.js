"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[2853],{56913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=n(85893),a=n(11151);const o={title:"Is Kubernetes a database? CRDs explained in 5 minutes",authors:["jurajk"]},r=void 0,i={permalink:"/blog/2024/05/24/is-k8s-database",source:"@site/blog/2024-05-24-is-k8s-database/index.md",title:"Is Kubernetes a database? CRDs explained in 5 minutes",description:"k8s-database",date:"2024-05-24T00:00:00.000Z",formattedDate:"May 24, 2024",tags:[],readingTime:5.245,hasTruncateMarker:!1,authors:[{name:"Juraj Karad\u017ea",title:"Cyclops CEO",url:"https://github.com/KaradzaJuraj",imageURL:"https://github.com/KaradzaJuraj.png",key:"jurajk"}],frontMatter:{title:"Is Kubernetes a database? CRDs explained in 5 minutes",authors:["jurajk"]},unlisted:!1,prevItem:{title:"The Easiest Way to Get Started with Kubernetes",permalink:"/blog/2024/06/07/k8s-easy-start"},nextItem:{title:"Debunking Common Kubernetes Myths",permalink:"/blog/2024/05/17/k8s-myths"}},c={authorsImageUrls:[void 0]},l=[{value:"Support us \ud83d\ude4f",id:"support-us-",level:2},{value:"Kubernetes components",id:"kubernetes-components",level:2},{value:"CRDs and how to create one",id:"crds-and-how-to-create-one",level:2},{value:"Can I then use Kubernetes as a database?",id:"can-i-then-use-kubernetes-as-a-database",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"k8s-database",src:n(8295).Z+"",width:"1792",height:"1024"})}),"\n",(0,s.jsx)(t.p,{children:"When you touch on containerized apps today, Kubernetes usually comes up as their orchestrator. Sure, Kubernetes is great for managing your containers on a fleet of servers and ensuring those are running over time. But today, Kubernetes is more than that."}),"\n",(0,s.jsx)(t.p,{children:"Kubernetes allows you to extend its functionality with your logic. You can build upon existing mechanisms baked into Kubernetes and build dev tooling like never before - enter Custom Resource Definitions (CRDs)."}),"\n",(0,s.jsx)(t.h2,{id:"support-us-",children:"Support us \ud83d\ude4f"}),"\n",(0,s.jsxs)(t.p,{children:["We know that Kubernetes can be difficult. That is why we created Cyclops, a ",(0,s.jsx)(t.strong,{children:"truly"})," developer-oriented Kubernetes platform. Abstract the complexities of Kubernetes, and deploy and manage your applications through a UI. Because of its platform nature, the UI itself is highly customizable - you can change it to fit your needs."]}),"\n",(0,s.jsxs)(t.p,{children:["We're developing Cyclops as an open-source project. If you're keen to give it a try, here's a quick start guide available on our ",(0,s.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops",children:"repository"}),". If you like what you see, consider showing your support by giving us a star \u2b50"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"gh-stars",src:n(47892).Z+"",width:"480",height:"360"})}),"\n",(0,s.jsx)(t.h2,{id:"kubernetes-components",children:"Kubernetes components"}),"\n",(0,s.jsxs)(t.p,{children:["Before diving into CRDs, let's take a step back and look at Kubernetes control plane components, specifically Kubernetes API and its ETCD database. We made a ",(0,s.jsx)(t.a,{href:"https://dev.to/cyclops-ui/complexity-by-simplicity-a-deep-dive-into-kubernetes-components-4l59",children:"blog"})," on each one of those components previously, so feel free to check it out for more details."]}),"\n",(0,s.jsxs)(t.p,{children:["You will likely talk to your Kubernetes cluster using the command-line tool ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/kubectl/",children:"kubectl"}),". This tool allows you to create, read, and delete resources in your Kubernetes clusters. When I say \u201ctalk\u201d to a Kubernetes cluster, I mean making requests against the API. Kubernetes API is the only component we, as users, ever interact with."]}),"\n",(0,s.jsxs)(t.p,{children:["Each time we create or update a K8s resource, the Kubernetes API stores it in its database \u2014 ",(0,s.jsx)(t.code,{children:"etcd"}),". ",(0,s.jsx)(t.a,{href:"https://etcd.io/",children:"etcd"})," is a distributed key-value store used to store all of your resource configurations, such as deployments, services, and so on. A neat feature of ",(0,s.jsx)(t.code,{children:"etcd"})," is that you can subscribe to changes in some keys in the database, which is used by other Kubernetes mechanisms."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Kubernetes control plane",src:n(95701).Z+"",width:"965",height:"523"})}),"\n",(0,s.jsxs)(t.p,{children:["What happens when we create a new K8s resource? Let's go through the flow by creating a service. To create it, we need a file called ",(0,s.jsx)(t.code,{children:"service.yaml"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"# service.yaml\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  selector:\n    app.kubernetes.io/name: MyApp\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 9376\n"})}),"\n",(0,s.jsxs)(t.p,{children:["and apply it to the cluster using ",(0,s.jsx)(t.code,{children:"kubectl"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f service.yaml\n\nservice/my-service created\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"kubectl"})," read our file and created a request against the Kubernetes API. API then makes sure our service configuration is valid (e.g., all the necessary fields were there, fields were of the correct types, \u2026) and stores it to etcd. Now ",(0,s.jsx)(t.code,{children:"etcd"})," can utilize its ",(0,s.jsx)(t.code,{children:"watch"})," feature mentioned previously and notify controllers about a newly created service."]}),"\n",(0,s.jsx)(t.h2,{id:"crds-and-how-to-create-one",children:"CRDs and how to create one"}),"\n",(0,s.jsx)(t.p,{children:"With the basic flow covered, we can now extend it. We can apply the same process of validating, storing, and watching resources to custom objects. To define those objects, we will use Kubernetes\u2019 Custom Resource Definitions (CRD)."}),"\n",(0,s.jsx)(t.p,{children:"CRD can be a YAML file containing the schema of our new object - which fields does our custom object have, and how do we validate them. It will instruct the Kubernetes API on how to handle a new type of resource."}),"\n",(0,s.jsx)(t.p,{children:"Let\u2019s say your company is in the fruit business, and you are trusted with the task of automating the deployment of apples to your Kubernetes cluster. The example, of course, has nothing to do with a real-life scenario to show that you can extend the Kubernetes API however you see fit."}),"\n",(0,s.jsxs)(t.p,{children:["Apples have a color that can be either ",(0,s.jsx)(t.code,{children:"green"}),", ",(0,s.jsx)(t.code,{children:"red"}),", or ",(0,s.jsx)(t.code,{children:"yellow"}),", and each apple has its weight. Let\u2019s create a YAML to reflect that on our Kubernetes API:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"# apple-crd.yaml\n\napiVersion: apiextensions.k8s.io/v1\nkind: CustomResourceDefinition\nmetadata:\n  name: apples.my-fruit.com\nspec:\n  group: my-fruit.com\n  names:\n    kind: Apple\n    listKind: ApplesList\n    plural: apples\n    singular: apple\n  scope: Namespaced\n  versions:\n    - name: v1alpha1\n      schema:\n        openAPIV3Schema:\n          properties:\n            apiVersion:\n              type: string\n            kind:\n              type: string\n            metadata:\n              type: object\n            spec:\n              properties:\n                color:\n                  enum:\n                    - green\n                    - red\n                    - yellow\n                  type: string\n                weightInGrams:\n                  type: integer\n              type: object\n          type: object\n      served: true\n      storage: true\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We defined two properties for version ",(0,s.jsx)(t.code,{children:"v1alpha1"})," under ",(0,s.jsx)(t.code,{children:".properties.spec"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"color"})," (which can take one of the values in the ",(0,s.jsx)(t.code,{children:"enum"}),")"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"weightInGrams"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"To tell the Kubernetes API, there is a new type of object, we can just apply the previous file to the cluster:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f apple-crd.yaml\n\ncustomresourcedefinition.apiextensions.k8s.io/apples.my-fruit.com created\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Kubernetes API is now ready to receive ",(0,s.jsx)(t.code,{children:"Apples"}),", validate them, and store them to ",(0,s.jsx)(t.code,{children:"etcd"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Don\u2019t take my word for it, you can create a Kubernetes object that satisfies the schema from the CRD above:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"# green-apple.yaml\n\napiVersion: my-fruit.com/v1alpha1\nkind: Apple\nmetadata:\n  name: green-apple\nspec:\n  color: green\n  weightInGrams: 200\n"})}),"\n",(0,s.jsx)(t.p,{children:"and apply it to the cluster:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f green-apple.yaml\n\napple.my-fruit.com/green-apple created\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now, your cluster can handle one more type of resource, and you can store and handle your custom data inside the same Kubernetes cluster. This is now a completely valid command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"kubectl get apples\n\nNAME          AGE\ngreen-apple   6s\n"})}),"\n",(0,s.jsx)(t.h2,{id:"can-i-then-use-kubernetes-as-a-database",children:"Can I then use Kubernetes as a database?"}),"\n",(0,s.jsx)(t.p,{children:"Now that we know we can store any type of object in our Kubernetes database and manage it through the K8s API, we should probably draw a line on how far we want to abuse this concept."}),"\n",(0,s.jsxs)(t.p,{children:["Obviously, your application data (like fruits in the example) would fall into the ",(0,s.jsx)(t.strong,{children:"misuse"})," category when talking about CRDs. You should develop stand-alone APIs with separate databases for such cases."]}),"\n",(0,s.jsxs)(t.p,{children:["CRDs are a great fit if you need your objects to be accessible through ",(0,s.jsx)(t.code,{children:"kubectl"})," and the API to the object is ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#declarative-apis",children:"declarative"}),". Also, another great use case for extending the Kubernetes API is when you are implementing the ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/",children:"Kubernetes Operator pattern"}),", but more on that in future blog posts \ud83d\ude04"]}),"\n",(0,s.jsx)(t.p,{children:"On the other hand, if you decide to go the CRD route, you are very much dependent on how K8s API works with resources, and you can get restricted because of its API groups and namespaces."}),"\n",(0,s.jsxs)(t.p,{children:["Kubernetes CRDs are a powerful tool and can help you build new developer platforms and tools. We at Cyclops develop on top of our CRDs so feel free to check them out on our ",(0,s.jsx)(t.a,{href:"https://github.com/cyclops-ui/cyclops",children:"repository"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},95701:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/k8s-cp-ad919a31df84119ef75189e85cdd23f7.png"},8295:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/k8s-database-cover-9397cdf26058aa0b47a94a44eb2962dd.png"},47892:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/github-stars-1ca0ec90e9bd7695498845c4cad2c579.gif"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var s=n(67294);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);