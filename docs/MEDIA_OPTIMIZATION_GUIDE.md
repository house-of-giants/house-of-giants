# Media Optimization Guide: Performance Best Practices

## Executive Summary

This guide translates web performance research into actionable component behaviors for media-heavy pages. Focus areas: format selection (GIF vs video), loading strategies, LCP/CLS optimization, and progressive loading patterns.

---

## 1. Format Selection: GIF vs MP4/WebM

### The Problem
- **Animated GIFs are massive**: A typical animated GIF can be 3.7 MB
- **Videos are 90%+ smaller**: Same content as MP4 = 551 KB, WebM = 341 KB
- **Bandwidth savings**: Converting GIFs to video saves ~85-90% file size

### The Solution: Use Video for Animations

**Convert GIFs to video formats:**

```bash
# Create MP4 (broad compatibility)
ffmpeg -i animation.gif -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p animation.mp4

# Create WebM (best compression)
ffmpeg -i animation.gif -c vp9 -b:v 0 -crf 41 animation.webm
```

**HTML Implementation:**

```tsx
// ❌ BAD: Using GIF
<img src="animation.gif" alt="Animation" />

// ✅ GOOD: Using video with fallback
<video autoplay loop muted playsinline>
  <source src="animation.webm" type="video/webm" />
  <source src="animation.mp4" type="video/mp4" />
</video>
```

**Key attributes for GIF-replacement videos:**
- `autoplay` - Starts automatically like GIF
- `loop` - Loops continuously like GIF
- `muted` - Silent like GIF (required for autoplay)
- `playsinline` - Prevents fullscreen on iOS

---

## 2. Poster Images for Videos

### Why Poster Images Matter

**For LCP optimization:**
- Videos without `poster` are NOT LCP candidates
- Poster images ARE LCP candidates
- Poster loads faster than video, improving perceived performance

**Implementation:**

```tsx
// ✅ GOOD: Video with optimized poster
<video 
  poster="/hero-poster.jpg"
  preload="none"
  controls
>
  <source src="hero.webm" type="video/webm" />
  <source src="hero.mp4" type="video/mp4" />
</video>

// ✅ BETTER: Preload poster for hero video (LCP candidate)
<link 
  rel="preload" 
  href="/hero-poster.jpg" 
  as="image" 
  fetchpriority="high" 
/>
```

**Poster image best practices:**
1. Use first frame or representative frame
2. Optimize image (WebP format, compressed)
3. Match video dimensions to prevent CLS
4. Preload if it's the LCP element

---

## 3. Video Preload Strategies

### The `preload` Attribute

Controls how much video data loads before user interaction:

```tsx
// ❌ BAD: Default behavior (preloads metadata + some video)
<video controls>
  <source src="video.mp4" type="video/mp4" />
</video>

// ✅ GOOD: Explicit control based on use case
<video controls preload="none" poster="poster.jpg">
  <source src="video.mp4" type="video/mp4" />
</video>
```

**Preload values:**

| Value | Behavior | Use Case | Data Downloaded |
|-------|----------|----------|-----------------|
| `none` | Nothing loads | Below-fold videos, bandwidth-conscious | 0 KB |
| `metadata` | Duration, dimensions only | Default, shows video info | ~50-200 KB |
| `auto` | Browser decides (often full video) | Critical videos | Full video |

### Progressive Enhancement Pattern

```tsx
// Load metadata on hover for better UX
<video 
  controls
  preload="none"
  poster="poster.jpg"
  onMouseEnter={(e) => e.currentTarget.setAttribute('preload', 'metadata')}
>
  <source src="video.mp4" type="video/mp4" />
</video>
```

---

## 4. Reducing LCP (Largest Contentful Paint)

### LCP Optimization Hierarchy

**Target: LCP < 2.5 seconds for 75% of page visits**

#### 4.1 Hero Images (Above the Fold)

```tsx
// ✅ OPTIMAL: Hero image with all optimizations
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority              // Preloads image
  fetchpriority="high"  // Browser prioritizes this
  placeholder="blur"    // Shows blur while loading
  blurDataURL="data:image/jpeg;base64,/9j/4AAQ..." // Inline blur
/>
```

**Key attributes:**
- `priority` - Adds `<link rel="preload">` in `<head>`
- `fetchpriority="high"` - Browser network priority
- `loading="eager"` - Loads immediately (default with priority)

#### 4.2 Manual Preload for Critical Images

```tsx
// In <head> or layout
<link 
  rel="preload" 
  href="/hero.jpg" 
  as="image" 
  fetchpriority="high"
  type="image/jpeg"
/>
```

#### 4.3 LCP Breakdown (from web.dev)

Optimize these subparts:

1. **Time to First Byte (TTFB)** - ~40% of LCP
   - Optimize server response
   - Use CDN
   - Reduce redirects

2. **Resource Load Delay** - <10% of LCP
   - Preload critical resources
   - Avoid lazy-loading LCP images
   - Use `fetchpriority="high"`

3. **Resource Load Duration** - ~40% of LCP
   - Compress images (WebP, AVIF)
   - Use responsive images
   - Serve from CDN

4. **Element Render Delay** - <10% of LCP
   - Avoid render-blocking CSS/JS
   - Inline critical CSS
   - Defer non-critical scripts

---

## 5. Reducing CLS (Cumulative Layout Shift)

### CLS Optimization Rules

**Target: CLS < 0.1 for 75% of page visits**

#### 5.1 Always Set Image Dimensions

```tsx
// ❌ BAD: No dimensions = layout shift when image loads
<img src="photo.jpg" alt="Photo" />

// ✅ GOOD: Explicit dimensions reserve space
<img 
  src="photo.jpg" 
  alt="Photo" 
  width={800} 
  height={600}
/>

// ✅ BETTER: Next.js Image with aspect ratio
<Image
  src="/photo.jpg"
  alt="Photo"
  width={800}
  height={600}
  style={{ width: '100%', height: 'auto' }}
/>
```

**Why this works:**
- Browser calculates aspect ratio from width/height
- Space is reserved before image loads
- No shift when image appears

#### 5.2 Video Dimensions

```tsx
// ✅ GOOD: Set dimensions on video element
<video 
  width={640} 
  height={360}
  poster="poster.jpg"
  preload="none"
>
  <source src="video.mp4" type="video/mp4" />
</video>
```

#### 5.3 Responsive Images with Aspect Ratio

```tsx
// ✅ OPTIMAL: CSS aspect ratio for responsive media
<div style={{ aspectRatio: '16/9', width: '100%' }}>
  <Image
    src="/video-poster.jpg"
    alt="Video"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
```

#### 5.4 Reserve Space for Dynamic Content

```tsx
// ✅ GOOD: Min-height prevents shift
<div style={{ minHeight: '400px' }}>
  {/* Lazy-loaded content */}
</div>

// ✅ BETTER: Skeleton placeholder
<div className="aspect-video bg-gray-200 animate-pulse">
  {/* Content loads here */}
</div>
```

---

## 6. Progressive Loading Strategies

### 6.1 Above the Fold vs Below the Fold

**Above the fold (visible on load):**
```tsx
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority              // ← Preload
  fetchpriority="high"  // ← High priority
  loading="eager"       // ← Load immediately
/>
```

**Below the fold (not immediately visible):**
```tsx
<Image
  src="/gallery-1.jpg"
  alt="Gallery"
  width={800}
  height={600}
  loading="lazy"        // ← Lazy load
  placeholder="blur"    // ← Blur placeholder
  blurDataURL="..."
/>
```

### 6.2 Blur Placeholders

**Generate blur data URLs:**

```typescript
// Using plaiceholder or sharp
import { getPlaiceholder } from 'plaiceholder'

const { base64 } = await getPlaiceholder('/image.jpg')

// Use in component
<Image
  src="/image.jpg"
  placeholder="blur"
  blurDataURL={base64}
  alt="Image"
  width={800}
  height={600}
/>
```

**Manual blur data URL (tiny base64):**
```typescript
const BLUR_DATA_URL = 
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8//B+PQAIZgMgYk3sYgAAAABJRU5ErkJggg=='
```

### 6.3 Intersection Observer for Custom Lazy Loading

```typescript
'use client'

import { useEffect, useRef, useState } from 'react'

export function LazyVideo({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            const video = entry.target as HTMLVideoElement
            const sources = video.querySelectorAll('source')
            
            sources.forEach((source) => {
              source.src = source.dataset.src || ''
            })
            
            video.load()
            setIsLoaded(true)
            observer.unobserve(video)
          }
        })
      },
      { rootMargin: '50px' } // Start loading 50px before visible
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [isLoaded])

  return (
    <video ref={videoRef} poster={poster} controls preload="none">
      <source data-src={`${src}.webm`} type="video/webm" />
      <source data-src={`${src}.mp4`} type="video/mp4" />
    </video>
  )
}
```

---

## 7. Component Behavior Patterns

### Pattern 1: Hero Media Component

```tsx
// components/hero-media.tsx
import Image from 'next/image'

interface HeroMediaProps {
  type: 'image' | 'video'
  src: string
  poster?: string
  alt: string
  width: number
  height: number
  blurDataURL?: string
}

export function HeroMedia({ 
  type, 
  src, 
  poster, 
  alt, 
  width, 
  height,
  blurDataURL 
}: HeroMediaProps) {
  if (type === 'image') {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        fetchpriority="high"
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
      />
    )
  }

  return (
    <>
      {/* Preload poster for LCP */}
      <link rel="preload" href={poster} as="image" fetchpriority="high" />
      
      <video
        width={width}
        height={height}
        poster={poster}
        preload="metadata"
        controls
        playsInline
      >
        <source src={`${src}.webm`} type="video/webm" />
        <source src={`${src}.mp4`} type="video/mp4" />
      </video>
    </>
  )
}
```

### Pattern 2: Lazy Media Component

```tsx
// components/lazy-media.tsx
'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

interface LazyMediaProps {
  type: 'image' | 'video'
  src: string
  alt: string
  width: number
  height: number
  blurDataURL?: string
  poster?: string
}

export function LazyMedia({ 
  type, 
  src, 
  alt, 
  width, 
  height, 
  blurDataURL,
  poster 
}: LazyMediaProps) {
  if (type === 'image') {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
      />
    )
  }

  return (
    <video
      width={width}
      height={height}
      poster={poster}
      preload="none"
      controls
      playsInline
    >
      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.mp4`} type="video/mp4" />
    </video>
  )
}
```

### Pattern 3: Animated GIF Replacement

```tsx
// components/animated-media.tsx
interface AnimatedMediaProps {
  src: string // without extension
  width: number
  height: number
  poster?: string
}

export function AnimatedMedia({ src, width, height, poster }: AnimatedMediaProps) {
  return (
    <video
      width={width}
      height={height}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
    >
      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.mp4`} type="video/mp4" />
    </video>
  )
}
```

---

## 8. Quick Reference Checklist

### ✅ For Hero/LCP Media (Above Fold)

- [ ] Use Next.js `<Image>` with `priority` prop
- [ ] Add `fetchpriority="high"`
- [ ] Set explicit `width` and `height`
- [ ] Add `placeholder="blur"` with `blurDataURL`
- [ ] For videos: use `poster` and preload it
- [ ] Optimize image format (WebP/AVIF)
- [ ] Serve from CDN

### ✅ For Below-Fold Media

- [ ] Use `loading="lazy"`
- [ ] Add `placeholder="blur"` for images
- [ ] Use `preload="none"` for videos
- [ ] Set explicit dimensions (prevent CLS)
- [ ] Consider Intersection Observer for custom control

### ✅ For Animated Content

- [ ] Convert GIFs to MP4 + WebM
- [ ] Use `<video>` with `autoplay loop muted playsinline`
- [ ] Provide both WebM (first) and MP4 (fallback)
- [ ] Add `poster` for first frame

### ✅ For All Media

- [ ] Always set `width` and `height` attributes
- [ ] Use aspect-ratio CSS for responsive layouts
- [ ] Compress and optimize files
- [ ] Provide multiple formats (WebP, AVIF, JPEG)
- [ ] Test on real devices and slow networks

---

## 9. Performance Metrics Targets

| Metric | Target | Impact |
|--------|--------|--------|
| **LCP** | < 2.5s | First contentful paint speed |
| **CLS** | < 0.1 | Visual stability |
| **FCP** | < 1.8s | Initial render speed |
| **TTFB** | < 0.8s | Server response time |

### Measuring Performance

```typescript
// Use web-vitals library
import { onLCP, onCLS, onFCP } from 'web-vitals'

onLCP(console.log)
onCLS(console.log)
onFCP(console.log)
```

---

## 10. Common Pitfalls to Avoid

### ❌ Don't Do This

```tsx
// 1. Lazy-loading LCP image
<Image src="/hero.jpg" loading="lazy" /> // ❌

// 2. No dimensions on images
<img src="/photo.jpg" /> // ❌

// 3. Using GIF for animations
<img src="/animation.gif" /> // ❌

// 4. No poster on hero video
<video src="/hero.mp4" controls /> // ❌

// 5. Preloading everything
<link rel="preload" href="/image1.jpg" />
<link rel="preload" href="/image2.jpg" />
<link rel="preload" href="/image3.jpg" /> // ❌
```

### ✅ Do This Instead

```tsx
// 1. Prioritize LCP image
<Image src="/hero.jpg" priority fetchpriority="high" />

// 2. Always set dimensions
<Image src="/photo.jpg" width={800} height={600} />

// 3. Use video for animations
<video autoplay loop muted playsInline>
  <source src="/animation.webm" type="video/webm" />
</video>

// 4. Add poster to hero video
<video poster="/hero-poster.jpg" controls>
  <source src="/hero.mp4" type="video/mp4" />
</video>

// 5. Preload only LCP element
<link rel="preload" href="/hero.jpg" as="image" fetchpriority="high" />
```

---

## Resources

- [Web.dev: Optimize LCP](https://web.dev/articles/optimize-lcp)
- [Web.dev: Optimize CLS](https://web.dev/articles/optimize-cls)
- [Web.dev: Lazy Loading Video](https://web.dev/articles/lazy-loading-video)
- [Web.dev: Replace GIFs with Video](https://web.dev/articles/replace-gifs-with-videos)
- [Next.js Image Documentation](https://nextjs.org/docs/app/api-reference/components/image)
- [MDN: Video Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance)

---

**Last Updated:** December 2025
