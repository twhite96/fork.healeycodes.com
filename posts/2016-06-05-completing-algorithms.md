---
ID: 1131
title: Completing Algorithms
# completing-algorithms
author: Tiffany White
date: 2016-06-05 22:51:36
layout: post
link: >
  https://tiffanywhite.tech/completing-algorithms/
published: true
tags: uncategorized
categories:
  - Daily Progress
  - Programming
---


<a href="https://helloburgh.me/wp-content/uploads/2016/06/completing_an_algorithm.jpg"><img class="aligncenter wp-image-1133 size-large" src="https://helloburgh.me/wp-content/uploads/2016/06/completing_an_algorithm-1024x683.jpg" alt="completing_algorithms" width="700" height="467" /></a>

So, the last time I wrote an article here, I was <a href="https://helloburgh.me/2016/05/27/algorithms_again/" target="_blank">struggling with the <em>Truncate String</em> algorithm</a>.

I took to the forums again and a guy named Chuck told me to delete all the pseudocode. He talked to me about keywords and how to think about what was being asked of me. He broke it down like this:

<blockquote>If the length of str is longer than the value of num then shorten str to be as long as the value of num minus the length of '...'. Unless the value of num is less than or equal to three. In that case, just shorten str to be as long as the value of num. Either way, Then add '...' to the end of str and give it back to us. Otherwise, just give us back str.

Oh wait! Three? '...' is three dots! so we can change "the length of '...' in our plan into three!:

If the length of str is longer than the value of num then shorten str to be as long as the value of num minus three. Unless the value of num is less than or equal to three. In that case, just shorten str to be as long as the value of num. Either way, then add '...' to the end of str and give it back to us. Otherwise, just give us back str.</blockquote>

A ha! That made sense.

My code got a little better, but it wasn’t quite right. I went to the Gitter chat. I was struggling with getting the right truncated string. All but two tests were passing.

I got guided in the Gitter chat, but didn’t get the answer <em>given</em> to me, which I really loved. [Tweet " Completing algorithms without being given the answer is extremely rewarding and satisfying."]
My solution:


<pre class="lang:js decode:true " >function truncateString(str, num) {

    if (num &lt; 3) {

      return str.slice(0, num) + "...";

    } else if (str.length &lt; num) {

      return str.slice(0, (num - 3)) + "...";

}

return str;

}

truncateString("A-", 1);</pre>



<h2>Sometimes, Instructions Are Starting Points, and The Ones Who Guide You Aren’t Always Right</h2>

I was reading on one of the Free Code Camp groups about <a href="http://andrewchar.github.io/portfolio/#" target="_blank">Andrew Charlebois</a>, a guy who took his Free Code Camp skills and in 5 months got a job as a Front-end dev.

I was curious about him— I loved his portfolio and so I hooked up with him on LinkedIn and checked out his Free Code Camp profile.

I looked at his solution for <em>Truncate String</em> and his was <em>elegant</em>. It looked like this:

<pre class="lang:js decode:true " >
function truncate(str, num) {

    if (str.length &lt;= num)

     return str;

    if (num &lt;= 3)

   return str.substr(0,num) + "...";

   return str.substr(0,num-3) + "...";

}

truncate("A-tisket a-tasket A green and yellow basket", 11);</pre>




<strong>Wow</strong>.

One of the things I got advised of in our Gitter chat was that you need to write the stricter conditional first, in this case <code>if (num <= 3) {}</code> instead of <code>if (str.length < 3)</code>. But if you look at Andrew’s solution, it isn’t true. Maybe that is because he used <code><=</code> in the conditional, but it shouldn’t matter.

I knew, also, that I didn’t need to actually use <code>slice()</code> but I didn’t know which of the <code>string</code>methods I could use. Andrew used <code>substr()</code>which is probably why it looks so clean.


<h2>Solidifying Knowledge of Prototypes and Objects</h2>




<a href="https://helloburgh.me/wp-content/uploads/2016/06/completing_an_algorithm.jpg"><img class="aligncenter wp-image-1133 size-large" src="https://helloburgh.me/wp-content/uploads/2016/06/completing_an_algorithm-1024x683.jpg" alt="completing_algorithms" width="700" height="467" /></a>

So, the last time I wrote an article here, I was <a href="https://helloburgh.me/2016/05/27/algorithms_again/" target="_blank">struggling with the <em>Truncate String</em> algorithm</a>.

I took to the forums again and a guy named Chuck told me to delete all the pseudocode. He talked to me about keywords and how to think about what was being asked of me. He broke it down like this:

<blockquote>If the length of str is longer than the value of num then shorten str to be as long as the value of num minus the length of '...'. Unless the value of num is less than or equal to three. In that case, just shorten str to be as long as the value of num. Either way, Then add '...' to the end of str and give it back to us. Otherwise, just give us back str.

Oh wait! Three? '...' is three dots! so we can change "the length of '...' in our plan into three!:

If the length of str is longer than the value of num then shorten str to be as long as the value of num minus three. Unless the value of num is less than or equal to three. In that case, just shorten str to be as long as the value of num. Either way, then add '...' to the end of str and give it back to us. Otherwise, just give us back str.</blockquote>

A ha! That made sense.

My code got a little better, but it wasn’t quite right. I went to the Gitter chat. I was struggling with getting the right truncated string. All but two tests were passing.

I got guided in the Gitter chat, but didn’t get the answer <em>given</em> to me, which I really loved. [Tweet " Completing algorithms without being given the answer is extremely rewarding and satisfying."]
My solution:


<pre class="lang:js decode:true " >function truncateString(str, num) {

    if (num &lt; 3) {

      return str.slice(0, num) + "...";

    } else if (str.length &lt; num) {

      return str.slice(0, (num - 3)) + "...";

}

return str;

}

truncateString("A-", 1);</pre>



<h2>Sometimes, Instructions Are Starting Points, and The Ones Who Guide You Aren’t Always Right</h2>

I was reading on one of the Free Code Camp groups about <a href="http://andrewchar.github.io/portfolio/#" target="_blank">Andrew Charlebois</a>, a guy who took his Free Code Camp skills and in 5 months got a job as a Front-end dev.

I was curious about him— I loved his portfolio and so I hooked up with him on LinkedIn and checked out his Free Code Camp profile.

I looked at his solution for <em>Truncate String</em> and his was <em>elegant</em>. It looked like this:

<pre class="lang:js decode:true " >
function truncate(str, num) {

    if (str.length &lt;= num)

     return str;

    if (num &lt;= 3)

   return str.substr(0,num) + "...";

   return str.substr(0,num-3) + "...";

}

truncate("A-tisket a-tasket A green and yellow basket", 11);</pre>




<strong>Wow</strong>.

One of the things I got advised of in our Gitter chat was that you need to write the stricter conditional first, in this case <code>if (num <= 3) {}</code> instead of <code>if (str.length < 3)</code>. But if you look at Andrew’s solution, it isn’t true. Maybe that is because he used <code><=</code> in the conditional, but it shouldn’t matter.

I knew, also, that I didn’t need to actually use <code>slice()</code> but I didn’t know which of the <code>string</code>methods I could use. Andrew used <code>substr()</code>which is probably why it looks so clean.


<h2>Solidifying Knowledge of Prototypes and Objects</h2>





I have started on PluralSight’s JavaScript Track. I took their test to see how much JavaScript I know and I tested at the low-end of proficient, which makes me very happy. I want to get this down— Prototypal Inheritance and Objects before I start into ES6. Lots of syntactic sugar in there. I like it.