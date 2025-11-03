---
title: 'Launching SvelteKit apps, from Development to Production using Diploi'
description: 'With the convenience of Vercel and the flexibility of Replit, all in a single platform, to create SvelteKit-powered apps super fast'
author: 'Javier'
timestamp: '2025-08-18T07:11:05.573Z'
# devtoUrl: ''
image: './hosting_svelte_apps_cover.png'
social_image: './hosting_svelte_apps_og.png'
draft: false
type: 'Guide'
---

Updated <time datetime="2025-10-28T11:19:05.000Z">October 28, 2025</time>

###### Getting started with SvelteKit apps, the easy way

There are many ways to launch apps with SvelteKit, like classic `npm init -y` or taking one of the thousands of boilerplate templates hosted on GitHub, but today I'm talking about the absolute easiest one.

If you don't want to read, check this short video tutorial.

<div style="display:flex; justify-content:center; width:100%">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Cj8WW_EZlMQ?si=ws1-4P8rWnrtNc4y" title="Launching a SvelteKit in record time" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## Table of contents

- [What you need](#what-you-need)
- [How to create an app with SvelteKit](#how-to-create-an-app-with-sveltekit)
- [Launching your SvelteKit app to Production](#launching-your-sveltekit-app-to-production)
- [Configuring a custom domain for your SvelteKit application in Production](#configuring-a-custom-domain-for-your-sveltekit-application-in-production)
- [Trying out SvelteKit for the first time?](#trying-out-sveltekit-for-the-first-time)
- [References](#references)

---

## What you need

- A GitHub account, if you don't have one, you can create it here https://github.com/signup

## How to create an app with SvelteKit

- Create an account on Diploi, it's free https://console.diploi.com/
- Once you are in the Dashboard, click on "Create Project +"
- Now you need to select the stack for your app. In the "Pick Components" section, select **SvelteKit**. You can add other frameworks to work along with your SvelteKit app. This also applies to the "Pick Add-ons" section, where you can choose the database for your app.
- Next, you need to choose "Create Repository" so your new app will start with a fresh repository.
- Finally, click "Launch Stack".

That's it, Diploi will then start a Development environment for your new SvelteKit-powered app where you can preview your app live online and you can code directly on the browser using the Browser IDE or connect to the remote development environment using SSH, with VS Code, Cursor, Windsurf and any other IDE that supports remote SSH connections and dev containers.

---

## Launching your SvelteKit app to Production

After your app is ready to be launched on Production, all you need to do is:

- Go to your SvelteKit Project's dashboard, where you can manage the existing Deployments of your app, eg. `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>`
- From your Project's dashboard, click on "Create Deployment +"
- Next, you need to choose the "Production" stage for your new Deployment.
- Then choose the size of the cluster for your Deployment.
- Select then the source branch that your Deployment will use, eg. "main"
- Now you can customize the environment variables that your Production deployment will use
- Lastly, click "Create Deployment +"

And now your SvelteKit app is ready to receive users!

---

## Configuring a custom domain for your SvelteKit application in Production

At this point, your application will be using a `.diploi.me` domain by default, which you can change instead to use a custom domain. To configure use a custom domain for your Production Deployment, you need to:

- Go to your Production Deployment's options tab, visible from the dashboard or by going directly to its URL, eg. `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>/deployment/<YOUR_DEPLOYMENT_ID>/options`
- Find the section "Endpoints", where you will see the option "Use Auto-Generated Endpoints" enabled by default. Click on it to disable it.
- An input field with your current `.diploi.me` URL will appear with a checkbox below to enable a custom domain. When you click on it, you'll be able to change your domain.
- When you are done, scroll down the page and click "Save Changes"
- Next, you need to go to your domain's DNS settings and create a new CNAME record that points to **edge.diploi.com**

It can take up to 30 minutes for your new domain and SSL certificate to be fully set up and working correctly.

---

## Trying out SvelteKit for the first time?

On Diploi, you have the option to test-drive tools without having to install anything on your machine. For SvelteKit, you can create a fresh development environment on the cloud using Diploi, in two ways:

- **If you are not registered on Diploi**, you can launch a free trial, either from here [https://diploi.com/#StackBuilder](https://diploi.com/#StackBuilder), where you can add test SvelteKit with other frameworks or from the SvelteKit component page, [https://diploi.com/component/sveltekit](https://diploi.com/component/sveltekit) if you want to run a testing environment only using SvelteKit with a database.

- **If you are registered on Diploi**, you can create a new project and in the **Repository** section, select "Quick Launch", that way, you will be starting an environment without a repository, intended to be used to try out the stack you selected.

---

Are there other frameworks or languages you would like us to add? Feel free to share it with us on [Discord](https://discord.gg/vvgQxVjC8G).

---

Register in [Diploi](https://diploi.com/) and get 50€ in free credits.

---

## References

- https://svelte.dev/docs/kit/introduction
- https://docs.diploi.com/
