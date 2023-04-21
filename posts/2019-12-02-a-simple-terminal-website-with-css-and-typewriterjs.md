---
title: "A Simple Terminal Website with CSS and Typewriter.js"
layout: post
tags: [CSS, JavaScript]
image: https://res.cloudinary.com/twhiteblog/image/upload/v1575418294/pard0x-terminal.png
---

Just recently, I was searching for how to create a terminal-esque website, much like Jeremy Wagner's old site where you could run commands to open different links and places on his site.

It was really cool, and interesting idea: a command line interface to navigate a website[^1]. Neat!

I went in search of doing something similar however couldn't find any articles or tutorials on how to do it.

## Hacker Noon
I found an [interesting article](https://hackernoon.com/how-to-make-a-terminal-like-portfolio-website-for-yourself-27d7a7030004) on how to make a terminal landing page. It was kind of what I was looking for, but still had some flaws:

- The UI of the site was decent but still not what *I* would want
- I dug into the code on [GitHub](https://github.com/CodeNerve/CodeNerve.github.io) and decided that piping in a text file to do the typewriter effect was a hack I wasn't willing to put up with

The interesting bits, like the typing and the introduction to what the site is about, was something I could take with me.

## GitHub diving
I came across this site, [0x44](https://www.0x44.pw/) and instantly knew I wanted my landing page to look like this.

I copied the CSS when I inspected the site[^2], added a bit of my own, and went to work.

## The HTML
It's just plain old HTML; a header and nav, footer, like so:

```html
<header>
    <nav>
      <a href="/" class="underline">/about</a>
      <a href="your email here" class="underline">/contact</a>
    </nav>
  </header>
  <div class="site-title">
    <h1>
      <a href="/">twhite96:$</a><span class="cursor">█</span>
    </h1>
  </div>
  <div id="app" class="container">

  </div>
  <footer>

    <a href="https://github.com/twhite96/" class="svglink">
      //GitHub svg here
    </a>
    <br><br>
    © Copyright 2019 - twhite96.

  </footer>
</body>
</html>
```

Here we have a nav that will have the core links underlined. Then, we give the main part of the terminal header the class, `site-title` where we will give it its 1980s terminal vibe. You can find the block cursor with an online search.

The second `div` is where the cool stuff happens.

I am using a library for the typewriter effect called, obviously, [typerwriterjs](https://github.com/tameemsafi/typewriterjs). In order to type everything we need out to the "console", we need an empty `div` we can target with enough space to type what we need. We can do that with an `id` of `app`. Then I added a class of `container` to center the content and then make it responsive once we add content to the `div`. Then the footer is just an svg of the GitHub logo and a copyright.

## The CSS

This is the look that Ian Pringle created with his site. The main pieces are:

```css
a {
  color: rgb(0, 170, 0);
  text-decoration: none;
}

.underline:hover {
  color: rgb(0, 170, 0);
}

.underline {
  position: relative;
}

.underline::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgb(0, 170, 0);
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.underline:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}

.cursor {
  animation: cursor 2s infinite;
  color: rgb(0, 170, 0);
  display: inline-block;
  width: 10px;
  margin-left: 5px;
  border-radius: 1px;
}

.centered {
  margin: 0px auto 40px;
  display: block;
}

@keyframes cursor {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.container {
  display: flex;
  align-content: center;
}
```

We want to give the links that 1980s terminal green. We also want to give the body a black-ish background, and use CSS transitions and transforms so that when you hover the links in the nav, you get the `ease-in-out` effect:

![](https://cl.ly/f14a67bf9314/Screen%252520Recording%2525202019-12-08%252520at%25252003.30%252520PM.gif)

Using the `transform-origin` property allows us to specify where to start and end the transition, in this case, the bottom right of the link in the nav.

We give the cursor some love with the `animation` property and keyframes to give it a fade in and out look as it is blinking.

Finally, we make the text container, where our links will be displayed, a display of `flex` so it can shrink and expand as needed, and then we can align our links within that container `center`.

The problem I had was keeping the footer flush to the bottom, regardless of where the content was initiated.

I added this to the footer:

```css
footer {
  text-align: center;
  position: fixed;
  bottom: 0;
}
```

positioning the footer at the bottom with the `fixed` property making it static, and giving the `bottom` of the footer a length of `0`.


## The JavaScript
Okay this isn't really all that difficult. Just following the docs allows you to get something up and running relatively quickly.

Insert the unpkg link in the area above the closing body tag, along with the file you're going to initialize the typing effect in:

```html
<body>
  // Some code
  <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
  <script src="app.js"></script>
</body>
```
You initialize the `Typewriter` object like so:

```js
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  autoStart: true,
  cursor: '█',
  strings: ['My name is Tiffany, and I am a frontend dev and wannabe hacker.']
});
```

We target the DOM node we want the typing to occur, this being the `div` with the `id` of `app`. Then we create a new `Typewriter` object, pass in our `app` variable, and add a few properties on the `Typewriter` object:

- loop: do you want the typing to start over when it is finished?: `Boolean`
- How long to delay the start of the typing: `Number`, in `ms`
- Whether or not to start when a user initially loads the site: `Boolean`
- Type of cursor you want, the default being the `pipe`: `String`
- And the initial string you want to type out when the user first visits: `Array` of strings

This is simple enough.

To get the typing started, we can do something like this:

```js
typewriter
  .deleteAll(1)
  .pauseFor(50)
  .deleteAll(1)
  .typeString('I work for <strong>[REDACTED]</strong> as a frontend dev, and I code, write, and shoot and edit videos on weekends.')
  .pauseFor(300)
  .deleteAll(1)
  .typeString('Find me online: <br />')
  .pauseFor(300)
  .typeString('<a href="https://tiffanywhite.dev">Blog</a> <br />')
  .typeString('<a href="https://www.tiffanyrwhite.com">Portfolio</a> <br />')
```

We delete all the initial strings using the `deleteAll` method which takes a number in `ms` for how long the delete animation should last. Then we can use the `pauseFor` method to pause for a specified time in `ms`.

The `typeString` method allows us to type whatever we want. Each method takes one string that can also contain HTML. This means in order to do what I wanted, I needed to create several `typeString` methods to create a list of links I wanted to show on different lines. It's an unfortunate limitation but with everything else you get in the library, it is not a deal breaker.

Check out [all the methods](https://github.com/tameemsafi/typewriterjs#options) that come with the library to see what you can do with it.

## Wrap-up
In the end, you get my site, [pard0x](https://pard0x.dev/)[^3].

It's a simple thing that looks cool and is easy enough to build.


[^1]: His site doesn't have the command line interface anymore which is a shame, really. It was really innovative and made with pure HTML, CSS, and JavaScript.
[^2]: I give Ian S. Pringle, the dev, full credit in the source code. Don't worry.
[^3]: I wanted `par@d0x` but you know you can't do that in a domain and I forgot about that.
