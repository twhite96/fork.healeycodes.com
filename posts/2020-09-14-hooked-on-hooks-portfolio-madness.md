---
title: "Hooked on Hooks: Portfolio Madness"
layout: post
tags: [portfolio redesign, Gatsby, hooks, React]
image: https://res.cloudinary.com/twhiteblog/image/upload/v1600134769/hooks.jpg
description: A theme, a static site generator, and an animation library walk into a bar...
---
A theme, a static site generator, and an animation library walk into a bar...

If you haven't read [I am refactoring my portfolio](/2020/07/08/portfolio-redesign-part-1-ideas/) and one of the things I wanted to do was do it from scratch. I got caught up on the details of a portfolio I admire and didn't build anything of use.

So I went through [The Gatsby Starter Library](https://www.gatsbyjs.com/starters/?c=Portfolio) looking for something simple I could modify. I wanted it *clean* and *minimal*, this way I could have some skeleton of a site to jump start me and get me over my analysis paralysis.

## Starter hopping

I found several I liked but some required a CMS[^1], others gave me errors[^2]. I just wanted a clean, white, minimal starter. I found what I wanted, kinda. It had more styles than I wanted but not too many.

## Making it my own

I *really* want some animations of some sort. I don't plan to overdo it. I just want the header text to do a little ease-in, flip, ease-out, and scroll back into view. 

I saw a similar animation on the React Spring docs, which is the library I decided to use to accomplish this. 

I opened up a Codesandbox and poked around and *holy hooks*...

## I guess I need to learn hooks...

I have been putting off fully learning hooks because I am so used to class based React; I just started to understand the class model of writing React applications and *now* there is a new, *better* way to write React components, less boilerplate, easier to reason about, etc.

It seems super daunting. I *get* how they work for the most part, for instance, replacing `componentDidMount()` with the `useEffect()` hook and the like and to be honest `useEffect()` makes more sense to me. But taking the time to learn them has been something I haven't been wanting to do.

React spring and this starter make heavy use of hooks so I guess hooks it is.





[^1]: I get that some devs have clients that need that kind of backend, but let me choose to see those starters; give me more granual filters.
[^2]: Docker could help with that but I have no idea how to run Gatsby in Docker like I do my Jekyll sites.