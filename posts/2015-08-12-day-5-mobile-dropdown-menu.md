---
ID: 529
title: 'Day 5: Mobile Dropdown Menu'
# day-5-mobile-dropdown-menu
author: Tiffany White
date: 2015-08-12 23:41:01
layout: post
link: >
  https://tiffanywhite.tech/day-5-mobile-dropdown-menu/
published: true
tags:
  - daily progress
  - day 5
  - jquery
  - Treehouse
categories:
  - Daily Progress
---
<img class=" aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/08/wpid-Screenshot-2015-08-12-17.55.12.png" alt="Day_5" />

We went over more of the same but learned some new methods and event handlers.

We learned about GET methods like

<pre class="lang:javascript decode:1 " >.prop()</pre>

which manipulates the DOM to get the property value of the first element in the set.

We learned about the

<pre class="lang:javascript decode:1 " >.change()</pre>

event handler with an anonymous function that we used to change the function of the dropdown menu. Before we had a Go button but what good is that? You would select the dropdown and the link to say, an FAQ, and then press "Go". Well what about just <strong>going</strong> to that page when you touch or click on the dropdown menu link for that page? That is what we did by changing the whole behavior of the dropdown, and eliminating the appended Go button. Here is the code:



<pre class="lang:javascript decode:1 " >$select.change(function() {
 //Go to select's locaiton
 window.location = $select.val();

<pre class="lang:javascript decode:1 " >$select.change(function() {
 //Go to select's locaiton
 window.location = $select.val();


<pre class="lang:javascript decode:1 " >$select.change(function() {
 //Go to select's locaiton
 window.location = $select.val();

});</pre>

The

<pre class="lang:javascript decode:1 " >.val()</pre>

gets the select input without passing any arguments. Which is just clicking on a link that we specified in the HTML and the class we referenced in the jQuery that holds that link.

jQuery isn’t at all bad. And I have two more things to go to complete that part of the Front End Web Dev Track.