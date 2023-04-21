---
ID: 544
title: 'Day 6: Password Forms &#038; Tooltips'
# day-6-password-forms-tooltips
author: Tiffany White
date: 2015-08-18 17:27:21
layout: post
link: >
  https://tiffanywhite.tech/day-6-password-forms-tooltips/
published: true
tags:
  - daily progress
  - day 6
  - jquery
  - Treehouse
categories:
  - Daily Progress
---
<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/08/wpid-Screenshot-2015-08-15.png" alt="Day_6_badge" />

Here we just iterated on what we learned previously with:

<pre class="lang:javascript decode:1 " >.prop() .hide() .show() .val()</pre>

We learned two new methods,

<pre class="lang:javascript decode:1 " >.focus()</pre>

and

<pre class="lang:javascript decode:1 " >.keyup()</pre>

in relation to making it so the tooltips showed up when we clicked in the form’s password box, the tool tip being “password needs to be greater than 8 characters”. Once the 8 characters were put in, the tool tip disappeared.

The code looked something like this:



<pre class="lang:javascript decode:1 " >//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $(&quot;#password&quot;);
var $confirmPassword = $(&quot;#confirm_password&quot;);

//Hide hints
$(&quot;form span&quot;).hide();

function isPasswordValid() {
 return $password.val().length &lt; 8;
}

function arePasswordsMatching() {
 return $password.val() === $confirmPassword.val();
}

function canSubmit() {
 return isPasswordValid() &amp;&amp; arePasswordsMatching() &amp;&amp; isUsernamePresent();
}

function passwordEvent(){
 //Find out if password is valid
 if(isPasswordValid()) {
 //Hide hint if valid
 $password.next().hide();
 } else {
 //else show hint
 $password.next().show();
 }
}



<pre class="lang:javascript decode:1 " >//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $(&quot;#password&quot;);
var $confirmPassword = $(&quot;#confirm_password&quot;);

//Hide hints
$(&quot;form span&quot;).hide();

function isPasswordValid() {
 return $password.val().length &lt; 8;
}

function arePasswordsMatching() {
 return $password.val() === $confirmPassword.val();
}

function canSubmit() {
 return isPasswordValid() &amp;&amp; arePasswordsMatching() &amp;&amp; isUsernamePresent();
}

function passwordEvent(){
 //Find out if password is valid
 if(isPasswordValid()) {
 //Hide hint if valid
 $password.next().hide();
 } else {
 //else show hint
 $password.next().show();
 }
}




</pre>

We practiced DRY programming by wrapping our resued methods, variables, etc in functions.