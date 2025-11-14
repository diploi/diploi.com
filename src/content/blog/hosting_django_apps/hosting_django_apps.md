---
title: 'The best way to start new Django apps and host them online'
description: 'Use Django on Diploi to skip server config and focus only on the code, no DevOps'
author: 'Javier'
timestamp: '2025-08-24T07:15:05.573Z'
# devtoUrl: ''
image: './hosting_django_apps_cover.png'
social_image: './hosting_django_apps_og.png'
draft: false
type: 'Guide'
---

Updated <time datetime="2025-10-28T11:08:05.000Z">October 28, 2025</time>

###### Getting started with Django on Diploi

Django is a huge part of the web, and there are many options for getting a Django app online, but Diploi might be the easiest one out there.

In this guide, I’ll walk you through spinning up a brand-new Django app on Diploi, which will be live on the internet from the moment you create it. No YAML files or boring server setup screens, just code and go.

---

## Table of contents

- [What you need](#what-you-need)
- [How to create an app with Django](#how-to-create-an-app-with-django)
- [Launching your Django app to Production](#launching-your-django-app-to-production)
- [Configuring a custom domain for your Django app in Production](#configuring-a-custom-domain-for-your-django-app-in-production)
- [Trying out Django for the first time?](#trying-out-django-for-the-first-time)
- [References](#references)

---

## What you need

- A **GitHub account** - [https://github.com/signup](https://github.com/signup)
- A **Diploi account** - [https://console.diploi.com/](https://console.diploi.com/)

---

## How to create an app with Django

1. In the Dashboard, click **Create Project +**
2. Under **Pick Components**, choose **Django**
3. In **Pick Add-ons**, you can add one or multiple databases to your app
4. Choose **Create Repository**, which will generate a new GitHub repo
5. Now click **Launch Stack**

That's it! This process has now created a new Project with Django. By default, all new Projects on Diploi start with a fresh Development deployment.

In Diploi, we use Kubernetes to generate the deployment's infrastructure, which consists of a core, but for simplicity, you can think of a deployment as being the same as a virtual machine.

The Development deployment that was just created represents a VM that is hosting your Django app, which is exposing your app online with an SSL-protected URL.

Additionally, you can skip configuring anything locally to start coding on your new Django app by using Diploi's browser IDE, or if you prefer to use your local IDE, you can connect to the remote development environment directly, without `git clone` or `pip install` on your local machine.

---

## Launching your Django app to Production

Once your app is ready for Production, from Diploi, you can launch new deployments easily, without server config work. Here's how:

1. Open your Django Project’s dashboard:
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>`
2. Click **Create Deployment +**
3. Select **Production** as the deployment stage
4. Choose the **cluster size** depending on your needs
5. Select the **source branch** you want to deploy from, such as `main`
6. Customize any necessary **environment variables**
7. Click **Create Deployment +**

This will create a new Production deployment for your Django app, ready to serve users.

---

## Configuring a custom domain for your Django app in Production

Any deployment created will be launched with a generic SSL-protected `.diploi.me` URL to expose your app online, but probably you would like to use a custom domain instead. To add a custom domain, do the following:

1. Navigate to the **Options** tab of the Deployment you want to assign a custom domain to. The URL should look like this:
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>/deployment/<YOUR_DEPLOYMENT_ID>/options`
2. Once you are in the **Options** tab, scroll down to the **Endpoints** section and disable the **Use Auto‑Generated Endpoints** option
3. An input field will now appear showing your current deployment's subdomain, and below it, you will notice a checkbox labeled **Use custom domain**. Enable the checkbox, and now you can enter the new custom domain name you want to use
4. Once you are done, scroll down on the page and click **Save Changes**56. In the DNS settings for your Domain, you need to create a new **CNAME** record pointing to **edge.diploi.com**

When you use a custom domain, the update usually happens instantly, but it can take up to 30 minutes for DNS and SSL propagation to be completed.

---

## Trying out Django for the first time?

In case this is your first time exploring Django and how it works, you might want to skip any config work usually required to get started. With Diploi, you can skip all the boring config work and jump straight to test-drive Django without having to install anything locally in two ways:

- Option 1 - **Starting a trial without registering an account**

  Go to [https://diploi.com/#StackBuilder](https://diploi.com/#StackBuilder) to launch a trial project, or visit the Next.js component page [https://diploi.com/component/django](https://diploi.com/component/django)

- Option 2 - **Starting a Quick Launch Project if you have an account on Diploi**

  Create a new project and in the **Repository** section, select **Quick Launch**. This gives you a temporary environment to explore Django without connecting to a repo.

---

Now you know the easiest way to launch new Django apps from start to production, without doing any DevOps work. If you would like to get involved with Diploi, join our [Discord](https://discord.gg/vvgQxVjC8G). We would like to hear from you 🙂‍↕️

---

Sign up [Diploi](https://console.diploi.com/) for free and receive **50 € in free credits**.

---

## References

- https://docs.djangoproject.com/
- https://docs.diploi.com/
