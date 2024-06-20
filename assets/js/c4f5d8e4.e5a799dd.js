"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[4195],{64846:(e,s,t)=>{t.r(s),t.d(s,{default:()=>$e});var n=t(67294),a=(t(39960),t(7961));t(36809);var l=t(85893);l.Fragment,l.Fragment,l.Fragment;var i=t(11207);const o=t.p+"assets/images/landing_cyclops-61e2a0de0dbe8273d181c39e971fe55b.png",r=t.p+"assets/images/cyclops-title-0db239a1e9892b621344e49cef1dc7df.png";var c=t(39882);const d="all_spWG",p="title_XZJX",m="yaml_I2WL",u="ui_pRrF",x="descriptionitem_rJvj",h="dot_cN7i";var f=t(42481),g=t(11943),y=t(32896),j=t(68863),b=t(48928),v=t(52371);const w=()=>{const[e,s]=(0,n.useState)("nginx"),[t,a]=(0,n.useState)(3),[i,o]=(0,n.useState)("1.14.2"),[r,c]=(0,n.useState)(80),[w,Z]=(0,n.useState)(null),[N]=g.Z.useForm(),k=e=>{s(e),N.setFieldValue("Name",e)};(0,n.useEffect)((()=>{if(null===w){const e=setInterval((()=>{"my-app"===N.getFieldValue("Name")?(setTimeout((()=>k("my-ap")),0),setTimeout((()=>k("my-a")),50),setTimeout((()=>k("my-")),100),setTimeout((()=>k("my")),150),setTimeout((()=>k("m")),200),setTimeout((()=>k("n")),500),setTimeout((()=>k("ng")),600),setTimeout((()=>k("ngi")),700),setTimeout((()=>k("ngin")),800),setTimeout((()=>k("nginx")),900)):(setTimeout((()=>k("ngin")),0),setTimeout((()=>k("ngi")),50),setTimeout((()=>k("ng")),100),setTimeout((()=>k("n")),150),setTimeout((()=>k("m")),500),setTimeout((()=>k("my")),600),setTimeout((()=>k("my-")),700),setTimeout((()=>k("my-a")),800),setTimeout((()=>k("my-ap")),900),setTimeout((()=>k("my-app")),1e3))}),3e3);Z(e)}return()=>{w&&clearInterval(w)}}),[]);const T="apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: "+e+"\n  labels:\n    app: "+e+"\nspec:\n  replicas: "+((null==(F=t)?0:F>5?5:F<0?0:F)+"\n  selector:\n    matchLabels:\n      app: ")+e+"\n  template:\n    metadata:\n      labels:\n        app: "+e+"\n    spec:\n      containers:\n      - name: "+e+"\n        image: "+e+":"+i+"\n        ports:\n        - containerPort: "+(e=>null==e?80:e)(r);var F;return(0,l.jsxs)("div",{className:d,children:[(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("div",{children:(0,l.jsx)("h1",{className:p,children:"Deploying made easy"})}),(0,l.jsx)("div",{style:{paddingTop:"0",paddingBottom:"20px"},children:(0,l.jsxs)("h3",{className:x,children:[(0,l.jsx)("span",{style:{color:"#ff8803",fontWeight:"bold"},children:"Hide the complexity"})," of Kubernetes under a UI tailored to your needs. Ideal ",(0,l.jsx)("span",{style:{color:"#ff8803",fontWeight:"bold"},children:"for development teams"})," that interact with Kubernetes regularly."]})}),(0,l.jsx)(y.ZP,{theme:{token:{colorPrimary:"#fe8801"}},children:(0,l.jsxs)(g.Z,{labelCol:{span:6,xs:6},wrapperCol:{span:18,xs:15},form:N,children:[(0,l.jsx)(g.Z.Item,{label:(0,l.jsx)("span",{style:{fontSize:"18px"},children:"Name"}),name:"Name",style:{flexDirection:"row"},children:(0,l.jsx)(j.Z,{defaultValue:e,onChange:e=>{Z(null),console.log(w),clearInterval(w),s(e.target.value)}})}),(0,l.jsx)(g.Z.Item,{label:(0,l.jsx)("span",{style:{fontSize:"18px"},children:"Replicas"}),style:{display:"block"},name:"Replicas",rules:[{type:"number",min:0,message:"Number of replicas must not be below 0"},{type:"number",max:5,message:"Number of replicas must not exceed 5"}],children:(0,l.jsx)(b.Z,{style:{width:"100%"},defaultValue:t,onChange:e=>{a(e)}})}),(0,l.jsx)(g.Z.Item,{label:(0,l.jsx)("span",{style:{fontSize:"18px"},children:"Version"}),style:{display:"block"},children:(0,l.jsx)(v.Z,{defaultValue:i,options:[{value:"1.14.1",label:"1.14.1"},{value:"1.14.2",label:"1.14.2"},{value:"1.15.0",label:"1.15.0"}],onChange:e=>{o(e)}})}),(0,l.jsx)(g.Z.Item,{label:(0,l.jsx)("span",{style:{fontSize:"18px"},children:"Port"}),style:{display:"block"},children:(0,l.jsx)(b.Z,{style:{width:"100%"},defaultValue:r,onChange:e=>{c(e)}})})]})})]}),(0,l.jsxs)("div",{className:m,children:[(0,l.jsxs)("div",{style:{backgroundColor:"#000830",borderBottom:"1px solid #a7a7a7",borderRadius:"10px 10px 0px 0px",height:"30px"},children:[(0,l.jsx)("span",{className:h,style:{backgroundColor:"#fe5f58",marginLeft:"10px"}}),(0,l.jsx)("span",{className:h,style:{backgroundColor:"#febc2e"}}),(0,l.jsx)("span",{className:h,style:{backgroundColor:"#26c940"}})]}),(0,l.jsx)(f.Z,{style:{"hljs-attr":{color:"#FFF"},"react-syntax-highlighter-line-number":{color:"#a7a7a7",margin:"0"}},showLineNumbers:!0,customStyle:{borderRadius:"0px 0px 10px 10px",backgroundColor:"#000830",color:"#fe8801"},children:T})]})]})},Z="install_TaVw",N="wrapper_QhFc",k="installTitle_augq",T="titleText_Ib1v",F="k8sImg_sKzz",_=t.p+"assets/images/Kubernetes-89e2936f66a60ac69cafcd82c2fcdda1.png",C=()=>(0,l.jsx)("center",{className:N,children:(0,l.jsxs)("div",{className:k,children:[(0,l.jsx)("h1",{className:T,children:"Install into a Kubernetes cluster"}),(0,l.jsx)("img",{className:F,src:_})]})}),S="command_TkNO",I="commandDesc_AZVz";var D=t(46110);const R=()=>(0,l.jsxs)("center",{className:S,children:[(0,l.jsx)("h2",{className:I,children:"Install it with a single command"}),(0,l.jsx)(D.Z,{language:"sh",children:"kubectl apply -f https://raw.githubusercontent.com/cyclops-ui/cyclops/v0.6.2/install/cyclops-install.yaml && \nkubectl apply -f https://raw.githubusercontent.com/cyclops-ui/cyclops/v0.6.2/install/demo-templates.yaml"})]}),P="command_DW7U",z="commandDesc_DXdr",K=()=>(0,l.jsxs)("center",{className:P,children:[(0,l.jsxs)("h2",{className:z,children:["Port forward your ",(0,l.jsx)("span",{style:{color:"#fe8801"},children:"Cyclops"})," instance"]}),(0,l.jsx)(D.Z,{children:"kubectl port-forward svc/cyclops-ui 3000:3000 -n cyclops"})]}),V="command_g6HJ",B="commandDesc_JmGy";var L=t(17211),E=t(64593);const O=()=>(0,l.jsxs)("center",{className:V,children:[(0,l.jsx)(E.q,{children:(0,l.jsx)("script",{src:"https://assets.calendly.com/assets/external/widget.js",type:"text/javascript",async:!0})}),(0,l.jsxs)("h2",{className:B,children:["Or ",(0,l.jsx)(y.ZP,{theme:{token:{colorPrimary:"#fe8801"}},children:(0,l.jsx)(L.ZP,{onClick:()=>Calendly.initPopupWidget({url:"https://calendly.com/cyclops-ui/cyclops"}),type:"primary",shape:"round",size:"large",style:{textDecoration:"none",display:"inline-flex",alignItems:"center",marginLeft:"10px",marginRight:"5px"},children:(0,l.jsx)("h2",{style:{margin:0},children:"Schedule a demo"})})}),", we will gladly show you around"]}),(0,l.jsx)("link",{href:"https://assets.calendly.com/assets/external/widget.css",rel:"stylesheet"})]}),W=()=>(0,l.jsxs)("div",{className:Z,children:[(0,l.jsx)(C,{}),(0,l.jsx)(R,{}),(0,l.jsx)(K,{}),(0,l.jsx)(O,{})]}),H="featuresroot_aKCU",U="features_ez_S",Y="verticalline_SpFY",G="wrapper_KPph",J="installTitle_n9Df",M="titleText_eO0W";var A=t(71230);const X=()=>{const e=(0,n.useRef)(null),[s,t]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const s=()=>{if(e.current){const s=e.current.getBoundingClientRect().top,n=window.innerHeight;t(s<n)}};return s(),window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}}),[]),(0,l.jsx)("div",{ref:e,style:{opacity:"0"},className:s?G:"",children:(0,l.jsxs)("div",{className:J,children:[(0,l.jsx)(A.Z,{children:(0,l.jsx)("h1",{className:M,children:"Why"})}),(0,l.jsx)(A.Z,{children:(0,l.jsx)("img",{style:{height:"64px"},src:r})})]})})},$="wrapper__2Eo",q="changingReplicas_s5ra",Q="success_Lq6Z",ee="animationcard_djlk";var se=t(15746),te=t(20109);const ne=()=>{const e=(0,n.useRef)(null),[s,t]=(0,n.useState)(!1),[a,i]=(0,n.useState)(!1),[o,r]=(0,n.useState)(""),[c]=g.Z.useForm();return(0,n.useEffect)((()=>{const s=()=>{if(e.current){const s=e.current.getBoundingClientRect().top,n=window.innerHeight;t(s<n)}};return s(),window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}}),[]),(0,n.useEffect)((()=>{s&&!a&&(i(!0),setTimeout((()=>r(q)),2900),setTimeout((()=>c.setFieldValue("Replicas",2)),3e3),setTimeout((()=>c.setFieldValue("Replicas",1)),3300),setTimeout((()=>c.setFieldValue("Replicas",0)),3600),setTimeout((()=>r("")),3700),setTimeout((()=>c.validateFields(["Replicas"])),3700),setTimeout((()=>r(q)),4700),setTimeout((()=>c.setFieldValue("Replicas",1)),4800),setTimeout((()=>c.setFieldValue("Replicas",2)),5100),setTimeout((()=>c.setFieldValue("Replicas",3)),5400),setTimeout((()=>r("")),5500),setTimeout((()=>c.validateFields(["Replicas"])),5500),setTimeout((()=>r(Q)),6e3))}),[s]),(0,l.jsxs)(A.Z,{style:{paddingTop:"50px",opacity:"0"},ref:e,className:s?$:"",children:[(0,l.jsx)(se.Z,{xs:{span:24,order:2},lg:{span:11,offset:2},children:(0,l.jsx)(te.default,{className:ee,children:(0,l.jsx)(y.ZP,{theme:{token:{colorPrimary:"#fe8801"}},children:(0,l.jsxs)(g.Z,{labelCol:{span:"4"},form:c,children:[(0,l.jsx)(A.Z,{children:(0,l.jsx)(se.Z,{span:20,offset:2,children:(0,l.jsx)(g.Z.Item,{label:"Image",style:{display:"block",opacity:"0.5",marginTop:"10px"},name:"Image",children:(0,l.jsx)(j.Z,{readOnly:!0,style:{width:"100%"},defaultValue:"nginx",controls:!1})})})}),(0,l.jsx)(g.Z.Item,{label:(0,l.jsx)("span",{style:{fontSize:"16px"},children:"Replicas"}),style:{display:"block"},name:"Replicas",hasFeedback:!0,rules:[{type:"number",min:1,message:"Number of replicas must be greater than 0"}],children:(0,l.jsx)(b.Z,{readOnly:!0,className:o,style:{width:"100%"},defaultValue:3,controls:!1})}),(0,l.jsx)(A.Z,{children:(0,l.jsx)(se.Z,{span:20,offset:2,children:(0,l.jsx)(g.Z.Item,{label:"Port",style:{display:"block",opacity:"0.5",marginBottom:"10px"},name:"Port",children:(0,l.jsx)(b.Z,{readOnly:!0,style:{width:"100%"},defaultValue:80,controls:!1})})})})]})})})}),(0,l.jsxs)(se.Z,{xs:{span:15,offset:6},lg:{span:8,offset:0,order:2},style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,l.jsx)("h2",{style:{color:"#FFF",marginBottom:"10px"},children:(0,l.jsx)("span",{style:{color:"#fe8801"},children:"Validate your configuration"})}),(0,l.jsx)("ul",{style:{color:"#FFF"},children:(0,l.jsxs)("h3",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{style:{color:"#fe8801"},children:"catch misconfiguration"})," before it hits production"]}),(0,l.jsxs)("li",{children:["move faster and be more ",(0,l.jsx)("span",{style:{color:"#fe8801"},children:"confident"})," in your changes"]})]})})]})]})},ae="wrapper_aD2H",le="noneprodgif_cNh9",ie="animationcard_Bb6B",oe=t.p+"assets/images/productivity-graph-bd4fa726f689f5b9ea417a1c5c794022.gif",re=()=>{const e=(0,n.useRef)(null),[s,t]=(0,n.useState)(!1),[a,i]=(0,n.useState)(!1),[o,r]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const s=()=>{if(e.current){const s=e.current.getBoundingClientRect().top,n=window.innerHeight;t(s<n)}};return s(),window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}}),[]),(0,n.useEffect)((()=>{s&&!a&&(i(!0),setTimeout((()=>r(!0)),5e3))}),[s]),(0,l.jsxs)(A.Z,{style:{paddingTop:"50px",opacity:"0"},ref:e,className:s?ae:"",children:[(0,l.jsx)(se.Z,{xs:{span:24,order:2},lg:{span:11,offset:2},children:(0,l.jsx)(te.default,{className:ie,children:(0,l.jsx)("img",{className:o?le:"",src:oe})})}),(0,l.jsxs)(se.Z,{xs:{span:15,offset:6},lg:{span:8,offset:0,order:2},style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,l.jsx)("h2",{style:{color:"#FFF",marginBottom:"10px"},children:(0,l.jsx)("span",{style:{color:"#fe8801"},children:"Move faster and break fewer things"})}),(0,l.jsx)("ul",{style:{color:"#FFF"},children:(0,l.jsxs)("h3",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{style:{color:"#FF8803"},children:"Reduce"})," developer onboarding ",(0,l.jsx)("span",{style:{color:"#FF8803"},children:"time"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{style:{color:"#FF8803"},children:"Supercharge"})," developer"," ",(0,l.jsx)("span",{style:{color:"#FF8803"},children:"productivity"})," and iterate faster"]})]})})]})]})},ce="wrapper_cnXG",de="inLeft_XXWw",pe="inRight_e4md",me="animationcard_s7v0",ue=()=>{const e=(0,n.useRef)(null),[s,t]=(0,n.useState)(!1),[a,i]=(0,n.useState)(!1),[o,r]=(0,n.useState)(!1),[c,d]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const s=()=>{if(e.current){const s=e.current.getBoundingClientRect().top,n=window.innerHeight;t(s<n)}};return s(),window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}}),[]),(0,n.useEffect)((()=>{!s||c||o||(setTimeout((()=>i(!0)),0),setTimeout((()=>r(!0)),1500),setTimeout((()=>d(!0)),2e3))}),[s]),(0,l.jsxs)(A.Z,{style:{paddingTop:"50px",opacity:"0"},ref:e,className:s?ce:"",children:[(0,l.jsx)(se.Z,{xs:{span:24,order:2},lg:{span:11,offset:2},children:(0,l.jsx)(te.default,{className:me,children:(0,l.jsx)(y.ZP,{theme:{token:{colorPrimary:"#fe8801"}},children:(0,l.jsxs)(g.Z,{labelCol:{span:"4"},children:[(0,l.jsx)(g.Z.Item,{label:"Image",style:{display:"block",opacity:"0",marginTop:"10px"},name:"Image",className:a?de:"",children:(0,l.jsx)(j.Z,{readOnly:!0,style:{width:"100%"},defaultValue:"nginx",controls:!1})}),(0,l.jsx)(g.Z.Item,{label:"Replicas",style:{display:"block",opacity:"0"},name:"Replicas",className:o?pe:"",children:(0,l.jsx)(b.Z,{readOnly:!0,style:{width:"100%"},defaultValue:3,controls:!1})}),(0,l.jsx)(g.Z.Item,{label:"Port",style:{display:"block",marginBottom:"10px",opacity:"0"},name:"Port",className:c?de:"",children:(0,l.jsx)(b.Z,{readOnly:!0,style:{width:"100%"},defaultValue:80,controls:!1})})]})})})}),(0,l.jsxs)(se.Z,{xs:{span:15,offset:6},lg:{span:8,offset:0,order:2},style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,l.jsx)("h2",{style:{color:"#FFF",marginBottom:"10px"},children:(0,l.jsx)("span",{style:{color:"#fe8801"},children:"Customizable UI"})}),(0,l.jsx)("ul",{style:{color:"#FFF"},children:(0,l.jsxs)("h3",{children:[(0,l.jsxs)("li",{children:["Build a ",(0,l.jsx)("span",{style:{color:"#fe8801"},children:"UI tailored to your needs"})," in minutes"]}),(0,l.jsxs)("li",{children:["Give developers the ",(0,l.jsx)("span",{style:{color:"#fe8801"},children:"right abstraction"})," of your infrastructure"]})]})})]})]})},xe=()=>{const e=(0,n.useRef)(null),s=(0,n.useRef)(null);return(0,n.useEffect)((()=>{s.current.style.height=e.current.offsetHeight+"px"}),[]),(0,l.jsxs)("div",{className:H,ref:e,style:{overflow:"hidden"},children:[(0,l.jsx)("div",{className:Y,ref:s}),(0,l.jsxs)("div",{className:U,children:[(0,l.jsx)(A.Z,{style:{paddingBottom:"32px"},children:(0,l.jsx)(se.Z,{xs:{span:24,offset:6},lg:{span:10,offset:6},children:(0,l.jsx)(X,{})})}),(0,l.jsx)(ue,{}),(0,l.jsx)(ne,{}),(0,l.jsx)(re,{})]})]})},he="featuresroot_licv",fe="features_CHPn",ge="blogcard_kFiK";var ye=t(72413),je=t(44996);const{Meta:be}=te.default,ve=e=>(0,l.jsx)("div",{children:(0,l.jsx)("a",{href:e.blogLink,children:(0,l.jsx)(te.default,{className:ge,cover:(0,l.jsx)("img",{style:{height:200,objectFit:"cover"},src:(0,je.Z)(e.banner)}),children:(0,l.jsx)(be,{avatar:(0,l.jsx)(ye.C,{src:e.avatar}),title:e.title,description:(0,l.jsx)("div",{style:{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden","-webkit-line-clamp":3,"-webkit-box-orient":"vertical"},children:e.description})})})})}),we="wrapper_soSb",Ze="installTitle_aH66",Ne="titleText__aHC",ke=()=>(0,l.jsx)("div",{className:we,children:(0,l.jsx)("div",{className:Ze,children:(0,l.jsx)("h1",{className:Ne,children:"Check our blog"})})}),Te="wrapper__cMn",Fe="installTitle_flm6",_e="descText_FVJK",Ce=()=>(0,l.jsx)("div",{style:{paddingTop:0},className:Te,children:(0,l.jsx)("div",{className:Fe,children:(0,l.jsxs)("h3",{className:_e,children:["We are working on a blog post series covering topics from general open source challenges to specific Kubernetes related topics. ",(0,l.jsx)("span",{style:{color:"#fe8803"},children:"Check it out!"})]})})}),Se="command_JNOm",Ie=()=>(0,l.jsx)("center",{className:Se,children:(0,l.jsx)(y.ZP,{theme:{token:{colorPrimary:"#fe8801"}},children:(0,l.jsx)(L.ZP,{href:"/blog",type:"primary",shape:"round",size:"large",style:{textDecoration:"none",display:"inline-flex",alignItems:"center",marginLeft:"10px",marginRight:"5px"},children:(0,l.jsx)("h2",{style:{margin:0},children:"More blogs"})})})}),De=()=>(0,l.jsx)("div",{className:he,style:{overflow:"hidden"},children:(0,l.jsxs)("div",{className:fe,children:[(0,l.jsx)(A.Z,{align:"middle",children:(0,l.jsx)(ke,{})}),(0,l.jsx)(A.Z,{children:(0,l.jsx)(se.Z,{span:18,offset:3,children:(0,l.jsx)(Ce,{})})}),(0,l.jsxs)(A.Z,{gutter:[16,16],children:[(0,l.jsx)(se.Z,{xs:{span:20,offset:2},md:{span:6,offset:3},children:(0,l.jsx)(ve,{title:"Is Kubernetes a database? CRDs explained in 5 minutes",description:"When you touch on containerized apps today, Kubernetes usually comes up as their orchestrator",blogLink:"https://cyclops-ui.com/blog/2024/05/24/is-k8s-database",avatar:"https://github.com/KaradzaJuraj.png",banner:"/img/2024-05-24-is-k8s-database/k8s-database-cover.png"})}),(0,l.jsx)(se.Z,{xs:{span:20,offset:2},md:{span:6,offset:0},children:(0,l.jsx)(ve,{title:"How Telemetry Saved my Open-Source Platform",description:"What started as a frustration with not being able to get in touch with our users, quickly developed into a redesign of the flow of our platform",blogLink:"https://cyclops-ui.com/blog/2024/04/12/telemetry",avatar:"https://github.com/KaradzaJuraj.png",banner:"/img/2024-04-12-telemetry/telemetry-cover-preview.png"})}),(0,l.jsx)(se.Z,{xs:{span:20,offset:2},md:{span:6,offset:0},children:(0,l.jsx)(ve,{title:"Kubernetes Through the Developer's Perspective",description:"We perceive things by the way we interact with and understand them",blogLink:"https://cyclops-ui.com/blog/2024/03/26/devs-perspective",avatar:"https://github.com/KaradzaJuraj.png",banner:"/img/2024-03-26-devs-perspective/devs-perspective-preview.png"})})]}),(0,l.jsx)(Ie,{})]})}),Re="featuresroot_DnPo",Pe="features_pTnj",ze="cardtestimonialwrapper_Qjwp",{Meta:Ke}=te.default,Ve=e=>(0,l.jsx)("div",{style:{height:"100%"},children:(0,l.jsxs)(te.default,{className:ze,children:[(0,l.jsx)(Ke,{avatar:(0,l.jsx)(ye.C,{style:{width:"100px",height:"auto"},src:e.avatar}),title:(0,l.jsx)("h3",{style:{marginBottom:0},children:e.name}),description:(0,l.jsx)("div",{style:{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden","-webkit-line-clamp":3,"-webkit-box-orient":"vertical"},children:e.position})}),(0,l.jsx)("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",paddingTop:"24px",fontSize:"16px"},children:e.testimonial})]})}),Be="wrapper_ajxM",Le="installTitle_e3GY",Ee="titleText_jj_a",Oe=()=>(0,l.jsx)("div",{className:Be,children:(0,l.jsx)("div",{className:Le,children:(0,l.jsx)("h1",{className:Ee,children:"Their words, not ours"})})}),We=()=>(0,l.jsx)("div",{className:Re,style:{overflow:"hidden"},children:(0,l.jsxs)("div",{className:Pe,children:[(0,l.jsx)(A.Z,{align:"middle",children:(0,l.jsx)(Oe,{})}),(0,l.jsxs)(A.Z,{gutter:[16,16],children:[(0,l.jsx)(se.Z,{xs:{span:20,offset:2},md:{span:6,offset:3},children:(0,l.jsx)(Ve,{name:"Rossana Suarez",position:"AWS Container Hero",avatar:"/img/rossana_suarez.jpeg",testimonial:(0,l.jsxs)("p",{children:["Deploying has never been easier: A single interface to manage your workloads on Kubernetes. \ud83d\udd25 ",(0,l.jsx)("br",{})," An easy way to get started on ",(0,l.jsx)("br",{})," Kubernetes\ud83d\udc4c"]})})}),(0,l.jsx)(se.Z,{xs:{span:20,offset:2},md:{span:6,offset:0},children:(0,l.jsx)(Ve,{name:"Kunal Kushwaha",position:"DevRel manager at Civo",avatar:"/img/kunal_kushwaha.jpeg",testimonial:"Cyclops has transformed my Kubernetes management experience. Its intuitive form-based UI and Helm integration make deploying and monitoring applications straightforward and error-free. A must-try tool for anyone looking to simplify their Kubernetes operations!"})}),(0,l.jsx)(se.Z,{xs:{span:20,offset:2},md:{span:6,offset:0},children:(0,l.jsx)(Ve,{name:"Ken Godoy",position:"VP, DevOps",avatar:"/img/ken_godoy.jpeg",testimonial:"Cyclops utilizes Helm charts for application deployment, making Kubernetes more accessible to users with different levels of expertise."})})]})]})}),He="INIT",Ue="SUBMITTING",Ye="ERROR",Ge="SUCCESS",Je={id:"clxnbxyqc0003ixgw637o04xb",name:"Default",formStyle:"inline",placeholderText:"you@rock.dev",formFont:"Roboto",formFontColor:"#000000",formFontSizePx:20,buttonText:"Join Newsletter",buttonFont:"Roboto",buttonFontColor:"#ffffff",buttonColor:"#fe8801",buttonFontSizePx:20,successMessage:"You rock! \ud83d\ude4c",successFont:"Roboto",successFontColor:"#ffffff",successFontSizePx:20,userGroup:""},Me="app.loops.so";function Ae(){const[e,s]=(0,n.useState)(""),[t,a]=(0,n.useState)(He),[i,o]=(0,n.useState)(""),r=()=>{s(""),a(He),o("")},c=s=>{if(s.preventDefault(),t!==He)return;if(!function(e){return/.+@.+/.test(e)}(e))return a(Ye),void o("Please enter a valid email");if((()=>{const e=(new Date).valueOf(),s=localStorage.getItem("loops-form-timestamp");return s&&Number(s)+6e4>e?(a(Ye),o("Too many signups, please try again in a little while"),!0):(localStorage.setItem("loops-form-timestamp",e.toString()),!1)})())return;a(Ge);const n=`userGroup=${encodeURIComponent(Je.userGroup)}&email=${encodeURIComponent(e)}&mailingLists=`;fetch(`https://${Me}/api/newsletter-form/${Je.id}`,{method:"POST",body:n,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((e=>[e.ok,e.json(),e])).then((e=>{let[s,t,n]=e;s?(r(),a(Ge)):t.then((e=>{a(Ye),o(e.message||n.statusText),localStorage.setItem("loops-form-timestamp","")}))})).catch((e=>{a(Ye),"Failed to fetch"===e.message?o("Too many signups, please try again in a little while"):e.message&&o(e.message),localStorage.setItem("loops-form-timestamp","")}))},d="inline"===Je.formStyle;switch(t){case Ge:return(0,l.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},children:(0,l.jsx)("p",{style:{color:Je.successFontColor,fontSize:`${Je.successFontSizePx}px`,fontWeight:"600"},children:Je.successMessage})});case Ye:return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{}),(0,l.jsx)(m,{})]});default:return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{onSubmit:c,style:{display:"flex",flexDirection:d?"row":"column",alignItems:"center",justifyContent:"center",width:"100%"},children:[(0,l.jsx)("input",{type:"email",name:"email",placeholder:Je.placeholderText,value:e,onChange:e=>s(e.target.value),required:!0,style:{color:Je.formFontColor,fontSize:`${Je.formFontSizePx}px`,margin:d?"0px 10px 0px 0px":"0px 0px 10px",width:"100%",maxWidth:"300px",minWidth:"100px",background:"#FFFFFF",border:"1px solid #D1D5DB",boxSizing:"border-box",boxShadow:"rgba(0, 0, 0, 0.05) 0px 1px 2px",borderRadius:"6px",padding:"8px 12px"}}),(0,l.jsx)(u,{})]})})}function p(){return(0,l.jsx)("div",{style:{alignItems:"center",justifyContent:"center",width:"100%"},children:(0,l.jsx)("p",{style:{color:"rgb(185, 28, 28)",fontSize:"14px"},children:i||"Oops! Something went wrong, please try again"})})}function m(){const[e,s]=(0,n.useState)(!1);return(0,l.jsx)("button",{style:{color:"#6b7280",font:"14px",margin:"10px auto",textAlign:"center",background:"transparent",border:"none",cursor:"pointer",textDecoration:e?"underline":"none"},onMouseOut:()=>s(!1),onMouseOver:()=>s(!0),onClick:r,children:"\u2190 Back"})}function u(){return(0,l.jsx)("button",{type:"submit",style:{background:Je.buttonColor,fontSize:`${Je.buttonFontSizePx}px`,color:Je.buttonFontColor,width:d?"min-content":"100%",maxWidth:"300px",whiteSpace:d?"nowrap":"normal",height:"38px",alignItems:"center",justifyContent:"center",flexDirection:"row",padding:"9px 17px",boxShadow:"0px 1px 2px rgba(0, 0, 0, 0.05)",borderRadius:"6px",textAlign:"center",fontStyle:"normal",fontWeight:800,lineHeight:"20px",border:"none",cursor:"pointer"},children:t===Ue?"Please wait...":Je.buttonText})}}function Xe(){return(0,l.jsxs)("center",{style:{width:"80%",paddingTop:"10px",paddingBottom:"100px",margin:"0 auto",color:"#FFF"},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Cyclops Newsletter"}),(0,l.jsx)("p",{style:{fontWeight:"600"},children:"Join our mailing list and stay up-to-date with the latest product updates and release notes!"})]}),(0,l.jsx)(Ae,{})]})}function $e(){return(0,l.jsx)(a.Z,{title:"Developer friendly Kubernetes",description:"Deploy your K8s workloads through a UI",children:(0,l.jsxs)("main",{children:[(0,l.jsxs)("div",{className:i.Z.landing,children:[(0,l.jsx)("img",{style:{left:"10%",animationIterationCount:"1",animationDelay:"-16s",opacity:0},className:i.Z.backgroundYaml,src:c.Z}),(0,l.jsx)("img",{style:{animationIterationCount:"1",animationDelay:"-12s",opacity:0},className:i.Z.backgroundYaml,src:c.Z}),(0,l.jsx)("img",{style:{left:"-10%",animationIterationCount:"1",animationDelay:"-8s",opacity:0},className:i.Z.backgroundYaml,src:c.Z}),(0,l.jsx)("img",{style:{left:"10%",animationIterationCount:"1",animationDelay:"-4s",opacity:0},className:i.Z.backgroundYaml,src:c.Z}),(0,l.jsx)("img",{className:i.Z.backgroundYaml,src:c.Z,style:{opacity:0}}),(0,l.jsx)("img",{style:{left:"10%",animationDelay:"4s",opacity:0},className:i.Z.backgroundYaml,src:c.Z}),(0,l.jsx)("img",{style:{animationDelay:"8s",opacity:0},className:i.Z.backgroundYaml,src:c.Z}),(0,l.jsx)("img",{style:{left:"-10%",animationDelay:"12s",opacity:0},className:i.Z.backgroundYaml,src:c.Z}),(0,l.jsx)("img",{className:i.Z.cyclopsTitle,src:r}),(0,l.jsx)("h2",{className:i.Z.cyclopsDesc,children:"Developer friendly Kubernetes"}),(0,l.jsx)("img",{className:i.Z.landingCyclops,src:o}),(0,l.jsx)(A.Z,{children:(0,l.jsx)(y.ZP,{theme:{token:{colorPrimary:"#fe8801"}},children:(0,l.jsx)(L.ZP,{href:"/docs/installation/install/manifest",shape:"round",size:"large",className:i.Z.readTheDocs,style:{textDecoration:"none",display:"inline-flex",alignItems:"center",color:"white"},children:(0,l.jsx)("h3",{style:{margin:0},children:"Get started"})})})})]}),(0,l.jsx)(w,{}),(0,l.jsxs)("div",{className:i.Z.backgroundcolor,children:[(0,l.jsx)(xe,{}),(0,l.jsx)(We,{}),(0,l.jsx)(W,{}),(0,l.jsx)(De,{}),(0,l.jsx)(Xe,{})]})]})})}},11207:(e,s,t)=>{t.d(s,{Z:()=>n});const n={landing:"landing_V_Km",landingCyclops:"landingCyclops_hJZw",cyclopsTitle:"cyclopsTitle_rNuu",cyclopsDesc:"cyclopsDesc_Qtm8",readTheDocs:"readTheDocs_aRzM",backgroundYaml:"backgroundYaml_QZXQ",fallAndFade:"fallAndFade_Tm_A",backgroundcolor:"backgroundcolor_yKgv",pricingCard:"pricingCard_iNnE",pricingButton:"pricingButton_roLG",paragraphlist:"paragraphlist_8UUx"}},39882:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/yaml_background-cc1699351922ead2cae5da1dbb75cbd8.png"}}]);