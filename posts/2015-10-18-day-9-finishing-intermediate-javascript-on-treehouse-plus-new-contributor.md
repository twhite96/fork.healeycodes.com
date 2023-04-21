---
ID: 672
title: 'Day 9: Finishing Intermediate JavaScript on Treehouse Plus: New Contributor'
author: Tiffany White
date: 2015-10-18 00:16:53
layout: post
link: >
  https://tiffanywhite.tech/day-9-finishing-intermediate-javascript-on-treehouse-plus-new-contributor/
published: true
tags:
  - DOM elements
  - javascript
  - jquery
categories:
  - Daily Progress
  - "Tiffany's Posts"
---
<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/10/wpid-Screenshot-2015-10-17.jpg" alt="DOM" />

<h3>Traversing the DOM</h3>

So I learned more about traversing the DOM with JavaScript instead of the sugary jQuery library which makes me feel great. I like jQuery and all, but knowing how to code something in pure JavaScript is something I think every new developer needs to learn and learn <strong>before</strong> learning any libraries or learning concurrently with JavaScript, like Treehouse does with it’s jQuery and JavaScript courses.

One of my favorite things about this was instead of having to use the

<pre class="lang:javascript decode:1 " >onclick();</pre>

event handler to traverse a certain part of the DOM (when something is clicked) you could listen for any type of click events with

<pre class="lang:javascript decode:1 " >addEventListener</pre>

to listen for a click on an element specified as the argument to the method. For instance here:



<pre class="lang:javascript decode:1 " >
addButton.onclick = addTask;
//Set the click handler to the addTask function
addButton.addEventListener(&amp;quot;click&amp;quot;, addTask);
addButton.addEventListener(&amp;quot;click&amp;quot;, ajaxRequest);



<pre class="lang:javascript decode:1 " >
addButton.onclick = addTask;
//Set the click handler to the addTask function
addButton.addEventListener(&amp;quot;click&amp;quot;, addTask);
addButton.addEventListener(&amp;quot;click&amp;quot;, ajaxRequest);




</pre>

This is much faster and easier than traversiing each element with the

<pre class="lang:javascript decode:1 " >onclick();</pre>

method.

<h3>Welcome Aboard Nick Lash as a New Contributor to the Blog</h3>

Nick and I connected on LinkedIn and, impressed with my social media and blogging output, reached out to me to collaborate on the blog and my podcast which you can find <a href="http://thisdevsjourney.com/">here</a>. I found a place for him to write here and he will be a co-host on my weekly show which hasn’t been weekly in a minute. My fault totally. But that changes with Nick on board.

Thanks Nick and I hope you get something out of it. I hope my readers enjoy his posts as well. You can find Nick on <a href="https://twitter.com/NicholasLash">Twitter</a>.
