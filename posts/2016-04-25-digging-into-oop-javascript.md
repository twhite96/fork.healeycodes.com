---
ID: 1072
title: Digging Into OOP JavaScript
# digging-into-oop-javascript
author: Tiffany White
date: 2016-04-25 21:35:48
layout: post
link: >
  https://tiffanywhite.tech/digging-into-oop-javascript/
published: true
tags: uncategorized
categories:
  - Daily Progress
  - Programming
---


<a href="https://helloburgh.me/wp-content/uploads/2016/04/Digging.jpeg"><img class="aligncenter size-large wp-image-1074" src="https://helloburgh.me/wp-content/uploads/2016/04/Digging-1024x683.jpeg" alt="Digging" width="700" height="467" /></a>


On Treehouse, I am going through their Full-stack JavaScript track and we came up on OOP JavaScript.

Learning about Objects, state, and the origin and usage of <code>this</code> is intriguing as I have learned a bit about OOP through Java during my time at Pitt.

JavaScript doesn’t have regular Classes and instead uses Prototypes. Classical inheritance is seen as a big problem in JavaScript, which when you consider JavaScript doesn’t have real Classes, it makes sense. Brandon Eich, the creator of JavaScript admitted he wanted JavaScript to look like the little brother of Java, which leaves us with syntax that looks like Java when we use things like Constructors. For instance, in Java, you create a new Object like this:

<pre class="lang:java decode:1 " >

// Imports APIs

import java.util.Scanner;

import java.io*;


// Class definition

public class P3A1_White

{

// Main method

    public static void main(String[] args)

   {

      Scanner keyboard = new Scanner(System.in);

</pre>

Where we are importing the Scanner Class and any I/O classes that Java has. We create a new Object here from the Scanner Class by using <code>Scanner keyboard = new Scanner(System.in);</code>. This is an example of Classical inheritance, creating Objects from either predefined Classes in the Java API or Classes you create.

The syntax for creating Objects in JavaScript from Constructors, which is not the same as a Constructor function in Java, looks similar to creating an Object in Java.

Take a look:

<pre class="lang:javascript decode:1 " >
function MyClass(name) {
}

var bob = new MyClass();

  bob.set_name('Bob');

  bob.announce(); // id is 1, name shows as &quot;Bob&quot;

var john = new MyChildClass('Doe');

  john.set_name('John');

  john.announce(); // id is 2, name shows as &quot;John Doe&quot;

    alert(john instanceof MyClass); // true

</pre>

Notice how we created the Objects: with the <code>new</code> keyword. Also notice that we have an <code>instanceof</code> operator. In Java, you create an <code>instanceof</code> a class by creating an Object through Classical inheritance. Here you’re creating an <code>instanceof</code> the constructor.prototype in the object’s prototype chain. This is weird and I am not sure why Prototypal inheritance wasn’t used.
<h2>Coding Daily</h2>
I have pretty much stuck to what I said I was going to do. I had Sunday off and I really missed it. Some days I start later than others, like today as I am being killed by allergies and am sluggish. But tonight I am going back to Treehouse and Free Code Camp before bed.

<a href="https://helloburgh.me/wp-content/uploads/2016/04/Screenshot2016-04-23_11-22-55_PM.png"><img class="aligncenter size-full wp-image-1075" src="https://helloburgh.me/wp-content/uploads/2016/04/Screenshot2016-04-23_11-22-55_PM.png" alt="Screenshot2016-04-23_11-22-55_PM" width="734" height="564" /></a>
<h2>Thoughts</h2>
I won’t get into which is better, Prototypal of Classical Inheritance. There are plenty of <a href="http://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical" target="_blank">articles</a> about <a href="https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a#.irm1j6oxw" target="_blank">this</a>.




<a href="https://helloburgh.me/wp-content/uploads/2016/04/Digging.jpeg"><img class="aligncenter size-large wp-image-1074" src="https://helloburgh.me/wp-content/uploads/2016/04/Digging-1024x683.jpeg" alt="Digging" width="700" height="467" /></a>


On Treehouse, I am going through their Full-stack JavaScript track and we came up on OOP JavaScript.

Learning about Objects, state, and the origin and usage of <code>this</code> is intriguing as I have learned a bit about OOP through Java during my time at Pitt.

JavaScript doesn’t have regular Classes and instead uses Prototypes. Classical inheritance is seen as a big problem in JavaScript, which when you consider JavaScript doesn’t have real Classes, it makes sense. Brandon Eich, the creator of JavaScript admitted he wanted JavaScript to look like the little brother of Java, which leaves us with syntax that looks like Java when we use things like Constructors. For instance, in Java, you create a new Object like this:

<pre class="lang:java decode:1 " >

// Imports APIs

import java.util.Scanner;

import java.io*;


// Class definition

public class P3A1_White

{

// Main method

    public static void main(String[] args)

   {

      Scanner keyboard = new Scanner(System.in);

</pre>

Where we are importing the Scanner Class and any I/O classes that Java has. We create a new Object here from the Scanner Class by using <code>Scanner keyboard = new Scanner(System.in);</code>. This is an example of Classical inheritance, creating Objects from either predefined Classes in the Java API or Classes you create.

The syntax for creating Objects in JavaScript from Constructors, which is not the same as a Constructor function in Java, looks similar to creating an Object in Java.

Take a look:

<pre class="lang:javascript decode:1 " >
function MyClass(name) {
}

var bob = new MyClass();

  bob.set_name('Bob');

  bob.announce(); // id is 1, name shows as &quot;Bob&quot;

var john = new MyChildClass('Doe');

  john.set_name('John');

  john.announce(); // id is 2, name shows as &quot;John Doe&quot;

    alert(john instanceof MyClass); // true

</pre>

Notice how we created the Objects: with the <code>new</code> keyword. Also notice that we have an <code>instanceof</code> operator. In Java, you create an <code>instanceof</code> a class by creating an Object through Classical inheritance. Here you’re creating an <code>instanceof</code> the constructor.prototype in the object’s prototype chain. This is weird and I am not sure why Prototypal inheritance wasn’t used.
<h2>Coding Daily</h2>
I have pretty much stuck to what I said I was going to do. I had Sunday off and I really missed it. Some days I start later than others, like today as I am being killed by allergies and am sluggish. But tonight I am going back to Treehouse and Free Code Camp before bed.

<a href="https://helloburgh.me/wp-content/uploads/2016/04/Screenshot2016-04-23_11-22-55_PM.png"><img class="aligncenter size-full wp-image-1075" src="https://helloburgh.me/wp-content/uploads/2016/04/Screenshot2016-04-23_11-22-55_PM.png" alt="Screenshot2016-04-23_11-22-55_PM" width="734" height="564" /></a>
<h2>Thoughts</h2>
I won’t get into which is better, Prototypal of Classical Inheritance. There are plenty of <a href="http://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical" target="_blank">articles</a> about <a href="https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a#.irm1j6oxw" target="_blank">this</a>.





I am reading a lot of Eric Elliott’s posts on the topic. It doesn’t jive with the stuff I am learning as it leans heavily on Prototypal Inheritance features in ES6. But I need to learn the OOP way first, at least for now, to lessen confusion.