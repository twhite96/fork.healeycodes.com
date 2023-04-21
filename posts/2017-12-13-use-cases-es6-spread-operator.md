---
ID: 2736
title: Use Cases for the Spread Operator
# use-cases-es6-spread-operator
author: Tiffany White
date: 2017-12-13 11:30:30
post_excerpt: >
  One of the coolest features of ES6 is
  the Spread Operator.
layout: post
link: >
  https://tiffanywhite.tech/use-cases-es6-spread-operator/
published: true
tags:
  - es2015
  - es6
  - javascript
  - spread operator
categories:
  - JavaScript
---
One of the coolest features of ES6 is the Spread Operator. The syntax looks a bit like:

```javascript
let a = [4, 5, 6];
let b = [7, …a, 8];

console.log(b);
```

This will give us:

![](https://i.imgur.com/JbUw3T7.gif)

The spread operator replaces the `concat` function in ES5:

```javascript
“use strict“;
var a = [4, 5, 6];
var b = [7].concat(a, [8]);

console.log(b);
```
This is a great little feature, but what can we *do* with it?

## Some Uses for the Spread Operator

We can do a lot with the spread operator.

### Combine Arrays
You can use the spread operator to combine arrays:

```javascript
let test = () =&gt; {
  let arr1 = ['foo', 'bar','baz'];
  let arr2 = ['fizz', 'buzz'];
  arr1.push(...arr2); // Will append the contents of arr2 to arr1
};

test(); // Runs function
```

### Copying Arrays
We’ve used `Array.prototype.slice` to make copies of arrays. Now we can do that with the spread operator.

```javascript
let arr = [7, 8, 9];
let arr2 = […arr];
arr2.push(10); // Will return a deep copy of the array with 10 appended to the end
//of the values
```
## More At the MDN

You can find more uses for the spread operator at the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread\_operator).

