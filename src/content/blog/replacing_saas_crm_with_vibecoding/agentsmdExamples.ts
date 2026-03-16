const agentsExample:string = `# AGENTS.md — Diploi CRM Monorepo

## Project Overview

This is a monorepo for a CRM application built with **Laravel 11 + Inertia.js + React (TypeScript) + Tailwind CSS + PostgreSQL**, deployed via Diploi.

The repo contains two codebases:

| Path | Purpose | Modifiable? |
|------|---------|-------------|
| \`/\` (root) | Lovable-built React UI — **reference only** | ❌ Never modify |
| \`/laravel\` | Full-stack Laravel + Inertia.js app | ✅ All work goes here |

The Lovable UI (\`src/\`, \`public/\`, \`index.html\`, etc.) is a design reference. Extract component patterns, layouts, and styling from it, but **never edit it directly**. All production code lives under \`/laravel\`.

---

## Stack & Conventions

- **Backend:** Laravel 11 (PHP 8.2+), located in \`/laravel\`
- **Frontend:** React 18 + TypeScript, via Inertia.js (\`/laravel/resources/js/\`)
- **Styling:** Tailwind CSS (utility-first, no CSS modules)
- **Database:** PostgreSQL — connection URI: \`postgres://postgres:postgres@postgres.postgres:5432/app\`
- **ORM:** Eloquent (Laravel)
- **Routing:** Ziggy (\`route()\` helper in JS), Inertia \`<Link>\` components
- **Auth/Permissions:** Laravel Policies; frontend reads \`auth.permissions\` from Inertia shared data
- **Async jobs:** Laravel Queues (email, PDF generation); **no WebSockets yet**
- **Package manager:** Composer (PHP), npm/bun (JS)

---

## Directory Structure (under \`/laravel\`)

\`\`\`
laravel/
├── app/
│   ├── Http/Controllers/      # Inertia controllers (thin, delegate to services)
│   ├── Models/                 # Eloquent models (match DB tables exactly)
│   ├── Policies/               # Authorization policies
│   ├── Services/               # Business logic (lead conversion, quote acceptance, etc.)
│   └── Jobs/                   # Queued jobs (SendQuotationEmail, GeneratePdf, etc.)
├── database/
│   ├── migrations/             # PostgreSQL migrations (source of truth for schema)
│   └── seeders/                # Dev seed data
├── resources/js/
│   ├── components/
│   │   ├── ui/                 # Button, Input, Select, Modal, Drawer, Badge, Tabs, Table, etc.
│   │   ├── layout/             # AppShell, Sidebar, Topbar, PageHeader, FiltersBar
│   │   ├── crm/                # KanbanBoard, KanbanColumn, KanbanCard, ActivityTimeline, etc.
│   │   └── forms/              # FormField, MoneyInput, PercentageInput, ProductSearchSelect, etc.
│   ├── pages/                  # Inertia pages (thin, composed of reusable components)
│   ├── types/                  # TypeScript interfaces matching backend DTOs
│   ├── hooks/                  # Shared React hooks (usePermissions, useFilters, etc.)
│   └── utils/                  # Helpers (can(), formatCurrency, etc.)
├── routes/
│   └── web.php                 # Inertia routes
└── config/
\`\`\`

---

## Database Schema (Source of Truth)

Entity names **must** match the database. Never invent new entity names. If something is missing, add a \`// TODO:\` comment and a minimal placeholder type.

### Core Tables

| Domain | Tables |
|--------|--------|
| Users/Roles | \`users\`, \`roles\`, \`role_user\`, \`teams\`, \`team_user\` |
| Contacts | \`contacts\` (type: person/company, \`parent_contact_id\` for company relation) |
| Leads | \`leads\` (convertible to opportunities) |
| Pipeline | \`opportunities\`, \`opportunity_stages\` |
| Board Config | \`pipeline_boards\`, \`pipeline_board_columns\` |
| Products | \`products\` |
| Quotations | \`quotations\`, \`quotation_lines\` (line_type: item/section/note) |
| Sales Orders | \`sales_orders\`, \`sales_order_lines\` (line_type: item/section/note) |
| Activities | \`activities\` (polymorphic: \`related_type\` + \`related_id\`) |
| Tags | \`tags\`, \`taggables\` (polymorphic) |

### Key Relationships

- A **lead** converts to an **opportunity** (\`leads.converted_opportunity_id\`)
- An **opportunity** belongs to a **stage** and optionally a **contact**, **lead**, **team**
- A **quotation** links to a **contact** and optionally an **opportunity**
- Accepting a quotation creates a **sales order** (snapshot of quote lines)
- **Activities** are polymorphic: attached to leads, opportunities, quotations, sales orders, or contacts
- **Pipeline boards** can be personal (user) or team-scoped, with configurable column order and card fields

---

## Coding Rules

1. **Pages are thin.** Compose from reusable components; no giant single-file components.
2. **No duplicated UI logic.** If two pages share a pattern, abstract it.
3. **TypeScript types** under \`resources/js/types/\` must mirror backend DTOs.
4. **Permissions helper:** Use \`can(permissionKey)\` to conditionally show/hide UI actions.
5. **Data flow:** Inertia page props with typed DTOs. Use optimistic UI only where safe (e.g., stage move).
6. **Drawers** for entity quick view/edit (OpportunityDrawer, LeadDrawer, QuoteDrawer).
7. **List views** use DataTable + filters + saved views pattern.
8. **Entity detail pages** use 2-column layout: main content left, activity panel right.
9. **Kanban** supports drag-and-drop; keep implementation clean and replaceable.
10. **Currency** defaults to EUR; all money fields are \`decimal(12,2)\`.

---

## Key Backend Actions (Inertia Visits)

| Action | Route Pattern |
|--------|--------------|
| CRUD any entity | \`POST/PUT/DELETE /entity\` |
| Convert lead → opportunity | \`POST /leads/{lead}/convert\` |
| Move opportunity stage | \`PUT /opportunities/{opportunity}/move\` |
| Send quotation | \`POST /quotations/{quotation}/send\` |
| Accept quotation → create SO | \`POST /quotations/{quotation}/accept\` |
| Add activity (note/reminder) | \`POST /activities\` (polymorphic) |

---

## UX Principles

- **Fast, one-handed operation:** left nav + main canvas, minimal modals, keyboard shortcuts
- **One global search** across all entities
- **Activity-first:** same activity component everywhere
- **Personal + team views:** users create their own pipeline layouts within team pipelines
- **Modern CRM feel:** fast navigation, keyboard-friendly forms
`

export {agentsExample}