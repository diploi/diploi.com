---
title: 'Creating ready-for-Production Next.js apps using Diploi'
description: 'Launching Next.js faster than using Vercel and with support for monorepo apps'
author: 'Javier'
timestamp: '2025-08-22T07:12:05.573Z'
# devtoUrl: ''
image: './hosting_nextjs_apps_cover.png'
social_image: './hosting_nextjs_apps_og.png'
draft: false
type: 'Guide'
---

Updated <time datetime="2025-10-28T11:14:05.000Z">October 28, 2025</time>

###### Getting started with Next.js, without Vercel

If you have used Next.js, I'm sure you will be familiar with Vercel. For the most part, Vercel provides a good hosting service, but if you need to use Next.js along with other frameworks on a monorepo, then it is not so good, but Diploi is 😌

In this post, we'll go over how to create production-ready Next.js apps, with a great deployment experience and support for complex monorepo apps.

---

## Table of contents

- [What you need](#what-you-need)
- [How to create an app with Next.js](#how-to-create-an-app-with-nextjs)
- [Launching your Next.js app to Production](#launching-your-nextjs-app-to-production)
- [Configuring a custom domain for your Next.js app in Production](#configuring-a-custom-domain-for-your-nextjs-app-in-production)
- [Trying out Next.js for the first time?](#trying-out-nextjs-for-the-first-time)
- [References](#references)

---

## What you need

- A **GitHub account**, sign up here if you don't have one yet, [https://github.com/signup](https://github.com/signup)
- A **Diploi account**, sign up for a free Diploi account at [https://console.diploi.com/](https://console.diploi.com/)

---

## How to create an app with Next.js

1. In the Dashboard, click **Create Project +**
2. Under **Pick Components**, choose **Next.js**

   You can add other frameworks from this page if you want to create a monorepo application, eg, Next.js + Bun for backend.

3. In **Pick Add-ons**, select any databases or extra tools you need.
4. Choose **Create Repository** so Diploi generates a new GitHub repo for your project.
5. Click **Launch Stack**

This will create a new Project, and by default starts a new Development environment for your Next.js app, once it is ready you will be able to preview your Next.js online, and you can start coding directly in the browser using our built-in IDE, or by connecting remotely via SSH using VS Code, Cursor, or any dev container-friendly IDE.

---

## Launching your Next.js app to Production

When your Next.js app is ready, you can start a Production deployment by following these steps:

1. Open your Next.js Project’s dashboard:
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>`
2. Click **Create Deployment +**
3. Select **Production** as the deployment stage
4. Choose the **cluster size** depending on your needs
5. Pick the **source branch** you want to deploy from, such as `main`
6. Customize any necessary **environment variables**
7. Click **Create Deployment +**

Now your Next.js app will be deployed in Production and ready to serve users.

---

## Configuring a custom domain for your Next.js app in Production

By default, your app will use a `.diploi.me` URL, for which you can customize its subdomain, but if you want to switch to a fully custom domain:

1. Head to your Production Deployment’s **Options** tab, or go directly to:
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>/deployment/<YOUR_DEPLOYMENT_ID>/options`
2. In the **Endpoints** section, click to disable **Use Auto‑Generated Endpoints**
3. A field will appear showing your current Diploi subdomain, and a checkbox to enable a custom domain
4. Enable the checkbox and enter your custom domain name
5. Scroll down and click **Save Changes**
6. In your DNS settings, create a **CNAME** record pointing to **edge.diploi.com**

The change is usually instant, but sometimes it can take up to 30 minutes for DNS and SSL propagation to complete.

---

## Trying out Next.js for the first time?

If you want to try Next.js without having to run a single `npm` command, you can do it using Diploi by either:

- **Starting a trial without registering an account**

  Go to [https://diploi.com/#StackBuilder](https://diploi.com/#StackBuilder) to launch a trial project, or visit the Next.js component page [https://diploi.com/component/next](https://diploi.com/component/next)

- **Starting a Quick Launch if you have an account on Diploi**

  Create a new project and in the **Repository** section, select **Quick Launch**. This gives you a temporary environment to explore Next.js without connecting a repo.

---

What other frameworks, databases, or services should we support next on Diploi? Let us know on [Discord](https://discord.gg/vvgQxVjC8G)!

---

Sign up at [Diploi](https://diploi.com/) and get **50 € in free credits**.

---

## References

- https://nextjs.org/docs
- https://docs.diploi.com/
