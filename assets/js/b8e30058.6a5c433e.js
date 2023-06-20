"use strict";(self.webpackChunkcyclops_ui_docs=self.webpackChunkcyclops_ui_docs||[]).push([[9836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||c;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var i=2;i<c;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const c={},a="Core concepts",l={unversionedId:"concepts/concepts",id:"concepts/concepts",title:"Core concepts",description:"For the sake of the rest of the docs to be more clear, here are some Cyclops-specific terms that will be used:",source:"@site/docs/concepts/concepts.md",sourceDirName:"concepts",slug:"/concepts/",permalink:"/docs/concepts/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"About Cyclops",permalink:"/docs/about/"},next:{title:"Prerequisites",permalink:"/docs/installation/prerequisites"}},s={},i=[],p={toc:i},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"core-concepts"},"Core concepts"),(0,o.kt)("p",null,"For the sake of the rest of the docs to be more clear, here are some Cyclops-specific terms that will be used:"),(0,o.kt)("strong",null,"Module")," - an umbrella for all the Kubernetes resources your application needs to work as expected. For example, your application might require a deployment, a service, and an ingress to do its job. All of those are abstracted under a Cyclops Module. ",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",null,"Template")," - each Module references a Template that maps values from the Module into a valid Kubernetes manifest. ",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",null,"Template origin")," - templates can live on different places. You can store your templates as Helm charts, on git, or even inside Cyclops. ",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",null,"Template version")," - a part of the template reference in each Module is the version of the template. Templates can evolve and change over time, and in order to maintain changes in your system, you can reference different template versions in different Modules. ",(0,o.kt)("br",null),(0,o.kt)("br",null))}f.isMDXComponent=!0}}]);