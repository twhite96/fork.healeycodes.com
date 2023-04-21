---
ID: 925
title: 'Front-End Programming Project on Free Code Camp'
author: Tiffany White
date: 2016-02-29 00:00:43
layout: post
link: >
  https://tiffanywhite.tech/front-end-programming-project-free-code-camp/
published: true
tags: uncategorized
categories:
  - Free Code Camp
  - Front-End
  - Programming
  - "Tiffany's Posts"
  - Web Development
---


<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/02/carl_sagan.jpg" alt="front-end_programming" width="624" height="471" />

So I am working on the front-end programming projects for Free Code Camp. The first one is a tribute page to anyone you want. I chose Carl Sagan as he is my skeptical hero and scientist “for the people”. I’ve read one of his books and plenty of his essays and I just think the guy was amazing, smart, and could relay complicated scientific concepts to lay people.

So I spent an hour working on the HTML and CSS. What I want to do is use jQuery to fade the quotes in and out when someone clicks on the page. So, essentially I need to have an even listener for mouse clicks, something like:
<pre class="lang:javascript decode:1 ">$( “#quote_1” ).click(function() {
$( “p” ).fadeIn( “slow”, function() {
// Animation complete
});
});
$( “#quote_1” ).click(function() {
$( “p” ).fadeOut( “slow”, function() {
// Animation complete.
});
});
</pre>
I also want to make the quotes float left and be in a block. Not sure how I am going to get it done but I will. I had it in blockquotes and I may change it back.

It’s crude but I am working on it. You can find the pen here:




<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/02/carl_sagan.jpg" alt="front-end_programming" width="624" height="471" />

So I am working on the front-end programming projects for Free Code Camp. The first one is a tribute page to anyone you want. I chose Carl Sagan as he is my skeptical hero and scientist “for the people”. I’ve read one of his books and plenty of his essays and I just think the guy was amazing, smart, and could relay complicated scientific concepts to lay people.

So I spent an hour working on the HTML and CSS. What I want to do is use jQuery to fade the quotes in and out when someone clicks on the page. So, essentially I need to have an even listener for mouse clicks, something like:
<pre class="lang:javascript decode:1 ">$( “#quote_1” ).click(function() {
$( “p” ).fadeIn( “slow”, function() {
// Animation complete
});
});
$( “#quote_1” ).click(function() {
$( “p” ).fadeOut( “slow”, function() {
// Animation complete.
});
});
</pre>
I also want to make the quotes float left and be in a block. Not sure how I am going to get it done but I will. I had it in blockquotes and I may change it back.

It’s crude but I am working on it. You can find the pen here:





http://codepen.io/twhite96/pen/dMbwyM
