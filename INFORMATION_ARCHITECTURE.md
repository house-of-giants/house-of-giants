# Information Architecture: Current vs. Proposed

## Overview

This document provides a detailed comparison of the current site structure versus the proposed redesign, including navigation flows, page purposes, and content relationships.

---

## Current Site Structure

```
houseofgiants.com/
│
├── / (Homepage)
│   ├── Hero with Audience Selector
│   ├── Services Section
│   ├── Work Preview
│   ├── Clients Section
│   ├── Impact Metrics
│   ├── Pricing CTA
│   └── Contact Form
│
├── /work (Case Studies Hub)
│   ├── /work/hyperlocology
│   ├── /work/cybernest
│   ├── /work/shakey-graves
│   ├── /work/hayashi
│   └── /work/backforty
│
├── /web-development (Service Page)
│   └── Full service page with process, tech, CTA
│
├── /web-design (Service Page)
│   └── Full service page with process, portfolio, CTA
│
├── /ux-architecture (Service Page)
│   └── Full service page with methodology, CTA
│
├── /digital-innovation (Service Page)
│   └── Full service page with approach, CTA
│
├── /restaurant-websites (Vertical Landing Page)
│   └── QSR-specific content, services, CTA
│
├── /pricing (Pricing Page)
│   └── Three tiers with features, CTA
│
├── /blog (Blog Hub)
│   └── /blog/[slug] (20 posts, no categories)
│
├── /contact (Contact Page)
│   └── Forms, FAQ, testimonials
│
└── /audit (Audit Form Page)
    └── Site audit request form
```

### Current Navigation Structure

**Primary Navigation:**

- Work
- Services (Accordion with 4 sub-items)
  - Web Development
  - Web Design
  - UX Architecture
  - Digital Innovation
- Blog
- Pricing
- [Contact CTA]

**Footer:**

- Same as primary nav
- Social links

---

## Problems with Current Structure

### 1. Service Fragmentation

```
┌─────────────────────────────────────────────────────────────┐
│                    CONTENT OVERLAP                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  /web-development ──┬── Custom CMS        ──┐              │
│                     ├── Web Applications   ├── SAME        │
│  /web-design ───────┼── UI/UX Design      ├── CONTENT      │
│                     ├── Performance        ├── REPEATED    │
│  /ux-architecture ──┼── User Research     ├── 4 TIMES     │
│                     ├── Conversion        ──┘              │
│  /digital-innovation┴── Strategy                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 2. Audience Path Confusion

```
User lands on homepage
        │
        ▼
┌───────────────────┐
│ Audience Selector │ ◄── Delays value proposition
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  Selects Startup  │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│ Same generic page │ ◄── No startup-specific content
└───────────────────┘
```

### 3. Missing Content

```
TRUST SIGNALS MISSING:
❌ No About/Team page
❌ No company story
❌ No team photos
❌ No process transparency
❌ No values/philosophy page
```

### 4. Case Study Depth Issue

```
Current Case Study Structure:
┌─────────────────────────────────┐
│ Title + Subtitle                │
│ Hero Image                      │
│ Brief intro (2-3 sentences)     │
│ Challenge (vague)               │
│ Solution (vague)                │
│ Images                          │
│ Testimonial (sometimes)         │
└─────────────────────────────────┘
        │
        ▼
    MISSING:
    ❌ Specific metrics
    ❌ ROI data
    ❌ Technical depth
    ❌ Process details
    ❌ Before/after comparisons
```

---

## Proposed Site Structure

```
houseofgiants.com/
│
├── / (Homepage - Startup-Focused)
│   ├── Hero: Differentiation-first value prop
│   ├── Why HoG: 4 Differentiation Pillars
│   ├── Featured Case Studies (with metrics)
│   ├── Services Overview (brief)
│   ├── Social Proof (logos + testimonial)
│   ├── Pricing Teaser
│   └── CTA Block
│
├── /work (Enhanced Case Studies Hub)
│   ├── Filterable grid (industry, type)
│   ├── /work/[slug] (Deep-dive format)
│   │   ├── Hook + Client intro
│   │   ├── Challenge (specific)
│   │   ├── Approach (HoG difference)
│   │   ├── Solution (technical detail)
│   │   ├── Results (METRICS)
│   │   ├── Testimonial (embedded)
│   │   └── Tech Stack
│   └── Related case studies
│
├── /services (Unified Services Page) ← CONSOLIDATED
│   ├── Hero: "What We Build"
│   ├── #development - Web Development section
│   ├── #design - Web Design section
│   ├── #ux - UX Architecture section
│   ├── #strategy - Digital Strategy section
│   ├── How We Work (process)
│   ├── Tech We Use (contextual)
│   └── CTA
│
├── /for-startups (NEW - Primary Audience Landing)
│   ├── Startup-specific hero
│   ├── Problem/Solution framing
│   ├── Startup-relevant case studies
│   ├── Pricing context
│   └── Startup-focused CTA
│
├── /for-restaurants (Existing, refined)
│   └── QSR-specific content
│
├── /about (NEW - Trust & Team)
│   ├── Hero: "Small Team. Big Results."
│   ├── Our Story
│   ├── Team Members (with photos)
│   ├── Values/Philosophy
│   └── Location (Denver + remote)
│
├── /pricing (Existing, refined)
│   └── Three tiers with better "who it's for"
│
├── /blog (Enhanced with categories)
│   ├── Category filtering
│   ├── Search
│   └── /blog/[slug]
│
├── /contact (Existing structure)
│   └── Forms, FAQ, testimonials
│
└── (Remove /audit - fold into contact)
```

---

## Navigation Comparison

### Current Navigation

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]   Work   Services ▼   Blog   Pricing   [Contact]   │
│                    │                                        │
│                    ├── Web Development                      │
│                    ├── Web Design                           │
│                    ├── UX Architecture                      │
│                    └── Digital Innovation                   │
└─────────────────────────────────────────────────────────────┘
```

### Proposed Navigation

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]   Work   Services   About   Blog   Pricing  [Start]│
└─────────────────────────────────────────────────────────────┘

Footer additions:
├── For Startups (audience path)
├── For Restaurants (audience path)
└── Full sitemap links
```

---

## Page Purpose Matrix

| Page               | Primary Purpose                             | Target Audience      | Key CTA         |
| ------------------ | ------------------------------------------- | -------------------- | --------------- |
| `/`                | Convert visitors, establish differentiation | All (startup focus)  | Start Project   |
| `/work`            | Prove value with results                    | Evaluating prospects | View Case Study |
| `/work/[slug]`     | Deep-dive proof                             | Serious prospects    | Contact Us      |
| `/services`        | Explain capabilities                        | Research phase       | Get Quote       |
| `/for-startups`    | Convert startup leads                       | Startup founders     | Start Project   |
| `/for-restaurants` | Convert QSR leads                           | Restaurant marketing | Get Quote       |
| `/about`           | Build trust                                 | Evaluating prospects | Meet the Team   |
| `/pricing`         | Qualify & convert                           | Budget-conscious     | Choose Package  |
| `/blog`            | SEO, thought leadership                     | Top of funnel        | Read More       |
| `/contact`         | Capture leads                               | Ready to buy         | Submit          |

---

## User Journey Maps

### Primary Journey: Startup Founder

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Google    │───▶│  Homepage   │───▶│  For        │
│   Search    │    │  (sees      │    │  Startups   │
│             │    │  startup    │    │  Landing    │
└─────────────┘    │  focus)     │    │  Page       │
                   └─────────────┘    └──────┬──────┘
                                             │
                   ┌─────────────┐    ┌──────▼──────┐
                   │   Contact   │◀───│    Work     │
                   │   Form      │    │  (startup   │
                   │             │    │  case       │
                   └─────────────┘    │  studies)   │
                                      └─────────────┘
```

### Secondary Journey: QSR Marketing Director

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Google    │───▶│  Restaurant │───▶│    Work     │
│   "QSR      │    │  Websites   │    │  (QSR case  │
│   website"  │    │  Landing    │    │  studies)   │
└─────────────┘    └─────────────┘    └──────┬──────┘
                                             │
                   ┌─────────────┐    ┌──────▼──────┐
                   │   Contact   │◀───│   Pricing   │
                   │   Form      │    │             │
                   └─────────────┘    └─────────────┘
```

### Tertiary Journey: Enterprise Researcher

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Referral  │───▶│  Homepage   │───▶│   About     │
│   or        │    │             │    │  (team,     │
│   LinkedIn  │    │             │    │  values)    │
└─────────────┘    └─────────────┘    └──────┬──────┘
                                             │
       ┌─────────────┐    ┌─────────────┐    │
       │   Contact   │◀───│    Work     │◀───┘
       │   (detailed │    │  (enterprise│
       │   form)     │    │  case)      │
       └─────────────┘    └─────────────┘
```

---

## Content Migration Plan

### Pages to Remove

- `/web-development` → Migrate content to `/services#development`
- `/web-design` → Migrate content to `/services#design`
- `/ux-architecture` → Migrate content to `/services#ux`
- `/digital-innovation` → Migrate content to `/services#strategy`
- `/audit` → Fold functionality into `/contact`

### Pages to Create

- `/services` (unified)
- `/about`
- `/for-startups`

### Pages to Enhance

- `/` (homepage - complete redesign)
- `/work` (add filtering, metrics display)
- `/work/[slug]` (deep-dive format)
- `/blog` (add categories)
- `/pricing` (better "who it's for" framing)

### Pages to Keep (minor refinements)

- `/for-restaurants` (existing, already good)
- `/contact` (working well)

---

## URL Redirect Map

| Old URL                | New URL                 | Type           |
| ---------------------- | ----------------------- | -------------- |
| `/web-development`     | `/services#development` | 301            |
| `/web-design`          | `/services#design`      | 301            |
| `/ux-architecture`     | `/services#ux`          | 301            |
| `/digital-innovation`  | `/services#strategy`    | 301            |
| `/audit`               | `/contact`              | 301            |
| `/restaurant-websites` | `/for-restaurants`      | 301 (optional) |

---

## Component Architecture

### New Components Needed

```
components/
├── About/
│   ├── TeamMember.js
│   ├── TeamGrid.js
│   ├── CompanyStory.js
│   └── Values.js
│
├── CaseStudy/
│   ├── CaseStudyDeep.js (new deep-dive format)
│   ├── MetricsBlock.js
│   ├── TechStackDisplay.js
│   └── ResultsGrid.js
│
├── Differentiation/
│   ├── DifferentiationPillar.js
│   └── DifferentiationGrid.js
│
├── Homepage/
│   ├── HomepageHero.js (new, startup-focused)
│   ├── FeaturedWork.js (with metrics)
│   └── PricingTeaser.js
│
├── Services/
│   ├── ServiceSection.js (for unified page)
│   └── ProcessTimeline.js
│
└── Blog/
    ├── CategoryFilter.js
    └── BlogSearch.js
```

### Components to Deprecate

```
REMOVE:
├── AudienceSelector/ (entire folder - delays value prop)
├── Services/Services.js (replace with unified approach)
└── Hero/Hero.js (replace with new HomepageHero)
```

---

## SEO Impact Analysis

### URLs Gaining Authority

- `/services` - consolidates 4 pages of link equity
- `/for-startups` - new targeted landing page
- `/about` - trust signal for E-E-A-T

### URLs Losing Authority (mitigated by redirects)

- `/web-development` → 301 redirect preserves equity
- `/web-design` → 301 redirect preserves equity
- `/ux-architecture` → 301 redirect preserves equity
- `/digital-innovation` → 301 redirect preserves equity

### New Keyword Targets

| Page            | Primary Keyword                 | Secondary Keywords                      |
| --------------- | ------------------------------- | --------------------------------------- |
| `/for-startups` | startup web development         | mvp development, startup website agency |
| `/services`     | custom web development services | web design services, ux services        |
| `/about`        | denver web development agency   | house of giants team                    |

---

## Implementation Priority

### Phase 1: Foundation

1. Create `/services` (unified)
2. Create `/about`
3. Redesign homepage
4. Set up redirects for old service pages

### Phase 2: Case Studies

1. Create new case study template
2. Enhance existing case studies with metrics
3. Add filtering to `/work`

### Phase 3: Audience Pages

1. Create `/for-startups`
2. Refine `/for-restaurants`

### Phase 4: Content & Polish

1. Add blog categories
2. SEO optimization pass
3. Performance audit
