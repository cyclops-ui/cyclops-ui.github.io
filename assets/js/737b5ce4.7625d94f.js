"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[9607],{97949:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=o(85893),i=o(11151);const s={title:"Five Kubernetes Development Tools for Efficient Cluster Management",authors:["jurajk"]},r=void 0,a={permalink:"/blog/2023/12/08/five-kubernetes-tools",source:"@site/blog/2023-12-08-five-kubernetes-tools/index.md",title:"Five Kubernetes Development Tools for Efficient Cluster Management",description:"kubernetes tools",date:"2023-12-08T00:00:00.000Z",formattedDate:"December 8, 2023",tags:[],readingTime:7.065,hasTruncateMarker:!1,authors:[{name:"Juraj Karad\u017ea",title:"Cyclops CEO",url:"https://github.com/KaradzaJuraj",imageURL:"https://github.com/KaradzaJuraj.png",key:"jurajk"}],frontMatter:{title:"Five Kubernetes Development Tools for Efficient Cluster Management",authors:["jurajk"]},unlisted:!1,prevItem:{title:"Complexity by Simplicity - A Deep Dive Into Kubernetes Components",permalink:"/blog/2023/12/18/k8s-cluster-components"},nextItem:{title:"How Cyclops utilizes JSON schema to deliver dynamical UI",permalink:"/blog/2023/11/13/JSON-schemas"}},l={authorsImageUrls:[void 0]},d=[{value:"Show us your support \ud83d\ude4f\ud83c\udffb",id:"show-us-your-support-",level:3},{value:"1. Prometheus: Monitoring and Alerting for Kubernetes",id:"1-prometheus-monitoring-and-alerting-for-kubernetes",level:2},{value:"2. Cyclops: Deploying applications with just a couple of clicks",id:"2-cyclops-deploying-applications-with-just-a-couple-of-clicks",level:2},{value:"3. Keda: Event-Driven Autoscaling for Kubernetes Workloads",id:"3-keda-event-driven-autoscaling-for-kubernetes-workloads",level:2},{value:"4. Karpenter: Automated Node Provisioning for Kubernetes",id:"4-karpenter-automated-node-provisioning-for-kubernetes",level:2},{value:"5. Velero: Disaster Recovery and Backup for Kubernetes",id:"5-velero-disaster-recovery-and-backup-for-kubernetes",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"kubernetes tools",src:o(24391).Z+"",width:"1179",height:"675"})}),"\n",(0,t.jsx)(n.p,{children:"Kubernetes has become the go-to platform for managing containerized applications, offering scalability, flexibility, and robustness. However, the complexity of Kubernetes can be daunting, requiring developers and DevOps teams to navigate through intricate configuration files and command-line interactions."}),"\n",(0,t.jsx)(n.p,{children:"Several powerful development tools have emerged to simplify the management of Kubernetes clusters and streamline the deployment process. In this article, we will explore five Kubernetes development tools:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://prometheus.io/",children:(0,t.jsx)(n.strong,{children:"1. Prometheus"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://cyclops-ui.com/",children:(0,t.jsx)(n.strong,{children:"2. Cyclops"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://keda.sh/",children:(0,t.jsx)(n.strong,{children:"3. Keda"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://karpenter.sh/",children:(0,t.jsx)(n.strong,{children:"4. Karpenter"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://velero.io/",children:(0,t.jsx)(n.strong,{children:"5. Velero"})})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These tools offer intuitive user interfaces, automated scaling capabilities, disaster recovery solutions, and improved efficiency in managing Kubernetes clusters."}),"\n",(0,t.jsx)(n.h3,{id:"show-us-your-support-",children:"Show us your support \ud83d\ude4f\ud83c\udffb"}),"\n",(0,t.jsxs)(n.p,{children:["Before we start, we would love it if you starred our repository and helped us get our tool in front of other developers. Our GitHub repo is here: ",(0,t.jsx)(n.a,{href:"https://github.com/cyclops-ui/cyclops",children:"https://github.com/cyclops-ui/cyclops"})," \u2b50"]}),"\n",(0,t.jsx)(n.h2,{id:"1-prometheus-monitoring-and-alerting-for-kubernetes",children:"1. Prometheus: Monitoring and Alerting for Kubernetes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Prometheus logo",src:o(6157).Z+"",width:"300",height:"258"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Prometheus"})," is an open-source monitoring and alerting toolkit designed specifically for microservices and containers. It offers flexible querying, real-time notifications, and visibility into containerized workloads, APIs, and distributed services."]}),"\n",(0,t.jsx)(n.p,{children:"One of the features of Prometheus is its ability to assist with cloud-native security by detecting irregular traffic or activity that could potentially escalate into an attack."}),"\n",(0,t.jsx)(n.p,{children:'It uses a pull-based system, sending HTTP requests called "scrapes", to collect metrics from applications and services. These metrics are stored in memory and on local disk, allowing for easy retrieval and analysis.'}),"\n",(0,t.jsx)(n.p,{children:"Prometheus can access data directly from client libraries or through exporters, which are software located adjacent to the application. Exporters accept HTTP requests from Prometheus, ensure the data format compatibility, and serve the requested data to the Prometheus server."}),"\n",(0,t.jsx)(n.p,{children:"Prometheus provides four main types of metrics: Counter, Gauge, Histogram, and Summary. These metrics offer flexibility in measuring various aspects of applications and services, such as event start counts, memory usage, data aggregation, and quantile ranges."}),"\n",(0,t.jsx)(n.p,{children:"To discover targets for monitoring, Prometheus utilizes service discovery in Kubernetes clusters. It can access machine-level metrics separately from application information, allowing for comprehensive monitoring."}),"\n",(0,t.jsx)(n.p,{children:"Once the data collection is complete, Prometheus provides a query language called PromQL, which enables users to access and export monitoring data to graphical interfaces like Grafana or send alerts using Alertmanager."}),"\n",(0,t.jsx)(n.h2,{id:"2-cyclops-deploying-applications-with-just-a-couple-of-clicks",children:"2. Cyclops: Deploying applications with just a couple of clicks"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Cyclops logo",src:o(37279).Z+"",width:"3453",height:"929"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Cyclops"})," is a tool that simplifies the management of applications running in Kubernetes clusters. It abstracts complex configuration files into form-based UIs, eliminating the need for manual configuration and command-line interactions. This makes the deployment process more accessible to individuals with varying levels of technical expertise."]}),"\n",(0,t.jsx)(n.p,{children:"With Cyclops, you're not boxed into a one-size-fits-all approach. You can customize modules to suit your unique needs, giving you the freedom to create templates with input validation for seamless collaboration with your team."}),"\n",(0,t.jsx)(n.p,{children:"This not only speeds up your work but also empowers each team member to work independently, promoting a smoother and more efficient workflow."}),"\n",(0,t.jsx)(n.p,{children:"In Cyclops, every module lays out a detailed list of resources it uses\u2014deployments, services, pods, and others, all in plain view. You can easily track their status, helping you quickly spot and fix any hiccups in your application. It's like having a clear roadmap to navigate and troubleshoot any issues that pop up."}),"\n",(0,t.jsxs)(n.p,{children:["Within the architecture of Cyclops, a central component is the ",(0,t.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"})," engine, which allows the dynamic generation of configurations. This engine serves as a key mechanism for efficiently managing settings and parameters in the Cyclops framework."]}),"\n",(0,t.jsx)(n.p,{children:"As Kubernetes-based systems commonly employ Helm as their package manager, seamlessly integrating Cyclops is a straightforward process."}),"\n",(0,t.jsx)(n.p,{children:"Cyclops promotes consistency and standardization in deployment practices. By providing predefined templates or configuration presets, Cyclops ensures that deployments adhere to established best practices and guidelines. This consistency not only improves the reliability and stability of deployments but also facilitates collaboration."}),"\n",(0,t.jsx)(n.h2,{id:"3-keda-event-driven-autoscaling-for-kubernetes-workloads",children:"3. Keda: Event-Driven Autoscaling for Kubernetes Workloads"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Keda logo",src:o(28367).Z+"",width:"625",height:"625"})}),"\n",(0,t.jsx)(n.p,{children:"Kubernetes Horizontal Pod Autoscaling (HPA) and Vertical Pod Autoscaling (VPA) are widely used for autoscaling Kubernetes clusters based on CPU and memory usage."}),"\n",(0,t.jsxs)(n.p,{children:["However, they have limitations, such as the inability to scale pods to zero or scale based on metrics other than resource utilization. This is where ",(0,t.jsx)(n.strong,{children:"Keda"})," (Kubernetes Event-Driven Autoscaling) comes into play."]}),"\n",(0,t.jsx)(n.p,{children:"Keda is an open-source container autoscaler that extends the capabilities of native Kubernetes autoscaling solutions by scaling pods based on external events or triggers."}),"\n",(0,t.jsx)(n.p,{children:"Monitoring event sources like AWS SQS, Kafka, and RabbitMQ, Keda efficiently triggers or halts deployments based on predefined rules. This adaptable solution also allows for custom metrics, facilitating effective autoscaling tailored for message-driven microservices, ensuring optimal performance and resource utilization."}),"\n",(0,t.jsx)(n.p,{children:"The components of Keda include event sources, scalers, metrics adapters, and controllers. Event sources provide the external events that trigger scaling, while scalers monitor these events and fetch metrics. Metrics adapters translate the metrics for the controller, which then scales the deployments accordingly."}),"\n",(0,t.jsx)(n.p,{children:"By leveraging Keda, DevOps teams can free up resources and reduce cloud costs by scaling down when there are no events to process. Keda also offers interoperability with various DevOps toolchains, supporting both built-in and external scalers."}),"\n",(0,t.jsx)(n.p,{children:"With Keda, autoscaling becomes more flexible and efficient, empowering teams to optimize resource utilization and adapt to changing workload requirements."}),"\n",(0,t.jsx)(n.h2,{id:"4-karpenter-automated-node-provisioning-for-kubernetes",children:"4. Karpenter: Automated Node Provisioning for Kubernetes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Karpenter logo",src:o(36753).Z+"",width:"734",height:"178"})}),"\n",(0,t.jsxs)(n.p,{children:["Kubernetes clusters often face the challenge of scheduling pods on available nodes. ",(0,t.jsx)(n.strong,{children:"Karpenter"})," is an open-source cluster auto scaler that automatically provisions new nodes in response to un-schedulable pods. It evaluates the aggregate resource requirements of pending pods and selects the optimal instance type to accommodate them."]}),"\n",(0,t.jsx)(n.p,{children:"Karpenter also supports a consolidation feature, actively moving pods and replacing nodes with cheaper versions to reduce cluster costs."}),"\n",(0,t.jsx)(n.p,{children:'A standout feature is the introduction of "Node Pools," allowing users to categorize nodes based on various criteria. This customization ensures a tailored approach to resource allocation, with Karpenter dynamically provisioning nodes into the most fitting pools.'}),"\n",(0,t.jsx)(n.p,{children:"At its core, Karpenter is designed to automate the scaling of Kubernetes clusters seamlessly. Leveraging Custom Resource Definitions (CRDs) within Kubernetes, Karpenter integrates seamlessly with existing tools and APIs, providing a familiar experience for users."}),"\n",(0,t.jsx)(n.p,{children:"The flexibility of Karpenter extends beyond the confines of AWS, making it a versatile solution for both cloud and on-premises environments."}),"\n",(0,t.jsx)(n.p,{children:"Karpenter's adaptability shines through its support for user-defined strategies and policies through Kubernetes resources. This flexibility enables organizations to align Karpenter with their unique application and workload requirements, enabling better automated and optimized Kubernetes scalability."}),"\n",(0,t.jsx)(n.h2,{id:"5-velero-disaster-recovery-and-backup-for-kubernetes",children:"5. Velero: Disaster Recovery and Backup for Kubernetes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Velero logo",src:o(38607).Z+"",width:"1248",height:"980"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Velero"})," is a powerful tool that provides disaster recovery and backup solutions for Kubernetes clusters. It enables users to easily backup, restore, and migrate applications and their persistent volumes."]}),"\n",(0,t.jsx)(n.p,{children:"Velero takes snapshots of cluster resources and data, storing them in object storage providers like AWS S3, Google Cloud Storage, or Azure Blob Storage."}),"\n",(0,t.jsx)(n.p,{children:"With Velero, users can create backup schedules, ensuring regular snapshots of critical cluster resources. This allows for efficient disaster recovery in case of data loss or cluster failures. Velero also supports cluster migration, simplifying the process of moving applications and data between Kubernetes clusters."}),"\n",(0,t.jsx)(n.p,{children:"The tool offers resource filtering capabilities, allowing users to selectively backup and restore specific resources."}),"\n",(0,t.jsx)(n.p,{children:"This flexibility ensures that only relevant data is included in the backup, saving storage space and reducing backup and restore times. Velero integrates with CSI (Container Storage Interface), providing support for backing up volumes and restoring them to their original state."}),"\n",(0,t.jsx)(n.p,{children:"In addition to disaster recovery and backup, Velero provides features like running in any namespace, extending functionality with hooks, and supporting custom plugins for enhanced customization. It offers troubleshooting guides for diagnosing and resolving common issues, ensuring a smooth experience in managing Kubernetes clusters."}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"These five Kubernetes development tools - Prometheus, Cyclops, Keda, Karpenter, and Velero - play pivotal roles in simplifying the complexities of Kubernetes cluster management."}),"\n",(0,t.jsx)(n.p,{children:"From monitoring and alerting with Prometheus to event-driven autoscaling using Keda, and automated node provisioning through Karpenter, each tool addresses specific challenges, contributing to more efficient and resilient Kubernetes environments."}),"\n",(0,t.jsx)(n.p,{children:"Cyclops stands out for its user-friendly approach, abstracting complex configurations into intuitive UIs, while Velero provides crucial disaster recovery and backup solutions for safeguarding critical data and applications."}),"\n",(0,t.jsx)(n.p,{children:"As Kubernetes continues to be a cornerstone in modern application deployment, these tools empower developers and DevOps teams to navigate the intricacies of containerized environments with greater ease."}),"\n",(0,t.jsx)(n.p,{children:"By integrating these tools into your Kubernetes workflows, you can enhance scalability, streamline deployment processes, and ensure the robustness of your applications in today's dynamic and demanding computing landscape."})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},37279:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/cyclops_logo-ac95e69df0de7d0e1d536f8febd79026.png"},36753:(e,n,o)=>{o.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAt4AAACyCAYAAAB1PchXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTEyLTA3VDE2OjQyOjI0KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0xMi0wN1QxNjo0Mzo1NCswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0xMi0wN1QxNjo0Mzo1NCswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1YjdlYTAyNy0xM2RmLTg0NDctOTI5Ny0xMmNkOGVmYTAzNGEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2YjU4M2ViMC03MjdkLTk4NDAtYjg2OC0yMGNjNzFkM2FiNGIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3OGE3MGExNy0xNmJlLWI2NDItODc0MS0zNjcxNThlZjc3ZTEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc4YTcwYTE3LTE2YmUtYjY0Mi04NzQxLTM2NzE1OGVmNzdlMSIgc3RFdnQ6d2hlbj0iMjAyMy0xMi0wN1QxNjo0MjoyNCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1YjdlYTAyNy0xM2RmLTg0NDctOTI5Ny0xMmNkOGVmYTAzNGEiIHN0RXZ0OndoZW49IjIwMjMtMTItMDdUMTY6NDM6NTQrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43vWnFAAAeOUlEQVR4nO3da7McxbXm8WdlbiFuQiCEgYGD4WABRxxkgy9x5lPNy/kM83K+00RMhAmDjzQiuNjGOkbGgAwSIC7SzlzzomuLzWZfursyK7O6/7+IHUEE6qzV3dlVq7IyV5q7CwAAAEBdoXUAAAAAwDYg8QYAAAAmQOINAAAATIDEGwAAAJgAiTcAAAAwARJvAAAAYAIk3gAAAMAESLwBAACACZB4AwAAABMg8QYAAAAmQOINAAAATIDEGwAAAJjATq2G/9f//lutposx09UQ7Gm5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"},28367:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/keda_logo-c6528565a8e0db72c48fa80c545607f1.png"},24391:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/kubernetes_tools-7af710605ae254597cb0349372102dae.png"},6157:(e,n,o)=>{o.d(n,{Z:()=>t});const t="data:image/png;base64,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"},38607:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/velero_logo-82253afa9251747aca34dfa88d03742d.png"},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var t=o(67294);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);