---
id: CAPM
title: CAPM
description: Cloud Application Programming Model
---

### What and Why

SAP® Cloud Application Programming Model(CAPM) is a set of Library, Tools, Language and `Framework` from SAP® for building Apps.

The main reason for creating CAPM is to

- Provide a Simple way to Create Cloud-Based Apps
- The Apps and code which developer created can be made more `reusable` as modules
- Advantage of `Microservice` can be utilized
- Apps in Cloud can be Easly integrated with Cloud Services(like DB service, message broker service or Auth Provider service)
- A developer can focus more on the functional side of problem-solving

The 2 main Principle of CAPM are:

- Declarative Approach: Focus on Outcome, not on Way
- Service-Based Approach: Get the Functionality from Service

## Declarative Approach

So, if you are a developer you need to focus more on understanding the functional side which is what customer needs now, and also thinking about how can the App/Platform you are developing will evolve over time. Keeping this in mind you need to keep your current development modular, so it can allow future changes easily or your current development can be reused in the future easily.

## Service-Based Approach

In CAPM all functionalities need to be broken down as service(s). In CAPM Services are stateless which means there is no record of previous interactions and each interaction request has to be handled based entirely on information that comes with it. You will also see, that to implement new service/functionality we will many times query existing service(s).

## Developer Stack

That Sounds Great! But you might be having questions like `How it is Build and How as a developer you will work with it`

- CAPM Lib are Predominantly Build With NodeJS, so you need to have basic know-how of NodeJS
- We will use a lot of CDS code, may it be for building data structure(entity model/Table Structure), creating services(with functions) or even creating UI(with CDS Annotations)
- You will find many out of the box tools which are part of CAPM, for example for running Apps with Fiori® Preview just with developed service, for building data structure to deploy in Database like HANA®, Sqlite or Other Other and many more surprises!

## Prerequisite and Getting Started

Experience is the best form of learning, so better get started with Level 1.
In Level 1, we will Create a Simple End-to-End CAPM App using HDI Container in SAP® Cloud Foundry from Scratch.

Regarding Prerequisites:

- Basic knowledge of NodeJS is required
- Basic knowledge of SAPUI5 is required
- Basic knowledge of CDS is required
