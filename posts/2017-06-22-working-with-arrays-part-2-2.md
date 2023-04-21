---
ID: 2031
title: Working With Arrays Part 2
# working-with-arrays-part-2-2
author: Tiffany White
date: 2017-06-22 21:06:48
layout: post
link: >
  https://tiffanywhite.tech/working-with-arrays-part-2-2/
published: true
tags: uncategorized
categories:
  - "Tiffany's Posts"
---


What is an array?

You use an array to store data. You can initialize an empty array and then store data in it as well. But that is beyond the scope of this post.

There are 4 types of arrays in JavaScript:
<ul>
 	<li>Homogeneous</li>
 	<li>Heterogeneous</li>
 	<li>Multidimensional</li>
 	<li>Jagged (or ragged)</li>
</ul>
<h3 id="&quot;homogeneous-arrays&quot;">Homogeneous Arrays</h3>
Homogeneous arrays only store one data type. It can be any data type but it can only contain data of that particular type. For example:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>// An array of ints
var array = [45, 37, 69, 90];

// An array of Boolean values
var array = [true, false];

// An array of Strings
var array = ["Mom", "Rick", "orange"];
</code></pre>
</div>
<h3 id="&quot;hetergeneous-arrays&quot;">Hetergeneous Arrays…</h3>
Can contain a mixture of data types. For example:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var anArray = ["peaches", 9, "cream", false];
</code></pre>
</div>
<h3 id="&quot;multidimensional-arrays&quot;">Multidimensional Arrays</h3>
A multidimensional array is just an array of arrays. Think of them as nested arrays. For example:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var myArray = [["Mom", 71, "Me", 36], ["John", 40], [true]];
</code></pre>
</div>
<h3 id="&quot;jagged-arrays&quot;">Jagged Arrays</h3>
A jagged array is an array that <em>looks</em> like a multidimesional array but does not have a particular order. They look like this:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var myArray = [
     ["Jerri", 70, "Tiffany"],
     ["37"],
     ["John", false],
 ];
</code></pre>
</div>
<h3 id="&quot;an-empty-array&quot;">An Empty Array</h3>
Is an array with nothing in it. For example:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var anArray = [];
</code></pre>
</div>
This is useful for loops and adding data later to your program.




What is an array?

You use an array to store data. You can initialize an empty array and then store data in it as well. But that is beyond the scope of this post.

There are 4 types of arrays in JavaScript:
<ul>
 	<li>Homogeneous</li>
 	<li>Heterogeneous</li>
 	<li>Multidimensional</li>
 	<li>Jagged (or ragged)</li>
</ul>
<h3 id="&quot;homogeneous-arrays&quot;">Homogeneous Arrays</h3>
Homogeneous arrays only store one data type. It can be any data type but it can only contain data of that particular type. For example:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>// An array of ints
var array = [45, 37, 69, 90];

// An array of Boolean values
var array = [true, false];

// An array of Strings
var array = ["Mom", "Rick", "orange"];
</code></pre>
</div>
<h3 id="&quot;hetergeneous-arrays&quot;">Hetergeneous Arrays…</h3>
Can contain a mixture of data types. For example:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var anArray = ["peaches", 9, "cream", false];
</code></pre>
</div>
<h3 id="&quot;multidimensional-arrays&quot;">Multidimensional Arrays</h3>
A multidimensional array is just an array of arrays. Think of them as nested arrays. For example:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var myArray = [["Mom", 71, "Me", 36], ["John", 40], [true]];
</code></pre>
</div>
<h3 id="&quot;jagged-arrays&quot;">Jagged Arrays</h3>
A jagged array is an array that <em>looks</em> like a multidimesional array but does not have a particular order. They look like this:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var myArray = [
     ["Jerri", 70, "Tiffany"],
     ["37"],
     ["John", false],
 ];
</code></pre>
</div>
<h3 id="&quot;an-empty-array&quot;">An Empty Array</h3>
Is an array with nothing in it. For example:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var anArray = [];
</code></pre>
</div>
This is useful for loops and adding data later to your program.





These are the types of arrays in JavaScript. I will cover arrays in Java as well.