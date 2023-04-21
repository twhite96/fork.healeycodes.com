---
ID: 2028
title: 'The Danger of Type Coercion in JavaScript'
author: Tiffany White
date: 2017-06-22 21:06:48
layout: post
link: >
  https://tiffanywhite.tech/the-danger-of-type-coercion-in-javascript-2/
published: true
tags: uncategorized
categories: [ ]
---
<h2 id=&quot;what-is-type-coercion&quot;>What is Type Coercion</h2>

<p>Type coercion is essentially <em>implicitly</em> or <em>explicitly</em> changing the data type in JavaScript.</p>

<p>You can do this in a couple of ways but first, let’s take a look at some ways the JavaScript engine tries to coerce types.</p>

<h2 id=&quot;operator-precedence&quot;>Operator Precedence</h2>

<p>Knowing operator precedence is a must when working with any programming language. You can check out the <a href=&quot;https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence&quot;>MDN</a> for information about operator precedence.</p>

<p>The operators or operator functions we are going to use in these examples are <code class=&quot;highlighter-rouge&quot;>&lt; &gt; + - * / == and ===</code>.</p>

<p>These operators are read from left-to-right in the JavaScript engine. The assignment operator <code class=&quot;highlighter-rouge&quot;>=</code> is read from right-to-left.</p>

<p>Take a look at this code:</p>

<div class=&quot;language-javascript highlighter-rouge&quot;><pre class=&quot;highlight&quot;><code><span class=&quot;kd&quot;>var</span> <span class=&quot;nx&quot;>coerce</span> <span class=&quot;o&quot;>=</span> <span class=&quot;mi&quot;>1</span> <span class=&quot;o&quot;>&lt;</span> <span class=&quot;mi&quot;>2</span> <span class=&quot;o&quot;>&lt;</span> <span class=&quot;mi&quot;>3</span> <span class=&quot;o&quot;>&lt;</span> <span class=&quot;mi&quot;>4</span><span class=&quot;p&quot;>;</span>
<span class=&quot;nx&quot;>console</span><span class=&quot;p&quot;>.</span><span class=&quot;nx&quot;>log</span><span class=&quot;p&quot;>(</span><span class=&quot;nx&quot;>coerce</span><span class=&quot;p&quot;>);</span>
</code></pre>
</div>

<p>Because we are using comparison operators, the console will return a Boolean value. In this case, when the code is run in the console, it returns <code class=&quot;highlighter-rouge&quot;>true</code>, like normal humans would assume.</p>

<p><img src=&quot;/images/Screenshot2016-02-26_02-42-17_AM.jpg&quot; alt=&quot;True&quot; class=&quot;center-image&quot; /></p>

<p>But look at this code:</p>

<div class=&quot;language-javascript highlighter-rouge&quot;><pre class=&quot;highlight&quot;><code><span class=&quot;kd&quot;>var</span> <span class=&quot;nx&quot;>coerce</span> <span class=&quot;o&quot;>=</span> <span class=&quot;mi&quot;>4</span> <span class=&quot;o&quot;>&gt;</span> <span class=&quot;mi&quot;>3</span> <span class=&quot;o&quot;>&gt;</span> <span class=&quot;mi&quot;>2</span> <span class=&quot;o&quot;>&gt;</span> <span class=&quot;mi&quot;>1</span><span class=&quot;p&quot;>;</span>
<span class=&quot;nx&quot;>console</span><span class=&quot;p&quot;>.</span><span class=&quot;nx&quot;>log</span><span class=&quot;p&quot;>(</span><span class=&quot;nx&quot;>coerce</span><span class=&quot;p&quot;>);</span>
</code></pre>
</div>
<p>This is just reversing the order of the numbers and the comparison operators. Normally we’d assume this to be true. But check out the console:</p>

<p><img src=&quot;/images/Screenshot2016-02-26_02-45-12_AM.jpg&quot; alt=&quot;False&quot; class=&quot;center-image&quot; /></p>

<p>It returns <code class=&quot;highlighter-rouge&quot;>false</code>. Why? It’s coercion.</p>

<p>When the JavaScript engine computates this code, remember, it will read it from left-to-right.</p>

<p>In JavaScript, <code class=&quot;highlighter-rouge&quot;>true</code> and <code class=&quot;highlighter-rouge&quot;>false</code> have values, where <code class=&quot;highlighter-rouge&quot;>true</code> coerces to 1 and <code class=&quot;highlighter-rouge&quot;>false</code> coerces to 0.</p>

<p><code class=&quot;highlighter-rouge&quot;>4 &gt; 3</code> returns <code class=&quot;highlighter-rouge&quot;>true</code>. <em>Now</em>, JavaScript reads the next operation as <code class=&quot;highlighter-rouge&quot;>1 &gt; 2</code> which is obviously going to return <code class=&quot;highlighter-rouge&quot;>false</code>. We then have <code class=&quot;highlighter-rouge&quot;>false &gt; 1</code> or <code class=&quot;highlighter-rouge&quot;>0 &gt; 1</code> which is false.</p>

<h3 id=&quot;coercion-with-equality-operators&quot;>Coercion with Equality Operators</h3>

<p>Equality operators are the equality <code class=&quot;highlighter-rouge&quot;>==</code> and strict equality <code class=&quot;highlighter-rouge&quot;>===</code> operators. When we use the plain equality operator, we can coerce a string into a number, a number into a Boolean, etc. Take a look at this code:</p>

<div class=&quot;language-javascript highlighter-rouge&quot;><pre class=&quot;highlight&quot;><code><span class=&quot;mi&quot;>1</span> <span class=&quot;o&quot;>==</span> <span class=&quot;s2&quot;>&quot;1&quot;</span><span class=&quot;p&quot;>;</span>
</code></pre>
</div>
<p>Here we are saying the data type <code class=&quot;highlighter-rouge&quot;>number</code> is equal to the data type <code class=&quot;highlighter-rouge&quot;>string</code> which isn’t correct. But because we are using the “non-strict” equality operator, it coerces to <code class=&quot;highlighter-rouge&quot;>true</code> as we can see in the console:</p>

<p><img src=&quot;/images/Screenshot2016-02-26_07-31-48_PM.jpg&quot; alt=&quot;Equality&quot; class=&quot;center-image&quot; /></p>

<p>You can assume that strict equality, then, would yeild false if we were to enter this into the console:</p>

<div class=&quot;language-javascript highlighter-rouge&quot;><pre class=&quot;highlight&quot;><code><span class=&quot;mi&quot;>1</span> <span class=&quot;o&quot;>===</span> <span class=&quot;s2&quot;>&quot;1&quot;</span><span class=&quot;p&quot;>;</span>
</code></pre>
</div>

<p><img src=&quot;/images/Screenshot2016-02-26_07-34-53_PM.jpg&quot; alt=&quot;Strict_equality&quot; class=&quot;center-image&quot; /></p>

<h3 id=&quot;thoughts&quot;>Thoughts</h3>

<p>There are reasons to use coercion but typically it’s bad practice. Apparently some ES6 syntax takes some of the pain of coercion away, but as you can see, you could very well end up with hard to identify bugs in your code so it’s best to use strict equality when you are comparing something and consider operator precedence when using comparison operators.</p>
