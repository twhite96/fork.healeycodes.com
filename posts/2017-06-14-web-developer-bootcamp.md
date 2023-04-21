---
ID: 1964
title: The Web Developer Bootcamp
# web-developer-bootcamp
author: Tiffany White
date: 2017-06-14 22:54:10
post_excerpt: |
  So I am still working on Check Yo Self, but, like I do, I jumped into another tutorial where you build stuff.

  I am so stuck on and afraid of the logic of Check Yo Self that I decided that I needed to shore up some knowledge of basic JavaScript so I bought, and have started working on The Web Developer Bootcamp by Colt Steele.
layout: post
link: >
  https://tiffanywhite.tech/web-developer-bootcamp/
published: true
tags:
  - tutorials
  - web developer bootcamp
  - web development
categories:
  - General Updates
---


So I am still working on Check Yo Self, but, like I do, I jumped into another tutorial where you build stuff. I am so stuck on and afraid of the logic of Check Yo Self that I decided that I needed to shore up some knowledge of basic JavaScript [^1] so I bought, and have started working on The Web Developer Bootcamp by [Colt Steele](https://www.linkedin.com/in/coltsteele/).

Colt is a Bootcamp instructor in San Francisco [^2] and has taught students how to be professional full-stack web developers for mountains of money. His Udemy course is usually $1000 but I got it for $10 on one of their deal weeks.

It is one of the highest rated courses on Udemy and especially recommended by web devs across the internet.

## Relearning Basics

I started from the beginning. I did skip *some* HTML and CSS stuff but as I said on my Facebook page:

> I guess starting out coding in HTML and CSS...It felt really easy and so I skipped over A LOT. Free Code Camp taught Bootstrap so I felt there was no need to learn deeper.

> Taking the Web Developer Bootcamp course has opened my eyes to so much about semantic markup, what attributes, block level elements, inline elements, selectors, and properties are and their differences. Can't believe I aced my intro to web dev class without knowing that much about basic web dev.

It is never a good idea to skip things, no matter how “easy” they seem. I am learning that.

Granted, as you get better there are things you can skip but if the language is new or the concepts are new, it behooves anyone to *learn it. Do not skip it.*

## Course Curriculum

This is a full stack course where we will basically learn the `MEN` stack. He excludes Angular. Not sure why but we will end up building several front and back end projects ending in YelpCamp, a Yelp clone for camps using Mongo, Express, and Node.

## Exercises.

Here is a form I built in HTML that I had an issue with [^3].

```html
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;title:&gt;Register&lt;/title:&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;h1&gt;Register&lt;/h1&gt;

  &lt;form class=&quot;register&quot;&gt;
    &lt;label for=&quot;firstName&quot;&gt;First Name: &lt;/label&gt;
    &lt;input id=&quot;first&quot; type=&quot;text&quot; name=&quot;firstName&quot; placeholder=&quot;John&quot; required /&gt;
    &lt;label for=&quot;lastName&quot;&gt;Last Name: &lt;/label&gt;
    &lt;input id=&quot;last&quot; type=&quot;text&quot; name=&quot;lastName&quot; placeholder=&quot;Doe&quot; required /&gt;

    &lt;div class=&quot;sex&quot;&gt;
      &lt;label for=&quot;male&quot;&gt;Male &lt;/label&gt;
      &lt;input id=&quot;male&quot; type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;male&quot;&gt;
      &lt;label for=&quot;female&quot;&gt;Female &lt;/label&gt;
      &lt;input id=&quot;female&quot; type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;female&quot;&gt;
    &lt;/div&gt;

    &lt;div&gt;
      &lt;label&gt;Email:
        &lt;input type=&quot;email&quot; name=&quot;email&quot; placeholder=&quot;Your email&quot; required /&gt;
      &lt;/label&gt;

      &lt;label&gt;Password:
        &lt;input type=&quot;password&quot; name=&quot;password&quot; pattern=&quot;.{5,10}&quot; required title:=&quot;Password must be 5 to 10 characters&quot; /&gt;
      &lt;/label&gt;
    &lt;/div&gt;

    &lt;div class=&quot;birthday&quot;&gt;
      &lt;label for=&quot;birthday&quot;&gt;Birthday: &lt;/label&gt;
      &lt;select name=&quot;month&quot;&gt;
        &lt;option value=&quot;Month&quot;&gt;Month&lt;/option&gt;
        &lt;option value=&quot;Jan&quot;&gt;Jan&lt;/option&gt;
        &lt;option value=&quot;Feb&quot;&gt;Feb&lt;/option&gt;
        &lt;option value=&quot;Mar&quot;&gt;Mar&lt;/option&gt;
      &lt;/select&gt;
      &lt;select class=&quot;day&quot;&gt;
        &lt;option value=&quot;Day&quot;&gt;Day&lt;/option&gt;
        &lt;option value=&quot;first&quot;&gt;1&lt;/option&gt;
        &lt;option value=&quot;second&quot;&gt;2&lt;/option&gt;
        &lt;option value=&quot;third&quot;&gt;3&lt;/option&gt;
      &lt;/select&gt;
      &lt;select class=&quot;year&quot;&gt;
        &lt;option value=&quot;Year&quot;&gt;Year&lt;/option&gt;
        &lt;option value=&quot;1978&quot;&gt;1978&lt;/option&gt;
        &lt;option value=&quot;1979&quot;&gt;1979&lt;/option&gt;
        &lt;option value=&quot;1980&quot;&gt;1980&lt;/option&gt;
      &lt;/select&gt;
    &lt;/div&gt;

    &lt;div class=&quot;terms&quot;&gt;
      &lt;label for=&quot;terms&quot;&gt;I agree to the terms and conditions &lt;/label&gt;
      &lt;input type=&quot;checkbox&quot; name=&quot;check&quot; value=&quot;terms&quot; required /&gt;
    &lt;/div&gt;
    &lt;input type=&quot;submit&quot;&gt;
  &lt;/form&gt;
&lt;/body&gt;

&lt;/html&gt;

```
Here is some CSS from the basic CSS section that I just finished. There is something like 42 hours of video and assignments.

```css
/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!

/* Give the &lt;body&gt; element a background of #bdc3c7*/

body {
  background: #bdc3c7;
}


/* Make the &lt;h1&gt; element #9b59b6*/

h1 {
  color: #9b59b6;
}

/* Make all &lt;h2&gt; elements orange */

h2 {
  color: orange;
}

/* Make all &lt;li&gt; elements blue(pick your own hexadecimal blue)*/

li {
  color: #459BE6;
}

/*Change the background on every paragraph to be yellow*/

p {
  background: yellow;
}

/*Make all inputs have a 3px red border*/

input {
  border: 3px solid red;
}

/* Give everything with the class &#039;hello&#039; a white background*/

.hello {
  background: white;
}

/* Give the element with id &#039;special&#039; a 2px solid blue border(pick your own rgb blue)*/

#special {
  border: 2px solid #459BE6;
}

/*Make all the &lt;p&gt;&#039;s that are nested inside of divs 25px font(font-size: 25px)*/

div p {
  font-size: 25px;
}

/*Make only inputs with type &#039;text&#039; have a gray background*/

input[type=&quot;text&quot;] {
  background: gray;
}

/* Give both &lt;p&gt;&#039;s inside the 3rd &lt;div&gt; a pink background*/

 div:nth-of-type(3) p {
  background: pink;
}

/* Give the 2nd &lt;p&gt; inside the 3rd &lt;div&gt; a 5px white border*/

div:nth-of-type(3) p:nth-of-type(2) {
  border: 5px solid white;
}

/* Make the &lt;em&gt; in the 3rd &lt;div&gt; element white and 20px font(font-size:20px)*/

div:nth-of-type(3) em {
  color: white;
  font-size: 20px;
}


/*BONUS CHALLENGES*/
/*You may need to research some other selectors and properties*/

/*Make all &quot;checked&quot; checkboxes have a left margin of 50px(margin-left: 50px)*/

input:checked {
  margin-left: 50px;
}

/* Make the &lt;label&gt; elements all UPPERCASE without changing the HTML(definitely look this one up*/

label {
  text-transform: uppercase;
}

/*Make the first letter of the element with id &#039;special&#039; green and 100px font size(font-size: 100)*/

#special::first-letter {
  color: green;
  font-size: 100px;
}
/*Make the &lt;h1&gt; element&#039;s color change to blue when hovered over */

h1:hover {
  color: blue;
}
/*Make the &lt;a&gt; element&#039;s that have been visited gray */

a:visited {
  color: gray;
}
```

## Other Courses

Eventually, I’d like to be an iOS dev at some point. So I bought a Swift course from Steven [^4] and award winning iOS dev from the Hacking With Swift series, Paul Hudson.

I won’t be starting that course until after I start the other course I bought *Modern React with Redux and Webpack*.

Got all of these courses for $10 a piece. Not too bad.


[^1]: Not just jQuery.
[^2]: His apartment has me starry-eyed and wishing for a dev job and I am *totally* California dreamin’.
[^3]: A form. Of all things.



So I am still working on Check Yo Self, but, like I do, I jumped into another tutorial where you build stuff. I am so stuck on and afraid of the logic of Check Yo Self that I decided that I needed to shore up some knowledge of basic JavaScript [^1] so I bought, and have started working on The Web Developer Bootcamp by [Colt Steele](https://www.linkedin.com/in/coltsteele/).

Colt is a Bootcamp instructor in San Francisco [^2] and has taught students how to be professional full-stack web developers for mountains of money. His Udemy course is usually $1000 but I got it for $10 on one of their deal weeks.

It is one of the highest rated courses on Udemy and especially recommended by web devs across the internet.

## Relearning Basics

I started from the beginning. I did skip *some* HTML and CSS stuff but as I said on my Facebook page:

> I guess starting out coding in HTML and CSS...It felt really easy and so I skipped over A LOT. Free Code Camp taught Bootstrap so I felt there was no need to learn deeper.

> Taking the Web Developer Bootcamp course has opened my eyes to so much about semantic markup, what attributes, block level elements, inline elements, selectors, and properties are and their differences. Can't believe I aced my intro to web dev class without knowing that much about basic web dev.

It is never a good idea to skip things, no matter how “easy” they seem. I am learning that.

Granted, as you get better there are things you can skip but if the language is new or the concepts are new, it behooves anyone to *learn it. Do not skip it.*

## Course Curriculum

This is a full stack course where we will basically learn the `MEN` stack. He excludes Angular. Not sure why but we will end up building several front and back end projects ending in YelpCamp, a Yelp clone for camps using Mongo, Express, and Node.

## Exercises.

Here is a form I built in HTML that I had an issue with [^3].

```html
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;title:&gt;Register&lt;/title:&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;h1&gt;Register&lt;/h1&gt;

  &lt;form class=&quot;register&quot;&gt;
    &lt;label for=&quot;firstName&quot;&gt;First Name: &lt;/label&gt;
    &lt;input id=&quot;first&quot; type=&quot;text&quot; name=&quot;firstName&quot; placeholder=&quot;John&quot; required /&gt;
    &lt;label for=&quot;lastName&quot;&gt;Last Name: &lt;/label&gt;
    &lt;input id=&quot;last&quot; type=&quot;text&quot; name=&quot;lastName&quot; placeholder=&quot;Doe&quot; required /&gt;

    &lt;div class=&quot;sex&quot;&gt;
      &lt;label for=&quot;male&quot;&gt;Male &lt;/label&gt;
      &lt;input id=&quot;male&quot; type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;male&quot;&gt;
      &lt;label for=&quot;female&quot;&gt;Female &lt;/label&gt;
      &lt;input id=&quot;female&quot; type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;female&quot;&gt;
    &lt;/div&gt;

    &lt;div&gt;
      &lt;label&gt;Email:
        &lt;input type=&quot;email&quot; name=&quot;email&quot; placeholder=&quot;Your email&quot; required /&gt;
      &lt;/label&gt;

      &lt;label&gt;Password:
        &lt;input type=&quot;password&quot; name=&quot;password&quot; pattern=&quot;.{5,10}&quot; required title:=&quot;Password must be 5 to 10 characters&quot; /&gt;
      &lt;/label&gt;
    &lt;/div&gt;

    &lt;div class=&quot;birthday&quot;&gt;
      &lt;label for=&quot;birthday&quot;&gt;Birthday: &lt;/label&gt;
      &lt;select name=&quot;month&quot;&gt;
        &lt;option value=&quot;Month&quot;&gt;Month&lt;/option&gt;
        &lt;option value=&quot;Jan&quot;&gt;Jan&lt;/option&gt;
        &lt;option value=&quot;Feb&quot;&gt;Feb&lt;/option&gt;
        &lt;option value=&quot;Mar&quot;&gt;Mar&lt;/option&gt;
      &lt;/select&gt;
      &lt;select class=&quot;day&quot;&gt;
        &lt;option value=&quot;Day&quot;&gt;Day&lt;/option&gt;
        &lt;option value=&quot;first&quot;&gt;1&lt;/option&gt;
        &lt;option value=&quot;second&quot;&gt;2&lt;/option&gt;
        &lt;option value=&quot;third&quot;&gt;3&lt;/option&gt;
      &lt;/select&gt;
      &lt;select class=&quot;year&quot;&gt;
        &lt;option value=&quot;Year&quot;&gt;Year&lt;/option&gt;
        &lt;option value=&quot;1978&quot;&gt;1978&lt;/option&gt;
        &lt;option value=&quot;1979&quot;&gt;1979&lt;/option&gt;
        &lt;option value=&quot;1980&quot;&gt;1980&lt;/option&gt;
      &lt;/select&gt;
    &lt;/div&gt;

    &lt;div class=&quot;terms&quot;&gt;
      &lt;label for=&quot;terms&quot;&gt;I agree to the terms and conditions &lt;/label&gt;
      &lt;input type=&quot;checkbox&quot; name=&quot;check&quot; value=&quot;terms&quot; required /&gt;
    &lt;/div&gt;
    &lt;input type=&quot;submit&quot;&gt;
  &lt;/form&gt;
&lt;/body&gt;

&lt;/html&gt;

```
Here is some CSS from the basic CSS section that I just finished. There is something like 42 hours of video and assignments.

```css
/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!

/* Give the &lt;body&gt; element a background of #bdc3c7*/

body {
  background: #bdc3c7;
}


/* Make the &lt;h1&gt; element #9b59b6*/

h1 {
  color: #9b59b6;
}

/* Make all &lt;h2&gt; elements orange */

h2 {
  color: orange;
}

/* Make all &lt;li&gt; elements blue(pick your own hexadecimal blue)*/

li {
  color: #459BE6;
}

/*Change the background on every paragraph to be yellow*/

p {
  background: yellow;
}

/*Make all inputs have a 3px red border*/

input {
  border: 3px solid red;
}

/* Give everything with the class &#039;hello&#039; a white background*/

.hello {
  background: white;
}

/* Give the element with id &#039;special&#039; a 2px solid blue border(pick your own rgb blue)*/

#special {
  border: 2px solid #459BE6;
}

/*Make all the &lt;p&gt;&#039;s that are nested inside of divs 25px font(font-size: 25px)*/

div p {
  font-size: 25px;
}

/*Make only inputs with type &#039;text&#039; have a gray background*/

input[type=&quot;text&quot;] {
  background: gray;
}

/* Give both &lt;p&gt;&#039;s inside the 3rd &lt;div&gt; a pink background*/

 div:nth-of-type(3) p {
  background: pink;
}

/* Give the 2nd &lt;p&gt; inside the 3rd &lt;div&gt; a 5px white border*/

div:nth-of-type(3) p:nth-of-type(2) {
  border: 5px solid white;
}

/* Make the &lt;em&gt; in the 3rd &lt;div&gt; element white and 20px font(font-size:20px)*/

div:nth-of-type(3) em {
  color: white;
  font-size: 20px;
}


/*BONUS CHALLENGES*/
/*You may need to research some other selectors and properties*/

/*Make all &quot;checked&quot; checkboxes have a left margin of 50px(margin-left: 50px)*/

input:checked {
  margin-left: 50px;
}

/* Make the &lt;label&gt; elements all UPPERCASE without changing the HTML(definitely look this one up*/

label {
  text-transform: uppercase;
}

/*Make the first letter of the element with id &#039;special&#039; green and 100px font size(font-size: 100)*/

#special::first-letter {
  color: green;
  font-size: 100px;
}
/*Make the &lt;h1&gt; element&#039;s color change to blue when hovered over */

h1:hover {
  color: blue;
}
/*Make the &lt;a&gt; element&#039;s that have been visited gray */

a:visited {
  color: gray;
}
```

## Other Courses

Eventually, I’d like to be an iOS dev at some point. So I bought a Swift course from Steven [^4] and award winning iOS dev from the Hacking With Swift series, Paul Hudson.

I won’t be starting that course until after I start the other course I bought *Modern React with Redux and Webpack*.

Got all of these courses for $10 a piece. Not too bad.


[^1]: Not just jQuery.
[^2]: His apartment has me starry-eyed and wishing for a dev job and I am *totally* California dreamin’.
[^3]: A form. Of all things.




[^4]: Guy’s last name is always escaping me.