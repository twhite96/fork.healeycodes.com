---
ID: 363
title: Yeoman and JavaScript, etc
# yeoman-and-javascript-etc
author: Tiffany White
date: 2015-06-25 23:35:23
layout: post
link: >
  https://tiffanywhite.tech/yeoman-and-javascript-etc/
published: true
tags:
  - arrays
  - for loops
  - javascript
  - yeoman
categories:
  - General Updates
  - Programming
---


<a href="https://helloburgh.me/wp-content/uploads/2015/06/Yeoman.jpg"><img class="  wp-image-365 aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/06/Yeoman.jpg" alt="Yeoman.jpg" width="293" height="293" /></a>

&nbsp;

&nbsp;

## Yeoman

(Currently laying in bed, terrible sinus headache today, writing this on my iPad in [Editorial](https://appsto.re/us/UqWkO.i). If it's ridden with typos I'll fix them once I get up and head to my Mac).

So, my Code Newbie pal and former guest on the podcast [Mark Pearyer (pronounced Pierre)](https://twitter.com/marcusp619) and I, as well as a few other Code Newbies are working on a hangman app. Mark presented this nice looking boilerplate for the app. He said that he made the boilerplate with [Yeoman generator](http://yeoman.io/). If you don't know what a boilerplate is check out this [article](https://en.m.wikipedia.org/wiki/Boilerplate_code).

I sat down and watched the Yeoman intro [Yeoman intro video](https://youtube.com/watch?v=gKiaLSJW5xI) and immediately became excited about the possibilities for my own apps and websites.

Downloaded yo, bower, set up a test app, and run the grunt server. I'm hooked. I plan on using Yeoman to build two apps I have an idea for.

## Fun with For Loops and Arrays

I love loops. I can see how effective they would be when repeating tasks and functions. The most logical part of JavaScript for me is looping. Not sure why. In Free Code Camp's Codecademy track they've grouped arrays and for loops together. It's strange when I think about JSON and JavaScript arrays and how they differ, where in JSON you can't mix data types (for example, integers and strings aren't allowed in the same array in JSON but can be in the same array in JavaScript). Anyway we built simple for loops with arrays like this:

~~~~
var names = [&quot;Tiffany&quot;, &quot;John&quot;, &quot;Joe&quot;, &quot;Rick&quot;, &quot;Jerri&quot;];
for (var i = 0; i &lt; names.length; i++) {
console.log(&quot;I know someone called &quot; + names[i]);
}
~~~~

The variable i refers back to the names in this case. Since we have an array and counting in the array begins at 0, the second part of the for loop is going to calculate the number of names in the names variable, or the length of the array. Then in the last part of the for loop, the loop is coming back around and counting up to the next name. It will do this because the ++ means to increase by 1. It will do this for the length of the array, and for as long as i is less than the length of the array. The console.log prints out the string and concatenates the string plus the names in the array.

Cool.

So I'm sharing, again, what I'm listening to on Spotify. On the Code Newbie Discourse we talked about music to code by and I found some awesome wub wub dubstep to kill code by. I'll share my favorite here (NSFW):




<a href="https://helloburgh.me/wp-content/uploads/2015/06/Yeoman.jpg"><img class="  wp-image-365 aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/06/Yeoman.jpg" alt="Yeoman.jpg" width="293" height="293" /></a>

&nbsp;

&nbsp;

## Yeoman

(Currently laying in bed, terrible sinus headache today, writing this on my iPad in [Editorial](https://appsto.re/us/UqWkO.i). If it's ridden with typos I'll fix them once I get up and head to my Mac).

So, my Code Newbie pal and former guest on the podcast [Mark Pearyer (pronounced Pierre)](https://twitter.com/marcusp619) and I, as well as a few other Code Newbies are working on a hangman app. Mark presented this nice looking boilerplate for the app. He said that he made the boilerplate with [Yeoman generator](http://yeoman.io/). If you don't know what a boilerplate is check out this [article](https://en.m.wikipedia.org/wiki/Boilerplate_code).

I sat down and watched the Yeoman intro [Yeoman intro video](https://youtube.com/watch?v=gKiaLSJW5xI) and immediately became excited about the possibilities for my own apps and websites.

Downloaded yo, bower, set up a test app, and run the grunt server. I'm hooked. I plan on using Yeoman to build two apps I have an idea for.

## Fun with For Loops and Arrays

I love loops. I can see how effective they would be when repeating tasks and functions. The most logical part of JavaScript for me is looping. Not sure why. In Free Code Camp's Codecademy track they've grouped arrays and for loops together. It's strange when I think about JSON and JavaScript arrays and how they differ, where in JSON you can't mix data types (for example, integers and strings aren't allowed in the same array in JSON but can be in the same array in JavaScript). Anyway we built simple for loops with arrays like this:

~~~~
var names = [&quot;Tiffany&quot;, &quot;John&quot;, &quot;Joe&quot;, &quot;Rick&quot;, &quot;Jerri&quot;];
for (var i = 0; i &lt; names.length; i++) {
console.log(&quot;I know someone called &quot; + names[i]);
}
~~~~

The variable i refers back to the names in this case. Since we have an array and counting in the array begins at 0, the second part of the for loop is going to calculate the number of names in the names variable, or the length of the array. Then in the last part of the for loop, the loop is coming back around and counting up to the next name. It will do this because the ++ means to increase by 1. It will do this for the length of the array, and for as long as i is less than the length of the array. The console.log prints out the string and concatenates the string plus the names in the array.

Cool.

So I'm sharing, again, what I'm listening to on Spotify. On the Code Newbie Discourse we talked about music to code by and I found some awesome wub wub dubstep to kill code by. I'll share my favorite here (NSFW):





https://open.spotify.com/user/thetruckert/playlist/2TY4Y6Cg3R2i3UPS2WkvYa