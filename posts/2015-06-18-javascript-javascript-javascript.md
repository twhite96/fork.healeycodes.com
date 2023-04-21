---
ID: 338
title: JavaScript, JavaScript, JavaScript
# javascript-javascript-javascript
author: Tiffany White
date: 2015-06-18 22:00:54
layout: post
link: >
  https://tiffanywhite.tech/javascript-javascript-javascript/
published: true
tags:
  - Codecademy
  - free code camp
  - functions
  - javascript
categories:
  - Programming
  - Web Development
---


<img class=" alignright" src="https://helloburgh.me/wp-content/uploads/2015/06/wpid-js-logo-badge-256.png" alt="JS" />

Free Code Camp, love. I really am in love with this site. I guess it’s kind of disingenuous– Free Code Camp outsources its JavaScript course (for beginners) to Codecademy. But I’ve built some pretty interesting games, felt the frustration of debugging (<strong>missing curly brackets search for 30 minutes</strong>. Seriously), and the rewarding feeling of building something small. I’ve taken lots of notes in <a href="https://itunes.apple.com/us/app/quiver-programmers-notebook/id866773894?mt=12">Quiver</a>, the notes app that can mix code, markdown, text, and LaTEX in one note (excellent resource). I plan on using Quiver as my main notes app for computer science classes.

Anyway, I stumbled a bit on functions because of the way they looked. Here is the first part of a function:

~~~~
var orangeCost = function (price) {
}
~~~~

You set up a variable called orangeCost and that is also the name of the function. I was stuck on var orangeCost being <strong>just</strong> a variable and not a function. I finally got it down with practice. What helped was understanding parameters.

I had some difficulty with this function:

~~~~
var orangeCost = function (price) {
var quantity = 5;
console.log(quantity * price);
}
orangeCost(5);
~~~~

The problem? This:

"You are a creature of habit. Every week you buy 5 oranges. But orange prices keep changing!

You want to declare a function that calculates the cost of buying 5 oranges (So you could name the variable orangeCost and assign the function price since you are looking for the price of the 5 oranges).
You then want to calculate the cost of the 5 all together (quantity).
Write a function that does this called orangeCost().
It should take a parameter that is the cost of an orange, and multiply it by 5.
(the parameter is in between the parentheses in the function. This is where you’d put price. The price changes each time.)

It should log the result of the multiplication to the console.
Call the function where oranges each cost 5 dollars.
?
Hint
What is the one bit of input that changes each time? It would be the price. So give your parameter the name price. And when you call your function, put in a number for the price to see how much 5 oranges cost!"

I was trying to make the math a function. I wasn’t thinking in algorithms and not breaking the problem down into smaller chunks. I was still not exactly clear on the concepts of functions so this made it difficult. But I knocked it out of the park with subsequent exercises.

Here is my Rock, Paper, Scissors game. I am thinking about improving it, as suggested by Codecademy, but I was so frustrated by the debugging I just wanted to get it over with.

<hr />

What else? Well, I mentioned debugging with the missing curly brackets. It’s because of the nesting with the If, Else if, and Else, loop/function (am not certain which these are currently though I am leaning towards a loop). There was so much code there and so many loops that I just didn’t remember to put the curly brackets to close the loop.

Here iit is, the Rock, Paper, Scissors game, the debugging job from hell:

~~~~
var userChoice = prompt(“Do you choose rock, paper or scissors?”);
var computerChoice = Math.random();
if (computerChoice &lt; 0.34) {
computerChoice = “rock”;
} else if(computerChoice &lt;= 0.67) {
computerChoice = “paper”;
} else {
computerChoice = “scissors”;
} console.log(“Computer: ” + computerChoice);

var compare = function(choice1, choice2) {
if (choice1 === choice2) {
return “The result is a tie!”;
}
else if (choice1 === “rock”) {
if (choice2 === “scissors”) {
return “rock wins”;
} else {
return “paper wins”;
}
}
else if (choice1 === “paper”) {
if (choice2 === “rock”) {
return “paper wins”;
} else {
return “scissors wins”;
}
}
};
compare(userChoice, computerChoice);
~~~~

See what I mean? Ha.

Great week of learning so far. Back at it tonight.

&nbsp;

## Update:




<img class=" alignright" src="https://helloburgh.me/wp-content/uploads/2015/06/wpid-js-logo-badge-256.png" alt="JS" />

Free Code Camp, love. I really am in love with this site. I guess it’s kind of disingenuous– Free Code Camp outsources its JavaScript course (for beginners) to Codecademy. But I’ve built some pretty interesting games, felt the frustration of debugging (<strong>missing curly brackets search for 30 minutes</strong>. Seriously), and the rewarding feeling of building something small. I’ve taken lots of notes in <a href="https://itunes.apple.com/us/app/quiver-programmers-notebook/id866773894?mt=12">Quiver</a>, the notes app that can mix code, markdown, text, and LaTEX in one note (excellent resource). I plan on using Quiver as my main notes app for computer science classes.

Anyway, I stumbled a bit on functions because of the way they looked. Here is the first part of a function:

~~~~
var orangeCost = function (price) {
}
~~~~

You set up a variable called orangeCost and that is also the name of the function. I was stuck on var orangeCost being <strong>just</strong> a variable and not a function. I finally got it down with practice. What helped was understanding parameters.

I had some difficulty with this function:

~~~~
var orangeCost = function (price) {
var quantity = 5;
console.log(quantity * price);
}
orangeCost(5);
~~~~

The problem? This:

"You are a creature of habit. Every week you buy 5 oranges. But orange prices keep changing!

You want to declare a function that calculates the cost of buying 5 oranges (So you could name the variable orangeCost and assign the function price since you are looking for the price of the 5 oranges).
You then want to calculate the cost of the 5 all together (quantity).
Write a function that does this called orangeCost().
It should take a parameter that is the cost of an orange, and multiply it by 5.
(the parameter is in between the parentheses in the function. This is where you’d put price. The price changes each time.)

It should log the result of the multiplication to the console.
Call the function where oranges each cost 5 dollars.
?
Hint
What is the one bit of input that changes each time? It would be the price. So give your parameter the name price. And when you call your function, put in a number for the price to see how much 5 oranges cost!"

I was trying to make the math a function. I wasn’t thinking in algorithms and not breaking the problem down into smaller chunks. I was still not exactly clear on the concepts of functions so this made it difficult. But I knocked it out of the park with subsequent exercises.

Here is my Rock, Paper, Scissors game. I am thinking about improving it, as suggested by Codecademy, but I was so frustrated by the debugging I just wanted to get it over with.

<hr />

What else? Well, I mentioned debugging with the missing curly brackets. It’s because of the nesting with the If, Else if, and Else, loop/function (am not certain which these are currently though I am leaning towards a loop). There was so much code there and so many loops that I just didn’t remember to put the curly brackets to close the loop.

Here iit is, the Rock, Paper, Scissors game, the debugging job from hell:

~~~~
var userChoice = prompt(“Do you choose rock, paper or scissors?”);
var computerChoice = Math.random();
if (computerChoice &lt; 0.34) {
computerChoice = “rock”;
} else if(computerChoice &lt;= 0.67) {
computerChoice = “paper”;
} else {
computerChoice = “scissors”;
} console.log(“Computer: ” + computerChoice);

var compare = function(choice1, choice2) {
if (choice1 === choice2) {
return “The result is a tie!”;
}
else if (choice1 === “rock”) {
if (choice2 === “scissors”) {
return “rock wins”;
} else {
return “paper wins”;
}
}
else if (choice1 === “paper”) {
if (choice2 === “rock”) {
return “paper wins”;
} else {
return “scissors wins”;
}
}
};
compare(userChoice, computerChoice);
~~~~

See what I mean? Ha.

Great week of learning so far. Back at it tonight.

&nbsp;

## Update:





I found that I need to actually *write* out math problems by hand to figure out how to write them in code. This may seem counterintuitive but is a must for me-- in all my math classes I've used my iPad and Noteability to figure out problems and equations. So this makes sense for me.