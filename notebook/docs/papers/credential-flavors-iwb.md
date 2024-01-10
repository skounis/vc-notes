---
sidebar_position: 2
---

# Standards-Based Digital Credentials

> Decoding the Spectrum: Unveiling the World of Standards-Based Digital Credentials

## Intoduction 
Explore the insights presented in the article ["Standards-Based Digital Credentials: Flavors Explained” (Whitepaper)](https://medium.com/@identitywoman-in-business/new-paper-and-infographic-on-flavors-of-digital-credentials-released-b9b6ec5b95af) by [Identity Woman in Business](https://medium.com/@identitywoman-in-business). The whitepaper delves into the intricacies of the digital credential landscape, providing a simplified yet technically-accurate overview of the key flavors shaping the standards. As businesses and decision-makers stand at the crossroads of credential implementation choices, understanding these flavors becomes paramount.

## Key takeaways

Connecting the introductory exploration of the digital credential landscape, the following key takeaways shed light on the nuances of standards-based digital credentials:

* **Overview of the Digital Credentials Ecosystem:** Provides an overview of the digital credentials ecosystem.
* **Standardized Data Formats for Credential:** Lists three standardized data formats for credentials - JSON, JSON-LD, and CBOR - and provides details on their structure.
* **Introduction to Standardized Cryptographic Methods:** Gives an introduction to standardized cryptographic methods for securing credentials, including public-private key cryptography.
* **Securing Data in Credentials:** Explains how to secure data in credentials with examples for JWT and CWT.
* **Selective Disclosure in mDL/mDOC and SD-JWT:** Describes how selective disclosure is achieved in mDL/mDOC and SD-JWT.
* **Holder Binding and Hardware Binding:** Touches on the topics of holder binding and hardware binding.
* **Credential Lifecycle in 6 Scenes:** Sets a credential's lifecycle for six scenes, exercising ISO mDL, SD-JWT, JSON-LD-DI, and JSON-JWT over them.
  1. Scene 1 - Pre-Issuance (1): Data Field Definition by Issuer
  2. Scene 2 - Pre-Issuance (2): Public-Private Key Generation by Issuer
  3. Scene 3 - Pre-Issuance (3): Registry Enrollment by Issuer
  4. Scene 4 - Credential Issuance to Holder (1): Getting a Cryptographic Anchor for Credential
  5. Scene 5 - Credential Issuance to Holder (2): Credential Claims and Cryptographically Signing 
  6. Scene 6 - Credential Issuance to Holder (3): Getting Signed Credential into Holder Wallet
  7. Scene 7 - Credential Receipt: Holder has Credential in Wallet  
  8. Scene 8 - Credential Verification by Verifier (1): Verifier Requests for Credential from Holder
  9. Scene 9 - Credential Vefification by Verifier (2): Wallet Packages up Proof of Credential
  10. Scene 10 - Credential Verification by Verifier (3): Proof of Credential is Sent to Verifier
  11. Scene 11 - Credential Verification by Verifier (4): Verifier Analyzes Proof and Makes Decision
* **Overview of Anaoncreds and DI BBS:** Gives a short overview of Anaoncreds (formerly JSON-ZKP-CL) and DI BBS (formerly JSON-LD ZKP with BBS+).
* **Authentic Chained Data Containers (ACDC) and Gordian Envelopes:** Touches upon the Authentic Chained Data Containers (ACDC) and Gordian Envelopes.
* **Zero-Knowledge Proofs and Pseudo ZKP Technologies:** Introduces Zero-Knowledge Proofs and Pseudo ZKP technologies and discusses their limitations.
* **Conclusion:** Concludes insights on the correlation, profiling, and limitations of emerging flavors.
  1. All the four flavors covered don't prevent correlation. They all have something that works as a unique identifier.
  2. Verifiers will likely be able to profile credential holders through their repeated use of a single credential.
  3. Emerging flavors can do ZKP but fall short of preventing cloning of credentials and impersonation.

Finaly the authors have prepared an infographic for explainign and comparing the major flavors: ISO mDL/mDOC, SD-JWT, JSON-JWT, JSON-LD-DI, Data Integrity BBS, AnonCreds
* https://drive.google.com/file/d/1mZVcGlcxAqQaOr-pBUt6-Amh2NocuaNp/view


## The 6 flavors of digital credentials
Based on the whitepaper, here is an in-depth description of the 6 key flavors of digital credentials:

### ISO mDL/mDOC
* **Structured representation:** ISO mDL and mDOC are based on JSON-LD, which provides a structured way to define credential templates, issuers, and holders. This makes it easier to understand and interpret credentials, and it also makes it possible to automated processes that involve credentials.
* **Support for selective disclosure:** ISO mDL and mDOC support selective disclosure, which means that only certain parts of a credential can be revealed to a verifier. This can be useful for protecting sensitive information, such as personal data.
* **Widely used:** ISO mDL and mDOC are widely used in a variety of applications, including education, healthcare, and financial services.

### SD-JWT
* **Specifically designed for credentials:** SD-JWT is a specialized type of JSON Web Token (JWT) that is specifically designed for representing credentials. This makes it more secure and reliable than using JSON-JWT for credentials.
* **Support for additional claims:** SD-JWT includes additional claims that are not typically found in JSON-JWTs, such as claims for specifying credential issuance context and revocation information. This makes it more versatile than JSON-JWT for representing credentials.
* **Growing popularity:** SD-JWT is growing in popularity as more and more organizations are adopting digital credentials.

### JSON-JWT
* **Widely used format:** JSON-JWT is a widely used format for encoding claims in a compact and URL-safe format. This makes it easy to transport and store credentials.
* **Flexible format:** JSON-JWT is a flexible format that can be used to represent a variety of data, including credentials.
* **Suitable for basic use:** JSON-JWT is suitable for basic use cases, such as representing simple credentials. However, it is not as secure or reliable as ISO mDL or SD-JWT for representing credentials.

### JSON-LD-DI
* **Support for data identifiers:** JSON-LD-DI is an extension of JSON-LD that adds support for defining and referencing data identifiers. This makes it a suitable format for representing credentials that contain confidential or sensitive data, as it allows for the data to be encrypted or access-controlled.
* **Privacy-preserving:** JSON-LD-DI is a privacy-preserving format that can be used to represent credentials without revealing the underlying data. This can be useful for protecting sensitive information.
* **Emerging technology:** JSON-LD-DI is an emerging technology that is still under development. However, it has the potential to become a widely used format for representing credentials.

### Data Integrity BBS
* **Verifiable data containers:** Data Integrity BBS is a technique for creating verifiable and tamper-proof data containers. This makes it possible to ensure that data has not been tampered with since it was created.
* **Tamper-proof:** Data Integrity BBS is tamper-proof, which means that it is not possible to modify the data without invalidating the verification.
* **Suitable for sensitive data:** Data Integrity BBS is suitable for sensitive data, such as credentials.

### Anoncreds and DI BBS
* **Privacy-enhancing:** Anoncreds and DI BBS are privacy-enhancing technologies that can be used to represent credentials without revealing the identity of the credential holder. This can be useful for protecting sensitive information.
* **Zero-knowledge proofs:** Anoncreds and DI BBS use zero-knowledge proofs to verify credential claims without revealing the underlying data. This makes them more privacy-preserving than other credential formats.
* **Potential for widespread adoption:** Anoncreds and DI BBS have the potential for widespread adoption as organizations look for ways to protect sensitive data while still enabling verification.

## References
Read the full ["Standards-Based Digital Credentials: Flavors Explained” (Whitepaper)](https://medium.com/@identitywoman-in-business/new-paper-and-infographic-on-flavors-of-digital-credentials-released-b9b6ec5b95af) and explore the accompanying infographic [here]

Read also a revious version of this work with title Verifiable Credentials Flavors Explained published a part of the [Covid-19 Credentials Initiative (CCI)](https://www.covidcreds.org/)