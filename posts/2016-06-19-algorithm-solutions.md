---
ID: 1179
title: Algorithm Solutions
# algorithm-solutions
author: Tiffany White
date: 2016-06-19 17:38:47
layout: post
link: >
  https://tiffanywhite.tech/algorithm-solutions/
published: true
tags: uncategorized
categories:
  - Daily Progress
  - Programming
---


<img class="aligncenter size-large wp-image-1182" src="https://helloburgh.me/wp-content/uploads/2016/06/algorithm_solutions-1024x703.jpg" alt="algorithm_solutions" width="700" height="481" />

&nbsp;

I’ve completed three more Free Code Camp algorithms since my last go on May 30th.

I needed less guidance on these particular algorithms, all but one. The algorithm solutions weren’t too hard to come up with, however on <em>Slasher FLick</em> I really overcomplicated my solution. I was thinking way too hard about how to solve it— new array? Should I <code>return newArray</code> as a part of the function call? Do I <code>push</code> the result of the cut off part of the array into <code>newArray</code>?

The instructions were:
<blockquote>Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.slice()

Array.splice()</blockquote>
Seems simple enough. But I was thinking too much and making it more complex than it needed to be because of my recent previous solutions.

I used <code>splice</code> instead of <code>slice</code> as <code>splice</code> returns the chopped off part as a new array. For these instructions, here was the initial code:

[javascript]

function slasher(arr, howMany) {

// it doesn't always pay to be first

}

slasher(["burgers", "fries", "shake"], 1);

[/javascript]

Originally I had this:



<pre class="lang:js decode:true ">function slasher(arr, howMany) {

// it doesn't always pay to be first

    var newArray = [];

    arr.splice(0, howMany);

     return newArray;

}

slasher(["burgers", "fries", "shake"], 1);</pre>



I would get a double array, because like I said, <code>splice</code> returns a new array from the chopped off part. So I tried to use a non-initialized variable— <code>var newArray;</code>— that returned a TypeError.

I went to the <a href="https://www.freecodecamp.com/wiki/en/" target="_blank">Free Code Camp wiki</a> to look at the explanation in more detail. I finally came up with an <em>Aha</em>! Moment. I only needed to return the array that was resulting in the <code>splice</code> method.

I settled on my final solution here:



<pre class="lang:js decode:true ">function slasher(arr, howMany) {

// it doesn't always pay to be first

    arr.splice(0, howMany);

     return arr;

}

slasher(["burgers", "fries", "shake"], 1);</pre>




Not too bad.
<h2>Getting Easier?</h2>
That one was easier to do. I hardly needed any help from Gitter. But then…

<strong>Mutations</strong>.

The instructions:
<blockquote><strong>Mutations</strong>

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"]should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.indexOf()</blockquote>

I thought, <em>okay. I got this.</em>

The code:


<pre class="lang:js decode:true ">function mutation(arr) {

}

mutation(["hello", "hey"]);
</pre>



I started out with this:


<pre class="lang:js decode:true ">function mutation(arr) {

    for (var i = 0; i &lt; arr.length; i++) {

      if (arr === arr.indexOf(i)) {

      return true;

     } else {

      return false;

    }

}

mutation([&quot;hello&quot;, &quot;hey&quot;]);
</pre>


That didn’t work. I went to Gitter.

A guy there told me I needed to compare two arrays. I couldn’t figure out what he meant by that. <em>To the wiki</em>.

There I found out I should use <code>toLowerCase</code> and think about turning the array strings into an array of <code>chars</code>.

So then I came up with this:


<pre class="lang:js decode:true ">var arr1 = arr.toLowerCase();

var arr2 = arr.toLowerCase();

var chars = arr1.split(" ");
</pre>

as part of the equation. That also didn’t work. By this time, I am tired, it is late and I just wanted this to work. I went back to the wiki and found the solution.

I wouldn’t have ever came up with this yesterday night:


<pre class="lang:js decode:true ">function mutation(arr) {

    var arr1 = arr[1].toLowerCase();

    var arr2 = arr[0].toLowerCase();

    for (var i = 0; i &lt; arr1.length; i++) {

      if (arr2.indexOf(arr1[i]) &lt; 0)

        return false;
    }

return true;

}

mutation([&quot;hello&quot;, &quot;hey&quot;]);</pre>


I am studying this. I am trying to figure out what is going on here and I will probably go to Code Newbie Slack to ask around.
<h2>Back At It</h2>
I am doing the <strong>Falsy Bouncer</strong> algorithm after this post. It looks easy enough, and if I get stuck I will go to Gitter instead of the wiki as the solutions are there. You don’t have to look, but I was tired and frustrated last night which is never a good mix.




<img class="aligncenter size-large wp-image-1182" src="https://helloburgh.me/wp-content/uploads/2016/06/algorithm_solutions-1024x703.jpg" alt="algorithm_solutions" width="700" height="481" />

&nbsp;

I’ve completed three more Free Code Camp algorithms since my last go on May 30th.

I needed less guidance on these particular algorithms, all but one. The algorithm solutions weren’t too hard to come up with, however on <em>Slasher FLick</em> I really overcomplicated my solution. I was thinking way too hard about how to solve it— new array? Should I <code>return newArray</code> as a part of the function call? Do I <code>push</code> the result of the cut off part of the array into <code>newArray</code>?

The instructions were:
<blockquote>Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.slice()

Array.splice()</blockquote>
Seems simple enough. But I was thinking too much and making it more complex than it needed to be because of my recent previous solutions.

I used <code>splice</code> instead of <code>slice</code> as <code>splice</code> returns the chopped off part as a new array. For these instructions, here was the initial code:

[javascript]

function slasher(arr, howMany) {

// it doesn't always pay to be first

}

slasher(["burgers", "fries", "shake"], 1);

[/javascript]

Originally I had this:



<pre class="lang:js decode:true ">function slasher(arr, howMany) {

// it doesn't always pay to be first

    var newArray = [];

    arr.splice(0, howMany);

     return newArray;

}

slasher(["burgers", "fries", "shake"], 1);</pre>



I would get a double array, because like I said, <code>splice</code> returns a new array from the chopped off part. So I tried to use a non-initialized variable— <code>var newArray;</code>— that returned a TypeError.

I went to the <a href="https://www.freecodecamp.com/wiki/en/" target="_blank">Free Code Camp wiki</a> to look at the explanation in more detail. I finally came up with an <em>Aha</em>! Moment. I only needed to return the array that was resulting in the <code>splice</code> method.

I settled on my final solution here:



<pre class="lang:js decode:true ">function slasher(arr, howMany) {

// it doesn't always pay to be first

    arr.splice(0, howMany);

     return arr;

}

slasher(["burgers", "fries", "shake"], 1);</pre>




Not too bad.
<h2>Getting Easier?</h2>
That one was easier to do. I hardly needed any help from Gitter. But then…

<strong>Mutations</strong>.

The instructions:
<blockquote><strong>Mutations</strong>

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"]should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.indexOf()</blockquote>

I thought, <em>okay. I got this.</em>

The code:


<pre class="lang:js decode:true ">function mutation(arr) {

}

mutation(["hello", "hey"]);
</pre>



I started out with this:


<pre class="lang:js decode:true ">function mutation(arr) {

    for (var i = 0; i &lt; arr.length; i++) {

      if (arr === arr.indexOf(i)) {

      return true;

     } else {

      return false;

    }

}

mutation([&quot;hello&quot;, &quot;hey&quot;]);
</pre>


That didn’t work. I went to Gitter.

A guy there told me I needed to compare two arrays. I couldn’t figure out what he meant by that. <em>To the wiki</em>.

There I found out I should use <code>toLowerCase</code> and think about turning the array strings into an array of <code>chars</code>.

So then I came up with this:


<pre class="lang:js decode:true ">var arr1 = arr.toLowerCase();

var arr2 = arr.toLowerCase();

var chars = arr1.split(" ");
</pre>

as part of the equation. That also didn’t work. By this time, I am tired, it is late and I just wanted this to work. I went back to the wiki and found the solution.

I wouldn’t have ever came up with this yesterday night:


<pre class="lang:js decode:true ">function mutation(arr) {

    var arr1 = arr[1].toLowerCase();

    var arr2 = arr[0].toLowerCase();

    for (var i = 0; i &lt; arr1.length; i++) {

      if (arr2.indexOf(arr1[i]) &lt; 0)

        return false;
    }

return true;

}

mutation([&quot;hello&quot;, &quot;hey&quot;]);</pre>


I am studying this. I am trying to figure out what is going on here and I will probably go to Code Newbie Slack to ask around.
<h2>Back At It</h2>
I am doing the <strong>Falsy Bouncer</strong> algorithm after this post. It looks easy enough, and if I get stuck I will go to Gitter instead of the wiki as the solutions are there. You don’t have to look, but I was tired and frustrated last night which is never a good mix.





I will also be reading all the algorithm books I have and the Coursera courses I downloaded from Stanford.