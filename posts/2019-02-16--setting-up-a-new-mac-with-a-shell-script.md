---
title: "Setting Up a New Mac with a Shell Script"
layout: post
image: /assets/images/posts/2019/term.png
tags: [General Dev]
---


The concept of setting up a new Mac with a shell script in the programming community is not a new thing, and I found an [article on automation by Kent C Dodds](https://blog.kentcdodds.com/an-argument-for-automation-fce8394c14e2) and it got me thinking about doing more of it.

Digging even further, I found that Kent has [a macos dotfile](https://github.com/kentcdodds/dotfiles/blob/master/.macos) to set up a new Mac.

This is one reason I love macOS, for stuff like this.

You can use `curl` to grab the dotfile from your repo without needed to stick it in Dropbox or head over to GitHub to download it with:

`curl https://raw.githubusercontent.com/<yourname>/dotfiles/master/.<your_script> | bash`

[Here is my implementation](https://github.com/twhite96/dot-files/blob/master/.macos).
