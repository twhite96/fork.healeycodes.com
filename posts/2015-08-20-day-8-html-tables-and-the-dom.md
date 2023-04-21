---
ID: 574
title: 'Day 8: HTML Tables and The DOM'
# day-8-html-tables-and-the-dom
author: Tiffany White
date: 2015-08-20 21:21:54
layout: post
link: >
  https://tiffanywhite.tech/day-8-html-tables-and-the-dom/
published: true
tags:
  - daily progress
  - day 8
  - DOM
  - HTML Tables
  - Treehouse
categories:
  - Daily Progress
---
<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/08/wpid-Screenshot-2015-08-20-2.jpg" alt="DOM badge" />

<h2>The DOM</h2>

So today was basically going over HTML tables. Easy. Then we went through MDN JavaScript Web API to learn about the DOM.

Went inside Chrome Dev Tools to look at what the

<pre class="lang:javascript decode:1 " >window.document</pre>

was.

So the window is the <strong>entire window opened in your browser</strong>. You can get information from the window, call methods on it and functions. Usually you don’t write

<pre class="lang:javascript decode:1 " >window.document</pre>

to access the document, (which is part of the DOM or <em>Document Object Model</em>).

The DOM is basically the HTML document, arranged in a tree, with nodes that you can manipulate with JavaScript and jQuery.

<h2>HTML Tables</h2>

Self-explanatory really. So you have a few



<pre class="lang:html decode:1 " >
&amp;lt;table&amp;gt;&amp;lt;/table&amp;gt;


<pre class="lang:html decode:1 " >
&amp;lt;table&amp;gt;&amp;lt;/table&amp;gt;



<pre class="lang:html decode:1 " >
&amp;lt;table&amp;gt;&amp;lt;/table&amp;gt;


</pre>

tags under which you can have this:



<pre class="lang:html decode:1 " >
&amp;lt;table&amp;gt;

  &amp;lt;thead&amp;gt;

   &amp;lt;tbody&amp;gt;

   &amp;lt;tfoot&amp;gt;

     &amp;lt;tr&amp;gt;

      &amp;lt;td&amp;gt;&amp;lt;/td&amp;gt;

     &amp;lt;/tr&amp;gt;

   &amp;lt;/tbody&amp;gt;

  &amp;lt;/tfoot&amp;gt;

 &amp;lt;/thead&amp;gt;

&amp;lt;/table&amp;gt;




<pre class="lang:html decode:1 " >
&amp;lt;table&amp;gt;

  &amp;lt;thead&amp;gt;

   &amp;lt;tbody&amp;gt;

   &amp;lt;tfoot&amp;gt;

     &amp;lt;tr&amp;gt;

      &amp;lt;td&amp;gt;&amp;lt;/td&amp;gt;

     &amp;lt;/tr&amp;gt;

   &amp;lt;/tbody&amp;gt;

  &amp;lt;/tfoot&amp;gt;

 &amp;lt;/thead&amp;gt;

&amp;lt;/table&amp;gt;





</pre>

<a href="https://helloburgh.me/wp-content/uploads/2015/08/wpid-Screenshot-2015-08-20.jpg"><img class="aligncenter size-full wp-image-572" src="https://helloburgh.me/wp-content/uploads/2015/08/wpid-Screenshot-2015-08-20.jpg" alt="wpid-Screenshot-2015-08-20.jpg" width="329" height="280" /></a> <a href="https://helloburgh.me/wp-content/uploads/2015/08/wpid-Screenshot-2015-08-20-1.jpg"><img class="aligncenter size-full wp-image-573" src="https://helloburgh.me/wp-content/uploads/2015/08/wpid-Screenshot-2015-08-20-1.jpg" alt="wpid-Screenshot-2015-08-20-1.jpg" width="332" height="270" /></a></pre>