---
ID: 183
title: 'Going through Python and Ruby with Zed Shaw'
author: Tiffany White
date: 2015-04-09 17:54:03
layout: post
link: >
  https://tiffanywhite.tech/going-through-python-and-ruby-with-zed-shaw/
published: true
tags:
  - learn python the hard way
  - python
  - zed shaw
categories:
  - Web Development
---
You remember when I said I was going to do The Odin Project and Codecademy? Well, I have an even better solution.
First off, let me say that learning HTML and CSS all day is great if you want to do web dev and that is what I want to do, <em>maybe</em>. I am finding that building apps and scripts is fun. The reason I am doing Python now is because of my Raspberry Pi. I wanted to program it this summer and I know very little Python so I looked for a good alternative to the Codecademy Python course which was just a fragmented bit of Python learning. I wasn’t grasping the concepts, nor was I being asked to think about the things I was learning.

So I remembered fro Code Newbie Podcast <a href="http://twitter.com/zedshaw">Zed Shaw</a>. He had written a book called <a href="http://www.amazon.com/Learn-Python-Hard-Way-Introduction/dp/0321884914/ref=sr_1_1?ie=UTF8&amp;qid=1428558596&amp;sr=8-1&amp;keywords=learn+python+the+hard+way">Learn Python the Hard Way</a> and offered it up for free as HTML on the book’s <a href="http://learnpythonthehardway.org/book/">website</a>. So I went. And I started. And I’m hooked.

So what made it great? Study Drills. Enforcing the fact that you should <strong>type</strong> everything on the screen, use a text editor and not an IDE (which I was really tempted to do) and the questions he answers from previous students. You get to practice what you learn, to, by building little scripts on your own. Here is an example of a form script I wrote using Python, from exercise 11 Study Drill:



<pre class="lang:python decode:1 " >
print “What is your occupation?”,
occupation = raw_input()
print “How many kids do you own?”,
kids = raw_input()
print “Do you like cats? Answer like or do not like”,
cats = raw_input()
print “What is your reputation on Stack Overflow”,
stack_overflow = raw_input()

print “So you do %r, own %r kids, %r cats, have a reputation of %r on Stack Overflow.” % (
occupation, kids, cats, stack_overflow)



<pre class="lang:python decode:1 " >
print “What is your occupation?”,
occupation = raw_input()
print “How many kids do you own?”,
kids = raw_input()
print “Do you like cats? Answer like or do not like”,
cats = raw_input()
print “What is your reputation on Stack Overflow”,
stack_overflow = raw_input()

print “So you do %r, own %r kids, %r cats, have a reputation of %r on Stack Overflow.” % (
occupation, kids, cats, stack_overflow)




</pre>

Learned so far:

Format variables like %r can input data within a string. You can call format variables later in a string, by using:



<pre class="lang:python decode:1 " >
Name = ‘Zed A. Shaw’
age = 35 # not a lie
height = 74 # inches
weight = 180 # lbs
eyes = ‘Blue’
teeth = ‘White’
hair =’Brown’
metric_height = height * 2.54
metric_weight = weight * 0.453592

print “Let’s talk about %s.” % Name
print “He’s %d inches tall.” % height
print “He’s %d pounds heavy.” % weight
print “That’s actually not too heavy.”
print “He’s go %s eyes and %s hair.” % (eyes, hair)
print “His teeth are usually %s depending on the coffee.” % teeth
print “The metric system is odd as my %f and %f are different” % (metric_weight, metric_height)
# this line is tricky, try to get it exactly right
print “If I add %d, %d, and %d I get %d.” % (age,
height, weight, age + height + weight)
print “In England my height %d and weight %d are %f and %f.” % (height, weight,
metric_height, metric_weight)
print “If I add %d, %d, %f and %f I get %f.” % (height, weight, metric_weight, metric_height,
height + weight + metric_weight + metric_height)



<pre class="lang:python decode:1 " >
Name = ‘Zed A. Shaw’
age = 35 # not a lie
height = 74 # inches
weight = 180 # lbs
eyes = ‘Blue’
teeth = ‘White’
hair =’Brown’
metric_height = height * 2.54
metric_weight = weight * 0.453592

print “Let’s talk about %s.” % Name
print “He’s %d inches tall.” % height
print “He’s %d pounds heavy.” % weight
print “That’s actually not too heavy.”
print “He’s go %s eyes and %s hair.” % (eyes, hair)
print “His teeth are usually %s depending on the coffee.” % teeth
print “The metric system is odd as my %f and %f are different” % (metric_weight, metric_height)
# this line is tricky, try to get it exactly right
print “If I add %d, %d, and %d I get %d.” % (age,
height, weight, age + height + weight)
print “In England my height %d and weight %d are %f and %f.” % (height, weight,
metric_height, metric_weight)
print “If I add %d, %d, %f and %f I get %f.” % (height, weight, metric_weight, metric_height,
height + weight + metric_weight + metric_height)




</pre>

As you can see, I assigned a variable before using the print command, called those same variables later in subsequent strings by using format variables.

Another thing learned:

raw_input()

This won’t format the user input as Python code and is used as a promt. So if you look about on the form I made, when run in terminal:

<img class=" aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/04/wpid-python_form.gif" alt="terminal_gif" width="625" height="416" />

You can see it prompts the user. Cool, huh?

This tutorial out of all the ones I’ve tried is really building my confidence. Here’s to more late nights in the trenches.
