# DevOps Microservice Pipeline

This project demonstrates a full DevOps CI/CD setup with microservices.

## Features
- Node.js API + React frontend
- Dockerized and Kubernetes-ready
- GitHub Actions for CI/CD
- Prometheus + Grafana monitoring
- GitOps with ArgoCD
- Optional AWS IaC with Terraform

## Getting Started

### Prerequisites
- Docker
- Minikube / K8s Cluster
- Helm (optional)
- Node.js (for local dev)

### Local Dev
```bash
docker-compose up --build
```

### Kubernetes Deployment
```bash
kubectl apply -f k8s/
```

### CI/CD
- Push to `main` triggers GitHub Actions for build & deploy

## Monitoring
Prometheus + Grafana stack provided under `prometheus-grafana/`

## GitOps
Integrate with ArgoCD using this repo as source.

## License
MIT
