---
ID: 2189
title: Background Image Hacks in CSS
# background-image-hacks-css
author: Tiffany White
date: 2017-08-04 19:31:37
post_excerpt: >
  Yesterday I found myself in a situation
  where the background image in my
  freeCodeCamp Weather App on mobile was
  cut off at the bottom. Needed some
  background image hacks in css to fix it.
layout: post
link: >
  https://tiffanywhite.tech/background-image-hacks-css/
published: true
tags:
  - css
  - freecodecamp
  - weather app
categories:
  - Web Development
---


Yesterday [^1] I found myself in a situation where the background image in my freeCodeCamp Weather App on mobile was cut off at the bottom. Needed some background image hacks in css to fix it.

<img class="wp-image-2185 aligncenter" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/Image-8-3-17-1-48-PM.jpeg" width="203" height="358" />

## For context

My code for switching up the background depending on your weather conditions is as follows:

```javascript
  if (currentIcon === &quot;clear-day&quot;)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/voece1h.jpg)&quot;);
  }   else if (currentIcon === &quot;partly-cloudy-night&quot;)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/r8haFIj.jpg)&quot;);
  }   else if (currentIcon === &quot;clear-night&quot;)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/K6Bazrl.jpg)&quot;);
  }   else if (currentIcon === &quot;partly-cloudy-day&quot;).  {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/dUS9u9b.jpg)&quot;);
  }   else if (currentIcon === &quot;cloudy&quot;)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/Kx3ku27.jpg)&quot;);
  }   else if (currentIcon === &quot;rain&quot;)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/g4afvja.jpg)&quot;);
  }   else if (currentIcon === sleet)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/pjq3VPO.jpg)&quot;);
  }   else if (currentIcon === snow)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/vH9cyKD.jpg)&quot;);
  }   else if (currentIcon === wind)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/ZtSl66b.jpg)&quot;);
  }   else if (currentIcon === fog)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/5z0CXkZ.jpg)&quot;);
}


```

This bug had been bothering me for a week or so. I searched on Stack Overflow for an appropriate solution and found that I could use a `div` wrapper and add:

```css
body {
   background-size: cover;
   background-repeat: no-repeat;
}
```

I added the wrapper but nothing happened.

I also already had my main content wrapped in a `div`:

```html
  &lt;body&gt;
    &lt;div class=&quot;wrapper&quot;&gt;
      &lt;div class=&quot;col-md-12&quot;&gt;
        &lt;header&gt;
          &lt;h1 class=&quot;h1-title:&quot;&gt;Local Weather App &lt;/h1&gt;
          &lt;h3&gt;&lt;/h3&gt;
        &lt;/header&gt;
```
## Object-fit, etc

You can usually `object-fit` on an image with the properties: `fill`, `cover`, `contain`, `scale-down`, or `none`:

[caption id="attachment_2183" align="aligncenter" width="337"]<img class="alignnone wp-image-2183" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/fill.jpg" alt="fill" width="337" height="380" /> fill[/caption]

[caption id="attachment_2181" align="aligncenter" width="395"]<img class="alignnone wp-image-2181" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/cover.jpg" alt="cover" width="395" height="244" /> cover[/caption]

[caption id="attachment_2186" align="aligncenter" width="398"]<img class="alignnone wp-image-2186" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/contain.jpg" alt="contain" width="398" height="269" /> contain[/caption]

[caption id="attachment_2187" align="aligncenter" width="515"]<img class="alignnone wp-image-2187" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/scaled_down.jpg" alt="scale-down" width="515" height="346" /> scale-down[/caption]

[caption id="attachment_2184" align="aligncenter" width="590"]<img class="alignnone wp-image-2184" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/none.jpg" alt="none" width="590" height="452" /> none[/caption]

I tried `object-fit: cover` on the body. Didn’t work. Same with `contain`, `scale-down`, and `fill`.

I searched some more and found the answer on a Treehouse forum.

```css
html {
   min-height: 100%;
}
```
I tried `height: 100%` on the `body` but that didn’t work either.

Since the `html` element is actually at the root of the `document` and `body` descends from the `html` element, applying the global style to the `html` element actually makes sense.

Also, because I am specifying a minimum height that happens to be a percentage, it makes it responsive because I am not specifying a fixed size in the viewport.

Now, I have a mobile app that looks like this:

<img class=" wp-image-2182 aligncenter" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/IMG_3816.png" width="262" height="458" />

Still, I need to fix the loading issue. Thats for another day.

You can find the weather app at [https://twhite96.github.io/Weather\_App](https://twhite96.github.io/Weather_App).

[^1]: And for several days before that actually.

</div>



Yesterday [^1] I found myself in a situation where the background image in my freeCodeCamp Weather App on mobile was cut off at the bottom. Needed some background image hacks in css to fix it.

<img class="wp-image-2185 aligncenter" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/Image-8-3-17-1-48-PM.jpeg" width="203" height="358" />

## For context

My code for switching up the background depending on your weather conditions is as follows:

```javascript
  if (currentIcon === &quot;clear-day&quot;)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/voece1h.jpg)&quot;);
  }   else if (currentIcon === &quot;partly-cloudy-night&quot;)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/r8haFIj.jpg)&quot;);
  }   else if (currentIcon === &quot;clear-night&quot;)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/K6Bazrl.jpg)&quot;);
  }   else if (currentIcon === &quot;partly-cloudy-day&quot;).  {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/dUS9u9b.jpg)&quot;);
  }   else if (currentIcon === &quot;cloudy&quot;)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/Kx3ku27.jpg)&quot;);
  }   else if (currentIcon === &quot;rain&quot;)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/g4afvja.jpg)&quot;);
  }   else if (currentIcon === sleet)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/pjq3VPO.jpg)&quot;);
  }   else if (currentIcon === snow)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/vH9cyKD.jpg)&quot;);
  }   else if (currentIcon === wind)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/ZtSl66b.jpg)&quot;);
  }   else if (currentIcon === fog)   {
	$(&quot;body&quot;).css(&quot;background-image&quot;, &quot;url(https://i.imgur.com/5z0CXkZ.jpg)&quot;);
}


```

This bug had been bothering me for a week or so. I searched on Stack Overflow for an appropriate solution and found that I could use a `div` wrapper and add:

```css
body {
   background-size: cover;
   background-repeat: no-repeat;
}
```

I added the wrapper but nothing happened.

I also already had my main content wrapped in a `div`:

```html
  &lt;body&gt;
    &lt;div class=&quot;wrapper&quot;&gt;
      &lt;div class=&quot;col-md-12&quot;&gt;
        &lt;header&gt;
          &lt;h1 class=&quot;h1-title:&quot;&gt;Local Weather App &lt;/h1&gt;
          &lt;h3&gt;&lt;/h3&gt;
        &lt;/header&gt;
```
## Object-fit, etc

You can usually `object-fit` on an image with the properties: `fill`, `cover`, `contain`, `scale-down`, or `none`:

[caption id="attachment_2183" align="aligncenter" width="337"]<img class="alignnone wp-image-2183" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/fill.jpg" alt="fill" width="337" height="380" /> fill[/caption]

[caption id="attachment_2181" align="aligncenter" width="395"]<img class="alignnone wp-image-2181" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/cover.jpg" alt="cover" width="395" height="244" /> cover[/caption]

[caption id="attachment_2186" align="aligncenter" width="398"]<img class="alignnone wp-image-2186" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/contain.jpg" alt="contain" width="398" height="269" /> contain[/caption]

[caption id="attachment_2187" align="aligncenter" width="515"]<img class="alignnone wp-image-2187" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/scaled_down.jpg" alt="scale-down" width="515" height="346" /> scale-down[/caption]

[caption id="attachment_2184" align="aligncenter" width="590"]<img class="alignnone wp-image-2184" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/none.jpg" alt="none" width="590" height="452" /> none[/caption]

I tried `object-fit: cover` on the body. Didn’t work. Same with `contain`, `scale-down`, and `fill`.

I searched some more and found the answer on a Treehouse forum.

```css
html {
   min-height: 100%;
}
```
I tried `height: 100%` on the `body` but that didn’t work either.

Since the `html` element is actually at the root of the `document` and `body` descends from the `html` element, applying the global style to the `html` element actually makes sense.

Also, because I am specifying a minimum height that happens to be a percentage, it makes it responsive because I am not specifying a fixed size in the viewport.

Now, I have a mobile app that looks like this:

<img class=" wp-image-2182 aligncenter" src="https://tiffanywhite.tech/wp-content/uploads/2017/08/IMG_3816.png" width="262" height="458" />

Still, I need to fix the loading issue. Thats for another day.

You can find the weather app at [https://twhite96.github.io/Weather\_App](https://twhite96.github.io/Weather_App).

[^1]: And for several days before that actually.

</div>




</div>