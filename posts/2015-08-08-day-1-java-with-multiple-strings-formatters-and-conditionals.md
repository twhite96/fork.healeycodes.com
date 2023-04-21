---
ID: 466
title: 'Day 1: Java with Multiple Strings, Formatters, and Conditionals'
date: 2015-08-08 01:13:05
layout: post
link: >
  https://tiffanywhite.tech/day-1-java-with-multiple-strings-formatters-and-conditionals/
published: true
tags:
  - Java
  - programming
  - Treehouse
  - updates
categories:
  - Daily Progress
---
<a href="https://helloburgh.me/wp-content/uploads/2015/08/Screenshot-2015-08-08-01.14.53.png"><img class="aligncenter size-full wp-image-471" src="https://helloburgh.me/wp-content/uploads/2015/08/Screenshot-2015-08-08-01.14.53.png" alt="Screenshot 2015-08-08 01.14.53" width="262" height="274" /></a>

What I learned…errr last night was about using multiple strings with formatters in Java. For instance:


<pre class="lang:java decode:1 " >
String name = “Tiffany”;
String age = 30;

console.printf(“My name is %s and I am %s years old.”, name, age);



<pre class="lang:java decode:1 " >
String name = “Tiffany”;
String age = 30;

console.printf(“My name is %s and I am %s years old.”, name, age);




</pre>

This is sort of like when I was doing Learn Python the Hard Way only the syntax is different and more verbose.

I learned how to get information into the console by way of prompting the user. So you have the console object and the method readLine to say something like:



<pre class="lang:java decode:1 " >
console.readLine(“What is your name?”);

<pre class="lang:java decode:1 " >
console.readLine(“What is your name?”);


<pre class="lang:java decode:1 " >
console.readLine(“What is your name?”);

</pre>

This was interesting, getting to learn these new methods for a new language. Also knowing the Java is compiled and how to run the compile command with:



<pre class="lang:java decode:1 " >
javac

<pre class="lang:java decode:1 " >
javac


<pre class="lang:java decode:1 " >
javac

</pre>

I learned more about integers and getting an integer from a string. Whereas in JavaScript you’d use:



<pre class="lang:java decode:1 " >
parseInt

<pre class="lang:java decode:1 " >
parseInt


<pre class="lang:java decode:1 " >
parseInt

</pre>

in Java you have this long string:



<pre class="lang:java decode:1 " >
Integer.parseInt

<pre class="lang:java decode:1 " >
Integer.parseInt


<pre class="lang:java decode:1 " >
Integer.parseInt

</pre>

Building things and adding conditions was interesting as well. Here is a little snippet of the app we built in Java:



<pre class="lang:java decode:1 " >
String name = console.readLine(“Enter a name: ”);
String adjective = console.readLine(“Enter an adjective: ”);
String noun;
boolean isInvalidWord;
do {
    noun = console.readLine(“Enter a noun: ”);
    isInvalidWord = (noun.equalsIgnoreCase(“dork”) ||
                     noun.equalsIgnoreCase(“jerk”));
    if (isInvalidWord) {
    console.printf(“That language is not allowed. Try again. \n\n”);
  }
} while(isInvalidWord);



<pre class="lang:java decode:1 " >
String name = console.readLine(“Enter a name: ”);
String adjective = console.readLine(“Enter an adjective: ”);
String noun;
boolean isInvalidWord;
do {
    noun = console.readLine(“Enter a noun: ”);
    isInvalidWord = (noun.equalsIgnoreCase(“dork”) ||
                     noun.equalsIgnoreCase(“jerk”));
    if (isInvalidWord) {
    console.printf(“That language is not allowed. Try again. \n\n”);
  }
} while(isInvalidWord);




</pre>

To be honest, Java isn’t really too bad. I don’t like the verbosity. For instance in JavaScript you can call a method:



<pre class="lang:javascript decode:1 " >
noun.toLowerCase

<pre class="lang:javascript decode:1 " >
noun.toLowerCase


<pre class="lang:javascript decode:1 " >
noun.toLowerCase

</pre>

instead of what we’ve got here in Java. Java is a little better in that the .equalsIgnoreCase makes things simpler so I could call it on any object and the case would be ignored completely. But it just <strong>looks</strong> cleaner.

So that was my experience fo Java Beginner Basic Course on Treehouse. I plan on diving deeper as the semester grinds on. For now, it’s learning RegEx and then back to JavaScript as I want to start thinking about building my app.
