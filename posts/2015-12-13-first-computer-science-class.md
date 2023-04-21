---
ID: 769
title: >
  Thoughts on My First Computer Science
  Class and Great News
# first-computer-science-class
author: Tiffany White
date: 2015-12-13 00:05:10
layout: post
link: >
  https://tiffanywhite.tech/first-computer-science-class/
published: true
tags:
  - computer science
  - Java
  - mentorship
  - Pitt
  - programming
  - university of pittsburgh
categories:
  - General Updates
  - Programming
---


<h2><img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/12/Class.jpeg" alt="CS_classes" /></h2>
<blockquote>
<blockquote>“People are always blaming their circumstances for what they are. I don’t believe in circumstances. The people who get on in this world are the people who get up and look for the circumstances they want, and if they can’t find them, make them.” ― George Bernard Shaw, <em>Mrs. Warren’s Profession</em></blockquote>
</blockquote>
What a <em>whirlwind</em> of emotion for me this semester. I really don’t know how I did everything I did this semester. I went to class, mostly (Chinese Thought got old for me and when my Computer Science professor called off I would just stay home. Sometimes I had appointments. Other times I was like <em>forget it</em>). I blogged, did two podcasts, had three guest appearances on podcasts, I learned at Free Code Camp and Treehouse, I wrote for Free Code Camp, I fired up my Jekyll <a href="https://twhite96.github.io/">blog</a> and wrote three articles there AND did my homework and all that comes with it. I did slack off at the gym which will be corrected next semester.

So about the Computer Science class.

It was easy at first. Super easy. And then…it slammed me in the face like a bag of bricks swung at my head. I got really good grades on my first two projects, an A and B. But we only built pieces of programs. And then the 3rd project.
<h3>Project 3, My Nemesis</h3>
<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/12/public-domain-images-free-stock-photos-woman-earth-globe-white-short-outdoors-water-reflection.jpg" alt="The_world" />
<blockquote>
<blockquote>“Well, if it can be thought, it can be done, a problem can be overcome,” ― E.A. Bucchianeri, Brushstrokes of a Gadfly</blockquote>
</blockquote>
Project 3 was me staying up late night after night, skipping my last two classes to solve the problem. It was a hangman game. It should have been simple. Ohhh, no. Our professor lets us know as soon as we went to the page it was extremely difficult. I started sketching out some pseudocode and it looked fairly simple from where I stood. On that day. But that was the last day it looked simple to me.

I stayed up until 6 am on Thursday, the last day of classes. I searched everywhere. The guy previously helping me on Code Newbie Slack was offline. I livestreamed my coding. Got some advice from a really nice guy. But it contradicted everything I was taught because he was more advanced than me; he was about to finish up his Computer Science BS. I searched all night and morning. I knew I needed to use an array, a for loop, and ArrayList as well, but the concept of arrays confuses me in a sense that I had five words and I needed to grab a character from those words, that I needed to access randomly. Somehow I got stuck on <em>how is Java going to know if the input matches the letter I am trying to pull out of this array</em>? I was completely overthinking it and it was due in one day.

Our prof emailed us collectively and told us that everyone seemed to be having trouble with Activity 1 out of 4 and we could turn Activity 1 in and tell her our thought process we could get partial credit. I had a working Activity 1 and a broken Activity 2 and turned them in with my thought processes. I expect a D or C on this thing.
<h3>Good Things Came from This</h3>
I wrote my professor this email:
<blockquote>
<blockquote>I stayed up all night working on Activity 2 which is why I didn’t come today. I am almost finished with it, and found that an Array and ArrayList would be the way to go. How to find a character in an array? That is where I’m stuck. But I may be able to get help.

I saw your email about people struggling with just Activity 1. I got it done insofar as I got the game to run once; if you guess right everything is printed out to the screen. If you guess wrong you get a tick. Then I ask the player to quit the game. I will be working on it again because now that I think about it I don’t think the game quits when the player wins. In any case, this tested my mettle as someone who wants to be a developer. I don’t think as an Intro student I was ready for this. I livestreamed doing the activity and some guy who is finishing up his BS in CS remarked it was some final project for Intro students. Heh. It doesn’t discourage me, however. I have the activity in a markdown file and uploaded to a site that parses markdown so any time I want to come back to it and work on it, I will. And I’ll probably do that during next semester, as I take the Intermediate class.

This class started out easy enough for me as I had experience with programming and got progressively harder. But what I learned is that I am understanding the interconnectivity between different languages and applying the principles like OOP to each project I work on. I will not be creating a class since it is due tomorrow at 1. But I understand how to do that and look forward to implementing it and working on it in the future.

Thanks for your wit, btw. It made coming to class enjoyable.

Thanks for the great semester and I’ll see you Tuesday for the final.

Best,

Tiffany</blockquote>
</blockquote>
Her response? <em>Unexpectedly phenomenal</em>.

<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/12/IMG_0369.png" alt="Prof" width="528" height="939" />
<h3>Even Better News</h3>
We had some back and forth and then she sent me this email:

<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/12/IMG_0380.png" alt="Mentor!" width="527" height="937" />

She wants to mentor me, yall. And this is a new beginning and a new era for my CS journey.

Just in case you’re curious, here is my code to Activity 1 and the repo will be listed below.
<pre class="lang:java decode:1 crayon-selected">/* Tiffany White
Rainbow Explosion, is a text-based game that is in the vein of hangman
This activity will introduce the player to the game and store any guesses
Date created: November 19, 2015
Date modified: December 9, 2015
*/

// Imports APIs
import java.util.Scanner;
import java.io.*;

// Class definition
public class P3A1_White_
{
// Main method
public static void main(String[] args)
{
Scanner keyboard = new Scanner(System.in);

// Welcome message
System.out.println("Welcome to Rainbow Explosion.You're going to guess a letter. If you guess a correct letter, you win." +
"If you guess wrong, you get a color tick. If you guess wrong 6 times, the color bomb explodes and you lose.");

// Prompt for input
System.out.println("Enter a letter.");

// Gets a char from the user as input
char letter = keyboard.next().charAt(0);

// Runs guessLetter1 method
guessLetter1("cat", letter);
}

// guessLetter1 method
public static char guessLetter1(String word, char letter1)
{   Scanner keyboard = new Scanner(System.in);
word = "cat";
word.indexOf(letter1);
if (letter1 == 'c' || letter1 == 'a' || letter1 == 't') {
System.out.println("You guessed a correct letter. You win! The secret word is\n cat. Press enter to quit.");
} else {
System.out.println("You guessed a letter wrong. You get a red tick.&amp;quot;
+ "_ _ _" + "Game over. Please press enter to quit.");
}

String quit = "";
quit = keyboard.nextLine();

return letter1;
}

}

//Use System.out.println to print out welcome message, player instructions, and a placeholder for the secret word to the console.
//Use a string to print out blank underscores to the screen to represent the secret word the player is trying to guess
//Secret Word: JavaScript

//Player must guess letter to see if letter is in secret word.
//Use Scanner class and Scanner oject to get input
//If player guesses a correct letter, underscores and correct letter need printed to screen
//Can use two print line statements to print underscores and word on new lines
//Player has won that round

//If letter is not in secret word, the letter guessed plus blank underscores and correctly
//Incorrect guesses get a tick
//Player can only accumulate 6 ticks or he loses game and bomb goes off
//Each incorrect guess gets a color that is printed to the screen using System.out.println, based on how many ticks the player gets



<h2><img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/12/Class.jpeg" alt="CS_classes" /></h2>
<blockquote>
<blockquote>“People are always blaming their circumstances for what they are. I don’t believe in circumstances. The people who get on in this world are the people who get up and look for the circumstances they want, and if they can’t find them, make them.” ― George Bernard Shaw, <em>Mrs. Warren’s Profession</em></blockquote>
</blockquote>
What a <em>whirlwind</em> of emotion for me this semester. I really don’t know how I did everything I did this semester. I went to class, mostly (Chinese Thought got old for me and when my Computer Science professor called off I would just stay home. Sometimes I had appointments. Other times I was like <em>forget it</em>). I blogged, did two podcasts, had three guest appearances on podcasts, I learned at Free Code Camp and Treehouse, I wrote for Free Code Camp, I fired up my Jekyll <a href="https://twhite96.github.io/">blog</a> and wrote three articles there AND did my homework and all that comes with it. I did slack off at the gym which will be corrected next semester.

So about the Computer Science class.

It was easy at first. Super easy. And then…it slammed me in the face like a bag of bricks swung at my head. I got really good grades on my first two projects, an A and B. But we only built pieces of programs. And then the 3rd project.
<h3>Project 3, My Nemesis</h3>
<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/12/public-domain-images-free-stock-photos-woman-earth-globe-white-short-outdoors-water-reflection.jpg" alt="The_world" />
<blockquote>
<blockquote>“Well, if it can be thought, it can be done, a problem can be overcome,” ― E.A. Bucchianeri, Brushstrokes of a Gadfly</blockquote>
</blockquote>
Project 3 was me staying up late night after night, skipping my last two classes to solve the problem. It was a hangman game. It should have been simple. Ohhh, no. Our professor lets us know as soon as we went to the page it was extremely difficult. I started sketching out some pseudocode and it looked fairly simple from where I stood. On that day. But that was the last day it looked simple to me.

I stayed up until 6 am on Thursday, the last day of classes. I searched everywhere. The guy previously helping me on Code Newbie Slack was offline. I livestreamed my coding. Got some advice from a really nice guy. But it contradicted everything I was taught because he was more advanced than me; he was about to finish up his Computer Science BS. I searched all night and morning. I knew I needed to use an array, a for loop, and ArrayList as well, but the concept of arrays confuses me in a sense that I had five words and I needed to grab a character from those words, that I needed to access randomly. Somehow I got stuck on <em>how is Java going to know if the input matches the letter I am trying to pull out of this array</em>? I was completely overthinking it and it was due in one day.

Our prof emailed us collectively and told us that everyone seemed to be having trouble with Activity 1 out of 4 and we could turn Activity 1 in and tell her our thought process we could get partial credit. I had a working Activity 1 and a broken Activity 2 and turned them in with my thought processes. I expect a D or C on this thing.
<h3>Good Things Came from This</h3>
I wrote my professor this email:
<blockquote>
<blockquote>I stayed up all night working on Activity 2 which is why I didn’t come today. I am almost finished with it, and found that an Array and ArrayList would be the way to go. How to find a character in an array? That is where I’m stuck. But I may be able to get help.

I saw your email about people struggling with just Activity 1. I got it done insofar as I got the game to run once; if you guess right everything is printed out to the screen. If you guess wrong you get a tick. Then I ask the player to quit the game. I will be working on it again because now that I think about it I don’t think the game quits when the player wins. In any case, this tested my mettle as someone who wants to be a developer. I don’t think as an Intro student I was ready for this. I livestreamed doing the activity and some guy who is finishing up his BS in CS remarked it was some final project for Intro students. Heh. It doesn’t discourage me, however. I have the activity in a markdown file and uploaded to a site that parses markdown so any time I want to come back to it and work on it, I will. And I’ll probably do that during next semester, as I take the Intermediate class.

This class started out easy enough for me as I had experience with programming and got progressively harder. But what I learned is that I am understanding the interconnectivity between different languages and applying the principles like OOP to each project I work on. I will not be creating a class since it is due tomorrow at 1. But I understand how to do that and look forward to implementing it and working on it in the future.

Thanks for your wit, btw. It made coming to class enjoyable.

Thanks for the great semester and I’ll see you Tuesday for the final.

Best,

Tiffany</blockquote>
</blockquote>
Her response? <em>Unexpectedly phenomenal</em>.

<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/12/IMG_0369.png" alt="Prof" width="528" height="939" />
<h3>Even Better News</h3>
We had some back and forth and then she sent me this email:

<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/12/IMG_0380.png" alt="Mentor!" width="527" height="937" />

She wants to mentor me, yall. And this is a new beginning and a new era for my CS journey.

Just in case you’re curious, here is my code to Activity 1 and the repo will be listed below.
<pre class="lang:java decode:1 crayon-selected">/* Tiffany White
Rainbow Explosion, is a text-based game that is in the vein of hangman
This activity will introduce the player to the game and store any guesses
Date created: November 19, 2015
Date modified: December 9, 2015
*/

// Imports APIs
import java.util.Scanner;
import java.io.*;

// Class definition
public class P3A1_White_
{
// Main method
public static void main(String[] args)
{
Scanner keyboard = new Scanner(System.in);

// Welcome message
System.out.println("Welcome to Rainbow Explosion.You're going to guess a letter. If you guess a correct letter, you win." +
"If you guess wrong, you get a color tick. If you guess wrong 6 times, the color bomb explodes and you lose.");

// Prompt for input
System.out.println("Enter a letter.");

// Gets a char from the user as input
char letter = keyboard.next().charAt(0);

// Runs guessLetter1 method
guessLetter1("cat", letter);
}

// guessLetter1 method
public static char guessLetter1(String word, char letter1)
{   Scanner keyboard = new Scanner(System.in);
word = "cat";
word.indexOf(letter1);
if (letter1 == 'c' || letter1 == 'a' || letter1 == 't') {
System.out.println("You guessed a correct letter. You win! The secret word is\n cat. Press enter to quit.");
} else {
System.out.println("You guessed a letter wrong. You get a red tick.&amp;quot;
+ "_ _ _" + "Game over. Please press enter to quit.");
}

String quit = "";
quit = keyboard.nextLine();

return letter1;
}

}

//Use System.out.println to print out welcome message, player instructions, and a placeholder for the secret word to the console.
//Use a string to print out blank underscores to the screen to represent the secret word the player is trying to guess
//Secret Word: JavaScript

//Player must guess letter to see if letter is in secret word.
//Use Scanner class and Scanner oject to get input
//If player guesses a correct letter, underscores and correct letter need printed to screen
//Can use two print line statements to print underscores and word on new lines
//Player has won that round

//If letter is not in secret word, the letter guessed plus blank underscores and correctly
//Incorrect guesses get a tick
//Player can only accumulate 6 ticks or he loses game and bomb goes off
//Each incorrect guess gets a color that is printed to the screen using System.out.println, based on how many ticks the player gets




//Player wins by guessing the word. Print to the console whe</pre>