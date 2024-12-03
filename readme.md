# MTOGO - Exam Repository

![image](https://github.com/SoftDev2425/mtogo-exam-repo/blob/master/imgs/mtogo-platform.png?raw=true)

## **Contributors**

- **Andreas Fritzøger** (cph-af167@cphbusiness.dk) [GitHub](https://github.com/)
- **Owais Dashti** (cph-od42@cphusiness.dk) [GitHub](https://github.com/owaisad)

## Table of Contents

- [MTOGO - Exam Repository](#mtogo---exam-repository)
  - [**Contributors**](#contributors)
  - [Table of Contents](#table-of-contents)
  - [Setup project instructions](#setup-project-instructions)
  - [About](#about)
  - [Monolithic Legacy system](#monolithic-legacy-system)
  - [Microservices-based Modern System (+ repositories)](#microservices-based-modern-system--repositories)
    - [API Gateway](#api-gateway)
    - [Auth Service](#auth-service)
    - [Restaurant Service](#restaurant-service)
    - [Order Service](#order-service)
    - [Payment Service](#payment-service)
    - [Delivery Service](#delivery-service)
    - [Notification Service](#notification-service)
    - [Feedback Service](#feedback-service)
    - [Dashboard Service](#dashboard-service)
    - [MTOGO Proto Provider](#mtogo-proto-provider)
    - [MTOGO Client](#mtogo-client)
  - [Technology Stack](#technology-stack)
  - [Architecture \& Design](#architecture--design)
    - [Architecture diagram](#architecture-diagram)
    - [BPMN diagram](#bpmn-diagram)
    - [Domain model](#domain-model)
    - [Domain Driven Design (DDD) models](#domain-driven-design-ddd-models)
      - [Event Storming: Step 1 - Collecting Domain Events](#event-storming-step-1---collecting-domain-events)
      - [Event Storming: Step 2 - Refining Domain Events](#event-storming-step-2---refining-domain-events)
      - [Event Storming: Step 3 - Tracking Causes](#event-storming-step-3---tracking-causes)
      - [Event Storming: Step 4 - Finding aggregates and re-sorting them](#event-storming-step-4---finding-aggregates-and-re-sorting-them)
      - [Ubiquitous Language](#ubiquitous-language)
      - [Bounded Contexts visualized in the Context Map](#bounded-contexts-visualized-in-the-context-map)
    - [C4 Model](#c4-model)
      - [Level 1 - System Context Diagram](#level-1---system-context-diagram)
      - [Level 2 - System Container Diagram](#level-2---system-container-diagram)
      - [Level 3 - Component Diagram](#level-3---component-diagram)
    - [Testing](#testing)
  - [...](#)
  - [Development of services](#development-of-services)
  - [Continuous Integration / Continuous Deployment (CI/CD)](#continuous-integration--continuous-deployment-cicd)
  - [Application Monitoring](#application-monitoring)
  - [Postman API Documentation](#postman-api-documentation)
  - [Docker](#docker)

## Setup project instructions

1. Clone this repository

```bash
git clone https://github.com/SoftDev2425/mtogo-exam-repo.git
```

2. Create a `.env` file by copying the `.env.template` file:

```bash
  cp .env.template .env
```

3. Update the `.env` file with the necessary environment variables:

- `LOCATION_IQ_API_KEY` - API key for LocationIQ

  - Create an account on [LocationIQ](https://locationiq.com/). Genereate an access token in the dashboard and paste it as `LOCATION_IQ_API_KEY` in the `.env` file.

- `STRIPE_SECRET_KEY` - Secret key for Stripe

  - Sign up on [Stripe](https://stripe.com/). Go to Developers > API keys and copy the secret key. Paste it as `STRIPE_SECRET_KEY` in the `.env` file.

- `Ethereal Email Credentials` - Email address for sending emails
  - Sign up on [Ethereal Email](https://ethereal.email/). Copy the email and password and paste it in the `.env` file as `ETHEREAL_USER` and `ETHEREAL_PASSWORD`.

4. Make sure you have Docker Desktop running. Now start the application by running the `start.sh` script:

```bash
./start.sh
```

This will take a short moment to build the Docker images and start the containers. Once the containers are up and running, you can access the application at `http://localhost:3000` (API Gateway). Use Postman collection to test the endpoints.

## About

About the project + description for each exam.....

Find out a lot more in the Design and Development Specification document: https://docs.google.com/document/d/1stTdq9irwSUa2SVfKwYDESG2IQfOmqh0mN3Dapf9Sgg/edit?tab=t.0#heading=h.8n6vuq48b6vg

## Monolithic Legacy system

strangler pattern
Repository: https://github.com/SoftDev2425/mtogo-legacy

## Microservices-based Modern System (+ repositories)

<img src="https://github.com/SoftDev2425/mtogo-exam-repo/blob/master/imgs/arc_diagram.png?raw=true" alt="Microservices" width="100%"/>

list of microservices with explanation

### API Gateway

Repository: <a href="https://github.com/SoftDev2425/mtogo-api-gateway" target="_blank">mtogo-api-gateway</a>
<br >
express gateway
rate limiting
http-proxy
auth middleware

### Auth Service

Repository: <a href="https://github.com/SoftDev2425/mtogo-authservice" target="_blank">mtogo-authservice</a>

### Restaurant Service

Repository: <a href="https://github.com/SoftDev2425/mtogo-restaurantservice" target="_blank">mtogo-restaurantservice</a>

### Order Service

Repository: <a href="https://github.com/SoftDev2425/mtogo-orderservice" target="_blank">mtogo-orderservice</a>

### Payment Service

Repository: <a href="https://github.com/SoftDev2425/mtogo-paymentservice" target="_blank">mtogo-paymentservice</a>

### Delivery Service

Repository: <a href="https://github.com/SoftDev2425/mtogo-deliveryservice" target="_blank">mtogo-deliveryservice</a>

### Notification Service

Repository: <a href="https://github.com/SoftDev2425/mtogo-notificationservice" target="_blank">mtogo-notificationservice</a>

### Feedback Service

Repository: <a href="https://github.com/SoftDev2425/mtogo-feedbackservice" target="_blank">mtogo-feedbackservice</a>

### Dashboard Service

Repository: <a href="https://github.com/SoftDev2425/mtogo-dashboardservice" target="_blank">mtogo-dashboardservice</a>

### MTOGO Proto Provider

Repository: <a href="https://github.com/SoftDev2425/mtogo-proto-provider" target="_blank">mtogo-proto-provider</a>
npm package for proto files for grpc

### MTOGO Client

Repository: <a href="https://github.com/SoftDev2425/mtogo-client" target="_blank">mtogo-client</a>
SPA built with Vite React and TypeScript (available through docker at PORT XXXXXXXXXXX)

## Technology Stack

- Backend:
  - Most services: Node.js + TypeScript, Express, gRPC, Redis, PostgreSQL, Prisma ORM, express-gateway, express-http-proxy, Stripe, LocationIQ, Nodemailer, BullMQ, Docker, Winston for internal logging
  - Order Service: Maven + Java, Spring Boot, JPA, Hibernate, PostgreSQL, Docker
- Testing: Jest, Supertest, Postman
- Messaging: Kafka, Zookeeper, KafkaJS
- API Documentation: Postman
- CI/CD: GitHub Actions, Docker, Semantic Release, GitHub Container Registry
- Frontend: Vite React, Zod, Chakra UI, React Query, React Hook Form, Shadcn

- Node.js + TypeScript
- Maven ...
- Express
- Jest + Supertest
- Postman
- ...-.-.-

## Architecture & Design

### Architecture diagram

<img src="https://github.com/SoftDev2425/mtogo-exam-repo/blob/master/imgs/arc_diagram.png?raw=true" alt="Microservices" width="100%"/>

### BPMN diagram

<img src="https://github.com/SoftDev2425/mtogo-exam-repo/blob/master/imgs/customer-create-order-flow-bpmn.png?raw=true" target="_blank" alt="BPM" width="100%"/>

### Domain model

<img src="https://github.com/SoftDev2425/mtogo-exam-repo/blob/master/imgs/domain_model.png?raw=true" target="_blank" alt="BPM" width="100%"/>

### Domain Driven Design (DDD) models

Starting with Event Storming, we can identify the domain events and aggregate roots. This will help us to create the domain models and the C4 model. Strategic and tactical DDD will be used to design the microservices.

Strategic Design:

#### Event Storming: Step 1 - Collecting Domain Events

<img src="./imgs/event_storming/step1.png" alt="Event Storming: Step 1" width="100%"/>

#### Event Storming: Step 2 - Refining Domain Events

<img src="./imgs/event_storming/step2.png" alt="Event Storming: Step 2" width="100%"/>

#### Event Storming: Step 3 - Tracking Causes

<img src="./imgs/event_storming/step3.png" alt="Event Storming: Step 3" width="100%"/>

#### Event Storming: Step 4 - Finding aggregates and re-sorting them

<img src="./imgs/event_storming/step4.png" alt="Event Storming: Step 4" width="100%"/>

#### Ubiquitous Language

#### Bounded Contexts visualized in the Context Map

### C4 Model

#### Level 1 - System Context Diagram

#### Level 2 - System Container Diagram

#### Level 3 - Component Diagram

### Testing

## ...

...

./start.sh

## Development of services

```mermaid
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
    commit
```

pr.yml

building

## Continuous Integration / Continuous Deployment (CI/CD)

master.yml

building docker images

semantic release

## Application Monitoring

Coming soon:
Promehteus + Grafana

## Postman API Documentation

INSERT POSTMAN COLLECTION HERE + IMAGES

## Docker

These are the docker containers on the MTOGO platform. As a container orchestrator, we use docker compose. Our docker-compose.yml file can be found here [insert link here]
REFORMULATE THIS

FIX THE STRUCTURE OF THE DOCKER COMPOSE BEFORE INSERTING IMAGE
