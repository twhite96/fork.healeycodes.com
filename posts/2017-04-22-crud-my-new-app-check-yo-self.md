---
ID: 1874
title: 'CRUD: My New App, Check Yo Self'
# crud-my-new-app-check-yo-self
author: Tiffany White
date: 2017-04-22 22:41:47
layout: post
link: >
  https://tiffanywhite.tech/crud-my-new-app-check-yo-self/
published: true
tags:
  - heroku
  - javascript
  - programming
  - Treehouse
categories:
  - General Updates
---


I have taken a bit of a break from the coding/learning thing as I suffer from a bit of depression every now and again, outside of the usual. It's a woman's thing, as they say.

So while I was a bit down and cantankerous I took a break to tweak a few of my sites and read some documentation. After the bout of depression subsided, I dove into SQL.

## Create, Read, Update, Delete: CRUD

I asked around in the Code Newbie Slack and asked my buddy Alex if I could use `localStorage` to store the markdown documents.

Let me backtrack.

When I was designing the app, I got the idea of having the markdown documents collect on the side of the app, sort of like the design template I was using. I knew I'd need to store those documents and really didn't want to dive into databases.

I thought about using `localStorage`. Alex told me that `localStorage` has a capacity limit. I really don't know how many texts someone would store and come back to, and while text files are minuscule, I don't want to risk it.

I could go the [I Need a Resume](http://ineedaresu.me/#/) route and use `setSessionCookie` which would require less overhead. But if the user clears their cookies, all their texts would be wiped out.

I still plan to use `setSessionCookie` but I am not sure how I am going to work it in with storing the texts in the database.

CRUD is a SQL thing. [^1].

## ORMs and JavaScript May Save Me, Big Time

While learning SQL at Treehouse, Andrew Chalkley, the teacher, explained ORMs, or *Object Relational Mapping* software that helps you interface with a database in different languages. For instance, ActiveRecord for Ruby and Hibernate for Java.I was having a hard time understanding how to store the texts the users input, store the texts, and retrieve the texts up until that point in the course. Everything we did in the course was hard coded and I definitely understood I *could not* do that. *ORMs to the rescue*. Searched for an ORM for JavaScript and there are many, either through npm or other means, there are plenty. Still researching. Since I am using Postgres on Heroku, it needs to play nice with it and I found one called sequelize.js that looks like it will do the trick:
<pre><code class="javascript">
var Sequelize = require('sequelize');
var sequelize = new Sequelize('database', 'username', 'password');

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});
</code></pre>
This snippet seems quite easy to grasp and will make interfacing with Heroku's Postgres addon even easier. [^2].

## Coding Again

I plan on scanning more docs and getting the HTML up and going. I felt overwhelmed with the amount of stuff I needed to code. This is one area that hinders me still: not breaking big projects up into little pieces. I decided I have been at this enough that I should actually take Russ's [^3] and *break that shit down*. I fired up Drafts app on my iPhone and wrote down every task I needed and wanted to complete. Then I shifted those over to OmniFocus and Taskpaper. There are more tasks to add but I feel a sense of relief knowing that the ideas are down, and that I should work on one small bit of code at a time.

## Thoughts?

I never know how to end these things. Let me know what you're hacking on in the comments. Or not. It's all good. ????

[^1]: *Create:* `INSERT INTO`, *Read:*, `SELECT * FROM`, *Update:* `UPDATE SET`, and, *Delete:* `DELETE FROM`. So that's why they call database apps that are simple *CRUD* apps, which I understand finally.
[^2]: Check out [sequelize.js](http://docs.sequelizejs.com/en/v3/)



I have taken a bit of a break from the coding/learning thing as I suffer from a bit of depression every now and again, outside of the usual. It's a woman's thing, as they say.

So while I was a bit down and cantankerous I took a break to tweak a few of my sites and read some documentation. After the bout of depression subsided, I dove into SQL.

## Create, Read, Update, Delete: CRUD

I asked around in the Code Newbie Slack and asked my buddy Alex if I could use `localStorage` to store the markdown documents.

Let me backtrack.

When I was designing the app, I got the idea of having the markdown documents collect on the side of the app, sort of like the design template I was using. I knew I'd need to store those documents and really didn't want to dive into databases.

I thought about using `localStorage`. Alex told me that `localStorage` has a capacity limit. I really don't know how many texts someone would store and come back to, and while text files are minuscule, I don't want to risk it.

I could go the [I Need a Resume](http://ineedaresu.me/#/) route and use `setSessionCookie` which would require less overhead. But if the user clears their cookies, all their texts would be wiped out.

I still plan to use `setSessionCookie` but I am not sure how I am going to work it in with storing the texts in the database.

CRUD is a SQL thing. [^1].

## ORMs and JavaScript May Save Me, Big Time

While learning SQL at Treehouse, Andrew Chalkley, the teacher, explained ORMs, or *Object Relational Mapping* software that helps you interface with a database in different languages. For instance, ActiveRecord for Ruby and Hibernate for Java.I was having a hard time understanding how to store the texts the users input, store the texts, and retrieve the texts up until that point in the course. Everything we did in the course was hard coded and I definitely understood I *could not* do that. *ORMs to the rescue*. Searched for an ORM for JavaScript and there are many, either through npm or other means, there are plenty. Still researching. Since I am using Postgres on Heroku, it needs to play nice with it and I found one called sequelize.js that looks like it will do the trick:
<pre><code class="javascript">
var Sequelize = require('sequelize');
var sequelize = new Sequelize('database', 'username', 'password');

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});
</code></pre>
This snippet seems quite easy to grasp and will make interfacing with Heroku's Postgres addon even easier. [^2].

## Coding Again

I plan on scanning more docs and getting the HTML up and going. I felt overwhelmed with the amount of stuff I needed to code. This is one area that hinders me still: not breaking big projects up into little pieces. I decided I have been at this enough that I should actually take Russ's [^3] and *break that shit down*. I fired up Drafts app on my iPhone and wrote down every task I needed and wanted to complete. Then I shifted those over to OmniFocus and Taskpaper. There are more tasks to add but I feel a sense of relief knowing that the ideas are down, and that I should work on one small bit of code at a time.

## Thoughts?

I never know how to end these things. Let me know what you're hacking on in the comments. Or not. It's all good. ????

[^1]: *Create:* `INSERT INTO`, *Read:*, `SELECT * FROM`, *Update:* `UPDATE SET`, and, *Delete:* `DELETE FROM`. So that's why they call database apps that are simple *CRUD* apps, which I understand finally.
[^2]: Check out [sequelize.js](http://docs.sequelizejs.com/en/v3/)




[^3]: Code Newbie field general, 1000XP