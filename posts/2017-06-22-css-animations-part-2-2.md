---
ID: 2025
title: CSS Animations, Part 2
# css-animations-part-2-2
author: Tiffany White
date: 2017-06-22 21:06:48
layout: post
link: >
  https://tiffanywhite.tech/css-animations-part-2-2/
published: true
tags: uncategorized
categories:
  - "Tiffany's Posts"
---


## Transition Timing Functions, Delays, and Transforms

You can do some really cool things with CSS that I wasn't sure I would like.

I'm a big time JavaScript lover [^1] and so I like to do things programmatically if I can. The perf benefits between [CSS and JavaScript are negligible](https://davidwalsh.name/css-js-animation) [^2].

So in Part 2 of this series, I want to talk about CSS timing functions, delays, and transforms.

### Timing Functions

Some of the most basic timing functions, which allow you to determine when a transition starts or stops, are `ease`, `ease-out`, and, `ease-in-out`. These are pretty self-explanatory. But how could you use them?

You could use them to ease on hover an image overlay:

```css
.img-overlay {
  // Set background color of the overlay
  background-color: #000000
  // Define what property we are transitioning
  transition-property: opacity;
}

.img-overlay:hover {
  // Set the opacity
  opacity: .06;
  // Use the transition-delay transition
  // to delay when a transition starts
  transition-delay: .4s;
  // Add a transition-timing-function
  // to ease the transition out on hover
  transition-timing-function: ease-out;
}
```

### CSS Transforms

These are really cool. I think that they are great in moderation. Some of the transforms can make the user experience fun if not overdone. Let's take a look at some CSS transforms.

CSS transforms move, rotate, skew, and scale elements on the page relative to their respective containers. The center position is the default position, which starts at 0. For instance, the default is `transform-origin: 0;`.

This means that when you skew, rotate, scale and element, it will do so relative the the center of the image, button, etc in its container.

You can also use the CSS shorthand property `transform` to chain together different transforms. It also defaults to the center position on any property you specify.

One of my favorite CSS transforms is the `scale()` function. It will make the image, button, etc larger relative to its own container. For instance:

```css
.element {
  width: 20px;
  height: 20px;
  // Use the transform scale function
  // to scale the element outwards
  // 35px from the center
  transform: scale(35);
}
```
This will scale the image quite large on the page.

What if we want it to only scale when we hover?

Well, we could add `transform` to a `transition` like this:

```css
.img-fluid {
  // Select the img-fluid class and transition
  // The transform property for 500 milliseconds
  transition: transform .5s;
}

.img-fluid:hover {
  // Transform the img-fluid class with the scale function
  // This will scale the image on hover 1.1px from center
  transform: scale(1.1);
}
```
How cool is that?

### On to Part 3...

I will be writing about CSS shorthand properties for `transition` and `transform`.

[^1]: I know it's popular to crap on JavaScript but *I* really like it.



## Transition Timing Functions, Delays, and Transforms

You can do some really cool things with CSS that I wasn't sure I would like.

I'm a big time JavaScript lover [^1] and so I like to do things programmatically if I can. The perf benefits between [CSS and JavaScript are negligible](https://davidwalsh.name/css-js-animation) [^2].

So in Part 2 of this series, I want to talk about CSS timing functions, delays, and transforms.

### Timing Functions

Some of the most basic timing functions, which allow you to determine when a transition starts or stops, are `ease`, `ease-out`, and, `ease-in-out`. These are pretty self-explanatory. But how could you use them?

You could use them to ease on hover an image overlay:

```css
.img-overlay {
  // Set background color of the overlay
  background-color: #000000
  // Define what property we are transitioning
  transition-property: opacity;
}

.img-overlay:hover {
  // Set the opacity
  opacity: .06;
  // Use the transition-delay transition
  // to delay when a transition starts
  transition-delay: .4s;
  // Add a transition-timing-function
  // to ease the transition out on hover
  transition-timing-function: ease-out;
}
```

### CSS Transforms

These are really cool. I think that they are great in moderation. Some of the transforms can make the user experience fun if not overdone. Let's take a look at some CSS transforms.

CSS transforms move, rotate, skew, and scale elements on the page relative to their respective containers. The center position is the default position, which starts at 0. For instance, the default is `transform-origin: 0;`.

This means that when you skew, rotate, scale and element, it will do so relative the the center of the image, button, etc in its container.

You can also use the CSS shorthand property `transform` to chain together different transforms. It also defaults to the center position on any property you specify.

One of my favorite CSS transforms is the `scale()` function. It will make the image, button, etc larger relative to its own container. For instance:

```css
.element {
  width: 20px;
  height: 20px;
  // Use the transform scale function
  // to scale the element outwards
  // 35px from the center
  transform: scale(35);
}
```
This will scale the image quite large on the page.

What if we want it to only scale when we hover?

Well, we could add `transform` to a `transition` like this:

```css
.img-fluid {
  // Select the img-fluid class and transition
  // The transform property for 500 milliseconds
  transition: transform .5s;
}

.img-fluid:hover {
  // Transform the img-fluid class with the scale function
  // This will scale the image on hover 1.1px from center
  transform: scale(1.1);
}
```
How cool is that?

### On to Part 3...

I will be writing about CSS shorthand properties for `transition` and `transform`.

[^1]: I know it's popular to crap on JavaScript but *I* really like it.




[^2]: As long as you're not using a heavy library. I'm looking at you, jQuery.