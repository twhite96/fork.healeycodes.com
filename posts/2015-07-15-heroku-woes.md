---
ID: 413
title: I Was Running on Heroku with my Woes
# heroku-woes
author: Tiffany White
date: 2015-07-15 16:21:05
layout: post
link: https://tiffanywhite.tech/heroku-woes/
published: true
tags:
  - errors
  - heroku
  - npm
  - yeoman
categories:
  - General Updates
---


<a href="https://helloburgh.me/wp-content/uploads/2015/07/Heroku.jpg"><img class="aligncenter wp-image-412 size-full" src="https://helloburgh.me/wp-content/uploads/2015/07/Heroku.jpg" alt="Heroku.jpg" width="500" height="500" /></a>

So I Googled all the errors I was getting with Heroku and npm. I remember having an issue with npm (Node package manager), that every package I tried to install, it would error out. I found that running:

~~~~
sudo npm install espress
~~~~
for example, eliminated most of the errors, which means one of the folders Node accesses in my home folder has a permissions conflict. I know I could run a command with chown to open things up, but I found a solution a while back. I'll have to look for the same thing again to fix the need to run npm as a superuser.

So once I installed dependencies, I still had errors, the app kept crashing on the server. I Googled some more but didn't quite understand what I needed to get done.

So, what do sane people do when they need an instruction on something but no kind of text is helping?

YouTube.

https://youtube.com/watch?v=uLF_hmtxAsY

I did all of the steps in this video. I added the text to my server.js file. But when I went to my app's url, I got the text on the server.js file. I couldn't understand why. I didn't understand that, when I went to the Heroku remote branch of my app in git in iTerm, the only real code there was the npm-logs and server.js, and things on the root of the folder, nothing of the real **app**. I thought, "Heroku doesn't see what is in subdirectories of the root repository folder". So more Googling.




<a href="https://helloburgh.me/wp-content/uploads/2015/07/Heroku.jpg"><img class="aligncenter wp-image-412 size-full" src="https://helloburgh.me/wp-content/uploads/2015/07/Heroku.jpg" alt="Heroku.jpg" width="500" height="500" /></a>

So I Googled all the errors I was getting with Heroku and npm. I remember having an issue with npm (Node package manager), that every package I tried to install, it would error out. I found that running:

~~~~
sudo npm install espress
~~~~
for example, eliminated most of the errors, which means one of the folders Node accesses in my home folder has a permissions conflict. I know I could run a command with chown to open things up, but I found a solution a while back. I'll have to look for the same thing again to fix the need to run npm as a superuser.

So once I installed dependencies, I still had errors, the app kept crashing on the server. I Googled some more but didn't quite understand what I needed to get done.

So, what do sane people do when they need an instruction on something but no kind of text is helping?

YouTube.

https://youtube.com/watch?v=uLF_hmtxAsY

I did all of the steps in this video. I added the text to my server.js file. But when I went to my app's url, I got the text on the server.js file. I couldn't understand why. I didn't understand that, when I went to the Heroku remote branch of my app in git in iTerm, the only real code there was the npm-logs and server.js, and things on the root of the folder, nothing of the real **app**. I thought, "Heroku doesn't see what is in subdirectories of the root repository folder". So more Googling.





I found this [Gist](https://gist.github.com/twhite96/010c6fcb268c29c554d7) on Github (which I forked) about Yeoman scaffolding and deploying that scaffold on GitHub. **Woo!** I am still working on it but will set this thing up soon. I had to erase both remote repositories and push them up again. It's a real mess but I am learning.