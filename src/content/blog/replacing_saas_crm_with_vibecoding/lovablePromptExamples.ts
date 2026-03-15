const promptProductPrinciple: string = `## **1) Product principles for a modern CRM (to guide design decisions)**

* **Fast to operate with one hand**: left nav + main canvas, minimal modals, keyboard shortcuts.

* **One global search** (contacts, leads, opportunities, quotes, orders, products).

* **Everything is an "entity page"** with a consistent layout: header + tabs + right-side activity timeline.

* **Activity-first**: reminders/notes are the same UI component across Leads, Opportunities, Quotations, Sales Orders.

* **Personal + team views**: users can create their own pipeline layouts while still working inside team pipelines.
`

const promptInformationArchitecture: string = `## **2) Information architecture (screens)**

### **Primary modules**

1. **Dashboard**

2. **Leads** (list view, qualification, convert to opportunity)

3. **Pipeline** (kanban for opportunities)

4. **Contacts** (list + contact detail)

5. **Products** (list + product detail)

6. **Quotations** (list + quotation builder)

7. **Sales Orders** (list + order detail)

8. **Activities** (my reminders, overdue, due today, etc.)

9. **Settings** (teams, stages, fields, roles, templates)
`

const promptAppShellLayout: string = `## **3) App shell layout (global UI)**

### **Top bar (sticky)**

* **Left**: hamburger (collapse sidebar), logo/app name.

* **Center**: **Global Search** input

* Placeholder: "Search contacts, leads, opps, quotes…"

* Results grouped by entity type, with keyboard navigation.

* **Right**:

* "+ Create" button (dropdown): Lead, Opportunity, Contact, Quotation, Product, Activity

* Notification bell (optional)

* User avatar menu (profile, preferences, sign out)

### **Left sidebar (collapsible)**

* Dashboard

* Leads

* Pipeline

* Contacts

* Products

* Quotations

* Sales Orders

* Activities

* Settings (visible by role)

When collapsed: icons only, tooltips on hover.

### **Page structure (common)**

* **Page header row**:

* Title (e.g., "Pipeline")

* Context switchers (team, view, filters)

* Primary action button

* **Subheader**:

* Filter chips (Owner: Me, Team: Nordics, Stage: Qualified…)

* Saved views dropdown

* **Main content**:

* List/Kanban/Builder

* **Right panel** (optional on list pages, always on entity pages):

* Activity timeline and quick add note/reminder
`

const promptFeatureLayouts: string = `## **4) Detailed layouts by feature**

## **A) Sales pipeline (Opportunities Kanban)**

### **Pipeline page layout**

**Header controls**

* **Team selector** (dropdown): "My Personal Pipeline", plus "Team: X" pipelines available to user

* **View selector**: Kanban (default), List, Forecast (optional)

* **Saved views** dropdown (personal/team)

* **Filter bar**:

* Owner (Me / Any / specific user)

* Team

* Stage

* Expected close (date range)

* Tags

* Value range

* **Primary buttons**:

* "+ Opportunity"

* "Customize view" (personal) / "Customize team board" (if permission)

### **Kanban board design**

* Horizontal columns = stages.

* Each column has:

* Stage name + count

* Sum of amounts (optional)

* "…" menu (stage settings if allowed)

* Cards show (compact but informative):

* Opportunity name (bold)

* Company/Contact (secondary)

* Amount + currency

* Expected close date (pill)

* Priority indicator (optional)

* Owner avatar

* Next activity due (small icon + date; red if overdue)

* Tags (1-2 visible + "+n")

**Interactions**

* Drag & drop between stages (updates stage + stage change timestamp)

* Card click opens **Opportunity Drawer** (right-side sliding drawer) OR navigates to detail page (designer choice)

* Quick inline actions on hover:

* Add activity

* Add note

* Set close date

* Change owner

### **"Customize pipeline" (key requirement: each user has custom kanban + team kanbans)**

You'll support **board configurations**:

* **Personal board**: user chooses:

* Which stages appear

* Column order

* WIP limits (optional)

* Card fields shown (toggle: amount, close date, tags, company, next activity)

* Default filters (e.g., Owner=Me)

* **Team board**: similar, but applies to team pipeline and requires permission.

* Personal boards can be created **per team** too (e.g., "My view of Team A pipeline").

UX:

* A "Customize view" panel with:

* "Columns" (drag order, toggle visible)

* "Card fields" (checkboxes)

* "Defaults" (filters, sort)

* "Save as…" (Personal / Team if allowed)

---

## **B) Lead management (List view → move to pipeline)**

### **Leads page (list)**

**Header controls**

* Saved views dropdown (e.g., "New inbound", "My unqualified", "All leads")

* Filters: status, source, owner, team, created date, tag

* Buttons: "+ Lead", "Import" (optional)

**Table columns** (suggested)

* Lead name

* Company

* Email / phone

* Source

* Owner

* Status (New/Contacted/Qualified/Disqualified)

* Last activity

* Next activity

* Created

**Row actions**

* "Qualify" / "Convert to opportunity"

* "Schedule activity"

* "Disqualify"

* "Assign owner"

### **Lead detail page (very important)**

Two-column layout:

**Left main**

* Header: Lead name + status pill + owner + team

* Quick actions: Convert, Disqualify, Create quotation (optional)

* Tabs:

1. Overview (default)

2. Notes & Activity (or this can be on right timeline)

3. Related (contacts, opportunities created from lead)

4. Audit (optional)

**Overview section blocks**

* Contact info (name, company, email, phone)

* Lead details (source, tags, estimated value, interest/product)

* Qualification checklist (optional)

* Custom fields section (configurable)

**Right side panel**

* **Activity timeline** (notes + reminders + system events)

* "Add note" input (supports @mentions optional)

* "Add reminder" quick form:

* Type: Call / Email / Follow-up / Meeting / Task

* Due date/time

* Assign to (default owner)

* Linked entity auto set to current lead

### **Convert lead → opportunity flow**

A light modal or drawer:

* Opportunity name (default from lead)

* Link/create contact + company

* Choose pipeline/team + initial stage

* Expected amount + close date

* Owner

* Option: mark lead as converted + keep reference

After convert:

* User lands in opportunity detail (or pipeline with highlight)

---

## **C) Contacts list + contact detail**

### **Contacts list page**

* Table with:

* Name

* Company (if person)

* Type (Person/Company)

* Email

* Phone

* Owner

* Tags

* Last activity / Next activity

* Row click opens Contact detail.

### **Contact detail page**

Two-column layout like others.

**Header**

* Name + type badge

* Primary actions: New opportunity, New quotation, Add activity

* Secondary: Merge (admin), Export (optional)

**Left main tabs**

* Overview: contact fields, addresses, VAT/ID (optional), owner/team

* Opportunities: list of related opportunities

* Quotations / Orders: related docs

* Products (optional "interests" or purchased items)

**Right panel**

* Activity timeline + add note/reminder

---

## **D) Products list + product detail**

### **Products list page**

* Table columns:

* SKU

* Name

* Sales price

* Cost (restricted by role)

* Active

* Category

* Actions: New product (permission)

### **Product detail page**

* Header: product name + SKU

* Tabs: Overview, Pricing, Metadata

* Keep it simple unless you're building inventory later.

---

## **E) Quotation builder (Odoo-like rows)**

### **Quotations list page**

* Table:

* Quote number

* Customer

* Opportunity (optional link)

* Status (Draft/Sent/Accepted/Rejected/Expired)

* Total

* Created / Valid until

* Owner

* Actions: New quotation

### **Quotation detail (builder) page layout**

This is the most "app-like" page; minimize scrolling.

**Top header**

* Quote number + status pill

* Customer (searchable dropdown)

* Linked opportunity (optional)

* Valid until date

* Currency

* Owner/team

* Buttons:

* Save

* Send (changes status to Sent)

* Mark accepted (→ optionally create Sales Order)

* PDF preview (optional)

**Main canvas split**

* **Left (70%)**: line items grid

* **Right (30%)**: totals + settings + activity

#### **Line items grid (Odoo-like)**

Row columns:

* Drag handle (reorder)

* Product (searchable)

* Description (editable textarea-like)

* Qty

* Unit

* Unit price

* Discount %

* Tax % (optional)

* Line total

* Trash icon

Features:

* "Add line" button

* Inline product search (typeahead)

* Keyboard friendly: Enter to next cell, Cmd/Ctrl+Enter add row

* Optional row types:

* Section header row

* Note row
  (If you want Odoo parity, keep these—they're extremely useful.)

#### **Totals card (right)**

* Subtotal

* Discount total (optional)

* Tax total (optional)

* Total

* "Optional: deposit / payment terms" (later)

* "Internal note" (for sales team)

**Right panel below totals**

* Activity timeline + add note/reminder

### **Create Sales Order from quotation**

* "Confirm" / "Mark accepted" creates Sales Order snapshot of quote lines.

* Sales Order becomes locked-ish (editable by role).

---

## **F) Sales orders**

### **Sales Orders list**

* Order number

* Customer

* Status (Draft/Confirmed/Delivered/Invoiced/Cancelled — or simpler)

* Total

* Linked quotation

* Owner

* Dates

### **Sales Order detail**

* Similar to quotation, but fewer editable controls.

* Tabs: Overview, Lines, Activity, Documents (optional)

---

## **G) Reminders/notes (unified Activity system)**

You want reminders/notes for Leads, Opportunities, Quotations, Sales Orders.

### **Activity types**

* **Note** (free text)

* **Reminder/Task** (due date/time, status open/done, assigned user)

* Optional: Call, Email, Meeting as "task categories"

### **UI component (consistent)**

In the right panel:

* Quick add "Note"

* Quick add "Reminder"

* Timeline list:

* Overdue reminders at top (red)

* Upcoming reminders

* Notes

* System events (stage changed, status changed, amount updated)

On list pages:

* Show "Next activity" column, clickable to open quick complete/reschedule.
`

const promptRoles: string = `## **5) Roles (simple but enough)**

Keep roles small, add permissions gradually.

1. **Admin**

 * Full access, settings, roles, delete records, manage pipelines/stages, manage teams.

2. **Sales Manager**

 * Manage team pipelines/boards, reassign owners, view all team records, approve discounts (optional), see revenue reports.

3. **Sales Rep**

 * Work on own leads/opportunities/quotes/orders, create/edit within permitted scope, personal views.

4. **Read-only / Finance**

 * Read access to contacts, quotes, orders; can export; can mark orders invoiced (if you need).

5. **Support (optional)**

 * Can view customers and notes, add activities, but cannot change pipeline financial fields.

Implementation-wise: role-based permissions + record-level rules:

* Reps can see their own + team's depending on settings.

* Managers can see all in their teams.

* Admin sees all.
`

const promptExample: string = `${promptProductPrinciple}
---

${promptInformationArchitecture}
---

${promptAppShellLayout}
---

${promptFeatureLayouts}
---

${promptRoles}`

export {
  promptProductPrinciple,
  promptInformationArchitecture,
  promptAppShellLayout,
  promptFeatureLayouts,
  promptRoles,
  promptExample
}
