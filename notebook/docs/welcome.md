---
sidebar_position: 0
---

# Welcome

Let's discover the **W3C Verifiable Credentials and their ecosystem.**.

## [Introduction](https://www.w3.org/TR/vc-data-model/#introduction)

Currently it is **difficult to express** education qualifications, healthcare data, financial account details, and other sorts of third-party **verified machine-readable personal information** on the Web. The difficulty of expressing digital credentials on the Web makes it challenging to receive the same benefits through the Web that physical credentials provide us in the physical world.

### [The ecosystem](https://www.w3.org/TR/vc-data-model/#ecosystem-overview)

![The Ecosystem](@site/static/img/ecosystem.svg)

#### Roles
* [holder](https://www.w3.org/TR/vc-data-model/#dfn-holders)
* [issuer](https://www.w3.org/TR/vc-data-model/#dfn-issuers)
* [subject](https://www.w3.org/TR/vc-data-model/#dfn-subjects)
* [verifier](https://www.w3.org/TR/vc-data-model/#dfn-verifier)
* [verifiable data registry](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-data-registries)


### A Real Life Example 
[Redeeming an alumni discount from a university](https://www.w3.org/TR/vc-data-model/#concrete-lifecycle-example)

Our actor Pat:
1. Receives an alumni verifiable credential from a university.
2. Stores the verifiable credential in a digital wallet.
3. Then attempts to redeem the alumni discount.

> The verifier, a ticket sales system, states that **any alumni of "Example University" receives a discount** on season tickets to sporting events

Pat starts the process of purchasing a season ticket. 
1. This process requests an alumni verifiable credential, and this request is routed to Pat's digital wallet. 
2. The digital wallet asks Pat if they would like to provide a previously issued verifiable credential. 
3. Pat selects the alumni verifiable credential, which is then composed into a verifiable presentation. 
4. The verifiable presentation is sent to the verifier and verified.


## About Encryption 

### Public and Private Keys
Robert Miles PhD Student at University of Nottingham

<div class="video-container"><iframe src="https://www.youtube.com/embed/GSIDS_lvRv4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

### Digital Certificates
Michael P. Pound is a researcher at the University of Nottingham

<div class="video-container"><iframe src="https://www.youtube.com/embed/s22eJ1eVLTU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


## Getting Started

Discover the [ecosystem](ecosystem/references).