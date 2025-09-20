---
title: 'Create Astro apps quickly, from Development to Production on Diploi'
description: 'Bring the versatility of platforms like Heroku to your Astro development workflow'
author: 'Javier'
timestamp: '2025-08-26T07:11:05.573Z'
# devtoUrl: ''
image: '/blog/hosting_astro_apps/hosting_astro_apps_cover.png'
social_image: 'https://diploi.com/blog/hosting_astro_apps/hosting_astro_apps_og.png'
draft: false
---

Updated <time datetime="2025-09-20T15:02:05.000Z">September 20, 2025</time>

###### Getting started with Astro apps, the easy way

You can start an Astro project in several ways, by using the official CLI, grabbing a community starter from GitHub, or wiring up your own config, but if you're looking for the **fastest and smoothest way**, Diploi makes it ridiculously easy.

---

## Table of contents

- [What you need](#what-you-need)
- [How to create an app with Astro](#how-to-create-an-app-with-astro)
- [Launching your Astro app to Production](#launching-your-astro-app-to-production)
- [Configuring a custom domain for your Astro site in Production](#configuring-a-custom-domain-for-your-astro-site-in-production)
- [Trying out Astro for the first time?](#trying-out-astro-for-the-first-time)
- [References](#references)

---

## What you need

* A GitHub account, sign up here if you don't have one yet: [https://github.com/signup](https://github.com/signup)

---

## How to create an app with Astro

1. **Sign up** for a free Diploi account at [https://console.diploi.com/](https://console.diploi.com/)
2. In the Dashboard, click **Create Project +**
3. Under **Pick Components**, choose **Astro**
   You can also add additional tools or services here if you want to extend your stack.
4. In **Pick Add-ons**, select any databases or extra tools you need.
5. Choose **Create Repository** so Diploi generates a brand new GitHub repo for your project.
6. Click **Launch Stack**

Diploi will spin up a full Development environment in the cloud where you can:

* Preview your Astro site live instantly
* Code directly in the browser using the built-in IDE
* Or connect remotely via SSH using VS Code, Cursor, or any dev container–friendly IDE

---

## Launching your Astro app to Production

When you’re ready to go live:

1. Open your Astro Project’s dashboard:
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>`
2. Click **Create Deployment +**
3. Select **Production** as the deployment stage
4. Choose the **cluster size** depending on your needs
5. Pick the **source branch** you want to deploy, such as `main`
6. Customize any necessary **environment variables**
7. Click **Create Deployment +**

Your Astro site is now fully deployed and ready to scale!

---

## Configuring a custom domain for your Astro site in Production

By default, your site will use a `.diploi.me` URL. To switch to a custom domain:

1. Head to your Production Deployment’s **Options** tab, or go directly to:
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>/deployment/<YOUR_DEPLOYMENT_ID>/options`
2. In the **Endpoints** section, click to disable **Use Auto‑Generated Endpoints**
3. A field will appear showing your current Diploi subdomain, and a checkbox to enable a custom domain
4. Enable the checkbox and enter your custom domain name
5. Scroll down and click **Save Changes**
6. In your DNS settings, create a **CNAME** record pointing to **edge.diploi.com**

Give it up to 30 minutes for DNS and SSL propagation to complete.

---

## Trying out Astro for the first time?

You don’t need to install anything, just try Astro in the cloud on Diploi in two simple ways:

* **Not signed up yet?**
  Head to [https://diploi.com/#StackBuilder](https://diploi.com/#StackBuilder) to launch a trial project, or go straight to the Astro component page:
  [https://diploi.com/component/astro](https://diploi.com/component/astro)

* **Already have a Diploi account?**
  Create a new project and in the **Repository** section, select **Quick Launch**. This gives you a temporary environment to explore Astro without connecting a repo.

---

Want to see other frameworks supported on Diploi? Let us know on [Discord](https://discord.gg/vvgQxVjC8G)!

---

Sign up at [Diploi](https://diploi.com/) and get **50 € in free credits**.

---

## References

- https://docs.astro.build/en/getting-started/
- https://docs.diploi.com/
