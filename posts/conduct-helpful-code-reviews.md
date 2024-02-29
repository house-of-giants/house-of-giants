---
title: 'How to Conduct Helpful Code Reviews (with real world examples 😱)'
image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
author:
  name: Dominic Magnifico
  picture: '/images/dom.jpeg'
excerpt: 'Code reviews are a staple of working in a team. Whether it be an engineering manager, leadership, or a peer evaluating a new feature, conducting code reviews is an essential cornerstone of collaborative development. It&apos;s a great opportunity for to gain insight into the progress of a feature, or to help identify areas for constructive improvement. Let&apos;s explore what it means to conduct a helpful code review 🔥.'
date: '2023-11-07'
---

Code reviews are a staple of working in a team. Whether it be an engineering manager, leadership, or a peer evaluating a new feature, conducting code reviews is an essential cornerstone of collaborative development. It's a great opportunity for to gain insight into the progress of a feature, or to help identify areas for constructive improvement. Let's explore what it means to conduct a helpful code review 🔥.

## When are Code Reviews Conducted?

Depending on the internal processes, a code review is usually handled towards the end of a feature's lifecycle, before it's merged into a release. Code reviews can go through several rounds before fully merged in to a release or production, but this advice applies to a code review at any stage 👍!

## Understanding Context

It's important to note, as the person conducting the code review, the context of the review itself. Is this code review for a hotfix that needs to get pushed out ASAP? Is this feature a work in progress, something that will surely change before the feature fully rolls out?

Understanding the context will help to indicate to you as the reviewer, how into the weeds it is necessary to get with your feedback.

You may not want to hold a release up because the CSS within your hotfix isn't alphabetized properly 🤷‍♂️.

## Understand the Feature

This section will be brief, but in order to conduct a helpful code review it's imperative that we have a solid foundational understanding of what the feature is in relation to our project.

Understanding the feature will help us to know when something can be done differently or more efficiently 🍔.

## What to Look for

A code review is a great opportunity to help solidify and enforce your engineering standards as a group. Teams will inevitably have a difference of opinions (enter the tabs vs spaces perpetual debate here), but regardless of opinion standards need to be upheld.

### Efficiencies 🤖

When doing a code review myself, I tend to do a broad sweep of the functionality to identify any areas where some efficiencies may be found. Efficiencies can mean a multitude of things, from using a `for` loop instead of `map`, all the way up to changing how an API request is made in an effort to reduce the weight of the call. It's important to identify these items first, as broad changes may negate some of the smaller feedback that we may be inclined to give within that broad change.

### Code Standards 👔

![Code review comment requesting a different organizational strategy.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5nw1et8ol9f2mgfdy93y.png)

As a developer engrossed in feature work, it's very common to miss a few of the engrained standards your team has established. Trailing commas, the occasional missed `;`, unorganized CSS properties. These are all things a fresh set of eyes can catch to help ensure the quality of the code your team is producing is up to standard.

This ensures that as the feature makes it way up to production, everything is as tightened up as can be 🪛.

### Errant Dev Notes 📝

I don't know about you but sometimes I'll write notes to myself as I build a feature to make sure I don't forget anything. Not to mention my preferred way of debugging JavaScript is by doing a `console.log` at literally every step of a function.

During your code review keep a close eye out for things like this. It'll ensure the production code stays clean, and prevents any unwanted information leaking into the logs 🪵.

## Structuring the Feedback

Once you have identified some areas for improvement, it's important to structure your feedback in a way that's constructive for the person who requested the review.

### Identify the change and Explain the 'why' 🧐

![Code review comment explaining the inefficiency of a window resize observer](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tj6m8t57f974teouywq6.png)

Explaining the why helps everyone to know how to handle something if they encounter it again in the future. It also helps establish real documentation for how that change should be addressed by other reviewers in the future 🤝.

### Provide Resources or Examples 😎

![Code review comment requesting a different React component definition](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v00vl84vmg1qlv8557uj.png)

If the change requested is one for technical reasons, use it as an opportunity for education! Citing your sources and providing the requester with information that will help solidify their understanding is super important.

Additionally you can provide the requester with a snippet of how you'd mark something up. The purpose here being that you provide the requester with a path forward, rather than just giving them the answer to the question 🤔.

### Point Out What You Like 🖤

![Code review comment giving praise for well organized and utilized JavaScript and CSS standards](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/788omqogepcbm02g2a9j.png)

This is my favorite thing. Find a snippet of code that you really like, whether it's great organization, a tricky way of doing something, or a unique approach that you appreciate, call it out! Give the reviewer some positive affirmation that will help them be excited to receive your feedback ✨.

Sometimes with larger features, line after line of constructive criticism can chip away at a teammate. Pepper in some positivity to help ease the burden.

Tell me what you think! Have you received a code review recently that helped you learn? Let me know!
