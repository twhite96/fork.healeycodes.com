---
ID: 944
title: FCC Front-End Programming Project
# front-end-programming-project
author: Tiffany White
date: 2016-03-10 22:47:41
layout: post
link: >
  https://tiffanywhite.tech/front-end-programming-project/
published: true
tags: uncategorized
categories:
  - Daily Progress
  - Free Code Camp
  - Front-End
  - General Updates
  - Programming
  - "Tiffany's Posts"
  - Web Development
---


<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/03/front-end.jpeg" alt="front-end_programming" />

So I started the second front-end programming project for Free Code Camp which is the portfolio. I shared a Pen from a former Free Code Camp alum who built an interesting portfolio, which is what Free Code Camp uses as their example, which is high-praise.

I had trouble with getting my background image to show. I had this as my html:
<pre class="lang:html decode:1 ">&lt;div class="container-fluid"&gt;&lt;img class="" src="https://4.bp.blogspot.com/-pigPfRWS3Sw/VWX-feGd7II/AAAAAAABjLE/K3JemRkjclI/s0/Coding_with_Style_wallpaper.jpg" alt="" /&gt;
</pre>
This didn’t make it responsive, however. So I did this:
<pre class="lang:html decode:1 ">&lt;div class="container-fluid"&gt;&lt;img class="img-responsive" src="https://4.bp.blogspot.com/-pigPfRWS3Sw/VWX-feGd7II/AAAAAAABjLE/K3JemRkjclI/s0/Coding_with_Style_wallpaper.jpg" alt="" /&gt;
</pre>
It still didn’t work.So I went to the Gitter chat and asked around. Someone suggested adding the image to a div and not inside a container inside another div.

So I did this:
<pre class="lang:html decode:1 ">&lt;div id="mySection" class="container-fluid"&gt;

</pre>
<pre class="lang:css decode:1 ">padding-top: 50px;
display: block;
height: 200%;
background: url(“https://4.bp.blogspot.com/-pigPfRWS3Sw/VWX-feGd7II/AAAAAAABjLE/K3JemRkjclI/s0/Coding_with_Style_wallpaper.jpg”) no-repeat center fixed;
background-size: cover;
text-align: center;
padding-bottom: 100px;
color: #fff;
</pre>
Someone gave me this suggestion in the Gitter chat. This made the background a sliver across the screen. He told me to play with the padding at the bottom. So I ended up with:
<pre class="lang:css decode:1 ">padding-top: 50px;
display: block;
height: 200%;
background: url(“https://4.bp.blogspot.com/-pigPfRWS3Sw/VWX-feGd7II/AAAAAAABjLE/K3JemRkjclI/s0/Coding_with_Style_wallpaper.jpg”) no-repeat center fixed;
background-size: cover;
text-align: center;
padding-bottom: 2000px;
color: #fff;
</pre>
I also found a stray div with my navigation. Now it’s starting to look good.




<img class="aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/03/front-end.jpeg" alt="front-end_programming" />

So I started the second front-end programming project for Free Code Camp which is the portfolio. I shared a Pen from a former Free Code Camp alum who built an interesting portfolio, which is what Free Code Camp uses as their example, which is high-praise.

I had trouble with getting my background image to show. I had this as my html:
<pre class="lang:html decode:1 ">&lt;div class="container-fluid"&gt;&lt;img class="" src="https://4.bp.blogspot.com/-pigPfRWS3Sw/VWX-feGd7II/AAAAAAABjLE/K3JemRkjclI/s0/Coding_with_Style_wallpaper.jpg" alt="" /&gt;
</pre>
This didn’t make it responsive, however. So I did this:
<pre class="lang:html decode:1 ">&lt;div class="container-fluid"&gt;&lt;img class="img-responsive" src="https://4.bp.blogspot.com/-pigPfRWS3Sw/VWX-feGd7II/AAAAAAABjLE/K3JemRkjclI/s0/Coding_with_Style_wallpaper.jpg" alt="" /&gt;
</pre>
It still didn’t work.So I went to the Gitter chat and asked around. Someone suggested adding the image to a div and not inside a container inside another div.

So I did this:
<pre class="lang:html decode:1 ">&lt;div id="mySection" class="container-fluid"&gt;

</pre>
<pre class="lang:css decode:1 ">padding-top: 50px;
display: block;
height: 200%;
background: url(“https://4.bp.blogspot.com/-pigPfRWS3Sw/VWX-feGd7II/AAAAAAABjLE/K3JemRkjclI/s0/Coding_with_Style_wallpaper.jpg”) no-repeat center fixed;
background-size: cover;
text-align: center;
padding-bottom: 100px;
color: #fff;
</pre>
Someone gave me this suggestion in the Gitter chat. This made the background a sliver across the screen. He told me to play with the padding at the bottom. So I ended up with:
<pre class="lang:css decode:1 ">padding-top: 50px;
display: block;
height: 200%;
background: url(“https://4.bp.blogspot.com/-pigPfRWS3Sw/VWX-feGd7II/AAAAAAABjLE/K3JemRkjclI/s0/Coding_with_Style_wallpaper.jpg”) no-repeat center fixed;
background-size: cover;
text-align: center;
padding-bottom: 2000px;
color: #fff;
</pre>
I also found a stray div with my navigation. Now it’s starting to look good.





http://codepen.io/twhite96/pen/dMbwyM