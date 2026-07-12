You’re in **Ask mode**, so I can’t edit `README.md` directly. Below is a complete README you can copy into your repository. It’s based on a full read of your codebase.

---

## Ready-to-use `README.md`

```markdown
# Xai — Intelligence Workspace

**Live Demo:** https://xai-ws.vercel.app  
**Repository:** https://github.com/DeveloperOmarFaruk/xai-intelligence-workspace

---

## 1. Project Overview

**Xai** is a single-page marketing and product showcase for an enterprise AI intelligence platform. It presents a narrative journey from raw data ingestion to autonomous automation, built as a polished, scroll-driven landing experience.

The site is composed of five main sections:

| Section                 | Purpose                                                                |
| ----------------------- | ---------------------------------------------------------------------- |
| **Hero**                | Brand introduction with a 3D neural orb visualization                  |
| **Neural Pipeline**     | Scroll-pinned walkthrough of the 3-step data → AI → insight flow       |
| **Dashboard**           | Interactive “Mission Control” UI with KPIs, charts, and activity feeds |
| **Autonomous Topology** | 3D cluster network showing dynamic information restructuring           |
| **Footer**              | Product, company, and legal links                                      |

---

## 2. Technical Approach

### Architecture

- **Framework:** Next.js 16 (App Router) with React 19
- **Rendering:** Client-heavy UI (`"use client"`) for animations and 3D scenes; server layout for metadata and SEO
- **Styling:** Tailwind CSS v4 with custom OKLCH design tokens in `app/globals.css`
- **Data:** Static mock content centralized in `data/data.ts` with TypeScript types in `types/`
- **State:** TanStack React Query wired via `app/providers.tsx` (Redux Toolkit scaffold exists but is commented out)

### Design System

- **Typography:** Instrument Serif (display), Inter (body), JetBrains Mono (labels/telemetry)
- **Theme:** Deep midnight indigo background with purple/cyan accents
- **Utilities:** Custom Tailwind utilities — `text-gradient`, `eyebrow`, `grid-bg`, `soft-border`, `custom-scroll`

### Component Structure
```

```text
app/
├── page.tsx          # Main landing page composition
├── layout.tsx        # Root layout + metadata
├── providers.tsx     # React Query provider
└── globals.css       # Design tokens + animations
components/
├── hero/             # Hero + NeuralOrb (Three.js)
├── pipeline/         # GSAP scroll-pinned pipeline steps
├── dashboard/        # Mission Control UI mock
├── wow/              # ClusterViz (Three.js) + feature list
├── layout/           # Navbar + Footer
└── ui/               # shadcn/ui primitives (Button, Dialog, Sonner)
data/data.ts          # Pipeline steps, KPIs, activities, footer links
types/                # TypeScript interfaces for all data models
```

```

data/data.ts # Pipeline steps, KPIs, activities, footer links
types/ # TypeScript interfaces for all data models

```

### Performance Decisions

- **Intersection Observer** on 3D canvases (`NeuralOrb`, `ClusterViz`) — WebGL runs only when visible (`frameloop: isInView ? "always" : "never"`)
- **Memoized geometry** — particle positions and cluster nodes computed once with `useMemo`
- **GSAP context cleanup** — `gsap.context().revert()` on unmount to avoid memory leaks

---

## 3. Technology Stack

| Category         | Technologies                                                  |
| ---------------- | ------------------------------------------------------------- |
| **Core**         | Next.js 16.2.4, React 19.2.4, TypeScript 5                    |
| **Styling**      | Tailwind CSS 4, shadcn/ui, tw-animate-css                     |
| **Animation**    | GSAP 3 + ScrollTrigger, Framer Motion 12                      |
| **3D / WebGL**   | Three.js, React Three Fiber, @react-three/drei                |
| **Icons**        | Lucide React                                                  |
| **Data / State** | TanStack React Query 5 (Redux Toolkit scaffolded, not active) |
| **UI Utilities** | clsx, tailwind-merge, class-variance-authority                |
| **Deployment**   | Vercel                                                        |

---

## 4. Run Locally

### Prerequisites

- **Node.js** 18.17+ (recommended: 20 LTS)
- **npm** (or yarn / pnpm / bun)

### Installation

```bash
# Clone the repository
git clone https://github.com/DeveloperOmarFaruk/xai-intelligence-workspace.git
cd xai-intelligence-workspace

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## 5. Key Animation & Interaction Decisions

### 5.1 Hero — Framer Motion + Three.js Neural Orb

**Why:** The hero sets the product tone immediately. Framer Motion handles scroll-triggered text reveals; Three.js delivers a premium “neural core” feel.

**Implementation:**

- **Framer Motion** `whileInView` with `fadeInUpVariants` (opacity + 25px Y) on badge, heading, CTA, and orb container
- **412 particles** on a sphere shell with additive blending and slow auto-rotation via `useFrame`
- **OrbitControls** — drag to rotate, scroll to zoom, damped movement
- **CSS:** `animate-float` on scroll chevron, `animate-spin` (4s) on Sparkles icon
- **Overlays:** “Nodes: 412”, “Sync 99.8%” telemetry labels for a live-system feel

### 5.2 Neural Pipeline — GSAP ScrollTrigger Pinning

**Why:** A sticky, step-by-step scroll story keeps users engaged through the three-stage pipeline without page jumps.

**Implementation:**

- **ScrollTrigger** pins each `[data-panel]` at `top top` with `scrub: true`
- **Staggered header reveal** — eyebrow + heading fade/slide in at `top 85%` with `toggleActions: "play reverse restart reverse"`
- **Alternating layout** — odd steps flip content/visual order (`md:order-1/2`)
- **Step visuals** (`PipelineViz`):
  - Step 01: animated data bars (ingest)
  - Step 02: SVG node graph (semantic analysis)
  - Step 03: bar chart (insight generation)

### 5.3 Dashboard — Scroll Reveal + App Shell UX

**Why:** The dashboard section sells the product as a real workspace, not just marketing copy.

**Implementation:**

- **GSAP** scroll reveal on section header (“Mission Control for Intelligence”)
- **Framer Motion** fade-in on the dashboard container
- **Responsive shell:** sidebar + topbar on desktop; stacked layout with internal scroll on mobile (`custom-scroll`)
- **Static SVG chart** for Intelligence Growth Curve (predicted vs actual)
- **Progress bars** with gradient fills for automation status

### 5.4 Autonomous Topology — Interactive 3D Cluster Graph

**Why:** The “wow” section needs a memorable, explorable visualization of dynamic graph restructuring.

**Implementation:**

- **40 nodes, 112 edges** in 3D with `@react-three/drei` `Line` and sphere meshes
- **Auto-rotation pauses** when the user interacts; resumes 1.5s after release
- **OrbitControls** with damping for smooth exploration
- **Framer Motion** on the visualization container and feature list items

### 5.5 Global Micro-interactions

| Interaction       | Location          | Technique                                  |
| ----------------- | ----------------- | ------------------------------------------ |
| Smooth scroll     | Site-wide         | `scroll-behavior: smooth` in `globals.css` |
| Sticky navbar     | Header            | `backdrop-blur-xl` + border                |
| Expandable search | Navbar            | Width/opacity transition (`duration-300`)  |
| Mobile menu       | Navbar            | `max-h` accordion animation                |
| Pulse indicators  | Footer, NeuralOrb | `animate-pulse`, `animate-pulse-glow`      |
| Custom scrollbar  | Dashboard content | `.custom-scroll` utility (purple hover)    |

### 5.6 Animation Library Split

| Library                  | Used For                                              |
| ------------------------ | ----------------------------------------------------- |
| **GSAP + ScrollTrigger** | Scroll-pinned pipeline panels, section header reveals |
| **Framer Motion**        | Hero, Dashboard, Wow, Footer scroll-in animations     |
| **Three.js / R3F**       | Hero particle orb, cluster network graph              |
| **CSS keyframes**        | Float, pulse-glow, orbit, shimmer utilities           |

This split keeps scroll-heavy choreography in GSAP and component-level enter animations in Framer Motion, while WebGL handles immersive 3D scenes.

---

## 6. Deployment

The project is deployed on **Vercel**:

- **Production URL:** [https://xai-ws.vercel.app/](https://xai-ws.vercel.app/)

Connect your GitHub repo to Vercel for automatic deploys on push to `main`.

---

## 7. License

This project was built as an interview/assignment showcase. See the repository for license details.

---

## 8. Author

**Developer Omar Faruk**  
GitHub: [DeveloperOmarFaruk](https://github.com/DeveloperOmarFaruk)

```

---

## Section summary (serial order)

1. **Title & links** — Live demo + GitHub
2. **Project overview** — What Xai is and its five sections
3. **Technical approach** — Architecture, design system, folder structure, performance
4. **Technology stack** — Full dependency table
5. **Run locally** — Clone, install, dev, build, lint
6. **Animation & interaction decisions** — Hero, Pipeline, Dashboard, Wow, micro-interactions, library split
7. **Deployment** — Vercel URL
8. **Author** — Your GitHub profile

---

To have this written into `README.md` automatically, switch to **Agent mode** and ask me to update the file.
```
