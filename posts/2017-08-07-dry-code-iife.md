---
ID: 2220
title: 'DRY Code: Using IIFEs to Clean Up Code'
# dry-code-iife
author: Tiffany White
date: 2017-08-07 19:39:18
post_excerpt: |
  DRY: Don’t Repeat Yourself

  As you may have seen in my last post, I have some *ridiculous* conditional statement blocks going on to show/hide the Skycons and for switching up the background photos based on your current weather conditions.
layout: post
link: https://tiffanywhite.tech/dry-code-iife/
published: true
tags: uncategorized
categories:
  - App Updates
  - "Tiffany's Posts"
---


## DRY: Don’t Repeat Yourself

As you may have seen in my last post, I have some *ridiculous* conditional statement blocks going on to show/hide the Skycons and for switching up the background photos based on your current weather conditions.

Each of this `if/else` statements is essentially repeating the same couple of ideas:

```javascript
if (currentIcon === 'clear-day')  {
  $('#clear-day').show();
}  else  {
  $('#clear-day').hide();
}
```
for the icons and:

```javascript
if (currentIcon === 'clear-day')  {
  $('body').css('background-image', 'url(https://i.imgur.com/voece1h.jpg)');
}  else if (currentIcon === 'partly-cloudy-night')  {
  $('body').css('background-image', 'url(https://i.imgur.com/r8haFIj.jpg)');
}
```
for the backgrounds only repeated *over and over again* for different icons/pictures.

This isn’t DRY: it’s *stupid*.

## Functions for Modularity

I decided to wrap these up in two different closure functions in the form of *IIFEs* or *Immediately Invoked Function Expressions*.

An IIFE wraps your function in parens and then adds an extra *closing* set of parens that invoke the function *immediately* when the interpreter gets to that function.

My current solution [^1]:

```javascript
(function changeBackground(){
  if (currentIcon === 'clear-day') {
    $('body').css('background-image', 'url(https://i.imgur.com/voece1h.jpg)');
  } else if (currentIcon === 'partly-cloudy-night') {
    $('body').css('background-image', 'url(https://i.imgur.com/r8haFIj.jpg)');
  } else if (currentIcon ===';clear-night') {
    $('body').css('background-image', 'url(https://i.imgur.com/K6Bazrl.j'
  } else if (currentIcon === 'partly-cloudy-day') {
    $('body').css('background-image', 'url(https://i.imgur.com/dUS9u9b.jpg)');
  } else if (currentIcon === 'cloudy') {
    $('body').css('background-image', 'url(https://i.imgur.com/Kx3ku27.jpg)');
  } else if (currentIcon === 'rain') {
    $('body').css('background-image', 'url(https://i.imgur.com/g4afvja.jpg)');
  } else if (currentIcon === 'sleet') {
    $('body').css('background-image', 'url(https://i.imgur.com/pjq3VPO.jpg)');
  } else if (currentIcon === 'snow') {
    $('body').css('background-image', 'url(https://i.imgur.com/vH9cyKD.jpg)');
  } else if (currentIcon === 'wind') {
    $('body').css('background-image', 'url(https://i.imgur.com/ZtSl66b.jpg)');
  } else if (currentIcon === 'fog') {
    $('body').css('background-image', 'url(https://i.imgur.com/5z0CXkZ.jpg)');
  }
})();
```
The same for the icons.

The problem with making this even more DRY is the way Skycons are initiated:

```javascript
let icons = new Skycons({ color: '#fff' });

   icons.set('clear-day', Skycons.CLEAR_DAY);
   icons.set('clear-night', Skycons.CLEAR_NIGHT);
   icons.set('partly-cloudy-day', Skycons.PARTLY_CLOUDY_DAY);
   icons.set('partly-cloudy-night', Skycons.PARTLY_CLOUDY_NIGHT);
   icons.set('cloudy', Skycons.CLOUDY);
   icons.set('rain', Skycons.RAIN);
   icons.set('sleet', Skycons.SLEET);
   icons.set('snow', Skycons.SNOW);
   icons.set('wind', Skycons.WIND);
   icons.set('fog', Skycons.FOG);

  icons.play();
   }
});
```
So I am looking around for solutions.






[^1]: This isn’t ideal either and I am currently asking around about it.
