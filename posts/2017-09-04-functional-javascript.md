---
ID: 2403
title: >
  Functional Programming in JavaScript?
  Yes Please.
# functional-javascript
author: Tiffany White
date: 2017-09-04 18:13:04
post_excerpt: >
  One of the hot topics right now in the
  web development world is functional
  programming in the language of the web,
  JavaScript.
layout: post
link: >
  https://tiffanywhite.tech/functional-javascript/
published: true
tags:
  - filter
  - functions
  - javascript
categories:
  - Functional Programming
---


One of the hot topics right now in the web development world is functional programming in the language of the web, JavaScript.

Functional programming encompasses a whole host of mathematical properties and phenomena that is beyond this post, but what I am going to address here is *how* to write a a few functions with nominal functional programming.

This is going to be a series. I am currently researching these topics as I go along and what I find excites me. I will be digging into these topics, each array method bit by bit. You can find some more of this on Steve Smith’s blog [Funky Javascript](http://funkyjavascript.com/).

## Important Concept: Higher Order Functions

One of the best and worst parts about JavaScript is that you can pass functions into other functions. This can lead to beautifully expressive code and sometimes bugs.

Why can we do this? Because, like in most functional programming languages [^1], *functions are values* just like any other value in JavaScript.

Take this code:

```js
// Named function or
// function declaration
function double(x) {
  return x * 2;
}

// Anonymous function or
// Function expression
let double = function(x) {
  return x * 2;
}

let cat = double;
// Function call
cat(60);

// returns 120, obviously
```
Here we have named function called `double`. It takes an argument, `x` and when you call it, it returns whatever the value of x is that you specify in the function call and returns it.

What’s different about JavaScript is that you can pass it into a variable and call the function from that variable. This is because, well, *functions are values*.

Higher order functions are good for composition to take smaller functions and make them into bigger functions. More on this in a minute.

## Enter .filter()

The `.filter()` function is an array function that takes a callback that it uses to create a new filtered version of an array.

Take this array of objects:

```js
const animals = [
  { name: ‘Catticus Finch’, species: ‘cat’ },
  { name: ‘Peaches’ species: ‘fish’ },
  { name: ‘Bobby’, species: ‘dog’ },
  { name: ‘Lucifer’, species: ‘cat’ },
  { name: ‘Beatrix’, species: ‘rabbit’ },
  { name: ‘Cerulean’ species: ‘fish’ }
];
```
Say I wanted to filter out all this cats in this array. We could use the trusty `for` loop:

```js
const cats = []

for (let i = 0; i &lt; animals.length; i++) {
  if (animals[i].species === ‘cat’) {
    cats.push(animals[i]);
  }
}
```

We are essentially just looping through the array and for every cat the `for` loop finds, it pushes it into the empty `cat` array.

Now, we can *filter*.

Filter accepts a callback and loops through each item in the array and passes it back to the callback function. `.filter()` expects a boolean and then returns the filtered array.

In ES5:

```js
const cats = animals.filter(function(animal) {
  return animal.species === ‘cat’;
});
```

In ES6

```js
const cats = animals.filter(animal => animal.species === ‘cat’);
```

Here, if the value of the `species` property in the `animals` array is a `cat` it will return the names of those cats in a filtered array.

We could also write an anonymous function and add a filter function inside of it, much like this:

```js
const isCat = function(animal){
  return animal.species === ‘cats’;
});

const cats = animals.filter(isCat);
```

## How Cool is This?

Writing small functions allows composition which we can reuse. In the for loop, we are pushing cats into the array but filter handles this natively.

Filter and the callback are composed as they are meshed into each other. Not only is it syntactically pleasing, but it is *less lines of code* which is always a good thing.

## Next Up

Next I want to tackle the `.map()` function and get back to my Chrome DevTools series.



[^1]: Though JavaScript isn’t a purely functional programming language.
