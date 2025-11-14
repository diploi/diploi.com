---
title: 'The easiest way to start new Django and Hono apps, literally one click'
description: 'Discover how to spin up apps in seconds using Diploi with Hono and Django'
author: 'Javier'
timestamp: '2025-06-26T07:11:05.573Z'
devtoUrl: 'https://dev.to/diploi/the-easiest-way-to-start-new-django-and-hono-apps-literally-one-click-141e'
image: './hono_and_django_support_cover.png'
social_image: './hono_and_django_support_og.png'
draft: false
type: 'News'
---

Updated <time datetime="2025-10-28T11:03:05.000Z">October 28, 2025</time>

###### Hono and Django now available on Diploi

There are two powerful new additions to Diploi, **Hono** and **Django**!

These frameworks are now officially supported, meaning you can deploy, host, and manage full applications with Hono or/and Django with one click

**TLDR?** Sure, to launch a **Hono** app, go to https://diploi.com/component/hono and for **Django** apps, go to https://diploi.com/component/django

---

## What is Hono?

From their [docs](https://hono.dev/docs/),

> is a small, simple, and ultrafast web framework built on Web Standards. It works on any JavaScript runtime: Cloudflare Workers, Fastly Compute, Deno, Bun, Vercel, Netlify, AWS Lambda, Lambda@Edge, and Node.js.

Hono is mainly used for backend applications, like APIs, proxy servers, edge apps, and typical servers, but that's not all, it can also serve HTML and UI components, so it is appropiate to think of Hono as a fullstack framework. You can think of Hono as a modern alternative to Express, which supports Typescript and can be used with the most popular runtimes available

Hono aims to make your life easier by enabling API Spec and type inference via Hono's RPC, which transforms how you can share types and API expected responses between server and client, into a smooth experience. Additionally, Hono has multiple helpers and middlewares to handle typical operations, like managing Cookies, JWT, Webhooks, authentication, and headers, so you don't need external libraries to handle these actions

To launch a Hono app instantly, check out this link https://diploi.com/component/hono

---

## What is Django?

From their [homepage](https://www.djangoproject.com/),

> Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.

In simpler terms, Django is a framework for building web applications, and it is mostly considered a backend framework because it features ORM, auth, middleware, and other typical backend features, but it can also serve HTML and handle frontend templating just like fullstack frameworks, so it is fair to think that Django is whatever you need it to be 😅

Django uses a pattern they call Model-View-Template (MVT), which is similar to Model-View-Controller (MVC), with their main difference being that in MVT, the View and Controller from MVC are technically bundled together into the View from MVT

Fun fact: Before this blog, I didn't know that Django has been around since 2005... damn 🫡

Start a new Django application with Diploi, here https://diploi.com/component/django

---

## Using Django and Hono with other frameworks in Diploi

If you would like to test out how these frameworks work together with other frameworks, you can use Diploi to create monorepo applications, where you can for example, have Django as your backend and Astro in the frontend, or Hono as your API server with a Next.js fullstack app, or any other combination of frameworks and databases that fits your requirements

1. Visit the **Stack Builder** on the Diploi homepage at https://diploi.com/#StackBuilder
2. Select all the components and add-ons
3. That's it, click `Launch Stack`

<div style="display:flex; justify-content:center; width:100%">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rsnqJ2QzMIY?si=viHBaXGC1zoiKB2f" title="Code remotely and deploy with one click using this platform" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Diploi will then start a remote development environment that allows you to code in the browser and your application is deployed online. If you would like to start your application with a GitHub repository, all you need to do is register using GitHub and you will be able to start a new repository with your new application

---

What frameworks should we support next? Let me know in the comments!

---

You can start new apps on [Diploi for free without registration](https://diploi.com/) and if you sign up, you will get 50€ in free credits

---

**References:**

- https://hono.dev/
- https://www.djangoproject.com/
- https://docs.diploi.com/
