---
ID: 1585
title: 'On My First 100% on a Java Program'
# first-100-java-program
author: Tiffany White
date: 2017-01-26 14:39:45
layout: post
link: >
  https://tiffanywhite.tech/first-100-java-program/
published: true
tags:
  - homework
  - Java
  - Pitt
categories:
  - Pitt
  - Semester Updates
---


Got a 100/100 on my first Intermediate Java Program.

I have been working really hard at being consistent in my life: consistent bedtimes, consistent night time medication times, consistent hygiene times (you'd be surprised at how weird my hygiene patterns were when I had that breakdown this time last year), consistent eating, notes &amp; homework...you get the gist.

So far I have been doing just that, with the few night time medication hiccups of late, but for the most part, everything is consistent.

I have been combing over my class notes and making consolidating them in Evernote for reference later. I have been programming and completing assignments well before they are due.

This brings me to my next point.

## Confidence

Now that I have programming experience under my belt with Free Code Camp and Treehouse, I am experiencing a bit more confidence this semester, the confidence I lacked last time I took CS 0401.

I can do the whole, *Read-Search-Ask* method of finding how to solve something given by Free Code Camp. This has been instrumental in getting as far as I have. This method of learning how to program is the best way, I believe, instead of being handheld through the process.

I understand why something works and why it doesn't. And our professor, Tim Hoffman, explains so much stuff so clearly I can actually do the assignments without much stress.

For instance:

<pre><code>
// F16 CS 401 Speeding Ticket Project
// Project1.java Starter File

import java.io.*;
import java.util.*;

public class Project1
{
  public static void main (String args[])
{
  // Create a scanner to read from keyboard
  Scanner kbd = new Scanner (System.in);

  String firstName="N/A",lastName="N/A";
  int age=0, speedLimit=0, actualSpeed=0, mphOverLimit=0;
  int baseFine=0, underAgeFine=0, zoneFine=0, totalFine=0;
  // DO NOT ADD TO OR MODIFY ABOVE THIS LINE

  // your variables &amp; code in here

  System.out.println("Enter your first and last name. \&gt; ");
  firstName = kbd.next();
  lastName = kbd.next();

  // DO NOT ADD TO OR MODIFY BELOW THIS LINE
  System.out.println();
  System.out.format( "name: %s, %s \n",lastName,firstName );
  System.out.format( "age: %d yrs.\n",age );
  System.out.format( "actual speed: %d mph.\n",actualSpeed );
  System.out.format( "speed limit: %d mph.\n",speedLimit );
  System.out.format( "mph over limit: %d mph.\n",mphOverLimit );
  System.out.format( "base fine: $%d\n",baseFine );
  System.out.format( "zone fine: $%d\n",zoneFine );
  System.out.format( "under age fine: $%d\n",underAgeFine );
  System.out.format( "total fine: $%d\n",totalFine );
  } // END MAIN
} // END PROJECT1 CLASS
</code></pre>

When asking for the first and last names in one string, I knew instinctively, because of Tim, that the characters in strings are tokenized in the string buffer. Once it gets to a space in the input, it stops tokenizing, and the next string is held in the buffer. If you were to ask for an `nextInt()` for the following input, you'd get an error. To avoid this, you usually do `firstName = kbd.nextLine()`. But since I needed to essentially split these so that they would look like:

`Hoffman, Tim`

on one line, I could keep each separate part of the string input in the string buffer using `firstName = kbd.next(); lastName = kbd.next()` and it would spit out the correct output. Pretty cool. I wouldn't have known about this if not for Tim. I learned it on 0007 but I didn't quite understand.

## Aced the First Project




Got a 100/100 on my first Intermediate Java Program.

I have been working really hard at being consistent in my life: consistent bedtimes, consistent night time medication times, consistent hygiene times (you'd be surprised at how weird my hygiene patterns were when I had that breakdown this time last year), consistent eating, notes &amp; homework...you get the gist.

So far I have been doing just that, with the few night time medication hiccups of late, but for the most part, everything is consistent.

I have been combing over my class notes and making consolidating them in Evernote for reference later. I have been programming and completing assignments well before they are due.

This brings me to my next point.

## Confidence

Now that I have programming experience under my belt with Free Code Camp and Treehouse, I am experiencing a bit more confidence this semester, the confidence I lacked last time I took CS 0401.

I can do the whole, *Read-Search-Ask* method of finding how to solve something given by Free Code Camp. This has been instrumental in getting as far as I have. This method of learning how to program is the best way, I believe, instead of being handheld through the process.

I understand why something works and why it doesn't. And our professor, Tim Hoffman, explains so much stuff so clearly I can actually do the assignments without much stress.

For instance:

<pre><code>
// F16 CS 401 Speeding Ticket Project
// Project1.java Starter File

import java.io.*;
import java.util.*;

public class Project1
{
  public static void main (String args[])
{
  // Create a scanner to read from keyboard
  Scanner kbd = new Scanner (System.in);

  String firstName="N/A",lastName="N/A";
  int age=0, speedLimit=0, actualSpeed=0, mphOverLimit=0;
  int baseFine=0, underAgeFine=0, zoneFine=0, totalFine=0;
  // DO NOT ADD TO OR MODIFY ABOVE THIS LINE

  // your variables &amp; code in here

  System.out.println("Enter your first and last name. \&gt; ");
  firstName = kbd.next();
  lastName = kbd.next();

  // DO NOT ADD TO OR MODIFY BELOW THIS LINE
  System.out.println();
  System.out.format( "name: %s, %s \n",lastName,firstName );
  System.out.format( "age: %d yrs.\n",age );
  System.out.format( "actual speed: %d mph.\n",actualSpeed );
  System.out.format( "speed limit: %d mph.\n",speedLimit );
  System.out.format( "mph over limit: %d mph.\n",mphOverLimit );
  System.out.format( "base fine: $%d\n",baseFine );
  System.out.format( "zone fine: $%d\n",zoneFine );
  System.out.format( "under age fine: $%d\n",underAgeFine );
  System.out.format( "total fine: $%d\n",totalFine );
  } // END MAIN
} // END PROJECT1 CLASS
</code></pre>

When asking for the first and last names in one string, I knew instinctively, because of Tim, that the characters in strings are tokenized in the string buffer. Once it gets to a space in the input, it stops tokenizing, and the next string is held in the buffer. If you were to ask for an `nextInt()` for the following input, you'd get an error. To avoid this, you usually do `firstName = kbd.nextLine()`. But since I needed to essentially split these so that they would look like:

`Hoffman, Tim`

on one line, I could keep each separate part of the string input in the string buffer using `firstName = kbd.next(); lastName = kbd.next()` and it would spit out the correct output. Pretty cool. I wouldn't have known about this if not for Tim. I learned it on 0007 but I didn't quite understand.

## Aced the First Project





Got a 100% on Project 1. It helps he fills out the output that he expects but he also lets you do it as many times as you can until a certain point after the project/lab is due. This is the first time I've gotten 100% on any difficult programming assignment since I've been going to Pitt. Yes, it's a text based Speeding Ticket Calculator that basically relies on Scanner input and conditionals and some simple math, but I hadn't even gotten 100% on my Beginning Programming projects, let alone the Intermediate programming projects. This boosts confidence and gives me hope for the future.