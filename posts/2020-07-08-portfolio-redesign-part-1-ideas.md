---
title: "Portfolio Redesign Part 1: Ideas"
layout: post
tags: [portfolio, level-up, skill building]
image: https://res.cloudinary.com/twhiteblog/image/upload/v1594191673/portfolio-redesign.jpg
description: "Exploring Gatsby for self-expression."
---
Exploring Gatsby for self-expression.

{% notice info %}
 Photo by [Joshua Aragon](https://unsplash.com/@goshua13?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/portfolio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) 
{% endnotice %}

My [current portfolio](https://www.tiffanyrwhite.com/) is written in Jekyll with a premade theme I found on GitHub. I have had many different versions over the years[^1], most of which I have found some boilerplate online and customized it[^2].


## Below are some screenshots of my current portfolio.


<figure>
    <img class="align-center" src="https://res.cloudinary.com/twhiteblog/image/upload/v1594190767/screenshot-2020-07-08_02-37-15_AM_oo9apn.png" />
    <figcaption class="caption-text"> 
       Landing page  
       <a href="https://res.cloudinary.com/twhiteblog/image/upload/v1594190767/screenshot-2020-07-08_02-37-15_AM_oo9apn.png">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>

<figure>
    <img class="align-center" src="https://res.cloudinary.com/twhiteblog/image/upload/v1594190767/screenshot-2020-07-08_02-37-34_AM_rc2g6g.png" />
    <figcaption class="caption-text">
       Projects page 
       <a href="https://res.cloudinary.com/twhiteblog/image/upload/v1594190767/screenshot-2020-07-08_02-37-34_AM_rc2g6g.png">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>

<figure>
    <img class="align-center" src="https://res.cloudinary.com/twhiteblog/image/upload/v1594190767/screenshot-2020-07-08_02-37-54_AM_uyulmo.png" />
    <figcaption class="caption-text">
       A "skills" page and timeline.      
       <a href="https://res.cloudinary.com/twhiteblog/image/upload/v1594190767/screenshot-2020-07-08_02-37-54_AM_uyulmo.png">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>

<figure>
    <img class="align-center" src="https://p179.p0.n0.cdn.getcloudapp.com/items/nOueQ7vD/Screen%20Recording%202020-07-08%20at%2002.40%20AM.gif" />
    <figcaption class="caption-text">
      CSS transforms for whimsy
       <a href="https://p179.p0.n0.cdn.getcloudapp.com/items/nOueQ7vD/Screen%20Recording%202020-07-08%20at%2002.40%20AM.gif">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>

It's nice enough, but *I* didn't design or build this. I just edited a template and there it was. Finished portfolio. That's it. Right?

## Time to grow up

Losing my job was the best thing to happen to me as a dev for a variety of reasons. Having the job in the first place and flailing was *also* one of the best things to happen to me. I learned so much by struggling daily with the tasks I needed to do. Once laid off and stepping back a bit, I took the opportunity to learn and build stuff and get better as a developer. I did some [hard](https://bumped.com/) [things](https://tiffanywhite.dev/2020/06/26/flexing-my-css-muscles-by-adding-a-bit-of-panache/), some [fun](https://fakerdata.tiffstuff.dev/) [things](https://glitch.com/~faker-api), and took up some courses to learn [algorithms](https://www.algoexpert.io/product) and [system design](https://www.algoexpert.io/systems/fundamentals).

I've leveled up *even more so* than [just a couple months ago](https://tiffanywhite.dev/2020/03/14/laid-off-but-leveled-up-lessons-learned/). I have confidence. So I feel like it is beyond time to expand my skills and *rebuild my entire portfolio from scratch*.

## Portfolio Inspo

I don't know how I came upon [Brittany Chiang's portfolio](https://brittanychiang.com/) but I am glad I did. I am struck by the animations, the design, the aesthetic. It is right up my alley. The problem is *I am not skilled enough at design to pull this off*.

<figure>
    <img class="align-center" src="https://p179.p0.n0.cdn.getcloudapp.com/items/wbuW5xxK/Screen%20Recording%202020-07-08%20at%2002.55%20AM.gif" />
    <figcaption class="caption-text">
      Brittany's portfolio is first class
       <a href="https://p179.p0.n0.cdn.getcloudapp.com/items/wbuW5xxK/Screen%20Recording%202020-07-08%20at%2002.55%20AM.gif">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>

So instead of just straight up forking this and editing it, I downloaded the zip to my machine and went through the code, looking at the package file to see what was installed. It's a Gatsby site, which I am familiar with, so I looked at the config, the webpack config, and more. [I even asked a question](https://github.com/bchiang7/v4/issues/80) about a webpack config I didn't understand in the repo and when answered, went looking deeper for documentation on the limitations of webpack server-side rendering.

I am *not* ripping this off. I will do *my own* design and make it nice, going just *slightly above* my comfort level.

## Gatsby is my choice for portfolio self-expression

Gatbsy boilerplate is easy to get running and configurable. Then it is up to you to make it your own. I am using the [gatsby-starter-default Starter](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/) and going from there.

Ali Spittel [explained it best on the We Learn Code blog](https://welearncode.com/building-a-kickass-portfolio/):

> Make a portfolio that is a true expression of yourself. Programming is in a lot of ways a creative field, so use your creativity!

[...]

> I would steer away from using a template found online -- to me, it's pretty apparent when these are used. I understand using them for people who aren't web developers, but if you are a web developer show off your skills!

That's good enough reason for me to *grow up and get my hands dirty*.

[^1]: I tried to find my first ever version from the freeCodeCamp curriculum on CodePen but I deleted it. It was *awful* haha.
[^2]: There was one I didn't customize and instead built from scratch.