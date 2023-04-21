---
ID: 623
title: 'Fifth Week of Class and Makin&#8217; Text Files'
# makin-text-files
author: Tiffany White
date: 2015-09-30 20:03:36
layout: post
link: >
  https://tiffanywhite.tech/makin-text-files/
published: true
tags:
  - Java
  - programming
  - university of pittsburgh
categories:
  - General Updates
---
<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/09/wpid-BufferedReader-in-Java.jpg" alt="Java" />

So this is my fifth week at the University of Pittsburgh, in their CGS program, self-directed study. CGS stands for College of General Studies. I knew I’d have an easier time getting in there and working my way to The Dietrich School of Arts &amp; Sciences Computer Science program.

My self-directed study? Computer Science all the way. I do have some gen eds to take so I am taking Chinese Thought this semester and will probably have to take a language course. I will also have to take Calc 1 &amp; 2 and Stats.

I am extremely happy at Pitt right now, much happier than I was anywhere else. That’s not a slight against community colleges– they gave me a leg up when I needed it. If it wasn’t for HACC (specifically, CCAC isn’t great when you compare the two to be honest) I probably wouldn’t have been able to make it to a full on university. I always knew I was university material. Always. I may not have been able to go when I was young because of circumstances well out of my control but deep down I knew I could go, when I got my stuff together.

So I am in my fifth week and I have homework like mad. Ha. I am excited to do it.

We are doing file input and output in Java. We are writing to a text file with FileWriter. You can also <em>append</em> text to a file doing PrintWriter. Here is an example I found at the University of Texas website:



<pre class="lang:java decode:1 " >import java.io
 public class WriteTextFile
 {
 public static void main (String [] args) throws IOException
 {
 File outFile = new File (&amp;amp;quot;output.txt&amp;amp;quot;);
 FileWriter fWriter = new FileWriter (outFile);
 PrintWriter pWriter = new PrintWriter (fWriter);
 pWriter.println (&amp;amp;quot;This is a line.&amp;amp;quot;);
 pWriter.println (&amp;amp;quot;This is another line.&amp;amp;quot;);
 pWriter.close();
 }



<pre class="lang:java decode:1 " >import java.io
 public class WriteTextFile
 {
 public static void main (String [] args) throws IOException
 {
 File outFile = new File (&amp;amp;quot;output.txt&amp;amp;quot;);
 FileWriter fWriter = new FileWriter (outFile);
 PrintWriter pWriter = new PrintWriter (fWriter);
 pWriter.println (&amp;amp;quot;This is a line.&amp;amp;quot;);
 pWriter.println (&amp;amp;quot;This is another line.&amp;amp;quot;);
 pWriter.close();
 }




}</pre>

Here in the header you are importing the I/O package for Java and creating and writing text to a new file called “output.txt”, using

<pre class="lang:java decode:1 " >FileWriter fWriter = new FileWriter (outFile)</pre>

to write to the file after declaring the FileWriter class and then outputting the file. You then declare the

<pre class="lang:java decode:1 " >PrintWriter</pre>

class to append the proceeding lines to the the text file.

<pre class="lang:java decode:1 " >pWriter.close()</pre>

closes the file in a similar way that Python closes text files after you open and append text to them.

Update: Seems, after I went to class today, that you open a file with

<pre class="lang:java decode:1 " >PrintWriter</pre>

and append to a file using

<pre class="lang:java decode:1 " >FileWriter</pre>

I guess I got confused there reading that code from UT.