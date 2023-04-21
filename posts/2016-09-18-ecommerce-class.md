---
ID: 1325
title: Working on the E-commerce Site for Class
# ecommerce-class
author: Tiffany White
date: 2016-09-18 19:02:23
layout: post
link: >
  https://tiffanywhite.tech/ecommerce-class/
published: true
tags: uncategorized
categories:
  - Front-End
  - General Updates
  - Programming
  - Semester Updates
  - "Tiffany's Posts"
  - Web Development
---


<img class="alignnone size-large wp-image-1327" src="https://helloburgh.me/wp-content/uploads/2016/09/commerce-min-1024x683.jpeg" alt="commerce-min" width="700" height="467" />

&nbsp;

I am going to be making a mock ecommerce site for my Web Development class final project.

It consists of two parts:

1. The foundation with HTML and CSS, CSS animations, Bootstrap, etc., and
2. The final project, with some meatier stuff, like JavaScript and jQuery.

I started a mockup of a Bootstrap site, which is inspired by [w3layouts](https://w3layouts.com/preview/?l=/watches-flat-ecommerce-bootstrap-responsive-web-template/).

[caption id="attachment_1324" align="aligncenter" width="391"]<img class="alignnone wp-image-1324" src="https://helloburgh.me/wp-content/uploads/2016/09/Static-Page_shrink-4.png" alt="iPhone lenses, for the discerning individual" width="391" height="643" /> iPhone lenses, for the discerning individual[/caption]

## Finding a Place to Serve and Host Static Files

When I got the assignment, I decided on using Heroku, much like our instructor did, to serve our static class website. I searched all over and found that you would need to have a php file, `index.php` with some very basic code that would point to your `home.html` file in order to serve up your site.

This worked and would have served me well. But I was talking to my pal [Alex Gwartney](https://medium.com/@Gwartney)on Skype and I mentioned what I was working on and how I served up assets over Heroku with PHP. He told me you could do the same thing with an Express server and Node.

So we set off to get it set up. It was not easy.

## Getting the Site Set Up

Alex and I spent **two** whole hours troubleshooting this. I knew [from previous experience](https://helloburgh.me/2015/07/15/heroku-woes/) that you needed to have a Procfile and some npm dependencies. Alex helped me get a package.json file up by using `npm init` which I may have used once or twice but totally forgot about.

I installed Express into that directory, etc. I did not include a Procfile immediately, though I should have.

We worked on it for a while. He had trouble getting the Express server up on his end to show me what it could do. He got his end set up, then we worked on getting my site up on Heroku.

## Two Hours Later…

Everything came up roses. There were certain things in the Procfile that needed to be added. Opening ports in the Express server for Heroku to look for was a pain, but all in all, it was successful.

Just in case you’re wondering how, here are a few gists. Edit them for what you need.

https://gist.github.com/twhite96/398ad15d7139c42391048176c7131b82

&nbsp;

https://gist.github.com/twhite96/1304641fa177eca3befce67a1dee9f11

https://gist.github.com/twhite96/a7eff91fda64dd80a20d6ac454b80718




<img class="alignnone size-large wp-image-1327" src="https://helloburgh.me/wp-content/uploads/2016/09/commerce-min-1024x683.jpeg" alt="commerce-min" width="700" height="467" />

&nbsp;

I am going to be making a mock ecommerce site for my Web Development class final project.

It consists of two parts:

1. The foundation with HTML and CSS, CSS animations, Bootstrap, etc., and
2. The final project, with some meatier stuff, like JavaScript and jQuery.

I started a mockup of a Bootstrap site, which is inspired by [w3layouts](https://w3layouts.com/preview/?l=/watches-flat-ecommerce-bootstrap-responsive-web-template/).

[caption id="attachment_1324" align="aligncenter" width="391"]<img class="alignnone wp-image-1324" src="https://helloburgh.me/wp-content/uploads/2016/09/Static-Page_shrink-4.png" alt="iPhone lenses, for the discerning individual" width="391" height="643" /> iPhone lenses, for the discerning individual[/caption]

## Finding a Place to Serve and Host Static Files

When I got the assignment, I decided on using Heroku, much like our instructor did, to serve our static class website. I searched all over and found that you would need to have a php file, `index.php` with some very basic code that would point to your `home.html` file in order to serve up your site.

This worked and would have served me well. But I was talking to my pal [Alex Gwartney](https://medium.com/@Gwartney)on Skype and I mentioned what I was working on and how I served up assets over Heroku with PHP. He told me you could do the same thing with an Express server and Node.

So we set off to get it set up. It was not easy.

## Getting the Site Set Up

Alex and I spent **two** whole hours troubleshooting this. I knew [from previous experience](https://helloburgh.me/2015/07/15/heroku-woes/) that you needed to have a Procfile and some npm dependencies. Alex helped me get a package.json file up by using `npm init` which I may have used once or twice but totally forgot about.

I installed Express into that directory, etc. I did not include a Procfile immediately, though I should have.

We worked on it for a while. He had trouble getting the Express server up on his end to show me what it could do. He got his end set up, then we worked on getting my site up on Heroku.

## Two Hours Later…

Everything came up roses. There were certain things in the Procfile that needed to be added. Opening ports in the Express server for Heroku to look for was a pain, but all in all, it was successful.

Just in case you’re wondering how, here are a few gists. Edit them for what you need.

https://gist.github.com/twhite96/398ad15d7139c42391048176c7131b82

&nbsp;

https://gist.github.com/twhite96/1304641fa177eca3befce67a1dee9f11

https://gist.github.com/twhite96/a7eff91fda64dd80a20d6ac454b80718





My site is [The Lens Cap](https://thelenscap.herokuapp.com/) which is just a text file for now.