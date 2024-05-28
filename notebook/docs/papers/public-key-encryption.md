---
sidebar_position: 4
---

# Public key authenticated encryption and why you want it

## Introduction
In the ever-evolving landscape of cybersecurity, ensuring the confidentiality, integrity, and authenticity of data is paramount. Public Key Authenticated Encryption (PKAE) emerges as a powerful solution that combines the benefits of public key cryptography with the assurance of authenticated encryption. In this three-part series, security expert Neil Madden delves into the intricacies of PKAE, shedding light on its significance, implementation, and real-world applications. Whether you’re a developer, a security enthusiast, or simply curious about cryptographic protocols, these articles provide valuable insights into the world of PKAE.

* [Part I - The Need for PKAE](https://neilmadden.blog/2018/11/14/public-key-authenticated-encryption-and-why-you-want-it-part-i/): This initial entry sets the stage by discussing why authenticated encryption is crucial even when using public key cryptography. It emphasizes the importance of verifying the authenticity of claims, particularly in the context of message content, and introduces the concept of trust models in symmetric and public key cryptography.
* [Part II - Building Blocks for PKAE](https://neilmadden.blog/2018/11/26/public-key-authenticated-encryption-and-why-you-want-it-part-ii/): The second part dives into the technical aspects of achieving PKAE without interactive protocols. It explores various methods and their trust models, including the challenges of combining encryption with digital signatures and the potential of Diffie-Hellman key agreement for PKAE.
* [Part III - Reflections and Standards](https://neilmadden.blog/2018/12/14/public-key-authenticated-encryption-and-why-you-want-it-part-iii/): In the concluding part, the discussion reflects on the findings from the previous entries and considers improvements that could be incorporated into popular standards like JOSE and JWT. It also touches on the concept of signcryption and non-repudiation in the context of PKAE.

## Public key authenticated encryption importance in ensuring confidentiality, integrity, and sender authentication for secure communication

The first part emphasizes the importance of authenticated encryption, especially in the context of public key cryptography. It highlights the need for secure communication that guarantees both confidentiality and sender authenticity. NaCl serves as a practical tool for implementing these concepts in real-world applications.

### Authenticated Encryption
* Authenticated encryption combines confidentiality, integrity, and authenticity in a single cryptographic operation.
* It ensures that encrypted data remains confidential, cannot be tampered with, and can be verified as originating from a legitimate sender.
* Common authenticated encryption modes include GCM (Galois/Counter Mode) and CCM (Counter with CBC-MAC).

### Combining Cipher and MAC
* Authenticated encryption requires both encryption (cipher) and authentication (MAC) components.
* Combining these components correctly is crucial to achieving secure authenticated encryption.
* The order of operations matters: encrypt-then-MAC is generally recommended to avoid vulnerabilities.

### Public Key Encryption
* Public key cryptography involves asymmetric keys (public and private) for encryption and decryption.
* While public key encryption provides confidentiality, it lacks sender authentication.
* Authenticated encryption in the public key setting ensures not only confidentiality but also authenticity of the sender.

### NaCl Cryptography Library
* NaCl (pronounced “salt”) is a well-regarded cryptography library.
* It provides easy-to-use APIs for secure cryptographic operations, including public key authenticated encryption.
* Developers can leverage NaCl to build secure systems without diving into low-level details.

## Public Key Authenticated Encryption (PKAE)
The second part discusses the importance of public key authenticated encryption for ensuring confidentiality, integrity, and sender authentication in secure communications, highlighting the NaCl Cryptography Library’s role in providing these capabilities.

The article is quite technical and delves into the specifics of cryptographic protocols and their security implications. 

### Authentication and Trust Models
* **Authentication vs. Identification**: The article clarifies the difference between authentication (verifying claims) and identification (recognizing an entity).
* **Trust Models in Cryptography**: It discusses trust models in symmetric and public key cryptography, emphasizing that in public key systems, the trust model is richer and more complex.

### Public Key Authenticated Encryption (PKAE)
* **Challenges of PKAE**: The text explains the difficulties in achieving PKAE using a combination of public key encryption and digital signatures.
* **Encrypt-then-Sign Approach**: It critiques the Encrypt-then-Sign method, highlighting its vulnerabilities and why it may not be secure or legally acceptable.

### Methods to Achieve PKAE
* **ESSR Method**: The article introduces the ESSR (Encrypt Sender-key then Sign Receiver-key) method, which binds the key-pairs used in constructing the message to prevent certain types of attacks.
* **Diffie-Hellman and Authenticated Encryption**: It presents how Diffie-Hellman key agreement can be used to achieve PKAE easily and discusses the potential drawbacks of this approach.

### Diffie-Hellman Variants and Security
* **Key Compromise Impersonation (KCI)**: The page addresses the issue of KCI, where compromised keys can lead to impersonation attacks.
* **Noise Protocol Framework**: It reviews the Noise protocol framework's one-way handshake patterns for secure authenticated protocols based on Diffie-Hellman.

### NIST One-Pass Unified Model
* **NIST Recommendations**: The document describes the NIST One-Pass Unified Model for DH key agreement and how it achieves PKAE.

### Summary and Reflection
* **Reflection on PKAE**: The author reflects on the findings regarding PKAE and suggests improvements for popular standards like JOSE and JWT.
* **Update on Signcryption**: An update mentions a discussion on signcryption, a form of PKAE, in a graduate course on applied cryptography.

## Public Key Encryption: Ensuring Confidentiality and Authenticity
The third part discusses the significance of **public key authenticated encryption** in ensuring **confidentiality, integrity, and sender authentication** in secure communications. It highlights the **NaCl Cryptography Library** as a reputable resource that offers **easy-to-use APIs** for cryptographic operations, including public key authenticated encryption, allowing developers to create secure systems without needing to delve into complex details. Additionally, the article outlines the unique and secure features of **CC HSM Certificates**, such as **digital signatures** and **Subject DN**, which contribute to the robustness of public key encryption systems, despite the inherent lack of sender authentication in public key encryption alone.

The article delves into the specifics of cryptographic standards and their implementation in security protocols, providing a critique of current standards and suggestions for improvement. 


### Public Key Authenticated Encryption (PKAE)
* Overview: PKAE is a desirable security goal in both symmetric and public key settings
* Challenges: Building PKAE from separate signing and encryption methods is not straightforward, especially for Diffie-Hellman.

### JOSE and JWT Standards
* Encryption Modes: JOSE standards define several encryption modes for JSON Object Signing and Encryption (JOSE), used for JWTs.
* Authentication Gap: Public key encryption modes in JOSE typically lack authentication, leading to the requirement of nested JWTs for both signing and encryption.

### Improving JOSE
* Security Goals: The author suggests that all JWE and JWS algorithms should be interchangeable with consistent security goals.
* Authenticated Encryption: Proposes that JWE should aim for authenticated encryption across both symmetric and public key algorithms.

### OpenID Connect (OIDC)
* Token Security: OIDC mandates signed tokens, but the author argues for the importance of encrypted ID tokens due to the sensitive information they carry.

### Authenticated API Requests
* Enhanced Security: The article discusses the potential for authenticated HTTP requests to enhance API security beyond what HTTPS provides.

### Summary and Recommendations
* Adoption of PKAE: The author advocates for the adoption of PKAE as the default security goal for most applications, highlighting its benefits over non-authenticated schemes.

## Acronyms

| Acronym | Explanation |
|---------|-------------|
| **PKAE** | **Public Key Authenticated Encryption**: PKAE combines public key encryption with message authentication, ensuring both confidentiality and integrity. It allows the recipient to verify the authenticity of the sender using digital signatures . |
| **JOSE** | **JSON Object Signing and Encryption**: JOSE defines standards for representing and securing data in JSON format. It includes specifications for **JWS (JSON Web Signature)** and **JWE (JSON Web Encryption)** . |
| **JWT** | **JSON Web Token**: A compact, URL-safe token format used for securely transmitting information between parties. JWTs are often used in authentication and authorization mechanisms . |
| **NaCl** | **Networking and Cryptography library**: NaCl is a widely used cryptographic library that provides easy-to-use APIs for various cryptographic operations, including encryption, decryption, and digital signatures . |
| **GCM** | **Galois/Counter Mode**: A mode of operation for symmetric key block ciphers. GCM provides both confidentiality and integrity by combining counter mode encryption with a Galois field multiplication-based authentication tag . |
| **CCM** | **Counter with CBC-MAC**: Another mode of operation for symmetric key block ciphers. CCM combines counter mode encryption with CBC-MAC for authenticated encryption . |
| **MAC** | **Message Authentication Code**: A cryptographic tag that ensures the integrity and authenticity of a message. It is generated using a secret key and the message content . |
| **ESSR** | **Elliptic Curve Schnorr Signature**: A digital signature algorithm based on elliptic curve cryptography. It provides strong security with shorter key lengths . |
| **KCI** | **Key Confirmation Indicator**: A mechanism used to confirm the validity of a cryptographic key . |
| **NIST** | **National Institute of Standards and Technology**: A U.S. federal agency responsible for developing and maintaining cryptographic standards . |
| **CC HSM** | **Common Criteria Hardware Security Module**: A hardware security module that conforms to the Common Criteria security standard. CC HSMs are used for secure key management and cryptographic operations . |
| **JWE** | **JSON Web Encryption**: Part of the JOSE standards, JWE defines how to encrypt and decrypt data in JSON format . |
| **JWS** | **JSON Web Signature**: Also part of the JOSE standards, JWS defines how to digitally sign data in JSON format . |
| **OIDC** | **OpenID Connect**: An authentication protocol built on top of OAuth 2.0. OIDC provides identity verification and single sign-on capabilities . |


## References
1. **Madden, Neil. "[Public Key Authenticated Encryption and Why You Want It (Part I)](https://neilmadden.blog/2018/11/14/public-key-authenticated-encryption-and-why-you-want-it-part-i/)."** *Neil Madden's Blog.* 14 Nov. 2018.
2. **Madden, Neil. "[Public Key Authenticated Encryption and Why You Want It (Part II)](https://neilmadden.blog/2018/11/26/public-key-authenticated-encryption-and-why-you-want-it-part-ii/)."** *Neil Madden's Blog.* 26 Nov. 2018.
3. **Madden, Neil. "[Public Key Authenticated Encryption and Why You Want It (Part III)](https://neilmadden.blog/2018/12/14/public-key-authenticated-encryption-and-why-you-want-it-part-iii/)."** *Neil Madden's Blog.* 14 Dec. 2018.
4. **Khan Academy. "[Public Key Encryption](https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:online-data-security)."** *Computers and the Internet.*
5. **Encryption Consulting. "[What is Public Key Cryptography?](https://www.encryptionconsulting.com/education-center/what-is-public-key-cryptography/)"**
6. **Digital Guardian. "[What is Public Key Cryptography? (And How it Works)](https://www.digitalguardian.com/blog/what-public-key-cryptography)."**
7. **Cloudflare. "[How does public key cryptography work?](https://www.cloudflare.com/learning/ssl/how-does-public-key-encryption-work/)"**


