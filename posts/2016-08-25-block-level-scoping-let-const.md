---
ID: 1252
title: >
  Function vs. Block Level Scoping with
  let and const
# block-level-scoping-let-const
author: Tiffany White
date: 2016-08-25 21:54:04
layout: post
link: >
  https://tiffanywhite.tech/block-level-scoping-let-const/
published: true
tags: uncategorized
categories:
  - General Updates
  - JavaScript
  - "Tiffany's Posts"
---


<img class="alignnone size-full wp-image-1251" src="https://helloburgh.me/wp-content/uploads/2016/08/const_shrink.jpg" width="3000" height="2143" />

This is an exposè on the difference between function and block level scope using <code>let</code> and <code>const</code> in JavaScript. The following explanation is how I’ve come to understand them so far <sup><a id="ffn1" href="#fn1" class="footnote">1</a></sup>.

<h2>Function or Lexical Scope</h2>

Take this code:

[javascript]

  function foo(a) {

   var b = 2;

   // some code

   function bar() {

   // ...

  }

  // more code

  var c = 3;

}

[/javascript]

Here we have a function <code>foo</code> that sits in the global scope. Nested within this scope is the function <code>bar()</code> and nested inside <code>foo</code>. Also within <code>foo</code>, we have the variable declaration <code>var b = 2;</code> and <code>var c = 3;</code>. Each of these belong to scope— <code>foo</code> to the global scope, <code>var b</code>, <code>var b</code>, and <code>var c</code> all scope to <code>foo</code>. Each of these scopes have access to functions and identifiers of the scopes outside them. None of these functions or identifiers are accessible outside of the function scope <code>foo</code>.

<h2>Disadvantages of Function Scopes</h2>

<ul>
	<li>Hoisting by the interpreter

		The first pass the interpreter does on var processes it and lifts it to the top of the scope. It then processes the function declarations as uninitialized variables. <sup><a id="ffn2" href="#fn2" class="footnote">2</a></sup>

		An example of hoisting:

        [javascript]

	   function bar() {

	      if (!foo) {

	        var foo = 10;
	      }

                alert(foo);
            }

	   bar(); // alerts 10 instead of reference error

	   [/javascript]</li>
	<li>Having to use an IIFE <sup><a id="ffn3" href="#fn3" class="footnote">3</a></sup>

		For beginners like me, this is confusing syntax. I see all IIFE as closures and I am sure that’s not the case. For instance:

	   [javascript]

	     (function(){

		 // all your code here

		 var foo = function() {};

		 window.onload = foo;

		 // ...

	      })();

	      // foo is unreachable here (it’s undefined)

	     [/javascript]

		In this example, the parentheses before <code>function</code> turn this block of code into a function expression. The final <code>();</code> calls the function immediately after it is created. This creates a block scope for <code>foo</code> because it is nested within the function expression and invoked immediately. The syntax is hard to understand and thus remember.</li>
</ul>

<h2>Creating Block Scopes with <code>let</code> and <code>const</code></h2>

You can easily create block scopes with <code>let</code>. It is a new keyword in ES6 that makes it stylistically easier to create a block scope in some block of code (between <code>{...}</code>). The variable cannot be accessed in the global scope. Take this code for example:

[javascript]

if (a) {

  b = a * 2;


  let a = 5;

}

console.log(b); // Reference Error! a is not defined.

[/javascript]

The error here is because <code>cosole.log()</code> can’t access the <code>a</code> variable as <code>let</code> scopes it to the <code>if</code> block.

<code>let</code> also signals to another developer that the identifier you’re using will be mutated at some point along the way, at least according to <a href="https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.by92tjm6o">Eric Elliott</a>. This is why he suggests using <code>const</code> for immutable identifiers.

<h3><code>const</code></h3>

This creates block scope but allows for the data the identifier holds to be quasi immutable. The data can be mutated. <code>const</code> only is immutable in the sense that it binds the data to the identifier, and thus should be used when only when you want to treat a value as non-reassignable. In this instance, <code>const</code> is not like <code>CONST</code> in Java and other languages.

You can actually <em>make</em> a <code>const</code> value immutable by adding <code>object.freeze()</code> to it.

<h2>So <code>let</code> or <code>const</code>?</h2>

If you took a minute to read the article I linked to by Eric Elliott, you’ll see his strong opinion in favor of <code>const</code>. He also stated that <code>var</code> is the weakest link in ES6. But Kyle Simpson had something interesting to say about it

<blockquote>
let improves scoping options in JS, not replaces. var is still a useful signal for variables that are used throughout the function. Having both, and using both, means scoping intent is clearer to understand and maintain and enforce. That’s a big win!
</blockquote>

<h2>Thoughts</h2>

I am still not sure which is the <em>right</em> one to use and when. I am sticking with <code>let</code> for now, whenever I need block scopes. It is important to note you don’t <em>have</em> to use block scopes all the time. A mixture of function or static scopes and block scopes are fine in the same document.

What do you think? Are you taking advantage of ES6’s <code>let</code> and <code>const</code>?

<ol id="footnotes">
	<li id="fn1">StackOverflow ftw <a href="#ffn1">&#8617;</a></li>
	<li id="fn2">An aside: In JavaScript, the interpreter will hoist variable declarations but not initializations.  <a href="#ffn2">&#8617;</a></li>
	<li id="fn3">Immediately Invoked Function Expression <a href="#ffn3">&#8617;</a></li>



<img class="alignnone size-full wp-image-1251" src="https://helloburgh.me/wp-content/uploads/2016/08/const_shrink.jpg" width="3000" height="2143" />

This is an exposè on the difference between function and block level scope using <code>let</code> and <code>const</code> in JavaScript. The following explanation is how I’ve come to understand them so far <sup><a id="ffn1" href="#fn1" class="footnote">1</a></sup>.

<h2>Function or Lexical Scope</h2>

Take this code:

[javascript]

  function foo(a) {

   var b = 2;

   // some code

   function bar() {

   // ...

  }

  // more code

  var c = 3;

}

[/javascript]

Here we have a function <code>foo</code> that sits in the global scope. Nested within this scope is the function <code>bar()</code> and nested inside <code>foo</code>. Also within <code>foo</code>, we have the variable declaration <code>var b = 2;</code> and <code>var c = 3;</code>. Each of these belong to scope— <code>foo</code> to the global scope, <code>var b</code>, <code>var b</code>, and <code>var c</code> all scope to <code>foo</code>. Each of these scopes have access to functions and identifiers of the scopes outside them. None of these functions or identifiers are accessible outside of the function scope <code>foo</code>.

<h2>Disadvantages of Function Scopes</h2>

<ul>
	<li>Hoisting by the interpreter

		The first pass the interpreter does on var processes it and lifts it to the top of the scope. It then processes the function declarations as uninitialized variables. <sup><a id="ffn2" href="#fn2" class="footnote">2</a></sup>

		An example of hoisting:

        [javascript]

	   function bar() {

	      if (!foo) {

	        var foo = 10;
	      }

                alert(foo);
            }

	   bar(); // alerts 10 instead of reference error

	   [/javascript]</li>
	<li>Having to use an IIFE <sup><a id="ffn3" href="#fn3" class="footnote">3</a></sup>

		For beginners like me, this is confusing syntax. I see all IIFE as closures and I am sure that’s not the case. For instance:

	   [javascript]

	     (function(){

		 // all your code here

		 var foo = function() {};

		 window.onload = foo;

		 // ...

	      })();

	      // foo is unreachable here (it’s undefined)

	     [/javascript]

		In this example, the parentheses before <code>function</code> turn this block of code into a function expression. The final <code>();</code> calls the function immediately after it is created. This creates a block scope for <code>foo</code> because it is nested within the function expression and invoked immediately. The syntax is hard to understand and thus remember.</li>
</ul>

<h2>Creating Block Scopes with <code>let</code> and <code>const</code></h2>

You can easily create block scopes with <code>let</code>. It is a new keyword in ES6 that makes it stylistically easier to create a block scope in some block of code (between <code>{...}</code>). The variable cannot be accessed in the global scope. Take this code for example:

[javascript]

if (a) {

  b = a * 2;


  let a = 5;

}

console.log(b); // Reference Error! a is not defined.

[/javascript]

The error here is because <code>cosole.log()</code> can’t access the <code>a</code> variable as <code>let</code> scopes it to the <code>if</code> block.

<code>let</code> also signals to another developer that the identifier you’re using will be mutated at some point along the way, at least according to <a href="https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.by92tjm6o">Eric Elliott</a>. This is why he suggests using <code>const</code> for immutable identifiers.

<h3><code>const</code></h3>

This creates block scope but allows for the data the identifier holds to be quasi immutable. The data can be mutated. <code>const</code> only is immutable in the sense that it binds the data to the identifier, and thus should be used when only when you want to treat a value as non-reassignable. In this instance, <code>const</code> is not like <code>CONST</code> in Java and other languages.

You can actually <em>make</em> a <code>const</code> value immutable by adding <code>object.freeze()</code> to it.

<h2>So <code>let</code> or <code>const</code>?</h2>

If you took a minute to read the article I linked to by Eric Elliott, you’ll see his strong opinion in favor of <code>const</code>. He also stated that <code>var</code> is the weakest link in ES6. But Kyle Simpson had something interesting to say about it

<blockquote>
let improves scoping options in JS, not replaces. var is still a useful signal for variables that are used throughout the function. Having both, and using both, means scoping intent is clearer to understand and maintain and enforce. That’s a big win!
</blockquote>

<h2>Thoughts</h2>

I am still not sure which is the <em>right</em> one to use and when. I am sticking with <code>let</code> for now, whenever I need block scopes. It is important to note you don’t <em>have</em> to use block scopes all the time. A mixture of function or static scopes and block scopes are fine in the same document.

What do you think? Are you taking advantage of ES6’s <code>let</code> and <code>const</code>?

<ol id="footnotes">
	<li id="fn1">StackOverflow ftw <a href="#ffn1">&#8617;</a></li>
	<li id="fn2">An aside: In JavaScript, the interpreter will hoist variable declarations but not initializations.  <a href="#ffn2">&#8617;</a></li>
	<li id="fn3">Immediately Invoked Function Expression <a href="#ffn3">&#8617;</a></li>




</ol>