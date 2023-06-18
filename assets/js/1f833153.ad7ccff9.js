"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[5591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,y=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},a="Prerequisites",s={unversionedId:"installation/prerequisites",id:"installation/prerequisites",title:"Prerequisites",description:"In order to test out Cyclops you are going to need some things. First thing you are going to need is a Kubernetes",source:"@site/docs/installation/prerequisites.md",sourceDirName:"installation",slug:"/installation/prerequisites",permalink:"/docs/installation/prerequisites",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Core concepts",permalink:"/docs/concepts/"},next:{title:"Install",permalink:"/docs/installation/install"}},l={},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"In order to test out Cyclops you are going to need some things. First thing you are going to need is a Kubernetes\ncluster. If you have one that you can use to play with, great, if not you can try installing\n",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/"},"minikube"),". Minikube sets up a local Kubernetes cluster that you can use to test stuff\nout. Check the ",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"docs")," on how to install it."),(0,o.kt)("p",null,"Another thing you will need is ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl"),". It is a command line interface for\nrunning commands against your cluster."),(0,o.kt)("p",null,"Once you have installed minikube and kubectl, run your local cluster with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start\n")),(0,o.kt)("p",null,"After some time you will have a running cluster that you can use for testing. To verify everything is in order, you can\ntry fetching all namespaces from the cluster with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get namespaces\n")),(0,o.kt)("p",null,"Output should be something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME              STATUS   AGE\ndefault           Active   10m\nkube-node-lease   Active   10m\nkube-public       Active   10m\nkube-system       Active   10m\n...\n")))}m.isMDXComponent=!0}}]);