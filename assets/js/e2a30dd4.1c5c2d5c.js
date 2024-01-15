"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[3833],{8678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var s=n(5893),o=n(1151);const i={},l="The Module Screen",r={id:"installation/demo/module",title:"The Module Screen",description:"After you have created your first module, now it is the time to take a look at the Cyclops dashboard. The first thing we",source:"@site/docs/installation/demo/module.md",sourceDirName:"installation/demo",slug:"/installation/demo/module",permalink:"/docs/installation/demo/module",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"New Module",permalink:"/docs/installation/demo/new_module"},next:{title:"Edit Module",permalink:"/docs/installation/demo/edit_module"}},d={},a=[{value:"Actions",id:"actions",level:2},{value:"Edit",id:"edit",level:3},{value:"Delete",id:"delete",level:3},{value:"Resources",id:"resources",level:2},{value:"Deployment",id:"deployment",level:3},{value:"Service",id:"service",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"the-module-screen",children:"The Module Screen"}),"\n",(0,s.jsxs)(t.p,{children:["After you have created your first module, now it is the time to take a look at the Cyclops dashboard. The first thing we\ncan see in our top left corner is the name of our module (",(0,s.jsx)(t.code,{children:"demo"}),"), the namespace (",(0,s.jsx)(t.code,{children:"cyclops"}),") where the module inhabits in the\ncluster and the link that points towards the GitHub repository where the template is located."]}),"\n",(0,s.jsx)(t.h2,{id:"actions",children:"Actions"}),"\n",(0,s.jsx)(t.p,{children:"Here we have listed the actions that are available to us for the current module."}),"\n",(0,s.jsx)(t.h3,{id:"edit",children:"Edit"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"Edit"})," button takes you to a new screen where you can edit the data we provided when creating the module. Let's\nleave it at that for now, we will go more in depth in the next ",(0,s.jsx)(t.a,{href:"edit_module",children:"chapter"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"delete",children:"Delete"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"Delete"})," button lets you delete the current module. When clicked a popup window will appear that requires you to\nwrite the module name in it. If correctly written the ",(0,s.jsx)(t.em,{children:"delete"})," button will turn red and can be clicked.\n",(0,s.jsx)(t.img,{alt:"Delete Module",src:n(5411).Z+"",title:"Delete Module",width:"1192",height:"708"})]}),"\n",(0,s.jsx)(t.p,{children:"This action deletes the module and all its associated resources from the cluster!"}),"\n",(0,s.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(t.p,{children:["The modules resources are displayed here. These resources include ",(0,s.jsx)(t.em,{children:"Deployments"})," and/or ",(0,s.jsx)(t.em,{children:"Services"})," (other resources are\nstill in development!). The ",(0,s.jsx)(t.em,{children:"Services"})," tab is only visible when it is toggled in the configuration."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Service Toggle On",src:n(4450).Z+"",title:"Service Toggle On",width:"310",height:"114"})}),"\n",(0,s.jsx)(t.h3,{id:"deployment",children:"Deployment"}),"\n",(0,s.jsxs)(t.p,{children:["Here are your deployments. Depending on the number of replicas you wanted, there should be an equal amount of pods.\n",(0,s.jsx)(t.img,{alt:"Deployments",src:n(6380).Z+"",title:"Deployments",width:"2474",height:"1144"})]}),"\n",(0,s.jsxs)(t.p,{children:["The top most element we can see is the name of the deployment, which in our case is ",(0,s.jsx)(t.code,{children:"demo-1"}),". Right under we can see\nthe namespace in which our deployment is located. In the current version of Cyclops, all of your deployments and\nservices are put in the ",(0,s.jsx)(t.code,{children:"default"})," namespace. Right under the namespace stands a button ",(0,s.jsx)(t.em,{children:"View Manifest"}),". This button\ncreates a popup that allows you to see the configuration file that Cyclops created after you filled in the values for\nthe template."]}),"\n",(0,s.jsxs)(t.p,{children:["The Pods are displayed one under another. You can see their name, node, phase, lifetime, image and logs. ",(0,s.jsx)(t.em,{children:"View Logs"})," is\nanother popup window that displays the last 100 logs of the pod. If you are still interested in the logs feature, learn more about it in the\n",(0,s.jsx)(t.a,{href:"logs",children:"Logs tutorial"}),". For now let's provide a short explanation for of the columns in the Deployment section:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Name"})," shows the full name of the pod"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Node"})," shows the node in which the pod is running"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Phase"})," shows the phase in which the pod currently is. This can be ",(0,s.jsx)(t.em,{children:"Running"}),", if it's up, or ",(0,s.jsx)(t.em,{children:"Pending"}),", if it's trying to start up"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Started"})," shows how long is the pod already running for"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Images"})," shows which Docker images is the pod using"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Logs"})," shows the last 100 logs for each of the pods containers"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"service",children:"Service"}),"\n",(0,s.jsxs)(t.p,{children:["Here is your service. In Kubernetes, a Service is a method for exposing a network application that is running as one or\nmore Pods in your cluster. Here we can also see the name of our service ",(0,s.jsx)(t.code,{children:"demo-1"}),", the namespace it inhabits ",(0,s.jsx)(t.code,{children:"default"})," and\nthe manifest. Underneath it shows the port of the service and where it is pointing (port of the pods)."]})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5411:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/delete_module-4a0f3cfafcad70151ec75cdf4e593457.png"},6380:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/deployments-733a6c33f3a58867442469261209704f.png"},4450:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/service_toggle-f335ea7534958933d68d4e41a8b9878e.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var s=n(7294);const o={},i=s.createContext(o);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);