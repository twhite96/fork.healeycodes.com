---
ID: 1302
title: Understanding Hoisting in JavaScript
# understanding-hoisting-in-javascript
author: Tiffany White
date: 2016-09-07 00:34:28
layout: post
link: >
  https://tiffanywhite.tech/understanding-hoisting-in-javascript/
published: true
tags: uncategorized
categories:
  - General Updates
  - JavaScript
  - Learning
  - Programming
  - "Tiffany's Posts"
---


<img class="alignnone wp-image-1300" src="https://helloburgh.me/wp-content/uploads/2016/09/JS-5.png" alt="" width="531" height="531" />

&nbsp;

With all this talk about ES6 and <a href="https://davidwalsh.name/for-and-against-let" target="_blank">block scoping with <code>let</code> and <code>const</code></a>, I thought it would be a good idea to talk about <em>hoisting</em> in JavaScript.

This won’t be a thorough exposition. You can find a great deal of information on <a href="https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch4.md" target="_blank">GitHub</a>. What I want to do is give the basics.
<h2>The JavaScript Interpreter</h2>
There are parts to the JavaScript compiler you’d need to understand to get a grip on what happens when a variable is <em>hoisted</em> or <em>lifted</em> to the top of a scope.

There are three parts to the compiler:
<ul>
 	<li>The Engine</li>
 	<li>Compiler</li>
 	<li>Scope</li>
</ul>
Looking at this statement: <code>var b = 10</code>, you’re probably assuming this is one statement, and that the JavaScript interpreter sees it the same way. It doesn’t.

The interpreter takes this statement and breaks it up into what are called tokens. To the interpreter, this statement and its tokens are <code>var</code>, <code>b</code>, <code>=</code>, and <code>10</code>.

The engine part of the interpreter will compile these tokens into an array and subsequent tree of nested elements to execute. The code is compiled right before it is executed.
<h2>What is Meant by <em>Hoisting</em>?</h2>
I am assuming here that you know what scope is, as <a href="https://helloburgh.me/2016/08/25/block-level-scoping-let-const/" target="_blank">I have talked about block scoping before</a> with the same assumption. If you don’t, I’ll cover it in more detail another time. For now, I am just going to focus on hoisting.

Dictionary.com <a href="http://www.dictionary.com/browse/hoist?s=t" target="_blank">definition of hoist</a>:
<blockquote>
<blockquote>verb <em>(used with object)</em></blockquote>
1.

to raise or lift, especially by some mechanical appliance:

<em>to hoist a flag;</em> to hoist the mainsail.</blockquote>
You can think of <em>hoisting</em> a variable as lifting it to the top of whatever scope it is in.

The difference here is that JavaScript hoists <em>declarations</em> and leaves the <em>initializations</em> at the bottom of the scope.

Example:

[javascript]

console.log(foo);

var foo = 3;

[/javascript]

Take this statement:

<code>var foo = 3;</code>

JavaScript looks at this and sees:

<code>var foo;</code> and <code>foo = 3;</code>

The first part of the statement is compiled, the second part is executed. It is then compiled as:

[javascript]

var foo;

console.log(foo);

foo = 3;

[/javascript]

As you can see, the declaration in this scope is the only thing that was “raised” to the top of the scope. The initialization remains at the bottom.
<h2>Just the Basics</h2>



<img class="alignnone wp-image-1300" src="https://helloburgh.me/wp-content/uploads/2016/09/JS-5.png" alt="" width="531" height="531" />

&nbsp;

With all this talk about ES6 and <a href="https://davidwalsh.name/for-and-against-let" target="_blank">block scoping with <code>let</code> and <code>const</code></a>, I thought it would be a good idea to talk about <em>hoisting</em> in JavaScript.

This won’t be a thorough exposition. You can find a great deal of information on <a href="https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch4.md" target="_blank">GitHub</a>. What I want to do is give the basics.
<h2>The JavaScript Interpreter</h2>
There are parts to the JavaScript compiler you’d need to understand to get a grip on what happens when a variable is <em>hoisted</em> or <em>lifted</em> to the top of a scope.

There are three parts to the compiler:
<ul>
 	<li>The Engine</li>
 	<li>Compiler</li>
 	<li>Scope</li>
</ul>
Looking at this statement: <code>var b = 10</code>, you’re probably assuming this is one statement, and that the JavaScript interpreter sees it the same way. It doesn’t.

The interpreter takes this statement and breaks it up into what are called tokens. To the interpreter, this statement and its tokens are <code>var</code>, <code>b</code>, <code>=</code>, and <code>10</code>.

The engine part of the interpreter will compile these tokens into an array and subsequent tree of nested elements to execute. The code is compiled right before it is executed.
<h2>What is Meant by <em>Hoisting</em>?</h2>
I am assuming here that you know what scope is, as <a href="https://helloburgh.me/2016/08/25/block-level-scoping-let-const/" target="_blank">I have talked about block scoping before</a> with the same assumption. If you don’t, I’ll cover it in more detail another time. For now, I am just going to focus on hoisting.

Dictionary.com <a href="http://www.dictionary.com/browse/hoist?s=t" target="_blank">definition of hoist</a>:
<blockquote>
<blockquote>verb <em>(used with object)</em></blockquote>
1.

to raise or lift, especially by some mechanical appliance:

<em>to hoist a flag;</em> to hoist the mainsail.</blockquote>
You can think of <em>hoisting</em> a variable as lifting it to the top of whatever scope it is in.

The difference here is that JavaScript hoists <em>declarations</em> and leaves the <em>initializations</em> at the bottom of the scope.

Example:

[javascript]

console.log(foo);

var foo = 3;

[/javascript]

Take this statement:

<code>var foo = 3;</code>

JavaScript looks at this and sees:

<code>var foo;</code> and <code>foo = 3;</code>

The first part of the statement is compiled, the second part is executed. It is then compiled as:

[javascript]

var foo;

console.log(foo);

foo = 3;

[/javascript]

As you can see, the declaration in this scope is the only thing that was “raised” to the top of the scope. The initialization remains at the bottom.
<h2>Just the Basics</h2>




I encourage you to check out the link I linked to above. <a href="https://twitter.com/getify" target="_blank">Kyle Simpson</a> is an amazing teacher and I’ve learned so much from the <a href="http://shop.oreilly.com/category/get/kyle-simpson-kit.do" target="_blank">YDKJS series</a>. You can find the <a href="https://github.com/getify/You-Dont-Know-JS" target="_blank">free version on GitHub</a>.