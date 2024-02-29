---
title: 'Why Everyone Hates WordPress'
author:
  name: Dominic Magnifico
  picture: '/images/dom.jpeg'
image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
excerpt: 'It’s no secret that when people hear “WordPress” these days they kind of cringe. WordPress has been around for so long, and has gone through so many iterations and updates, that some aspects of its checkered past stick around in peoples minds. Usually this includes thoughts of infinite outdated plugins, a carnal fear of updating anything, and a site that chugs under the weight of a theme that was built in 2005, or purchased from Theme Forest. While these fears are warranted, there are at least dozens of us that strive to create WordPress sites that are sleek, scalable, and performant. Let me show you how.'
date: '2024-02-27'
---

It’s no secret that when people hear “WordPress” these days they kind of cringe. WordPress has been around for so long, and has gone through so many iterations and updates, that some aspects of its checkered past stick around in peoples minds. Usually this includes thoughts of infinite outdated plugins, a carnal fear of updating anything, and a site that chugs under the weight of a theme that was built in 2005, or purchased from Theme Forest. While these fears are warranted, there are at least dozens of us that strive to create WordPress sites that are sleek, scalable, and performant. Let me show you how.

![Arrested Development scene where Tobias screams about there being dozens of him.](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmtyNXhsNGZncm40eDV5bWxpZWFoaGE5NzR2NDZ3c2U5ZTBsaDlnaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kSlJtVrqxDYKk/giphy.gif)

## Past vs. Present

In the past, WordPress developers relied **heavily** on plugins and 3rd party integrations to handle a multitude of seemingly basic aspects of a well functioning website; Anything from navigation menus, to plugins that would create custom post types for you, even plugins to manage your plugins. This convoluted nightmare is something that doesn’t need to exist now, and is what lead to the sheer terror you may be familiar with when you tried to update a Plugin, or even worse, WordPress Core itself 😰.

The flip side here when working with folks who understand how the Core of WordPress works, is you are able to eliminate the need for most, if not all of these plugins. Registering a custom post type is dead simple, especially when you have an [open source starter theme](https://github.com/house-of-giants/hog-scaffold) that is well organized and conducive to leveraging common PHP patterns like [factories](https://dev.to/zhukmax/design-patterns-in-php-8-simple-factory-o0l).

Pair this with well executed and thoughtful [navigation menu locations](https://developer.wordpress.org/reference/functions/register_nav_menu/) and you’re well on your way to stripping the need for a pretty large swathe of those plugins.

The only plugin that you might need for a relatively straight forward marketing site these days is a form plugin like [Contact Form 7](https://contactform7.com/) or similar. A lightweight, singularly focused plugin that won’t have an affect on other aspects of your theme.

## But what about my page builder???

The meteoric rise of plugins like [Advanced Custom Fields](https://www.advancedcustomfields.com/) (which is still an excellent plugin and serves it’s purpose very well), and page builder Themes like Divi, was a result of a gap in WordPress’s page editing abilities. And while these things may have been absolutely necessary in the past, with the introduction and integration of [Gutenberg](https://wordpress.org/gutenberg/) into WordPress core, that is no longer the case.

Gutenberg can be extended and built upon in a multitude of different ways that give editors on the backend a phenomenal block based editing experience when done right. You can give editors an _almost_ page builder like experience with some extra attention given to [editor specific styles](https://css-tricks.com/getting-the-wordpress-block-editor-to-look-like-the-front-end-design/).

On top of that, with the integration of WordPress flavored React in core, you can build complex reactive blocks right within Gutenberg itself. Much like the WordPress flavor of PHP that it ships with, the syntax and full understanding of what is possible takes some time to get used to, but the resources are out there to help with that.

## But also what about my super rad Jamstack framework I love?!

Are you dead set on building a Nuxt + Vue application? Partial to NextJS like I am? Well good news everyone, WordPress has done a pretty decent job over the past couple of years building out the [WordPress API](https://developer.wordpress.org/rest-api/key-concepts/) and enabling developers to leverage WordPress as a Headless CMS. Pair that with the amazing [WPGraphQL Plugin](https://www.wpgraphql.com/) and you’re cooking with JavaScript. You get all the benefits of really solid backend CMS that end users are familiar with, and can grasp with a 1 hour CMS training, distributed using your favorite flavor of JavaScript.

There’s a lot of amazing potential here. The only hurdle that is definitely being addressed is the complexities of hosting a Headless WordPress site. Because the WordPress backend needs the traditional LAMP stack to run, you’ll also need a modern server to build the MERN or PERN or whatever other crazy acronym you need. Luckily the folks at WPEngine have a service I’ve yet to try out called [Atlas](https://wpengine.com/headless-wordpress/). It looks very promising, and I’ve had great luck with WPEngine’s support and services in the past.

## What do you think? 🤨

All this to say that WordPress may have a bit of a reputation as a busted, clunky technology. But with a little but of time and effort it can absolutely be used in a clean, performant, and scalable way to fit the needs of a very very large percentage of clients that you may come across.

What preconceived notions do you have about WordPress? Anything that’s driven you away from it in the past? Let me know, maybe I can help illuminate some dark corners of the WordPress Codex to help!
