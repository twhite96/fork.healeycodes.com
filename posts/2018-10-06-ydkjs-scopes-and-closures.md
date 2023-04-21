---
title: "Review: YDKJS Scopes & Closures"
date: 2018-10-06 00:48
excerpt: JavaScript is a wild language that was written with some poor design choices. To ignore that fact is fatal; I don't think you can teach someone fundamentals without pointing out these design choices that make JavaScript sometimes hard to work with.
layout: post    
categories:
  - Book Reviews
tags:
  - YDKJS
  - javascript
  - web development
image: https://res.cloudinary.com/twhiteblog/image/upload/v1538880417/Header%20Images/YDKJS_S_C.png
description: YDKJS Scopes & Closures is a must read...with caveats.
---

![](https://res.cloudinary.com/twhiteblog/image/upload/v1538880417/Header%20Images/YDKJS_S_C.png)

> This is a new series where I review a programming book I have read. I will usually issue a review within a few days of reading it. This one is late because I just decided to do this series.

First, let me say that I am a big fan of Kyle Simpson's pragmatic teaching style. I read [You Don't Know JS: Up & Going](https://www.amazon.com/You-Dont-Know-JS-Going-ebook/dp/B00V20DQU8/ref=sr_1_1?ie=UTF8&qid=1538881001&sr=8-1&keywords=You+don%27t+know+javascript+Up+%26+Going) a couple years ago and it changed my understanding of JavaScript at that time.

Since reading that book[^1] I have a more solid grasp on JavaScript fundamentals than ever before. I expected to learn something that I had been missing in learning those fundamentals and I did. However I was disappointed in Kyle's dogmatism about `const`, `let` and `var` and how and when to use them.

This was an issue in the first book as well. I understand some of the quirks when using syntactic sugar such as `let` and `const` especially when destructuring arrays. But we are far safer for them than we are without them. 

Here is a bit of what I am talking about on this issue:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">just realized a quirky limitation of let/const that doesn&#39;t apply to var:<br><br>var [ a = 1, a = 2 ] = foo() // ok<br>let [ b = 1, b = 2 ] = bar() // error<br><br>let c; [ c = 1, c = 2 ] = baz() // ok</p>&mdash; getify (@getify) <a href="https://twitter.com/getify/status/1047945482293534720?ref_src=twsrc%5Etfw">October 4, 2018</a></blockquote>
<script defer src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

This is a legitimate concern. But the conversation that followed made me question Kyle's openness to new ideas:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">i think you all overeached a bit in trying to save us from these &quot;errors&quot; -- which aren&#39;t actually errors. that kind of stuff is useful from opt-in linters. but the language shouldn&#39;t have been so opinionated. shrugs.</p>&mdash; getify (@getify) <a href="https://twitter.com/getify/status/1047964502329683968?ref_src=twsrc%5Etfw">October 4, 2018</a></blockquote>
<script defer src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Opposing Viewpoints

Ben Lesh, who is a fantastic champion of RxJS and functional programming tweeted this:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Most respectable linters disallow var anyway. 🤔<br><br>And I&#39;m with <a href="https://twitter.com/awbjs?ref_src=twsrc%5Etfw">@awbjs</a>, const and let are saving us here, I&#39;ve seen and even written this bug with var in my 20+ years. I guess I&#39;m just not awesome. 🤷‍♂️</p>&mdash; Ben Lesh 🧢🏋️‍♂️💻🎨 (@BenLesh) <a href="https://twitter.com/BenLesh/status/1047998961225617409?ref_src=twsrc%5Etfw">October 4, 2018</a></blockquote>
<script defer src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Admittedly, he could have avoided the passive aggressive jab at Kyle at the end but I agreed with this tweet.

JavaScript is a wild language that was written with some poor design choices. To ignore that fact is fatal; I don't think you can teach someone fundamentals without pointing out these design choices that make JavaScript sometimes hard to work with.

JavaScript is a beautiful language. I enjoy writing it. And I learned more technical lessons about the language I love by reading this book. But, the concepts in the book are sometimes obfuscated by Kyle's dogmatic insistence on old conventions. I don't think he is aware how it comes across to people like me with intermediate skills trying to become more technical. It detracted from an otherwise crucial book to read when learning JS.





[^1]: That's the first in the series.
