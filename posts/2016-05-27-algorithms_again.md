---
ID: 1122
title: Algorithms…Again
# algorithms_again
author: Tiffany White
date: 2016-05-27 01:48:11
layout: post
link: >
  https://tiffanywhite.tech/algorithms_again/
published: true
tags: uncategorized
categories:
  - Daily Progress
  - Programming
---


<a href="https://helloburgh.me/wp-content/uploads/2016/05/Optimized-algorithms_again.jpeg"><img src="https://helloburgh.me/wp-content/uploads/2016/05/Optimized-algorithms_again-1024x683.jpeg" alt="algorithms" width="700" height="467" class="aligncenter size-large wp-image-1125" /></a>

<p>I am working on Free Code Camp Algorithms again. Things are going much better than they were…if you consider struggling through a simple algorithm for two days.</p>

<p>The algorithm is <em>Truncate a String</em>, the instructions as such: </p>

<blockquote>

<p>Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.</p>

<p>Note that inserting the three dots to the end will add to the string length.</p>

<p>However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.</p>

<p>Remember to use Read-Search-Ask if you get stuck. Write your own code.</p>

<p>Here are some helpful links:</p>

<p>String.slice()</p>

</blockquote>

<p>I read and re-read the instructions. I went into the Gitter chatroom and asked general questions. For instance, the second part of the instructions didn’t make sense to me. I asked in the room how someone would go about thinking about it. I didn’t want the answer. Sometimes, when searching or going in the Gitter room, someone would give me the answer. Sometimes when searching, I’d find the solution in someone’s GitHub Gist and I’d be relieved of my mental burden…until the next one.</p>

<p>I know I need to <em>learn</em> this stuff and getting the answer isn’t the right way. So I asked around. I searched with broad search terms but it is hard to find what you’re looking for with broad searches. </p>

<p>I saw Free Code Camp in the searches, some gists again but I neglected those pages. I went to Stack Overflow. I read articles. I am totally mind-f<em>cked. </em></p>

<p>I went over an old article I cross-posted to Medium in November. It had some code in it that I thought I could use. I copied it to Quiver and looked over it. I tried to implement it in my current solution but I’m not sure how to go from <em>there</em> to <em>here</em>.</p>

<p>So far my solution looks like this:</p>

<p><pre class="lang:javascript decode:1 " >

function truncateString(str, num) {
  // Clear out that junk in your trunk

  // If str is greater than num
  // if it is longer than the given maximum string length
  // or str.length
  // slice/truncate the value of str, whatever it is
  // and add (...) to the end of the sliced/truncated
  //string. This adds to the truncated string
  // if num is less than three
  // than the addition of the (...) does not add to the
  // truncated string
  // use the length property on a variable that references str
  // what is num?
  // what is str?
  // truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;&lt;---str, 11&lt;---num);
  // what is the maximum string length? (the second argument 'num' is the maximum string
  // length)

 /* Don't look at the function below and hard code
  the solution into your logic. use the variables and values here. use conditionals to test   if a condition is true. use a for loop to count. use a nested if/else to test complex       conditions. use nested for loops
  */


  var str1 = str.length;
  var str2 = num.length;

  if (str1 &gt; str2) {
	return str.slice(str1) + &quot;...&quot;;
  } else if (str2 &lt; 3) {
	return str.slice(str1);
  }
  return str;
}

truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;, 11);
</pre>

<p>This is wrong, so wrong. Only two tests pass. </p>

<p>I am continuing to battle, though.</p>

<h2>The Miracle That is Free Code Camp Forum</h2>

<p>I honestly don’t know what I’d do without the Free Code Camp forums. I lamented on there about the <em>Truncate String</em> algorithm and got private messages willing to help me figure it out, without giving me the answers.</p>




<a href="https://helloburgh.me/wp-content/uploads/2016/05/Optimized-algorithms_again.jpeg"><img src="https://helloburgh.me/wp-content/uploads/2016/05/Optimized-algorithms_again-1024x683.jpeg" alt="algorithms" width="700" height="467" class="aligncenter size-large wp-image-1125" /></a>

<p>I am working on Free Code Camp Algorithms again. Things are going much better than they were…if you consider struggling through a simple algorithm for two days.</p>

<p>The algorithm is <em>Truncate a String</em>, the instructions as such: </p>

<blockquote>

<p>Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.</p>

<p>Note that inserting the three dots to the end will add to the string length.</p>

<p>However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.</p>

<p>Remember to use Read-Search-Ask if you get stuck. Write your own code.</p>

<p>Here are some helpful links:</p>

<p>String.slice()</p>

</blockquote>

<p>I read and re-read the instructions. I went into the Gitter chatroom and asked general questions. For instance, the second part of the instructions didn’t make sense to me. I asked in the room how someone would go about thinking about it. I didn’t want the answer. Sometimes, when searching or going in the Gitter room, someone would give me the answer. Sometimes when searching, I’d find the solution in someone’s GitHub Gist and I’d be relieved of my mental burden…until the next one.</p>

<p>I know I need to <em>learn</em> this stuff and getting the answer isn’t the right way. So I asked around. I searched with broad search terms but it is hard to find what you’re looking for with broad searches. </p>

<p>I saw Free Code Camp in the searches, some gists again but I neglected those pages. I went to Stack Overflow. I read articles. I am totally mind-f<em>cked. </em></p>

<p>I went over an old article I cross-posted to Medium in November. It had some code in it that I thought I could use. I copied it to Quiver and looked over it. I tried to implement it in my current solution but I’m not sure how to go from <em>there</em> to <em>here</em>.</p>

<p>So far my solution looks like this:</p>

<p><pre class="lang:javascript decode:1 " >

function truncateString(str, num) {
  // Clear out that junk in your trunk

  // If str is greater than num
  // if it is longer than the given maximum string length
  // or str.length
  // slice/truncate the value of str, whatever it is
  // and add (...) to the end of the sliced/truncated
  //string. This adds to the truncated string
  // if num is less than three
  // than the addition of the (...) does not add to the
  // truncated string
  // use the length property on a variable that references str
  // what is num?
  // what is str?
  // truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;&lt;---str, 11&lt;---num);
  // what is the maximum string length? (the second argument 'num' is the maximum string
  // length)

 /* Don't look at the function below and hard code
  the solution into your logic. use the variables and values here. use conditionals to test   if a condition is true. use a for loop to count. use a nested if/else to test complex       conditions. use nested for loops
  */


  var str1 = str.length;
  var str2 = num.length;

  if (str1 &gt; str2) {
	return str.slice(str1) + &quot;...&quot;;
  } else if (str2 &lt; 3) {
	return str.slice(str1);
  }
  return str;
}

truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;, 11);
</pre>

<p>This is wrong, so wrong. Only two tests pass. </p>

<p>I am continuing to battle, though.</p>

<h2>The Miracle That is Free Code Camp Forum</h2>

<p>I honestly don’t know what I’d do without the Free Code Camp forums. I lamented on there about the <em>Truncate String</em> algorithm and got private messages willing to help me figure it out, without giving me the answers.</p>





<p>Seeing people struggle as well is so damn helpful. It may suck for them but I know I am not along and I am not stupid. That is priceless.</p>