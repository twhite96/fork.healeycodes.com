---
ID: 1354
title: 100 Days of Code Day 5
# 100-days-of-code-day-5
author: Tiffany White
date: 2016-10-06 01:02:05
layout: post
link: >
  https://tiffanywhite.tech/100-days-of-code-day-5/
published: true
tags:
  - 100 days of code
categories:
  - 100 Days of Code
---


<img class="size-full wp-image-1353 aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/10/code-optimization-xxl-1.png" width="256" height="256" />

## Day 5: 5 October 2016

**Today’s Progress:** Yesterday was a rough one as far as sleeping. I was up pretty much all night trying to push feature after feature on this e-commerce site as I thought it was due this coming Monday. It isn’t. It’s due the following Tuesday.

So I slept for a good part of the morning. Ate, took a nap, and got back into it.

Hit the ground running after that, trying to move a feature picture to the left and the text to the right using a responsive grid layout[footnote]None other than your friendly Bootstrap[/footnote]. I had the hardest time trying to align the text next to the image the way the top and bottom columns were.

I downloaded a template and pretty much made it my own. I changed the navbar and added some CSS `transition-duration` and `ease` for the nav links. I had been having a hard time getting things to work.

Code Newbie to the rescue. I needed to have my jQuery above the Bootstrap in the `` tag so that the mobile toggle would work. I then knew that I needed to move my `style.css` file down below the Bootstrap. This was the Bootstrap loads first and then the styles I added to the nav links would actually show up. I did that and *Boom*. **Finally fixed the nav**.

Joseph Rex helped to get the image in the second column the way I wanted it. The way the template had it set up:


[html]
<div class="row feature">
  <div class="col-md-7">
  <h2 class="feature-heading">You love your iPhone... <span class="text-muted"> and iPhoneography is your            passion.</span></h2>
  <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
  </div>
  </div>
  <div class="col-md-5"><img class="feature-image img-fluid m-x-auto" src="img/moment_lens.jpg" alt="iPhone with lens" data-src="holder.js/500x500/auto" />
  </div>
</div>

[/html]

I knew I needed to add the image to the top of the column and somehow get the columns to look the same as they had been.

I struggled mightily with this. But Joseph helped me. We came up with this:

[html]

<hr class="feature-divider" />

<div class="row feature">
  <div class="col-sm-5"><img class="featureimage img-fluid m-x-auto img-wide" src="img/zeiss_on_table.png" alt="Zeiss on table" data-src="holder.js/500x500/auto" />
</div>
  <div class="col-sm-7">
  <h2 class="feature-heading">You have discerning tastes in lenses...<span class="text-muted">That shows your sharp, refined eye.</span></h2>
  <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
  </div>
</div>
[/html]

CSS:

[css]
.img-wide{
width: 100%;
}
[/css]

The padding was off so I made a sort of hacky move to make it *appear* like the others. I added `padding-top` to the CSS:

[css]
.img-wide{
width: 100%;
padding-top: 4.5rem;
}
[/css]

**Thoughts:** While I still need to hustle, I have plenty of time left to build out the other pages. I was really pushing it, so I am glad I have time left. We will be learning about tables and audio/video in HTML this coming week. We will need to have a table somewhere in the site.




<img class="size-full wp-image-1353 aligncenter" src="https://helloburgh.me/wp-content/uploads/2016/10/code-optimization-xxl-1.png" width="256" height="256" />

## Day 5: 5 October 2016

**Today’s Progress:** Yesterday was a rough one as far as sleeping. I was up pretty much all night trying to push feature after feature on this e-commerce site as I thought it was due this coming Monday. It isn’t. It’s due the following Tuesday.

So I slept for a good part of the morning. Ate, took a nap, and got back into it.

Hit the ground running after that, trying to move a feature picture to the left and the text to the right using a responsive grid layout[footnote]None other than your friendly Bootstrap[/footnote]. I had the hardest time trying to align the text next to the image the way the top and bottom columns were.

I downloaded a template and pretty much made it my own. I changed the navbar and added some CSS `transition-duration` and `ease` for the nav links. I had been having a hard time getting things to work.

Code Newbie to the rescue. I needed to have my jQuery above the Bootstrap in the `` tag so that the mobile toggle would work. I then knew that I needed to move my `style.css` file down below the Bootstrap. This was the Bootstrap loads first and then the styles I added to the nav links would actually show up. I did that and *Boom*. **Finally fixed the nav**.

Joseph Rex helped to get the image in the second column the way I wanted it. The way the template had it set up:


[html]
<div class="row feature">
  <div class="col-md-7">
  <h2 class="feature-heading">You love your iPhone... <span class="text-muted"> and iPhoneography is your            passion.</span></h2>
  <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
  </div>
  </div>
  <div class="col-md-5"><img class="feature-image img-fluid m-x-auto" src="img/moment_lens.jpg" alt="iPhone with lens" data-src="holder.js/500x500/auto" />
  </div>
</div>

[/html]

I knew I needed to add the image to the top of the column and somehow get the columns to look the same as they had been.

I struggled mightily with this. But Joseph helped me. We came up with this:

[html]

<hr class="feature-divider" />

<div class="row feature">
  <div class="col-sm-5"><img class="featureimage img-fluid m-x-auto img-wide" src="img/zeiss_on_table.png" alt="Zeiss on table" data-src="holder.js/500x500/auto" />
</div>
  <div class="col-sm-7">
  <h2 class="feature-heading">You have discerning tastes in lenses...<span class="text-muted">That shows your sharp, refined eye.</span></h2>
  <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
  </div>
</div>
[/html]

CSS:

[css]
.img-wide{
width: 100%;
}
[/css]

The padding was off so I made a sort of hacky move to make it *appear* like the others. I added `padding-top` to the CSS:

[css]
.img-wide{
width: 100%;
padding-top: 4.5rem;
}
[/css]

**Thoughts:** While I still need to hustle, I have plenty of time left to build out the other pages. I was really pushing it, so I am glad I have time left. We will be learning about tables and audio/video in HTML this coming week. We will need to have a table somewhere in the site.





**Link to work:** As always, you can find the improved site at [The Lens Cap](https://twhite96.github.io/The-Lens-Cap/)