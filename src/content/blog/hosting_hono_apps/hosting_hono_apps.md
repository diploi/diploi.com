---
title: 'How to create Hono apps that are ready for Production using Diploi'
description: 'Make your Hono development as seamless as deploying on Heroku'
author: 'Javier'
timestamp: '2025-08-23T07:11:05.573Z'
# devtoUrl: ''
image: './hosting_hono_apps_cover.png'
social_image: './hosting_hono_apps_og.png'
draft: false
type: 'Guide'
---

Updated <time datetime="2025-10-28T11:11:05.000Z">October 28, 2025</time>

###### Getting started with Hono, but in easy-mode

You probably know how to start a new Hono app just using `npm create hono@latest`, for example, but this guide is not about that. Here we'll show you how to get your new Hono app online in record time.

---

## Table of contents

- [What you need](#what-you-need)
- [How to create an app with Hono](#how-to-create-an-app-with-hono)
- [Launching your Hono app to Production](#launching-your-hono-app-to-production)
- [Configuring a custom domain for your Hono app in Production](#configuring-a-custom-domain-for-your-hono-app-in-production)
- [Trying out Hono for the first time?](#trying-out-hono-for-the-first-time)
- [References](#references)

---

## What you need

- A GitHub account, sign up here if you don't have one yet: [https://github.com/signup](https://github.com/signup)
- A Diploi account, sign up for a free Diploi account at [https://console.diploi.com/](https://console.diploi.com/)

---

## How to create an app with Hono

1. **Sign up** for a free Diploi account at [https://console.diploi.com/](https://console.diploi.com/)
2. In the Dashboard, click **Create Project +**
3. Under **Pick Components**, choose **Hono**
   You can add other frameworks from this page.
4. In **Pick Add-ons**, select any databases or extra tools you need.
5. Choose **Create Repository** so Diploi generates a new GitHub repo for your project.
6. Click **Launch Stack**

Diploi then starts a Development environment for your new Hono app, from which you can:

- Preview your Hono endpoints live instantly
- Code directly in the browser using the built-in IDE
- Or connect remotely via SSH using VS Code, Cursor, or any dev container-friendly IDE

---

## Launching your Hono app to Production

When your Hono app is ready for Production, follow these steps to start a Production deployment:

1. Open your Hono Project’s dashboard:
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>`
2. Click **Create Deployment +**
3. Select **Production** as the deployment stage
4. Choose the **cluster size** depending on your needs
5. Pick the **source branch** you want to deploy from, such as `main`
6. Customize any necessary **environment variables**
7. Click **Create Deployment +**

Your Hono app will now be deployed in Production mode!

---

## Configuring a custom domain for your Hono app in Production

By default, your app will use a `.diploi.me` URL, for which you can customize its subdomain, but if you want to switch to a fully custom domain:

1. Head to your Production Deployment’s **Options** tab, or go directly to:
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>/deployment/<YOUR_DEPLOYMENT_ID>/options`
2. In the **Endpoints** section, click to disable **Use Auto‑Generated Endpoints**
3. A field will appear showing your current Diploi subdomain, and a checkbox to enable a custom domain
4. Enable the checkbox and enter your custom domain name
5. Scroll down and click **Save Changes**
6. In your DNS settings, create a **CNAME** record pointing to **edge.diploi.com**

The change can be instant, but in some cases, it can take up to 30 minutes for DNS and SSL propagation to complete.

---

## Trying out Hono for the first time?

You don’t want to run anything locally, and you just want to try Hono, you can do it in the cloud using Diploi in one of these two ways:

- **Starting a trial without registering an account**

  Head to [https://diploi.com/#StackBuilder](https://diploi.com/#StackBuilder) to launch a trial project, or go straight to the Hono component page:
  [https://diploi.com/component/hono](https://diploi.com/component/hono)

- **Starting a Quick Launch if you have an account on Diploi**
  Create a new project and in the **Repository** section, select **Quick Launch**. This gives you a temporary environment to explore Hono without connecting a repo.

---

Want to see other frameworks supported on Diploi? Let us know on [Discord](https://discord.gg/vvgQxVjC8G)!

---

Sign up at [Diploi](https://diploi.com/) and get **50 € in free credits**.

---

## References

- https://hono.dev/docs/
- https://docs.diploi.com/
