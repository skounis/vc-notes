"use strict";(self.webpackChunkvc_notes=self.webpackChunkvc_notes||[]).push([[466],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>f});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(i),h=a,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||n;return i?r.createElement(f,s(s({ref:t},u),{},{components:i})):r.createElement(f,s({ref:t},u))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,s=new Array(n);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<n;l++)s[l]=i[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8928:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=i(7462),a=(i(7294),i(3905));const n={sidebar_position:1},s="Hardware Security Modules (HSMs)",o={unversionedId:"papers/hsm",id:"papers/hsm",title:"Hardware Security Modules (HSMs)",description:"How CC HSM Certificates Work",source:"@site/docs/papers/hsm.md",sourceDirName:"papers",slug:"/papers/hsm",permalink:"/vc-notes/docs/papers/hsm",editUrl:"https://github.com/skounis/vc-notes/blob/main/notebook/docs/papers/hsm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/vc-notes/docs/intro"},next:{title:"Standards-Based Digital Credentials",permalink:"/vc-notes/docs/papers/credential-flavors-iwb"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"How CC HSM Certificates are Issued",id:"how-cc-hsm-certificates-are-issued",level:2},{value:"Features of CC HSM Certificates",id:"features-of-cc-hsm-certificates",level:2},{value:"How CC HSM Certificates are Used",id:"how-cc-hsm-certificates-are-used",level:2},{value:"Benefits of Using CC HSM Certificates",id:"benefits-of-using-cc-hsm-certificates",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hardware-security-modules-hsms"},"Hardware Security Modules (HSMs)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"How CC HSM Certificates Work")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Hardware Security Modules (HSMs) are tamper-resistant devices that provide secure storage and protection for cryptographic keys, digital signatures, and other sensitive information. CC HSM certificates are digital credentials that verify the identity and capabilities of an HSM. These certificates are issued by Certificate Authorities (CAs) that have been accredited by the Common Criteria (CC) program. CC HSM certificates play a critical role in enabling secure communication and authentication between applications and HSMs."),(0,a.kt)("h2",{id:"how-cc-hsm-certificates-are-issued"},"How CC HSM Certificates are Issued"),(0,a.kt)("p",null,"CC HSM certificates are issued through a rigorous certification process that evaluates the security capabilities of an HSM. This process includes testing the HSM's resistance to tampering, its ability to generate and manage cryptographic keys, and its compliance with industry standards. Once an HSM has been successfully certified, a CA issues a CC HSM certificate to the HSM vendor."),(0,a.kt)("h2",{id:"features-of-cc-hsm-certificates"},"Features of CC HSM Certificates"),(0,a.kt)("p",null,"CC HSM certificates include a number of features that make them unique and secure. These features include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Digital signature:")," The certificate is digitally signed by the CA, which ensures its authenticity and integrity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Subject DN:")," The certificate's subject DN (distinguished name) identifies the HSM to which the certificate belongs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Issuer DN:")," The certificate's issuer DN identifies the CA that issued the certificate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Key usage:")," The certificate specifies the cryptographic operations that the HSM is authorized to perform."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Extended key usage:")," The certificate may also include extended key usage, which specifies additional cryptographic operations that the HSM is authorized to perform.")),(0,a.kt)("h2",{id:"how-cc-hsm-certificates-are-used"},"How CC HSM Certificates are Used"),(0,a.kt)("p",null,"CC HSM certificates are used in a variety of applications, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Secure communication:")," CC HSM certificates can be used to establish secure communication channels between applications and HSMs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Digital signatures:")," CC HSM certificates can be used to generate and verify digital signatures, which are used to ensure the authenticity and integrity of data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Key management:")," CC HSM certificates can be used to manage cryptographic keys, which are used to encrypt and decrypt data.")),(0,a.kt)("h2",{id:"benefits-of-using-cc-hsm-certificates"},"Benefits of Using CC HSM Certificates"),(0,a.kt)("p",null,"Using CC HSM certificates offers a number of benefits, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enhanced security:")," CC HSM certificates provide a high level of assurance that the HSM is genuine and capable of performing the required cryptographic operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reduced risk of fraud:")," CC HSM certificates help to protect against fraud by ensuring that only authorized applications can communicate with the HSM."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Compliance with standards:")," CC HSM certificates are compliant with industry standards, which helps to ensure that the HSM is interoperable with other systems.")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"CC HSM certificates are essential for ensuring the security and integrity of HSMs. By using CC HSM certificates, organizations can protect their sensitive data and prevent unauthorized access."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,"Sure, here are some links with information about CC HSM certificates and the technologies mentioned in the overview:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Common Criteria (CC) for Information Technology Security Evaluation")," - ",(0,a.kt)("a",{parentName:"li",href:"https://www.commoncriteriaportal.org/files/ccfiles/CC2022PART1R1.pdf"},"https://www.commoncriteriaportal.org/files/ccfiles/CC2022PART1R1.pdf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CC HSM Certification")," - ",(0,a.kt)("a",{parentName:"li",href:"https://cpl.thalesgroup.com/encryption/hardware-security-modules"},"https://cpl.thalesgroup.com/encryption/hardware-security-modules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"How Common Criteria Helps Organizations Choose the Right HSM")," - ",(0,a.kt)("a",{parentName:"li",href:"https://www.cryptomathic.com/news-events/blog/common-criteria-helping-to-choose-the-right-hsm"},"https://www.cryptomathic.com/news-events/blog/common-criteria-helping-to-choose-the-right-hsm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SAML, SSL and QWAC")," - ",(0,a.kt)("a",{parentName:"li",href:"https://help.cybrary.it/hc/en-us/articles/16549030269587-Self-Service-Guide-to-SAML-2-0-SSO-Configuration-for-Okta-OneLogin-and-Azure"},"https://help.cybrary.it/hc/en-us/articles/16549030269587-Self-Service-Guide-to-SAML-2-0-SSO-Configuration-for-Okta-OneLogin-and-Azure"))))}d.isMDXComponent=!0}}]);