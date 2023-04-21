---
ID: 2033
title: The Execution Stack and Scope
# the-execution-stack-and-scope-2
author: Tiffany White
date: 2017-06-22 21:06:48
layout: post
link: >
  https://tiffanywhite.tech/the-execution-stack-and-scope-2/
published: true
tags: uncategorized
categories:
  - "Tiffany's Posts"
---


What is the <em>Execution Stack</em>? Before I answer that question, we’ll first have to take a look at the <em>Global Execution Context</em>

The <em>Global Execution Context</em>, in general terms, is the environment in which the function gets invoked, or the variable’s scope. <em>The Global Execution Context</em>, creates global object, a window object, and a <em>this</em> variable in its creation phase as well as storing any variables you’ve made stored in memory.

The first function gets created on the <em>global execution context</em> called an, as you probably guessed, <em>execution context</em> and has its own space for variables and functions. The global execution context reads line by line until it comes to the next function. Every function creates a new execution context. Once there are no more functions to execute the top function on the execution context gets popped off. Whatever is at the top is currently running.

The <em>Global Execution Context</em>, then, is the outer portion of the <em>Execution Stack</em> or <em>Call Stack</em>. The functions that are invoked in the Execution Stack are lexically sitting on top of one another and being called from top to bottom. JavaScript is a synchronous language, which means the code you write gets executed line by line, from top to bottom.
<h2 id="&quot;talking-about-the-scope-chain&quot;">Talking About the Scope Chain</h2>
So how do the execution stack and the scope chain come together? It depends on where the function sits lexically. Take a look at this code:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>function myFunction() {
console.log(myVar);
}

function yourFunction() {
var myVar = 68;
yourFunction();
}

var myVar = 37;
myFunction();
</code></pre>
</div>
The execution stack has to search for the variables you defined and where you defined them, making references to the outer lexical environment. This is called the <em>scope chain</em>.

When this code is executed, since the scope chain can’t find <em>myVar</em> in <em>function yourFunction()</em> because it isn’t lexically in the local scope (remember your scopes) and the outer reference is in the global execution context, the <em>console.log</em> will display 37.

If we were to change where <em>function yourFunction()</em> sits lexically in the execution stack, for instance:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>function myFunction() {
	function yourFunction() {
	console.log(myVar);
	}

	var myVar = 68;
	yourFunction();
}

var myVar = 37;
myFunction();
</code></pre>
</div>
Everything is created along the same lines. The global execution context is created, <em>myFunction()</em> sits on top of the global execution context, <em>yourFunction()</em> sits on top of it. But when the scope chain looks for its outer reference lexical environment this time, <em>yourFunction()</em>’s outer reference lexical environment is <em>myFunction()</em> because <em>yourFunction()</em> sits lexically inside of it.




What is the <em>Execution Stack</em>? Before I answer that question, we’ll first have to take a look at the <em>Global Execution Context</em>

The <em>Global Execution Context</em>, in general terms, is the environment in which the function gets invoked, or the variable’s scope. <em>The Global Execution Context</em>, creates global object, a window object, and a <em>this</em> variable in its creation phase as well as storing any variables you’ve made stored in memory.

The first function gets created on the <em>global execution context</em> called an, as you probably guessed, <em>execution context</em> and has its own space for variables and functions. The global execution context reads line by line until it comes to the next function. Every function creates a new execution context. Once there are no more functions to execute the top function on the execution context gets popped off. Whatever is at the top is currently running.

The <em>Global Execution Context</em>, then, is the outer portion of the <em>Execution Stack</em> or <em>Call Stack</em>. The functions that are invoked in the Execution Stack are lexically sitting on top of one another and being called from top to bottom. JavaScript is a synchronous language, which means the code you write gets executed line by line, from top to bottom.
<h2 id="&quot;talking-about-the-scope-chain&quot;">Talking About the Scope Chain</h2>
So how do the execution stack and the scope chain come together? It depends on where the function sits lexically. Take a look at this code:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>function myFunction() {
console.log(myVar);
}

function yourFunction() {
var myVar = 68;
yourFunction();
}

var myVar = 37;
myFunction();
</code></pre>
</div>
The execution stack has to search for the variables you defined and where you defined them, making references to the outer lexical environment. This is called the <em>scope chain</em>.

When this code is executed, since the scope chain can’t find <em>myVar</em> in <em>function yourFunction()</em> because it isn’t lexically in the local scope (remember your scopes) and the outer reference is in the global execution context, the <em>console.log</em> will display 37.

If we were to change where <em>function yourFunction()</em> sits lexically in the execution stack, for instance:
<div class="&quot;highlighter-rouge&quot;">
<pre class="&quot;highlight&quot;"><code>function myFunction() {
	function yourFunction() {
	console.log(myVar);
	}

	var myVar = 68;
	yourFunction();
}

var myVar = 37;
myFunction();
</code></pre>
</div>
Everything is created along the same lines. The global execution context is created, <em>myFunction()</em> sits on top of the global execution context, <em>yourFunction()</em> sits on top of it. But when the scope chain looks for its outer reference lexical environment this time, <em>yourFunction()</em>’s outer reference lexical environment is <em>myFunction()</em> because <em>yourFunction()</em> sits lexically inside of it.





This is how, under the hood, local and global scope function. For further information see: <a href="&quot;http://dmitrysoshnikov.com/ecmascript/chapter-1-execution-contexts/&quot;">ECMAScript Docs</a>