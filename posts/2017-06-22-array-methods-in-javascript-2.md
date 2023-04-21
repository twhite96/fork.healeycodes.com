---
ID: 2030
title: Array Methods in JavaScript
# array-methods-in-javascript-2
author: Tiffany White
date: 2017-06-22 21:06:48
layout: post
link: >
  https://tiffanywhite.tech/array-methods-in-javascript-2/
published: true
tags: uncategorized
categories: [ ]
---
<p><img src=&quot;/images/Methods.jpeg&quot; alt=&quot;Methods&quot; /></p>

<h3 id=&quot;different-types-of-methods&quot;>Different Types of Methods</h3>

<p>There are a few basic methods to work with arrays in JavaScript. The most basic and, perhaps the most familiar, is the <code class=&quot;highlighter-rouge&quot;>.length()</code> method.</p>

<p>You can get the length of the elements in an array with with this method and a <code class=&quot;highlighter-rouge&quot;>for</code> loop, which is an iterator/counter loop. For more information about for loops, check <a href=&quot;https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement&quot;>here</a>.</p>

<p>An example of iterating through an array with a for loop to find the index of an element:</p>

<div class=&quot;language-javascript highlighter-rouge&quot;><pre class=&quot;highlight&quot;><code><span class=&quot;kd&quot;>var</span> <span class=&quot;nx&quot;>array</span> <span class=&quot;o&quot;>=</span> <span class=&quot;p&quot;>[</span><span class=&quot;s2&quot;>&quot;Tiffany&quot;</span><span class=&quot;p&quot;>,</span> <span class=&quot;s2&quot;>&quot;Cheerios&quot;</span><span class=&quot;p&quot;>,</span> <span class=&quot;s2&quot;>&quot;ice cream&quot;</span><span class=&quot;p&quot;>,</span> <span class=&quot;s2&quot;>&quot;pig&quot;</span><span class=&quot;p&quot;>,</span> <span class=&quot;s2&quot;>&quot;Macbook&quot;</span><span class=&quot;p&quot;>];</span>

<span class=&quot;k&quot;>for</span> <span class=&quot;p&quot;>(</span><span class=&quot;kd&quot;>var</span> <span class=&quot;nx&quot;>i</span> <span class=&quot;o&quot;>=</span> <span class=&quot;mi&quot;>0</span><span class=&quot;p&quot;>;</span> <span class=&quot;nx&quot;>i</span> <span class=&quot;o&quot;>&lt;</span> <span class=&quot;nx&quot;>array</span><span class=&quot;p&quot;>.</span><span class=&quot;nx&quot;>length</span><span class=&quot;p&quot;>;</span> <span class=&quot;nx&quot;>i</span><span class=&quot;o&quot;>++</span><span class=&quot;p&quot;>)</span> <span class=&quot;p&quot;>{</span>
	<span class=&quot;kd&quot;>var</span> <span class=&quot;nx&quot;>index</span> <span class=&quot;o&quot;>=</span> <span class=&quot;nx&quot;>array</span><span class=&quot;p&quot;>[</span><span class=&quot;nx&quot;>i</span><span class=&quot;p&quot;>];</span>
	<span class=&quot;nx&quot;>console</span><span class=&quot;p&quot;>.</span><span class=&quot;nx&quot;>log</span><span class=&quot;p&quot;>(</span><span class=&quot;s1&quot;>'Index: '</span><span class=&quot;p&quot;>,</span> <span class=&quot;nx&quot;>index</span><span class=&quot;p&quot;>);</span>
<span class=&quot;p&quot;>}</span>
</code></pre>
</div>

<p>This will list all the elements in the array to the console, as well as an <code class=&quot;highlighter-rouge&quot;>undefined</code> since I’m not returning a value.</p>

<h4 id=&quot;foreach-method&quot;>forEach() Method</h4>

<p>Another method worth noting is the <code class=&quot;highlighter-rouge&quot;>forEach()</code> method which is another iterator and perhaps more syntatic sugar than a for loop. It is worth mentioning that <code class=&quot;highlighter-rouge&quot;>forEach()</code> has perf costs and for large records and datasets, a <code class=&quot;highlighter-rouge&quot;>for</code> loop would be a better choice.</p>

<p>An example of a <code class=&quot;highlighter-rouge&quot;>forEach</code> on an array would look like this:</p>

<div class=&quot;language-javascript highlighter-rouge&quot;><pre class=&quot;highlight&quot;><code><span class=&quot;kd&quot;>var</span> <span class=&quot;nx&quot;>array</span> <span class=&quot;o&quot;>=</span> <span class=&quot;p&quot;>[</span><span class=&quot;mi&quot;>1</span><span class=&quot;p&quot;>,</span><span class=&quot;mi&quot;>2</span><span class=&quot;p&quot;>,</span><span class=&quot;mi&quot;>3</span><span class=&quot;p&quot;>,</span><span class=&quot;mi&quot;>4</span><span class=&quot;p&quot;>,</span><span class=&quot;mi&quot;>5</span><span class=&quot;p&quot;>,</span><span class=&quot;mi&quot;>6</span><span class=&quot;p&quot;>,</span><span class=&quot;mi&quot;>7</span><span class=&quot;p&quot;>,</span><span class=&quot;mi&quot;>8</span><span class=&quot;p&quot;>,</span><span class=&quot;mi&quot;>9</span><span class=&quot;p&quot;>,</span><span class=&quot;mi&quot;>0</span><span class=&quot;p&quot;>];</span>

<span class=&quot;nx&quot;>array</span><span class=&quot;p&quot;>.</span><span class=&quot;nx&quot;>forEach</span><span class=&quot;p&quot;>(</span><span class=&quot;kd&quot;>function</span><span class=&quot;p&quot;>(</span><span class=&quot;nx&quot;>item</span><span class=&quot;p&quot;>,</span> <span class=&quot;nx&quot;>index</span><span class=&quot;p&quot;>)</span> <span class=&quot;p&quot;>{</span>
     <span class=&quot;nx&quot;>console</span><span class=&quot;p&quot;>.</span><span class=&quot;nx&quot;>log</span><span class=&quot;p&quot;>(</span><span class=&quot;nx&quot;>item</span><span class=&quot;p&quot;>);</span>
 <span class=&quot;p&quot;>});</span>
</code></pre>
</div>

<p>This does essentially the same thing as a <code class=&quot;highlighter-rouge&quot;>for</code> loop only it is cleaner and perhaps easier to use.</p>

<h4 id=&quot;map-method&quot;>map() Method</h4>

<p>This method creates a new method from elements in an old method using a callback function with three arguments: <code class=&quot;highlighter-rouge&quot;>currentValue</code>, <code class=&quot;highlighter-rouge&quot;>index</code>, and <code class=&quot;highlighter-rouge&quot;>array</code>.</p>

<p>You can use <code class=&quot;highlighter-rouge&quot;>map()</code>to parse an array of objects or return a new array full of different number sets than the previous array. For instance:</p>

<div class=&quot;language-javascript highlighter-rouge&quot;><pre class=&quot;highlight&quot;><code><span class=&quot;kd&quot;>var</span> <span class=&quot;nx&quot;>even</span> <span class=&quot;o&quot;>=</span> <span class=&quot;p&quot;>[</span><span class=&quot;mi&quot;>2</span><span class=&quot;p&quot;>,</span><span class=&quot;mi&quot;>4</span><span class=&quot;p&quot;>,</span><span class=&quot;mi&quot;>6</span><span class=&quot;p&quot;>,</span><span class=&quot;mi&quot;>8</span><span class=&quot;p&quot;>];</span>

<span class=&quot;kd&quot;>var</span> <span class=&quot;nx&quot;>odd</span> <span class=&quot;o&quot;>=</span> <span class=&quot;nx&quot;>even</span><span class=&quot;p&quot;>.</span><span class=&quot;nx&quot;>map</span><span class=&quot;p&quot;>(</span><span class=&quot;kd&quot;>function</span><span class=&quot;p&quot;>(</span><span class=&quot;nx&quot;>num</span><span class=&quot;p&quot;>)</span> <span class=&quot;p&quot;>{</span>
	<span class=&quot;k&quot;>return</span> <span class=&quot;nx&quot;>num</span> <span class=&quot;o&quot;>+</span> <span class=&quot;mi&quot;>1</span><span class=&quot;p&quot;>;</span>
<span class=&quot;p&quot;>});</span>
</code></pre>
</div>

<p>is something I could use to find and return a new array of odd numbers from an old array of even ones.</p>

<h4 id=&quot;concat-method&quot;>concat() Method</h4>

<p>This method just concatenates two arrays into one. For instance:</p>

<div class=&quot;language-javascript highlighter-rouge&quot;><pre class=&quot;highlight&quot;><code>    <span class=&quot;kd&quot;>var</span> <span class=&quot;nx&quot;>greetArr</span> <span class=&quot;o&quot;>=</span> <span class=&quot;p&quot;>[</span><span class=&quot;s2&quot;>&quot;Hello&quot;</span><span class=&quot;p&quot;>,</span> <span class=&quot;s2&quot;>&quot;World!&quot;</span><span class=&quot;p&quot;>],</span>
    <span class=&quot;nx&quot;>jsArr</span> <span class=&quot;o&quot;>=</span> <span class=&quot;p&quot;>[</span><span class=&quot;s2&quot;>&quot;Javascript&quot;</span><span class=&quot;p&quot;>,</span> <span class=&quot;s2&quot;>&quot;is&quot;</span><span class=&quot;p&quot;>,</span> <span class=&quot;s2&quot;>&quot;fun!&quot;</span><span class=&quot;p&quot;>];</span>

    <span class=&quot;kd&quot;>var</span> <span class=&quot;nx&quot;>jsGreet</span> <span class=&quot;o&quot;>=</span> <span class=&quot;nx&quot;>greetArr</span><span class=&quot;p&quot;>.</span><span class=&quot;nx&quot;>concat</span><span class=&quot;p&quot;>(</span><span class=&quot;nx&quot;>jsArr</span><span class=&quot;p&quot;>);</span>

    <span class=&quot;nx&quot;>console</span><span class=&quot;p&quot;>.</span><span class=&quot;nx&quot;>log</span><span class=&quot;p&quot;>(</span><span class=&quot;nx&quot;>jsGreet</span><span class=&quot;p&quot;>);</span>
</code></pre>
</div>

<p>This will concatenate the arrays out to look like this:
<code class=&quot;highlighter-rouge&quot;>[&quot;Hello&quot;, &quot;World!&quot;, &quot;Javascript&quot;, &quot;is&quot;, &quot;fun!&quot;]</code></p>

<p>While we don’t want the commas in between the words, this gives you a basic idea of what <code class=&quot;highlighter-rouge&quot;>concat</code> does.</p>

<h4 id=&quot;thoughts&quot;>Thoughts</h4>

<p>These are just some of my favorite array methods for JavaScript. There are way more and you can find them in the Mozilla <a href=&quot;https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array&quot;>docs</a>.</p>