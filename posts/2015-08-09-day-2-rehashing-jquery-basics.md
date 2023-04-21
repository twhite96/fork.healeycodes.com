---
ID: 475
title: 'Day 2: Rehashing jQuery Basics'
# day-2-rehashing-jquery-basics
author: Tiffany White
date: 2015-08-09 00:31:40
layout: post
link: >
  https://tiffanywhite.tech/day-2-rehashing-jquery-basics/
published: true
tags:
  - Codecademy
  - day 2
  - free code camp
  - programming
  - Treehouse
  - updates
categories:
  - Uncategorized
---
<img class=" aligncenter" src="https://helloburgh.me/wp-content/uploads/2015/08/wpid-Screenshot-2015-08-08-22.55.03.png" alt="jQuery_badge" width="302" height="245" />

So today I went over jQuery basics, documentation and a total disruption of what I learned on Free Code Camp and Codecademy.

At both Free Code Camp and Codecademy I learned to write:

[code language="javascript"]$(document).ready[/code]

before all the other code to help load the DOM before the rest of the page gets loaded. Without that, the wisdom was, some of your code wouldn’t load first, animations, etc would break because they were loaded a little down further in your js document.

But throughout Treehouse courses we always put the script tags at the end of the HTML document, right before the end

<pre class="lang:html decode:1 " >&lt;body&gt;</pre>

tag. This loads the document <strong>first</strong> before any JavaScript or jQuery.

So imagine my surprise when we were writing:

[code language="javascript"]$(“.warning”).hide().show(“slow”);[/code]

without the

[code language="javascript"]$(document).ready[/code]

at the top of the document.

Basically it was all videos. I’ll post more tomorrow as I do it. Excited about my progress.