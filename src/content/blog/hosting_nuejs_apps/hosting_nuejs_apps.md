---
title: 'Start new apps with Nuejs quickly on Diploi'
description: 'Learn how to create new Nuejs apps easily and host them online without struggling with server config'
author: 'Javier'
timestamp: '2025-08-20T08:11:05.573Z'
# devtoUrl: ''
image: './hosting_nuejs_apps_cover.png'
social_image: './hosting_nuejs_apps_og.png'
draft: false
type: 'Guide'
---

Updated <time datetime="2025-10-28T11:16:05.000Z">October 28, 2025</time>

###### Getting started with Nue.js apps, the easy way

There are plenty of ways to kick off a Nue.js application, cloning a template from a repo, running `nue create simple-blog`, or rolling your own boilerplate from scratch, but today I’m showing you the absolute easiest approach using Diploi.

---

## Table of contents

- [What you need](#what-you-need)
- [How to create an app with Nue.js](#how-to-create-an-app-with-nuejs)
- [Launching your Nue.js app to Production](#launching-your-nuejs-app-to-production)
- [Configuring a custom domain for your Nue.js application in Production](#configuring-a-custom-domain-for-your-nuejs-application-in-production)
- [Trying out Nue.js for the first time?](#trying-out-nuejs-for-the-first-time)
- [References](#references)

---

## What you need

- A GitHub account. If you don’t have one yet, sign up here: [https://github.com/signup](https://github.com/signup)

---

## How to create an app with Nue.js

1. **Sign up** for a free Diploi account at [https://console.diploi.com/](https://console.diploi.com/)
2. In your Dashboard, click **Create Project +**.
3. Under **Pick Components**, choose **Nue.js**.
   You can also add databases or other frameworks, to your Nue.js stack here.
4. In **Pick Add‑ons**, select any services your app needs (e.g., PostgreSQL, Redis, or MongoDB).
5. Choose **Create Repository** to start from a fresh GitHub repo.
6. Click **Launch Stack**.

Diploi will provision a full development environment for your Nue.js app. You’ll be able to:

- Preview your app live in the browser.
- Edit code directly via the Browser IDE.
- Connect over SSH for remote development with VS Code, WebStorm, or any IDE that supports SSH and dev containers.

---

## Launching your Nue.js app to Production

When your app is ready for real‑world traffic, follow these simple steps:

1. Navigate to your Nue.js Project’s dashboard at
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>`
2. Click **Create Deployment +**.
3. Select **Production** as the stage.
4. Pick the **cluster size** that matches your expected load.
5. Choose the **source branch** (e.g., `main`).
6. Configure any **environment variables** your app requires.
7. Hit **Create Deployment +**.

Your Nue.js application will be live, and ready to serve users!

---

## Configuring a custom domain for your Nue.js application in Production

By default, your production deployment uses a `.diploi.me` domain. To swap in your own:

1. On your Production Deployment’s **Options** tab (or via
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>/deployment/<YOUR_DEPLOYMENT_ID>/options`), find **Endpoints**.
2. Click **Use Auto‑Generated Endpoints** to disable it.
3. An input field will appear showing your `.diploi.me` URL plus a checkbox for **Custom Domain**. Enable that checkbox and enter your domain.
4. Scroll down and click **Save Changes**.
5. In your DNS provider’s dashboard, create a **CNAME** record pointing your domain to **edge.diploi.com**.

It can take up to 30 minutes for DNS propagation and SSL certificate to be ready.

---

## Trying out Nue.js for the first time?

Diploi lets you test Nue.js without installing anything locally. Two ways to spin up a sandbox:

- **Not yet on Diploi?**
  Launch a free trial from the Diploi Stack Builder:
  [https://diploi.com/#StackBuilder](https://diploi.com/#StackBuilder)
  or go straight to the Nue.js component page:
  [https://diploi.com/component/nue](https://diploi.com/component/nue)

- **Already a Diploi user?**
  Create a new project, then under **Repository** select **Quick Launch**, you’ll get a throwaway environment preconfigured with Nue.js and any add‑ons you choose, no Git repo required.

---

Are there other frameworks or languages you’d like us to support? Let us know on [Discord](https://discord.gg/vvgQxVjC8G)!

---

Register at [Diploi](https://diploi.com/) and get **50 € in free credits**.

---

## References

- https://svelte.dev/docs/kit/introduction
- https://docs.diploi.com/
