---
ID: 869
title: >
  Thrown Into the Fire, or, The Blank IDE
  in CS 0401
# the-blank-ide-in-cs-0401
author: Tiffany White
date: 2016-01-22 02:56:54
layout: post
link: >
  https://tiffanywhite.tech/the-blank-ide-in-cs-0401/
published: true
tags: uncategorized
categories:
  - Programming
  - Semester Updates
  - "Tiffany's Posts"
---


<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/01/JPEG-image-A22950F8B471-1.jpeg" alt="fire" />

First let me say, the class with <a href="https://twitter.com/billlaboon">Licence to Bill</a>, my professor, kills it every class. Seriously. If you’re a Pitt student and haven’t taken him, <strong>do it</strong>. Like <strong>now</strong>. And get yourself an IDE. More on that later.

We are moving along quickly right now. I am not even sure if we are doing Java I/O as I missed a class but whatever. Our first assignment was like a slap in the face to me last night after being out in the snow and cold for three hours waiting for the bus. I was exhausted and the instructions looked like gibberish.

So I started on it today. Here are the instructions:

<blockquote>You have opened a bookstore, and have decided to write your own point-of-sale system to sell books. You sell several items:
<ol>
    <li>Books ($5.00 each)</li>
    <li>Bookmarks ($1.00 each, or a pack of six for $5.00)</li>
    <li>Paintings of Books ($100.00 each)</li>
</ol>
Customers can purchase any number of each item. However, if a customer purchases bookmarks, it will always give them packs if possible, thus allowing for a cheaper price. For example, if somebody buys 3 bookmarks, they will not buy a pack - it will cost them $3.00. However, if they buy 7, then they will automatically get one pack and one extra bookmark, for a total cost of $5.00 + $1.00 = $6.00 - <em>not</em> $7.00.

We will assume that you are operating the bookstore in Oakland, so you will need to add 7% additional tax (Pennsylvania and Allegheny County taxes) on all sales. For example, if somebody buys one book at $5.00, then the total cost should be $5.00 + $0.35 in tax, or $5.35.

All values should be rounded to the nearest cent.

Additionally, in order to attract business, you are running a promotion: every third customer will get 10% off their order (before tax). This will start with the third customer; the first customer will not get a discount, the second customer will not get a discount, but the third one, sixth one, ninth one, etc. will. For example, if the third customer buys a book, they would get $0.50 off (10% of $5.00), for a total of $4.50, and then tax would be added ($4.185, which would be rounded to $4.82).

If the customer does not get a discount, then along with the receipt, the message “You did not get a discount! Better luck next time!” If the customer does get a discount, display the discount amount and the message “You won a 10% discount!”

You will write a Java program that runs a point-of-sale service for your bookstore. The program should do the following:
<ol>
    <li>Ask if another customer is waiting in line, and have the user enter an integer - 1 for yes and 2 for no.</li>
    <li>If no customers are waiting in line, exit the program.</li>
    <li>Show the customer a menu which has all items and their prices listed, as well as options to show the current order and check out. Customers should be able to modify their order (for example, if they accidentally enter that they want to purchase four books, then put one back, they should be able to modify that to three books).</li>
    <li>Showing the current order should show how many of each item the customer is going to purchase.</li>
    <li>Checking out will consist of showing a tabulated receipt with how many of each item was purchased. If an item was not purchased, it should not display (so there should be no “Books: 0 $0.00” lines. If the “Third Customer Discount” was applied, it should show that as a separate (before tax) line. It should include a subtotal (before tax), and then a total (after tax).</li>
    <li>Finally, ask the user to pay for it. The system should accept a floating-point number from the user. If it is less than the cost of the customer’s purchase, the system should print “Not enough money - please re-enter” and ask again. The system should continue to do this until a valid amount of money (the cost of the total or greater) is entered. Once a valid amount of money is entered, indicate the change given (for example, if the purchase is $96.50 and the customer gives $100.00, show that the change should be $3.50).</li>
</ol>
</blockquote>

I sat down at the IDE. My mind drew a blank. I had to look at examples and old snippets in SnippetsLab to get a sense of syntax. This makes no sense to me as I was tweaking code <em>just last week</em>. ¯<em>(ツ)</em>/¯

Anyway, I got it rolling. Bill’s code samples gave me a jumpstart and I have a working loop. I can’t really share too much code here as we have mandatory private GitHub repositories to work in but I <em>will</em> share a screenshot of my IDE, which brings me to my next point…

<h3>IDEs. They’re Extraordinary.</h3>

<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/01/Screenshot2016-01-22_12-31-00_AM.jpg" alt="IDEA" width="689" height="451" />

In the last post, I mentioned getting a screenshot of IntelliJ IDEA from a guy in Slack. I tried to get it working but still couldn’t get it to debug. I did some GoogleFu and found out that I didn’t have the root directory specified and how to set up a module configuration. I then did this for WebStorm, where I do my JavaScript coding and am off to the races. Even my theme works now.

I seriously underestimated the power of the IDE. Of course, it is a tool like anything else and can be used as a crutch instead of a learning tool. But I know about

<pre class="lang:java decode:1 " >
System.out.println();
</pre>

I just think it’s far more efficient to get the runtime and compile errors without muddying up my code with a bunch of println statements. Setting breakpoints solves that issue.

Bill doesn’t want those .idea folders or .iml files so I added them to my gitignore file and none of those were upload to the repository. Use your gitignore files, friends!




<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/01/JPEG-image-A22950F8B471-1.jpeg" alt="fire" />

First let me say, the class with <a href="https://twitter.com/billlaboon">Licence to Bill</a>, my professor, kills it every class. Seriously. If you’re a Pitt student and haven’t taken him, <strong>do it</strong>. Like <strong>now</strong>. And get yourself an IDE. More on that later.

We are moving along quickly right now. I am not even sure if we are doing Java I/O as I missed a class but whatever. Our first assignment was like a slap in the face to me last night after being out in the snow and cold for three hours waiting for the bus. I was exhausted and the instructions looked like gibberish.

So I started on it today. Here are the instructions:

<blockquote>You have opened a bookstore, and have decided to write your own point-of-sale system to sell books. You sell several items:
<ol>
    <li>Books ($5.00 each)</li>
    <li>Bookmarks ($1.00 each, or a pack of six for $5.00)</li>
    <li>Paintings of Books ($100.00 each)</li>
</ol>
Customers can purchase any number of each item. However, if a customer purchases bookmarks, it will always give them packs if possible, thus allowing for a cheaper price. For example, if somebody buys 3 bookmarks, they will not buy a pack - it will cost them $3.00. However, if they buy 7, then they will automatically get one pack and one extra bookmark, for a total cost of $5.00 + $1.00 = $6.00 - <em>not</em> $7.00.

We will assume that you are operating the bookstore in Oakland, so you will need to add 7% additional tax (Pennsylvania and Allegheny County taxes) on all sales. For example, if somebody buys one book at $5.00, then the total cost should be $5.00 + $0.35 in tax, or $5.35.

All values should be rounded to the nearest cent.

Additionally, in order to attract business, you are running a promotion: every third customer will get 10% off their order (before tax). This will start with the third customer; the first customer will not get a discount, the second customer will not get a discount, but the third one, sixth one, ninth one, etc. will. For example, if the third customer buys a book, they would get $0.50 off (10% of $5.00), for a total of $4.50, and then tax would be added ($4.185, which would be rounded to $4.82).

If the customer does not get a discount, then along with the receipt, the message “You did not get a discount! Better luck next time!” If the customer does get a discount, display the discount amount and the message “You won a 10% discount!”

You will write a Java program that runs a point-of-sale service for your bookstore. The program should do the following:
<ol>
    <li>Ask if another customer is waiting in line, and have the user enter an integer - 1 for yes and 2 for no.</li>
    <li>If no customers are waiting in line, exit the program.</li>
    <li>Show the customer a menu which has all items and their prices listed, as well as options to show the current order and check out. Customers should be able to modify their order (for example, if they accidentally enter that they want to purchase four books, then put one back, they should be able to modify that to three books).</li>
    <li>Showing the current order should show how many of each item the customer is going to purchase.</li>
    <li>Checking out will consist of showing a tabulated receipt with how many of each item was purchased. If an item was not purchased, it should not display (so there should be no “Books: 0 $0.00” lines. If the “Third Customer Discount” was applied, it should show that as a separate (before tax) line. It should include a subtotal (before tax), and then a total (after tax).</li>
    <li>Finally, ask the user to pay for it. The system should accept a floating-point number from the user. If it is less than the cost of the customer’s purchase, the system should print “Not enough money - please re-enter” and ask again. The system should continue to do this until a valid amount of money (the cost of the total or greater) is entered. Once a valid amount of money is entered, indicate the change given (for example, if the purchase is $96.50 and the customer gives $100.00, show that the change should be $3.50).</li>
</ol>
</blockquote>

I sat down at the IDE. My mind drew a blank. I had to look at examples and old snippets in SnippetsLab to get a sense of syntax. This makes no sense to me as I was tweaking code <em>just last week</em>. ¯<em>(ツ)</em>/¯

Anyway, I got it rolling. Bill’s code samples gave me a jumpstart and I have a working loop. I can’t really share too much code here as we have mandatory private GitHub repositories to work in but I <em>will</em> share a screenshot of my IDE, which brings me to my next point…

<h3>IDEs. They’re Extraordinary.</h3>

<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/01/Screenshot2016-01-22_12-31-00_AM.jpg" alt="IDEA" width="689" height="451" />

In the last post, I mentioned getting a screenshot of IntelliJ IDEA from a guy in Slack. I tried to get it working but still couldn’t get it to debug. I did some GoogleFu and found out that I didn’t have the root directory specified and how to set up a module configuration. I then did this for WebStorm, where I do my JavaScript coding and am off to the races. Even my theme works now.

I seriously underestimated the power of the IDE. Of course, it is a tool like anything else and can be used as a crutch instead of a learning tool. But I know about

<pre class="lang:java decode:1 " >
System.out.println();
</pre>

I just think it’s far more efficient to get the runtime and compile errors without muddying up my code with a bunch of println statements. Setting breakpoints solves that issue.

Bill doesn’t want those .idea folders or .iml files so I added them to my gitignore file and none of those were upload to the repository. Use your gitignore files, friends!





I have a lot of respect for the text editors I’ve worked in and I probably will stick with VS Code and the <em>plethora</em> of excellent JavaScript tooling modules out there for writing JavaScript heavy apps, no offense to WebStorm. But for code that doesn’t have the tooling JavaScript has, I will stick with IDEs like IntelliJ and RubyMine.