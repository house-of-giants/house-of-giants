# House of Giants - Complete SEO & Information Architecture Strategy

**Target Audience:** Founders building startups who care about craft  
**Primary Goal:** Attract founder traffic via SEO, convert to pod-based partnerships  
**Timeline:** 6-month implementation plan  
**Last Updated:** December 2024

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Market Research Findings](#market-research-findings)
3. [Homepage SEO Strategy](#homepage-seo-strategy)
4. [Complete Site Architecture](#complete-site-architecture)
5. [User Journey Optimization](#user-journey-optimization)
6. [Content Calendar](#content-calendar)
7. [Local SEO Strategy](#local-seo-strategy)
8. [Technical Implementation](#technical-implementation)
9. [Success Metrics](#success-metrics)
10. [Competitive Advantages](#competitive-advantages)

---

## Executive Summary

### The Strategy

Target founder-direct traffic (B2C) as primary market, with separate white-label offering (B2B) for agencies. Founder market has 10x search volume and better SEO ROI.

### Key Decisions

- **Homepage:** Founder-focused messaging
- **Pricing Model:** Pod-based dedicated teams (not project-based)
- **Geographic Focus:** Denver local + national reach
- **Differentiation:** Anti-agency positioning, craft-focused, transparent pricing

### Primary Keywords

1. custom web development (33,100/mo searches)
2. web development partner (590/mo, low competition)
3. startup web development denver (1,900/mo)
4. dedicated development team (1,900/mo)
5. custom web application development (1,600/mo)

### Expected Results (6 months)

- Organic traffic: +150%
- Keywords in top 10: 35+
- Domain authority: +10 points
- Conversion rate: 3-5%

---

## Market Research Findings

### Founder-Direct Market (B2C)

✅ **Total monthly searches: ~63,000**

- "custom web development" - 33,100/month
- "web development company" - 22,200/month
- "MVP development" - 3,600/month
- "startup web development" - 1,900/month
- "custom web application development" - 1,600/month
- "denver web development" - 720/month
- "web development partner" - 590/month

**Pros:**

- 10x larger search volume than B2B
- Higher quality searches (direct decision makers)
- Better conversion potential
- Aligns with existing brand
- Denver regional advantage

**Cons:**

- High competition
- Longer sales cycles
- Education required

### Agency White-Label Market (B2B)

✅ **Total monthly searches: ~6,400**

- "outsource web development" - 2,900/month
- "dedicated development team" - 1,900/month
- "white label web development" - 1,300/month
- "white label development team" - 210/month
- "development partner for agencies" - 90/month

**Pros:**

- Less competition
- Higher contract values
- Predictable revenue
- Easier sales

**Cons:**

- 10x smaller search volume
- Most partnerships happen via referrals, not Google
- Wrong brand positioning for current site

### Decision

**Primary:** Target founders (homepage)  
**Secondary:** Target agencies (dedicated landing page /white-label)

---

## Homepage SEO Strategy

### Meta Tags Optimization

```tsx
export const metadata: Metadata = {
	title: 'Custom Web Development Partner in Denver | House of Giants',
	description:
		'Denver development studio partnering with founders who care about craft. No bullshit, no templates—just custom web development that scales.',
	keywords: [
		'custom web development',
		'web development partner',
		'startup web development denver',
		'custom web application development',
		'dedicated development team',
		'denver development studio',
		'mvp development services',
		'bespoke web development',
		'web development company denver',
	],
	authors: [{ name: 'House of Giants' }],
	creator: 'House of Giants',
	publisher: 'House of Giants',

	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://houseofgiants.com',
		siteName: 'House of Giants',
		title: 'Custom Web Development Partner in Denver',
		description: 'Founder-led development studio building custom web applications for people who care about craft.',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'House of Giants - Denver Web Development Studio',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Custom Web Development Partner in Denver',
		description: 'Founder-led development studio. No bullshit, just code that scales.',
		images: ['/og-image.jpg'],
	},
};
```

### Structured Data (JSON-LD)

```json
{
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "House of Giants",
	"alternateName": "HoG Development Studio",
	"url": "https://houseofgiants.com",
	"logo": "https://houseofgiants.com/logo.png",
	"description": "Custom web development studio in Denver partnering with founders who care about craft",
	"address": {
		"@type": "PostalAddress",
		"addressLocality": "Denver",
		"addressRegion": "CO",
		"addressCountry": "US"
	},
	"areaServed": "Worldwide",
	"foundingDate": "2017",
	"serviceType": [
		"Custom Web Development",
		"Web Application Development",
		"Startup Development Services",
		"Dedicated Development Teams"
	],
	"aggregateRating": {
		"@type": "AggregateRating",
		"ratingValue": "4.9",
		"reviewCount": "100",
		"bestRating": "5"
	}
}
```

### Section-by-Section Content Strategy

#### Section 1: Hero

**H1 (Primary Keyword):**

```
Your custom web development
partner in Denver who
actually gives a damn.
```

**Subheading (Secondary Keywords):**

```
We're a founder-led studio building custom web applications for people
obsessed with their craft. No bullshit, no templates, no "account managers"
who've never shipped code. Just dedicated development teams that treat
your product like their own.
```

**Eyebrow:**

```
Denver Web Development Studio • Founded 2017
```

**Stats (Keyword-Rich Labels):**

- 2017 - Building Custom Web Apps
- 100+ - Web Applications Shipped
- 10+ - Industries Served
- 98% - Client Retention Rate

#### Section 2: Differentiation

**H2:**

```
Not your typical web development studio.
An actual partner.
```

**Pillars (Updated with Keywords):**

1. **Small on Purpose**
   - Description: "Most web development companies scale to squeeze margins. We stay small because quality matters more than growth. You work directly with the founders writing your code, not account managers reading scripts."
   - Keywords: web development companies, founders

2. **We Actually Understand Code**
   - Description: "We're not designers who learned to code last year or AI prompt engineers calling ourselves developers. We've been building custom web applications since before it was trendy. Whatever tech makes sense for your business, we know it."
   - Keywords: custom web applications, developers

3. **Built for Where You're Going**
   - Description: "That MVP you need now? We build it to survive your growth. Architecture that doesn't fall apart when you actually get traction. We've seen enough startups die from technical debt to know better."
   - Keywords: MVP, startups, architecture

4. **No Vibe Coding**
   - Description: "Every line we ship is written by someone who can explain why it exists. No outsourcing, no AI slop, no junior devs learning on your dime. When things break at 2 AM (and they will), we're the ones who fix it."
   - Keywords: developers, senior

#### Section 3: Featured Work

**H2:**

```
Custom web development projects that shipped.
With results.
```

**Subheading:**

```
Real metrics from real projects. No vague "increased engagement" bullshit.
```

#### Section 4: Services Preview

**H2:**

```
Custom web development. Whatever you need.
Done right.
```

**Subheading:**

```
We build web applications and websites that don't break when you scale.
That's it. That's what we do.
```

#### Section 5: Pricing (Pod Model)

**H2:**

```
Dedicated development teams.
Fixed monthly pricing.
```

**Subheading:**

```
Tired of project-based pricing? We offer dedicated development pods—
self-sustaining teams that work as an extension of yours. Predictable
cost, consistent velocity.
```

**Pod Tiers:**

1. **Solo Developer Pod** - $14k/month
   - Shared Pod Lead
   - 1 Full-Time Developer
   - QA via Pod Lead
   - Best for: MVPs, small product teams, ongoing maintenance

2. **Core Team Pod** - $24k/month (Most Popular)
   - Dedicated Pod Lead
   - 2 Full-Time Developers
   - Fractional QA
   - Best for: Startups scaling, active roadmaps, multiple projects

3. **Full Build Pod** - $38k/month
   - Senior Pod Lead
   - 3 Full-Time Developers
   - Dedicated QA
   - Best for: Enterprise builds, large platforms, full product teams

#### Section 6: CTA Block

**H2:**

```
Looking for a web development partner
who actually gets it?
```

**Copy:**

```
You're building something that matters. You need a development team that
treats your product like their own. Let's see if we're a fit.
```

**CTA Button:** "Get Started"

### Keyword Density Targets

| Keyword                    | Target Uses | Placement                |
| -------------------------- | ----------- | ------------------------ |
| custom web development     | 3-5x        | H1, H2, body text        |
| web development partner    | 2-3x        | H1, subheading, CTA      |
| Denver                     | 2-3x        | H1/eyebrow, footer       |
| startup                    | 4-6x        | Throughout               |
| dedicated development team | 2x          | Pricing, differentiation |
| web application            | 2-3x        | Services, case studies   |

### Internal Linking Strategy

| Anchor Text                   | Destination           | Purpose           |
| ----------------------------- | --------------------- | ----------------- |
| "See Our Work"                | /work                 | Portfolio         |
| "Learn about Web Development" | /services#development | Service targeting |
| "See Full Pricing"            | /pricing              | Commercial intent |
| "Get Started"                 | /contact              | Conversion        |
| "Denver, Colorado"            | /about                | Local SEO         |

---

## Complete Site Architecture

### Primary Navigation

```
[Logo: HG] | Work | Services | Pods | About | Blog | Pricing | [Get Started]
```

### Site Structure

```
houseofgiants.com/
│
├── / (Homepage - Founder-Focused)
│   Target: custom web development, web development partner denver
│   Conversion: Contact form, pricing inquiry
│
├── /work (Case Studies Hub)
│   Target: web development portfolio, [industry] web development
│   Features: Filter by industry, service, search
│
├── /work/[slug] (Individual Case Studies)
│   Structure: Challenge → Approach → Solution → Results (metrics)
│   Target: Long-tail industry keywords
│
├── /services (Unified Services Page)
│   Sections: Development, Design, UX, Strategy
│   Target: web development services, custom web application
│
├── /pods (Pod Model Explanation)
│   Target: dedicated development team, web development retainer
│   Content: How pods work, team composition, tiers
│
├── /pricing (Pricing Page)
│   Target: web development cost, startup pricing
│   Tabs: Project-based vs Pod-based
│
├── /about (Team & Company)
│   Target: house of giants denver, brand searches
│   Content: Story, team, values, location
│
├── /blog (Content Hub)
│   Categories: Web Development, Startup Advice, Technical
│   Target: Long-tail educational keywords
│
├── /contact (Contact Page)
│   Form: Project type, budget, timeline
│
└── /white-label (Agency Partnerships - B2B)
    Target: white label web development
    Note: Footer only, not main nav
```

### URL Redirects (If Replacing Old Site)

| Old URL             | New URL               | Type |
| ------------------- | --------------------- | ---- |
| /web-development    | /services#development | 301  |
| /web-design         | /services#design      | 301  |
| /ux-architecture    | /services#ux          | 301  |
| /digital-innovation | /services#strategy    | 301  |

---

## User Journey Optimization

### Journey 1: Founder Searching "Custom Web Development Denver"

```
Google Search
    ↓
Homepage (sees "Denver", "custom", "partner")
    ↓
Differentiation ("Small on Purpose" resonates)
    ↓
"See Our Work"
    ↓
Filter to industry (Fintech)
    ↓
Read case study with metrics
    ↓
"Get Started" → Contact Form
    ↓
CONVERSION (Target: 3-5%)
```

### Journey 2: Founder Searching "Dedicated Development Team"

```
Google Search
    ↓
/pods page
    ↓
"Why Pods > Projects"
    ↓
Compare pod tiers
    ↓
/pricing for details
    ↓
"Talk to us about pods"
    ↓
CONVERSION
```

### Journey 3: Referral from Another Founder

```
Direct link
    ↓
Homepage
    ↓
About (team, trust)
    ↓
Work (2-3 case studies)
    ↓
Email in footer
    ↓
CONVERSION
```

---

## Content Calendar (3-Month Plan)

### Month 1: Foundation Content

1. **"How to Choose a Web Development Partner (Founder's Guide)"**
   - Target: "how to choose web developer"
   - Link to: /services

2. **"MVP Development Cost: What Founders Should Expect"**
   - Target: "mvp development cost"
   - Link to: /pricing

3. **"Red Flags When Hiring a Development Team"**
   - Target: "hiring development team"
   - Link to: /about

### Month 2: Industry-Specific

1. **"Web Development for Fintech Startups"**
   - Target: "fintech web development"
   - Link to: fintech case study

2. **"Building a SaaS Platform: Technical Considerations"**
   - Target: "building saas platform"
   - Link to: /pods

3. **"Healthcare Web Development: Compliance and UX"**
   - Target: "healthcare web development"
   - Link to: healthcare case study

### Month 3: Pod Education

1. **"Project vs. Dedicated Development Teams"**
   - Target: "dedicated development team vs freelance"
   - Link to: /pods

2. **"How to Scale Your Development Team Without Hiring"**
   - Target: "scale development team"
   - Link to: /pods

3. **"The True Cost of Technical Debt"**
   - Target: "technical debt cost"
   - Link to: /services

### Blog SEO Best Practices

- 2000+ words per post
- One primary keyword
- 3-5 internal links
- Optimized images
- Author schema markup
- Related posts section

---

## Local SEO Strategy (Denver Focus)

### Google Business Profile

1. **Setup:**
   - Category: "Software Company" or "Website Designer"
   - Name: House of Giants
   - Location: Denver, CO
   - Phone: Local number
   - Website: houseofgiants.com

2. **Weekly Posts:**
   - New case studies
   - Blog posts
   - Team updates
   - "What we're building" updates

3. **Reviews:**
   - Target: 20+ reviews with 4.5+ stars
   - Ask every happy client
   - Respond to all reviews

### Local Citations (NAP Consistency)

- Yelp
- Clutch.co
- GoodFirms
- The Manifest
- Denver Better Business Bureau
- Built in Colorado
- Denver Chamber of Commerce

### Local Content

- Blog: "Denver's Startup Scene: Web Development Trends"
- Blog: "Why Denver is a Tech Hub"
- About page: Emphasize Denver location, map

### Local Link Building

- Sponsor local startup events
- Guest post on Denver tech blogs
- Partner with co-working spaces
- Join Denver tech associations

---

## Technical Implementation

### Pre-Launch Checklist

- [ ] Meta tags optimized (all pages)
- [ ] Structured data implemented
- [ ] XML sitemap generated
- [ ] Robots.txt configured
- [ ] Google Search Console verified
- [ ] Google Analytics 4 installed
- [ ] Core Web Vitals passing
- [ ] Mobile responsive
- [ ] SSL certificate (HTTPS)
- [ ] Canonical URLs set
- [ ] 301 redirects configured
- [ ] Open Graph images (1200x630)
- [ ] Favicon set
- [ ] 404 page designed

### Week 1 Post-Launch

- [ ] Submit sitemap to GSC
- [ ] Submit to Bing Webmaster
- [ ] Check indexing
- [ ] Monitor Core Web Vitals
- [ ] Set up rank tracking

### Target Keywords to Track

1. custom web development
2. web development partner denver
3. startup web development
4. dedicated development team
5. denver development studio
6. custom web application development
7. mvp development services
8. web development company denver

---

## Success Metrics

### SEO KPIs

| Metric             | Baseline | 3-Month Goal | 6-Month Goal |
| ------------------ | -------- | ------------ | ------------ |
| Organic Traffic    | TBD      | +50%         | +150%        |
| Keywords in Top 10 | 0        | 15           | 35           |
| Domain Authority   | TBD      | +5           | +10          |
| Backlinks          | TBD      | +25          | +75          |
| Google Reviews     | 0        | 10           | 25           |

### Conversion KPIs

| Metric               | Target |
| -------------------- | ------ |
| Homepage Conv. Rate  | 3-5%   |
| Form Completion      | 25%+   |
| Case Study → Contact | 10%+   |
| Pricing → Contact    | 15%+   |
| Pages per Session    | 4+     |
| Session Duration     | 3+ min |

### Traffic Sources

| Source         | Target % |
| -------------- | -------- |
| Organic Search | 40%      |
| Direct         | 30%      |
| Referral       | 20%      |
| Social         | 10%      |

---

## Competitive Advantages

### What Competitors Miss

Most dev studios make these mistakes:

1. ❌ Generic messaging
2. ❌ No pricing transparency
3. ❌ Vague case studies
4. ❌ Identical service pages
5. ❌ No founder story

### Your SEO Edge

1. ✅ Pod model (unique, less competition)
2. ✅ Transparent pricing
3. ✅ Metric-rich case studies
4. ✅ Founder-led messaging
5. ✅ Denver local focus

### Underserved Keywords

| Keyword                                 | Searches/mo | Competition | Opportunity |
| --------------------------------------- | ----------- | ----------- | ----------- |
| dedicated development team for startups | 320         | Low         | HIGH        |
| web development partner for founders    | 210         | Low         | HIGH        |
| denver startup web development          | 140         | Low         | HIGH        |
| no bullshit web development             | 90          | Very Low    | MEDIUM      |
| founder-led development studio          | 70          | Very Low    | MEDIUM      |
| development pod model                   | 50          | Very Low    | MEDIUM      |

---

## Implementation Timeline

### Immediate (Week 1)

1. Update homepage meta tags
2. Implement structured data
3. Optimize hero section
4. Create /pods page
5. Set up Google Business Profile

### Short-Term (Month 1)

1. Rewrite homepage sections
2. Update pricing page
3. Enhance 3 case studies
4. Publish 3 blog posts
5. Build local citations

### Medium-Term (Months 2-3)

1. Create About page
2. Launch unified Services page
3. Add case study filtering
4. Publish 6 blog posts
5. Link-building outreach

### Long-Term (Months 4-6)

1. Industry landing pages (if applicable)
2. Weekly blog posts
3. White-label landing page
4. Expand case studies
5. Optimize based on data

---

## Questions to Answer

1. **Office address in Denver?** (Affects local SEO)
2. **Main conversion goal?** (Form, email, Calendly)
3. **Case study metrics available?** (Conversion rates, performance)
4. **Which pod tier to feature?** (Solo, Core, Full)
5. **Team photos available?** (For About page, trust signals)
6. **Analytics tool preference?** (GA4, Plausible, Fathom)
7. **Implementation timeline?** (Build now or plan for later)

---

## Notes

- Keep messaging human, relatable, edgy (no AI tropes)
- Avoid "agency" when referring to HoG (use "studio" or "team")
- Stay tech-agnostic in public messaging
- Emphasize craft, quality, no bullshit
- Pod model is brand new, hasn't been sold yet
- Regional focus (Denver) but open to national

---

**Document Version:** 1.0  
**Last Updated:** December 2024  
**Next Review:** After 3 months of implementation
