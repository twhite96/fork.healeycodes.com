---
title: "Recognizing Patterns"
layout: post
image: /assets/images/posts/2019/patterns.png
tags: [Fundamentals]
---

> Hey y'all. Been a while. It has been super **crazy** as I am moving in literally one week and consulting is a craziness unto itself. I've also broken the chain of posting at least once a month for 4 years but hey. I have a good reason to have missed. 😜


One of the things I am learning while working is *how to recognize patterns*.

## Pattern recognition is a skill

I have *terrible* pattern recognition abilities[^1]. This was a thing that stood out on the I.Q. tests I've taken by psychologists, once in my teens, and the other just recently.

This industry is *based* on pattern recognition. It is vital to your survival as a dev. If you can't recognize patterns in your code, then you won't succeed. At all.

Luckily, mostly *everything you write is some type of pattern*.

Take a look at this:

```js
const arr = [1,2,3,4,5]
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

Basically, we're just taking the `arr` array and iterating over it with a `for` loop and logging the index to the console. You see this everywhere, in every language based on C or some variant of C. It's a design pattern called, you guessed it, *the Iterator Design Pattern*.

It took me an *absurdly* long time to recognize this is what a pattern *is*. Once I learned what these patterns looked like, I started noticing them *everywhere*.

## Object Creator Pattern

You know how to create objects: the object literal, constructor, and the class. The way you instantiate each of these is a pattern.

```js
// Object literal

const myObj = {
  // some props
}

// constructor function

function MyObject() {
  this.someProp = someProp;
  this.someOtherProp = someOtherProp;
}

const anotherObject = new MyObject();

// class

class newObject {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

See? If you know how to do anything like this, some sort of standard way of crafting code that you see repeated over and over, most likely it is a *pattern*[^2].





[^1]: The longer I do this though, the better I am getting.
[^2]: Design patterns have to be standardized by a body of computer scientists/theorists/technicians and can't just be created by any old dev.
