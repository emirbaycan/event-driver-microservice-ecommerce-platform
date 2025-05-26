# 🛒 Event-Driven Microservices E-Commerce Platform

A production-grade, distributed e-commerce application built using event-driven microservices architecture. Technologies include Go (Golang), Next.js (React), PostgreSQL, RabbitMQ, gRPC, and Docker.

---

## 📦 Repository Structure

```
.
├── apps/
│   ├── api-gtw/           # API Gateway (Golang)
│   ├── customer-svc/      # Customer microservice (Golang)
│   ├── order-svc/         # Order microservice (Golang)
│   ├── payment-svc/       # Payment microservice (Golang)
│   ├── product-svc/       # Product microservice (Golang)
│   └── web-ui/            # Frontend (Next.js + Tailwind CSS)
├── configs/               # SQL init files & configs
├── docs/                  # Project documentation & diagrams
├── packages/              # Shared Go code for microservices
├── scripts/               # DevOps and utility scripts
├── docker-compose.yml     # Full-stack Docker Compose (local/dev)
└── LICENSE
```

---

## 🚀 Features

* **Domain-driven microservices** with separate databases (PostgreSQL)
* **RabbitMQ** for async messaging & event-driven workflows
* **gRPC** communication between API Gateway and microservices
* **API Gateway** for secure, unified access and service discovery
* **Next.js frontend** with modern, responsive UI (SSR ready)
* **Full Docker support** for local dev and production
* Modular, ready for horizontal scaling and cloud deployment

---

## ⚡ Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/youruser/yourrepo.git
cd yourrepo
```

### 2. Configure Environment

* Copy `.env.example` to `.env` in each service directory (e.g., `apps/api-gtw/`, etc.)
* Edit connection strings, secrets, and hostnames as needed (see `.env.example` files).

### 3. Run All Services with Docker Compose

```bash
docker-compose up --build
```

> All microservices, RabbitMQ, PostgreSQL databases, API Gateway, and frontend will start.

---

## 🏗️ Microservices Overview

| Service       | Description                                  | Language | Port  | Dockerfile         |
| ------------- | -------------------------------------------- | -------- | ----- | ------------------ |
| API Gateway   | gRPC/HTTP API Gateway, routing, auth         | Go       | 8080  | apps/api-gtw/      |
| Customer SVC  | Customer registration & management           | Go       | 50051 | apps/customer-svc/ |
| Product SVC   | Product catalog, CRUD                        | Go       | 50050 | apps/product-svc/  |
| Order SVC     | Order creation, listing, and processing      | Go       | 50052 | apps/order-svc/    |
| Payment SVC   | Payment processing, integrates with RabbitMQ | Go       | 50053 | apps/payment-svc/  |
| Frontend (UI) | Next.js, user/customer SPA                   | TS/React | 3000  | apps/web-ui/       |

* **Each microservice** has its own Dockerfile and can run independently.

---

## 🔗 Service-to-Service Communication

* **Frontend** ⇄ **API Gateway**: HTTP (REST)
* **API Gateway** ⇄ **Microservices**: gRPC
* **Order SVC** ⇄ **Payment SVC**: RabbitMQ (AMQP events)
* **Each SVC** ⇄ **Own PostgreSQL DB**: Isolated data per service

---

## 🗄️ Example .env for API Gateway

```env
PORT=8080
GRPC_HOST_PRODUCT_SVC=product-svc:50050
GRPC_HOST_CUSTOMER_SVC=customer-svc:50051
GRPC_HOST_ORDER_SVC=order-svc:50052
```

Update these for your domain if deploying in production.

---

## 🐳 Example: Running a Single Service

Each microservice can be run standalone, for example:

```bash
cd apps/order-svc
docker-compose up --build
```

> Update `DATABASE_URL` and service hostnames as needed.

---

## 🌍 Deployment & Scaling

* Designed for **cloud-native**: Deploy services to separate servers/domains (e.g. order-svc.domain.com).
* Add more replicas (horizontal scaling) by increasing service count in Compose, or using Kubernetes.
* Use external managed PostgreSQL and RabbitMQ for HA/DR.

---

## 📸 Diagrams & Screenshots

See `docs/` for system diagrams and UI screenshots.

---

## 👤 Author

* **Emir Baycan**
  [emirbaycan.com.tr](https://emirbaycan.com.tr)

---

## 📄 License

MIT License (see LICENSE file).

---

## 🤝 Contributing

Pull requests are welcome! Open an issue for feedback or questions.

---

> **Professional, modular, production-ready. Use this as your reference architecture for modern, scalable e-commerce platforms.**
