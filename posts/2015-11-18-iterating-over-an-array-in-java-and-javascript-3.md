---
ID: 741
title: 'Iterating Over an Array in Java and JavaScript'
author: Tiffany White
date: 2015-11-18 01:39:36
layout: post
link: >
  https://tiffanywhite.tech/iterating-over-an-array-in-java-and-javascript-3/
published: true
tags:
  - arrays
  - Java
  - javascript
  - programming
categories:
  - Daily Progress
  - General Updates
  - Programming
  - "Tiffany's Posts"
---
<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/11/wpid-FSPLFPQBCZ_1.jpg" alt="mac" />

I have learned that while Java and JavaScript are different, they share similarities. Someone in the <a href="https://codenewbie.typeform.com/to/uwsWlZ">Code Newbie Slack</a> informed me of the history of JavaScript and how the creators had borrowed <em>some</em> functionality from Java. That’s for another post on another blog.

But while I was reading my textbook chapter on arrays, I noticed that you can iterate through an array in Java much like you can in JavaScript.

Arrays in Java are initialized completely differently as you must specify a data type and the slots you allocate in the array cannot be changed, as such, it is immutable. Here is an example of an array in Java:


```java
int[] myArray;
myArray = new int[10];
```

This declares the array then initializes it with 10 int spots.

An array in JavaScript looks like this:

```js
var myArray = ["Jerri", 69, "Tiffany", 37, "John", 39]
```

<h3>How Interating Through Arrays in Java and JavaScript Are Similar</h3>

<img src="https://helloburgh.me/wp-content/uploads/2015/11/wpid-11068139233_3a67bc9431_k.jpg" alt="they_all_look_the_same" />

So, I first got a taste of iterating through an array in JavaScript while working the Bonfires at Free Code Camp, which use algorithms to help you better understand the ins and outs of the language. One of the ways you can iterate through an array in JavaScript is by a for loop and a .length method depending on what you need. Here is the syntax of an algorithm I wrote in order to find out if a word was a palindrome or not:



```js
function palindrome(str) {
 str = str.toLowerCase().replace(/[\W_]/g, "");
   for(var i = 0, len = str.length - 1; i <= len/2; i++) {
     if(str[i] !== str[len-i]) {
       return false;
     }
   }
 return true;
}
```






```js
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, &quot;&quot;);
   for(var i = 0, len = str.length - 1; i &amp;lt; len/2; i++) {
     if(str[i] !== str[len-i]) {
       return false;
     }
  }
 return true;
}

palindrome("eye");
```

<h3>Breaking It Down</h3>

The first part of this algorithm is turning all the letters in the string to lowercase and then using regex to get rid of capital letters, spaces, and punctuation<a id="fnref-2" class="footnote" title:="see footnote" href="#fn-2">[2]</a>.

The next part checks each index of the array to see if it is the same later, going inwards until it reached half the length of the array. If they are the same letter, then it’s a palindrome and will return true.

<h3>Same with Java…in a Way</h3>

The for loop in a Java array iteration looks the same when you just break it down into the method body. For instance:



```java
public static void showArray(int[] array)
{
 for (int i = 0; i < array.length; i++)
 System.out.print(array[i] + " ");
}
```

Here, when the showValue method is called, an element of the array is passed to the method. It will loop through and print out each value of the elements of the array. Here we are printing it out. In the JavaScript example, we were cycling through the array to test for similarities.

The parallel? You can cycle through, and get elements/indeces of arrays with a for loop.

