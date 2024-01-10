"use strict";(self.webpackChunkvc_notes=self.webpackChunkvc_notes||[]).push([[8970],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?i.createElement(f,o(o({ref:t},p),{},{components:a})):i.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(7462),n=(a(7294),a(3905));const r={sidebar_position:2},o="Standards-Based Digital Credentials",l={unversionedId:"papers/credential-flavors-iwb",id:"papers/credential-flavors-iwb",title:"Standards-Based Digital Credentials",description:"Decoding the Spectrum: Unveiling the World of Standards-Based Digital Credentials",source:"@site/docs/papers/credential-flavors-iwb.md",sourceDirName:"papers",slug:"/papers/credential-flavors-iwb",permalink:"/vc-notes/docs/papers/credential-flavors-iwb",editUrl:"https://github.com/skounis/vc-notes/blob/main/notebook/docs/papers/credential-flavors-iwb.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hardware Security Modules (HSMs)",permalink:"/vc-notes/docs/papers/hsm"},next:{title:"Create a Page",permalink:"/vc-notes/docs/tutorial-basics/create-a-page"}},s={},d=[{value:"Intoduction",id:"intoduction",level:2},{value:"Key takeaways",id:"key-takeaways",level:2},{value:"The 6 flavors of digital credentials:",id:"the-6-flavors-of-digital-credentials",level:2},{value:"ISO mDL/mDOC",id:"iso-mdlmdoc",level:3},{value:"SD-JWT",id:"sd-jwt",level:3},{value:"JSON-JWT",id:"json-jwt",level:2},{value:"JSON-LD-DI",id:"json-ld-di",level:2},{value:"Data Integrity BBS",id:"data-integrity-bbs",level:2},{value:"Anoncreds and DI BBS",id:"anoncreds-and-di-bbs",level:2},{value:"References",id:"references",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"standards-based-digital-credentials"},"Standards-Based Digital Credentials"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Decoding the Spectrum: Unveiling the World of Standards-Based Digital Credentials")),(0,n.kt)("h2",{id:"intoduction"},"Intoduction"),(0,n.kt)("p",null,"Explore the insights presented in the article ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/@identitywoman-in-business/new-paper-and-infographic-on-flavors-of-digital-credentials-released-b9b6ec5b95af"},'"Standards-Based Digital Credentials: Flavors Explained\u201d (Whitepaper)')," by ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/@identitywoman-in-business"},"Identity Woman in Business"),". The whitepaper delves into the intricacies of the digital credential landscape, providing a simplified yet technically-accurate overview of the key flavors shaping the standards. As businesses and decision-makers stand at the crossroads of credential implementation choices, understanding these flavors becomes paramount."),(0,n.kt)("h2",{id:"key-takeaways"},"Key takeaways"),(0,n.kt)("p",null,"Connecting the introductory exploration of the digital credential landscape, the following key takeaways shed light on the nuances of standards-based digital credentials:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Overview of the Digital Credentials Ecosystem:")," Provides an overview of the digital credentials ecosystem.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Standardized Data Formats for Credential:")," Lists three standardized data formats for credentials - JSON, JSON-LD, and CBOR - and provides details on their structure.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Introduction to Standardized Cryptographic Methods:")," Gives an introduction to standardized cryptographic methods for securing credentials, including public-private key cryptography.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Securing Data in Credentials:")," Explains how to secure data in credentials with examples for JWT and CWT.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Selective Disclosure in mDL/mDOC and SD-JWT:")," Describes how selective disclosure is achieved in mDL/mDOC and SD-JWT.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Holder Binding and Hardware Binding:")," Touches on the topics of holder binding and hardware binding.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Credential Lifecycle in 6 Scenes:")," Sets a credential's lifecycle for six scenes, exercising ISO mDL, SD-JWT, JSON-LD-DI, and JSON-JWT over them."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Scene 1 - Pre-Issuance (1): Data Field Definition by Issuer"),(0,n.kt)("li",{parentName:"ol"},"Scene 2 - Pre-Issuance (2): Public-Private Key Generation by Issuer"),(0,n.kt)("li",{parentName:"ol"},"Scene 3 - Pre-Issuance (3): Registry Enrollment by Issuer"),(0,n.kt)("li",{parentName:"ol"},"Scene 4 - Credential Issuance to Holder (1): Getting a Cryptographic Anchor for Credential"),(0,n.kt)("li",{parentName:"ol"},"Scene 5 - Credential Issuance to Holder (2): Credential Claims and Cryptographically Signing "),(0,n.kt)("li",{parentName:"ol"},"Scene 6 - Credential Issuance to Holder (3): Getting Signed Credential into Holder Wallet"),(0,n.kt)("li",{parentName:"ol"},"Scene 7 - Credential Receipt: Holder has Credential in Wallet  "),(0,n.kt)("li",{parentName:"ol"},"Scene 8 - Credential Verification by Verifier (1): Verifier Requests for Credential from Holder"),(0,n.kt)("li",{parentName:"ol"},"Scene 9 - Credential Vefification by Verifier (2): Wallet Packages up Proof of Credential"),(0,n.kt)("li",{parentName:"ol"},"Scene 10 - Credential Verification by Verifier (3): Proof of Credential is Sent to Verifier"),(0,n.kt)("li",{parentName:"ol"},"Scene 11 - Credential Verification by Verifier (4): Verifier Analyzes Proof and Makes Decision"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Overview of Anaoncreds and DI BBS:")," Gives a short overview of Anaoncreds (formerly JSON-ZKP-CL) and DI BBS (formerly JSON-LD ZKP with BBS+).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Authentic Chained Data Containers (ACDC) and Gordian Envelopes:")," Touches upon the Authentic Chained Data Containers (ACDC) and Gordian Envelopes.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Zero-Knowledge Proofs and Pseudo ZKP Technologies:")," Introduces Zero-Knowledge Proofs and Pseudo ZKP technologies and discusses their limitations.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Conclusion:")," Concludes insights on the correlation, profiling, and limitations of emerging flavors."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"All the four flavors covered don't prevent correlation. They all have something that works as a unique identifier."),(0,n.kt)("li",{parentName:"ol"},"Verifiers will likely be able to profile credential holders through their repeated use of a single credential."),(0,n.kt)("li",{parentName:"ol"},"Emerging flavors can do ZKP but fall short of preventing cloning of credentials and impersonation.")))),(0,n.kt)("p",null,"Finaly the authors have prepared an infographic for explainign and comparing the major flavors: ISO mDL/mDOC, SD-JWT, JSON-JWT, JSON-LD-DI, Data Integrity BBS, AnonCreds"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1mZVcGlcxAqQaOr-pBUt6-Amh2NocuaNp/view"},"https://drive.google.com/file/d/1mZVcGlcxAqQaOr-pBUt6-Amh2NocuaNp/view"))),(0,n.kt)("h2",{id:"the-6-flavors-of-digital-credentials"},"The 6 flavors of digital credentials:"),(0,n.kt)("p",null,"Based on the whitepaper, here is an in-depth description of the 6 key flavors of digital credentials:"),(0,n.kt)("h3",{id:"iso-mdlmdoc"},"ISO mDL/mDOC"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Structured representation:")," ISO mDL and mDOC are based on JSON-LD, which provides a structured way to define credential templates, issuers, and holders. This makes it easier to understand and interpret credentials, and it also makes it possible to automated processes that involve credentials."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Support for selective disclosure:")," ISO mDL and mDOC support selective disclosure, which means that only certain parts of a credential can be revealed to a verifier. This can be useful for protecting sensitive information, such as personal data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Widely used:")," ISO mDL and mDOC are widely used in a variety of applications, including education, healthcare, and financial services.")),(0,n.kt)("h3",{id:"sd-jwt"},"SD-JWT"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Specifically designed for credentials:")," SD-JWT is a specialized type of JSON Web Token (JWT) that is specifically designed for representing credentials. This makes it more secure and reliable than using JSON-JWT for credentials."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Support for additional claims:")," SD-JWT includes additional claims that are not typically found in JSON-JWTs, such as claims for specifying credential issuance context and revocation information. This makes it more versatile than JSON-JWT for representing credentials."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Growing popularity:")," SD-JWT is growing in popularity as more and more organizations are adopting digital credentials.")),(0,n.kt)("h2",{id:"json-jwt"},"JSON-JWT"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Widely used format:")," JSON-JWT is a widely used format for encoding claims in a compact and URL-safe format. This makes it easy to transport and store credentials."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flexible format:")," JSON-JWT is a flexible format that can be used to represent a variety of data, including credentials."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Suitable for basic use:")," JSON-JWT is suitable for basic use cases, such as representing simple credentials. However, it is not as secure or reliable as ISO mDL or SD-JWT for representing credentials.")),(0,n.kt)("h2",{id:"json-ld-di"},"JSON-LD-DI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Support for data identifiers:")," JSON-LD-DI is an extension of JSON-LD that adds support for defining and referencing data identifiers. This makes it a suitable format for representing credentials that contain confidential or sensitive data, as it allows for the data to be encrypted or access-controlled."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Privacy-preserving:")," JSON-LD-DI is a privacy-preserving format that can be used to represent credentials without revealing the underlying data. This can be useful for protecting sensitive information."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Emerging technology:")," JSON-LD-DI is an emerging technology that is still under development. However, it has the potential to become a widely used format for representing credentials.")),(0,n.kt)("h2",{id:"data-integrity-bbs"},"Data Integrity BBS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Verifiable data containers:")," Data Integrity BBS is a technique for creating verifiable and tamper-proof data containers. This makes it possible to ensure that data has not been tampered with since it was created."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tamper-proof:")," Data Integrity BBS is tamper-proof, which means that it is not possible to modify the data without invalidating the verification."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Suitable for sensitive data:")," Data Integrity BBS is suitable for sensitive data, such as credentials.")),(0,n.kt)("h2",{id:"anoncreds-and-di-bbs"},"Anoncreds and DI BBS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Privacy-enhancing:")," Anoncreds and DI BBS are privacy-enhancing technologies that can be used to represent credentials without revealing the identity of the credential holder. This can be useful for protecting sensitive information."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Zero-knowledge proofs:")," Anoncreds and DI BBS use zero-knowledge proofs to verify credential claims without revealing the underlying data. This makes them more privacy-preserving than other credential formats."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Potential for widespread adoption:")," Anoncreds and DI BBS have the potential for widespread adoption as organizations look for ways to protect sensitive data while still enabling verification.")),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("p",null,"Read the full ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/@identitywoman-in-business/new-paper-and-infographic-on-flavors-of-digital-credentials-released-b9b6ec5b95af"},'"Standards-Based Digital Credentials: Flavors Explained\u201d (Whitepaper)')," and explore the accompanying infographic ","[here]"),(0,n.kt)("p",null,"Read also a revious version of this work with title Verifiable Credentials Flavors Explained published a part of the ",(0,n.kt)("a",{parentName:"p",href:"https://www.covidcreds.org/"},"Covid-19 Credentials Initiative (CCI)")))}u.isMDXComponent=!0}}]);