---
ID: 1243
title: ES6 and Lambdas
# es6-and-lambdas
author: Tiffany White
date: 2016-08-13 23:56:52
layout: post
link: >
  https://tiffanywhite.tech/es6-and-lambdas/
published: true
tags:
  - daily progress
  - programming
  - Treehouse
categories:
  - Daily Progress
  - Programming
  - "Tiffany's Posts"
  - Treehouse
---


I am taking the <a href="https://teamtreehouse.com/library/introducing-es2015">JavaScript ES6 course on Treehouse</a>. I should have waited a bit, as I am still learning ES5. Eric Elliott made the case that newbies should be learning ES6 right now as it is the current standard. So I am diving in.

One of the things that has me excited are lambda functions. JavaScript calls them Arrow functions, but I like the traditional name better. So for this article, I will call them lambda functions.

Here is an example of a lambda function being used in ES6:


[javascript]
'use strict'
var Person = function (data) {
  for (var key in data) {
    this[key] = data[key];
  }
  this.getKeys = () => {
    return Object.keys(this);
  }
}

var Alena = new Person({ name: 'Alena', role: 'Teacher' });

console.log('Alena\'s Keys:', Alena.getKeys()); // 'this' refers to 'Alena'

var getKeys = Alena.getKeys;

console.log(getKeys()); // 'this' refers to the node process
[/javascript]

Here in the is a Person constructor object with a function that takes the parameter data. On this constructor is a method called <code>getKeys</code> that returns the object’s keys using a lambda function.

Below that, a new Person object is instantiated and we log the keys for the Alena object to the console.

The lambda function binds the function to the object, no matter where it is called.

If we were to take a look at the code before the writing the lambda function, it would look like this:

[javascript]
'use strict'
var Person = function (data) {
  for (var key in data) {
    this[key] = data[key];
  }
  this.getKeys = function () {
    return Object.keys(this);
  }
}

var Alena = new Person({ name: 'Alena', role: 'Teacher' });

console.log('Alena\'s Keys:', Alena.getKeys()); // 'this' refers to 'Alena'

var getKeys = Alena.getKeys;

console.log(getKeys()); // 'this' refers to the node process
[/javascript]

This code will throw an exception because we are calling the <code>getKeys</code> method outside of the Person constructor code block. This means it is out of scope.
<h2>More Lambdas</h2>
When code gets messy like this:

[javascript]
'use strict';

var Teacher = function (data) {
  this.name = data.name;
  this.greet = function (studentCnt) {
    let promise = new Promise(function (resolve, reject) {
      if (studentCnt === 0) {
        reject('Zero students in class');
      } else {
        resolve(`Hello to ${studentCnt} of my favorite students!`);
      }
    });
    return promise;
  }
}

var Classroom = function (data) {
  this.subject = data.name;
  this.teacher = data.teacher;
  this.students = [];
  this.addStudent = function (data) {
    this.students.push(data);
    this.greet();
  }
  this.greet = () => {
    this.teacher.greet(this.students.length).then(
      (function (classroom) {
        return function (greeting) {
          console.log(`${classroom.teacher.name} says: `, greeting);
        }
      })(this),
      function (err) {
        console.log(err);
      })
  }
}

var myTeacher = new Teacher({ name: 'James' });
var myClassroom = new Classroom({ name: 'The Future of JavaScript', teacher: myTeacher });

myClassroom.addStudent({ name: 'Dave' });
[/javascript]

it is a good idea to scrap the spaghetti code and write something with lambda or arrow functions, and use JavaScript Promises:

[javascript]
'use strict';

var Teacher = function (data) {
  this.name = data.name;
  this.greet = function (studentCnt) {
    let promise = new Promise(function (resolve, reject) {
      if (studentCnt === 0) {
        reject('Zero students in class');
      } else {
        resolve(`Hello to ${studentCnt} of my favorite students!`);
      }
    });
    return promise;
  }
}

var Classroom = function (data) {
  this.subject = data.name;
  this.teacher = data.teacher;
  this.students = [];
  this.addStudent = function (data) {
    this.students.push(data);
    this.greet();
  }
  this.greet = () => {
     this.teacher.greet(this.students.length).then(
       greeting => console.log(`${this.teacher.name} says: `, greeting);
         err => console.log(err);
  }
}

var myTeacher = new Teacher({ name: 'James' });
var myClassroom = new Classroom({ name: 'The Future of JavaScript', teacher: myTeacher });

myClassroom.addStudent({ name: 'Dave' });
[/javascript]

You use Promises asynchronously with callback functions, handing those functions off to another scope. You must be careful that the promise can access its original scope, or it will throw an exception.
<h2>Web Dev CS 0134</h2>



I am taking the <a href="https://teamtreehouse.com/library/introducing-es2015">JavaScript ES6 course on Treehouse</a>. I should have waited a bit, as I am still learning ES5. Eric Elliott made the case that newbies should be learning ES6 right now as it is the current standard. So I am diving in.

One of the things that has me excited are lambda functions. JavaScript calls them Arrow functions, but I like the traditional name better. So for this article, I will call them lambda functions.

Here is an example of a lambda function being used in ES6:


[javascript]
'use strict'
var Person = function (data) {
  for (var key in data) {
    this[key] = data[key];
  }
  this.getKeys = () => {
    return Object.keys(this);
  }
}

var Alena = new Person({ name: 'Alena', role: 'Teacher' });

console.log('Alena\'s Keys:', Alena.getKeys()); // 'this' refers to 'Alena'

var getKeys = Alena.getKeys;

console.log(getKeys()); // 'this' refers to the node process
[/javascript]

Here in the is a Person constructor object with a function that takes the parameter data. On this constructor is a method called <code>getKeys</code> that returns the object’s keys using a lambda function.

Below that, a new Person object is instantiated and we log the keys for the Alena object to the console.

The lambda function binds the function to the object, no matter where it is called.

If we were to take a look at the code before the writing the lambda function, it would look like this:

[javascript]
'use strict'
var Person = function (data) {
  for (var key in data) {
    this[key] = data[key];
  }
  this.getKeys = function () {
    return Object.keys(this);
  }
}

var Alena = new Person({ name: 'Alena', role: 'Teacher' });

console.log('Alena\'s Keys:', Alena.getKeys()); // 'this' refers to 'Alena'

var getKeys = Alena.getKeys;

console.log(getKeys()); // 'this' refers to the node process
[/javascript]

This code will throw an exception because we are calling the <code>getKeys</code> method outside of the Person constructor code block. This means it is out of scope.
<h2>More Lambdas</h2>
When code gets messy like this:

[javascript]
'use strict';

var Teacher = function (data) {
  this.name = data.name;
  this.greet = function (studentCnt) {
    let promise = new Promise(function (resolve, reject) {
      if (studentCnt === 0) {
        reject('Zero students in class');
      } else {
        resolve(`Hello to ${studentCnt} of my favorite students!`);
      }
    });
    return promise;
  }
}

var Classroom = function (data) {
  this.subject = data.name;
  this.teacher = data.teacher;
  this.students = [];
  this.addStudent = function (data) {
    this.students.push(data);
    this.greet();
  }
  this.greet = () => {
    this.teacher.greet(this.students.length).then(
      (function (classroom) {
        return function (greeting) {
          console.log(`${classroom.teacher.name} says: `, greeting);
        }
      })(this),
      function (err) {
        console.log(err);
      })
  }
}

var myTeacher = new Teacher({ name: 'James' });
var myClassroom = new Classroom({ name: 'The Future of JavaScript', teacher: myTeacher });

myClassroom.addStudent({ name: 'Dave' });
[/javascript]

it is a good idea to scrap the spaghetti code and write something with lambda or arrow functions, and use JavaScript Promises:

[javascript]
'use strict';

var Teacher = function (data) {
  this.name = data.name;
  this.greet = function (studentCnt) {
    let promise = new Promise(function (resolve, reject) {
      if (studentCnt === 0) {
        reject('Zero students in class');
      } else {
        resolve(`Hello to ${studentCnt} of my favorite students!`);
      }
    });
    return promise;
  }
}

var Classroom = function (data) {
  this.subject = data.name;
  this.teacher = data.teacher;
  this.students = [];
  this.addStudent = function (data) {
    this.students.push(data);
    this.greet();
  }
  this.greet = () => {
     this.teacher.greet(this.students.length).then(
       greeting => console.log(`${this.teacher.name} says: `, greeting);
         err => console.log(err);
  }
}

var myTeacher = new Teacher({ name: 'James' });
var myClassroom = new Classroom({ name: 'The Future of JavaScript', teacher: myTeacher });

myClassroom.addStudent({ name: 'Dave' });
[/javascript]

You use Promises asynchronously with callback functions, handing those functions off to another scope. You must be careful that the promise can access its original scope, or it will throw an exception.
<h2>Web Dev CS 0134</h2>




I really want to see what the web development course has in store for me this semester. I wonder if we will use ES6. I doubt it, but I am hopeful.