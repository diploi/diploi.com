---
title: 'Starting a new Bun app on Diploi'
description: 'Explore how to create new Bun applications readily online, without any server config'
author: 'Javier'
timestamp: '2025-08-25T07:13:05.573Z'
# devtoUrl: ''
image: './hosting_bun_apps_cover.png'
social_image: './hosting_bun_apps_og.png'
draft: false
type: 'Guide'
---

Updated <time datetime="2025-10-28T11:06:05.000Z">October 28, 2025</time>

###### Getting started with Bun on Diploi

There are thousands of tutorials going over how to create a Bun app and then host it online. This is not that 😎

In this tutorial, we will show you how to completely skip any DevOps work that you usually need to put your apps online by using Diploi, so that you can create Bun applications that can be launched to production in seconds.

And yes, I'm not exaggerating.

---

## Table of contents

- [What you need](#what-you-need)
- [How to create an app with Bun](#how-to-create-an-app-with-bun)
- [Launching your Bun app to Production](#launching-your-bun-app-to-production)
- [Configuring a custom domain for your Bun app in Production](#configuring-a-custom-domain-for-your-bun-app-in-production)
- [Trying out Bun for the first time?](#trying-out-bun-for-the-first-time)
- [References](#references)

---

## What you need

- A **GitHub account**, sign up here if you don't have one yet, [https://github.com/signup](https://github.com/signup)
- A **Diploi account**, sign up for a free Diploi account at [https://console.diploi.com/](https://console.diploi.com/)

---

## How to create an app with Bun

1. In the Dashboard, click **Create Project +**
2. Under **Pick Components**, choose **Bun**
   You can add other frameworks from this page if you want to create a monorepo application, eg, Bun for API + React for frontend.
3. In **Pick Add-ons**, select any databases you need.
4. Choose **Create Repository**, which will generate a new GitHub repo.
5. Finally, click **Launch Stack**

This will create a new Project using Bun, which will also start a new Development environment for your Bun app.

You will be able to preview your Bun online, customize its URL, and even start coding in the browser using our built-in IDE, or by connecting remotely with SSH, using VS Code, Cursor, or any dev container-friendly IDE to start coding remotely from your desktop, without having to install anything locally.

---

## Launching your Bun app to Production

Once your Bun app is ready for Production, follow these steps to launch it:

1. Open your Bun Project’s dashboard:
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>`
2. Click **Create Deployment +**
3. Select **Production** as the deployment stage
4. Choose the **cluster size** depending on your needs
5. Pick the **source branch** you want to deploy from, such as `main`
6. Customize any necessary **environment variables**
7. Click **Create Deployment +**

This will create a new Production deployment for your Bun app.

---

## Configuring a custom domain for your Bun app in Production

By default, all applications built on Diploi use a `.diploi.me` URL. You can customize the subdomain, eg, `foo.diploi.me` to `foobar.diploi.me`, but if you want to switch to a fully custom domain, this is what you need to do:

1. Head to your Production Deployment’s **Options** tab, or go directly to:
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>/deployment/<YOUR_DEPLOYMENT_ID>/options`
2. In the **Endpoints** section, click to disable **Use Auto‑Generated Endpoints**
3. A field will appear showing your current Diploi subdomain, and a checkbox to enable a custom domain
4. Enable the checkbox and enter your custom domain name
5. Scroll down and click **Save Changes**
6. In your DNS settings, create a **CNAME** record pointing to **edge.diploi.com**

This change is usually instant, but it can take up to 30 minutes for DNS and SSL propagation to be completed.

---

## Trying out Bun for the first time?

Supposing you haven't ever used Bun, here's how to try it out without even running an `npm` command:

- Option 1: **Starting a trial without registering an account**

  Go to [https://diploi.com/#StackBuilder](https://diploi.com/#StackBuilder) to launch a trial project, or visit the Next.js component page [https://diploi.com/component/bun](https://diploi.com/component/bun)

- Option 2: **Starting a Quick Launch if you have an account on Diploi**

  Create a new project and in the **Repository** section, select **Quick Launch**. This gives you a temporary environment to explore Bun without connecting a repo.

---

What else should we add to Diploi? Message us on [Discord](https://discord.gg/vvgQxVjC8G)!

---

Sign up at [Diploi](https://diploi.com/) and get **50 € in free credits**.

---

## References

- https://bun.com/docs
- https://docs.diploi.com/
