# Diploi Landing Page Redesign — Conversation Memory

## Context

This document summarizes a conversation between the Diploi team and Claude about redesigning
the diploi.com landing page. The goal is to make the product clearer to less experienced
developers who currently don't understand what Diploi is from the frontpage.

---

## What Diploi Is (Feature Summary)

Diploi is an all-in-one cloud development and deployment platform. The clearest one-sentence
description:

> "One platform to build, preview, and ship your app — no local setup required."

### Core value proposition

- Dev environment, staging, and production all run in the cloud — consistent by default
- Entire stack defined in a single `diploi.yaml` file (IaC)
- GitHub is the source of truth; `git push` triggers build + deploy
- No Docker, Kubernetes, or CI/CD knowledge required from the developer

### Key features identified

- **Cloud Development Environments** — browser IDE or SSH into any IDE (Cursor, VS Code, Windsurf, Zed)
- **Stack Builder** — scaffolds new projects; monorepo configured automatically
- **Infrastructure as Code** — single `diploi.yaml` file, versioned with Git
- **CI/CD** — auto-configured via GitHub Actions on every push
- **Environments** — dev, preview (shareable link), and production; all cloneable
- **Global CDN** — Cloudflare edge on all deployments
- **Security** — nothing installed locally; isolated VMs per developer; central access control
- **AI/Vibe coding** — first-class support for AI-native IDEs; no API keys needed for Claude/Codex in browser IDE
- **Lovable import** — import Lovable projects directly
- **No lock-in** — projects portable to any VPS via Dockerfiles or terminal commands
- **Team onboarding** — 30 seconds; authenticate with GitHub, environment ready immediately
- **Monitoring** — real-time logs per component, resource usage graphs, CLI log access

### Supported stack (examples)

Components: Next.js, Node.js, React + Vite, Flask, Django, Astro, SvelteKit, Laravel, Hono
Add-ons: PostgreSQL, Redis, MongoDB, MariaDB

---

## Target Audience

- **Primary:** Developers, many on the less experienced / junior side
- **Also:** Teams, DevOps engineers, vibe coders / AI-assisted developers
- **Coming from:** Lovable, Vercel, Railway, Render, Replit, val.town

---

## Landing Page Problems Identified

1. Hero tagline ("Developer, Welcome Home") is evocative but says nothing concrete
2. No screenshot or video of the actual product anywhere above the fold
3. Features are described in language that assumes prior knowledge of cloud dev environments
4. No "is this for me?" signal for junior developers
5. First CTA is just "Sign Up" — high commitment before user understands the product
6. Page lacks a narrative thread — feels like a collection of sections rather than a story

---

## Proposed Landing Page Structure (Agreed)

1. **Hero** — Clear one-sentence explanation of what Diploi is + demo video
2. **"Launch a real project in 60 seconds"** — Tabbed layout with launchable example projects (click = live environment). Tabs ideally by use case or technology. End tab: "Build your own stack →" (replaces standalone Stack Builder section)
3. **Before/After** — Plain language, relatable pain points ("works on my machine", juggling 5 tools, etc.)
4. **Key Features** — 3 features with real UI screenshots or short video per feature
5. **Social proof** — Quotes ideally from solo/junior developers, not CTOs
6. **FAQ** — Answers post-page objections: "is this too complex?", "do I need Docker?", "can I leave?"
7. **Single strong CTA** — Same launchable project from section 2, not just "Sign Up"

> Note: Links to subpages (Dev, Teams, AI, DevOps) should move higher (e.g. just after hero)
> or be embedded in the features section — NOT used as the final section of the page.

---

## Feature Headlines — Feedback

The proposed feature headlines were:

- "Ship Apps With Zero DevOps"
- "Code Instantly From Anywhere"
- "Deploy Online With One Click"

**Problem:** These are too generic — every competitor (Vercel, Railway, Render) can claim all three.

**Suggested alternatives that reflect Diploi's actual differentiation:**

- "One environment from dev to production" — the consistency angle
- "Your whole stack in one YAML file" — the IaC simplicity angle
- "Code from anywhere, deploy anywhere" — keep the second headline but earn it with specifics

---

## Key Messaging Principles

- Never use the phrase "environment parity" or similar jargon — say "works the same everywhere"
- Always reference GitHub — junior devs know it and it grounds the product immediately
- Explicitly say: "You don't need to know Docker, Kubernetes, or CI/CD"
- Use comparison anchors: "Like Vercel, but for your whole stack — not just the frontend"
- The narrative spine of the page should be: What it is → What it looks like → Problem it solves → How it solves it → Proof → Next step

---

## Useful Reference URLs

- Landing page: https://diploi.com
- Developers: https://diploi.com/features/dev
- Teams: https://diploi.com/features/teams
- DevOps: https://diploi.com/features/devops
- AI/Vibes: https://diploi.com/features/ai
- Lovable integration: https://diploi.com/lovable
- Docs: https://docs.diploi.com
