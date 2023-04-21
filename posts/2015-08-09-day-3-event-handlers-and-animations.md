---
ID: 491
title: 'Day 3: Event Handlers and Animations'
# day-3-event-handlers-and-animations
author: Tiffany White
date: 2015-08-09 23:05:45
layout: post
link: >
  https://tiffanywhite.tech/day-3-event-handlers-and-animations/
published: true
tags:
  - Codecademy
  - day 3
  - free code camp
  - Treehouse
  - updates
categories:
  - Daily Progress
---
<img class=" aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/08/wpid-Screenshot-2015-08-09-20.08.12.png" alt="Day_3_badge" />

I only did one jQuery class today as I had a lot to get done otherwise, but we went over documentation (which I never use the browser for because <a href="https://kapeli.com/dash">Dash</a>) and preparing your prototype with comments, looking at your HTML file to see what you need to animate.

We went over manipulating the DOM (more on that in a moment) and Traversing the DOM and Event Handlers.

So you can manipulate the DOM with the [jquery].hide()[/jquery] method as well as the

<pre class="lang:javascript decode:1 " >.show()</pre>

. But we also added a button to the DOM in the HTML with this

<pre class="lang:javascript decode:1 " >$(&quot;.spoiler&quot;).append(&quot;&lt;button&gt;Reveal Spoiler!&lt;/button&gt;&quot;);</pre>

Also we went over event handlers. So now that we have the button made in our HTML you can add a

<pre class="lang:javascript decode:1 " >$(&quot;button&quot;).click(function(){});</pre>

with passing an anonymous function in order to do something when the button we made is pressed.

<h2>$(this)</h2>

So in the code block with the button selector with the [jquery].click(function() {});[/jquery] you can <strong>do</strong> nifty things. So inside this code block we used



<pre class="lang:javascript decode:1 " >$(this).show();
$(this).remove();

<pre class="lang:javascript decode:1 " >$(this).show();
$(this).remove();


<pre class="lang:javascript decode:1 " >$(this).show();
$(this).remove();

</pre>

I hadn’t really gotten my head around [jquery]$(this)[/jquery] until he explained that since we had two

<pre class="lang:html decode:1 " >&lt;span&gt;</pre>

elements under the



<pre class="lang:html decode:1 " >
&lt;div class= &quot;spoiler&quot;&lt;/div&gt;





<pre class="lang:html decode:1 " >
&lt;div class= &quot;spoiler&quot;&lt;/div&gt;






</pre>

we needed to specify which button the

<pre class="lang:javascript decode:1 " >.show();</pre>

and

<pre class="lang:javascript decode:1 " >.remove();</pre>

when clicked. So I found that

<pre class="lang:javascript decode:1 " >$(this)</pre>

is magical. So when I click on the first spoiler button, this knows what to do with it. It knows I’m not clicking the second spoiler button. It knows to hide remove the second one when I am clicking the first. Cool stuff.

It was a pretty easy lesson since I have gone over this on Codecademy and Free Code Camp. But refresher is great for reinforcement.