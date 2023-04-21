---
title: "The Beautiful Mess That is Webflow"
layout: post
tags: [calaxy, webflow]
image: https://res.cloudinary.com/twhiteblog/image/upload/v1637117616/flow_rqwlhr.webp
description: Sometimes low code is low value.
excerpt: Sometimes low code is low value.
featured: true
---


<!--more-->


{% notice info %}
📸 Photo by [Stackie Jia](https://unsplash.com/@stackia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/flow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)  
{% endnotice %}

At [Calaxy](https://www.calaxy.com/),we built our landing page in [Webflow](https://webflow.com/), a no-code website builder.


I've used Webflow before and quite liked it. It is excellent for simple landing pages and portfolios[^1]. However, the keyword here is simple; the builder interface gets in the way when the designs are as complex as ours.

## The Designer interface

The place where you design your landing page looks like a Microsoft Word mess of cockpit-like buttons and ribbons. Finding critical features is next to impossible; everything is nested deep in another interface element.

It took me several weeks to figure out what would take even a mid-level developer an hour or so to build in code, partly because our designer Chadd is a sadist and makes great-looking, if not complex, designs and because of Webflow's inscrutable interface.

## Custom JavaScript is hard to get right.

Trying to write a custom JavaScript function is downright headache-inducing. Googling how to write a simple function to open a modal when clicking on a button with the section hash showing in the URL led me to the forums. I saw all kinds of weird and hacky implementations, most using jQuery. I have no problem with this; however, I'd prefer vanilla JavaScript.

Ok, so a little jQuery function, got it. But code injection in Webflow is a mess, even for something so simple.

I created a [post](https://discourse.webflow.com/t/show-a-section-id-in-the-omnibox-when-a-modal-opens/189020) on the [Webflow Forums](https://discourse.webflow.com/), and 21 days later, it still hasn't received a response.

## Simply designed sites

In conclusion, if your design is relatively simple, without a lot of custom features, images, animations, and modals, Webflow is a great choice. On the other hand, the interface is complex, and perhaps it needs to be. But when considering our needs, the interface got in the way. Rolling our own may have been a better choice if time was not an issue.

[^1]: It depends on how complicated the design of your portfolio is. 