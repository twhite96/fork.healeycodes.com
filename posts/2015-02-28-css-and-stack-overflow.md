---
ID: 110
title: CSS and Stack Overflow
# css-and-stack-overflow
author: Tiffany White
date: 2015-02-28 20:30:57
layout: post
link: >
  https://tiffanywhite.tech/css-and-stack-overflow/
published: true
tags:
  - css
  - stack overflow
  - web development
categories:
  - Communities
  - Web Development
---
<h1><a href="https://helloburgh.me/wp-content/uploads/2015/02/wpid-6a0120a85dcdae970b012877705432970c-pi.jpg"><img class=" wp-image-109 aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/02/wpid-6a0120a85dcdae970b012877705432970c-pi.jpg?w=300" alt="wpid-6a0120a85dcdae970b012877705432970c-pi.jpg" width="405" height="340" /></a></h1>

&nbsp;

My friend Piper put me on the correct path for my footer with the following code:



<pre class="lang:css decode:1 " >
footer div {

width: 32%;

background: rgba(113,15,154,0.73);

border: 1px solid rgba(255,255,255,0.00);

display: inline-block;

vertical-align: top;

overflow-x: none;

}

footer div p {

max-width: 100%;

margin-left: 0;

padding: 0;

}




<pre class="lang:css decode:1 " >
footer div {

width: 32%;

background: rgba(113,15,154,0.73);

border: 1px solid rgba(255,255,255,0.00);

display: inline-block;

vertical-align: top;

overflow-x: none;

}

footer div p {

max-width: 100%;

margin-left: 0;

padding: 0;

}





</pre>

But that left me with some janky (my new favorite word, apparently) formatting that I could not get rid of by myself. Stack Overflow to the rescue!

<strong>So</strong>. I got four answers and tried three before I tried this:



<pre class="lang:css decode:1 " >
footer {

background: rgba(113,15,154,0.73);

}

footer div {

width: 32%;

border: 1px solid rgba(255,255,255,0.00);

display: inline-block;

vertical-align: top;

text-align: center;

}

footer div section {

max-width: 100%;

margin: auto;

padding: 20px;

text-align: center;

}




<pre class="lang:css decode:1 " >
footer {

background: rgba(113,15,154,0.73);

}

footer div {

width: 32%;

border: 1px solid rgba(255,255,255,0.00);

display: inline-block;

vertical-align: top;

text-align: center;

}

footer div section {

max-width: 100%;

margin: auto;

padding: 20px;

text-align: center;

}





</pre>

And <strong>boom</strong>. Fixed…but not quite.

There was an issue with the Font Awesome icons that I still can’t get right– the dribble icon was floating right of the footer. I decided to put the icons in a div id container and style it. That has worked– the icons are all at the bottom but no matter what I do, I can’t get them to float left.

Here is the HTML:



<pre class="lang:html decode:1 " >
 &lt;div id=&quot;container&quot;&gt;
 &lt;a href=&quot;https://www.behance.net/twhite412photo&quot;&gt;&lt;i class=&quot;fa fa-behance-square fa-2x&quot;&gt;&lt;/i&gt;&lt;/a&gt;
 &lt;a href=&quot;https://www.linkedin.com/in/tiffanyrwhite/&quot;&gt;&lt;i class=&quot;fa fa-linkedin-square fa-2x&quot;&gt;&lt;/i&gt;&lt;/a&gt;
 &lt;a href=&quot;https://twitter.com/TiffanyW_412&quot;&gt;&lt;i class=&quot;fa fa-twitter-square fa-2x&quot;&gt;&lt;/i&gt;&lt;/a&gt;
 &lt;a href=&quot;https://github.com/twhite96&quot;&gt;&lt;i class=&quot;fa fa-github fa-2x&quot;&gt;&lt;/i&gt;&lt;/a&gt;
 &lt;a href=&quot;https://plus.google.com/+TiffanyWhiteWriter&quot;&gt;&lt;i class=&quot;fa fa-google-plus-square fa-2x&quot;&gt;&lt;/i&gt;&lt;/a&gt;
 &lt;/div&gt;



<pre class="lang:html decode:1 " >
 &lt;div id=&quot;container&quot;&gt;
 &lt;a href=&quot;https://www.behance.net/twhite412photo&quot;&gt;&lt;i class=&quot;fa fa-behance-square fa-2x&quot;&gt;&lt;/i&gt;&lt;/a&gt;
 &lt;a href=&quot;https://www.linkedin.com/in/tiffanyrwhite/&quot;&gt;&lt;i class=&quot;fa fa-linkedin-square fa-2x&quot;&gt;&lt;/i&gt;&lt;/a&gt;
 &lt;a href=&quot;https://twitter.com/TiffanyW_412&quot;&gt;&lt;i class=&quot;fa fa-twitter-square fa-2x&quot;&gt;&lt;/i&gt;&lt;/a&gt;
 &lt;a href=&quot;https://github.com/twhite96&quot;&gt;&lt;i class=&quot;fa fa-github fa-2x&quot;&gt;&lt;/i&gt;&lt;/a&gt;
 &lt;a href=&quot;https://plus.google.com/+TiffanyWhiteWriter&quot;&gt;&lt;i class=&quot;fa fa-google-plus-square fa-2x&quot;&gt;&lt;/i&gt;&lt;/a&gt;
 &lt;/div&gt;




</pre>

And the CSS:



<pre class="lang:css decode:1 " >
footer div container{
 float: left;
}



<pre class="lang:css decode:1 " >
footer div container{
 float: left;
}




</pre>

<em>Sigh</em>. It is almost 2 am in Pittsburgh and I have been messing with this for the past two days. It isn’t where I want it, regardless of the hinky CSS. I need JavaScript and JQuery to make it not just a static page. Maybe some CSS animations. Don’t know. Yesterday I thought, “this will be up in running in three months, tops, regardless of if I’m ready to freelance”. Today I’m back down to earth.