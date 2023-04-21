---
ID: 1226
title: Leveling Up as a Programmer
# leveling-up-as-a-programmer
author: Tiffany White
date: 2016-07-31 00:31:04
layout: post
link: >
  https://tiffanywhite.tech/leveling-up-as-a-programmer/
published: true
tags: uncategorized
categories:
  - General Updates
---


<img src="https://helloburgh.me/wp-content/uploads/2016/07/laptop-cellphone.png" alt="laptop-cellphone" width="732" height="488" class="aligncenter size-full wp-image-1229" />

I’ve noticed something these past couple days:

<em>I am leveling up as a programmer</em>.

My understanding of certain concepts is increasing. I talk about simpler concepts with clarity and authority.

Building the Random Quote Generator and having to Google everything and get feedback from different places helped me not only grok the simple and some intermediate stuff, it boosted my confidence as well. I wasn’t lacking for confidence, because if I was, I wouldn’t have approached the Pitt alum for that project that fell through. But I digress.
<h2>Looking Over Old Assignments</h2>
I was trying to figure out which projects to showcase on my GitHub. I learned how to host my <a href="https://twhite96.github.io/RandQuoteGen/" target="_blank">front-end projects</a> on GitHub <a href="https://twhite96.github.io/CarlSaganTribute/" target="_blank">Project Pages</a> and now have a place to point people to other than CodePen.

So while I was in my GitHub I went through my CS 0401 assignments repo that I had made private as requested by the professor (I am showcasing it now so I made it public again). I looked at the Bookcase project and instantly knew what I could have done better. For instance take this code:


<pre class="lang:java decode:true " >import java.util.Scanner;

public class Bookstore {

    Scanner keyboard;

    public Bookstore() {
        // initialise my scanner
        this.keyboard = new Scanner(System.in);
    }

    public static void main(String[] args) {
        // I create a new point of sale
        Bookstore b = new Bookstore();
        // start selling things

        boolean customer;

            // 1 - Create a new cart
         Cart cart = new Cart();

         customer = b.moreCustomers();

         b.showInventory();
         b.chooseFromMenu();

         while(b.moreCustomers()) {

              cart.addABook();
              cart.removeABook();
              cart.addBookmarks();
              cart.removeBookmarks();
              cart.addPaintings();
              cart.removeAPainting();
        }
    }</pre>


<strong>Absolutely heinous</strong>.

I should not have named the constructor the same as the class. The constructor is a type in the Java namespace and the method is a different part of the Java naming convention altogether. It also isn’t allowed because I used <code>public Bookstore()</code> instead of <code>public void Bookstore()</code> which the <code>void</code> return type means it will not return a value. However if you look at it, I am expecting the constructor to return a value because I omitted the <code>void</code> return type. You <em>cannot</em> call a constructor with the same name as a class with it returning a value. That’s not how Java works.

I also didn’t call the methods I created inside of <code>main</code>. I don’t know why, but I didn’t finish it so maybe that has something to do with it. I think I did finish it but didn’t get it to run.
<h2>Debugging is Easier</h2>
I had to troubleshoot a couple problems with hosting my projects on GitHub Project Pages, one being mixed content when serving up the page over <code>https</code>. I didn’t know why my project was insecure. It kept getting blocked in every browser I tried. It took an hour to figure out what that error meant: I was serving up a mixture of <code>https</code> and <code>http</code> scripts in the same document. I changed the API call to <code>https</code> and my Random Quote Generator project became secure again.
<h2>Thoughts</h2>



<img src="https://helloburgh.me/wp-content/uploads/2016/07/laptop-cellphone.png" alt="laptop-cellphone" width="732" height="488" class="aligncenter size-full wp-image-1229" />

I’ve noticed something these past couple days:

<em>I am leveling up as a programmer</em>.

My understanding of certain concepts is increasing. I talk about simpler concepts with clarity and authority.

Building the Random Quote Generator and having to Google everything and get feedback from different places helped me not only grok the simple and some intermediate stuff, it boosted my confidence as well. I wasn’t lacking for confidence, because if I was, I wouldn’t have approached the Pitt alum for that project that fell through. But I digress.
<h2>Looking Over Old Assignments</h2>
I was trying to figure out which projects to showcase on my GitHub. I learned how to host my <a href="https://twhite96.github.io/RandQuoteGen/" target="_blank">front-end projects</a> on GitHub <a href="https://twhite96.github.io/CarlSaganTribute/" target="_blank">Project Pages</a> and now have a place to point people to other than CodePen.

So while I was in my GitHub I went through my CS 0401 assignments repo that I had made private as requested by the professor (I am showcasing it now so I made it public again). I looked at the Bookcase project and instantly knew what I could have done better. For instance take this code:


<pre class="lang:java decode:true " >import java.util.Scanner;

public class Bookstore {

    Scanner keyboard;

    public Bookstore() {
        // initialise my scanner
        this.keyboard = new Scanner(System.in);
    }

    public static void main(String[] args) {
        // I create a new point of sale
        Bookstore b = new Bookstore();
        // start selling things

        boolean customer;

            // 1 - Create a new cart
         Cart cart = new Cart();

         customer = b.moreCustomers();

         b.showInventory();
         b.chooseFromMenu();

         while(b.moreCustomers()) {

              cart.addABook();
              cart.removeABook();
              cart.addBookmarks();
              cart.removeBookmarks();
              cart.addPaintings();
              cart.removeAPainting();
        }
    }</pre>


<strong>Absolutely heinous</strong>.

I should not have named the constructor the same as the class. The constructor is a type in the Java namespace and the method is a different part of the Java naming convention altogether. It also isn’t allowed because I used <code>public Bookstore()</code> instead of <code>public void Bookstore()</code> which the <code>void</code> return type means it will not return a value. However if you look at it, I am expecting the constructor to return a value because I omitted the <code>void</code> return type. You <em>cannot</em> call a constructor with the same name as a class with it returning a value. That’s not how Java works.

I also didn’t call the methods I created inside of <code>main</code>. I don’t know why, but I didn’t finish it so maybe that has something to do with it. I think I did finish it but didn’t get it to run.
<h2>Debugging is Easier</h2>
I had to troubleshoot a couple problems with hosting my projects on GitHub Project Pages, one being mixed content when serving up the page over <code>https</code>. I didn’t know why my project was insecure. It kept getting blocked in every browser I tried. It took an hour to figure out what that error meant: I was serving up a mixture of <code>https</code> and <code>http</code> scripts in the same document. I changed the API call to <code>https</code> and my Random Quote Generator project became secure again.
<h2>Thoughts</h2>




I still have a long way to go. I am warming up to Java as JavaScript’s ES6 syntax mimics a lot of the OOP naming conventions in Java which makes switching back and forth between them as an intermediate programmer easy enough, even though JavaScript isn’t technically OOP and the <code>class</code> keyword isn’t the same as in Java. I am really excited right now. I am growing and it feels good after a year and a half of learning.