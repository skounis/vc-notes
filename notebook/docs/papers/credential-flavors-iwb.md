---
sidebar_position: 2
---

# Decoding the Spectrum: Unveiling the World of Standards-Based Digital Credentials

## Intoduction 
Explore the insights presented in the article ["Standards-Based Digital Credentials: Flavors Explained” (Whitepaper)](https://medium.com/@identitywoman-in-business/new-paper-and-infographic-on-flavors-of-digital-credentials-released-b9b6ec5b95af) by [Identity Woman in Business](https://medium.com/@identitywoman-in-business). The whitepaper delves into the intricacies of the digital credential landscape, providing a simplified yet technically-accurate overview of the key flavors shaping the standards. As businesses and decision-makers stand at the crossroads of credential implementation choices, understanding these flavors becomes paramount.

## Key takeaways

Connecting the introductory exploration of the digital credential landscape, the following key takeaways shed light on the nuances of standards-based digital credentials:

- **Overview of the Digital Credentials Ecosystem:** Provides an overview of the digital credentials ecosystem.
- **Standardized Data Formats for Credential:** Lists three standardized data formats for credentials - JSON, JSON-LD, and CBOR - and provides details on their structure.
- **Introduction to Standardized Cryptographic Methods:** Gives an introduction to standardized cryptographic methods for securing credentials, including public-private key cryptography.
- **Securing Data in Credentials:** Explains how to secure data in credentials with examples for JWT and CWT.
- **Selective Disclosure in mDL/mDOC and SD-JWT:** Describes how selective disclosure is achieved in mDL/mDOC and SD-JWT.
- **Holder Binding and Hardware Binding:** Touches on the topics of holder binding and hardware binding.
- **Credential Lifecycle in 6 Scenes:** Sets a credential's lifecycle for six scenes, exercising ISO mDL, SD-JWT, JSON-LD-DI, and JSON-JWT over them.

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
- **Overview of Anaoncreds and DI BBS:** Gives a short overview of Anaoncreds (formerly JSON-ZKP-CL) and DI BBS (formerly JSON-LD ZKP with BBS+).
- **Authentic Chained Data Containers (ACDC) and Gordian Envelopes:** Touches upon the Authentic Chained Data Containers (ACDC) and Gordian Envelopes.
- **Zero-Knowledge Proofs and Pseudo ZKP Technologies:** Introduces Zero-Knowledge Proofs and Pseudo ZKP technologies and discusses their limitations.
- **Conclusion:** Concludes insights on the correlation, profiling, and limitations of emerging flavors.
  1. All the four flavors covered don't prevent correlation. They all have something that works as a unique identifier.
  2. Verifiers will likely be able to profile credential holders through their repeated use of a single credential.
  3. Emerging flavors can do ZKP but fall short of preventing cloning of credentials and impersonation.

## References
Read the full "Standards-Based Digital Credentials: Flavors Explained” (Whitepaper) and explore the accompanying infographic [here](https://medium.com/@identitywoman-in-business/new-paper-and-infographic-on-flavors-of-digital-credentials-released-b9b6ec5b95af).