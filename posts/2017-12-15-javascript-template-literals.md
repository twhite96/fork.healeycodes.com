---
ID: 2750
title: JavaScript Template Literals
# javascript-template-literals
author: Tiffany White
date: 2017-12-15 20:30:56
post_excerpt: >
  In JavaScript, there wasn’t anything
  like string interpolation until ES6.
  Now, we have JavaScript Template
  Literals or Template Strings.
layout: post
link: >
  https://tiffanywhite.tech/javascript-template-literals/
published: true
tags:
  - es6
  - javascript
  - template literals
  - template strings
categories:
  - JavaScript
---
*Photo credit by [Hongkiat](https://www.hongkiat.com/blog/ecmascript-6-template-literals/)*

Traditionally, strings in JavaScript were limited, especially if you were working in languages like Ruby and Python. In both of those languages string interpolation meant that you could substitute strings and have multiline string concatenation without wonky hacks.

In JavaScript, there wasn’t anything like this until ES6. Now, we have JavaScript Template Literals or template strings.

## Syntax
Template strings use back-ticks rather than quotes to denote a string. A template string could look like this:
```javascript
let hello = `Hello World!`;
```

## String Substitutions
What’s nice about string substitutions is that you can take any JavaScript expression and place it inside a Template Literal and it will be output as part of the string.

The syntax for this:

```javascript
let name = “Tiffany”;
console.log(`Hey, ${name}!`);
```

Since string substitutions in Template Literals are JavaScript expressions we can evaluate any type of expression we want in the Template Literal. We can evaluate a mathematical expression such as:

```javascript
let a = 13;
let b = 20;
console.log(`The Mac first launched ${a+b} years ago. I, for one, welcome my bitten fruit overlord.`);

//  => The Mac launched 33 years ago. I, for one, welcome my bitten fruit overlord.

console.log(`I am old, but not ${2 * (a+b)} yet.`);

//  => I am old, but not 66 yet.
// I know. It doesn’t make sense. Bear with my pitiful examples.
```

You can even put functions or method calls inside a Template Literal:

```javascript

// Functions inside expressions
function func() {  return “I am the result of foo”  }
console.log(`bar ${func} baz.`);

// => I am the result of foo bar baz.

//Method calls

let hacker = {name: ‘Elliot Anderson’}
console.log(`You forgot to quit Vim, ${hacker.name.toUpperCase()}`);
// => You forgot to quit Vim, ELLIOT ALDERSON
```

## Multiline Strings
Multiline strings in JavaScript required hacks like the backslash hack and string concatenation like:

```javascript
let greeting = “Hello “ +
“World”;
```

Template strings make this a whole lot easier. Add new lines where you need them and the whitespace inside the backticks inside the Template Literal will be included inside the string like so:

```javascript
console.log(`I'm a string on one line
I’m a string on another line`);
```

## Tagged Templates
Tagged Templates can be used for powerful string transformations. You create a Tagged Template by placing a function name before the template string. Here’s an example of auto escaping an HTML function such that:

```javascript
html`<p title:="${title:}">Hello ${name}!</p>`
```

returns a string with the appropriate variables substituted but with all the unsafe characters replaced.

Nicholas Zakas goes over this in detail in his book [Understanding ES6](https://leanpub.com/understandinges6/read#leanpub-auto-multiline-strings).

## Summary

Template Literals or Template Strings are a powerful addition to the JavaScript language that brings it much needed string interpolation and transformation.

Template Literals or Template Strings are a powerful addition to the JavaScript language that brings it much needed string interpolation and transformation.

