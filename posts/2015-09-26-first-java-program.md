---
ID: 612
title: First Java Program and My Side Project
# first-java-program
author: Tiffany White
date: 2015-09-26 01:21:53
layout: post
link: >
  https://tiffanywhite.tech/first-java-program/
published: true
tags:
  - first program
  - Java
  - node
categories:
  - General Updates
---
<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/09/wpid-Screenshot-2015-09-26.jpg" alt="Console" width="596" height="514" />

<h3>My First Java Program</h3>

I breezed through my first Java project with relative ease and little help. I can thank the year of struggling with things like Python and JavaScript for that level of comfort. I did need help with Operator Precedence and I probably will still need help with it in the interim. I also reached out to Stack Overflow for an answer: how do you escape and % sign in a format string? I knew \ plus a letter escapes a lot of line breaks and characters but it <strong>doesn’t</strong> escape a % sign in a format string. So how do you escape a % sign? With 2 % signs. Interesting.

I got to experience the thrill of debugging something myself. That feeling was satisfying. I am learning.

So what does my first Java program look like? Well, because of the requirements, the code is really verbose. I don’t think I could use a method call at all to sort of DRY it out. I may be able to do that down the road.



<pre class="lang:java decode:1 " >/* Author name: Tiffany White
This is a budget calculator
Created date: September 22, 2015
Last modified date: September 24, 2015
*/

// This line imports the Scanner class to the document
import java.util.Scanner;

public class P1A5_White
{
 public static void main(String[] args)
 {
    // This line declares a scanner variable that will be used to get user input
    Scanner keyboard = new Scanner(System.in);

    // This line prints text to the screen
    System.out.println(&amp;quot;Welcome to Budget Calculator by Tiffany White. It will calculate your income and expenses.&amp;quot;);

    // The lines like these print instructions to the screen and then get user input
    System.out.print(&amp;quot;Enter your name.&amp;quot;);
    String name = keyboard.nextLine();

    System.out.print(&amp;quot;Enter your hourly rate.&amp;quot;);
    double hourlyRate = keyboard.nextDouble();

    System.out.print(&amp;quot;Enter your regular hours worked.&amp;quot;);
    int regularHoursWorked = keyboard.nextInt();

    System.out.print(&amp;quot;Enter your overtime hours worked.&amp;quot;);
    double overtimeHoursWorked = keyboard.nextDouble();

    // Clears keyboard buffer
    keyboard.nextLine();

    System.out.print(&amp;quot;Enter your rent.&amp;quot;);
    double rent = keyboard.nextDouble();

    System.out.print(&amp;quot;Enter your electric bill amount.&amp;quot;);
    double elecBill = keyboard.nextDouble();

    System.out.print(&amp;quot;Enter the amount of your water bill.&amp;quot;);
    double waterBill = keyboard.nextDouble();

    // Clears keyboard buffer
    keyboard.nextLine();

    System.out.print(&amp;quot;Enter the amount of your sewage bill.&amp;quot;);
    double sewBill = keyboard.nextDouble();

    System.out.print(&amp;quot;Enter the amount of your gas bill.&amp;quot;);
    double gasBill = keyboard.nextDouble();

    System.out.print(&amp;quot;Enter the amount of your food budget.&amp;quot;);
    double foodBudget = keyboard.nextDouble();

    // Clears keyboard buffer
    keyboard.nextLine();

    System.out.print(&amp;quot;Enter the amount of your entertainment expenses.&amp;quot;);
    double entertainment = keyboard.nextDouble();

    System.out.print(&amp;quot;Enter the amount of your car expenses.&amp;quot;);
    double carExpenses = keyboard.nextDouble();

    // Clears keyboard buffer
    keyboard.nextLine();

    // This line calculates the user's gross pay
    double grossPay = (regularHoursWorked + overtimeHoursWorked) * hourlyRate;

    //This format string prints out the reults of the grossPay calculation and returns a new line
    System.out.printf(&amp;quot;Your gross pay is &amp;quot; + &amp;quot;%.2f\%%, grossPay);

    // This line calculates expenses/deductions
    double deductions = (rent + elecBill + waterBill + sewBill + gasBill
    + foodBudget + entertainment + carExpenses);

    // This line declares variables in the double primitive data type
    double rentPercentage, elecBillPercentage, waterBillPercentage, sewBillPercentage,
    gasBillPercentage, foodBudgetPercentage, entertainmentPercentage, carExpensesPercentage;

    /* The following lines of code calculate the percentages of each deduction against
    the user's gross pay and prints out the results to the console, returning a new line
    */
    rentPercentage = (rent * 100) / grossPay;
System.out.printf(&amp;quot;The amount of your gross pay that goes to rent is %.2f%%.\n&amp;quot;, rentPercentage);

elecBillPercentage = (elecBill * 100) / grossPay;
    System.out.printf(&amp;quot;The amount of your gross pay that goes to your electric bill is %.2f%%.\n&amp;quot;, elecBillPercentage);

    waterBillPercentage = (waterBill * 100) / grossPay;
    System.out.printf(&amp;quot;The amount of your gross pay that goes to your water bill is %.2f%%.\n&amp;quot;, waterBillPercentage);

    sewBillPercentage = (sewBill * 100) / grossPay;
    System.out.printf(&amp;quot;The amount of your gross pay that goes to sewage is %.2f%%.\n&amp;quot;, sewBillPercentage);

    gasBillPercentage = (gasBill * 100) / grossPay;
    System.out.printf(&amp;quot;The amount of your gross pay that goes to gas is %.2f%%.\n&amp;quot;, gasBillPercentage);

    foodBudgetPercentage = (foodBudget * 100) / grossPay;
    System.out.printf(&amp;quot;The amount of your gross pay that goes to food is %.2f%%.\n&amp;quot;, foodBudgetPercentage);

    entertainmentPercentage = (entertainment * 100) / grossPay;
    System.out.printf(&amp;quot;The amount of your gross pay that goes to entertainment is %.2f%%.\n&amp;quot;, entertainmentPercentage);

    carExpensesPercentage = (carExpenses * 100) / grossPay;
    System.out.printf(&amp;quot;The amount of your gross pay that goes to your car is %.2f%%.\n&amp;quot;, carExpensesPercentage);

    // This line calculates net pay after deductions are subtracted from the gross pay
    double netPay = (grossPay - deductions);

    // This format string prints out the net pay to the console and returns a new line
    System.out.printf(&amp;quot;Your net pay after deductions is $&amp;quot; + &amp;quot;%.2f.\n&amp;quot;, netPay);


  }



<pre class="lang:java decode:1 " >/* Author name: Tiffany White
This is a budget calculator
Created date: September 22, 2015
Last modified date: September 24, 2015
*/

// This line imports the Scanner class to the document
import java.util.Scanner;

public class P1A5_White
{
 public static void main(String[] args)
 {
    // This line declares a scanner variable that will be used to get user input
    Scanner keyboard = new Scanner(System.in);

    // This line prints text to the screen
    System.out.println(&amp;quot;Welcome to Budget Calculator by Tiffany White. It will calculate your income and expenses.&amp;quot;);

    // The lines like these print instructions to the screen and then get user input
    System.out.print(&amp;quot;Enter your name.&amp;quot;);
    String name = keyboard.nextLine();

    System.out.print(&amp;quot;Enter your hourly rate.&amp;quot;);
    double hourlyRate = keyboard.nextDouble();

    System.out.print(&amp;quot;Enter your regular hours worked.&amp;quot;);
    int regularHoursWorked = keyboard.nextInt();

    System.out.print(&amp;quot;Enter your overtime hours worked.&amp;quot;);
    double overtimeHoursWorked = keyboard.nextDouble();

    // Clears keyboard buffer
    keyboard.nextLine();

    System.out.print(&amp;quot;Enter your rent.&amp;quot;);
    double rent = keyboard.nextDouble();

    System.out.print(&amp;quot;Enter your electric bill amount.&amp;quot;);
    double elecBill = keyboard.nextDouble();

    System.out.print(&amp;quot;Enter the amount of your water bill.&amp;quot;);
    double waterBill = keyboard.nextDouble();

    // Clears keyboard buffer
    keyboard.nextLine();

    System.out.print(&amp;quot;Enter the amount of your sewage bill.&amp;quot;);
    double sewBill = keyboard.nextDouble();

    System.out.print(&amp;quot;Enter the amount of your gas bill.&amp;quot;);
    double gasBill = keyboard.nextDouble();

    System.out.print(&amp;quot;Enter the amount of your food budget.&amp;quot;);
    double foodBudget = keyboard.nextDouble();

    // Clears keyboard buffer
    keyboard.nextLine();

    System.out.print(&amp;quot;Enter the amount of your entertainment expenses.&amp;quot;);
    double entertainment = keyboard.nextDouble();

    System.out.print(&amp;quot;Enter the amount of your car expenses.&amp;quot;);
    double carExpenses = keyboard.nextDouble();

    // Clears keyboard buffer
    keyboard.nextLine();

    // This line calculates the user's gross pay
    double grossPay = (regularHoursWorked + overtimeHoursWorked) * hourlyRate;

    //This format string prints out the reults of the grossPay calculation and returns a new line
    System.out.printf(&amp;quot;Your gross pay is &amp;quot; + &amp;quot;%.2f\%%, grossPay);

    // This line calculates expenses/deductions
    double deductions = (rent + elecBill + waterBill + sewBill + gasBill
    + foodBudget + entertainment + carExpenses);

    // This line declares variables in the double primitive data type
    double rentPercentage, elecBillPercentage, waterBillPercentage, sewBillPercentage,
    gasBillPercentage, foodBudgetPercentage, entertainmentPercentage, carExpensesPercentage;

    /* The following lines of code calculate the percentages of each deduction against
    the user's gross pay and prints out the results to the console, returning a new line
    */
    rentPercentage = (rent * 100) / grossPay;
System.out.printf(&amp;quot;The amount of your gross pay that goes to rent is %.2f%%.\n&amp;quot;, rentPercentage);

elecBillPercentage = (elecBill * 100) / grossPay;
    System.out.printf(&amp;quot;The amount of your gross pay that goes to your electric bill is %.2f%%.\n&amp;quot;, elecBillPercentage);

    waterBillPercentage = (waterBill * 100) / grossPay;
    System.out.printf(&amp;quot;The amount of your gross pay that goes to your water bill is %.2f%%.\n&amp;quot;, waterBillPercentage);

    sewBillPercentage = (sewBill * 100) / grossPay;
    System.out.printf(&amp;quot;The amount of your gross pay that goes to sewage is %.2f%%.\n&amp;quot;, sewBillPercentage);

    gasBillPercentage = (gasBill * 100) / grossPay;
    System.out.printf(&amp;quot;The amount of your gross pay that goes to gas is %.2f%%.\n&amp;quot;, gasBillPercentage);

    foodBudgetPercentage = (foodBudget * 100) / grossPay;
    System.out.printf(&amp;quot;The amount of your gross pay that goes to food is %.2f%%.\n&amp;quot;, foodBudgetPercentage);

    entertainmentPercentage = (entertainment * 100) / grossPay;
    System.out.printf(&amp;quot;The amount of your gross pay that goes to entertainment is %.2f%%.\n&amp;quot;, entertainmentPercentage);

    carExpensesPercentage = (carExpenses * 100) / grossPay;
    System.out.printf(&amp;quot;The amount of your gross pay that goes to your car is %.2f%%.\n&amp;quot;, carExpensesPercentage);

    // This line calculates net pay after deductions are subtracted from the gross pay
    double netPay = (grossPay - deductions);

    // This format string prints out the net pay to the console and returns a new line
    System.out.printf(&amp;quot;Your net pay after deductions is $&amp;quot; + &amp;quot;%.2f.\n&amp;quot;, netPay);


  }




}</pre>

See what I mean by verbose? But we’re beginners so I guess she wants to make sure we know what we’re doing. ¯&#95;(ツ)_/¯

<h3>My Side Project</h3>

So I had the chance this week to work on my address book. I am looking for ways to use Google’s Contacts API and am in the process of looking for API courses or videos. I also want to write my own RESTful APIs eventually so I need to get cracking on the learning of that.

I am only taking 6 credits so I have some in between time. It won’t be that way next fall as I try to get scholarships and with most scholarships, you have to be 12 credits to get them. It doesn’t bother me– mostly all my gen eds are completed so I can focus on Computer Science for the next two or three years.

Anyway, I’ve used some simple Bootstrap to set up a few of the pages. Here’s the static html code for the index page:



<pre class="lang:html decode:1 " >
&amp;lt;html lang=&amp;quot;en&amp;quot;&amp;gt;
&amp;lt;head&amp;gt;
    &amp;lt;meta charset=&amp;quot;UTF-8&amp;quot;&amp;gt;
    &amp;lt;!-- Latest compiled and minified CSS --&amp;gt;
    &amp;lt;link rel=&amp;quot;stylesheet&amp;quot; href=&amp;quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css&amp;quot;&amp;gt;

    &amp;lt;!-- Optional theme --&amp;gt;
    &amp;lt;link rel=&amp;quot;stylesheet&amp;quot; href=&amp;quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css&amp;quot;&amp;gt;

    &amp;lt;!-- Latest compiled and minified JavaScript --&amp;gt;
    &amp;lt;script src=&amp;quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js&amp;quot;&amp;gt;&amp;lt;/script&amp;gt;
    &amp;lt;link rel=&amp;quot;stylesheet&amp;quot; type=&amp;quot;text/css&amp;quot; href=&amp;quot;stylesheet.css&amp;quot;&amp;gt;
&amp;lt;/head&amp;gt;
&amp;lt;body&amp;gt;

&amp;lt;div class=&amp;quot;navbar-header&amp;quot;&amp;gt;

&amp;lt;ul class=&amp;quot;nav nav-tabs&amp;quot;&amp;gt;

&amp;lt;li role=&amp;quot;presentation&amp;quot; class=&amp;quot;active&amp;quot;&amp;gt;&amp;lt;a href=&amp;quot;index.html&amp;quot;&amp;gt;Contacts&amp;lt;/a&amp;gt;&amp;lt;/li&amp;gt;


&amp;lt;li role=&amp;quot;presentation&amp;quot;&amp;gt;&amp;lt;a href=&amp;quot;addContacts.html&amp;quot;&amp;gt;Add Contacts&amp;lt;/a&amp;gt;&amp;lt;/li&amp;gt;


&amp;lt;li role=&amp;quot;presentation&amp;quot;&amp;gt;&amp;lt;a href=&amp;quot;Phone.html&amp;quot;&amp;gt;Phone&amp;lt;/a&amp;gt;&amp;lt;/li&amp;gt;


&amp;lt;li role=&amp;quot;presentation&amp;quot;&amp;gt;&amp;lt;a href=&amp;quot;Email.html&amp;quot;&amp;gt;Email&amp;lt;/a&amp;gt; &amp;lt;/li&amp;gt;

      &amp;lt;/ul&amp;gt;

  &amp;lt;/div&amp;gt;


&amp;lt;div class=&amp;quot;col-sm-3 col-md-3 pull-right&amp;quot;&amp;gt;

&amp;lt;form class=&amp;quot;navbar-form&amp;quot; role=&amp;quot;search&amp;quot;&amp;gt;

&amp;lt;div class=&amp;quot;input-group&amp;quot;&amp;gt;
              &amp;lt;input type=&amp;quot;text&amp;quot; class=&amp;quot;form-control&amp;quot; placeholder=&amp;quot;Search&amp;quot; name=&amp;quot;srch-term&amp;quot; id=&amp;quot;srch-term&amp;quot;&amp;gt;

&amp;lt;div class=&amp;quot;input-group-btn&amp;quot;&amp;gt;
                  &amp;lt;button class=&amp;quot;btn btn-default&amp;quot; type=&amp;quot;submit&amp;quot;&amp;gt;&amp;lt;i class=&amp;quot;glyphicon glyphicon-search&amp;quot;&amp;gt;&amp;lt;/i&amp;gt;&amp;lt;/button&amp;gt;
              &amp;lt;/div&amp;gt;

          &amp;lt;/div&amp;gt;

      &amp;lt;/form&amp;gt;

  &amp;lt;/div&amp;gt;


&amp;lt;div class=&amp;quot;jumbotron&amp;quot;&amp;gt;

&amp;lt;h1&amp;gt;My Contacts&amp;lt;/h1&amp;gt;



Add your contacts to keep up with potential sales leads, anniversaries, birthdays, etc. You can add it all right here.

  &amp;lt;/div&amp;gt;


&amp;lt;/body&amp;gt;
&amp;lt;script type=&amp;quot;text/javascript&amp;quot; src=&amp;quot;main.js&amp;quot;&amp;gt;&amp;lt;/script&amp;gt;



<pre class="lang:html decode:1 " >
&amp;lt;html lang=&amp;quot;en&amp;quot;&amp;gt;
&amp;lt;head&amp;gt;
    &amp;lt;meta charset=&amp;quot;UTF-8&amp;quot;&amp;gt;
    &amp;lt;!-- Latest compiled and minified CSS --&amp;gt;
    &amp;lt;link rel=&amp;quot;stylesheet&amp;quot; href=&amp;quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css&amp;quot;&amp;gt;

    &amp;lt;!-- Optional theme --&amp;gt;
    &amp;lt;link rel=&amp;quot;stylesheet&amp;quot; href=&amp;quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css&amp;quot;&amp;gt;

    &amp;lt;!-- Latest compiled and minified JavaScript --&amp;gt;
    &amp;lt;script src=&amp;quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js&amp;quot;&amp;gt;&amp;lt;/script&amp;gt;
    &amp;lt;link rel=&amp;quot;stylesheet&amp;quot; type=&amp;quot;text/css&amp;quot; href=&amp;quot;stylesheet.css&amp;quot;&amp;gt;
&amp;lt;/head&amp;gt;
&amp;lt;body&amp;gt;

&amp;lt;div class=&amp;quot;navbar-header&amp;quot;&amp;gt;

&amp;lt;ul class=&amp;quot;nav nav-tabs&amp;quot;&amp;gt;

&amp;lt;li role=&amp;quot;presentation&amp;quot; class=&amp;quot;active&amp;quot;&amp;gt;&amp;lt;a href=&amp;quot;index.html&amp;quot;&amp;gt;Contacts&amp;lt;/a&amp;gt;&amp;lt;/li&amp;gt;


&amp;lt;li role=&amp;quot;presentation&amp;quot;&amp;gt;&amp;lt;a href=&amp;quot;addContacts.html&amp;quot;&amp;gt;Add Contacts&amp;lt;/a&amp;gt;&amp;lt;/li&amp;gt;


&amp;lt;li role=&amp;quot;presentation&amp;quot;&amp;gt;&amp;lt;a href=&amp;quot;Phone.html&amp;quot;&amp;gt;Phone&amp;lt;/a&amp;gt;&amp;lt;/li&amp;gt;


&amp;lt;li role=&amp;quot;presentation&amp;quot;&amp;gt;&amp;lt;a href=&amp;quot;Email.html&amp;quot;&amp;gt;Email&amp;lt;/a&amp;gt; &amp;lt;/li&amp;gt;

      &amp;lt;/ul&amp;gt;

  &amp;lt;/div&amp;gt;


&amp;lt;div class=&amp;quot;col-sm-3 col-md-3 pull-right&amp;quot;&amp;gt;

&amp;lt;form class=&amp;quot;navbar-form&amp;quot; role=&amp;quot;search&amp;quot;&amp;gt;

&amp;lt;div class=&amp;quot;input-group&amp;quot;&amp;gt;
              &amp;lt;input type=&amp;quot;text&amp;quot; class=&amp;quot;form-control&amp;quot; placeholder=&amp;quot;Search&amp;quot; name=&amp;quot;srch-term&amp;quot; id=&amp;quot;srch-term&amp;quot;&amp;gt;

&amp;lt;div class=&amp;quot;input-group-btn&amp;quot;&amp;gt;
                  &amp;lt;button class=&amp;quot;btn btn-default&amp;quot; type=&amp;quot;submit&amp;quot;&amp;gt;&amp;lt;i class=&amp;quot;glyphicon glyphicon-search&amp;quot;&amp;gt;&amp;lt;/i&amp;gt;&amp;lt;/button&amp;gt;
              &amp;lt;/div&amp;gt;

          &amp;lt;/div&amp;gt;

      &amp;lt;/form&amp;gt;

  &amp;lt;/div&amp;gt;


&amp;lt;div class=&amp;quot;jumbotron&amp;quot;&amp;gt;

&amp;lt;h1&amp;gt;My Contacts&amp;lt;/h1&amp;gt;



Add your contacts to keep up with potential sales leads, anniversaries, birthdays, etc. You can add it all right here.

  &amp;lt;/div&amp;gt;


&amp;lt;/body&amp;gt;
&amp;lt;script type=&amp;quot;text/javascript&amp;quot; src=&amp;quot;main.js&amp;quot;&amp;gt;&amp;lt;/script&amp;gt;




&amp;lt;/html&amp;gt;</pre>

It’s going to be a Node app hosted on Heroku. I can’t wait to get it finished.