---
ID: 2098
title: Gauging My Progress
# gauging-my-progress
author: Tiffany White
date: 2017-06-28 22:42:46
layout: post
link: >
  https://tiffanywhite.tech/gauging-my-progress/
published: true
tags:
  - algorithms
  - developers
  - post updates
  - web developer bootcamp
categories:
  - General Updates
  - "Tiffany's Posts"
---


As I step through The Web Developer Bootcamp, I am beginning to realize just how much I’ve learned the last two years and how it is beginning to codify in my brain.

I am coming from a Humanities background but I have always had technical chops, working with circuits was a thing I liked to do; improvising is fun.

I was, a long time ago, a Computer Networking major but decided that I wanted to build computers instead of administering them. Before class started I chose Electronics Engineering Tech at my local 2 year. I did very well. I got an A in my first class, being the only black person as well, by the middle of the semester, the only female. This was the early 2000s.

I’ve always had technical chops. In fact, I taught myself electronics over the course of two years and was competent enough that my physical science professor wanted me to help her teach the electronics section. She was a physicist and my hero.

I prefer being an autodidact, if you haven’t guessed by now.

## Translating Hardware Chops into Software Chops

I just played around with circuits and diagrams of those circuits with basic logic structure knowledge. I had and have the ability to learn logically complex things. The fact that it has taken me two years and 5 CS classes as well as learning on my own makes me feel really silly. I have always been the smartest person in the room. It is quite humbling to struggle with something that you feel you should get right away.

Sometimes I look at other newbies and see they struggle with simpler concepts than I did. It makes me feel better [^1] but I also want to help them become competent.

## The Web Developer Bootcamp and Leveling Up

I have been studying for two weeks practically non-stop. I am seeing so much progress that it encourages me to keep going. I can ask relevant questions of the material, when I get stuck instead of running to Stack Overflow or Slack/Gitter first thing, I open up Dash Docs and read the MDN, which is beginning to make a lot more sense to me.

I can write simple algorithms much more easily than just a few months ago. I don’t know what happened or what switch flipped but I am really, really happy.

## Being Happy For Other Developers Success, However…

I see developers all around me getting jobs. I am happy. I am really happy for them. This isn’t a fake happy. It is how things should work. You never begrudge another’s success.

I do, however, feel a pang of longing when I see the tweets and YouTube videos. I am waiting for my turn.

The helpful thing for me right now is knowing I am about a little over a half a year from being ready to apply for developer jobs. It is the solace I need to not get discouraged.

## The Code

Some of the things I worked on.

**Arrays**

```javascript
//Print Items in an Array in reverse //

function printReverse(arr) {
  return arr.reverse();
}
printReverse([1, 2, 3, 4]);

// Refactor to print on new line
function printReverse(arr) {
  for (var i = arr.length - 1; i &gt;= 0; i--) {
console.log(arr[i]);
  }
}
printReverse([1, 2, 3, 4]);

// isUniform //

function isUniform(array) {
  for (var i = 0; i &lt; array.length - 1; i) {
    if (array[i] !== array[i + 1]) {
  return false;
   }
 }
  return true;
}

// sumArray //

function sumArray(arr) {
  var sum = 0;
  arr.forEach(function(element) {
    sum += element;
 });
  return sum;
}

// max //

function max(arr) {
  var maxValue = 0;
  arr.forEach(function(element) {
    if (maxValue &lt; element) {
  maxValue = element;
    }
  });
  return maxValue;
}

```
**Objects**

```javascript
//Movie database for object practice

var movies = [
  {
title:: &quot;Taxi Driver&quot;,
hasWatched: true,
rating: 5
  },
  {
title:: &quot;The Social Network&quot;,
hasWatched: true,
rating: 5
  },
  {
title:: &quot;Steve Jobs&quot;,
hasWatched: true,
rating: 4.5
  }
];

function stringBuilder(movie) {
  var result = &quot;You have &quot;;
  if (movie.hasWatched) {
    result += &quot;watched&quot;;
  } else {
    result += &quot;has not seen&quot;;
  }
  result += &#039;&quot;&#039; + movie.title: + &#039;&quot; - &#039;;
  result += movie.rating + &quot; stars&quot;;
}

movies.forEach(function(movie) {
  console.log(stringBuilder(movie));
});

```



As I step through The Web Developer Bootcamp, I am beginning to realize just how much I’ve learned the last two years and how it is beginning to codify in my brain.

I am coming from a Humanities background but I have always had technical chops, working with circuits was a thing I liked to do; improvising is fun.

I was, a long time ago, a Computer Networking major but decided that I wanted to build computers instead of administering them. Before class started I chose Electronics Engineering Tech at my local 2 year. I did very well. I got an A in my first class, being the only black person as well, by the middle of the semester, the only female. This was the early 2000s.

I’ve always had technical chops. In fact, I taught myself electronics over the course of two years and was competent enough that my physical science professor wanted me to help her teach the electronics section. She was a physicist and my hero.

I prefer being an autodidact, if you haven’t guessed by now.

## Translating Hardware Chops into Software Chops

I just played around with circuits and diagrams of those circuits with basic logic structure knowledge. I had and have the ability to learn logically complex things. The fact that it has taken me two years and 5 CS classes as well as learning on my own makes me feel really silly. I have always been the smartest person in the room. It is quite humbling to struggle with something that you feel you should get right away.

Sometimes I look at other newbies and see they struggle with simpler concepts than I did. It makes me feel better [^1] but I also want to help them become competent.

## The Web Developer Bootcamp and Leveling Up

I have been studying for two weeks practically non-stop. I am seeing so much progress that it encourages me to keep going. I can ask relevant questions of the material, when I get stuck instead of running to Stack Overflow or Slack/Gitter first thing, I open up Dash Docs and read the MDN, which is beginning to make a lot more sense to me.

I can write simple algorithms much more easily than just a few months ago. I don’t know what happened or what switch flipped but I am really, really happy.

## Being Happy For Other Developers Success, However…

I see developers all around me getting jobs. I am happy. I am really happy for them. This isn’t a fake happy. It is how things should work. You never begrudge another’s success.

I do, however, feel a pang of longing when I see the tweets and YouTube videos. I am waiting for my turn.

The helpful thing for me right now is knowing I am about a little over a half a year from being ready to apply for developer jobs. It is the solace I need to not get discouraged.

## The Code

Some of the things I worked on.

**Arrays**

```javascript
//Print Items in an Array in reverse //

function printReverse(arr) {
  return arr.reverse();
}
printReverse([1, 2, 3, 4]);

// Refactor to print on new line
function printReverse(arr) {
  for (var i = arr.length - 1; i &gt;= 0; i--) {
console.log(arr[i]);
  }
}
printReverse([1, 2, 3, 4]);

// isUniform //

function isUniform(array) {
  for (var i = 0; i &lt; array.length - 1; i) {
    if (array[i] !== array[i + 1]) {
  return false;
   }
 }
  return true;
}

// sumArray //

function sumArray(arr) {
  var sum = 0;
  arr.forEach(function(element) {
    sum += element;
 });
  return sum;
}

// max //

function max(arr) {
  var maxValue = 0;
  arr.forEach(function(element) {
    if (maxValue &lt; element) {
  maxValue = element;
    }
  });
  return maxValue;
}

```
**Objects**

```javascript
//Movie database for object practice

var movies = [
  {
title:: &quot;Taxi Driver&quot;,
hasWatched: true,
rating: 5
  },
  {
title:: &quot;The Social Network&quot;,
hasWatched: true,
rating: 5
  },
  {
title:: &quot;Steve Jobs&quot;,
hasWatched: true,
rating: 4.5
  }
];

function stringBuilder(movie) {
  var result = &quot;You have &quot;;
  if (movie.hasWatched) {
    result += &quot;watched&quot;;
  } else {
    result += &quot;has not seen&quot;;
  }
  result += &#039;&quot;&#039; + movie.title: + &#039;&quot; - &#039;;
  result += movie.rating + &quot; stars&quot;;
}

movies.forEach(function(movie) {
  console.log(stringBuilder(movie));
});

```




[^1]: The arrogant, competitive little snot I was still peeks through sometimes.