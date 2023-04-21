---
ID: 190
title: >
  Argument Variables and ValueErrors in
  Python
# argument-variables-in-python
author: Tiffany White
date: 2015-04-13 17:00:22
layout: post
link: >
  https://tiffanywhite.tech/argument-variables-in-python/
published: true
tags:
  - learn python the hard way
  - programming
  - python
  - zed shaw
categories:
  - Programming
---
Going through more Zed Shaw tutorials with <em>Learn Python the Hard Way</em> and finding it excellent as it gets more challenging. We are working with argument variables, which hold the arguments you pass through your python script until called later.

He let us know that part of the command:

<pre><code>python ex13.py
</code></pre>

was an argument, that part being:

<pre><code>ex13.py
</code></pre>

We then wrote a script that accepted arguments. First, the first line of the script was:

<pre><code>from sys import argv
</code></pre>

Importing lets you add modules to your python script. Instead of piling in modules, python let’s you choose which ones you want. In this case we have the sys or system module. I am not sure what a system module is or what modules do yet, as I am at exercise 14 and still working through it.

Next we have the argument variables:

<pre><code>script, first, second, third = argv
</code></pre>

We call these variables, I am not sure if the correct word is call, I know it is for object-oriented programming, and I am not sure if python relies on objects like Ruby. But anyway…

This was the part of the script that would run when called in terminal:

<pre><code>print “The script is called:”, script
print “Your first variable is:”, first
print “Your second variable is:”, second
print “Your third variable is:”, third
</code></pre>

When first running this in terminal I got a ValueError returned to me:

<pre><code>python ex13.py
Traceback (most recent call last):
File “ex13.py”, line 3, in
script, first, second, third = argv
ValueError: need more than 1 value to unpack
</code></pre>

It seemed that I didn’t reference enough arguments. I then reread the tutorial and saw that I needed to specify the arguments by typing in a random name:

<pre><code>python ex13.py first 2nd 3rd
The script is called: ex13.py
Your first variable is: first
Your second variable is: 2nd
Your third variable is: 3rd
</code></pre>

I replicated this according to the tutorial, trying to understand what the error was. I was a bit confused. I thought that I had four arguments, not five when I typed the following in:

<pre><code>python ex13.py first 2nd
Traceback (most recent call last):
File “ex13.py”, line 3, in
script, first, second, thrid = argv
ValueError: need more than 3 values to unpack
</code></pre>

I was literally stuck on this. Went into the Code Newbie Slack team looking for help and voila! I got some from the truly smart people there. I forgot that ex13.py was an argument as well. So I did only have four arguments. In the last example, my three unpacked arguments were, ex13.py, first, and 2nd. I needed one more, not 3. It may sound weird but my mind was lost.

So now that I know that I moved onto exercise 14, mixing in prompts with argument variables, format variables, and the like.

Here is the script:

<pre><code>from sys import argv

script, user_name = argv
prompt = ‘&gt;’

print “Hi, %s, I’m the %s script.” % (user_name, script)
print “I’d like to ask you a few questions.”
print “Do you like me %s?” % user_name
likes = raw_input(prompt)

print “Where do you live %s?” % user_name
lives = raw_input(prompt)

print “What kind of computer do you have?”
computer = raw_input(prompt)

print ""“
Alright, so you said %r about liking me.
You live in %r. Not sure where that is.
And you have %r computer. Nice.
”"" % (likes, lives, computer)
</code></pre>

Took me a bit to get that I was assigning a prompt to variables. I didn’t get that until I got to the last code block.

And here is another gif of the result:

<img class=" aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/04/wpid-python_argv.gif" alt="python_gif_2" width="790" height="483" />