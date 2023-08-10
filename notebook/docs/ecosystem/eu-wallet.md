---
sidebar_position: 2
---

# EU Wallet

## In-Depth Articles
> Now the [EU Digital Identity Wallet](https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/europe-fit-digital-age/european-digital-identity_en) (EUDIW) [Architecture Reference Framework](https://digital-strategy.ec.europa.eu/en/library/european-digital-identity-wallet-architecture-and-reference-framework) (ARF) has been published, we can get a really good insight into the plans for the world’s largest digital credential ecosystem. I’m going deeper into a number of parts of the ARF and give you my thoughts on some key areas that merit further attention.
>
> -- _[Andrew Tobin](https://www.linkedin.com/in/tobinandrew/)_

### [EU Wallet In Depth #1: Trusted Lists](https://www.linkedin.com/pulse/eu-wallet-depth-1-trusted-lists-andrew-tobin/)  
Challenges:
* Number of Trusted Lists and Architectural Complexity
* Internationalization
* Trusted List of Trusted Lists  
_Possible primary ecosystem attack vector_
* Who polices the Trusted Lists 

Highlights:

> Any bad actor will head straight for the trusted lists as the first attack vector. They are the root of trust. Hacking a trusted list will mean a bad actor can impersonate a legitimate credential issuer or verifier. They could literally print their own digital passports. Or they could release a rogue wallet app to the appstores, which would appear to be a genuine, certified, and approved app.

> The design and build of credential ecosystems are 75% governance rules and 25% technology. 

#### Trusted List Example
*  [EBSI Trusted Issuers List](https://ec.europa.eu/digital-building-blocks/wikis/display/EBSIDOC/Issuers+trust+model+-+Accreditation+of+Issuers)

### [EU Wallet In Depth #2: No PID, No Problem.](https://www.linkedin.com/pulse/eu-wallet-depth-2-pid-problem-andrew-tobin/)  
Highlights:

> The EUDIW can be used for all sorts of use cases without the citizen having to first load it with a government-certified identity credential (`PID`)

#### eIDAS 2
* [Explanatory Memorandum](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52021PC0281)

#### Large Scale Pilots
* [EWC Large Scale Pilot consortium](https://eudiwalletconsortium.org/)

### [EU Wallet In Depth #3: Conscious Decoupling?](https://www.linkedin.com/pulse/eu-wallet-dept-3-conscious-decoupling-andrew-tobin/)
Challenges
* credential tracking in government-certified and approved wallet apps
* best privacy capabilities for our citizens
* decoupling of issuers and verifiers


Highlights:

> This means that the issuer of QEAAs cannot track where a holder (a citizen) is using their credentials. It is vital to ensure that a privacy wall exists between the issuer and the verifier (or “relying party”).

> There will be less regulatory oversight of non-qualified issuers


### [EU Wallet In Depth #4: The Missing Network](https://www.linkedin.com/pulse/eu-wallet-depth-4-missing-network-andrew-tobin/)
Challenges:
* verifiable data registry or registries (Layer 1)
* clear direction of which verifiable data registry to use
  

Highlights:

> Currently therefore, the ARF is quite “loose” when it comes to specifying where and how such verification information, keys, trusted lists will be stored. This does allow freedom for developers to come up with the best option, but similarly it opens the door for a proliferation of different methods causing confusion and technical complexity.

> These different formats, ISO/IEC 18013-5:2021 and the W3C Verifiable Credentials Data Model 1.1., use different methods for key storage and retrieval, which points to having at least 2 VDRs in the ecosystem. When you add in the fact that individual Member States may implement their PID and EUDIW differently, the number of VDRs could multiply.


#### Trust Over IP Foundation
* [TOIP Model (interactive demo)](https://trustoverip.org/wp-content/toip-model/)

#### EBSI
* [Accelerating best use of technologies (DIGITAL-2022-DEPLOY-02)](https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/digital-2022-deploy-02-ebsi-services)
* [Issuers trust model - Accreditation of Issuers](https://ec.europa.eu/digital-building-blocks/wikis/display/EBSIDOC/Issuers+trust+model+-+Accreditation+of+Issuers)


### [EU Wallet In Depth #5: Unique Identifiers Explained](https://www.linkedin.com/pulse/eu-wallet-depth-5-unique-identifiers-explained-andrew-tobin/)

Challenges:
* Unique IDs In Metadata
* The dangers of correlation via unique identifiers
* Unique identifiers buried in the metadata of the wallet interaction protocol
* Identifiers in Metadata (example)
  * Wallet identifier
  * Personal decentralized identifier (DID)
  * Revocation registry index position
  * Issuer signatures


Highlights:

> in the same way that a web cookie or advertising ID can be used to correlate your online actions and profile you, unique identifiers in a credential ecosystem could do the same.

> Imagine you are going for a day out in Paris. You get a taxi from home to the train station, get a ticket, get the train, and get into town. You ask directions, get on the metro, go to several shops, stop for coffee etc etc etc. Imagine if every time you interacted with someone, whether speaking to them or buying a ticket or entering a shop, you had to give them all the same number that is unique to you

> If you have to reveal the same unique identifier every time you interact in a digital credential  ecosystem, everything you do will be trackable.

> issuer signature is unique to that credential, and therefore to you
