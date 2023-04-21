---
ID: 1198
title: Random Quote Generator Woes
# random-quote-generator-woes
author: Tiffany White
date: 2016-07-05 22:21:35
layout: post
link: >
  https://tiffanywhite.tech/random-quote-generator-woes/
published: true
tags: uncategorized
categories:
  - Daily Progress
  - Free Code Camp
  - Programming
---


<img class="aligncenter size-full wp-image-1202" src="https://helloburgh.me/wp-content/uploads/2016/07/Optimized-frustrated_shrink.jpg" alt="frustrated" width="1000" height="666" />

I spent a lot of time looking over Chris Coyer’s magical looking <em>Quotes on Design</em> website. I’ve also spent a lot of time looking at its structure in Chrome Dev Tools. I’ve played around with it and I am sort of stuck.

I even went back into Free Code Camp CSS waypoints to figure out the difference between <code>margin</code>, <code>padding</code>, inline styles, and <code>!important</code>. I went to Stack Overflow and got some advice but the end result still wasn’t what I wanted. I uploaded my prototype but they still didn’t get it quite right. I mean, they did a really weird job of it.

I could definitely go to the Free Code Camp forums but I am hesitant to. I went to the Gitter chat and I didn’t get the <em>right</em> help at the time. I have been picking bits and pieces out of Chris’s website and scouring the web for more information on how to make this work. I even spent 8 hours last week solely on web development, close to 3 hours a day on the days I worked on it.

<img class="aligncenter size-large wp-image-1201" src="https://helloburgh.me/wp-content/uploads/2016/07/Screenshot2016-06-26_09-42-56_PM_shrink-1024x640.png" alt="Screenshot2016-06-26_09-42-56_PM_shrink" width="700" height="438" />

I could definitely do more but I am trying to get healthy so I am back at the gym three days a week and fitting in three hours of work is about all I can do.

Last week I was burnt out. I had worked really hard on the Random Quote Generator and working out and doing other things that I just didn’t have any energy last week and I am finding it increasingly hard to get back into it. I have bitten off way more than I could chew with this design but I am not going to scrap it. I will learn as I go. I will go back to Gitter, to the forums and see what I can get.
<h2>They Say Building is How You Learn</h2>
I am trying. I see so many of the Random Quote Generators and they are extremely simple in design. I fell in love with Chris’s design without Chris’s skill and I am paying for it.

I found some code for the random quotes that uses jQuery. Here it is:
<pre class="lang:js decode:true ">var quoteMachine = {
	quoteArray: [],
	count: 0,
	init: function(){
		$.getJSON("https://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&amp;filter[posts_per_page]=40&amp;callback=", function(data) {
			quoteMachine.quoteArray = data;
			quoteMachine.placeQuote();
			$("#buttons").css("visibility", "visible");
		});
		$("#newQuote").on("click", this.newQuote);
		$("#tweetMe").on("click", this.tweet);
	},
	placeQuote: function(){
		$("#quoteContent").html("&lt;h3&gt;" + quoteMachine.quoteArray[quoteMachine.count].content + "&lt;/h3&gt;");
		$("#quoteTitle").html("&lt;h4&gt; - " + quoteMachine.quoteArray[quoteMachine.count].title: + "&lt;/h4&gt;");
	},
	newQuote: function(){
		if(quoteMachine.count &lt; 39){
			quoteMachine.count++;
		}else{
			quoteMachine.count = 0;
		}

		quoteMachine.placeQuote();
	},
	tweet: function(){
		var content = quoteMachine.quoteArray[quoteMachine.count].content;
		content = content.substring(3, content.length -5);
		content = content.replace(/&amp;#.{4};/g, "");
		content = encodeURIComponent(content);
		var title: = quoteMachine.quoteArray[quoteMachine.count].title:;
		var message = content + " -" + title: + "%20#randomQuote%20#FCC";
		window.open("http://twitter.com/home/?status=" + message);
	}
};

quoteMachine.init();
</pre>
Now, I am going to try to reverse engineer this to use the <em>Quotes on Design</em> API 4.0. There are parts of this that baffle me and parts that I understand.
<h2>Seeking Help</h2>



<img class="aligncenter size-full wp-image-1202" src="https://helloburgh.me/wp-content/uploads/2016/07/Optimized-frustrated_shrink.jpg" alt="frustrated" width="1000" height="666" />

I spent a lot of time looking over Chris Coyer’s magical looking <em>Quotes on Design</em> website. I’ve also spent a lot of time looking at its structure in Chrome Dev Tools. I’ve played around with it and I am sort of stuck.

I even went back into Free Code Camp CSS waypoints to figure out the difference between <code>margin</code>, <code>padding</code>, inline styles, and <code>!important</code>. I went to Stack Overflow and got some advice but the end result still wasn’t what I wanted. I uploaded my prototype but they still didn’t get it quite right. I mean, they did a really weird job of it.

I could definitely go to the Free Code Camp forums but I am hesitant to. I went to the Gitter chat and I didn’t get the <em>right</em> help at the time. I have been picking bits and pieces out of Chris’s website and scouring the web for more information on how to make this work. I even spent 8 hours last week solely on web development, close to 3 hours a day on the days I worked on it.

<img class="aligncenter size-large wp-image-1201" src="https://helloburgh.me/wp-content/uploads/2016/07/Screenshot2016-06-26_09-42-56_PM_shrink-1024x640.png" alt="Screenshot2016-06-26_09-42-56_PM_shrink" width="700" height="438" />

I could definitely do more but I am trying to get healthy so I am back at the gym three days a week and fitting in three hours of work is about all I can do.

Last week I was burnt out. I had worked really hard on the Random Quote Generator and working out and doing other things that I just didn’t have any energy last week and I am finding it increasingly hard to get back into it. I have bitten off way more than I could chew with this design but I am not going to scrap it. I will learn as I go. I will go back to Gitter, to the forums and see what I can get.
<h2>They Say Building is How You Learn</h2>
I am trying. I see so many of the Random Quote Generators and they are extremely simple in design. I fell in love with Chris’s design without Chris’s skill and I am paying for it.

I found some code for the random quotes that uses jQuery. Here it is:
<pre class="lang:js decode:true ">var quoteMachine = {
	quoteArray: [],
	count: 0,
	init: function(){
		$.getJSON("https://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&amp;filter[posts_per_page]=40&amp;callback=", function(data) {
			quoteMachine.quoteArray = data;
			quoteMachine.placeQuote();
			$("#buttons").css("visibility", "visible");
		});
		$("#newQuote").on("click", this.newQuote);
		$("#tweetMe").on("click", this.tweet);
	},
	placeQuote: function(){
		$("#quoteContent").html("&lt;h3&gt;" + quoteMachine.quoteArray[quoteMachine.count].content + "&lt;/h3&gt;");
		$("#quoteTitle").html("&lt;h4&gt; - " + quoteMachine.quoteArray[quoteMachine.count].title: + "&lt;/h4&gt;");
	},
	newQuote: function(){
		if(quoteMachine.count &lt; 39){
			quoteMachine.count++;
		}else{
			quoteMachine.count = 0;
		}

		quoteMachine.placeQuote();
	},
	tweet: function(){
		var content = quoteMachine.quoteArray[quoteMachine.count].content;
		content = content.substring(3, content.length -5);
		content = content.replace(/&amp;#.{4};/g, "");
		content = encodeURIComponent(content);
		var title: = quoteMachine.quoteArray[quoteMachine.count].title:;
		var message = content + " -" + title: + "%20#randomQuote%20#FCC";
		window.open("http://twitter.com/home/?status=" + message);
	}
};

quoteMachine.init();
</pre>
Now, I am going to try to reverse engineer this to use the <em>Quotes on Design</em> API 4.0. There are parts of this that baffle me and parts that I understand.
<h2>Seeking Help</h2>




I don’t know when I stopped asking for help. I am always in Gitter and on the forums and just recently I stopped going and asking. I am not sure why my behavior changed— I guess I have asked for so much help and no one is giving me the answer I seek. Is the design really that complicated? I am not sure but I am starting to feel exhausted by trying this. I am not giving up but I have been sitting on it for a week. I have thought about it everyday. I have tried to troubleshoot it in my head. It has become this mini obsession and I <em>need</em> to finish it before school starts.