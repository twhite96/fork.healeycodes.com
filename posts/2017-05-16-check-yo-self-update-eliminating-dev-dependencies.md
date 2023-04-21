---
ID: 1909
title: 'Check Yo Self Update: Eliminating Dev Dependencies'
author: Tiffany White
date: 2017-05-16 22:55:32
post_excerpt: |
  I worked like a fiend over the weekend on Check Yo Self, reading documentation, implementing features, and taking sone away.

  Going over the write-good issues on GitHub to see how if it could parse extra characters.
layout: post
link: >
  https://tiffanywhite.tech/check-yo-self-update-eliminating-dev-dependencies/
published: true
tags:
  - coding
  - daily progress
  - programming
categories:
  - App Updates
---


I worked like a fiend over the weekend on Check Yo Self, reading documentation, implementing features, and taking some away.

Going over the `write-good` issues on GitHub to see how if it could parse extra characters [^1].

I saw an issue where a guy implemented using his GitHub Project Page to host a React implementation of a `write-good` app.

Went to the app, put in some markdown, and it gave me suggestions. *Nice*.

## No Need for Natural

I was going to use the `natural` natural language tokenizers to parse out the markdown but I don’t need it. One less dev dependency is a good thing.

## Also, No Need for Heroku or Postgres

I researched `localStorage` web API. Each browser has a set limit of how much data can be stored in the browser. I found [this little utility](https://arty.name/localstorage.html) to check how many MBs of storage I had to work with. 5 MBs in Chrome [^2]. From what I understand, Firefox has a limit of 10 MB but I could be wrong.

After this, I filled a markdown document with 2000 words, just to see the size of the document. It was 9 kbs. I decided to limit the amount of words per document to 2000 and the amount of documents that could be stored to 200.

## Working With and Testing Local Storage

I found some gold in the MDN docs and their GitHub repo for MDN. You can test the localStorage on a client with the following code:

```javascript
function storageAvailable(type) {
  &#039;use strict&#039;
    try {
	var storage = window[type], x = &quot;__storage_test__&quot;;
	storage.setItem(x, x);
	storage.removeItem(x);
	return true;
	} catch (e) {
	  return (
	  e instanceof DOMException &amp;&amp; // everything except Firefox
	  (e.code === 22 || // Firefox
	  e.code === 1014 || // test name field too, because code might not be present // everything except Firefox
	  e.name === &quot;QuotaExceededError&quot; || // Firefox
		e.name === &quot;NS_ERROR_DOM_QUOTA_REACHED&quot;) &amp;&amp; // acknowledge QuotaExceededError only if there&#039;s something already stored
	  storage.length !== 0
	);
    }
}

console.log(storageAvailable());
```

I am not certain of everything that is happening here but it tests for storage on the client’s browser. If not you can log an exception.

I am probably going to alert the user somehow if they have exceeded the `localStorage` limit [^3].

## Logic So Far

So far I’ve got some broken spaghetti code I am looking to fix.

I need a refresher on jQuery so I’ve visited Treehouse. I also know *some* of what I need to do.

What I have so far:

```javascript
/* App Starts Here */
$(&#039;#texts&#039;).val(&#039;New Text&#039;);
$(&#039;#texts&#039;).trigger(&#039;autoresize&#039;);
var writeGood = require(&#039;write-good&#039;);
var suggestions = writeGood(userInput, {weasel: false});

suggestions: [{

}];
```
## Material Design Lite Woes

The Material Design Lite docs are good but I was having some trouble understanding everything, as components are really verbose and seem to overlap some.

I was deep into the html when I found I couldn’t grok something and went looking for a solution.

Enter: [Materalize.css](http://materializecss.com/).

The guys are from Pittsburgh [^4] and attend one of the premier Computer Science schools in the world, Carnegie Mellon. They came up with a way to add Material Design Lite to your site, stripping away the verbosity, and leaving you with customizable components that resemble a bit of a mix of Bootstrap and MDL.

Currently I have this bit of Materialize.css in my markup:

```html
&lt;main class=&quot;mdl-layout__content&quot;&gt;
      &lt;div class=&quot;mdl-layout__tab-panel is-active&quot; id=&quot;overview&quot;&gt;
        &lt;section class=&quot;section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp&quot;&gt;
          &lt;div class=&quot;mdl-card mdl-cell mdl-cell--12-col&quot;&gt;
            &lt;div class=&quot;mdl-card__supporting-text&quot;&gt;
              &lt;h4&gt;Texts&lt;/h4&gt;
              This is where your markdown files live. You can add up to 200 markdown files at 2000 words a piece.
              &lt;div class=&quot;row&quot;&gt;
                &lt;form class=&quot;col s12&quot;&gt;
                  &lt;div class=&quot;row&quot;&gt;
                    &lt;div class=&quot;input-field col s12&quot;&gt;
                      &lt;i class=&quot;material-icons prefix grey-text&quot;&gt;mode_edit&lt;/i&gt;
                      &lt;textarea id=&quot;texts&quot; class=&quot;materialize-textarea grey-text&quot;&gt;&lt;/textarea&gt;
                      &lt;label for=&quot;texts&quot; class=&quot;grey-text&quot;&gt;Add your markdown here...&lt;/label&gt;
                    &lt;/div&gt;
                  &lt;/form&gt;
                &lt;/div&gt;
                &lt;div class=&quot;fixed-action-btn vertical&quot;&gt;
                  &lt;a class=&quot;btn-floating btn-large pink&quot;&gt;
                    &lt;i class=&quot;large material-icons&quot;&gt;add&lt;/i&gt;
                  &lt;/a&gt;
                  &lt;ul&gt;
                    &lt;li class=&quot;btn-floating green&quot;&gt;&lt;a href=&quot;#!&quot;&gt;&lt;i class=&quot;material-icons&quot;&gt;mode_edit&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
                    &lt;li class=&quot;btn-floating purple&quot;&gt;&lt;a href=&quot;#!&quot;&gt;&lt;i class=&quot;material-icons&quot;&gt;undo&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
                    &lt;li class=&quot;btn-floating blue&quot;&gt;&lt;a href=&quot;#!&quot;&gt;&lt;i class=&quot;material-icons&quot;&gt;redo&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
                  &lt;/ul&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/section&gt;
        &lt;/div&gt;
      &lt;/main&gt;
```

Some MDL proper mixed in but I will take it out soon enough.

## Vertical Fabs and Getting Them to Work

I am trying to understand how to get input from a click on a fab. As you can see from my logic, I am using a click event to try to trigger an input but it isn’t working. I am looking for a fix.

Here is a nifty video of my getting the vertical fabs working.

[fvplayer src="https://helloburgh.me/wp-content/uploads/2017/05/Fabs.mov" splash="https://helloburgh.me/wp-content/uploads/2017/02/cropped-coding.png" width="1044" height="720"]

[^1]: Those lovely markdown characters. I ❤️ markdown.
[^2]: This utility crashed someone’s browser so be careful.
[^3]: There are some users who really don’t pay attention or care.



I worked like a fiend over the weekend on Check Yo Self, reading documentation, implementing features, and taking some away.

Going over the `write-good` issues on GitHub to see how if it could parse extra characters [^1].

I saw an issue where a guy implemented using his GitHub Project Page to host a React implementation of a `write-good` app.

Went to the app, put in some markdown, and it gave me suggestions. *Nice*.

## No Need for Natural

I was going to use the `natural` natural language tokenizers to parse out the markdown but I don’t need it. One less dev dependency is a good thing.

## Also, No Need for Heroku or Postgres

I researched `localStorage` web API. Each browser has a set limit of how much data can be stored in the browser. I found [this little utility](https://arty.name/localstorage.html) to check how many MBs of storage I had to work with. 5 MBs in Chrome [^2]. From what I understand, Firefox has a limit of 10 MB but I could be wrong.

After this, I filled a markdown document with 2000 words, just to see the size of the document. It was 9 kbs. I decided to limit the amount of words per document to 2000 and the amount of documents that could be stored to 200.

## Working With and Testing Local Storage

I found some gold in the MDN docs and their GitHub repo for MDN. You can test the localStorage on a client with the following code:

```javascript
function storageAvailable(type) {
  &#039;use strict&#039;
    try {
	var storage = window[type], x = &quot;__storage_test__&quot;;
	storage.setItem(x, x);
	storage.removeItem(x);
	return true;
	} catch (e) {
	  return (
	  e instanceof DOMException &amp;&amp; // everything except Firefox
	  (e.code === 22 || // Firefox
	  e.code === 1014 || // test name field too, because code might not be present // everything except Firefox
	  e.name === &quot;QuotaExceededError&quot; || // Firefox
		e.name === &quot;NS_ERROR_DOM_QUOTA_REACHED&quot;) &amp;&amp; // acknowledge QuotaExceededError only if there&#039;s something already stored
	  storage.length !== 0
	);
    }
}

console.log(storageAvailable());
```

I am not certain of everything that is happening here but it tests for storage on the client’s browser. If not you can log an exception.

I am probably going to alert the user somehow if they have exceeded the `localStorage` limit [^3].

## Logic So Far

So far I’ve got some broken spaghetti code I am looking to fix.

I need a refresher on jQuery so I’ve visited Treehouse. I also know *some* of what I need to do.

What I have so far:

```javascript
/* App Starts Here */
$(&#039;#texts&#039;).val(&#039;New Text&#039;);
$(&#039;#texts&#039;).trigger(&#039;autoresize&#039;);
var writeGood = require(&#039;write-good&#039;);
var suggestions = writeGood(userInput, {weasel: false});

suggestions: [{

}];
```
## Material Design Lite Woes

The Material Design Lite docs are good but I was having some trouble understanding everything, as components are really verbose and seem to overlap some.

I was deep into the html when I found I couldn’t grok something and went looking for a solution.

Enter: [Materalize.css](http://materializecss.com/).

The guys are from Pittsburgh [^4] and attend one of the premier Computer Science schools in the world, Carnegie Mellon. They came up with a way to add Material Design Lite to your site, stripping away the verbosity, and leaving you with customizable components that resemble a bit of a mix of Bootstrap and MDL.

Currently I have this bit of Materialize.css in my markup:

```html
&lt;main class=&quot;mdl-layout__content&quot;&gt;
      &lt;div class=&quot;mdl-layout__tab-panel is-active&quot; id=&quot;overview&quot;&gt;
        &lt;section class=&quot;section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp&quot;&gt;
          &lt;div class=&quot;mdl-card mdl-cell mdl-cell--12-col&quot;&gt;
            &lt;div class=&quot;mdl-card__supporting-text&quot;&gt;
              &lt;h4&gt;Texts&lt;/h4&gt;
              This is where your markdown files live. You can add up to 200 markdown files at 2000 words a piece.
              &lt;div class=&quot;row&quot;&gt;
                &lt;form class=&quot;col s12&quot;&gt;
                  &lt;div class=&quot;row&quot;&gt;
                    &lt;div class=&quot;input-field col s12&quot;&gt;
                      &lt;i class=&quot;material-icons prefix grey-text&quot;&gt;mode_edit&lt;/i&gt;
                      &lt;textarea id=&quot;texts&quot; class=&quot;materialize-textarea grey-text&quot;&gt;&lt;/textarea&gt;
                      &lt;label for=&quot;texts&quot; class=&quot;grey-text&quot;&gt;Add your markdown here...&lt;/label&gt;
                    &lt;/div&gt;
                  &lt;/form&gt;
                &lt;/div&gt;
                &lt;div class=&quot;fixed-action-btn vertical&quot;&gt;
                  &lt;a class=&quot;btn-floating btn-large pink&quot;&gt;
                    &lt;i class=&quot;large material-icons&quot;&gt;add&lt;/i&gt;
                  &lt;/a&gt;
                  &lt;ul&gt;
                    &lt;li class=&quot;btn-floating green&quot;&gt;&lt;a href=&quot;#!&quot;&gt;&lt;i class=&quot;material-icons&quot;&gt;mode_edit&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
                    &lt;li class=&quot;btn-floating purple&quot;&gt;&lt;a href=&quot;#!&quot;&gt;&lt;i class=&quot;material-icons&quot;&gt;undo&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
                    &lt;li class=&quot;btn-floating blue&quot;&gt;&lt;a href=&quot;#!&quot;&gt;&lt;i class=&quot;material-icons&quot;&gt;redo&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
                  &lt;/ul&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/section&gt;
        &lt;/div&gt;
      &lt;/main&gt;
```

Some MDL proper mixed in but I will take it out soon enough.

## Vertical Fabs and Getting Them to Work

I am trying to understand how to get input from a click on a fab. As you can see from my logic, I am using a click event to try to trigger an input but it isn’t working. I am looking for a fix.

Here is a nifty video of my getting the vertical fabs working.

[fvplayer src="https://helloburgh.me/wp-content/uploads/2017/05/Fabs.mov" splash="https://helloburgh.me/wp-content/uploads/2017/02/cropped-coding.png" width="1044" height="720"]

[^1]: Those lovely markdown characters. I ❤️ markdown.
[^2]: This utility crashed someone’s browser so be careful.
[^3]: There are some users who really don’t pay attention or care.




[^4]: Steel City? Not much anymore. More like, up-and-coming tech hub.
