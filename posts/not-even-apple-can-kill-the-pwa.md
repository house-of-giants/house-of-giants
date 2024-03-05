---
title: 'Not Even Apple Can Kill the PWA'
image: '/images/blog/apple-pwa.webp'
author:
  name: Dominic Magnifico
  picture: '/images/dom.jpeg'
excerpt: 'If you haven’t heard already, Apple made some interesting moves in response to some upcoming legislation in the EU. Specifically, the latest iOS beta introduced some changes that prevented existing PWAs (progressive web applications) from leveraging features like the [Push API], which allows developers to send native-like push notifications to devices from their website or web application. You can read more about Apple’s initial decision, and their more recent retraction of that decision.'
date: '2024-03-04'
---

If you haven’t heard already, Apple made some interesting moves in response to some [upcoming legislation in the EU](https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/europe-fit-digital-age/digital-markets-act-ensuring-fair-and-open-digital-markets_en). Specifically, the latest iOS beta introduced some changes that prevented existing PWAs (progressive web applications) from leveraging features like the [Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API), which allows developers to send native-like push notifications to devices from their website or web application. You can read more about Apple’s [initial decision](https://mashable.com/article/apple-kills-home-screen-web-apps-pwas-in-eu-dma), and their more recent [retraction of that decision](https://mashable.com/article/apple-reverses-decision-home-screen-web-apps-pwa-eu).

Let’s take this opportunity to talk about some of the interesting features associated with PWAs that make them too big to fail.

## Critical CSS

One of my favorite features of PWAs is Critical CSS. This technique involves identifying and loading only the essential CSS needed to render the visible portion of a page. Why does this matter? It reduces load time, ensuring users can interact with content much faster than loading a bloated CSS file. In a world where a second's delay can lead to significant drops in engagement, Critical CSS keeps users active within an application, not waiting on it.

## Offline Functionality with Service Workers

There’s a pretty common use case that is employed when talking about offline functionality with service workers; You’re on a subway, or train (if you’re lucky enough to live in a place where there’s decent public transportation) doing something like writing into a textbook or filling out a form. You hit submit, but OH NO, you just entered a tunnel and lost service! You come out the other side and refresh the page to find that your form fields have been reset. This is where service workers can solve some user experience pain points. By caching key resources, PWAs can offer a robust offline experience, ensuring that users have access to content even in the absence of an internet connection. This isn't just convenient; it's an absolute necessity for accessibility and equity on the web, bringing information to the fingertips of those in low-bandwidth or unstable internet regions.

## Push Notifications

The ability to send push notifications is among the more powerful tools in the PWA arsenal. These notifications allow developers to maintain engagement with users by providing updates, announcements, or even just gentle reminders to revisit the app. It's a direct line of communication that was once the exclusive domain of native apps. Despite recent decisions that may have squashed this ability, the fundamental value of keeping users informed and engaged through push notifications remains undiminished.

## How PWAs Amplify Equity on the Web

As I mentioned in the section about PWAs offline capabilities, by combining these power pieces of tech we can continue working towards building a more equitable web. By offering a high-quality user experience across all devices and network conditions, PWAs democratize access to information. They bridge the gap between high-end device users and those with more modest means, ensuring that the web remains an inclusive space for all. This isn't just good design; it's good ethics, reflecting a commitment to the universal accessibility that the web promises.

Despite the whims of tech giants' policies and the extremely variable landscape of web standards, PWAs continue to thrive. They represent not just a set of technologies but a vision for the future of the web—a future that's fast, reliable, and, most importantly, accessible to users of any means. The resilience of PWAs in the face of challenges, like those posed by Apple, isn't just reassuring; it's a testament to their foundational importance to the web as a whole.
