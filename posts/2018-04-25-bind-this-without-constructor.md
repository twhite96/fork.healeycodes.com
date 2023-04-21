---
ID: 3065
title: >
  How to Bind this in React Without a
  Constructor
# bind-this-without-constructor
author: Tiffany White
date: 2018-04-25 05:00:27
post_excerpt: >
  this in React is a reference to the
  current component.
layout: post
link: >
  https://tiffanywhite.tech/bind-this-without-constructor/
published: true
tags:
  - binding
  - react
  - this
categories:
  - React
---

<img src="https://res.cloudinary.com/twhiteblog/image/upload/c_scale,w_1894/v1528082268/eva-blue-42498-unsplash_y7lcwn.jpg" />

`this` in React is a reference to the current component. Usually `this` in React is bound to its built-in methods so that when you want to update state or use an event handler on a form, you could do something like this:

```javascript
<input type="text" ref={this.someInput} required placeholder="This is a Method" defaultValue={getSomeMethod()}/>
```
where `this.someInput` is passing state to whichever React component you are rendering.

Unfortunately, though, React doesn't auto-bind `this` to custom methods. This means if I wanted to manipulate the DOM by getting some input, which you can't do as you can with normal JavaScript, I would create a `ref` to do whatever DOM tinkering I wanted.

But because React doesn't auto-bind `this`, the following code would output undefined when logged:

```javascript
someInput = React.createRef();
  renderSomeInput (event) {
    event.preventDefault();
    const someFunction = this.someInput.value.value;
    console.log(this);
  }
```

In order to avoid this, we could use the `constructor` function in order to initialize or get the state we want:

```javascript
class SomeCompenent extends React.Component {
  constructor() {
    super();
    this.renderSomeInput.bind(this);
  }
}
```
While this is a decent way to initialize state, what if you wanted to bind several custom methods in one component? It would get pretty messy...


```javascript
class SomeCompenent extends React.Component {
  constructor() {
    super();
    this.renderSomeInput.bind(this);
    this.renderSomeInput.bind(this);
    this.renderSomeInput.bind(this);
    this.renderSomeInput.bind(this);
   }
}
```
You get the idea.

Instead, we can bind `this` to custom React methods by declaring a method and assigning it to an arrow function:

```javascript
class SomeCompenent extends React.Component {

  someInput = React.createRef();
    renderSomeInput = (event) =>  {
    event.preventDefault();
    const someFunction = this.someInput.value.value;
    console.log(this);
    }
  }
```
which will allow us to bind the value of `this` to the `SomeComponent` component.
