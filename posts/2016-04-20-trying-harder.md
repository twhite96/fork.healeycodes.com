---
ID: 1066
title: 'Restructured Learning: Trying Harder'
# trying-harder
author: Tiffany White
date: 2016-04-20 18:01:26
layout: post
link: https://tiffanywhite.tech/trying-harder/
published: true
tags: uncategorized
categories:
  - Daily Progress
  - Programming
---


<a href="https://helloburgh.me/wp-content/uploads/2016/04/Optimized-Learning.jpeg"><img class="aligncenter size-large wp-image-1068" src="https://helloburgh.me/wp-content/uploads/2016/04/Optimized-Learning-1024x682.jpeg" alt="Optimized-Learning" width="700" height="466" /></a>

&nbsp;

So after reading yet another good post on That Amazing Programmer, I got to thinking about my own reluctance to sit down and learn programming. I knew I should be trying harder.

Chris wrote down some of his apprehensions in a freewrite type of entry in his journal. I didn’t do that. I guess I am forcing myself to actually program 8 hours a day; yeah, a full-time job full of learning.

Here is my Priorities whiteboard:

<a href="https://helloburgh.me/wp-content/uploads/2016/04/Optimized-IMG_1149.jpg"><img class="aligncenter size-large wp-image-1065" src="https://helloburgh.me/wp-content/uploads/2016/04/Optimized-IMG_1149-1024x768.jpg" alt="Optimized-IMG_1149" width="700" height="525" /></a>

So far yesterday I programmed for close to four hours after getting up super late as allergies are killing me and when that happens, not much gets done. And I am still looking for small freelance projects to gain more experience so I can be gainfully employed. I am probably going to head to bed very soon.

[caption id="attachment_1069" align="aligncenter" width="1000"]<a href="https://helloburgh.me/wp-content/uploads/2016/04/Optimized-Optimized-Image-23.jpg"><img class="size-full wp-image-1069" src="https://helloburgh.me/wp-content/uploads/2016/04/Optimized-Optimized-Image-23.jpg" alt="restructuring_learning" width="1000" height="750" /></a> Daily Whiteboard Schedule[/caption]
<h2>Treehouse and the jQuery for AJAX Requests Dilemma</h2>
We were going along, using vanilla JavaScript for our AJAX requests, when the next course that popped up in the AJAX basics track was jQuery for AJAX. I felt a twinge of <em>uh oh. Don’t think this actually something you should be doing</em>.

I felt a little uneasy that Dave McFarland actually said a lot of developers use the library to do their AJAX requests. It didn’t make sense.

So I consulted the Code Newbie Slack. And boy, it <em>did not disappoint</em>.

Using a lib like jQuery can really slow your site down— it’s huge and even if you use a CDN, like we did in this exercise, it has to pull a large resource from that CDN which can slow things down considerably. Take a look at this, however:

<pre class="lang:javascript decode:1 " >

$(document).ready(function () {

  var url = &quot;../data/employees.json&quot;;

  $.getJSON(url, function (response){

     var statusHTML = '&lt;ul class=&quot;bulleted&quot;&gt;';

     $.each(response, function (index, employee) {

        if (employee.inoffice === true) {

        statusHTML += '&lt;li class = &quot;in&quot;&gt;';

         } else {

         statusHTML += '&lt;li class = &quot;out&quot;&gt;';
      }

    statusHTML += employee.name + '&lt;li&gt;';

    });

statusHTML += '&lt;/ul&gt;';

$('#employeeList').html(statusHTML);

  });

}); //end ready

</pre>

This is deceptively simple code. Short and sweet as opposed to the XMLHttpRequest method of vanilla JavaScript, which is here:

<pre class="lang:javascript decode:1 " >

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {

    if(xhr.readyState === 4) {

       var employees = JSON.parse(xhr.responseText);

       var statusHTML = '&lt;ul class=&quot;bulleted&quot;&gt;';

       for (var i = 0; i &lt; employees.length; i += 1) {

          if(employees[i].inoffice === true) {

            statusHTML += '&lt;li class = &quot;in&quot;&gt;';

          } else {

            statusHTML += '&lt;li class = &quot;out&quot;&gt;';
          }

          statusHTML += employees[i].name;

          statusHTML += '&lt;/li&gt;';
      }

      statusHTML += '&lt;/ul&gt;';

      document.getElementById('employeeList').innerHTML = statusHTML;
   }

};

xhr.open('GET', 'data/employees.json');

xhr.send();

</pre>

There’s a few more lines of code here but it just <em>looks</em> crazy.

But, as I know and had gotten confirmed, the less dependencies the better. And for someone new, actually <em>learning</em> the XMLHttpRequest method of creating AJAX requests is something that I <em>should</em> do. The jQuery though. It’s just so <em>simple and pretty</em>…
<h2>Finished Up The Programming AJAX and AJAX Concepts Courses</h2>
And am almost done with the AJAX JavaScript track in the full-stack JavaScript track at Treehouse. Tonight I am finishing this AJAX course up and heading back to Free Code Camp.




<a href="https://helloburgh.me/wp-content/uploads/2016/04/Optimized-Learning.jpeg"><img class="aligncenter size-large wp-image-1068" src="https://helloburgh.me/wp-content/uploads/2016/04/Optimized-Learning-1024x682.jpeg" alt="Optimized-Learning" width="700" height="466" /></a>

&nbsp;

So after reading yet another good post on That Amazing Programmer, I got to thinking about my own reluctance to sit down and learn programming. I knew I should be trying harder.

Chris wrote down some of his apprehensions in a freewrite type of entry in his journal. I didn’t do that. I guess I am forcing myself to actually program 8 hours a day; yeah, a full-time job full of learning.

Here is my Priorities whiteboard:

<a href="https://helloburgh.me/wp-content/uploads/2016/04/Optimized-IMG_1149.jpg"><img class="aligncenter size-large wp-image-1065" src="https://helloburgh.me/wp-content/uploads/2016/04/Optimized-IMG_1149-1024x768.jpg" alt="Optimized-IMG_1149" width="700" height="525" /></a>

So far yesterday I programmed for close to four hours after getting up super late as allergies are killing me and when that happens, not much gets done. And I am still looking for small freelance projects to gain more experience so I can be gainfully employed. I am probably going to head to bed very soon.

[caption id="attachment_1069" align="aligncenter" width="1000"]<a href="https://helloburgh.me/wp-content/uploads/2016/04/Optimized-Optimized-Image-23.jpg"><img class="size-full wp-image-1069" src="https://helloburgh.me/wp-content/uploads/2016/04/Optimized-Optimized-Image-23.jpg" alt="restructuring_learning" width="1000" height="750" /></a> Daily Whiteboard Schedule[/caption]
<h2>Treehouse and the jQuery for AJAX Requests Dilemma</h2>
We were going along, using vanilla JavaScript for our AJAX requests, when the next course that popped up in the AJAX basics track was jQuery for AJAX. I felt a twinge of <em>uh oh. Don’t think this actually something you should be doing</em>.

I felt a little uneasy that Dave McFarland actually said a lot of developers use the library to do their AJAX requests. It didn’t make sense.

So I consulted the Code Newbie Slack. And boy, it <em>did not disappoint</em>.

Using a lib like jQuery can really slow your site down— it’s huge and even if you use a CDN, like we did in this exercise, it has to pull a large resource from that CDN which can slow things down considerably. Take a look at this, however:

<pre class="lang:javascript decode:1 " >

$(document).ready(function () {

  var url = &quot;../data/employees.json&quot;;

  $.getJSON(url, function (response){

     var statusHTML = '&lt;ul class=&quot;bulleted&quot;&gt;';

     $.each(response, function (index, employee) {

        if (employee.inoffice === true) {

        statusHTML += '&lt;li class = &quot;in&quot;&gt;';

         } else {

         statusHTML += '&lt;li class = &quot;out&quot;&gt;';
      }

    statusHTML += employee.name + '&lt;li&gt;';

    });

statusHTML += '&lt;/ul&gt;';

$('#employeeList').html(statusHTML);

  });

}); //end ready

</pre>

This is deceptively simple code. Short and sweet as opposed to the XMLHttpRequest method of vanilla JavaScript, which is here:

<pre class="lang:javascript decode:1 " >

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {

    if(xhr.readyState === 4) {

       var employees = JSON.parse(xhr.responseText);

       var statusHTML = '&lt;ul class=&quot;bulleted&quot;&gt;';

       for (var i = 0; i &lt; employees.length; i += 1) {

          if(employees[i].inoffice === true) {

            statusHTML += '&lt;li class = &quot;in&quot;&gt;';

          } else {

            statusHTML += '&lt;li class = &quot;out&quot;&gt;';
          }

          statusHTML += employees[i].name;

          statusHTML += '&lt;/li&gt;';
      }

      statusHTML += '&lt;/ul&gt;';

      document.getElementById('employeeList').innerHTML = statusHTML;
   }

};

xhr.open('GET', 'data/employees.json');

xhr.send();

</pre>

There’s a few more lines of code here but it just <em>looks</em> crazy.

But, as I know and had gotten confirmed, the less dependencies the better. And for someone new, actually <em>learning</em> the XMLHttpRequest method of creating AJAX requests is something that I <em>should</em> do. The jQuery though. It’s just so <em>simple and pretty</em>…
<h2>Finished Up The Programming AJAX and AJAX Concepts Courses</h2>
And am almost done with the AJAX JavaScript track in the full-stack JavaScript track at Treehouse. Tonight I am finishing this AJAX course up and heading back to Free Code Camp.





<a href="https://helloburgh.me/wp-content/uploads/2016/04/Screenshot2016-04-19_08-40-58_PM.png"><img src="https://helloburgh.me/wp-content/uploads/2016/04/Screenshot2016-04-19_08-40-58_PM.png" alt="Screenshot2016-04-19_08-40-58_PM" width="630" height="518" class="aligncenter size-full wp-image-1061" /></a>