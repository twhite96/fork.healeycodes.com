---
ID: 856
title: Rainbow Explosion Hangman App
# rainbow-explosion-hangman
author: Tiffany White
date: 2016-01-13 22:51:11
layout: post
link: >
  https://tiffanywhite.tech/rainbow-explosion-hangman/
published: true
tags: uncategorized
categories:
  - Ideas
  - Programming
  - "Tiffany's Posts"
---


<h2><img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/01/kickass_rainbow.jpeg" alt="kickass_rainbow_pic" /></h2>
So I am working on a project from last semester called Rainbow Explosion. <a id="fnref-1" class="footnote" title:="see footnote" href="#fn-1">[1]</a>

It is a hangman app with a twist. Here is an excerpt of the instructions:
<blockquote>
<h2>Project #3: Rainbow Explosion</h2>
The game of rainbow explosion challenges a player to guess a secret word to defuse the color bomb by guessing different letters contained within that word.  Every wrong guess gets the bomb closer to going off.

The game starts by printing out a welcome message to the player with instructions and a placeholder for the secret word, represented by blank underscores (the number of underscores printed represent the number of letters in the secret word for the player to guess).

For each round of the game, the player is prompted to input a guessed letter to see if that letter is in the secret word:

If the guessed letter is contained in the secret word, the player has won that round, and the guessed word thus far is printed (consisting of blank underscores and correctly guessed letters).
If the player’s guessed letter is not in the secret word, the guessed word thus far is printed (consisting of blank underscores and any correctly guessed letters), and the player earns a “tick.”
The ticks add up. A player can only accumulate 6 incorrect ticks or he loses the game and the bomb goes off.
For each round that the player guesses a letter incorrectly, you should also print out the color that the player has failed thus far, based on how many ticks the player has:
Each tick will correspond to the bomb exploding sooner, for each incorrectly guessed letter:
* 1 tick = red
* 2 ticks = orange
* 3 ticks = yellow
* 4 ticks = green
* 5 ticks = blue
* 6 ticks = purple  BOOM!!!
The player wins by guessing all of the correct letters in the secret word. When the player wins the game, you should print to the console that he has won, along with the secret word.

The player can also lose. Once all the colors are printed to the screen the game is over and the player has lost.

For the advanced versions of this game, you should also provide a hint for the secret word to the player at the beginning of the game and use OO programming to create your own class.</blockquote>
It is written entirely in Java and I think I talked about it a few weeks ago. Mel, a Java vet on the Code Newbie Slack team (and a woman in tech!) said for me to think about it from different angles. For instance, think about it from what letters aren’t being guessed.

So I went all in with an array of chars that I could iterate through with a for loop. It looked awful. It looked like this:

<pre class="lang:java decode:1 " >
char [] = {&rsquo;b&rsquo;, &lsquo;d&rsquo;, &lsquo;e&rsquo;, &lsquo;f&rsquo;, &lsquo;g&rsquo;, &lsquo;h&rsquo;, &lsquo;i&rsquo;, &lsquo;j&rsquo;, &lsquo;k&rsquo;, &lsquo;l&rsquo;, &lsquo;m&rsquo;, &lsquo;n&rsquo;, &lsquo;o&rsquo;, &lsquo;p&rsquo;, &lsquo;q&rsquo;, &lsquo;r&rsquo;, &lsquo;s&rsquo;, &lsquo;u&rsquo;, &lsquo;v&rsquo;, &lsquo;w&rsquo;, &lsquo;x&rsquo;, &lsquo;y&rsquo;, &lsquo;z&rsquo;};
</pre>

<strong>Messy</strong>. I needed to use a for loop to iterate, an if/else conditional, and a do/while loop.

I thought about it and consulted her with my code. She gave me more advice– use .contains() to see if a char is in a string. <em>Yes</em>.
<h3>It Works! Sort Of…</h3>
<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/01/DeathtoStock_NotStock7.jpg" alt="hangman_world" />

So my code looks like this: <a id="fnref-2" class="footnote" title:="see footnote" href="#fn-2">[2]</a>

After some trial and error, scope and return statement issues, it ran. It does not run correctly. Here is the output from my terminal:

<a href="https://helloburgh.me/wp-content/uploads/2016/01/Screenshot2016-01-13_09-49-47_PM-1.jpg" rel="attachment wp-att-861"><img class=" wp-image-861 aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/01/Screenshot2016-01-13_09-49-47_PM-1.jpg" alt="Screenshot2016-01-13_09-49-47_PM" width="501" height="116" /></a>

&nbsp;

I had to Ctrl-C to get out of it.

Back to the drawing board.
<div class="footnotes">

<hr />

<ol>
	<li id="fn-1">Link to the repository is private now. <a class="reversefootnote" title:="return to article" href="#fnref-1"> ↩</a></li>
        <li id="fn-2">At the request of my mentor I took this down. She didn't want future classes to be able to see it. <a class="reversefootnote" title:="return to article" href="#fnref-2">  ↩</a></li>
</ol>



<h2><img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/01/kickass_rainbow.jpeg" alt="kickass_rainbow_pic" /></h2>
So I am working on a project from last semester called Rainbow Explosion. <a id="fnref-1" class="footnote" title:="see footnote" href="#fn-1">[1]</a>

It is a hangman app with a twist. Here is an excerpt of the instructions:
<blockquote>
<h2>Project #3: Rainbow Explosion</h2>
The game of rainbow explosion challenges a player to guess a secret word to defuse the color bomb by guessing different letters contained within that word.  Every wrong guess gets the bomb closer to going off.

The game starts by printing out a welcome message to the player with instructions and a placeholder for the secret word, represented by blank underscores (the number of underscores printed represent the number of letters in the secret word for the player to guess).

For each round of the game, the player is prompted to input a guessed letter to see if that letter is in the secret word:

If the guessed letter is contained in the secret word, the player has won that round, and the guessed word thus far is printed (consisting of blank underscores and correctly guessed letters).
If the player’s guessed letter is not in the secret word, the guessed word thus far is printed (consisting of blank underscores and any correctly guessed letters), and the player earns a “tick.”
The ticks add up. A player can only accumulate 6 incorrect ticks or he loses the game and the bomb goes off.
For each round that the player guesses a letter incorrectly, you should also print out the color that the player has failed thus far, based on how many ticks the player has:
Each tick will correspond to the bomb exploding sooner, for each incorrectly guessed letter:
* 1 tick = red
* 2 ticks = orange
* 3 ticks = yellow
* 4 ticks = green
* 5 ticks = blue
* 6 ticks = purple  BOOM!!!
The player wins by guessing all of the correct letters in the secret word. When the player wins the game, you should print to the console that he has won, along with the secret word.

The player can also lose. Once all the colors are printed to the screen the game is over and the player has lost.

For the advanced versions of this game, you should also provide a hint for the secret word to the player at the beginning of the game and use OO programming to create your own class.</blockquote>
It is written entirely in Java and I think I talked about it a few weeks ago. Mel, a Java vet on the Code Newbie Slack team (and a woman in tech!) said for me to think about it from different angles. For instance, think about it from what letters aren’t being guessed.

So I went all in with an array of chars that I could iterate through with a for loop. It looked awful. It looked like this:

<pre class="lang:java decode:1 " >
char [] = {&rsquo;b&rsquo;, &lsquo;d&rsquo;, &lsquo;e&rsquo;, &lsquo;f&rsquo;, &lsquo;g&rsquo;, &lsquo;h&rsquo;, &lsquo;i&rsquo;, &lsquo;j&rsquo;, &lsquo;k&rsquo;, &lsquo;l&rsquo;, &lsquo;m&rsquo;, &lsquo;n&rsquo;, &lsquo;o&rsquo;, &lsquo;p&rsquo;, &lsquo;q&rsquo;, &lsquo;r&rsquo;, &lsquo;s&rsquo;, &lsquo;u&rsquo;, &lsquo;v&rsquo;, &lsquo;w&rsquo;, &lsquo;x&rsquo;, &lsquo;y&rsquo;, &lsquo;z&rsquo;};
</pre>

<strong>Messy</strong>. I needed to use a for loop to iterate, an if/else conditional, and a do/while loop.

I thought about it and consulted her with my code. She gave me more advice– use .contains() to see if a char is in a string. <em>Yes</em>.
<h3>It Works! Sort Of…</h3>
<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/01/DeathtoStock_NotStock7.jpg" alt="hangman_world" />

So my code looks like this: <a id="fnref-2" class="footnote" title:="see footnote" href="#fn-2">[2]</a>

After some trial and error, scope and return statement issues, it ran. It does not run correctly. Here is the output from my terminal:

<a href="https://helloburgh.me/wp-content/uploads/2016/01/Screenshot2016-01-13_09-49-47_PM-1.jpg" rel="attachment wp-att-861"><img class=" wp-image-861 aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/01/Screenshot2016-01-13_09-49-47_PM-1.jpg" alt="Screenshot2016-01-13_09-49-47_PM" width="501" height="116" /></a>

&nbsp;

I had to Ctrl-C to get out of it.

Back to the drawing board.
<div class="footnotes">

<hr />

<ol>
	<li id="fn-1">Link to the repository is private now. <a class="reversefootnote" title:="return to article" href="#fnref-1"> ↩</a></li>
        <li id="fn-2">At the request of my mentor I took this down. She didn't want future classes to be able to see it. <a class="reversefootnote" title:="return to article" href="#fnref-2">  ↩</a></li>
</ol>




</div>