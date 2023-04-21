---
ID: 597
title: >
  Moving Right Along in CS 0007, Intro to
  Programming in Java
# cs-intro-to-programming-java
author: Tiffany White
date: 2015-09-18 03:39:54
layout: post
link: >
  https://tiffanywhite.tech/cs-intro-to-programming-java/
published: true
tags:
  - Java
  - programming
  - student
categories:
  - General Updates
---
<h2>The Blank Text Editor</h2>

<img src="https://helloburgh.me/wp-content/uploads/2015/09/wpid-mac-textwrangler-code-type.png" alt="Text_Wrangler" />

So class is moving along at a regular clip. I am learning about syntax and seeing similarities between other languages. I have written four text-based programs using Java that were pretty easy, seeing as I already have some clue as to how to code. Today, however, she threw us into the fire and, like many times before, I opened up a blank Atom text document and froze.

<h2>Fear of Getting It Wrong</h2>

I know I am going to write bugs. Everyone does. No one gets it write the first time. But sitting there at my Mac, staring at Atom, knowing I had a day to complete calculating the average of three test scores and then printing the average to the screen using two decimal places stopped me in my tracks. We just learned about formatters, which I was familiar with in Python, but there was this extra way to format. For instance, take the number 5,876.98. You could format this like:



<pre class="lang:java decode:1 " > public class Tax Ripoff
{
 public static void main(String[] args)
  {
  double grossPay = 5876.98
  double netPay = 5489.76
  double differenceInPay = grossPay - netPay;
  System.out.printf(&amp;quot;The difference between your gross and net pay is %,.2f\n&amp;quot;, differenceInPay);
  }
}



<pre class="lang:java decode:1 " > public class Tax Ripoff
{
 public static void main(String[] args)
  {
  double grossPay = 5876.98
  double netPay = 5489.76
  double differenceInPay = grossPay - netPay;
  System.out.printf(&amp;quot;The difference between your gross and net pay is %,.2f\n&amp;quot;, differenceInPay);
  }
}




</pre>

I don&#8217;t know if they have that in Python, but it looks pretty silly and verbose to me.

Anyway.

I completely froze up. I do it all the time. I am a perfectionist. To a fault. This can&#8217;t happen if I am to get anything done. So I looked at my professor&#8217;s code and my old code and started coding.

<h2>Bugs</h2>

Ran into a bug. Thanks to <a href="https://twitter.com/BillLaboon">Bill Laboon</a> for his help debugging. I kept getting an exception error. I was using &#8220;%,.2f&#8221; when my numbers didn&#8217;t require a comma&#8211; they weren&#8217;t big enough. So my program is full of whitespace which I am going to fix, just want to read it better. This is the program I wrote:



<pre class="lang:java decode:1 " >import java.util.Scanner;

public class White
{
 public static void main(String[] args)
 {
 Scanner keyboard = new Scanner(System.in);

 System.out.print(&amp;quot;Enter your first test score.&amp;quot;);
 double firstScore = keyboard.nextDouble();

 System.out.print(&amp;quot;Enter your second test score.&amp;quot;);
 double secondScore = keyboard.nextDouble();

 System.out.print(&amp;quot;Enter your third test score.&amp;quot;);
 double thirdScore = keyboard.nextDouble();

 double totalScore = (firstScore + secondScore + thirdScore) / 3;

System.out.printf(&amp;quot;Your class average is %.2f\n&amp;quot;, totalScore);
  }
}



<pre class="lang:java decode:1 " >import java.util.Scanner;

public class White
{
 public static void main(String[] args)
 {
 Scanner keyboard = new Scanner(System.in);

 System.out.print(&amp;quot;Enter your first test score.&amp;quot;);
 double firstScore = keyboard.nextDouble();

 System.out.print(&amp;quot;Enter your second test score.&amp;quot;);
 double secondScore = keyboard.nextDouble();

 System.out.print(&amp;quot;Enter your third test score.&amp;quot;);
 double thirdScore = keyboard.nextDouble();

 double totalScore = (firstScore + secondScore + thirdScore) / 3;

System.out.printf(&amp;quot;Your class average is %.2f\n&amp;quot;, totalScore);
  }
}




</pre>