<img width="25%" alt="Screenshot 2022-04-03 at 21 48 18" src="https://user-images.githubusercontent.com/72022639/162230553-e669e572-1346-4289-814b-bd23d5b2d100.png">

# cyclops

Cyclops is a Kubernetes cluster management tool. It provides you with a handy UI that helps you manage your applications
inside the cluster and makes it easier for you to track your cluster's state. Once installed, cyclops
will allow you to deploy, edit, scale, rollback, and delete all types of resources Kubernetes has to offer. While
making actions on your cluster easier, it helps you with the observability of
your cluster and applications by grouping meaningful resources and enabling you to observe all applications resources at
once.

The main benefit of using cyclops is for your engineers not to maintain their application's configurations through the Helm
templates, kustomize, or raw Kubernetes manifests, but to give them a UI they can use to alter their applications.

The intended flow of using cyclops is defining an application template that will be used as a form that contains fields
needed for the application to work as expected.

A cyclops template contains a Helm template and fields needed to populate that template. Now you are probably asking how
is this better than just using Helm templates in the first place. When using cyclops you can define that Helm template
and its fields only once and it can be done by one person, instead of making your engineers get familiar with Helm and
Kubernetes. Engineers using your template to deploy their applications will only have an HTML form where they easily
just populate fields that were already configured. Let's look at an example.

Let's say your team needs to deploy multiple REST APIs with similar configurations. That sounds like a great use case
for some already well-known templating tools like Helm. Unfortunately, engineers in your team come from different
backgrounds, and making them learn ins and outs of Kubernetes might be time consuming. Instead, you
define a cyclops template that suits all of their services by defining fields they will be able to edit and a Helm
template those fields values will be injected to.

<p float="left">
<img width="45%" alt="Screenshot 2022-04-03 at 21 48 18" src="https://user-images.githubusercontent.com/72022639/161443376-f980ebee-0537-4a8a-9a38-18387c114ec4.png">
<img width="45%" alt="Screenshot 2022-04-03 at 21 48 30" src="https://user-images.githubusercontent.com/72022639/161443377-b3935a98-ac3d-41dc-9a51-285f51259627.png">
</p>

Now, your engineers can deploy their services by filling out an HTML form rendered based on the configuration you
defined.

<img width="60%" alt="Screenshot 2022-04-03 at 22 00 13" src="https://user-images.githubusercontent.com/72022639/161443742-2e491ebd-1899-4d6e-b547-8a51b6ea4b2d.png">

After deploying a service this way, it is possible to edit it by using the same form, only this time it is
prepopulated with the values cyclops found in the live deployment running inside your cluster.

![Screenshot 2022-04-06 at 20 26 17](https://user-images.githubusercontent.com/72022639/162033638-845b5f2c-f1df-4e17-b2fc-ba4ab318f887.png)

# Usage
Checkout currently deployed applications in your cluster. Browse through multiple namespaces at once. To deploy
a new service fill out the predefined form and hit OK. Cyclops will create a YAML definition of your K8s resource that
you can later edit. If everything went smoothly you will be able to checkout details of your application through cyclops.

Once you have your application up and running, you will eventually want to make changes to your applications. You can do
that easily through the same form you edited when deploying it for the first time. Once you think you are ready with a
new version hit OK and watch your change rollout.



And finally, you might want to delete a deployment. Feel free to do it through Cyclops.

# Open questions

* Initial version supporting only deployments observability
* Better handling of cyclops annotations
* Error handling
* Customizable details page
* Kubernetes CRD enabling you to group whichever resources you want https://github.com/petar-cvit/cyclops/blob/main/install/cyclops-module.yaml
