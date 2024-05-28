"use strict";(self.webpackChunkvc_notes=self.webpackChunkvc_notes||[]).push([[4143],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},y=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(n),y=i,h=d["".concat(c,".").concat(y)]||d[y]||u[y]||r;return n?a.createElement(h,o(o({ref:e},p),{},{components:n})):a.createElement(h,o({ref:e},p))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=y;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[d]="string"==typeof t?t:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4385:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4},o="Public key authenticated encryption and why you want it",l={unversionedId:"papers/public-key-encryption",id:"papers/public-key-encryption",title:"Public key authenticated encryption and why you want it",description:"Introduction",source:"@site/docs/papers/public-key-encryption.md",sourceDirName:"papers",slug:"/papers/public-key-encryption",permalink:"/vc-notes/docs/papers/public-key-encryption",editUrl:"https://github.com/skounis/vc-notes/blob/main/notebook/docs/papers/public-key-encryption.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Electronic Signatures and Seals, and eIDAS",permalink:"/vc-notes/docs/papers/certificates-seals"},next:{title:"Create a Page",permalink:"/vc-notes/docs/tutorial-basics/create-a-page"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Public key authenticated encryption importance in ensuring confidentiality, integrity, and sender authentication for secure communication",id:"public-key-authenticated-encryption-importance-in-ensuring-confidentiality-integrity-and-sender-authentication-for-secure-communication",level:2},{value:"Authenticated Encryption",id:"authenticated-encryption",level:3},{value:"Combining Cipher and MAC",id:"combining-cipher-and-mac",level:3},{value:"Public Key Encryption",id:"public-key-encryption",level:3},{value:"NaCl Cryptography Library",id:"nacl-cryptography-library",level:3},{value:"Public Key Authenticated Encryption (PKAE)",id:"public-key-authenticated-encryption-pkae",level:2},{value:"Authentication and Trust Models",id:"authentication-and-trust-models",level:3},{value:"Public Key Authenticated Encryption (PKAE)",id:"public-key-authenticated-encryption-pkae-1",level:3},{value:"Methods to Achieve PKAE",id:"methods-to-achieve-pkae",level:3},{value:"Diffie-Hellman Variants and Security",id:"diffie-hellman-variants-and-security",level:3},{value:"NIST One-Pass Unified Model",id:"nist-one-pass-unified-model",level:3},{value:"Summary and Reflection",id:"summary-and-reflection",level:3},{value:"Public Key Encryption: Ensuring Confidentiality and Authenticity",id:"public-key-encryption-ensuring-confidentiality-and-authenticity",level:2},{value:"Public Key Authenticated Encryption (PKAE)",id:"public-key-authenticated-encryption-pkae-2",level:3},{value:"JOSE and JWT Standards",id:"jose-and-jwt-standards",level:3},{value:"Improving JOSE",id:"improving-jose",level:3},{value:"OpenID Connect (OIDC)",id:"openid-connect-oidc",level:3},{value:"Authenticated API Requests",id:"authenticated-api-requests",level:3},{value:"Summary and Recommendations",id:"summary-and-recommendations",level:3},{value:"Acronyms",id:"acronyms",level:2},{value:"References",id:"references",level:2}],p={toc:s},d="wrapper";function u(t){let{components:e,...n}=t;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"public-key-authenticated-encryption-and-why-you-want-it"},"Public key authenticated encryption and why you want it"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In the ever-evolving landscape of cybersecurity, ensuring the confidentiality, integrity, and authenticity of data is paramount. Public Key Authenticated Encryption (PKAE) emerges as a powerful solution that combines the benefits of public key cryptography with the assurance of authenticated encryption. In this three-part series, security expert Neil Madden delves into the intricacies of PKAE, shedding light on its significance, implementation, and real-world applications. Whether you\u2019re a developer, a security enthusiast, or simply curious about cryptographic protocols, these articles provide valuable insights into the world of PKAE."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://neilmadden.blog/2018/11/14/public-key-authenticated-encryption-and-why-you-want-it-part-i/"},"Part I - The Need for PKAE"),": This initial entry sets the stage by discussing why authenticated encryption is crucial even when using public key cryptography. It emphasizes the importance of verifying the authenticity of claims, particularly in the context of message content, and introduces the concept of trust models in symmetric and public key cryptography."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://neilmadden.blog/2018/11/26/public-key-authenticated-encryption-and-why-you-want-it-part-ii/"},"Part II - Building Blocks for PKAE"),": The second part dives into the technical aspects of achieving PKAE without interactive protocols. It explores various methods and their trust models, including the challenges of combining encryption with digital signatures and the potential of Diffie-Hellman key agreement for PKAE."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://neilmadden.blog/2018/12/14/public-key-authenticated-encryption-and-why-you-want-it-part-iii/"},"Part III - Reflections and Standards"),": In the concluding part, the discussion reflects on the findings from the previous entries and considers improvements that could be incorporated into popular standards like JOSE and JWT. It also touches on the concept of signcryption and non-repudiation in the context of PKAE.")),(0,i.kt)("h2",{id:"public-key-authenticated-encryption-importance-in-ensuring-confidentiality-integrity-and-sender-authentication-for-secure-communication"},"Public key authenticated encryption importance in ensuring confidentiality, integrity, and sender authentication for secure communication"),(0,i.kt)("p",null,"The first part emphasizes the importance of authenticated encryption, especially in the context of public key cryptography. It highlights the need for secure communication that guarantees both confidentiality and sender authenticity. NaCl serves as a practical tool for implementing these concepts in real-world applications."),(0,i.kt)("h3",{id:"authenticated-encryption"},"Authenticated Encryption"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authenticated encryption combines confidentiality, integrity, and authenticity in a single cryptographic operation."),(0,i.kt)("li",{parentName:"ul"},"It ensures that encrypted data remains confidential, cannot be tampered with, and can be verified as originating from a legitimate sender."),(0,i.kt)("li",{parentName:"ul"},"Common authenticated encryption modes include GCM (Galois/Counter Mode) and CCM (Counter with CBC-MAC).")),(0,i.kt)("h3",{id:"combining-cipher-and-mac"},"Combining Cipher and MAC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authenticated encryption requires both encryption (cipher) and authentication (MAC) components."),(0,i.kt)("li",{parentName:"ul"},"Combining these components correctly is crucial to achieving secure authenticated encryption."),(0,i.kt)("li",{parentName:"ul"},"The order of operations matters: encrypt-then-MAC is generally recommended to avoid vulnerabilities.")),(0,i.kt)("h3",{id:"public-key-encryption"},"Public Key Encryption"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Public key cryptography involves asymmetric keys (public and private) for encryption and decryption."),(0,i.kt)("li",{parentName:"ul"},"While public key encryption provides confidentiality, it lacks sender authentication."),(0,i.kt)("li",{parentName:"ul"},"Authenticated encryption in the public key setting ensures not only confidentiality but also authenticity of the sender.")),(0,i.kt)("h3",{id:"nacl-cryptography-library"},"NaCl Cryptography Library"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NaCl (pronounced \u201csalt\u201d) is a well-regarded cryptography library."),(0,i.kt)("li",{parentName:"ul"},"It provides easy-to-use APIs for secure cryptographic operations, including public key authenticated encryption."),(0,i.kt)("li",{parentName:"ul"},"Developers can leverage NaCl to build secure systems without diving into low-level details.")),(0,i.kt)("h2",{id:"public-key-authenticated-encryption-pkae"},"Public Key Authenticated Encryption (PKAE)"),(0,i.kt)("p",null,"The second part discusses the importance of public key authenticated encryption for ensuring confidentiality, integrity, and sender authentication in secure communications, highlighting the NaCl Cryptography Library\u2019s role in providing these capabilities."),(0,i.kt)("p",null,"The article is quite technical and delves into the specifics of cryptographic protocols and their security implications. "),(0,i.kt)("h3",{id:"authentication-and-trust-models"},"Authentication and Trust Models"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authentication vs. Identification"),": The article clarifies the difference between authentication (verifying claims) and identification (recognizing an entity)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trust Models in Cryptography"),": It discusses trust models in symmetric and public key cryptography, emphasizing that in public key systems, the trust model is richer and more complex.")),(0,i.kt)("h3",{id:"public-key-authenticated-encryption-pkae-1"},"Public Key Authenticated Encryption (PKAE)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Challenges of PKAE"),": The text explains the difficulties in achieving PKAE using a combination of public key encryption and digital signatures."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Encrypt-then-Sign Approach"),": It critiques the Encrypt-then-Sign method, highlighting its vulnerabilities and why it may not be secure or legally acceptable.")),(0,i.kt)("h3",{id:"methods-to-achieve-pkae"},"Methods to Achieve PKAE"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ESSR Method"),": The article introduces the ESSR (Encrypt Sender-key then Sign Receiver-key) method, which binds the key-pairs used in constructing the message to prevent certain types of attacks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Diffie-Hellman and Authenticated Encryption"),": It presents how Diffie-Hellman key agreement can be used to achieve PKAE easily and discusses the potential drawbacks of this approach.")),(0,i.kt)("h3",{id:"diffie-hellman-variants-and-security"},"Diffie-Hellman Variants and Security"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Key Compromise Impersonation (KCI)"),": The page addresses the issue of KCI, where compromised keys can lead to impersonation attacks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Noise Protocol Framework"),": It reviews the Noise protocol framework's one-way handshake patterns for secure authenticated protocols based on Diffie-Hellman.")),(0,i.kt)("h3",{id:"nist-one-pass-unified-model"},"NIST One-Pass Unified Model"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NIST Recommendations"),": The document describes the NIST One-Pass Unified Model for DH key agreement and how it achieves PKAE.")),(0,i.kt)("h3",{id:"summary-and-reflection"},"Summary and Reflection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reflection on PKAE"),": The author reflects on the findings regarding PKAE and suggests improvements for popular standards like JOSE and JWT."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Update on Signcryption"),": An update mentions a discussion on signcryption, a form of PKAE, in a graduate course on applied cryptography.")),(0,i.kt)("h2",{id:"public-key-encryption-ensuring-confidentiality-and-authenticity"},"Public Key Encryption: Ensuring Confidentiality and Authenticity"),(0,i.kt)("p",null,"The third part discusses the significance of ",(0,i.kt)("strong",{parentName:"p"},"public key authenticated encryption")," in ensuring ",(0,i.kt)("strong",{parentName:"p"},"confidentiality, integrity, and sender authentication")," in secure communications. It highlights the ",(0,i.kt)("strong",{parentName:"p"},"NaCl Cryptography Library")," as a reputable resource that offers ",(0,i.kt)("strong",{parentName:"p"},"easy-to-use APIs")," for cryptographic operations, including public key authenticated encryption, allowing developers to create secure systems without needing to delve into complex details. Additionally, the article outlines the unique and secure features of ",(0,i.kt)("strong",{parentName:"p"},"CC HSM Certificates"),", such as ",(0,i.kt)("strong",{parentName:"p"},"digital signatures")," and ",(0,i.kt)("strong",{parentName:"p"},"Subject DN"),", which contribute to the robustness of public key encryption systems, despite the inherent lack of sender authentication in public key encryption alone."),(0,i.kt)("p",null,"The article delves into the specifics of cryptographic standards and their implementation in security protocols, providing a critique of current standards and suggestions for improvement. "),(0,i.kt)("h3",{id:"public-key-authenticated-encryption-pkae-2"},"Public Key Authenticated Encryption (PKAE)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Overview: PKAE is a desirable security goal in both symmetric and public key settings"),(0,i.kt)("li",{parentName:"ul"},"Challenges: Building PKAE from separate signing and encryption methods is not straightforward, especially for Diffie-Hellman.")),(0,i.kt)("h3",{id:"jose-and-jwt-standards"},"JOSE and JWT Standards"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Encryption Modes: JOSE standards define several encryption modes for JSON Object Signing and Encryption (JOSE), used for JWTs."),(0,i.kt)("li",{parentName:"ul"},"Authentication Gap: Public key encryption modes in JOSE typically lack authentication, leading to the requirement of nested JWTs for both signing and encryption.")),(0,i.kt)("h3",{id:"improving-jose"},"Improving JOSE"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Security Goals: The author suggests that all JWE and JWS algorithms should be interchangeable with consistent security goals."),(0,i.kt)("li",{parentName:"ul"},"Authenticated Encryption: Proposes that JWE should aim for authenticated encryption across both symmetric and public key algorithms.")),(0,i.kt)("h3",{id:"openid-connect-oidc"},"OpenID Connect (OIDC)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Token Security: OIDC mandates signed tokens, but the author argues for the importance of encrypted ID tokens due to the sensitive information they carry.")),(0,i.kt)("h3",{id:"authenticated-api-requests"},"Authenticated API Requests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enhanced Security: The article discusses the potential for authenticated HTTP requests to enhance API security beyond what HTTPS provides.")),(0,i.kt)("h3",{id:"summary-and-recommendations"},"Summary and Recommendations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adoption of PKAE: The author advocates for the adoption of PKAE as the default security goal for most applications, highlighting its benefits over non-authenticated schemes.")),(0,i.kt)("h2",{id:"acronyms"},"Acronyms"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Acronym"),(0,i.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"PKAE")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Public Key Authenticated Encryption"),": PKAE combines public key encryption with message authentication, ensuring both confidentiality and integrity. It allows the recipient to verify the authenticity of the sender using digital signatures .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"JOSE")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"JSON Object Signing and Encryption"),": JOSE defines standards for representing and securing data in JSON format. It includes specifications for ",(0,i.kt)("strong",{parentName:"td"},"JWS (JSON Web Signature)")," and ",(0,i.kt)("strong",{parentName:"td"},"JWE (JSON Web Encryption)")," .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"JWT")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"JSON Web Token"),": A compact, URL-safe token format used for securely transmitting information between parties. JWTs are often used in authentication and authorization mechanisms .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"NaCl")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Networking and Cryptography library"),": NaCl is a widely used cryptographic library that provides easy-to-use APIs for various cryptographic operations, including encryption, decryption, and digital signatures .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"GCM")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Galois/Counter Mode"),": A mode of operation for symmetric key block ciphers. GCM provides both confidentiality and integrity by combining counter mode encryption with a Galois field multiplication-based authentication tag .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"CCM")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Counter with CBC-MAC"),": Another mode of operation for symmetric key block ciphers. CCM combines counter mode encryption with CBC-MAC for authenticated encryption .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"MAC")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Message Authentication Code"),": A cryptographic tag that ensures the integrity and authenticity of a message. It is generated using a secret key and the message content .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"ESSR")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Elliptic Curve Schnorr Signature"),": A digital signature algorithm based on elliptic curve cryptography. It provides strong security with shorter key lengths .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"KCI")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Key Confirmation Indicator"),": A mechanism used to confirm the validity of a cryptographic key .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"NIST")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"National Institute of Standards and Technology"),": A U.S. federal agency responsible for developing and maintaining cryptographic standards .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"CC HSM")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Common Criteria Hardware Security Module"),": A hardware security module that conforms to the Common Criteria security standard. CC HSMs are used for secure key management and cryptographic operations .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"JWE")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"JSON Web Encryption"),": Part of the JOSE standards, JWE defines how to encrypt and decrypt data in JSON format .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"JWS")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"JSON Web Signature"),": Also part of the JOSE standards, JWS defines how to digitally sign data in JSON format .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"OIDC")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"OpenID Connect"),": An authentication protocol built on top of OAuth 2.0. OIDC provides identity verification and single sign-on capabilities .")))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},'Madden, Neil. "',(0,i.kt)("a",{parentName:"strong",href:"https://neilmadden.blog/2018/11/14/public-key-authenticated-encryption-and-why-you-want-it-part-i/"},"Public Key Authenticated Encryption and Why You Want It (Part I)"),'."')," ",(0,i.kt)("em",{parentName:"li"},"Neil Madden's Blog.")," 14 Nov. 2018."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},'Madden, Neil. "',(0,i.kt)("a",{parentName:"strong",href:"https://neilmadden.blog/2018/11/26/public-key-authenticated-encryption-and-why-you-want-it-part-ii/"},"Public Key Authenticated Encryption and Why You Want It (Part II)"),'."')," ",(0,i.kt)("em",{parentName:"li"},"Neil Madden's Blog.")," 26 Nov. 2018."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},'Madden, Neil. "',(0,i.kt)("a",{parentName:"strong",href:"https://neilmadden.blog/2018/12/14/public-key-authenticated-encryption-and-why-you-want-it-part-iii/"},"Public Key Authenticated Encryption and Why You Want It (Part III)"),'."')," ",(0,i.kt)("em",{parentName:"li"},"Neil Madden's Blog.")," 14 Dec. 2018."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},'Khan Academy. "',(0,i.kt)("a",{parentName:"strong",href:"https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:online-data-security"},"Public Key Encryption"),'."')," ",(0,i.kt)("em",{parentName:"li"},"Computers and the Internet.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},'Encryption Consulting. "',(0,i.kt)("a",{parentName:"strong",href:"https://www.encryptionconsulting.com/education-center/what-is-public-key-cryptography/"},"What is Public Key Cryptography?"),'"')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},'Digital Guardian. "',(0,i.kt)("a",{parentName:"strong",href:"https://www.digitalguardian.com/blog/what-public-key-cryptography"},"What is Public Key Cryptography? (And How it Works)"),'."')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},'Cloudflare. "',(0,i.kt)("a",{parentName:"strong",href:"https://www.cloudflare.com/learning/ssl/how-does-public-key-encryption-work/"},"How does public key cryptography work?"),'"'))))}u.isMDXComponent=!0}}]);