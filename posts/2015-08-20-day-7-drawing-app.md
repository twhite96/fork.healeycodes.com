---
ID: 562
title: 'Day 7: Drawing App'
# day-7-drawing-app
author: Tiffany White
date: 2015-08-20 13:28:55
layout: post
link: >
  https://tiffanywhite.tech/day-7-drawing-app/
published: true
tags:
  - daily progress
  - day 7
  - drawing app
  - Treehouse
categories:
  - Daily Progress
---
<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/08/wpid-Screenshot-2015-08-19.jpg" alt="Day_7" />

We used more HTML5 and JavaScript in this exercise. We had an HTML5

<pre class="lang:html decode:1 " >&lt;canvas&gt;&lt;/canvas&gt;</pre>

element which we have to use JavaScript interactivity to; we can’t use pure jQuery to make this app work so if JavaScript is disabled, the app won’t work.

We used new event handlers like



<pre class="lang:javascript decode:1 " >$canvas.mousedown(function(e) {
 lastEvent = e;
 mouseDown = true;
}).mousemove(function(e) {
}).mouseup(function() {
}).mouseleave(function() {
});



<pre class="lang:javascript decode:1 " >$canvas.mousedown(function(e) {
 lastEvent = e;
 mouseDown = true;
}).mousemove(function(e) {
}).mouseup(function() {
}).mouseleave(function() {
});




</pre>

Obviously this code doesn’t work in its current state, but I digress. So drawing the line in the app consists of

<pre class="lang:javascript decode:1 " >.mousedown() .mousemove() .mouseup() .mouseleave()</pre>

so when you click initally, mousedown, move the mouse, mousemove, release the button on the mouse, mouseup, and when the mouse leaves the DOM element it was bound to, mouseleave, which won’t make an awkward line when the mouse comes back into the DOM element.

Learned new methods like

<pre class="lang:javascript decode:1 " >.siblings()</pre>

which will access the siblings in a child element and execute an event handler or another method.

We learned JavaScript specific ways to make the canvas interactive. The code looks like this:



<pre class="lang:javascript decode:1 " >$canvas.mousedown(function(e) {
 lastEvent = e;
 mouseDown = true;
}).mousemove(function(e) {
 if(mouseDown) {
 context.beginPath();
 context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
 context.lineTo(e.offsetX, e.offsetY);
 context.strokeStyle = color;
 context.stroke();
 lastEvent = e;
 }
}).mouseup(function() {
 mouseDown = false;
}).mouseleave(function() {
 $canvas.mouseup



<pre class="lang:javascript decode:1 " >$canvas.mousedown(function(e) {
 lastEvent = e;
 mouseDown = true;
}).mousemove(function(e) {
 if(mouseDown) {
 context.beginPath();
 context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
 context.lineTo(e.offsetX, e.offsetY);
 context.strokeStyle = color;
 context.stroke();
 lastEvent = e;
 }
}).mouseup(function() {
 mouseDown = false;
}).mouseleave(function() {
 $canvas.mouseup




});</pre>

<pre class="lang:javascript decode:1 " >context.beginPath()</pre>

and such are the ways in which you can implement drawing interactivity to your app. The full thing is on CodePen or just work with it here:

[codepen_embed height="800" theme_id="0" slug_hash="bdPrvw" default_tab="result" user="twhite96"]See the Pen &lt;a href='http://codepen.io/twhite96/pen/bdPrvw/'&gt;bdPrvw&lt;/a&gt; by Tiffany White (&lt;a href='http://codepen.io/twhite96'&gt;@twhite96&lt;/a&gt;) on &lt;a href='http://codepen.io'&gt;CodePen&lt;/a&gt;.[/codepen_embed]