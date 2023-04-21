---
title: JavaScript vs Java Pass by Value and Reference
author: Tiffany White
date: 2017-06-22 21:06:48
layout: post
tags: uncategorized
categories:
  - Tiffany's Posts
---


## Different Languages, Different Paradigms

When you are working with different languages at the same time, it is important to note that while most languages are based on C, each langauge has its own set of rules and paradigms associated with it that makes similar conventions different.

Java and JavaScript, while having *Java* in common, are completely different languages[^1]. As such, the way they deal with primitive values[^2], functions and methods, arguments and parameters, differ as well.

## Dealing With Objects and Methods in Java

Java is an *Object Oriented Programming language* which basically means creating objects as part of a class, instantiating the object and adding methods to the object to actually *do* things with the newly created objects. You can then make your code more modular by adding and calling functions that manipulate the code in some way.[^3]

You can create an object such as:

```java
  public class Dog {
      int dogAge;
      public Dog(string name) {
      System.out.println(&quot;My dog&#039;s name is &quot; + name &quot; .&quot;);
   }

   public void setAge (int age) {
       dogAge = age;
    }

   public int getAge() {
       System.out.println(&quot;My dog is &quot; + dogAge + &quot; years old&quot;);
       return dogAge;
     }

     public static void main (String []args) {
     /* Create an object using the new keyword */
         Dog myDog = new Dog(&quot;Max&quot;);
         myDog.setAge(11); // setAge is a class method on the object Dog
         myDog.getAge();
         System.out.println(myDog.dogAge);
       }
    }
```

Here we have a class and a constructor, a new object `Dog` with a few getter and setter methods on the `Dog` object.

This is standard Java OOP stuff. JavaScript isn't an OOP language, it is a prototypal language which creates object prototypes in order to extend objects through prototypal inheritance instead of classical inheritance, like Java.[^4]

## Dealing with Objects and Methods in JavaScript

Objects in JavaScript are **not** created the same way as in Java. At least not technically, and this:

```javascript
    function Car() {
     const car1 = new Car();
    }
```
should be avoided.[^5]

We can create an object literal such as:

```javascript
    const myObject {
        foo: &#039;bar&#039;,
        car: &#039;Mazda&#039;,
        age: 38
    }
```
and add methods onto the object such as:

```javascript
    myObject.car = &#039;Honda&#039;;
```
and pass them to other methods like console.log:

```javascript
    console.log(myObject.car);
```
## Pass by Value in JavaScript

The only thing you can pass by value in JavaScript are primitive data types.

Passing by value means that you have two variables in memory that are assigned to one another. For instance:

```javascript
     var a;
    var b = 8;

    var a = b;

    console.log(b); // will return 8
```

What's happening when we pass these primitives by value, we are making a copy of the value of the variable `b` stored in memory, say at address 0x001 and assigning it to `a` stored at 0x002. Both `a` and `b mirror each other as they are just copies of one another. This is what is meant when we say we are passing by value in JavaScript.

## Pass by Value in Java

Take this bit of code:

```java
    int y = 10;
    changeMeToSix (y);
    System.out.println(y);
    // [...some code]

    void changeMeToSix (int x) {
        x = 6;
    }
```
This doesn't print 6. It prints 10. Why? Because only the value 10 was passed into the method, not the variable itself.

Another example:

```java
    Dog myDog;
```
This is not actually a dog but a pointer to the Dog instance in memory. So if we have:

```java
    public void foo (Dog yourDog) {
        yourDog.setName(&quot;Sparky&quot;);
        yourDog = new Dog(&quot;Max&quot;);
        yourDog.setName(&quot;Jeffie&quot;);
    }
```
Let's say the parameter `yourDog` is at memory address 0x001.

The first line is followed to the `Dog` it points to, which is the `Dog` object at 0x001. That dog is asked to change names to Sparky, at the same address of 0x001.

In the second line, a new `Dog` is created at a different address, say, 0x006. We assign the `yourDog` param to the memory address 0x006.

In the last line, yourDog is followed to the new `Dog` it points to in 0x006. That `Dog` changes his name to `Jeffie`. Then it returns.

`myDog` didn't change. `myDog` is a pointer in memory that points to the original address, 0x001, not an actual `Dog`.

You can pass references to parameters by *value* and not the actual references themselves.

## Pass by Reference JavaScript

Passing by reference in JavaScript can only happen to objects. This includes functions as functions are first-class objects in JavaScript.[^6]

Passing by reference involves having two references point to the same object in memory. This means you can mutate and object or function by assigning it to another object or passing it as a parameter to a function. Take this code:

```javascript
    // by reference (all objects (including functions))
   const greet = {
      greeting: &#039;hi&#039;
    };
   const greet1;

  greet1 = greet;
  greet.greeting = &#039;hello&#039;; // mutates to hello

  console.log(greet);
  console.log(greet1);

  // by reference (even as parameters)
  function changeGreeting(obj) {
    obj.greeting = &quot;What&#039;s up?&quot;; // mutates to What&#039;s Up
  }

 changeGreeting(greet1);
console.log(greet);
console.log(greet1);

// equals operator sets up new memory address
greet = {
    greeting: &#039;Yo&#039;
};
console.log(greet); // Mutates to Yo
console.log(greet1);
```
...and so on.

Understanding the difference between pass by value and pass by reference is key to understanding how JavaScript objects and primitives work.

## Pass by Reference in Java?

You **cannot** pass by reference in Java. As [Jon Skeet](https://twitter.com/jonskeet?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) puts it:

> Pass by reference mixes inputs and outputs of code. This is the fundamental problem with the technique. In Java, a programmer can assume that variables will not change their value when passed as parameters to a method. In languages with pass by reference semantics, this basic assumption cannot be made.

> Pass by reference confuses the interface to a method. Methods written using pass-by-reference semantics can have extremely complex interfaces that are difficult for client programmers to learn and understand.

Excluding pass by reference was a design choice. It fills a need in some languages, like JavaScript but can present problems in others.

## That Was Long

Sorry about the length! If you have anything to add, leave a comment down below. Let me know if I am wrong or off-base. I don't mind.

*UPDATE: I suppose you can't redeclare a variable with let in the example of pass by value in JS. So I went to the console, did some console-fu and decided to use `var` though it is dated. Still learning ES6.*

*UPDATE 2: So I learned you cannot pass by reference in JavaScript though that is exactly what I was taught, albeit incorrectly. You can pass a reference to another object, but you cannot pass by reference in JavaScript.*





[^1]: Both languages are based on C, however.
[^2]: Both Java and JavaScript have primitive types. Java has *strongly typed* primitive values. See [this post](https://tiffanywhite.tech/primitive-data-types-in-java/) for Java data types.
[^3]: Technically, in Java, you can use method and function interchangeably but I really don't like doing that. See [this answer](http://stackoverflow.com/questions/155609/difference-between-a-method-and-a-function).
[^4]: Eric Elliott [has talked about this](https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a#.szfiambhu) a lot. Check it out for the differences inheritance between the two languages.
[^5]: This is creating an object using a JavaScript constructor and the `new` keyword, mimicking OOP inheritance in JavaScript. Douglas Crockford [recommends that you avoid it.](https://youtu.be/bo36MrBfTk4?t=28m50s)



