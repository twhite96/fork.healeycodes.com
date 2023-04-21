---
ID: 388
title: Moving on Up While Feeling Stupid
# moving-on-up-while-feeling-stupid
author: Tiffany White
date: 2015-06-30 21:31:29
layout: post
link: >
  https://tiffanywhite.tech/moving-on-up-while-feeling-stupid/
published: true
tags:
  - arrays
  - javascript
  - objects
  - scope
categories:
  - Programming
  - Web Development
---


&nbsp;

<a href="https://helloburgh.me/wp-content/uploads/2015/06/Fake-Mac.jpg"><img class="alignnone  wp-image-387" src="https://helloburgh.me/wp-content/uploads/2015/06/Fake-Mac.jpg" alt="Fake-Mac.jpg" width="675" height="450" /></a>

So I actually **did** go to bed and get up at a great hour, *but* I screwed off with the new Music update for a good hour. It cut into my coding time but I finally settled in around 1 PM, a full four hours after I woke up and one after I scheduled to code.

So I continued to tackle while loops. The idea of scope was covered. But writing my own `for`, `do`, and `while` loops I kept forgetting to declare a condition in a variable. Then I also forgot about global and local scope. So my loop looked something like this:

~~~~
var count = 1;
for (var i = 0; i &lt; 10; i++) {
 while(count &lt; 3) {
  console.log(&quot;What the fuck am I even doing&quot;);
  count++
 }
}
~~~~
I was so frustrated with the fact I felt like I was flying blind that I had a total give up console.log in the loop (pardon the expletive).

I didn't understand why this executed. So I turned to the Code Newbie Slack team and after a long while with me looking like an idjit, I came to realize the loop I wrote was awful. Awful because it didn't take into consideration the scope, local and global.

So the first line, my condition, is in global scope. This screws up everything inside the `while` loop. Once count increments from 1-3, it stays at 3 and doesn't reset because I didn't explicitly set the condition locally. Also, the `for`loop loops around 10 times and fails 9 because I've declared `count`*outside* the `for`loop. So for count which starts at 1 and increments by 1 to 3 until the loop fails, which it fails at 9 times, according to the `for` loop. The console.log prints out the string according to the `count` twice and then runs 9 more times and fails. It gets stuck at 3 and never resets...still thinking about why there.

Here is what the loop should look like, to include local scope:

~~~~

for (var i = 0; i &lt; 10; i++) {
  var count = 1;
   while(count &lt; 3) {
    console.log(&quot;What the fuck am I even doing&quot;);
    count++
  }
}

~~~~
Feeling stupid much?
(Thinking about this while Rihanna sings "Bitch better have my money" on Beats1, Ha. Maybe I should turn it down...)




&nbsp;

<a href="https://helloburgh.me/wp-content/uploads/2015/06/Fake-Mac.jpg"><img class="alignnone  wp-image-387" src="https://helloburgh.me/wp-content/uploads/2015/06/Fake-Mac.jpg" alt="Fake-Mac.jpg" width="675" height="450" /></a>

So I actually **did** go to bed and get up at a great hour, *but* I screwed off with the new Music update for a good hour. It cut into my coding time but I finally settled in around 1 PM, a full four hours after I woke up and one after I scheduled to code.

So I continued to tackle while loops. The idea of scope was covered. But writing my own `for`, `do`, and `while` loops I kept forgetting to declare a condition in a variable. Then I also forgot about global and local scope. So my loop looked something like this:

~~~~
var count = 1;
for (var i = 0; i &lt; 10; i++) {
 while(count &lt; 3) {
  console.log(&quot;What the fuck am I even doing&quot;);
  count++
 }
}
~~~~
I was so frustrated with the fact I felt like I was flying blind that I had a total give up console.log in the loop (pardon the expletive).

I didn't understand why this executed. So I turned to the Code Newbie Slack team and after a long while with me looking like an idjit, I came to realize the loop I wrote was awful. Awful because it didn't take into consideration the scope, local and global.

So the first line, my condition, is in global scope. This screws up everything inside the `while` loop. Once count increments from 1-3, it stays at 3 and doesn't reset because I didn't explicitly set the condition locally. Also, the `for`loop loops around 10 times and fails 9 because I've declared `count`*outside* the `for`loop. So for count which starts at 1 and increments by 1 to 3 until the loop fails, which it fails at 9 times, according to the `for` loop. The console.log prints out the string according to the `count` twice and then runs 9 more times and fails. It gets stuck at 3 and never resets...still thinking about why there.

Here is what the loop should look like, to include local scope:

~~~~

for (var i = 0; i &lt; 10; i++) {
  var count = 1;
   while(count &lt; 3) {
    console.log(&quot;What the fuck am I even doing&quot;);
    count++
  }
}

~~~~
Feeling stupid much?
(Thinking about this while Rihanna sings "Bitch better have my money" on Beats1, Ha. Maybe I should turn it down...)





So next post will be about Arrays and Objects because yes, I am **there finally**!!! I have an idea for my languishing CodePen.io account. Arrays and objects change everything.