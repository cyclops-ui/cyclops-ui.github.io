# Install

⚠️ Before installing Cyclops, make sure you have all the [prerequisites](./prerequisites) ⚠️

To install Cyclops in your cluster, run commands below:

```bash
kubectl create namespace cyclops
kubectl apply -f https://raw.githubusercontent.com/cyclops-ui/cyclops/main/install/cyclops-install.yaml
```

It will create a new namespace called `cyclops` and deploy everything you need for your Cyclops instance to run.

Now all that is left is to expose Cyclops server outside the cluster. You can do it using:

```bash
kubectl port-forward svc/cyclops 8080:8080
```

You can now try to access Cyclops in your browser on [http://localhost:8080](http://localhost:8080).
