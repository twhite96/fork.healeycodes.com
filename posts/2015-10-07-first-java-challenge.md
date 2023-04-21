---
ID: 645
title: >
  First Java Challenge and Getting to Know
  Variable Scope
# first-java-challenge
author: Tiffany White
date: 2015-10-07 19:03:28
layout: post
link: >
  https://tiffanywhite.tech/first-java-challenge/
published: true
tags:
  - challenege
  - homework
  - Java
  - programming
categories:
  - General Updates
  - Programming
---
[caption id="" align="alignnone" width="795"]<img class="" src="https://helloburgh.me/wp-content/uploads/2015/10/wpid-headdesk.jpg" alt="Head_desk" width="795" height="404" /> Image credit: Atypically Relevant http://www.atypicallyrelevant.com/return-to-school-post-haste/headdesk-2[/caption]

So I have stumbled a bit in the intro class, but not too badly. When working with opening text files, writing text to those text files, and then reading the text back into the program, I got stuck with scope. And I knew it. It wasn’t like I was flying blind without knowing my problem which, after a year of doing this, I am pretty proud of. I still couldn’t figure out where my issue was. I went to Stack Overflow, I asked around. For one, this is what my code looked like prior to getting it corrected:



<pre class="lang:java decode:1 " >import java.util.Scanner;
import java.io.*;

public class White
{
 public static void main(String[] args) throws IOException
 {
   // Gets the PrintWriter and Scanner classes
   PrintWriter file = new PrintWriter(&amp;quot;names.txt&amp;quot;);
   Scanner keyboard = new Scanner(System.in);
   // Gets data and writes it to a file
  for (int i = 1; i &amp;lt;= 3; i++)
 {
    //Gets name of friend
    System.out.print(&amp;quot;Enter the name of friend number &amp;quot; + i + &amp;quot;: &amp;quot;);
    String friendName = keyboard.nextLine();
    file.println(friendName);
 }

    FileWriter fw = new FileWriter(&amp;quot;names.txt&amp;quot;, true);
    PrintWriter pw = new PrintWriter(fw);
    for (int i = 4; i &amp;lt;= 6; i++)
    {
        //Gets name of friend
        System.out.print(&amp;quot;Enter the name of friend number &amp;quot; + i + &amp;quot;: &amp;quot;);
        String friendName = keyboard.nextLine();
        file.println(friendName);

    }

    file.close();
  }




<pre class="lang:java decode:1 " >import java.util.Scanner;
import java.io.*;

public class White
{
 public static void main(String[] args) throws IOException
 {
   // Gets the PrintWriter and Scanner classes
   PrintWriter file = new PrintWriter(&amp;quot;names.txt&amp;quot;);
   Scanner keyboard = new Scanner(System.in);
   // Gets data and writes it to a file
  for (int i = 1; i &amp;lt;= 3; i++)
 {
    //Gets name of friend
    System.out.print(&amp;quot;Enter the name of friend number &amp;quot; + i + &amp;quot;: &amp;quot;);
    String friendName = keyboard.nextLine();
    file.println(friendName);
 }

    FileWriter fw = new FileWriter(&amp;quot;names.txt&amp;quot;, true);
    PrintWriter pw = new PrintWriter(fw);
    for (int i = 4; i &amp;lt;= 6; i++)
    {
        //Gets name of friend
        System.out.print(&amp;quot;Enter the name of friend number &amp;quot; + i + &amp;quot;: &amp;quot;);
        String friendName = keyboard.nextLine();
        file.println(friendName);

    }

    file.close();
  }





}</pre>

As you can see I was trying to access a variable outside it’s scope

<pre class="lang:java decode:1 " >String friendName = keyboard.nextLine();</pre>

. I declared it twice as well. I knew I needed to change the variable to be outside of all the loops, global (but not quite, as I was told about the resulting code, not sure why) sort of. I would declare it right after the method but the compiler complained that I did not initialize

<pre class="lang:java decode:1 " >String friendName;</pre>

. And I didn’t. I didn’t know how.

So frustrated, I jumped on the Code Newbie Slack general channel and just threw it out there. Most are web developers but someone helped. Cory. He told me to initialize it with empty single quotes. The compiler didn’t understand the empty single quotes so I changed them to an empty string with double quotes. Here is the final program, which isn’t elegant, but I still got a 100 anyway, as it was just for participation:



<pre class="lang:java decode:1 " >import java.util.Scanner;
import java.io.*;

public class White
{
 public static void main(String[] args) throws IOException
 {
   // Gets the PrintWriter and Scanner classes
   PrintWriter file = new PrintWriter(&amp;quot;names.txt&amp;quot;);
   Scanner keyboard = new Scanner(System.in);
   String friendName = &amp;quot;&amp;quot;;
   // Gets data and writes it to a file
   for (int i = 1; i &amp;lt;= 3; i++)
 {
     //Gets name of friend
     System.out.print(&amp;quot;Enter the name of friend number &amp;quot; + i + &amp;quot;: &amp;quot;);
     friendName = keyboard.nextLine();
     file.println(friendName);
     System.out.println(friendName);
 }

    FileWriter fw = new FileWriter(&amp;quot;names.txt&amp;quot;, true);
    PrintWriter pw = new PrintWriter(fw);
    for (int i = 4; i &amp;lt;= 6; i++)
    {
        //Gets name of friend
        System.out.print(&amp;quot;Enter the name of friend number &amp;quot; + i + &amp;quot;: &amp;quot;);
        friendName = keyboard.nextLine();
        file.println(friendName);
        System.out.println(friendName);

    }

    file.close();
  }




<pre class="lang:java decode:1 " >import java.util.Scanner;
import java.io.*;

public class White
{
 public static void main(String[] args) throws IOException
 {
   // Gets the PrintWriter and Scanner classes
   PrintWriter file = new PrintWriter(&amp;quot;names.txt&amp;quot;);
   Scanner keyboard = new Scanner(System.in);
   String friendName = &amp;quot;&amp;quot;;
   // Gets data and writes it to a file
   for (int i = 1; i &amp;lt;= 3; i++)
 {
     //Gets name of friend
     System.out.print(&amp;quot;Enter the name of friend number &amp;quot; + i + &amp;quot;: &amp;quot;);
     friendName = keyboard.nextLine();
     file.println(friendName);
     System.out.println(friendName);
 }

    FileWriter fw = new FileWriter(&amp;quot;names.txt&amp;quot;, true);
    PrintWriter pw = new PrintWriter(fw);
    for (int i = 4; i &amp;lt;= 6; i++)
    {
        //Gets name of friend
        System.out.print(&amp;quot;Enter the name of friend number &amp;quot; + i + &amp;quot;: &amp;quot;);
        friendName = keyboard.nextLine();
        file.println(friendName);
        System.out.println(friendName);

    }

    file.close();
  }





}</pre>

<em>Fin.</em> <em>Whew</em>.
