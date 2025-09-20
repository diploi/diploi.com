---
title: 'Ship new React apps using Diploi and skip the server config'
description: 'Create your next React app using Diploi to skip any DevOps work and focus only on the code'
author: 'Javier'
timestamp: '2025-08-19T07:16:05.573Z'
# devtoUrl: ''
image: '/blog/hosting_react_apps/hosting_react_apps_cover.png'
social_image: 'https://diploi.com/blog/hosting_react_apps/hosting_react_apps_og.png'
draft: false
---

Updated <time datetime="2025-09-20T15:20:05.000Z">September 20, 2025</time>

###### Getting started with React on Diploi

React is one of the most used and fastest ways to build modern web frontends, and with Diploi, you can host your new React apps faster than with any other hosting service.

In this guide, you’ll learn how to launch a fresh React app, using Vite as the default bundler for your app. Using Diploi, your app will be live online in seconds, and best of all, without creating YAML files or doing any server config work.

---

## Table of contents

- [What you need](#what-you-need)
- [How to create an app with React + Vite](#how-to-create-an-app-with-react--vite)
- [Launching your React+Vite app to Production](#launching-your-reactvite-app-to-production)
- [Configuring a custom domain for your React + Vite app in Production](#configuring-a-custom-domain-for-your-react--vite-app-in-production)
- [Trying out React with Vite for the first time?](#trying-out-react-with-vite-for-the-first-time)
- [References](#references)

---

## What you need

* A **GitHub account** - No account? Click here > [https://github.com/signup](https://github.com/signup)
* A **Diploi account** - Need one? Click here > [https://console.diploi.com/](https://console.diploi.com/)

---

## How to create an app with React + Vite

1. In the Dashboard, click **Create Project +**
2. Under **Pick Components**, choose **React + Vite**. Here you can also add a backend framework to create a monorepo app, eg, React+Vite for frontend and Hono for backend
3. In **Pick Add-ons**, you can add one or multiple databases to your app
4. Choose **Create Repository** to generate a new GitHub repo
5. Finally, click **Launch Stack**

You’ve now got a new React+Vite project running on Diploi. By default, every new project starts with a fresh Development deployment.

Under the hood, Diploi uses Kubernetes to spin up the infrastructure for your deployment. Think of it like having a virtual machine dedicated to running your React + Vite app and serving it online over an SSL-protected URL.

You can start coding right away without touching your local machine by using Diploi’s browser IDE, or connecting your local code editor directly to the remote development environment, without `git clone` or `npm install` to get started coding.

---

## Launching your React+Vite app to Production

When you are ready to launch your app to Production, follow these steps to start a Production deployment:

1. Open your React-Vite Project’s dashboard:
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>`
2. Click **Create Deployment +**
3. Select **Production** as the deployment stage
4. Choose the **cluster size** depending on your needs
5. Select the **source branch** you want to deploy from, such as `main`
6. Customize any necessary **environment variables**
7. Click **Create Deployment +**

That's all it takes to get your app on Production. Let's now talk about how you can customize your deployment's domain.

---

## Configuring a custom domain for your React + Vite app in Production

When you launch a new deployment, Diploi automatically creates an SSL-protected URL that ends in `.diploi.me`. To instead use a custom domain, you need to do the following:

1. Go to the **Options** tab, which you can find by navigating to the dashboard of the Deployment. The URL will look something like:
 ```
 https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>/deployment/<YOUR_DEPLOYMENT_ID>/options
 ```
2. Scroll to the **Endpoints** section and turn off **Use Auto-Generated Endpoints**
3. You’ll now see a field showing your current deployment subdomain. Check **Use custom domain**, then type in the domain name you want to use
4. Scroll to the bottom and click **Save Changes**
5. In your domain provider’s DNS settings, create a **CNAME** record that points your domain to:
 ```
 edge.diploi.com
 ```

✅ **Done!**

This update will take effect instantly, but allow up to 30 minutes for DNS and SSL propagation.

---

## Trying out React with Vite for the first time?

If this is your first time trying React + Vite, you might not want to bother with all the usual setup and configuration. With Diploi, you can skip the boring parts and jump straight into coding, so no local install is required. You’ve got two easy options using Diploi:

**Option 1 – Start a trial without an account**
   
   Head to [https://diploi.com/#StackBuilder](https://diploi.com/#StackBuilder) to launch a trial project instantly. You can also go directly to the React + Vite component page:
   [https://diploi.com/component/react-vite](https://diploi.com/component/react-vite)

**Option 2 – Quick Launch with a Diploi account**

   If you already have an account, create a new project and in the **Repository** section choose **Quick Launch**. This gives you a temporary environment to experiment with React + Vite without connecting a repo.

---

Now you know the easiest way to take a new React + Vite app from first commit to production, and the best part is that **no DevOps required**. If you want to get involved with Diploi, join our [Discord](https://discord.gg/vvgQxVjC8G). We’d love to hear from you! 🙂

---

Sign up for [Diploi](https://console.diploi.com/) for free and get €50 in credits to launch your React + Vite projects.

---

## References

- https://vite.dev/guide/
- https://react.dev/reference/react
- https://docs.diploi.com/
