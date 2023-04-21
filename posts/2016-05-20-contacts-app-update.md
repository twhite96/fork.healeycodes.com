---
ID: 1109
title: Contacts App Update
# contacts-app-update
author: Tiffany White
date: 2016-05-20 01:30:56
layout: post
link: >
  https://tiffanywhite.tech/contacts-app-update/
published: true
tags: uncategorized
categories:
  - Daily Updates
  - Programming
---


<a href="https://helloburgh.me/wp-content/uploads/2016/05/Optimized-itunes-session.jpg"><img class="alignleft size-full wp-image-1112" src="https://helloburgh.me/wp-content/uploads/2016/05/Optimized-itunes-session.jpg" alt="working_on_contacts_app" width="1000" height="666" /></a>

&nbsp;

I haven’t written an article in a week or so. I have lost time or something because I don’t remember what I did while I was away. I did work some Free Code Camp, ran some errands, had a doctor’s appointment and went out with a friend from back home.

So these past two days I have been working on the contacts app I have been working on for forever. I did some of the logic a week or so ago but in the meantime, I wanted to go from pill navigation to navbar navigation. The problem I had was responsive/collapsable navbar. I am trying to follow the Bootstrap docs but I am not having much success.
<h2>Navbar Code</h2>
My navbar code is as follows:

<pre class="lang:html decode:1 " >

&lt;!-- Navbar content collapse --&gt;

 &lt;nav class=&quot;navbar navbar-dark bg-primary navbar-fixed-top&quot;&gt;
  &lt;div class=&quot;container-fluid&quot;&gt;
    &lt;div class=&quot;navbar-header&quot;&gt;
      &lt;button type=&quot;button&quot; class=&quot;navbar-toggle&quot; data-toggle=&quot;collapse&quot; data-target=&quot;#myNavbar&quot;&gt;
	&lt;span class=&quot;icon-bar&quot;&gt;&lt;/span&gt;
	&lt;span class=&quot;icon-bar&quot;&gt;&lt;/span&gt;
	&lt;span class=&quot;icon-bar&quot;&gt;&lt;/span&gt;
      &lt;/button&gt;
   &lt;a class=&quot;navbar-brand&quot; href=&quot;#&quot;&gt;Contacts App&lt;/a&gt;
&lt;/div&gt;
&lt;!-- Navbar content --&gt;
&lt;ul class=&quot;nav navbar-nav&quot;&gt;
 	&lt;li class=&quot;&quot;&gt;&lt;a class=&quot;nav-link&quot; href=&quot;index.html&quot;&gt;My Contacts &lt;span class=&quot;sr-only&quot;&gt;(current)&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
 	&lt;li class=&quot;nav-item&quot;&gt;&lt;a class=&quot;nav-link&quot; href=&quot;addContacts.html&quot;&gt;Add Contacts&lt;/a&gt;&lt;/li&gt;
 	&lt;li class=&quot;nav-iten&quot;&gt;&lt;a class=&quot;nav-link&quot; href=&quot;Phone.html&quot;&gt;Phone&lt;/a&gt;&lt;/li&gt;
 	&lt;li class=&quot;nav-item&quot;&gt;&lt;a class=&quot;nav-link&quot; href=&quot;Email.html&quot;&gt;Email&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;!-- Search bar content --&gt;

&lt;form class=&quot;form-inline pull-xs-right&quot;&gt;&lt;input class=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Search&quot; /&gt;
&lt;button class=&quot;btn btn-success-outline&quot; type=&quot;submit&quot;&gt;Search&lt;/button&gt;&lt;/form&gt;&lt;/div&gt;
&lt;/nav&gt;</pre>

Not sure what is happening but it looks like this:

<a href="https://helloburgh.me/wp-content/uploads/2016/05/Screenshot2016-05-20_12-57-54_AM.png"><img class="alignleft size-large wp-image-1111" src="https://helloburgh.me/wp-content/uploads/2016/05/Screenshot2016-05-20_12-57-54_AM-1024x620.png" alt="contacts_app" width="700" height="424" /></a>
<h2>The Logic</h2>
My js is pretty basic right now. I want to have a better framework for the logic and I have a TaskPaper list to sort of flesh this stuff out.

Here is the logic I have currently:

<pre class="lang:javascript decode:1 " >

// Empty arrays to push contacts onto.

var names = {

   [];

};

var emails = {

   [];

};

var telenums = {

   [];

};

// Need to write a function to gather first names and last names through input

function getInput() {

  var userName = document.getElementById('inputName');

  var userEmail = document.getElementById('inputEmail');

  var userTeleNum = document.getElementById('inputPhoneNumber');

}

$('#form').on('submit', function () {

   //your awesome code here

   alert('Got it!');

})

// Need to write a function gather phone numbers through input

// Need to write a function to gather emails through input.

</pre>

Now this isn’t passing Travis CI tests, obviously. I don’t think it will pass until I figure it out better and the basic logic here is sound.
<h2>Updated Docs</h2>
You can find my updated docs <a href="https://twhite96.github.io/contacts-app/index.html" target="_blank">here</a>
<h2>On the Grind</h2>
Some video fun.




<a href="https://helloburgh.me/wp-content/uploads/2016/05/Optimized-itunes-session.jpg"><img class="alignleft size-full wp-image-1112" src="https://helloburgh.me/wp-content/uploads/2016/05/Optimized-itunes-session.jpg" alt="working_on_contacts_app" width="1000" height="666" /></a>

&nbsp;

I haven’t written an article in a week or so. I have lost time or something because I don’t remember what I did while I was away. I did work some Free Code Camp, ran some errands, had a doctor’s appointment and went out with a friend from back home.

So these past two days I have been working on the contacts app I have been working on for forever. I did some of the logic a week or so ago but in the meantime, I wanted to go from pill navigation to navbar navigation. The problem I had was responsive/collapsable navbar. I am trying to follow the Bootstrap docs but I am not having much success.
<h2>Navbar Code</h2>
My navbar code is as follows:

<pre class="lang:html decode:1 " >

&lt;!-- Navbar content collapse --&gt;

 &lt;nav class=&quot;navbar navbar-dark bg-primary navbar-fixed-top&quot;&gt;
  &lt;div class=&quot;container-fluid&quot;&gt;
    &lt;div class=&quot;navbar-header&quot;&gt;
      &lt;button type=&quot;button&quot; class=&quot;navbar-toggle&quot; data-toggle=&quot;collapse&quot; data-target=&quot;#myNavbar&quot;&gt;
	&lt;span class=&quot;icon-bar&quot;&gt;&lt;/span&gt;
	&lt;span class=&quot;icon-bar&quot;&gt;&lt;/span&gt;
	&lt;span class=&quot;icon-bar&quot;&gt;&lt;/span&gt;
      &lt;/button&gt;
   &lt;a class=&quot;navbar-brand&quot; href=&quot;#&quot;&gt;Contacts App&lt;/a&gt;
&lt;/div&gt;
&lt;!-- Navbar content --&gt;
&lt;ul class=&quot;nav navbar-nav&quot;&gt;
 	&lt;li class=&quot;&quot;&gt;&lt;a class=&quot;nav-link&quot; href=&quot;index.html&quot;&gt;My Contacts &lt;span class=&quot;sr-only&quot;&gt;(current)&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
 	&lt;li class=&quot;nav-item&quot;&gt;&lt;a class=&quot;nav-link&quot; href=&quot;addContacts.html&quot;&gt;Add Contacts&lt;/a&gt;&lt;/li&gt;
 	&lt;li class=&quot;nav-iten&quot;&gt;&lt;a class=&quot;nav-link&quot; href=&quot;Phone.html&quot;&gt;Phone&lt;/a&gt;&lt;/li&gt;
 	&lt;li class=&quot;nav-item&quot;&gt;&lt;a class=&quot;nav-link&quot; href=&quot;Email.html&quot;&gt;Email&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;!-- Search bar content --&gt;

&lt;form class=&quot;form-inline pull-xs-right&quot;&gt;&lt;input class=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Search&quot; /&gt;
&lt;button class=&quot;btn btn-success-outline&quot; type=&quot;submit&quot;&gt;Search&lt;/button&gt;&lt;/form&gt;&lt;/div&gt;
&lt;/nav&gt;</pre>

Not sure what is happening but it looks like this:

<a href="https://helloburgh.me/wp-content/uploads/2016/05/Screenshot2016-05-20_12-57-54_AM.png"><img class="alignleft size-large wp-image-1111" src="https://helloburgh.me/wp-content/uploads/2016/05/Screenshot2016-05-20_12-57-54_AM-1024x620.png" alt="contacts_app" width="700" height="424" /></a>
<h2>The Logic</h2>
My js is pretty basic right now. I want to have a better framework for the logic and I have a TaskPaper list to sort of flesh this stuff out.

Here is the logic I have currently:

<pre class="lang:javascript decode:1 " >

// Empty arrays to push contacts onto.

var names = {

   [];

};

var emails = {

   [];

};

var telenums = {

   [];

};

// Need to write a function to gather first names and last names through input

function getInput() {

  var userName = document.getElementById('inputName');

  var userEmail = document.getElementById('inputEmail');

  var userTeleNum = document.getElementById('inputPhoneNumber');

}

$('#form').on('submit', function () {

   //your awesome code here

   alert('Got it!');

})

// Need to write a function gather phone numbers through input

// Need to write a function to gather emails through input.

</pre>

Now this isn’t passing Travis CI tests, obviously. I don’t think it will pass until I figure it out better and the basic logic here is sound.
<h2>Updated Docs</h2>
You can find my updated docs <a href="https://twhite96.github.io/contacts-app/index.html" target="_blank">here</a>
<h2>On the Grind</h2>
Some video fun.





https://www.instagram.com/p/BFm9gRoPHd9/?taken-by=twhitedev412&hl=en