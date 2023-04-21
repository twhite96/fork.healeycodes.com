---
title: "Flexing My CSS Muscles by Adding A Bit of Panache"
layout: post
tags: [CSS, learning]
image: https://res.cloudinary.com/twhiteblog/image/upload/v1593056621/css_qnvo1r.jpg
description: "A case study on a trial by fire primer on CSS."
---
<!--more-->

A case study on a trial by fire primer on CSS.

> [Photo by Caspar Camille Rubin](https://unsplash.com/@casparrubin?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](/s/photos/css?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)


{% notice warning %}
 Well, this was a ride. But I came out on the other end. The following is a case study of my journey adding low highlights to headings and links to this blog.
{% endnotice %}

To add a bit more color and *style* to this blog by adding a *low highlight* to headers and links, much like you can find on the [Rust landing page](https://www.rust-lang.org/) and [Wes Bos' website](https://wesbos.com/).

<figure>
    <img style="align-center" src="https://res.cloudinary.com/twhiteblog/image/upload/v1592438002/rust_nqwlto.png" />
    <figcaption class="caption-text">
       Rust's landing page highlights
       <a href="https://res.cloudinary.com/twhiteblog/image/upload/v1592438002/rust_nqwlto.png">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>

<figure>
    <img class="align-center" src="https://res.cloudinary.com/twhiteblog/image/upload/v1592438001/wes_ve1f3l.png" />
    <figcaption class="caption-text">
       Wes' sense of design is always top notch. Always a bit of whimsy with his stuff.
       <a href="https://res.cloudinary.com/twhiteblog/image/upload/v1592438001/wes_ve1f3l.png">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>

<figure>
    <img style="margin: 10px auto 20px; display: block;" src="https://res.cloudinary.com/twhiteblog/image/upload/c_scale,h_425/v1592438001/lol_hoygea.png" />
    <figcaption class="caption-text">
       Wes kinda trolling me lol.
       <a class="align-center" href="https://res.cloudinary.com/twhiteblog/image/upload/c_scale,h_425/v1592438001/lol_hoygea.png">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>

## Motivation

I wanted my blog to look cool and modern, fancy, like the big kids in this space. I also wanted to flex my CSS muscles, as that is one of my weaker areas[^1]. 

## Process
At first, I went into DevTools and copied the CSS from Rust's webpage. It didn't quite work. None of my highlights were showing and I didn't debug because I felt like something deeper was at play[^2]. I decided to skip this idea and go a different route.

I did a bit of Google-fu on how to get this effect and came across  [How to create a low highlight behind your text](https://thirtyeightvisuals.com/blog/low-highlight-heading-links-squarespace) by Thirty Eight Visuals. It's a tutorial on how to do this on Squarespace but you can apply it to any website.

I copied this snippet of code:

```css
 background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, #ffc1d2 65%);
  display: inline;
```

created a class and added that to the `h1` element in my `page.html` file. The resulting code looks something like this:

```css
h1.highlight {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, #ffc1d2 65%);
  display: inline;
}
```

This worked for all the `h1` elements, but I also wanted the `h2` and `h3` elements to be highlighted. In this instance, it also only highlighted the `h1` elements on the index page, which in my Jekyll theme is `default.html`.

I tried to add a class to all the header elements but it still didn't work. I found it difficult to actually target those specific elements with the `.highlight` class. If I added the class to all the header elements in one template, it didn't go across all the other templates in my `_layouts` folder.

## Targeting inline header elements

I wanted all header elements to be highlighted on every page. It was difficult to accomplish this with the different templates that my Jekyll theme has in its `_layouts` folder.

I dug into the Sass in my theme and looked for any classes that targeted what I wanted and added the gradient to them but that also didn't work.

<figure>
    <img class="align-center" src="https://res.cloudinary.com/twhiteblog/image/upload/v1592438354/ugh_yrklef.png" />
    <figcaption class="caption-text">
       This image doesn't capture the half of it...
       <a href="https://res.cloudinary.com/twhiteblog/image/upload/v1592438354/ugh_yrklef.png">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>


I decided to head back to Google, Stack Overflow and try to find *something* to help me with this.

## MDN and the *:not()* selector

One of the things I wanted to do was *exclude* certain elements with certain classes. I found the  [:not() selector on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:not).

At first it confused me; what are we excluding?

At first I selected all of the elements I wanted to change and added the `:not()` selector, for instance `p:not(.some-class)` which highlighted *all* the `p` elements that did not have that class. This meant all paragraphs in the body were selected.

I tried to add the linear gradient to all the main `hn` selectors which meant even those elements that I didn't want selected, like the tags or header in the newsletter box had the gradient added to them which I didn't want. I also wanted to add the gradient to different links in the body. I did the same for the anchor elements, not realizing that the social icons and tags were also links, thus having all the social icons, tags, and other buttons included in the linear gradient selection. It was a *disaster* so I went back to the docs and reread them.

## Decided *:not()* was *not* the right selector[^3]

I tried to use [:first-child() selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child) but then I'd need to select different elements that were not descendants to the parent element because this Jekyll theme and Liquid templating is hard to reason about when it comes to custom styles.

Looked up the [:nth-child() selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) and decided that wouldn't work either.

Sat on it for a few minutes, Googling and trawling Stack Overflow.

## Back to basics

Went back to CSS fundamentals and realized I could just add a `background: #fff` to the elements that I didn't want the highlight to be included in. Learned more about specificity and how to order selectors along the cascade to target specific elements, for example:

```css
p.site-info a {
  background: #fff;
}
``` 
to target all the `p` elements with the class `site.info` that have an anchor tag, `a` as a descendant I also changed the color of the text selection when a user selects text on most of the site with the `::selection` selector.

## Oh ...and a scrollbar

What good is a dev blog without a fancy scrollbar?

Got the idea from [swyx](https://swyx.io) and [CSS-Tricks](https://css-tricks.com).

```css
body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background: rgb(6, 215, 217);
  background: linear-gradient(45deg, rgba(6, 215, 217, 1) 0%, rgba(255, 193, 210, 1.00) 35%, rgba(6, 215, 217, 1) 100%);
  border-radius: 3em;
}
```

[scrollbar CSS-Tricks](https://css-tricks.com/almanac/properties/s/scrollbar/)

<p class="codepen" data-height="448" data-theme-id="22729" data-default-tab="html,result" data-user="tiffanywhitedev" data-slug-hash="BajppPj" data-preview="true" style="height: 448px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Scrollbar Idea (CSS-Tricks)">
  <span>See the Pen <a href="https://codepen.io/tiffanywhitedev/pen/BajppPj">
  Scrollbar Idea (CSS-Tricks)</a> by Tiffany White (<a href="https://codepen.io/tiffanywhitedev">@tiffanywhitedev</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script><br />

## Conclusion

CSS can be fun at times and sprucing up this blog with some fancy CSS tricks was quite an adventure.

Learning about specificity, different CSS selectors, and the like, made for a fun yet frustrating evening and I am glad I did it.

***Edit***: 

I could have used a CSS variable instead of writing `background: #fff` everywhere, declaring the `:root` pseudo-class and declaring a variable like so:

```css
:root {
  --non-highlights: #fff;
}
```

And then applying this variable everywhere I need, like this:

```css
.non-highlights {
  var(--non-highlights)
}
```

I plan on implementing this soon.

[^1]: Also, admittedly, my least favorite.
[^2]: Maybe something custom that I was missing. I just didn't feel like digging any deeper for such a minor enhancement.
[^3]: Ba dum tiss