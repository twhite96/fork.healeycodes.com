---
ID: 1600
title: Hacking with Java Algorithms
# hacking-java-algorithms
author: Tiffany White
date: 2017-02-11 03:08:31
layout: post
link: >
  https://tiffanywhite.tech/hacking-java-algorithms/
published: true
tags:
  - algorithms
  - assignments
  - computer science
  - daily progress
  - Pitt
categories:
  - Java
---


So I have been pretty knee deep in algorithms and Java lately.

Coming from Free Code Camp last spring, I have found that I’m finally *understanding* the methods, algorithms, etc, that I am currently working on in class.

One of the best parts about CS0401 is Tim Hoffman, the professor, and Tim the TA. Their explanations have cleared a lot of things up for me so that when I go to do my projects and labs, I am not staring at the blank editor trying to figure out what to do.

It helps that Tim the Dr. pretty much fills in the main method and calling logic, as well as `BufferedReader`, `Scanner`, and `FileReader` inputs. This helps me to not be stuck, and start working on the main logic right away.

## A Fat 0 This Week

I have been a bit sick lately and haven’t had the energy to do most of my homework. Thought I’d turn it in late yesterday but I am stuck, and the places I’ve reached out to haven’t gotten back too me for help. So, I essentially got a 0 on project 3, my first 0 on a project since starting this class.

## Example Algorithm

So we have been working on a set of pretty established algorithms like the speeding ticket calculator, reversing strings, and checking for palindromes.

My solution for palindromes in JavaScript:

https://gist.github.com/twhite96/a066072cd9194d249caa

My solutions for palindromes in Java:

https://gist.github.com/twhite96/288ed40c2d7bb9d1482a7ece3f1be164

Here we are using a clean string to add characters to and `isLetter()` to check to see if the character at the i index of the `String s` in the for loop is a letter. If it is a letter, we use `toLowerCase` to make it lowercase. We want all the letters to be lowercase. It makes it easier to check for palindromes this way. Then we add the characters we have made lowercase to the clean string, where we can then check for palindromes.

In the boolean method `isPalindrome()` we check to see if the the string is empty or `null`. If this is the case, we can’t check for palindromes as no characters exist. We then return `false`.

Next, in the for loop, we split the string in half and then loop through each half. Then we check if the character at the end of the sting doesn’t match the character at the beginning. If it doesn’t, we need to return false, as that is not a palindrome. If it does, we return true.

## Just Explained That. Feels Good

I honestly wasn’t sure I could explain that after not looking at it for a week or so. It took about 10 minutes but I felt like I explained it pretty well. I am patting myself on the back. Ha.




So I have been pretty knee deep in algorithms and Java lately.

Coming from Free Code Camp last spring, I have found that I’m finally *understanding* the methods, algorithms, etc, that I am currently working on in class.

One of the best parts about CS0401 is Tim Hoffman, the professor, and Tim the TA. Their explanations have cleared a lot of things up for me so that when I go to do my projects and labs, I am not staring at the blank editor trying to figure out what to do.

It helps that Tim the Dr. pretty much fills in the main method and calling logic, as well as `BufferedReader`, `Scanner`, and `FileReader` inputs. This helps me to not be stuck, and start working on the main logic right away.

## A Fat 0 This Week

I have been a bit sick lately and haven’t had the energy to do most of my homework. Thought I’d turn it in late yesterday but I am stuck, and the places I’ve reached out to haven’t gotten back too me for help. So, I essentially got a 0 on project 3, my first 0 on a project since starting this class.

## Example Algorithm

So we have been working on a set of pretty established algorithms like the speeding ticket calculator, reversing strings, and checking for palindromes.

My solution for palindromes in JavaScript:

https://gist.github.com/twhite96/a066072cd9194d249caa

My solutions for palindromes in Java:

https://gist.github.com/twhite96/288ed40c2d7bb9d1482a7ece3f1be164

Here we are using a clean string to add characters to and `isLetter()` to check to see if the character at the i index of the `String s` in the for loop is a letter. If it is a letter, we use `toLowerCase` to make it lowercase. We want all the letters to be lowercase. It makes it easier to check for palindromes this way. Then we add the characters we have made lowercase to the clean string, where we can then check for palindromes.

In the boolean method `isPalindrome()` we check to see if the the string is empty or `null`. If this is the case, we can’t check for palindromes as no characters exist. We then return `false`.

Next, in the for loop, we split the string in half and then loop through each half. Then we check if the character at the end of the sting doesn’t match the character at the beginning. If it doesn’t, we need to return false, as that is not a palindrome. If it does, we return true.

## Just Explained That. Feels Good

I honestly wasn’t sure I could explain that after not looking at it for a week or so. It took about 10 minutes but I felt like I explained it pretty well. I am patting myself on the back. Ha.





There’s still gaps in my knowledge and a long way to go for total understanding of basic programming concepts, but the comprehension is coming faster, and I am grateful Definitely a bonus of Free Code Camp’s model of teaching.