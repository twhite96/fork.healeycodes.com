---
ID: 506
title: 'Day 4: Lightbox'
# day-4-lightbox
author: Tiffany White
date: 2015-08-11 19:57:17
layout: post
link: >
  https://tiffanywhite.tech/day-4-lightbox/
published: true
tags:
  - jquery
  - lightboxes
  - Treehouse
categories:
  - Daily Progress
---
<img class=" aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/08/wpid-Screenshot-2015-08-10-22.40.45.png" alt="Day_4" />

So yesterday we made a simple lightbox for a set of images, which I found hard to follow the lesson somehow.

Assigning jQuery elements to a variable has proven to be extremely useful. For instance this bit of code:



<pre class="lang:javascript decode:1 " >var $overlay = $('&amp;lt;div id=&amp;quot;overlay&amp;quot;&amp;gt;&amp;lt;/div&amp;gt;');
var $image = $(&amp;quot;&amp;lt;img&amp;gt;&amp;quot;);
var $caption = $(&amp;quot;&amp;quot;);

$overlay.append($image);
// Add overly

$(&amp;quot;body&amp;quot;).append($overlay);
// An image
 // A caption



<pre class="lang:javascript decode:1 " >var $overlay = $('&amp;lt;div id=&amp;quot;overlay&amp;quot;&amp;gt;&amp;lt;/div&amp;gt;');
var $image = $(&amp;quot;&amp;lt;img&amp;gt;&amp;quot;);
var $caption = $(&amp;quot;&amp;quot;);

$overlay.append($image);
// Add overly

$(&amp;quot;body&amp;quot;).append($overlay);
// An image
 // A caption




$overlay.append($caption);</pre>

We don't have to continually write out jQuery objects, we can just refer to them in the variables that preceded the block of code where we need them.

We did more appending and we learned about the

<pre class="lang:javascript decode:1 " >.attr()</pre>

method which we passed in the string, ("href") after attaching it to

<pre class="lang:javascript decode:1 " >$(this)</pre>

. We wanted to make sure the image we clicked on in the image gallery would execute the behavior we wanted, which was popping up the lightbox. Using

<pre class="lang:javascript decode:1 " >$(this).attr(&amp;quot;href&amp;quot;)</pre>

assured us that we were clicking the linked image attribute in the HTML, and it wouldn't matter which image was clicked. Here is the last part of the code:



<pre class="lang:javascript decode:1 " >//Capture the click event on a link to an image
$(&amp;quot;#imageGallery a&amp;quot;).click(function(event){
   event.preventDefault();
   var imageLocation = $(this).attr(&amp;quot;href&amp;quot;);
 //Update overlay with the image linked in the link
   $image.attr(&amp;quot;src&amp;quot;, imageLocation);

//Show the overlay.
   $overlay.show();

//Get child's alt attribute and set caption
   var captionText = $(this).children(&amp;quot;img&amp;quot;).attr(&amp;quot;alt&amp;quot;);
   $caption.text(captionText);

});

//When overlay is clicked
  $overlay.click(function(){
 //Hide the overlay
  $overlay.hide();



<pre class="lang:javascript decode:1 " >//Capture the click event on a link to an image
$(&amp;quot;#imageGallery a&amp;quot;).click(function(event){
   event.preventDefault();
   var imageLocation = $(this).attr(&amp;quot;href&amp;quot;);
 //Update overlay with the image linked in the link
   $image.attr(&amp;quot;src&amp;quot;, imageLocation);

//Show the overlay.
   $overlay.show();

//Get child's alt attribute and set caption
   var captionText = $(this).children(&amp;quot;img&amp;quot;).attr(&amp;quot;alt&amp;quot;);
   $caption.text(captionText);

});

//When overlay is clicked
  $overlay.click(function(){
 //Hide the overlay
  $overlay.hide();




});</pre>