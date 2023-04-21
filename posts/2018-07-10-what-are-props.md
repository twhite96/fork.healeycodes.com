---
title: What Are Components and Props?
date: 2018-07-10 02:41
excerpt:
comments: true
layout: post
link: >
    "https://tiffanywhite.tech/components-props"
categories: 
  - React
tags:
  - web development
  - react
  - javascript
  - react components
  - component props
image: https://res.cloudinary.com/twhiteblog/image/upload/v1531190202/chuttersnap-710335-unsplash_tsxgat.jpg
description: Components and props are the lifeblood of a React app. What are they and how do they work?
---

In order to understand how React renders the UI, we need to understand two crucial elements to a React application: *components* and *props*. Each of these elements allow you to reuse pieces of your application and think about each piece in isolation of the others. 

# What Are Components?

Components are basically functions. You can use a JavaScript function[^1] or a class based component in order to return React elements rendering what should be displayed on the screen.

Each component takes a *prop* which is just some input given to a React component.

## Functional Component Example

```js
function Hello(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

This is valid because it accepts *one prop*[^2] object argument and returns a React element.

## Example of a Class Based Component

```js
class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```
Class components have extra functionality that I will cover in another article. For now, this is how you create functional and class based components.

## Rendering a Component
You can create user defined components in React. For example:

```js
const element = <Hello name="World" />;
```
This is an example of **JSX** helping React create elements to be rendered to the DOM. When React sees this user-defined component, it will pass the JSX attributes to the component as a single object called *props*. You can think of a *prop* like an HTML attribute, for example:

```html
<form action="" method="get" class="form-example">
  <div class="form-example">
    <!-- Where "name" is an HTML attribute where it gives the label element some input -->
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>
```

Here, we render *"Hello, World"* on the page:

```js
function Hello(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Hello name="World" />;

React.DOM.render(
  element,
  document.getElementById('root')
);
```

Here we are taking the React component `Hello` and rendering it using `ReactDOM.render()` with `{name: 'World'}` as the props.

## Props Should Never Be Changed

A component's props should never mutate. While React is pretty flexible about this, you should always use a "pure" function, something like:

```js
function multiply(x, y) {
  return x * y;
}
```

This function is "pure" because it doesn't change its inputs and will alway return the same result.

Note that "impure" functions mutate their own output:

```js
function accumulate(account, getMoney) {
  account.total += getMoney;
}
```

React has a pretty steadfast rule:

**All React components should not change their inputs.**

If you want to accomplish something like this, you will have to use *state*. That is for another blog post, however.

[^1]: Called a functional component
[^2]: Which stands for properties. I will get more into what React *is* more in depth in another article.
