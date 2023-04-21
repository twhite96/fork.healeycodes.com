---
ID: 2024
title: Let and Const for Block Scope
# let-and-const-for-block-scope-2
author: Tiffany White
date: 2017-06-22 21:06:48
layout: post
link: >
  https://tiffanywhite.tech/let-and-const-for-block-scope-2/
published: true
tags: uncategorized
categories:
  - "Tiffany's Posts"
---


Up until ES6, you couldn’t achieve true block scoping in JavaScript. With the <code class="&quot;highlighter-rouge&quot;">var</code> keyword, the scope in a code block could be accessed in the global scope, as variable declarations are hoisted to the top of scope and the assignments are kept where they are.

For instance, take this code:
<div class="&quot;language-javascript">
<pre class="&quot;highlight&quot;"><code><span class="&quot;kd&quot;">function</span> <span class="&quot;nx&quot;">foo</span><span class="&quot;p&quot;">(</span><span class="&quot;nx&quot;">a</span><span class="&quot;p&quot;">)</span> <span class="&quot;p&quot;">{</span>
	<span class="&quot;kd&quot;">var</span> <span class="&quot;nx&quot;">b</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">2</span><span class="&quot;p&quot;">;</span>

	<span class="&quot;c1&quot;">// some code</span>

	<span class="&quot;kd&quot;">function</span> <span class="&quot;nx&quot;">bar</span><span class="&quot;p&quot;">()</span> <span class="&quot;p&quot;">{</span>
		<span class="&quot;c1&quot;">// ...</span>
	<span class="&quot;p&quot;">}</span>

	<span class="&quot;c1&quot;">// more code</span>

	<span class="&quot;kd&quot;">var</span> <span class="&quot;nx&quot;">c</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">3</span><span class="&quot;p&quot;">;</span>
<span class="&quot;p&quot;">}</span>
</code></pre>
</div>
The function <code class="&quot;highlighter-rouge&quot;">foo</code> sits in the global scope. Inside the <code class="&quot;highlighter-rouge&quot;">foo</code> function, we have the function <code class="&quot;highlighter-rouge&quot;">bar</code> as well as some variable assignments with <code class="&quot;highlighter-rouge&quot;">var b = 2 </code> and <code class="&quot;highlighter-rouge&quot;">var c - 3</code> sitting in <code class="&quot;highlighter-rouge&quot;">foo</code>. Each of these identifiers and functions have access to the scopes outside of them, clouding the global namespace. We call these <em>function scopes</em> and typically, they aren’t a good idea.
<h2 id="&quot;examples-of-hoisting&quot;">Examples of Hoisting</h2>
One of the reasons it isn’t great to use <code class="&quot;highlighter-rouge&quot;">var</code> when declaring variable assignments is because of hoisting which I mentioned above. An example:
<div class="&quot;language-javascript">
<pre class="&quot;highlight&quot;"><code>   <span class="&quot;kd&quot;">function</span> <span class="&quot;nx&quot;">bar</span><span class="&quot;p&quot;">()</span> <span class="&quot;p&quot;">{</span>
	  <span class="&quot;k&quot;">if</span> <span class="&quot;p&quot;">(</span><span class="&quot;o&quot;">!</span><span class="&quot;nx&quot;">foo</span><span class="&quot;p&quot;">)</span> <span class="&quot;p&quot;">{</span>
		<span class="&quot;kd&quot;">var</span> <span class="&quot;nx&quot;">foo</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">10</span><span class="&quot;p&quot;">;</span>
	  <span class="&quot;p&quot;">}</span>
	   <span class="&quot;nx&quot;">alert</span><span class="&quot;p&quot;">(</span><span class="&quot;nx&quot;">foo</span><span class="&quot;p&quot;">);</span>
	<span class="&quot;p&quot;">}</span>
	<span class="&quot;nx&quot;">bar</span><span class="&quot;p&quot;">();</span> <span class="&quot;c1&quot;">// alerts 10 instead of reference error  </span>
</code></pre>
</div>
Instead of getting a reference error here, when <code class="&quot;highlighter-rouge&quot;">bar()</code> is executed, the <code class="&quot;highlighter-rouge&quot;">alert(foo)</code> function has access to <code class="&quot;highlighter-rouge&quot;">var foo = 10;</code> in the conditional block. So when the JavaScript compiler goes looking for <code class="&quot;highlighter-rouge&quot;">foo</code> it finds it because <code class="&quot;highlighter-rouge&quot;">foo</code> is not scoped solely to the conditional block.
<h2 id="&quot;let&quot;"><code class="&quot;highlighter-rouge&quot;">let</code></h2>
With ES6  [^1]<sup id="&quot;fnref:1&quot;"></sup> you can create a block scope, or a scope that is contained within its own code block, by using <code class="&quot;highlighter-rouge&quot;">let</code> instead of <code class="&quot;highlighter-rouge&quot;">var</code>. For instance:
<div class="&quot;language-javascript">
<pre class="&quot;highlight&quot;"><code>    <span class="&quot;k&quot;">if</span> <span class="&quot;p&quot;">(</span><span class="&quot;nx&quot;">a</span><span class="&quot;p&quot;">)</span> <span class="&quot;p&quot;">{</span>
	  <span class="&quot;nx&quot;">b</span> <span class="&quot;o&quot;">=</span> <span class="&quot;nx&quot;">a</span> <span class="&quot;o&quot;">*</span> <span class="&quot;mi&quot;">2</span><span class="&quot;p&quot;">;</span>
	  <span class="&quot;kd&quot;">let</span> <span class="&quot;nx&quot;">a</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">5</span><span class="&quot;p&quot;">;</span>
	<span class="&quot;p&quot;">}</span>
	<span class="&quot;nx&quot;">console</span><span class="&quot;p&quot;">.</span><span class="&quot;nx&quot;">log</span><span class="&quot;p&quot;">(</span><span class="&quot;nx&quot;">b</span><span class="&quot;p&quot;">);</span> <span class="&quot;c1&quot;">// Reference Error! a is not defined.</span>
</code></pre>
</div>
Here, the <code class="&quot;highlighter-rouge&quot;">console.log(b);</code> method call is looking for <code class="&quot;highlighter-rouge&quot;">a</code> but <code class="&quot;highlighter-rouge&quot;">console.log</code> can’t access <code class="&quot;highlighter-rouge&quot;">a</code> as it is scoped to the <code class="&quot;highlighter-rouge&quot;">if</code> block. This is a very simplistic example of block scoping with <code class="&quot;highlighter-rouge&quot;">let</code>.
<h2 id="&quot;const&quot;"><code class="&quot;highlighter-rouge&quot;">const</code></h2>
<code class="&quot;highlighter-rouge&quot;">const</code> also creates block scoping. It allows for the value the indentifier holds to be quasi immutable. The data <em>can</em> be mutated as <code class="&quot;highlighter-rouge&quot;">const</code> is only really immutable because it binds the value of the indentifier and should only be used when you want the value you’re using to be non-reassignable.

You can make a <code class="&quot;highlighter-rouge&quot;">const</code> value immutable by adding <code class="&quot;highlighter-rouge&quot;">object.freeze()</code> method to it.
<h2 id="&quot;what-should-you-use&quot;">What Should You Use?</h2>
I’ll leave you with a quote by <a href="&quot;https://twitter.com/getify&quot;">Kyle Simpson</a>:
<blockquote>let improves scoping options in JS, not replaces. var is still a useful signal for variables that are used throughout the function. Having both, and using both, means scoping intent is clearer to understand and maintain and enforce. That’s a big win!</blockquote>



Up until ES6, you couldn’t achieve true block scoping in JavaScript. With the <code class="&quot;highlighter-rouge&quot;">var</code> keyword, the scope in a code block could be accessed in the global scope, as variable declarations are hoisted to the top of scope and the assignments are kept where they are.

For instance, take this code:
<div class="&quot;language-javascript">
<pre class="&quot;highlight&quot;"><code><span class="&quot;kd&quot;">function</span> <span class="&quot;nx&quot;">foo</span><span class="&quot;p&quot;">(</span><span class="&quot;nx&quot;">a</span><span class="&quot;p&quot;">)</span> <span class="&quot;p&quot;">{</span>
	<span class="&quot;kd&quot;">var</span> <span class="&quot;nx&quot;">b</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">2</span><span class="&quot;p&quot;">;</span>

	<span class="&quot;c1&quot;">// some code</span>

	<span class="&quot;kd&quot;">function</span> <span class="&quot;nx&quot;">bar</span><span class="&quot;p&quot;">()</span> <span class="&quot;p&quot;">{</span>
		<span class="&quot;c1&quot;">// ...</span>
	<span class="&quot;p&quot;">}</span>

	<span class="&quot;c1&quot;">// more code</span>

	<span class="&quot;kd&quot;">var</span> <span class="&quot;nx&quot;">c</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">3</span><span class="&quot;p&quot;">;</span>
<span class="&quot;p&quot;">}</span>
</code></pre>
</div>
The function <code class="&quot;highlighter-rouge&quot;">foo</code> sits in the global scope. Inside the <code class="&quot;highlighter-rouge&quot;">foo</code> function, we have the function <code class="&quot;highlighter-rouge&quot;">bar</code> as well as some variable assignments with <code class="&quot;highlighter-rouge&quot;">var b = 2 </code> and <code class="&quot;highlighter-rouge&quot;">var c - 3</code> sitting in <code class="&quot;highlighter-rouge&quot;">foo</code>. Each of these identifiers and functions have access to the scopes outside of them, clouding the global namespace. We call these <em>function scopes</em> and typically, they aren’t a good idea.
<h2 id="&quot;examples-of-hoisting&quot;">Examples of Hoisting</h2>
One of the reasons it isn’t great to use <code class="&quot;highlighter-rouge&quot;">var</code> when declaring variable assignments is because of hoisting which I mentioned above. An example:
<div class="&quot;language-javascript">
<pre class="&quot;highlight&quot;"><code>   <span class="&quot;kd&quot;">function</span> <span class="&quot;nx&quot;">bar</span><span class="&quot;p&quot;">()</span> <span class="&quot;p&quot;">{</span>
	  <span class="&quot;k&quot;">if</span> <span class="&quot;p&quot;">(</span><span class="&quot;o&quot;">!</span><span class="&quot;nx&quot;">foo</span><span class="&quot;p&quot;">)</span> <span class="&quot;p&quot;">{</span>
		<span class="&quot;kd&quot;">var</span> <span class="&quot;nx&quot;">foo</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">10</span><span class="&quot;p&quot;">;</span>
	  <span class="&quot;p&quot;">}</span>
	   <span class="&quot;nx&quot;">alert</span><span class="&quot;p&quot;">(</span><span class="&quot;nx&quot;">foo</span><span class="&quot;p&quot;">);</span>
	<span class="&quot;p&quot;">}</span>
	<span class="&quot;nx&quot;">bar</span><span class="&quot;p&quot;">();</span> <span class="&quot;c1&quot;">// alerts 10 instead of reference error  </span>
</code></pre>
</div>
Instead of getting a reference error here, when <code class="&quot;highlighter-rouge&quot;">bar()</code> is executed, the <code class="&quot;highlighter-rouge&quot;">alert(foo)</code> function has access to <code class="&quot;highlighter-rouge&quot;">var foo = 10;</code> in the conditional block. So when the JavaScript compiler goes looking for <code class="&quot;highlighter-rouge&quot;">foo</code> it finds it because <code class="&quot;highlighter-rouge&quot;">foo</code> is not scoped solely to the conditional block.
<h2 id="&quot;let&quot;"><code class="&quot;highlighter-rouge&quot;">let</code></h2>
With ES6  [^1]<sup id="&quot;fnref:1&quot;"></sup> you can create a block scope, or a scope that is contained within its own code block, by using <code class="&quot;highlighter-rouge&quot;">let</code> instead of <code class="&quot;highlighter-rouge&quot;">var</code>. For instance:
<div class="&quot;language-javascript">
<pre class="&quot;highlight&quot;"><code>    <span class="&quot;k&quot;">if</span> <span class="&quot;p&quot;">(</span><span class="&quot;nx&quot;">a</span><span class="&quot;p&quot;">)</span> <span class="&quot;p&quot;">{</span>
	  <span class="&quot;nx&quot;">b</span> <span class="&quot;o&quot;">=</span> <span class="&quot;nx&quot;">a</span> <span class="&quot;o&quot;">*</span> <span class="&quot;mi&quot;">2</span><span class="&quot;p&quot;">;</span>
	  <span class="&quot;kd&quot;">let</span> <span class="&quot;nx&quot;">a</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">5</span><span class="&quot;p&quot;">;</span>
	<span class="&quot;p&quot;">}</span>
	<span class="&quot;nx&quot;">console</span><span class="&quot;p&quot;">.</span><span class="&quot;nx&quot;">log</span><span class="&quot;p&quot;">(</span><span class="&quot;nx&quot;">b</span><span class="&quot;p&quot;">);</span> <span class="&quot;c1&quot;">// Reference Error! a is not defined.</span>
</code></pre>
</div>
Here, the <code class="&quot;highlighter-rouge&quot;">console.log(b);</code> method call is looking for <code class="&quot;highlighter-rouge&quot;">a</code> but <code class="&quot;highlighter-rouge&quot;">console.log</code> can’t access <code class="&quot;highlighter-rouge&quot;">a</code> as it is scoped to the <code class="&quot;highlighter-rouge&quot;">if</code> block. This is a very simplistic example of block scoping with <code class="&quot;highlighter-rouge&quot;">let</code>.
<h2 id="&quot;const&quot;"><code class="&quot;highlighter-rouge&quot;">const</code></h2>
<code class="&quot;highlighter-rouge&quot;">const</code> also creates block scoping. It allows for the value the indentifier holds to be quasi immutable. The data <em>can</em> be mutated as <code class="&quot;highlighter-rouge&quot;">const</code> is only really immutable because it binds the value of the indentifier and should only be used when you want the value you’re using to be non-reassignable.

You can make a <code class="&quot;highlighter-rouge&quot;">const</code> value immutable by adding <code class="&quot;highlighter-rouge&quot;">object.freeze()</code> method to it.
<h2 id="&quot;what-should-you-use&quot;">What Should You Use?</h2>
I’ll leave you with a quote by <a href="&quot;https://twitter.com/getify&quot;">Kyle Simpson</a>:
<blockquote>let improves scoping options in JS, not replaces. var is still a useful signal for variables that are used throughout the function. Having both, and using both, means scoping intent is clearer to understand and maintain and enforce. That’s a big win!</blockquote>




[^1]: ES2015. Sorry.