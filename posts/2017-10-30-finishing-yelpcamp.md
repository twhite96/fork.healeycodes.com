---
ID: 2624
title: Finishing YelpCamp and Lessons Learned
# finishing-yelpcamp
author: Tiffany White
date: 2017-10-30 12:30:48
post_excerpt: 'So I have finished The Web Developer Bootcamp and the final project, YelpCamp, a full-stack Yelp clone built  with Node, Express, Mongo, Mongoose, Passport.js, and Bootstrap.'
layout: post
link: >
  https://tiffanywhite.tech/finishing-yelpcamp/
published: true
tags:
  - apps
  - web developer bootcamp
  - YelpCamp
categories:
  - Web Development
---


So I have finished The Web Developer Bootcamp and the final project, YelpCamp, a full-stack Yelp clone built  with Node, Express, Mongo, Mongoose, Passport.js, and Bootstrap.

It took me four months and some change to completely go through the 45 hour course and finish YelpCamp. Here are some of my thoughts on the process.

## Reviewing the Basics

A lot of what I learned in the beginning was a refresher on topics I have already learned. I did it anyway, just to make sure I was completely solid on my understanding of the basics.

I thought this was a very important step: there were some things I wasn’t exactly clear on, like DOM manipulation and CSS classes, etc, things I should have mastered before taking the course. It was evident right from the beginning I should continue to go over these introductory parts, as I really needed it.

## Meat and Potatoes

Eventually we started going over things like Node, Express, etc. I found that, while these are intermediate topics, these libraries make working with JavaScript *much, much easier*. They abstract away so much of tediousness of writing JavaScript that I wished I had learned them first which is never a good idea [^1].

These sections were the longest and the most hastily explained. For newcomers, this might be a turnoff but Colt has one of the highest rated courses on Udemy [^2] so I am sure newcomers won’t be *too* scared of these sections.

## Building YelpCamp

First, let me say: I am somewhat happy with it. It is my first full-stack app, I built it right alongside Colt. I have recently added modifications and with Ian Schroover, I am going to add even more modifications. It is also helping me in my other full-stack app, Check Yo Self as I can apply what I learned in YelpCamp to that app.

The problem is, the course came out almost three years ago. Web dev changes at a breakneck pace. Everything was out of date. Take this snippet for example:

```javascript
//INDEX - show all campgrounds
router.get(&quot;/&quot;, function(req, res) {
  if (req.query.search &amp;&amp; req.xhr) {
    const regex = new RegExp(escapeRegex(req.query.search), &#039;gi&#039;);
    // Get all campgrounds from DB
    Campground.find({
      name: regex
    }, function(err, allCampgrounds) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(allCampgrounds);
      }
    });
  } else {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
      if (err) {
        console.log(err);
      } else {
        if (req.xhr) {
          res.json(allCampgrounds);
        } else {
          res.render(&quot;campgrounds/index&quot;, {
            campgrounds: allCampgrounds,
            page: &#039;campgrounds&#039;
          });
        }
      }
    });
  }
});
```

This is a mess of callback hell that doesn’t [^3] exist anymore in 2017. There are *promises* in ES6, and *async/await* in ES7. I am sure Colt knows this now and has references to these features in his new course. However, this app is probably over a thousand lines of JavaScript over several modules. I don’t have the time, or the want, to refactor this. I didn’t come up with this idea but it does look good on my portfolio.

## End Game

My mission in all this was to learn the basics of full-stack web dev in a pace and learning style I could be successful in. I have done that. Now, it is taking what I learned and working it into Check Yo Self. Pop on over to [YelpCamp](https://yelpcamp96.herokuapp.com/) and give it a look. Tell me what you think.

[^1]: Some people think you can learn libraries right away without learning the basics. This is erroneous thinking. If you are a junior, like I am, learning the basics will get you hired. There are concepts you need to fully understand before calling yourself a professional JavaScript developer. It’s that simple.
[^2]: His newest course, The Advanced Web Developer Bootcamp has a similarly high rating though it isn’t as well-thought out, and it shows in ratings from his previous course’s students.  The course uses several teachers but is more up to date and uses React, ES6 and so much more. I plan on buying it when it is on sale again.



So I have finished The Web Developer Bootcamp and the final project, YelpCamp, a full-stack Yelp clone built  with Node, Express, Mongo, Mongoose, Passport.js, and Bootstrap.

It took me four months and some change to completely go through the 45 hour course and finish YelpCamp. Here are some of my thoughts on the process.

## Reviewing the Basics

A lot of what I learned in the beginning was a refresher on topics I have already learned. I did it anyway, just to make sure I was completely solid on my understanding of the basics.

I thought this was a very important step: there were some things I wasn’t exactly clear on, like DOM manipulation and CSS classes, etc, things I should have mastered before taking the course. It was evident right from the beginning I should continue to go over these introductory parts, as I really needed it.

## Meat and Potatoes

Eventually we started going over things like Node, Express, etc. I found that, while these are intermediate topics, these libraries make working with JavaScript *much, much easier*. They abstract away so much of tediousness of writing JavaScript that I wished I had learned them first which is never a good idea [^1].

These sections were the longest and the most hastily explained. For newcomers, this might be a turnoff but Colt has one of the highest rated courses on Udemy [^2] so I am sure newcomers won’t be *too* scared of these sections.

## Building YelpCamp

First, let me say: I am somewhat happy with it. It is my first full-stack app, I built it right alongside Colt. I have recently added modifications and with Ian Schroover, I am going to add even more modifications. It is also helping me in my other full-stack app, Check Yo Self as I can apply what I learned in YelpCamp to that app.

The problem is, the course came out almost three years ago. Web dev changes at a breakneck pace. Everything was out of date. Take this snippet for example:

```javascript
//INDEX - show all campgrounds
router.get(&quot;/&quot;, function(req, res) {
  if (req.query.search &amp;&amp; req.xhr) {
    const regex = new RegExp(escapeRegex(req.query.search), &#039;gi&#039;);
    // Get all campgrounds from DB
    Campground.find({
      name: regex
    }, function(err, allCampgrounds) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(allCampgrounds);
      }
    });
  } else {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
      if (err) {
        console.log(err);
      } else {
        if (req.xhr) {
          res.json(allCampgrounds);
        } else {
          res.render(&quot;campgrounds/index&quot;, {
            campgrounds: allCampgrounds,
            page: &#039;campgrounds&#039;
          });
        }
      }
    });
  }
});
```

This is a mess of callback hell that doesn’t [^3] exist anymore in 2017. There are *promises* in ES6, and *async/await* in ES7. I am sure Colt knows this now and has references to these features in his new course. However, this app is probably over a thousand lines of JavaScript over several modules. I don’t have the time, or the want, to refactor this. I didn’t come up with this idea but it does look good on my portfolio.

## End Game

My mission in all this was to learn the basics of full-stack web dev in a pace and learning style I could be successful in. I have done that. Now, it is taking what I learned and working it into Check Yo Self. Pop on over to [YelpCamp](https://yelpcamp96.herokuapp.com/) and give it a look. Tell me what you think.

[^1]: Some people think you can learn libraries right away without learning the basics. This is erroneous thinking. If you are a junior, like I am, learning the basics will get you hired. There are concepts you need to fully understand before calling yourself a professional JavaScript developer. It’s that simple.
[^2]: His newest course, The Advanced Web Developer Bootcamp has a similarly high rating though it isn’t as well-thought out, and it shows in ratings from his previous course’s students.  The course uses several teachers but is more up to date and uses React, ES6 and so much more. I plan on buying it when it is on sale again.




[^3]: And shouldn’t