---
ID: 2032
title: Working With Arrays, Part 1
# working-with-arrays-part-1-2
author: Tiffany White
date: 2017-06-22 21:06:48
layout: post
link: >
  https://tiffanywhite.tech/working-with-arrays-part-1-2/
published: true
tags: uncategorized
categories:
  - "Tiffany's Posts"
---


<em>This will be a series on working with arrays. Not sure how long it will be but there is so much rich information about arrays in JavaScript that I don’t think I could fit it all into one post. It may not be a series after all; I may just revisit the topic every now and again.</em>
<h2 id="&quot;arrays&quot;">Arrays</h2>
An array is an object in JavaScript. It is a global object set out in a list between two brackets <code class="&quot;highlighter-rouge&quot;">[]</code>. Elements in an array are separated by a comma. An array can have any type of data, in any order, inside of the brackets.

For instance:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var myArray = ["John", 39, "Tiffany", 37, false];
</code></pre>
</div>
is a typical array. Usually we can get the index, or position, of a piece of data in an array by bracket or dot notation.

Arrays in JavaScript can have a mixture of data types; in my example above I mix strings, numbers, and a boolean data type in one array.
<h2 id="&quot;initializing-an-array&quot;">Initializing an Array</h2>
You can initialize an array as follows:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var myArray = [10];
</code></pre>
</div>
You can also initalize an empty array such as:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var emptyArray = [];
</code></pre>
</div>
This is useful for having a place to hold values that will be initialized later in your code.
<h2 id="&quot;accessing-array-elements&quot;">Accessing Array Elements</h2>
You can access array elements by their index in the console. JavaScript arrays are zero-indexed, much like Java and other languages. An example of the syntax:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var indexOfArray = ["Jerri", 69, "Tiffany" 37, false];
console.log(indexOfArray[4]); // This would return the boolean value 'false'
console.log(indexOfArray.[2]); // This is accessing an array with dot notation.
// This would return 'Tiffany'

console.log(indexOfArray.1); // This isn't proper syntax as properties that begin with
// a number can't be accessed using dot notation
console.log(indexOfArray.0); // This is okay as it is a string
</code></pre>
</div>
<h2 id="&quot;the-length-property&quot;">The .length Property</h2>
You can see how many items are in an array with the <code class="&quot;highlighter-rouge&quot;">.length</code> property. The syntax is similar to accessing an index with dot notation:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var howMany = ["Jerri", 69, "Tiffany" 37, false];
console.log(howMany.length); // this will return 5 as there are 5 items in the array.
// Not to be confused with *indeces*
</code></pre>
</div>



<em>This will be a series on working with arrays. Not sure how long it will be but there is so much rich information about arrays in JavaScript that I don’t think I could fit it all into one post. It may not be a series after all; I may just revisit the topic every now and again.</em>
<h2 id="&quot;arrays&quot;">Arrays</h2>
An array is an object in JavaScript. It is a global object set out in a list between two brackets <code class="&quot;highlighter-rouge&quot;">[]</code>. Elements in an array are separated by a comma. An array can have any type of data, in any order, inside of the brackets.

For instance:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var myArray = ["John", 39, "Tiffany", 37, false];
</code></pre>
</div>
is a typical array. Usually we can get the index, or position, of a piece of data in an array by bracket or dot notation.

Arrays in JavaScript can have a mixture of data types; in my example above I mix strings, numbers, and a boolean data type in one array.
<h2 id="&quot;initializing-an-array&quot;">Initializing an Array</h2>
You can initialize an array as follows:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var myArray = [10];
</code></pre>
</div>
You can also initalize an empty array such as:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var emptyArray = [];
</code></pre>
</div>
This is useful for having a place to hold values that will be initialized later in your code.
<h2 id="&quot;accessing-array-elements&quot;">Accessing Array Elements</h2>
You can access array elements by their index in the console. JavaScript arrays are zero-indexed, much like Java and other languages. An example of the syntax:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var indexOfArray = ["Jerri", 69, "Tiffany" 37, false];
console.log(indexOfArray[4]); // This would return the boolean value 'false'
console.log(indexOfArray.[2]); // This is accessing an array with dot notation.
// This would return 'Tiffany'

console.log(indexOfArray.1); // This isn't proper syntax as properties that begin with
// a number can't be accessed using dot notation
console.log(indexOfArray.0); // This is okay as it is a string
</code></pre>
</div>
<h2 id="&quot;the-length-property&quot;">The .length Property</h2>
You can see how many items are in an array with the <code class="&quot;highlighter-rouge&quot;">.length</code> property. The syntax is similar to accessing an index with dot notation:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>var howMany = ["Jerri", 69, "Tiffany" 37, false];
console.log(howMany.length); // this will return 5 as there are 5 items in the array.
// Not to be confused with *indeces*
</code></pre>
</div>




These are some basic facts about JavaScript arrays. Stay tuned for more.