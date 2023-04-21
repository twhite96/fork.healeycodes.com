---
ID: 1040
title: Crawling Before You Walk
# crawling-before-you-walk
author: Tiffany White
date: 2016-04-12 01:12:25
layout: post
link: >
  https://tiffanywhite.tech/crawling-before-you-walk/
published: true
tags: uncategorized
categories:
  - General Updates
  - Programming
---


<a href="https://helloburgh.me/wp-content/uploads/2016/04/Sad.jpg" rel="attachment wp-att-1043"><img class="aligncenter size-large wp-image-1043" src="https://helloburgh.me/wp-content/uploads/2016/04/Sad-1024x577.jpg" alt="Sad" width="700" height="394" /></a>

&nbsp;

I am reading <em>Data Structures and Algorithms in JavaScript</em> and I’m up to Chapter 8 when we are talking about hash table algorithms.

I had to reread the code examples several times to understand what was happening. Here is some sample code from the book

<pre class="lang:javascript decode:1 " >

function HashTable() {

  this.table = new Array(137);

  this.simpleHash = simpleHash;

  this.showDistro = showDistro;

  this.put = put;

//this.get = get;
}
</pre>

This code here creates a constructor function called HashTable and several references to other functions that will be used in our regular code instead of this constructor. Easy enough.

We create an Array here that is 137 indices wide. We do this because when we run the hash algorithm we can run into something called collision where two items are hashed to the same value in the hash table. The proper thing is to use a prime number. I am still not sure why.

In these examples we used keys to store data in the array. The key is mapped to a number whose value is mapped from 0 to the size of the array, which in this algorithm is 137 indices in length.

In the next example code we are using ASCII values of letters in the key and adding them. This is the hash function used, using the <code>simpleHash()</code> function we added to the constructor function.

<pre class="lang:javascript decode:1 " >

function simpleHash(data) {

   var total = 0;

   for (var i = 0; i &lt; data.length; ++1) {

     total += data.charCodeAt(i);

  }

return total % this.table.length;

}

</pre>

Here in this code we are attempting to run the algorithm using the <code>showDistro()</code> function from the constructor.

<pre class="lang:javascript decode:1 " >

load(&quot;HashTable.js&quot;);

   var someNames = [&ldquo;David&quot;, &quot;Jennifer&quot;, &quot;Donnie&quot;, &quot;Raymond&quot;,

          &quot;Cynthia&quot;, &quot;Mike&quot;, &quot;Clayton&quot;, &quot;Danny&quot;, &quot;Jonathan&quot;];

   var hTable = new HashTable();

   for (var i = 0; i &amp;lt; someNames.length; ++i) {

      hTable.put(someNames[i]);
}
hTable.showDistro();

</pre>

The output:

<pre class="lang:javascript decode:1 " >
35: Cynthia

45: Clayton

57: Donnie

77: David

95: Danny

116: Mike

132: Jennifer

134: Jonathan
</pre>

This is where I was stuck. What are those numbers on the left?

I had to reread a few pages back to see that we used an array of 137. These are the positions of the hashed results on the hash table, according to the array size.

<strong>Wow</strong>.
<h2>Fitting a Square Peg Into a Round Hole</h2>
This was a difficult concept to wrap my head around at first. And using JavaScript for these algorithms probably isn’t the best approach but for the sake of approachability, he used JavaScript. I understand, but a better language probably would have been C++.

It also let me know that this part of the book may be too advanced for me; that I should learn more of the code I am currently writing before digging into these types of algorithms.

The first part of the book will inevitably help me with Free Code Camp Algorithm challenges as it goes over <em>exactly</em> the types of methods we use in those challenges, the challenges I burnt myself out over.
<h2>Regular Coding Schedule as Well As Taking Care of Yourself</h2>
I am at a crossroads. I had a pretty bad nervous breakdown that started at the beginning of the year that culminated after some bad news. I know, I know totally I was doing too much. If you subscribe to my newsletter, you know some of my history. I suffer from depression and other things and I just did too much too fast, and burnt out. New depression medication and I am still trying to find my way. But I decided that sitting in the apartment daily doing nothing but grinding wasn’t the best way to go when you suffer from some unseen-to-the-public issues.

So I went back to the gym yesterday. If you are a desk jockey like me, I would suggest going to the gym or at least walking outside everyday or every other day. It helps clear you up, gets your blood flowing, and helps you get the exercise that not only helps in your coding endeavors, but keeps you healthy as well.

As far as keeping a regular coding schedule. Yeah. I need to wake up earlier to do this and right now it is almost 1 am. I plan on coding later today and doing it even when it gets hard or stresses me out. Pushing through those rough patches is key.
<h2>Off My Soap box</h2>
This post got <em>looooong</em> but I haven’t posted in a minute. It’s been hell lately emotionally but I am dealing with it.




<a href="https://helloburgh.me/wp-content/uploads/2016/04/Sad.jpg" rel="attachment wp-att-1043"><img class="aligncenter size-large wp-image-1043" src="https://helloburgh.me/wp-content/uploads/2016/04/Sad-1024x577.jpg" alt="Sad" width="700" height="394" /></a>

&nbsp;

I am reading <em>Data Structures and Algorithms in JavaScript</em> and I’m up to Chapter 8 when we are talking about hash table algorithms.

I had to reread the code examples several times to understand what was happening. Here is some sample code from the book

<pre class="lang:javascript decode:1 " >

function HashTable() {

  this.table = new Array(137);

  this.simpleHash = simpleHash;

  this.showDistro = showDistro;

  this.put = put;

//this.get = get;
}
</pre>

This code here creates a constructor function called HashTable and several references to other functions that will be used in our regular code instead of this constructor. Easy enough.

We create an Array here that is 137 indices wide. We do this because when we run the hash algorithm we can run into something called collision where two items are hashed to the same value in the hash table. The proper thing is to use a prime number. I am still not sure why.

In these examples we used keys to store data in the array. The key is mapped to a number whose value is mapped from 0 to the size of the array, which in this algorithm is 137 indices in length.

In the next example code we are using ASCII values of letters in the key and adding them. This is the hash function used, using the <code>simpleHash()</code> function we added to the constructor function.

<pre class="lang:javascript decode:1 " >

function simpleHash(data) {

   var total = 0;

   for (var i = 0; i &lt; data.length; ++1) {

     total += data.charCodeAt(i);

  }

return total % this.table.length;

}

</pre>

Here in this code we are attempting to run the algorithm using the <code>showDistro()</code> function from the constructor.

<pre class="lang:javascript decode:1 " >

load(&quot;HashTable.js&quot;);

   var someNames = [&ldquo;David&quot;, &quot;Jennifer&quot;, &quot;Donnie&quot;, &quot;Raymond&quot;,

          &quot;Cynthia&quot;, &quot;Mike&quot;, &quot;Clayton&quot;, &quot;Danny&quot;, &quot;Jonathan&quot;];

   var hTable = new HashTable();

   for (var i = 0; i &amp;lt; someNames.length; ++i) {

      hTable.put(someNames[i]);
}
hTable.showDistro();

</pre>

The output:

<pre class="lang:javascript decode:1 " >
35: Cynthia

45: Clayton

57: Donnie

77: David

95: Danny

116: Mike

132: Jennifer

134: Jonathan
</pre>

This is where I was stuck. What are those numbers on the left?

I had to reread a few pages back to see that we used an array of 137. These are the positions of the hashed results on the hash table, according to the array size.

<strong>Wow</strong>.
<h2>Fitting a Square Peg Into a Round Hole</h2>
This was a difficult concept to wrap my head around at first. And using JavaScript for these algorithms probably isn’t the best approach but for the sake of approachability, he used JavaScript. I understand, but a better language probably would have been C++.

It also let me know that this part of the book may be too advanced for me; that I should learn more of the code I am currently writing before digging into these types of algorithms.

The first part of the book will inevitably help me with Free Code Camp Algorithm challenges as it goes over <em>exactly</em> the types of methods we use in those challenges, the challenges I burnt myself out over.
<h2>Regular Coding Schedule as Well As Taking Care of Yourself</h2>
I am at a crossroads. I had a pretty bad nervous breakdown that started at the beginning of the year that culminated after some bad news. I know, I know totally I was doing too much. If you subscribe to my newsletter, you know some of my history. I suffer from depression and other things and I just did too much too fast, and burnt out. New depression medication and I am still trying to find my way. But I decided that sitting in the apartment daily doing nothing but grinding wasn’t the best way to go when you suffer from some unseen-to-the-public issues.

So I went back to the gym yesterday. If you are a desk jockey like me, I would suggest going to the gym or at least walking outside everyday or every other day. It helps clear you up, gets your blood flowing, and helps you get the exercise that not only helps in your coding endeavors, but keeps you healthy as well.

As far as keeping a regular coding schedule. Yeah. I need to wake up earlier to do this and right now it is almost 1 am. I plan on coding later today and doing it even when it gets hard or stresses me out. Pushing through those rough patches is key.
<h2>Off My Soap box</h2>
This post got <em>looooong</em> but I haven’t posted in a minute. It’s been hell lately emotionally but I am dealing with it.





<a href="https://helloburgh.me/wp-content/uploads/2016/04/Deal-With-It.gif" rel="attachment wp-att-1044"><img class="aligncenter size-full wp-image-1044" src="https://helloburgh.me/wp-content/uploads/2016/04/Deal-With-It.gif" alt="Deal With It" width="366" height="288" /></a>