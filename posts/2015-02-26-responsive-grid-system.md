---
ID: 105
title: Responsive Grid System
# responsive-grid-system
author: Tiffany White
date: 2015-02-26 18:17:59
layout: post
link: >
  https://tiffanywhite.tech/responsive-grid-system/
published: true
tags:
  - css
  - html
  - responsive grid
  - web development
categories:
  - General Updates
  - Web Development
---


<pre class="lang:html decode:1 " >
&lt;div class=&quot;section group&quot;&gt;
 &lt;div class=&quot;col span_1_of_3&quot;&gt;This is column 1&lt;/div&gt;
 &lt;div class=&quot;col span_1_of_3&quot;&gt;This is column 2&lt;/div&gt;
 &lt;div class=&quot;col span_1_of_3&quot;&gt;This is column 3&lt;/div&gt;
&lt;/div&gt;



<pre class="lang:html decode:1 " >
&lt;div class=&quot;section group&quot;&gt;
 &lt;div class=&quot;col span_1_of_3&quot;&gt;This is column 1&lt;/div&gt;
 &lt;div class=&quot;col span_1_of_3&quot;&gt;This is column 2&lt;/div&gt;
 &lt;div class=&quot;col span_1_of_3&quot;&gt;This is column 3&lt;/div&gt;
&lt;/div&gt;




</pre>

This whole mess broke the very thing I was trying to do with the footer of my site. Why does responsive code have to be so verbose? The main complaint, it seems from devs who are tons more experienced than me, is that it is slower loading. I mean, I guess if you traverse around the interwebs, you will see complaints about slow responsive sites.

I copied the code, just as expected. Tweaked the margins of the columns but yet the footer background color I wanted just didn't span the width of the body. I edited all the css and I still couldn't get it right, Googled like a fiend, copied this, tweaked that and until I deleted the responsive code my footer was a mess.

My friend Piper helped me out but somewhere in my HTML there is a problem. We decided that using this:



<pre class="lang:html decode:1 " >
&lt;footer&gt;
 &lt;div&gt;&lt;/div&gt;
   &lt;div&gt;&lt;/div&gt;
     &lt;div&gt;&lt;/div&gt;
&lt;/footer



<pre class="lang:html decode:1 " >
&lt;footer&gt;
 &lt;div&gt;&lt;/div&gt;
   &lt;div&gt;&lt;/div&gt;
     &lt;div&gt;&lt;/div&gt;
&lt;/footer




</pre>

for the HTML and

<pre class="lang:css decode:1 " >footer div { width: 30%, margin: 4.5% } display: inline-block </pre>

for the CSS would get the desired effect, which is a footer that looks like this:

<img src="https://helloburgh.me/wp-content/uploads/2015/02/wpid-footer.png" alt="Minimal Web footer" />

But it didn’t turn out like that. I am packing up a zip file and sending my horrendously indented code off to her. I have been at this the entire day, from 11 am to 6 PM. This is when being a developer tests all your mettle…