---
title: Building a JavaScript CLI Tool
date: 2018-06-21 03.21.54
# excerpt: Using open source libraries to construct your own JavaScript CLI tool is a fun way to get familiar with a concept.
comments: true
layout: post
link: >
  "https://tiffanywhite.tech/cli-tool"
    
categories:
  - Open Source
tags: 
  - cli 
  - open source
  - libraries
  - javascript
image: https://res.cloudinary.com/twhiteblog/image/upload/c_scale,w_3424/v1529564722/goran-ivos-245581-unsplash_lcfk25.jpg
description: Building your first command line tool can be daunting. Here are some tips I discovered while building mine.
---

I am currently building a small CLI tool based on my current React project, [Check Yo Self](https://checkyoself.surge.sh/).

The app is a web interface for checking the spelling and grammar of your markdown blog posts. Currently, the app is text input only and using localStorage to keep text data. I plan to use Firebase for text storage and data persistence.

## Caveats

This is the first library I have ever attempted to build. This is also my first command line tool. I want to share some observations on doing a CLI tool and how to be more prepared to write one than me.


## Getting to Know Your Basics

I have stumbled a bit on this project with _basic JavaScript_ which I am embarrassed to admit. The issue for me is never writing a tool like this and also setting impossible standards. GitHub star chasing is not a way to start a project. You will never finish it and, you won't be reaching 1,000 stars or more, especially on your first try. The ones that do that are few and far between. Know about arrays[^1], array methods, and the arguments before starting and if you do, try not to overthink things. This is what I am doing and it will stop you dead in your tracks.

## Read the Docs to Your Modules. Then Read Them Again. And Again.

I cannot stress this enough. It took several read-throughs to understand what I was looking at and how I could use the APIs. If a library seems convoluted and hard to use, find a simpler library. Reading the docs is important to understanding the library author's APIs and affordances which will make it a tad bit easier to write your own library.

## Don't Be Afraid to Ask the Library Author How to Use Something

I still have a hard time with this. I have been struggling with routing the components on the hamburger icon on Check Yo Self. It took me an embarrassingly long time to ask the library author for guidance. I made the offer a bit sweeter for him by explaining his docs weren't friendly to newcomers and if he had time to help me I could help him by writing better docs for the project. I just did this tonight. We will see what the outcome of this is.

## Have Fun

In the end, you're building a project, learning about open source, and building a portfolio for potential employers. Don't sweat the small stuff and have fun building your tool.





[^1]: I know all of this. But, I tend to overthink a lot of what I am doing, adding scope creep and other unsavory yak shavings.
