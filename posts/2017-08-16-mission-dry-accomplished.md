---
ID: 2230
title: 'Mission DRY: Accomplished'
# mission-dry-accomplished
author: Tiffany White
date: 2017-08-16 22:43:40
post_excerpt: 'When working with multiple levels of conditionals, it helps to DRY things up a bit: not repeating yourself can give performance gains as well as make your code more readable and elegant.'
layout: post
link: >
  https://tiffanywhite.tech/mission-dry-accomplished/
published: true
tags:
  - DRY code
  - javascript
  - map
categories:
  - Web Development
---


When working with multiple levels of conditionals, it helps to DRY things up a bit: not repeating yourself can give performance gains as well as make your code more readable and elegant.

Here is one of the monstrosities I had before:

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

Really gross, right?

Consulting LinkedIn and Slack proved to be fruitful.

## Changing `if/else` Chains Into Map Objects

A hash map is an object that you can iterate over like an array. The definition of a Map object can be [found on the MDN.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

[Adam Recvlohe](https://linkedin.com/in/adamrecvlohe), a fellow freeCodeCamp Camper on LinkedIn recommended I use a Map for changing the background of my freeCodeCamp Weather App dynamically. He showed me some code and I eventually settled on this:

```javascript
const iconMap = {
  'clear-day': 'url(https://s3.us-east-2.amazonaws.com/weatherappfcc/sunny.jpg)',
  'partly-cloudy-night': 'url(https://s3.us-east-2.amazonaws.com/weatherappfcc/fineas-anton-136459+copy.jpg)',
  'clear-night': 'url(https://s3.us-east-2.amazonaws.com/weatherappfcc/sam-mcjunkin-38078.jpg)',
  'partly-cloudy-day': 'url(https://s3.us-east-2.amazonaws.com/weatherappfcc/jeff-nafura-294909.jpg)',
 'cloudy': 'url(https://s3.us-east-2.amazonaws.com/weatherappfcc/jonatan-pie-260835.jpg)',
 'rain': 'url(https://s3.us-east-2.amazonaws.com/weatherappfcc/3opt\_rain.jpeg)',
 'sleet': 'url(https://s3.us-east-2.amazonaws.com/weatherappfcc/jonatan-pie-190398.jpg)',
 'snow': 'url(https://s3.us-east-2.amazonaws.com/weatherappfcc/snow.jpg)',
 'wind': 'url(https://s3.us-east-2.amazonaws.com/weatherappfcc/jon-flobrant-2845.jpg)',
 'fog': 'url(https://s3.us-east-2.amazonaws.com/weatherappfcc/elaine-li-416.jpg)'
};

(function() {
  $('body').css('background-image', iconMap[currentIcon]);
})();
```

Here, we take a `Map` object and use an anonymous function calls the `.css` jQuery method on the body which will change the background image by injecting that css into the body. Also as an argument to the css method is an iteration over the `iconMap` Map object that maps each image to the currently displayed Skycon.

## Next: Cleaning Up The `if/else` Mess of an Icon Display

Up above you probably observed my conditional hell. It was the same for the icons where I called the jQuery `show()`/`hide()` methods in `if/else` statements for *every*. *Icon*. **Pure insanity**.

I went to the Code Newbie Slack and asked [Joseph Rex](https://twitter.com/josephrexme) for help as he has been guiding me through a few of the Express and other JavaScript problems I have been having. After some bugs and error handling we came up with a nifty ES6 solution that is much cleaner, using Template Literals to clean up the constant calls to each icon.

```javascript
// Write a function that takes two parameters
let iconDisplay = (iconName, current) => {
   //Assign a template literal to a constant that will
//represent each icon
   const jqObj = $(`#${iconName}`);
   // Use the ternary operator to determine with the //iconName is the current icon being shown for the condition
//and based on that, show or hide the appropriate icon
   iconName === current ? jqObj.show() : jqObj.hide();
};

 // call the function and compare it to the Skycon for each
 // Weather condition.
 iconDisplay("clear-day", currentIcon);
 iconDisplay("clear-night", currentIcon);
 iconDisplay("partly-cloudy-day", currentIcon);
 iconDisplay("partly-cloudy-night", currentIcon);
 iconDisplay("cloudy", currentIcon);
 iconDisplay("fog", currentIcon);
 iconDisplay("rain", currentIcon);
 iconDisplay("sleet", currentIcon);
 iconDisplay("snow", currentIcon);
 iconDisplay("wind", currentIcon);

```

Pretty cool.


Pretty soon I’ll be diving deep into how much I am learning about Express with The Web Developer Bootcamp. To get a sense of where I was a couple days ago, [read this](https://medium.com/100-days-of-code/100-days-of-code-day-17-7b04669c68c6).
