---
ID: 1839
title: 'Hacking on a Project: Getting Out of the Tutorial Loop'
author: Tiffany White
date: 2017-04-10 14:51:26
layout: post
link: >
  https://tiffanywhite.tech/hacking-project-getting-out-tutorial-loop/
published: true
tags:
  - hacking
  - new projects
  - programming
categories:
  - Daily Progress
---


For a long time now, I have been increasingly bothered by my lack of Open Source contributions on GitHub [^1] and of *real world projects* to put on my portfolio and resume.

Everyday, practically, for the past two months, I have been irritated, by my lack of *production*. I have the skill to build projects but all I was doing, am doing, is learning, being stuck in the *tutorial loop* my buddy [Alex Gwartney](https://twitter.com/AlexGwartney) and [Nick Queen](https://twitter.com/nickqueen) talked about on [Developer Soup](https://www.youtube.com/watch?v=L66GVCEsKC0) [^2].

## Forcing Ideas

Thinking about building projects, having ideas, for those projects, or coming up with ideas is the hardest part of the whole thing.

For weeks I have been researching a library to build to open source, but I really couldn’t think of much. An XML to JSON parser? Been done. Opening up a new terminal with Node on macOS? Meh.

I took to Code Newbie Slack to ask around. Someone gave a suggestion but he said he personally tries to not force things like that.

That made a lot of sense to me. The block I was in was because I was looking for things to code that I didn’t need or was just forcing the idea just to *have an open source project to my name*. That isn’t a great idea.

## Good Programmers Scratch Their Own Itch

I was sitting down to write an article in Ulysses, which I always do, because of the markdown features. I am often frustrated my editing and finding grammatical errors and such because apps like Grammarly and Hemingway get upset when you paste in Markdown.

I came up with the idea of tapping into an API for checking the grammar of markdown documents.

It’s something I need. It’s something people have done in a way but at the command line and now in a broader scope. So I’ve found my project.

## Coding the Thing

I am using Material Design Lite for the UI.

I’ve gathered a few snippets for elements that I’d like to use the most important one being for the modal polyfill for the `<dialog>` tag as most browsers don’t support it:
<pre><code class="javascript">
 (function() {
        'use strict';
        var dialog = document.querySelector('#modal-example');
        var closeButton = dialog.querySelector('button');
        var showButton = document.querySelector('#show-modal-example');
        if (! dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }
        var closeClickHandler = function(event) {
            dialog.close();
        };
        var showClickHandler = function(event) {
            dialog.showModal();
        };
        showButton.addEventListener('click', showClickHandler);
        closeButton.addEventListener('click', closeClickHandler);
    }());
</code></pre>
This is just one example of the way you could use the polyfill.

## Diving In = Happiness

Spent a lot of time looking at documentation and pumping out a little bit of the HTML. Still trying to wrap my head around where to go and how so I am probably going to make a mindmap in MindNode and export it to TaskPaper or OmniFocus. But either way, I need to find some structure in this to actually know how to go forward.

Building things makes me extremely happy and want to get out of bed and work. I actually got out of bed in the *morning* instead of mid-afternoon because I knew there was interesting work waiting for me.

It’s a good time to be alive, that’s for sure. :-D

[^1]: My first *real* pull request was closed because someone else took it up. I also went out of the scope of the issue.



For a long time now, I have been increasingly bothered by my lack of Open Source contributions on GitHub [^1] and of *real world projects* to put on my portfolio and resume.

Everyday, practically, for the past two months, I have been irritated, by my lack of *production*. I have the skill to build projects but all I was doing, am doing, is learning, being stuck in the *tutorial loop* my buddy [Alex Gwartney](https://twitter.com/AlexGwartney) and [Nick Queen](https://twitter.com/nickqueen) talked about on [Developer Soup](https://www.youtube.com/watch?v=L66GVCEsKC0) [^2].

## Forcing Ideas

Thinking about building projects, having ideas, for those projects, or coming up with ideas is the hardest part of the whole thing.

For weeks I have been researching a library to build to open source, but I really couldn’t think of much. An XML to JSON parser? Been done. Opening up a new terminal with Node on macOS? Meh.

I took to Code Newbie Slack to ask around. Someone gave a suggestion but he said he personally tries to not force things like that.

That made a lot of sense to me. The block I was in was because I was looking for things to code that I didn’t need or was just forcing the idea just to *have an open source project to my name*. That isn’t a great idea.

## Good Programmers Scratch Their Own Itch

I was sitting down to write an article in Ulysses, which I always do, because of the markdown features. I am often frustrated my editing and finding grammatical errors and such because apps like Grammarly and Hemingway get upset when you paste in Markdown.

I came up with the idea of tapping into an API for checking the grammar of markdown documents.

It’s something I need. It’s something people have done in a way but at the command line and now in a broader scope. So I’ve found my project.

## Coding the Thing

I am using Material Design Lite for the UI.

I’ve gathered a few snippets for elements that I’d like to use the most important one being for the modal polyfill for the `<dialog>` tag as most browsers don’t support it:
<pre><code class="javascript">
 (function() {
        'use strict';
        var dialog = document.querySelector('#modal-example');
        var closeButton = dialog.querySelector('button');
        var showButton = document.querySelector('#show-modal-example');
        if (! dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }
        var closeClickHandler = function(event) {
            dialog.close();
        };
        var showClickHandler = function(event) {
            dialog.showModal();
        };
        showButton.addEventListener('click', showClickHandler);
        closeButton.addEventListener('click', closeClickHandler);
    }());
</code></pre>
This is just one example of the way you could use the polyfill.

## Diving In = Happiness

Spent a lot of time looking at documentation and pumping out a little bit of the HTML. Still trying to wrap my head around where to go and how so I am probably going to make a mindmap in MindNode and export it to TaskPaper or OmniFocus. But either way, I need to find some structure in this to actually know how to go forward.

Building things makes me extremely happy and want to get out of bed and work. I actually got out of bed in the *morning* instead of mid-afternoon because I knew there was interesting work waiting for me.

It’s a good time to be alive, that’s for sure. :-D

[^1]: My first *real* pull request was closed because someone else took it up. I also went out of the scope of the issue.




[^2]: Couldn’t find the episode I was on. The show is on permanent hiatus.
