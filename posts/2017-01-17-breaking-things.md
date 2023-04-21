---
ID: 1578
title: Breaking Things
# breaking-things
author: Tiffany White
date: 2017-01-17 20:40:43
layout: post
link: >
  https://tiffanywhite.tech/breaking-things/
published: true
tags:
  - Java
  - school
  - self-reflection
categories:
  - Semester Updates
---


This semester, this whole year even, has seen a dramatic increase in productivity and a conscious effort for self-care-- making necessary doctors appointments, going to bed around 9 or 10 and getting up at 8 or 9 am.

Taking care of myself helps me think clearer, helps me get more done.

I am attending class, I am paying attention, I am going over my notes, I am looking at code samples and breaking them to see how they work.

From my Facebook note:

So I am going through these Keynote files from my intermediate programming in Java class and deconstructing them, trying to understand the code samples and writing down questions.
I was going to ask the questions in class but thought, "Wait. Why don't I just run this code and break it to find out why this or that is or isn't a good idea".

So I did. Global variables are a terrible idea in most languages. In this code snippet, he told us it was bad idea to declare val locally:

[java]
import java.util.Scanner;
public class test {
  public static void main(String args[]) {
    Scanner kbd = new Scanner( System.in );
    int sum = 0;
    while (sum < 80) {
      System.out.print("Enter a number: ");
      int val = kbd.nextInt();
      sum+= val; // i.e. sum = sum + val
    }
    System.out.println("Sum is: " + sum);
  }
}
[/java]
I wanted to know why. So I ran the code. It looped four times with the numbers 3, 5, 8, and 100. The sum was 116.
So then I declared the val variable globally:

[java]
import java.util.Scanner;
public class test {
  public static void main(String args[]) {
    Scanner kbd = new Scanner( System.in );
    int sum = 0;
    int val = 0;
    while (sum &lt; 80) {
      System.out.print("Enter a number: ");
      val = kbd.nextInt();
      sum+= val; // i.e. sum = sum + val
    }
    System.out.println("Sum is: " + sum);
  }
}
[/java]

I got the same answer.

## Globals during loops = bad idea?

In the second example, I ran the code with 3 as an input and I thought it would go on infinitely and quit the program. But while writing this, I got the idea that it wouldn’t go on after all.
So I ran the test again with the input being 80. The sum turned out to be 80, and the program quit. So why did he say this?

## Conventional Programming Wisdom

Globals are a programmer’s worst enemy. Globals can lead to bugs that cripple JavaScript apps and I thought the same for Java and, while this test didn’t have any ill effects, it probably does somewhere. But, adding val to the global namespace did nothing to the program.

----

These are just some of the changes this semester. I *want* to be a software engineer, dipping my feet into the vast pool of web development then learning things like C, Go, C++, and Swift.

## Good News!




This semester, this whole year even, has seen a dramatic increase in productivity and a conscious effort for self-care-- making necessary doctors appointments, going to bed around 9 or 10 and getting up at 8 or 9 am.

Taking care of myself helps me think clearer, helps me get more done.

I am attending class, I am paying attention, I am going over my notes, I am looking at code samples and breaking them to see how they work.

From my Facebook note:

So I am going through these Keynote files from my intermediate programming in Java class and deconstructing them, trying to understand the code samples and writing down questions.
I was going to ask the questions in class but thought, "Wait. Why don't I just run this code and break it to find out why this or that is or isn't a good idea".

So I did. Global variables are a terrible idea in most languages. In this code snippet, he told us it was bad idea to declare val locally:

[java]
import java.util.Scanner;
public class test {
  public static void main(String args[]) {
    Scanner kbd = new Scanner( System.in );
    int sum = 0;
    while (sum < 80) {
      System.out.print("Enter a number: ");
      int val = kbd.nextInt();
      sum+= val; // i.e. sum = sum + val
    }
    System.out.println("Sum is: " + sum);
  }
}
[/java]
I wanted to know why. So I ran the code. It looped four times with the numbers 3, 5, 8, and 100. The sum was 116.
So then I declared the val variable globally:

[java]
import java.util.Scanner;
public class test {
  public static void main(String args[]) {
    Scanner kbd = new Scanner( System.in );
    int sum = 0;
    int val = 0;
    while (sum &lt; 80) {
      System.out.print("Enter a number: ");
      val = kbd.nextInt();
      sum+= val; // i.e. sum = sum + val
    }
    System.out.println("Sum is: " + sum);
  }
}
[/java]

I got the same answer.

## Globals during loops = bad idea?

In the second example, I ran the code with 3 as an input and I thought it would go on infinitely and quit the program. But while writing this, I got the idea that it wouldn’t go on after all.
So I ran the test again with the input being 80. The sum turned out to be 80, and the program quit. So why did he say this?

## Conventional Programming Wisdom

Globals are a programmer’s worst enemy. Globals can lead to bugs that cripple JavaScript apps and I thought the same for Java and, while this test didn’t have any ill effects, it probably does somewhere. But, adding val to the global namespace did nothing to the program.

----

These are just some of the changes this semester. I *want* to be a software engineer, dipping my feet into the vast pool of web development then learning things like C, Go, C++, and Swift.

## Good News!





I have transferred within Pitt, going from the College of General Studies to the Dietrich School of Arts &amp; Sciences! I'm thrilled that I can finally be a true Computer Science major. ????????‍????????????