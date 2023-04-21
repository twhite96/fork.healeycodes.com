---
title: Keeping Your Code Simple 
date: 2018-07-16 18.29.05
excerpt:
comments: true
layout: post
link: >
    "https://tiffanywhite.tech/simple-code"
categories: 
    - Web Development
tags:
    - functional programming
    - algorithms
    - reduce
    - javascript
image: https://res.cloudinary.com/twhiteblog/image/upload/v1531721262/bench-accounting-49909-unsplash_s1yasn.jpg
description: Clever one-liners are all the rage but do we really need them to display how well we can code?
---


One of the biggest lessons I am trying to learn as a mid-level dev is *keeping my code simple*.

I was working on a few algorithms for a bootcamp I planned to attend[^1].

I tweeted this algorithm I was stuck on a couple weeks ago:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Need a bit of help here? Usually the Slack channels I am on are all asleep by now. 😏 <a href="https://t.co/5sALYO4cjN">pic.twitter.com/5sALYO4cjN</a></p>&mdash; Tiffany White 🤨⚛️ (@TiffanyW_412) <a href="https://twitter.com/TiffanyW_412/status/1011075530022621184?ref_src=twsrc%5Etfw">June 25, 2018</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


Clean two-liner. Nice, right?

Let's take a look below:

```js
function longestString(strs) {
  // is x string length greater than y string length? If so
  // return x
  // if not return y
  // add an empty string as an accumulator
  // as a callback to the reduce function
  const longest = strs.reduce((x, y) => x.length >= y.length ? x : y, '' );
  return longest;
}
```

Here I am trying to get the longest string in an array. I thought I could accomplish this easily with a functional array method so I searched around. I read the MDN for `map`, `filter` and `reduce` to jog my memory, and then settled on `reduce`.

Someone on StackOverflow had a similar algorithm they were trying to solve. I adapted my algorithm based on that.

As the Twitter embed shows I had a bit of trouble with the comparison as my test wasn't passing. I added the appropriate operator and all was well.

This is as clean as it gets.

*But is it readable*?

## Mentors Are Great

A friend of mine and mentor DM'd me on Twitter about this and the solutions people offered me on Twitter. He said that one solution was a mess and that if he had written anything like that he would have gotten chewed out by his boss.

My immediate response was to chuckle at the guy who gave me the nested ternary.

*But he wasn't talking about that. He was talking about my clever two liner*. Well...

## A Lesson in Dumb Code

My friend and I talked at length about cleverness and writing code for other humans to read. The variables I use in the two line solution don't have any context. Instead, I should have broken them out into something like this:

```js
let lenX = str1.length;
let lenY = str2.length;

const longest = strs.reduce((str1, str2) => lenX >= lenY ? str1 : str2, '');
```

This is still terse but more readable and easier to understand.

I could have used a traditional for loop but wanted to look *in the know* and get in easily[^2]. I wanted to look clever and smart and in the process made the code unreadable, the hallmark of a mid-level dev.

## Keep It Simple, Stupid

When I was a newbie dev, I never understood why anyone would write a variable declaration like `x` or `y`. I disliked functional programming methods like `reduce` for that reason: most examples I found used these variables. I never understood what `x` was referencing. As someone who better understands the language I have fallen into that *clever mid-level* trap. Don't do it. While yes, it makes you look as if you know what you're doing, it also makes the code unreadable and you start to look less and less appealing as a potential dev candidate for X company.

As a friend of mine used to say:

*Keep it simple, stupid*.


[^1]: You should definitely *[not apply or attend](https://twitter.com/i/moments/1018709673107746816).*
[^2]: I could have gotten in regardless. Their practices are predatory. Especially for POC and other marginalized groups.
