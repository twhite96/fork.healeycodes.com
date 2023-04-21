---
ID: 1090
title: Finishing OOP JavaScript at Treehouse
# finishing-oop-javascript-treehouse
author: Tiffany White
date: 2016-04-30 19:17:50
layout: post
link: >
  https://tiffanywhite.tech/finishing-oop-javascript-treehouse/
published: true
tags: uncategorized
categories:
  - Daily Updates
  - Programming
---


<a href="https://helloburgh.me/wp-content/uploads/2016/04/OOP-JavaScript.jpeg"><img src="https://helloburgh.me/wp-content/uploads/2016/04/OOP-JavaScript.jpeg" alt="OOP JavaScript" width="1000" height="666" class="alignleft size-full wp-image-1093" /></a>

<p>We learned a bit about constructors and prototypal inheritance in OOP JavaScript in this final section. We also went over prototype chaining which I found interesting.</p>

<h2>Inheritance of Properties Through the Prototype Chain</h2>

<p>Every JavaScript object has a Prototype object and inherit from <code>Object.prototype</code>. You cannot inherit from classes in JavaScript as there is no “class” per se. You only inherit from other objects.</p>

<p>In order to spread functionality throughout different functions and scopes, we can chain different objects together using the inherent nature of <code>Object.prototype</code>. We can do this a couple of ways but in the Treehouse example, we use <code>Object.create()</code> to chain together two objects.</p>

<p>Take for example this code:</p>

<pre class="lang:javascript decode:1 ">

function Media() {

  this.title: = title:;

  this.duration = duration;

  this.isPlaying = false;

}

Media.prototype.play = function() {

  this.isPlaying = true;

};

Media.prototype.stop = function() {

  this.isPlaying = false;

};

</pre>

<p>This is an example of a constructor with some functionality. What if I have another constructor that I want to inherit properties from this constructor? You could do this:</p>

<pre class="lang:javascript decode:1 ">

function Movie() {

  Media.call(this, title:, duration);

  this.year = year;

}

Movie.prototype = Object.create(Media.prototype);

Movie.prototype.stop = function() {

  this.isPlaying = false;

};

</pre>

<p>The <code>Movie()</code> constructor is inheriting properties from the <code>Media()</code> constructor.</p>

<h2>The <code>call()</code> Method</h2>

<p>You can also use <code>call()</code> to chain constructors for an object. In the example above, we’ve used:</p>

<pre class="lang:javascript decode:1 ">

function Movie() {

  Media.call(this, title:, duration);

  this.year = year;

}

</pre>

<p>The <code>call()</code> method always takes two or more arguments, with <code>this</code> always being the first, which refers to the current object, or the calling object.</p>

<h2>The Final Project for OOP JavaScript at Treehouse</h2>

<p>I was lost. I honestly don’t know how I was supposed to come up with the answers provided. I didn’t know where to start, which was honestly my fault. I didn’t take very good notes while going through the course at the end. But I wasn’t the only one stumped by this challenge. I don’t feel I was prepared enough for it, regardless of how many notes I took. You can find the gist of the solution down below.</p>

https://gist.github.com/twhite96/42aaf04d874630e4c733236392dc23f7




<a href="https://helloburgh.me/wp-content/uploads/2016/04/OOP-JavaScript.jpeg"><img src="https://helloburgh.me/wp-content/uploads/2016/04/OOP-JavaScript.jpeg" alt="OOP JavaScript" width="1000" height="666" class="alignleft size-full wp-image-1093" /></a>

<p>We learned a bit about constructors and prototypal inheritance in OOP JavaScript in this final section. We also went over prototype chaining which I found interesting.</p>

<h2>Inheritance of Properties Through the Prototype Chain</h2>

<p>Every JavaScript object has a Prototype object and inherit from <code>Object.prototype</code>. You cannot inherit from classes in JavaScript as there is no “class” per se. You only inherit from other objects.</p>

<p>In order to spread functionality throughout different functions and scopes, we can chain different objects together using the inherent nature of <code>Object.prototype</code>. We can do this a couple of ways but in the Treehouse example, we use <code>Object.create()</code> to chain together two objects.</p>

<p>Take for example this code:</p>

<pre class="lang:javascript decode:1 ">

function Media() {

  this.title: = title:;

  this.duration = duration;

  this.isPlaying = false;

}

Media.prototype.play = function() {

  this.isPlaying = true;

};

Media.prototype.stop = function() {

  this.isPlaying = false;

};

</pre>

<p>This is an example of a constructor with some functionality. What if I have another constructor that I want to inherit properties from this constructor? You could do this:</p>

<pre class="lang:javascript decode:1 ">

function Movie() {

  Media.call(this, title:, duration);

  this.year = year;

}

Movie.prototype = Object.create(Media.prototype);

Movie.prototype.stop = function() {

  this.isPlaying = false;

};

</pre>

<p>The <code>Movie()</code> constructor is inheriting properties from the <code>Media()</code> constructor.</p>

<h2>The <code>call()</code> Method</h2>

<p>You can also use <code>call()</code> to chain constructors for an object. In the example above, we’ve used:</p>

<pre class="lang:javascript decode:1 ">

function Movie() {

  Media.call(this, title:, duration);

  this.year = year;

}

</pre>

<p>The <code>call()</code> method always takes two or more arguments, with <code>this</code> always being the first, which refers to the current object, or the calling object.</p>

<h2>The Final Project for OOP JavaScript at Treehouse</h2>

<p>I was lost. I honestly don’t know how I was supposed to come up with the answers provided. I didn’t know where to start, which was honestly my fault. I didn’t take very good notes while going through the course at the end. But I wasn’t the only one stumped by this challenge. I don’t feel I was prepared enough for it, regardless of how many notes I took. You can find the gist of the solution down below.</p>

https://gist.github.com/twhite96/42aaf04d874630e4c733236392dc23f7





<p>See what I mean? We didn’t learn half this stuff. I love Treehouse and this was a hard course for Andrew to teach. But I felt it sorely lacking in practice.</p>