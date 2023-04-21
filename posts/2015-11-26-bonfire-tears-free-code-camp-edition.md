---
ID: 752
title: Bonfire Tears (Free Code Camp Edition)
# bonfire-tears-free-code-camp-edition
author: Tiffany White
date: 2015-11-26 02:06:20
layout: post
link: >
  https://tiffanywhite.tech/bonfire-tears-free-code-camp-edition/
published: true
tags:
  - Bonfires
  - free code camp
  - javascript
categories:
  - Communities
  - Daily Progress
  - Programming
  - "Tiffany's Posts"
---
<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/11/wpid-XB78WQK09O.jpg" alt="Crying" width="555" height="584" />

<blockquote>
<blockquote>“Laughter and tears are both responses to frustration and exhaustion. I myself prefer to laugh, since there is less cleaning do to do afterward.” ― Kurt Vonnegut</blockquote>
</blockquote>

There comes a point in every new programmers life when they hit a barrier, a wall, a threshold of understanding or non-understanding of the material at hand.

I hit that threshold yesterday.

And the day before it. It was a solution so simple; I had the right idea several times. I got explained to and encouraged, and guided and it was like their words were bouncing off my skull instead of being absorbed into my grey matter. The question was:

<blockquote>Check if a string (first argument) ends with the given target string (second argument).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.substr()</blockquote>

The given code:



<pre class="lang:javascript decode:1 " >function end(str, target) {
 // &quot;Never give up and good luck will find you.&quot;
 // -- Falcor
 return str;
}




end(&quot;Bastian&quot;, &quot;n&quot;);



<pre class="lang:javascript decode:1 " >function end(str, target) {
 // &quot;Never give up and good luck will find you.&quot;
 // -- Falcor
 return str;
}




end(&quot;Bastian&quot;, &quot;n&quot;);




</pre>

<h3>What the Hell Substrings?</h3>

<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/11/wpid-headdesk.gif" alt="headdesk" />

<blockquote>
<blockquote>You’ve done it before and you can do it now. See the positive possibilities. Redirect the substantial energy of your frustration and turn it into positive, effective, unstoppable determination. –Ralph Marston</blockquote>
</blockquote>

I knew that, since we had lengths of different strings. The tests proved that. So I kept hardcoding for one particular string. I couldn’t get past that. How do I code this thing for different string lengths? How do you get the length of a string? <code>.length</code>. Right? YES. But <em>how</em>. Where do I put the <code>.length</code>? I had this code:



<pre class="lang:javascript decode:1 " >function end(str, target) {
 //&quot;Never give up and good luck will find you.&quot;
 // -- Falcor




//dees [8:42 PM]
//'abcdefghijklmn'.substr(0, 3) // 'abc'
//&quot;grab 3 characters starting with the character at address number 0&quot;
​
 var isEqual = str.substr(6, 1) === target.substr(0, 1);
 return isEqual;




}
​



<pre class="lang:javascript decode:1 " >function end(str, target) {
 //&quot;Never give up and good luck will find you.&quot;
 // -- Falcor




//dees [8:42 PM]
//'abcdefghijklmn'.substr(0, 3) // 'abc'
//&quot;grab 3 characters starting with the character at address number 0&quot;
​
 var isEqual = str.substr(6, 1) === target.substr(0, 1);
 return isEqual;




}
​




end(&quot;Bastian&quot;, &quot;n&quot;);</pre>

I found out in Free Code Camp’s Gitter chat that you can get to the end of a string with a negative number; no need to keep popping off all those letters before the “n” on Bastian. But I continued to hard code for “Bastian” and “n”. I needed a broader approach.

I tried:



<pre class="lang:javascript decode:1 " >function end(str, target) {

​
 var isEqual = str.substr(-1) === target.substr(-1);
 return isEqual;




}
​



<pre class="lang:javascript decode:1 " >function end(str, target) {

​
 var isEqual = str.substr(-1) === target.substr(-1);
 return isEqual;




}
​




end(&quot;Bastian&quot;, &quot;n&quot;);</pre>

But I wasn’t really making any progress. All but one of the tests were passing, and I wasn’t really utilizing <code>.length</code> to have a basic variance of string lengths. So I did this:



<pre class="lang:javascript decode:1 " >function end(str, target) {

 var n = target.length;
 var z = str.length;
 var isEqual = str.substr(-1) === target.substr(-1);
 return isEqual;

}
​



<pre class="lang:javascript decode:1 " >function end(str, target) {

 var n = target.length;
 var z = str.length;
 var isEqual = str.substr(-1) === target.substr(-1);
 return isEqual;

}
​




end(&quot;Bastian&quot;, &quot;n&quot;);</pre>

Same result. I knew I needed to have <code>.length;</code> up there. But where to go after that?

<h3>Aha!</h3>

<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/11/wpid-Aha.gif" alt="Aha" />

Finally, I had to be guided to the answer. The woman was in Britain and I am pretty sure I was keeping her awake. So we came up with this solution:



<pre class="lang:javascript decode:1 " >function end(str, target) {
 // &quot;Never give up and good luck will find you.&quot;
 // -- Falcor

 var length = target.length;
 var isEqual = target === str.substr(-length);
 return isEqual;
}

end(&quot;Bastian&quot;, &quot;n&quot;);



<pre class="lang:javascript decode:1 " >function end(str, target) {
 // &quot;Never give up and good luck will find you.&quot;
 // -- Falcor

 var length = target.length;
 var isEqual = target === str.substr(-length);
 return isEqual;
}

end(&quot;Bastian&quot;, &quot;n&quot;);




</pre>

<code>var length = target.length;</code> gets the length of any target string and assigns it to the length variable.
<code>var isEqual = target === str.substr(-length);</code> compares the target string with the original string, subtracting the last characters of the length variable, starting with the end of the string.

I hope I explained that right. I understand it. It takes a bit to look at and understand but when we came to that solution, I felt like a complete idiot.

I cried. I literally did. Part of that is just me already being emotional. The other part is me not wanting to put my fist through my MacBook Pro screen. Strings are characters. Not words. And I was totally getting stuck on that.

Bonfire tears indeed.