---
ID: 2034
title: Scope for Beginners
# scope-for-beginners-2
author: Tiffany White
date: 2017-06-22 21:06:48
layout: post
link: >
  https://tiffanywhite.tech/scope-for-beginners-2/
published: true
tags: uncategorized
categories:
  - "Tiffany's Posts"
---


<p>In JavaScript, lexical scope deals with where your variables are defined, and how they will be accessible — or not accessible — to the rest of your code.</p>

<p>There are two terms to think about when talking about scope: local and global. These two terms are important to understand, because one can be more dangerous than the other when declaring variables and executing your code.</p>


<p>A variable is globally scoped if you declare it outside of all of your functions. For example:</p>

<div class=&quot;highlighter-rouge&quot;><pre class=&quot;highlight&quot;><code>//global variable, i.e. global scope
var a = &quot;foo&quot;;

function myFunction() {
  	var b = &quot;bar&quot;;
  	console.log(a+b);
}

myFunction();
</code></pre>
</div>

<p>When a variable is in the global scope, it can be accessed by all the code in the same JavaScript file. In this example, I’m accessing the variable a in my console.log statement, inside the <em>myFunction</em> function.</p>

<h2 id=&quot;local-scope&quot;>Local Scope</h2>

<p>Local variables only exist inside functions. They are scoped to that individual function.
You can think of local variables as as any variables that fall between an opening and closing curly brace.
These local variables can’t be accessed by code outside of the function to which they belong.</p>

<p>Take a look at this code:</p>

<div class=&quot;highlighter-rouge&quot;><pre class=&quot;highlight&quot;><code>//global variable, i.e. global scope
var a = &quot;foo&quot;;

function myFunction() {
  	//local variable, or local scope
  	var b = &quot;bar&quot;;
  	console.log(a+b);
}

function yourFunction() {
  	var c = &quot;JavaScript is fun!&quot;;
  	return c;
  	console.log(c);
}

myFunction();
yourFunction();
</code></pre>
</div>

<p>Notice how the variables are each declared inside separate functions. They are both local variables, in local scope, and can’t be accessed by one other.</p>

<p>For instance, I can’t return <em>b</em> in <em>yourFunction</em>, because <em>b</em> belongs to <em>myFunction</em>. <em>b</em> can’t be accessed by <em>yourFunction</em>, and vice versa.</p>

<p>If I were to try to return the value of <em>b</em> when calling <em>yourFunction</em>, I’d get <em>“error: b is not defined.”</em> Why? Because <em>b</em> doesn’t belong to <em>yourFunction</em>. <em>b</em> is outside of <em>yourFunction</em>’s scope.</p>

<p>When adding nested conditionals, scope gets even more hairy. But I’ll leave that for another time.</p>




<p>In JavaScript, lexical scope deals with where your variables are defined, and how they will be accessible — or not accessible — to the rest of your code.</p>

<p>There are two terms to think about when talking about scope: local and global. These two terms are important to understand, because one can be more dangerous than the other when declaring variables and executing your code.</p>


<p>A variable is globally scoped if you declare it outside of all of your functions. For example:</p>

<div class=&quot;highlighter-rouge&quot;><pre class=&quot;highlight&quot;><code>//global variable, i.e. global scope
var a = &quot;foo&quot;;

function myFunction() {
  	var b = &quot;bar&quot;;
  	console.log(a+b);
}

myFunction();
</code></pre>
</div>

<p>When a variable is in the global scope, it can be accessed by all the code in the same JavaScript file. In this example, I’m accessing the variable a in my console.log statement, inside the <em>myFunction</em> function.</p>

<h2 id=&quot;local-scope&quot;>Local Scope</h2>

<p>Local variables only exist inside functions. They are scoped to that individual function.
You can think of local variables as as any variables that fall between an opening and closing curly brace.
These local variables can’t be accessed by code outside of the function to which they belong.</p>

<p>Take a look at this code:</p>

<div class=&quot;highlighter-rouge&quot;><pre class=&quot;highlight&quot;><code>//global variable, i.e. global scope
var a = &quot;foo&quot;;

function myFunction() {
  	//local variable, or local scope
  	var b = &quot;bar&quot;;
  	console.log(a+b);
}

function yourFunction() {
  	var c = &quot;JavaScript is fun!&quot;;
  	return c;
  	console.log(c);
}

myFunction();
yourFunction();
</code></pre>
</div>

<p>Notice how the variables are each declared inside separate functions. They are both local variables, in local scope, and can’t be accessed by one other.</p>

<p>For instance, I can’t return <em>b</em> in <em>yourFunction</em>, because <em>b</em> belongs to <em>myFunction</em>. <em>b</em> can’t be accessed by <em>yourFunction</em>, and vice versa.</p>

<p>If I were to try to return the value of <em>b</em> when calling <em>yourFunction</em>, I’d get <em>“error: b is not defined.”</em> Why? Because <em>b</em> doesn’t belong to <em>yourFunction</em>. <em>b</em> is outside of <em>yourFunction</em>’s scope.</p>

<p>When adding nested conditionals, scope gets even more hairy. But I’ll leave that for another time.</p>





<p>But for now, remember the difference between global scope and local scope. And the next time you get a <em>“is not defined”</em> error, check the variable’s scope.</p>