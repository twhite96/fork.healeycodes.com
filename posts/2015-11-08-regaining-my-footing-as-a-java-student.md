---
ID: 697
title: Regaining My Footing as a Java Student
# regaining-my-footing-as-a-java-student
author: Tiffany White
date: 2015-11-08 10:00:02
layout: post
link: >
  https://tiffanywhite.tech/regaining-my-footing-as-a-java-student/
published: true
tags:
  - games
  - Java
  - student
categories:
  - General Updates
  - Programming
  - "Tiffany's Posts"
  - Uncategorized
---
<h2><img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/11/wpid-16A9B86780.jpg" alt="footing" /></h2>

The Java is getting harder now. I was tasked with making a dice rolling game with these instructions:

> This is a dice game (each roll uses two die = 2 dice) that you are going to create in the command line console. The rules are as follows:

> A new shooter (player) begins with his first dice roll (2 die = 2 dice). This is known as the “big start roll.”
> If the shooter rolls a 5 or 10 the player wins.
> If the shooter rolls a 2, 4 or 11, the player loses.
> If the shooter rolls any other number, the “big start roll” becomes the “match number.”
> The shooter must continue to roll the dice until either one of two things happens:
> The shooter rolls a 5, and he loses.
> The shooter rolls the “match number” again, and he wins.
> Grading for the project is as follows. You are to have each partial-credit activity reviewed during attendance-required recitation. This counts toward your participation grade in the course. You CANNOT skip partial-credit activities. You work at your own pace, and you can submit project work to this CourseWeb hyperlink for grading as many times as you like up to, and including, the due date/time - only the latest submission is graded. Based on the passing of each partial-credit activity, you earn the following grade:

> No activity passed, 0% F
> Activity 1 passed, 65% D
> Activity 1 & 2 passed, 75% C
> Activity 1, 2 & 3 passed, 85% B
> Activity 1, 2, 3, & 4 passed, 95% A
> Activity 1, 2, 3, 4 & 5 passed, 100% A+
> Each partial-credit activity builds upon each other, and you may have to rework/rewrite source code to complete the more difficult partial-credit activity. This should NOT be a GUI program - it is text-based.

So, I had to think about this. There was an particular activity I was stuck on. I made notes that looked like this:

```java
// Two variables, one bigStartRoll, secondRoll
// Display result using System.out.println
// Use conditional statement (if bigStartRoll == 5 || 10, etc) to determine if game is won on bigStartRoll
// Display whether the user has won on first roll using System.out.println
// Use else in the conditional if statement to determine if further action is needed for the game to be won
// if the condition is false, print out what needs to be done to win using System.out.println
```

and

`**Need to create a class and methods.**`


I asked the TA if I needed to create classes and methods. She said, “I don’t think so.”.

*Great*.

### Wasting Time

> “Your hand can seize today, but not tomorrow; and thoughts of your tomorrow are nothing but desire. Don’t waste this breath, if your heart isn’t crazy, since “the rest of your life” won’t last forever.”
― Omar Khayyám, Quatrains - Ballades

So I spent a whole month dreading this assignment. I had, evenutally, a block of messy code. I was listless and decided to get help from Code Newbies.

Someone in their Slack room helped tremendously. He said, “You have these complicated instructions and this big block of code. When things are complicated we need to break them down into pieces.” I knew he meant methods, something I asked my TA about. He rearranged my code and we went through the process, what was happening, what methods were being called where. He eventually had to feed his kids and I was left to figure out how to get the program to keep running when certain conditions were met. I figured it out myself. Here is the end result:



```java
/* Tiffany White
Dice Rolling program, Rockymon, creating different methods to determine if the game is won, lost
or the user should roll again.
Date created: November 3, 2015
Date modified: November 5, 2015
*/

// Imports Random and Scanner classes
import java.util.Scanner;
import java.util.Random;


// Declares the class name
public class P2A4_White_
{
 // This is the main method declaration
 public static void main(String[] args)
 {
 // This calls the runGame method
 runGame();
 }

// Creates Scanner and Random objects
 public static Scanner keyboard = new Scanner(System.in);
 public static Random r = new Random();


// Created a new method to be called to run the game
 public static void runGame(){


// Declares a variable and calls the rollDice method
int bigStartRoll = rollDice();

//calls the print Result method and passes the result of Big Start Roll as an argument
printResult(bigStartRoll);
}
 // creates rollDice method
 public static int rollDice(){
 // creates a Random object that will roll the second die with 6 sides
 int secondRoll = r.nextInt(6) + 1;
 // creates a Random object that will roll the first die with 6 sides
 int firstRoll = r.nextInt(6) + 1;
 // returns the result of the first and second roll
 return secondRoll + firstRoll;
 }

// Creates a method called printResult and passes rollValue as an argument
 public static void printResult(int rollValue){
 // the logic that will determine if the value of the roll is a 5 or 10
 if (rollValue == 5 || rollValue == 10) {
 // if the Random number object returns a rollValue of 5 or 10 you've won will be printed to the console
 System.out.println("Your Big Start Roll Number: " + rollValue + "You've won Rockymon. Congrats!");
 // the logic that determines that if the first condition is false and the value of rollValue is any of these numbers, you lose will be printed to the console
 } else if (rollValue == 2 || rollValue == 4 || rollValue == 11) {
 System.out.println("Your Big Start Roll Number: " + rollValue + "You lose.");
 // the logic that determines if the previous values for rollValue were false then you enter, and the rollValue is not a 5 or itself, then you enter match number mode.
 } else if (rollValue != 5 || rollValue != 5 && rollValue == rollValue) {
 System.out.println("Your Big Start Roll Number: " + rollValue + "\n You've entered Match Number Mode.\nRoll again.");
 // Declares empty string to hold input
 String again = ""

  // the logic that will loop through, calling the rollDice method each time the enter key is pressed until
  // the rollValue is not 5 or itself
  do {
    rollValue = rollDice();
    System.out.println("Your result: " + rollValue + "Roll again.");
    again = keyboard.nextLine();
  } while (again.equals("") && rollValue != 5 || rollValue != 5 && rollValue == rollValue);

  // if the rollValue value is 5, you lose
  if (rollValue == 5) {
    System.out.println("You lose.");
   }
  }
 }
}
```