# Prometheus initialization

First helm should be installed. To install:
```bash
brew install helm
```

To install prometheus example chart with helm:
```
 helm install prometheus stable/prometheus --namespace monitoring --dry-run   
```

After that, prometheus pods should be created. To export them to Grafana, firstly grafana should be created. For Grafana deployments run the following commands:
```
kubectl apply -f grafana-deployment.yml -n <NAMESPACE>

kubectl create secret generic grafana-creds \
  --from-literal=GF_SECURITY_ADMIN_USER=admin \
  --from-literal=GF_SECURITY_ADMIN_PASSWORD=admin1234

kubectl expose deployment grafana --type=LoadBalancer --port=3000 --target-port=3000 --protocol=TCP
```