---
ID: 2026
title: CSS Animations, Part 1
# css-animations-part-1-2
author: Tiffany White
date: 2017-06-22 21:06:48
layout: post
link: >
  https://tiffanywhite.tech/css-animations-part-1-2/
published: true
tags: uncategorized
categories:
  - "Tiffany's Posts"
---


As you may know, you can animate pretty much anything with JavaScript and jQuery. jQuery makes it easier as it is a pretty neat and simple JavaScript library. No need to use:

```
document.getElementByID
```
when you can use:

```
$(#myID).animate({
  left: &#039;250px&#039;
});
```

You can also animate things with CSS. There are debates on whether [CSS animations are faster than JavaScript animations](https://davidwalsh.name/css-js-animation) and generally, if you are using vanilla JS and not a heavy library like jQuery, JavaScript animation perf is comparable to CSS.

## So How Do You Animate with CSS?

There are basically two ways to animate properties in CSS: *transition* and *transform*.

Not all CSS properties are animatable. See [this list](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) for animatable properties.

Animating a property with CSS is fairly straight-forward.

Take the animatable property: `opacity`. We can animate the `opacity` on an image overlay so that when we hover over it with the mouse, the opacity of the overlay will decrease on the image. You can do that with something like this:

```
.overlay {
	opacity: 0;
	transition-property: opacity;
	transition-duration: .4s;
}

.overlay:hover {
	opacity: 2;
}
```

Here, we are selecting the `overlay` class, and adding a base property to that class. Inside of the class selection, we set the `opacity` to `0` and add the transition with `transition-property` which selects the property you want to animate and `transition-duration` which tells the browser how long the animation lasts.

Once you hover over the image, the opacity will be set to `2,` and when you switch off of it, it will go back down to `0` since we told the browser by the first CSS declaration we needed to have the opacity return to `0` once the hover state was over.

## Not Too Bad, Right?




As you may know, you can animate pretty much anything with JavaScript and jQuery. jQuery makes it easier as it is a pretty neat and simple JavaScript library. No need to use:

```
document.getElementByID
```
when you can use:

```
$(#myID).animate({
  left: &#039;250px&#039;
});
```

You can also animate things with CSS. There are debates on whether [CSS animations are faster than JavaScript animations](https://davidwalsh.name/css-js-animation) and generally, if you are using vanilla JS and not a heavy library like jQuery, JavaScript animation perf is comparable to CSS.

## So How Do You Animate with CSS?

There are basically two ways to animate properties in CSS: *transition* and *transform*.

Not all CSS properties are animatable. See [this list](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) for animatable properties.

Animating a property with CSS is fairly straight-forward.

Take the animatable property: `opacity`. We can animate the `opacity` on an image overlay so that when we hover over it with the mouse, the opacity of the overlay will decrease on the image. You can do that with something like this:

```
.overlay {
	opacity: 0;
	transition-property: opacity;
	transition-duration: .4s;
}

.overlay:hover {
	opacity: 2;
}
```

Here, we are selecting the `overlay` class, and adding a base property to that class. Inside of the class selection, we set the `opacity` to `0` and add the transition with `transition-property` which selects the property you want to animate and `transition-duration` which tells the browser how long the animation lasts.

Once you hover over the image, the opacity will be set to `2,` and when you switch off of it, it will go back down to `0` since we told the browser by the first CSS declaration we needed to have the opacity return to `0` once the hover state was over.

## Not Too Bad, Right?





It is fairly simple, once you get the hang of it. I will be posting more about CSS transitions as I learn them. Meanwhile, here is [nice little table](http://leaverou.github.io/animatable/) of animatable properties by [Lea Verou](http://lea.verou.me/) that animate when you hover over them.