const prompt1Scaffold: string = `You are working inside the \`/laravel\` directory of a monorepo. The repo root contains a Lovable-built React CRM UI that serves as a read-only design reference. All production code goes in \`/laravel\`.

Your task: Set up the Laravel + Inertia.js + React (TypeScript) + Tailwind CSS foundation.

Steps:
1. Install and configure Inertia.js server-side (Laravel adapter) and client-side (React adapter) in \`/laravel\`.
2. Configure Vite for React + TypeScript + Tailwind CSS in \`/laravel\`.
3. Set up the Inertia middleware (\`HandleInertiaRequests\`) to share:
   - \`auth.user\` (authenticated user with roles)
   - \`auth.permissions\` (flat object of permission keys → boolean)
   - \`flash\` messages
   - \`ziggy\` routes
4. Configure the PostgreSQL database connection in \`.env\`:
   DB_CONNECTION=pgsql
   DB_HOST=postgres.postgres
   DB_PORT=5432
   DB_DATABASE=app
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
5. Create a base Inertia layout (\`resources/js/layouts/AuthenticatedLayout.tsx\`) with placeholder slots for sidebar, topbar, and main content.
6. Create a basic \`resources/js/app.tsx\` entry point that boots Inertia with React.
7. Verify the setup compiles and serves a "Hello CRM" page at the root route.

Do NOT create any CRM-specific pages or components yet. Focus purely on the scaffolding.`

const prompt2Migrations: string = `You are working in \`/laravel\`. Refer to the database schema defined in \`AGENTS.md\`.

Your task: Create all database migrations for the CRM schema using PostgreSQL.

Create migrations in this order (respecting foreign key dependencies):

1. \`users\` — add fields: timezone (default 'Europe/Helsinki'), locale, is_active (boolean)
2. \`roles\` — name (Admin, Sales Manager, Sales Rep, Finance, Support)
3. \`role_user\` — pivot with composite unique (user_id, role_id)
4. \`teams\` — name, description (nullable), manager_user_id (nullable FK to users)
5. \`team_user\` — pivot with role_in_team (nullable), unique (team_id, user_id)
6. \`contacts\` — type enum (person/company), name, company_name, parent_contact_id (self-referencing FK), email, phone, website, vat_number, address fields, owner_user_id FK. Add indexes on owner_user_id, parent_contact_id, email.
7. \`leads\` — title, contact_name, company_name, email, phone, source, status enum (new/contacted/qualified/disqualified/converted), disqualify_reason, estimated_value decimal(12,2), owner_user_id FK, team_id FK, converted_opportunity_id (nullable FK to opportunities — add after opportunities migration)
8. \`opportunity_stages\` — team_id (nullable FK), name, sort_order, is_won (default false), is_lost (default false)
9. \`opportunities\` — name, contact_id FK, lead_id FK, team_id FK, owner_user_id FK, stage_id FK, amount decimal(12,2), currency_code char(3) default 'EUR', expected_close_date, probability tinyint, status enum (open/won/lost), won_at, lost_at, lost_reason, last_stage_changed_at. Indexes on (team_id, stage_id), owner_user_id, expected_close_date.
10. \`pipeline_boards\` — name, scope enum (personal/team), team_id (nullable FK), user_id (nullable FK), default_filters json, card_fields json, sort json
11. \`pipeline_board_columns\` — pipeline_board_id FK, stage_id FK, sort_order, is_visible (default true). Unique (pipeline_board_id, stage_id).
12. \`products\` — sku (unique, nullable), name, description, sales_price decimal(12,2) default 0, cost_price decimal(12,2) nullable, currency_code char(3) default 'EUR', unit varchar(50) default 'pcs', is_active (default true)
13. \`quotations\` — quote_number (unique), status enum (draft/sent/accepted/rejected/expired), contact_id FK, opportunity_id FK (nullable), owner_user_id FK, team_id FK, currency_code, valid_until, notes_internal, notes_customer, subtotal, tax_total, total, sent_at, accepted_at
14. \`quotation_lines\` — quotation_id FK, line_type enum (item/section/note), sort_order, product_id FK (nullable), description, quantity decimal(12,3), unit, unit_price decimal(12,2), discount_percent decimal(5,2), tax_percent decimal(5,2), line_total decimal(12,2)
15. \`sales_orders\` — order_number (unique), status enum (draft/confirmed/fulfilled/invoiced/cancelled), contact_id FK, quotation_id FK (nullable), opportunity_id FK (nullable), owner_user_id FK, team_id FK, currency_code, subtotal, tax_total, total, confirmed_at
16. \`sales_order_lines\` — (same structure as quotation_lines, with sales_order_id FK)
17. \`activities\` — activity_type enum (note/task/call/email/meeting), subject, body, due_at (nullable), completed_at (nullable), status enum (open/done), assigned_user_id FK, created_by_user_id FK, related_type varchar(50), related_id bigint. Indexes on (related_type, related_id), (assigned_user_id, due_at), status.
18. \`tags\` — name (unique), color (nullable)
19. \`taggables\` — tag_id, taggable_type, taggable_id. Index on (taggable_type, taggable_id).
20. Add \`converted_opportunity_id\` FK to leads table (separate migration).

After writing all migrations, run \`php artisan migrate\` to verify they execute cleanly.`

const prompt3Models: string = `You are working in \`/laravel\`. The database migrations from the previous step are in place.

Your task: Create all Eloquent models with proper relationships, casts, and scopes.

For each model, define:
- \`$fillable\` or \`$guarded\` attributes
- \`$casts\` (especially for enums, decimals, dates, json fields)
- All relationships (\`belongsTo\`, \`hasMany\`, \`belongsToMany\`, \`morphMany\`, \`morphTo\`, \`morphToMany\`)
- Useful scopes where obvious (e.g., \`Lead::scopeActive\`, \`Opportunity::scopeOpen\`, \`Activity::scopeOverdue\`, \`Activity::scopeDueToday\`)

Models to create:
1. User — roles (belongsToMany), teams (belongsToMany), ownedContacts, ownedLeads, ownedOpportunities, assignedActivities, createdActivities, personalBoards
2. Role — users (belongsToMany)
3. Team — users (belongsToMany), manager (belongsTo User), leads, opportunities, quotations, salesOrders, stages, boards
4. Contact — parent (belongsTo self), children (hasMany self), leads, opportunities, quotations, salesOrders, activities (morphMany), tags (morphToMany), owner (belongsTo User)
5. Lead — contact relationship (optional), owner, team, convertedOpportunity, activities (morphMany), tags (morphToMany)
6. OpportunityStage — team, opportunities, boardColumns
7. Opportunity — contact, lead, team, owner, stage, quotations, salesOrders, activities (morphMany), tags (morphToMany)
8. PipelineBoard — team, user, columns (hasMany)
9. PipelineBoardColumn — board (belongsTo), stage (belongsTo)
10. Product — quotationLines, salesOrderLines
11. Quotation — contact, opportunity, owner, team, lines (hasMany), salesOrders, activities (morphMany)
12. QuotationLine — quotation, product
13. SalesOrder — contact, quotation, opportunity, owner, team, lines (hasMany), activities (morphMany)
14. SalesOrderLine — salesOrder, product
15. Activity — assignedUser, createdByUser, related (morphTo), polymorphic on related_type/related_id
16. Tag — taggables (morphedByMany for Contact, Lead, Opportunity)

Use \`AGENTS.md\` as the naming reference. If any table or relationship is ambiguous, add a \`// TODO:\` comment.`


const prompt4TypesAndUtils: string = `You are working in \`/laravel/resources/js/\`.

Your task: Create TypeScript type definitions and shared utilities.

1. Create \`types/\` directory with interfaces for all entities matching the backend DTOs:
   - \`types/index.ts\` — export all types
   - Types: User, Team, Role, Contact, Lead, Opportunity, OpportunityStage, Quotation, QuotationLine, SalesOrder, SalesOrderLine, Product, Activity, PipelineBoard, PipelineBoardColumn, Tag
   - Types for Inertia shared data: \`PageProps\` (extends InertiaPageProps with auth, flash, ziggy)
   - Types for filter/pagination: \`PaginatedResponse<T>\`, \`Filters\`, \`SavedView\`

2. Create \`utils/permissions.ts\`:
   - \`can(permission: string): boolean\` — reads from Inertia shared \`auth.permissions\`
   - Wrap it in a \`usePermissions()\` hook that returns \`{ can }\`

3. Create \`utils/format.ts\`:
   - \`formatCurrency(amount: number, currency?: string): string\`
   - \`formatDate(date: string): string\`
   - \`formatRelativeDate(date: string): string\`

4. Create \`hooks/useFilters.ts\`:
   - Hook for managing filter state with Inertia router (debounced search, URL-synced filters)

Keep types minimal but accurate. Use \`// TODO:\` for fields you're unsure about.`

const prompt5UI: string = `You are working in \`/laravel/resources/js/components/\`.

Your task: Create the base UI component library. Reference the Lovable UI at the repo root (\`/src/\`) for design patterns and styling, but create new, clean implementations.

Create under \`components/ui/\`:
1. \`Button.tsx\` — variants: primary, secondary, ghost, danger. Sizes: sm, md, lg. Loading state.
2. \`Input.tsx\` — text input with label, error state, help text.
3. \`Select.tsx\` — dropdown select with label and error state.
4. \`Modal.tsx\` — centered overlay modal with title, body, footer slots.
5. \`Drawer.tsx\` — right-side sliding panel (for entity quick view/edit).
6. \`Badge.tsx\` — status badges with color variants (e.g., for lead status, quote status).
7. \`Tabs.tsx\` — tab component with active state.
8. \`DataTable.tsx\` — sortable, paginated table that works with Inertia pagination.
9. \`Dropdown.tsx\` — action dropdown menu.
10. \`Tooltip.tsx\` — simple hover tooltip.
11. \`Avatar.tsx\` — user avatar with fallback initials.
12. \`DatePicker.tsx\` — date input (can use a simple native input for now, with TODO for upgrade).

All components should:
- Be fully typed with TypeScript props interfaces
- Use Tailwind CSS exclusively (no inline styles, no CSS modules)
- Be composable and accept \`className\` prop for extension
- Follow modern CRM aesthetic (clean, minimal, professional)`

const prompt6AppLayout: string = `You are working in \`/laravel/resources/js/components/layout/\`.

Reference the Lovable UI's app shell design for the layout patterns.

Create:
1. \`AppShell.tsx\` — main layout wrapper with sidebar + topbar + content area.
2. \`Sidebar.tsx\` — collapsible left nav with links: Dashboard, Leads, Pipeline, Contacts, Products, Quotations, Sales Orders, Activities, Settings. Icons for each. Collapsed state shows icons only with tooltips. Persist collapse state.
3. \`Topbar.tsx\` — sticky top bar with:
   - Left: hamburger toggle for sidebar, logo/app name
   - Center: global search input (placeholder, wired later)
   - Right: "+ Create" dropdown (Lead, Opportunity, Contact, Quotation, Product, Activity), notification bell placeholder, user avatar menu (profile, sign out)
4. \`PageHeader.tsx\` — reusable page header with title, subtitle, context switchers slot, primary action button slot.
5. \`FiltersBar.tsx\` — horizontal bar of filter chips/dropdowns, reusable across list views.

Wire up \`AppShell\` as the authenticated layout in the Inertia app. All pages should render inside it.`

const prompt7CRMComponents: string = `You are working in \`/laravel/resources/js/components/crm/\`.

Create domain-specific CRM components:

1. \`KanbanBoard.tsx\` — horizontal scrolling board of columns. Accepts columns and cards as props. Supports drag-and-drop (use @dnd-kit/core or a simple implementation). Fires \`onCardMove(cardId, fromColumn, toColumn)\` callback.
2. \`KanbanColumn.tsx\` — single column with stage name, count, amount sum, and a list of cards.
3. \`KanbanCard.tsx\` — compact card showing: opportunity name, company/contact, amount + currency, expected close date pill, owner avatar, next activity indicator (red if overdue), up to 2 tags. Click fires \`onCardClick\`.
4. \`ActivityTimeline.tsx\` — vertical timeline of activities (notes, tasks, calls, emails, meetings). Shows overdue reminders at top (red), then upcoming, then notes, then system events. Each item shows type icon, subject, body preview, timestamp, assigned user.
5. \`ActivityComposer.tsx\` — quick add form for notes and reminders. Type selector (note/task/call/email/meeting), subject, body, due date, assigned user.
6. \`EntityHeader.tsx\` — reusable entity page header with: entity name, status badge, owner, team, quick action buttons.
7. \`EntitySummaryCards.tsx\` — summary stat cards (e.g., total value, open opportunities, quotes sent).

Keep drag-and-drop implementation clean and replaceable. Use callbacks, not direct Inertia calls inside components.`

const prompt8Forms: string = `You are working in \`/laravel/resources/js/components/forms/\`.

Create specialized form components:

1. \`FormField.tsx\` — wrapper that provides label, error display, and help text for any form input.
2. \`MoneyInput.tsx\` — numeric input with currency symbol, formats to 2 decimal places, handles locale.
3. \`PercentageInput.tsx\` — numeric input constrained 0-100 with % suffix.
4. \`ProductSearchSelect.tsx\` — async typeahead search that queries \`/products/search\` endpoint. Shows product name, SKU, price. Fires \`onSelect(product)\`.
5. \`ContactSearchSelect.tsx\` — async typeahead search that queries \`/contacts/search\` endpoint. Shows contact name, company, type badge. Fires \`onSelect(contact)\`.

All form components should work with Inertia's \`useForm()\` hook. Accept \`value\`, \`onChange\`, and \`error\` props.`

const prompt9Backend1: string = `You are working in \`/laravel\`.

Create Inertia controllers, routes, and policies for Leads, Contacts, and Products.

For each entity, create:
- A controller (e.g., \`LeadController\`) with \`index\`, \`show\`, \`create\`, \`store\`, \`update\`, \`destroy\` methods
- A Policy (e.g., \`LeadPolicy\`) with \`viewAny\`, \`view\`, \`create\`, \`update\`, \`delete\` methods (stub logic based on roles)
- Routes in \`routes/web.php\` using \`Route::resource()\` with Inertia

Specific requirements:
1. **LeadController**:
   - \`index\` — paginated list with filters (status, source, owner, team, date range, tags), support saved views
   - \`show\` — lead detail with related activities, tabs data
   - \`convert\` — \`POST /leads/{lead}/convert\` — creates an Opportunity from the lead, optionally creates/links Contact, marks lead as converted

2. **ContactController**:
   - \`index\` — paginated list with filters (type, owner, tags)
   - \`show\` — contact detail with related opportunities, quotations, orders, activities

3. **ProductController**:
   - \`index\` — paginated list with filters (active, category)
   - \`show\` — product detail
   - \`search\` — \`GET /products/search?q=\` — returns JSON for typeahead (used by ProductSearchSelect)

Pass data to Inertia pages using typed props. Include \`auth.permissions\` in shared data for frontend permission checks.`

const prompt10Backend2: string = `You are working in \`/laravel\`.

Create controllers, routes, and policies for Pipeline, Quotations, Sales Orders, and Activities.

1. **OpportunityController**:
   - \`index\` — supports both Kanban and List view (toggle via query param). Returns stages + opportunities grouped by stage for Kanban mode.
   - \`store\`, \`update\`, \`destroy\`
   - \`move\` — \`PUT /opportunities/{opportunity}/move\` — updates stage_id and last_stage_changed_at. Use optimistic UI pattern (return minimal response).

2. **PipelineBoardController**:
   - \`index\` — list boards for current user (personal + team)
   - \`store\`, \`update\`, \`destroy\` — manage board configurations

3. **QuotationController**:
   - \`index\` — paginated list with filters
   - \`show\` — quotation detail with lines (supports item/section/note row types)
   - \`store\`, \`update\` — full quotation builder (create/update with lines in single request)
   - \`send\` — \`POST /quotations/{quotation}/send\` — marks as sent, queues email job
   - \`accept\` — \`POST /quotations/{quotation}/accept\` — marks as accepted, creates SalesOrder with snapshot of lines

4. **SalesOrderController**:
   - \`index\`, \`show\`, \`update\`

5. **ActivityController**:
   - \`index\` — "My Activities" with segments: overdue, due today, upcoming
   - \`store\` — create activity (polymorphic: pass \`related_type\` and \`related_id\`)
   - \`update\` — mark complete, reschedule
   - Supports note, task, call, email, meeting types

6. **SearchController**:
   - \`GET /search?q=\` — global search across contacts, leads, opportunities, quotes, orders, products. Return results grouped by entity type.`

const prompt11Frontend1: string = `You are working in \`/laravel/resources/js/pages/\`.

Create Inertia pages for Leads, Contacts, and Products. Compose from the reusable components created earlier. Pages should be thin — logic lives in components and hooks.

1. **Leads/Index.tsx** — DataTable with filters (status, source, owner, team), saved views dropdown, "+ Lead" button, row actions (Qualify, Convert, Disqualify, Assign).
2. **Leads/Show.tsx** — 2-column: left main (header + tabs: Overview, Related) + right ActivityTimeline + ActivityComposer. "Convert to Opportunity" opens a Drawer with form fields.
3. **Contacts/Index.tsx** — DataTable with filters (type, owner, tags), row click navigates to detail.
4. **Contacts/Show.tsx** — 2-column: left main (tabs: Overview, Opportunities, Quotations, Orders) + right ActivityTimeline.
5. **Products/Index.tsx** — DataTable with filters (active, name search), "+ Product" button.
6. **Products/Show.tsx** — simple detail page with product info.

Each page receives typed Inertia props. Use \`useForm()\` for forms, \`router.visit()\` for navigation, \`route()\` for URL generation.`

const prompt12Frontend2: string = `You are working in \`/laravel/resources/js/pages/\`.

Create remaining pages:

1. **Pipeline/Index.tsx** — Kanban view using KanbanBoard. Header: team selector, view selector (Kanban/List), saved views, filters (owner, team, stage, close date, tags, value range), "+ Opportunity" and "Customize view" buttons. Card click opens OpportunityDrawer. Drag-and-drop calls \`move\` endpoint.
2. **Pipeline/Show.tsx** — Opportunity detail (2-column with ActivityTimeline).
3. **Quotations/Index.tsx** — DataTable with filters (status, customer, date range), "+ Quotation" button.
4. **Quotations/Show.tsx** — Quotation builder page. Top header (quote number, status, customer search, linked opportunity, valid until, currency). Left 70%: line items grid (drag-to-reorder, product search, editable fields, section/note row types, "Add line" button, keyboard-friendly). Right 30%: totals card + activity panel. Actions: Save, Send, Mark Accepted, PDF Preview placeholder.
5. **SalesOrders/Index.tsx** — DataTable with filters.
6. **SalesOrders/Show.tsx** — Similar to quotation detail but fewer editable controls.
7. **Activities/Index.tsx** — "My Activities" list segmented: Overdue (red), Due Today, Upcoming. Each item shows type icon, subject, linked entity, due date, actions (complete, reschedule).
8. **Dashboard/Index.tsx** — Placeholder dashboard with summary cards.

Ensure all pages compile, use correct imports, and follow consistent styling.`

const prompt13UserRoles: string = `You are working in \`/laravel\`.

Implement the authorization layer:

1. Define role-based permissions as constants/config:
   - **Admin**: full access to everything
   - **Sales Manager**: manage team pipelines/boards, reassign owners, view all team records
   - **Sales Rep**: CRUD own leads/opportunities/quotes/orders within permitted scope, personal views
   - **Finance (Read-only)**: read access to contacts, quotes, orders; can export; can mark orders invoiced
   - **Support**: view customers and notes, add activities, cannot change pipeline financial fields

2. Update \`HandleInertiaRequests\` middleware to compute and share \`auth.permissions\` as a flat \`Record<string, boolean>\` object. Include permissions like: \`leads.create\`, \`leads.edit\`, \`leads.delete\`, \`leads.assign\`, \`opportunities.create\`, \`pipeline.customize_team\`, \`quotations.send\`, \`quotations.accept\`, \`products.view_cost\`, etc.

3. Update all Policies to implement actual authorization checks based on roles and team membership.

4. Ensure frontend \`can()\` helper correctly reads from shared permissions. Add permission checks to all relevant UI elements (show/hide buttons, disable fields).

5. Seed a \`DatabaseSeeder\` with sample roles, a few users with different roles, a team, and sample data for development.`

const prompt14Final: string = `You are working in \`/laravel\`.

Final integration pass:

1. **Queued Jobs**:
   - \`SendQuotationEmail\` — triggered when quotation is marked as "sent"
   - \`GenerateQuotationPdf\` — placeholder job for PDF generation
   Configure the queue connection for database driver.

2. **Global Search**: Wire up the SearchController to the Topbar's global search input. Results grouped by entity type with keyboard navigation.

3. **"+ Create" Dropdown**: Wire up the Topbar create button to open the appropriate create form/drawer for each entity type.

4. **Settings Page** (stub): Create a basic Settings page accessible by Admin role, with placeholder sections for Teams, Stages, Roles.

5. **Error Handling**: Add Inertia error pages (403, 404, 500).

6. **Review all pages** for:
   - Correct TypeScript types (no \`any\`)
   - Consistent component usage
   - Permission checks on all CRUD actions
   - Proper loading states
   - Flash message display

7. Provide a summary of:
   - New component structure
   - Key reusable components created
   - TODOs for any missing backend endpoints or policies`

export {
  prompt1Scaffold,
  prompt2Migrations,
  prompt3Models,
  prompt4TypesAndUtils,
  prompt5UI,
  prompt6AppLayout,
  prompt7CRMComponents,
  prompt8Forms,
  prompt9Backend1,
  prompt10Backend2,
  prompt11Frontend1,
  prompt12Frontend2,
  prompt13UserRoles,
  prompt14Final
}
