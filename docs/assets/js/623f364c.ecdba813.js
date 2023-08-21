"use strict";(self.webpackChunkvc_notes=self.webpackChunkvc_notes||[]).push([[8233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},l="Resources and other links",i={unversionedId:"ecosystem/resources",id:"ecosystem/resources",title:"Resources and other links",description:"Technologies and protocols",source:"@site/docs/ecosystem/resources.md",sourceDirName:"ecosystem",slug:"/ecosystem/resources",permalink:"/vc-notes/docs/ecosystem/resources",editUrl:"https://github.com/skounis/vc-notes/blob/main/notebook/docs/ecosystem/resources.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"EU Wallet",permalink:"/vc-notes/docs/ecosystem/eu-wallet"},next:{title:"Tutorial Intro",permalink:"/vc-notes/docs/intro"}},s={},c=[{value:"Technologies and protocols",id:"technologies-and-protocols",level:2},{value:"Examples",id:"examples",level:2},{value:"JWK",id:"jwk",level:3},{value:"Interexy",id:"interexy",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resources-and-other-links"},"Resources and other links"),(0,o.kt)("h2",{id:"technologies-and-protocols"},"Technologies and protocols"),(0,o.kt)("ol",{start:0},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7518"},"JSON Web Algorithms (JWA)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7515"},"JSON Web Signature (JWS)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7516"},"JSON Web Encryption (JWE)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7517"},"JSON Web Key (JWK)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/oauth-wg/oauth-selective-disclosure-jwt"},"SD-JWT: Selective Disclosure for JWTs"))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"jwk"},"JWK"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'     {"kty":"EC",\n      "crv":"P-256",\n      "x":"f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",\n      "y":"x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0",\n      "kid":"Public key used in JWS spec Appendix A.3 example"\n     }\n')),(0,o.kt)("p",null,"Additional example JWK values can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7517#appendix-A"},"Appendix A"),"."),(0,o.kt)("h2",{id:"interexy"},"Interexy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://interexy.com/an-in-depth-guide-on-how-to-create-an-e-wallet-app/"},"An In-Depth Guide On How To Create An E-Wallet App"))))}d.isMDXComponent=!0}}]);