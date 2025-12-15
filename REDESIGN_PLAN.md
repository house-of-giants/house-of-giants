# House of Giants Website Redesign

> A comprehensive planning document for the complete rebuild of houseofgiants.com

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Brand Voice & Tone](#brand-voice--tone)
3. [Target Audiences](#target-audiences)
4. [Current Site Analysis](#current-site-analysis)
5. [Proposed Information Architecture](#proposed-information-architecture)
6. [Content Strategy](#content-strategy)
7. [Case Study Framework](#case-study-framework)
8. [Differentiation Messaging](#differentiation-messaging)
9. [SEO Strategy](#seo-strategy)
10. [Page-by-Page Requirements](#page-by-page-requirements)
11. [Technical Considerations](#technical-considerations)
12. [Design Direction](#design-direction)
13. [Implementation Phases](#implementation-phases)
14. [Success Metrics](#success-metrics)

---

## Executive Summary

### The Goal

Redesign houseofgiants.com to **sharpen differentiation** from competitors while serving **startups and scale-ups** as the primary audience, supported by deep, conversion-focused case studies.

### Key Strategic Decisions

| Decision                  | Direction                                                |
| ------------------------- | -------------------------------------------------------- |
| **Geographic Focus**      | Denver primary + broader national reach                  |
| **Primary Audience**      | Startups & Scale-ups                                     |
| **Brand Voice**           | Maintain current balance (casual professional with edge) |
| **Main Problem to Solve** | Differentiation from competitors                         |
| **Tech Stack**            | Next.js App Router (current stack)                       |
| **Case Studies**          | Critical priority - deeper, conversion-focused           |

### Core Outcomes

1. Visitors immediately understand WHY to choose HoG over competitors
2. Startup founders see themselves in the messaging and case studies
3. Case studies prove value with real metrics and outcomes
4. Clear path from landing → understanding → contact

---

## Brand Voice & Tone

### The House of Giants Voice

The HoG voice is distinctive and should be **preserved**. It's what separates us from generic agency speak.

#### Characteristics

| Trait                       | Description                                  | Example                                                   |
| --------------------------- | -------------------------------------------- | --------------------------------------------------------- |
| **Direct & Irreverent**     | Say what we mean without corporate padding   | "No templates. No mercy"                                  |
| **Anti-Corporate**          | Call out industry BS honestly                | "Page builders are great… until they aren't"              |
| **Confident, Not Arrogant** | Back claims with experience                  | "10+ years of pushing boundaries"                         |
| **Casual Professional**     | Occasional edge without being unprofessional | "build cool shit", "damn good"                            |
| **Metaphor-Rich**           | Creative analogies that land                 | "like prefab tiny homes—cute until you need room to grow" |
| **Substance Over Fluff**    | Real information, not buzzwords              | Technical specifics, not vague promises                   |

#### Writing Guidelines

**DO:**

- Use direct, conversational language
- Back up claims with specifics
- Acknowledge industry problems honestly
- Use occasional mild irreverence
- Include metaphors and analogies
- Write like talking to a smart peer

**DON'T:**

- Use empty buzzwords ("synergy", "leverage", "holistic")
- Oversell or make promises without proof
- Be edgy just for attention
- Sound like AI-generated content
- Pad content with filler
- Talk down to the reader

#### Voice Examples

✅ **Good:**

> "We don't just make websites. We build digital infrastructure that grows with you."

❌ **Bad:**

> "We leverage cutting-edge technologies to deliver holistic digital solutions that drive synergistic value."

✅ **Good:**

> "Your website should work as hard as your team does."

❌ **Bad:**

> "Unlock the potential of your digital presence with our comprehensive service offerings."

✅ **Good:**

> "That agency promising faster, cheaper development with AI? They might not be telling you the whole story."

❌ **Bad:**

> "In today's rapidly evolving technological landscape, it's important to choose partners who align with your vision."

---

## Target Audiences

### Primary: Startups & Scale-ups

**Who they are:**

- Pre-seed to Series B companies
- Technical founders or product-minded CEOs
- 5-50 employees typically
- Need to move fast but hate cutting corners

**Budget range:** $15k-$50k+ for initial build

**Pain points:**

- Outgrowing Squarespace/Webflow/templates
- Need credibility for investors, customers, and talent
- Previous agency experiences were disappointing
- Don't want to rebuild in 18 months

**What they need from the site:**

- Speed-to-launch narratives
- ROI and conversion metrics
- Case studies showing growth trajectory
- Technical depth that earns trust
- Pricing transparency (they appreciate it)

**Key messages that resonate:**

- "Built to scale from day one"
- "No rebuilding in 18 months"
- "We've helped startups get funded"
- "Your technical co-founder for the web"

### Secondary: QSR & Restaurant Brands

**Who they are:**

- Multi-location restaurant groups (5-100+ locations)
- Marketing directors at QSR chains
- Frustrated with Toast/Square website limitations

**Pain points:**

- POS-integrated sites are slow and limiting
- Can't run promotions without breaking things
- Brand inconsistency across locations
- Third-party ordering fees eating margins

**What they need from the site:**

- Industry-specific expertise proof
- Multi-location case studies
- Understanding of ordering systems
- Loyalty/retention tool knowledge

### Tertiary: Enterprise Marketing Teams

**Who they are:**

- Fortune 500 marketing departments
- Agency-fatigued teams wanting boutique attention
- Complex stakeholder environments

**Pain points:**

- Big agencies don't care about their project
- Internal dev teams are overloaded
- Need enterprise security/compliance
- Decision-making requires many stakeholders

---

## Current Site Analysis

### What's Working

1. **Strong brand voice** in blog content and copywriting
2. **Impressive client logos** (Microsoft, Uber, Salesforce, etc.)
3. **Transparent pricing** signals trust
4. **Technical credibility** through code examples and approach
5. **Restaurant-specific landing page** shows vertical expertise

### What's Not Working

| Problem                          | Impact                                                    | Priority    |
| -------------------------------- | --------------------------------------------------------- | ----------- |
| **Differentiation unclear**      | Visitors don't know WHY to choose HoG                     | 🔴 Critical |
| **Service fragmentation**        | 4 service pages with overlapping content confuse visitors | 🔴 Critical |
| **Shallow case studies**         | Strong client list but no proof of results                | 🔴 Critical |
| **No About/Team page**           | Missing trust signal for a "partnership" focused studio   | 🟡 High     |
| **Audience selector complexity** | Feels bolted-on, delays value prop                        | 🟡 High     |
| **Blog disorganization**         | No categories, hard to discover content                   | 🟢 Medium   |
| **Repetitive content**           | Same value props repeated across pages                    | 🟢 Medium   |

### Competitive Gap

The current site explains **what** House of Giants does, but not **why** someone should choose HoG over:

- Other Denver agencies
- National boutique studios
- Larger agencies with more resources
- Freelancers who are cheaper

The redesign must answer: **"Why House of Giants?"**

---

## Proposed Information Architecture

### Current Structure (Problems)

```
/                          Homepage (audience selector delays value)
├── /work                   Work hub
│   └── /work/[slug]        5 case studies (shallow)
├── /web-development        Service page (overlaps with others)
├── /web-design             Service page (overlaps with others)
├── /ux-architecture        Service page (overlaps with others)
├── /digital-innovation     Service page (overlaps with others)
├── /restaurant-websites    Vertical landing page ✓
├── /pricing                Pricing ✓
├── /blog                   Blog (no organization)
│   └── /blog/[slug]        Blog posts
└── /contact                Contact ✓
```

### Proposed Structure

```
/                          Homepage (startup-focused, differentiation-first)
│
├── /work                   Case Studies Hub (filterable)
│   └── /work/[slug]        Deep-dive case studies with metrics
│
├── /services               Unified Services Page
│   ├── #development        Section: Web Development
│   ├── #design             Section: Web Design
│   ├── #ux                 Section: UX Architecture
│   └── #strategy           Section: Digital Strategy
│
├── /for-startups           Startup-specific landing page (PRIMARY)
├── /for-restaurants        Restaurant/QSR landing page (existing, refined)
│
├── /about                  NEW: Team, philosophy, values, process
│
├── /pricing                Pricing (existing structure, refined)
│
├── /blog                   Blog with categories
│   ├── /blog?category=     Category filtering
│   └── /blog/[slug]        Blog posts
│
└── /contact                Contact (existing structure)
```

### Navigation

**Primary Nav:**

- Work
- Services
- About
- Blog
- Pricing
- [Contact CTA Button]

**Footer:**

- All primary links
- Social links
- For Startups / For Restaurants (audience paths)
- Legal (Privacy, Terms if needed)

---

## Content Strategy

### Content Gaps to Fill

| Gap                            | Priority | Notes                                    |
| ------------------------------ | -------- | ---------------------------------------- |
| **About/Team page**            | High     | Essential for "partnership" positioning  |
| **Startup landing page**       | High     | Direct path for primary audience         |
| **Deep case studies**          | Critical | Need metrics, process, testimonials      |
| **Unified services narrative** | High     | One compelling story, not four fragments |
| **Blog categories**            | Medium   | Organize existing strong content         |
| **Process documentation**      | Medium   | How HoG actually works                   |

### Content Principles

1. **Lead with outcomes, not features** - "Increased conversions 40%" not "Built custom React components"

2. **Specificity builds trust** - "8-week timeline" not "fast turnaround"

3. **Show, don't just tell** - Screenshots, metrics, testimonials embedded in context

4. **Address objections proactively** - "Yes, custom costs more upfront. Here's why it's cheaper long-term."

5. **Respect the reader's time** - Dense, scannable content. No padding.

### Blog Content Strategy

**Categories to implement:**

- Development (technical posts)
- Strategy (business/approach posts)
- Industry (QSR, startups, etc.)
- Opinion (hot takes, thought leadership)

**Content themes that support positioning:**

- Why custom > templates (existing content)
- Startup-specific web guidance
- Technical deep-dives (builds credibility)
- Industry critiques (differentiates voice)

---

## Case Study Framework

### Current Problem

Case studies exist but lack:

- Concrete metrics and results
- Clear problem/solution narrative
- Embedded testimonials
- Technical depth that builds credibility

### Required Case Study Structure

Every case study should include:

```markdown
## [Project Name]

### [One-line hook: the transformation]

**Client:** [Name, description, why they matter]
**Industry:** [Category]
**Timeline:** [Duration]
**Services:** [What HoG provided]

---

### The Challenge

[2-3 paragraphs: What problem did they face? What was at stake?
Be specific about business pain, not just technical needs.]

### Our Approach

[What made HoG's approach different? What did we do that others wouldn't?
Include strategic thinking, not just execution.]

### The Solution

[Technical and design decisions. What was built?
Include specifics: tech stack, key features, architectural choices.]

### The Results

[METRICS. This is critical.]

- XX% increase in [conversion/traffic/engagement]
- $XX saved in [time/money/resources]
- XX% improvement in [performance metric]
- [Qualitative outcome: "Now they can..."]

### Client Testimonial

> "[Extended quote from client about working with HoG]"
> — [Name], [Title], [Company]

### Tech Stack

[List of technologies used - builds credibility with technical buyers]
```

### Priority Case Studies to Develop

1. **CyberNest** (existing) - Expand with metrics, deepen technical narrative
2. **Hyperlocology** (existing) - Add business results, clarify platform value
3. **Startup MVP Story** - Need a clear "idea to funded" narrative
4. **QSR/Multi-location** - Strong restaurant vertical proof
5. **Enterprise/Fortune 500** - If available, massive credibility

---

## Differentiation Messaging

### The Core Problem

Visitors currently learn WHAT HoG does, not WHY they should choose HoG.

### Four Differentiation Pillars

#### 1. "We Stay Small on Purpose"

**Message:** While other agencies scale to maximize profit, we stay lean to maximize quality.

**Proof points:**

- Founders stay in production (not just sales)
- No account manager shuffle
- Direct access to the people building your project
- Deep partnership, not vendor relationship

**Copy example:**

> "Most agencies scale until the founders are three layers removed from the work. We stay small because we actually like building things—and because our partners deserve better than being handed off to whoever's available."

#### 2. "Tech-Agnostic, Outcome-Obsessed"

**Message:** We don't push our favorite stack. We choose what's right for your problem.

**Proof points:**

- WordPress when it makes sense, React when it doesn't
- No recurring platform fees you don't need
- You own everything we build
- Built to migrate if you ever need to

**Copy example:**

> "Some agencies are Shopify-only. Or React-obsessed. Or push the same headless CMS on everyone. We're tech-agnostic because we'd rather solve your problem than pad our portfolio with matching tech stacks."

#### 3. "Built to Scale from Day One"

**Message:** No rebuilding in 18 months. We architect for where you're going, not just where you are.

**Proof points:**

- Performance as a feature, not an afterthought
- Modular architecture that grows with you
- No platform lock-in
- Documentation and handoff that actually works

**Copy example:**

> "That MVP you rushed to launch? You'll be rebuilding it in 18 months. We've seen it happen dozens of times. We build the version that survives your Series A, your pivot, and your 10x traffic spike."

#### 4. "We Actually Understand Code"

**Message:** Not AI-dependent. Not design-only. We can explain every line we ship.

**Proof points:**

- Senior developers on every project
- Real debugging at 2 AM if needed
- Technical decisions we can defend
- No "vibe coding" with AI-generated mystery code

**Copy example:**

> "Ask your agency to explain their architectural decisions. If you get uncomfortable silence or vague hand-waving, you're looking at a team that outsourced their thinking to a machine. We can whiteboard your entire system."

---

## SEO Strategy

### Geographic Approach

**Primary:** Denver focus for local SEO value
**Secondary:** National reach for startup audience

**Implementation:**

- Maintain "Denver web development" positioning
- Add "remote-friendly" and "US-based" signals
- Target "startup web development" nationally
- Local business schema for Denver presence
- Location page or section for Denver credibility

### Target Keywords

**Primary (High Intent):**
| Keyword | Search Intent | Target Page |
|---------|---------------|-------------|
| custom web development for startups | Transactional | /for-startups |
| startup website agency | Transactional | /for-startups |
| denver web development | Local | Homepage, /about |
| custom web app development | Transactional | /services |
| mvp development agency | Transactional | /for-startups |

**Secondary (Problem-Aware):**
| Keyword | Search Intent | Target Page |
|---------|---------------|-------------|
| outgrow squarespace | Problem-aware | Blog post |
| wordpress limitations | Problem-aware | Blog post |
| restaurant website development | Transactional | /for-restaurants |
| qsr website design | Transactional | /for-restaurants |

**Long-Tail Blog Opportunities:**

- "when to hire a web agency vs freelancer"
- "custom website vs template roi calculator"
- "startup website checklist series b"
- "how much should a startup website cost"
- "signs you've outgrown your website"

### Technical SEO Requirements

- [ ] Proper meta titles/descriptions per page
- [ ] Open Graph images for all pages
- [ ] Structured data (Organization, LocalBusiness, Service, Article)
- [ ] XML sitemap
- [ ] Canonical URLs
- [ ] Core Web Vitals optimization
- [ ] Mobile-first indexing compliance

---

## Page-by-Page Requirements

### Homepage

**Purpose:** Convert startup visitors, establish differentiation immediately

**Sections (in order):**

1. **Hero**
   - Startup-focused headline
   - Immediate value proposition
   - Primary CTA: See Our Work / Start Your Project
   - NO audience selector delaying the message

2. **Differentiation Block**
   - The 4 pillars (small on purpose, tech-agnostic, built to scale, understand code)
   - Visual, scannable, memorable

3. **Featured Case Studies (2-3)**
   - Cards with visible metrics
   - Not just images—actual results
   - Link to full case studies

4. **Services Overview**
   - Brief descriptions
   - Link to /services for detail
   - Focus on outcomes, not deliverables

5. **Social Proof**
   - Client logos
   - 1-2 testimonials
   - Trust signals (years in business, projects delivered)

6. **Pricing Teaser**
   - "Transparent pricing starting at $15k"
   - Link to /pricing
   - Signals: no surprises, no games

7. **CTA Block**
   - "Ready to build something that matters?"
   - Contact form or link to /contact

---

### Services Page (/services)

**Purpose:** Explain what HoG does in one unified narrative

**Approach:** Single page with sections, not 4 separate pages

**Sections:**

1. **Hero**
   - "What We Build"
   - Overview of capabilities

2. **Services Grid/List**
   - Web Development
   - Web Design
   - UX Architecture
   - Digital Strategy
   - Each with: description, key deliverables, "good for" indicator

3. **How We Work**
   - Process overview (Discovery → Strategy → Build → Launch)
   - Not vague—specific about what happens

4. **Tech We Use**
   - Not a logo wall—contextual
   - "We use [X] when [situation]"

5. **CTA**
   - Link to /contact or /pricing

---

### For Startups (/for-startups)

**Purpose:** Direct conversion path for primary audience

**Sections:**

1. **Hero**
   - "Websites That Get Startups Funded"
   - Speak directly to startup pain points

2. **The Problem**
   - Templates don't scale
   - Agencies don't understand speed
   - DIY looks amateur to investors

3. **How We're Different**
   - Startup-specific differentiation
   - Speed + quality, not speed vs quality

4. **Startup Case Studies**
   - 2-3 relevant examples
   - Metrics that matter to founders

5. **Pricing Context**
   - "Most startup projects: $15k-$40k"
   - Timeline expectations

6. **CTA**
   - "Let's talk about your launch"

---

### About Page (/about) — NEW

**Purpose:** Build trust, show the humans behind the work

**Sections:**

1. **Hero**
   - "Small Team. Big Results."
   - Philosophy in one line

2. **Our Story**
   - Founded 2017
   - Why we exist
   - What we believe

3. **The Team**
   - Dominic + key team members
   - Real photos, real humans
   - Brief bios with personality

4. **Our Values/Philosophy**
   - Stay small on purpose
   - Tech-agnostic approach
   - Partnership over vendor relationship
   - Quality over volume

5. **Where We Are**
   - Denver, Colorado
   - Remote-friendly
   - Map or location visual

---

### Work/Case Studies (/work)

**Purpose:** Prove value with real results

**Features:**

- Filterable by industry/type
- Cards show: title, client, key metric, image
- Quick-view hover or click-through to detail

**Individual Case Study Pages:**

- Follow framework defined above
- Rich media (screenshots, process images)
- Embedded testimonials
- Related case studies at bottom

---

### Blog (/blog)

**Purpose:** Thought leadership, SEO, brand voice showcase

**Features:**

- Category filtering
- Search
- Featured/recent posts
- Author attribution

**Categories:**

- Development
- Strategy
- Industry
- Opinion

---

### Pricing (/pricing)

**Purpose:** Transparency, qualification, trust

**Current structure works well. Refine with:**

- Clearer "who this is for" per tier
- More emphasis on value, less on features
- FAQ section expansion
- Testimonial relevant to pricing/value

---

### Contact (/contact)

**Purpose:** Convert interested visitors

**Current structure works. Ensure:**

- Simple form for quick inquiries
- Detailed form option for serious projects
- Response time expectation
- Alternative contact methods (email, phone)

---

## Technical Considerations

### Stack Decision: Next.js App Router

**Staying with current stack because:**

- Well-structured existing codebase
- App Router provides good performance
- No compelling reason to migrate
- Team familiarity

### Recommended Improvements

| Area            | Recommendation                                          |
| --------------- | ------------------------------------------------------- |
| **Components**  | Consolidate similar card/section components             |
| **Performance** | Audit Core Web Vitals, optimize images                  |
| **Animation**   | Review Framer Motion usage—keep impactful, remove noise |
| **Images**      | Ensure lazy loading, proper formats (WebP)              |
| **CMS**         | Consider Sanity/Notion for blog (optional)              |

### Performance Targets

- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Lighthouse Performance: > 90

---

## Design Direction

### Current Aesthetic (Keep)

- Dark theme with cyber/neon accents
- Bold typography (Nikolai headings)
- Motion and interaction
- Gradient overlays

### Refinements

| Keep              | Refine                      | Add                       |
| ----------------- | --------------------------- | ------------------------- |
| Dark theme        | Reduce visual noise         | More humanity (photos)    |
| Cyber accents     | More breathing room         | Behind-the-scenes imagery |
| Bold typography   | Consistent hierarchy        | Light mode option         |
| Purposeful motion | Remove decorative animation | Illustration style        |

### Typography

- **Headings:** Nikolai or similar bold display
- **Body:** Inter or similar clean sans-serif
- **Code/Technical:** Mono font for code examples

### Color System

```css
/* Primary */
--c-primary-dark: #1a1f24;
--c-primary-light: #ececec;

/* Accents */
--c-cyber-green: #00ffe0;
--c-neon-sky: #c1ff1d;
--c-cyber-pink: #e61e5e;

/* Text */
--c-white: #ffffff;
--c-moon-rock: #a0a0a0;
```

---

## Implementation Phases

### Phase 1: Foundation (Weeks 1-3)

- [ ] Information architecture restructure
- [ ] Homepage redesign and build
- [ ] Services page consolidation
- [ ] About/Team page creation
- [ ] Navigation updates

### Phase 2: Case Studies (Weeks 4-6)

- [ ] Case study template/component system
- [ ] Deep-dive content development for 3-5 studies
- [ ] Metrics and testimonial integration
- [ ] Work hub page with filtering

### Phase 3: Audience & Content (Weeks 7-8)

- [ ] Startup landing page
- [ ] Blog reorganization with categories
- [ ] SEO optimization pass
- [ ] Content refresh across existing pages

### Phase 4: Polish & Launch (Weeks 9-10)

- [ ] Animation and interaction refinement
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] QA across devices/browsers
- [ ] Launch preparation

---

## Success Metrics

### Primary Metrics

| Metric                    | Current Baseline | Target               | Measurement  |
| ------------------------- | ---------------- | -------------------- | ------------ |
| **Inquiry Quality**       | TBD              | More startup leads   | CRM tagging  |
| **Time to Contact**       | TBD              | Decrease 20%         | Analytics    |
| **Case Study Engagement** | TBD              | 60%+ read full study | Scroll depth |
| **Pricing Page Views**    | TBD              | Increase 30%         | Analytics    |

### Secondary Metrics

- Blog engagement and time on page
- Bounce rate on key landing pages
- Form completion rate
- Returning visitor rate

### Qualitative Signals

- Lead quality feedback from sales conversations
- "How did you hear about us" responses
- Client feedback on site experience

---

## Appendix: Existing Content Inventory

### Blog Posts (20 posts)

Strong content to preserve and reorganize:

- "Page Builders Are a Scam" - High engagement, strong voice
- "The Authenticity Wars" - SEO/AI topic, thought leadership
- "Raising a Web Studio Without Selling Your Soul" - Brand story
- "No Gods, No Stacks: Why We're Tech Agnostic" - Differentiation
- "The Hidden Cost of AI-First Agencies" - Timely, differentiating

### Case Studies (5 existing)

- Hyperlocology - Platform development
- CyberNest - Enterprise SaaS
- Shakey Graves - Creative/entertainment
- Hayashi - Luxury branding
- BackForty - Brand evolution

### Client Logos (10 featured)

Microsoft, Purdue, Uber, Denver Botanic Gardens, Comcast, EA, Shakey Graves, Indiana Pacers, Nobel Prize, Salesforce

---

## Next Steps

1. **Review this document** and flag any strategic disagreements
2. **Prioritize case study development** - which 3-5 stories to tell deeply?
3. **Content collection** - gather metrics, testimonials, team bios
4. **Design exploration** - mood boards, wireframes for key pages
5. **Technical setup** - new project scaffolding with existing patterns

---

_Document created: December 2024_
_For: House of Giants Website Redesign_
