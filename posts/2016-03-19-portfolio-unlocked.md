---
ID: 972
title: 'Free Code Camp Portfolio: Unlocked'
# portfolio-unlocked
author: Tiffany White
date: 2016-03-19 19:01:22
layout: post
link: >
  https://tiffanywhite.tech/portfolio-unlocked/
published: true
tags: uncategorized
categories:
  - Daily Progress
  - Free Code Camp
  - Front-End
  - Programming
  - "Tiffany's Posts"
  - Web Development
---


<a href="https://helloburgh.me/wp-content/uploads/2016/03/JPEG-image-573A94AF296B-1-1.jpeg" rel="attachment wp-att-978"><img class="aligncenter wp-image-978" src="https://helloburgh.me/wp-content/uploads/2016/03/JPEG-image-573A94AF296B-1-1.jpeg" alt="JPEG image-573A94AF296B-1" width="559" height="567" /></a>So I started the portfolio project on March 10th and finished it today. I had help from the Gitter chat but not as much as last time.

I took the example code and re-engineered it to fit what I wanted to do. I added an unordered list, a cover photo, a mailto: link and a few other things.

The thing I struggled with the most was horizontal scrolling on mobile with Bootstrap. When looking at the Pen on mobile, you had some overflow, which totally defeats the purpose of a responsive design! So I went to Google and found a few Stack Overflow articles and found the right media query along with some other css that I edited to fit my project. I used:
<pre class="lang:css decode:1 ">@media screen and (max-width: 767px) {
  body {
  overflow-x: hidden !important;
}
.container {
   max-width: 100% !important;
   overflow-x: hidden !important;
   margin-left: auto;
   margin-right: auto;
   padding-left: 0px;
   padding-right: 0px;
   }
}

</pre>
This allowed me to negated the overflow on the x axis part of the page which is horizontal. You essentially hide the overflow. But that wasn’t enough. Adjusting the margins and padding really made the responsiveness on my iPhone so much better.

You can find the Pen below.




<a href="https://helloburgh.me/wp-content/uploads/2016/03/JPEG-image-573A94AF296B-1-1.jpeg" rel="attachment wp-att-978"><img class="aligncenter wp-image-978" src="https://helloburgh.me/wp-content/uploads/2016/03/JPEG-image-573A94AF296B-1-1.jpeg" alt="JPEG image-573A94AF296B-1" width="559" height="567" /></a>So I started the portfolio project on March 10th and finished it today. I had help from the Gitter chat but not as much as last time.

I took the example code and re-engineered it to fit what I wanted to do. I added an unordered list, a cover photo, a mailto: link and a few other things.

The thing I struggled with the most was horizontal scrolling on mobile with Bootstrap. When looking at the Pen on mobile, you had some overflow, which totally defeats the purpose of a responsive design! So I went to Google and found a few Stack Overflow articles and found the right media query along with some other css that I edited to fit my project. I used:
<pre class="lang:css decode:1 ">@media screen and (max-width: 767px) {
  body {
  overflow-x: hidden !important;
}
.container {
   max-width: 100% !important;
   overflow-x: hidden !important;
   margin-left: auto;
   margin-right: auto;
   padding-left: 0px;
   padding-right: 0px;
   }
}

</pre>
This allowed me to negated the overflow on the x axis part of the page which is horizontal. You essentially hide the overflow. But that wasn’t enough. Adjusting the margins and padding really made the responsiveness on my iPhone so much better.

You can find the Pen below.





http://codepen.io/twhite96/pen/GZJRJz