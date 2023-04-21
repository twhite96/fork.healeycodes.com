---
ID: 199
title: Opening Files in Python
# opening-files-in-python
author: Tiffany White
date: 2015-04-20 17:07:39
layout: post
link: >
  https://tiffanywhite.tech/opening-files-in-python/
published: true
tags:
  - learn python the hard way
  - pydoc
  - python
  - zed shaw
categories:
  - Programming
---
<h1>Opening Files in Python</h1>

So right now I am learning how to open and read files in Python, which is exercise 15. Apparently, it gets super hard around the 30 exercise mark. I am looking forward to the challenge, however.

So I am working through exercise 15. The text file we are to open and read in python contains some arbitrary text. We are still working with argument variables and the command raw_input(), but we’re throwing in the argv

`filename`

with another command

`open`

which just opens the file taking a parameter which returns a value, kind of like raw_input, that you can set to any variable you want, according to pydoc (which is the document system built into python– excellent resource, aside from Dash).

Here is the script I wrote:

```python
from sys import argv

script, filename = argv

txt = open(filename)

print “Here’s your file %r:” % filename
print txt.read()

print “Type the filename again:”
file_again = raw_input(“&gt; ”)

txt_again = open(file_again)

print txt_again.read()
```

Here is my script with the comments I wrote, an annotation that Zed Shaw encourages.

```python
#Grabs the sys module and the argv variable inside that module

from sys import argv

#sets the argument variables to script and filemane&lt;/h1&gt;

script, filename = argv

# when we type the script into the terminal, 
# you have to type in the filename as well that you want to open. 
# This filename must be an arguement variable when you run the python script. 
# txt indicates that it is a txt file. Open(filenmae) calls the argument variable 
# that we specified was ex15_sample.txt 
# and opens it, taking a parameter and returning a value you can set as your own value, 
# much like raw_input

txt = open(filename)

# this line prints out text and opens an formatter which is the argument variable filename.

print “Here’s your file %r:” % filename

# here we call a function on the text file which is read(). 
# To give a file a command you use the dot and and function so txt.read() opens the file without getting any parameters.

print txt.read()

#this line prints this line of text in the script in terminal

print “Type the filename again:”

# this is another prompt with raw_input 
# and the caret assigned to the variable file_again. 
# You must type in the name of the text file again 
# or python will throw an error

file_again = raw_input(“&gt; ”)

# this line uses the open command to open the txt file again

txt_again = open(file_again)

# this line uses the function read() which is part of the command you’re giving the file
txt_again.read(). It will then read and print the contents of the file.

print txt_again.read()
```