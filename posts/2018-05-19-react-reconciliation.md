---
ID: 3127
title: What Is React Reconciliation?
author: Tiffany White
date: 2018-05-19 23:04:01
post_excerpt: >
  In order for React to be as fast as it
  is, it only needs to update the parts of
  the DOM that need it.
layout: post
published: true
comments: true
image: https://res.cloudinary.com/twhiteblog/image/upload/v1527285926/react_redux_trpz1i.jpg
tags:
  - DOM
  - react
  - reconciliation
categories:
  - React
---

<img src="https://res.cloudinary.com/twhiteblog/image/upload/v1527285926/react_redux_trpz1i.jpg" alt="react_redux"/>

*Photo by Anthony DELANOIX on Unsplash*

> This is an update to this article because of input by Dan Abramov. Thanks Dan!

In order for React to be as fast as it is, it only needs to update the parts of the DOM that need it. You really don't need to worry about doing this yourself, but understanding how `setState()` in React works could be beneficial.

## The `render()` Function

The `render()` function in React creates a tree of React elements. When you pass props down and those props update, the `render()` function returns a different tree of elements. When a component’s state changes, React calls the component's render method to get a tree of elements it wants to render. This tree is sometimes called the "virtual DOM". React also remembers the previous rendered element tree, so it can compare the new and the old version to figure out what needs to change in the actual DOM, and performs these changes.

Take this code from CSS-Tricks:

```js
class App extends React.Component {

  state = {
    result: '',
    entry1: '',
    entry2: ''
  }

  handleEntry1 = (event) => {
    this.setState({entry1: event.target.value})
  }

  handleEntry2 = (event) => {
    this.setState({entry2: event.target.value})
  }

  handleAddition = (event) => {
    const firstInt = parseInt(this.state.entry1)
    const secondInt = parseInt(this.state.entry2)
    this.setState({result: firstInt + secondInt })
  }

  render() {
    const { entry1, entry2, result } = this.state
    return(
      <div>
        <div>
          <p>Entry 1: { entry1 }</p>
          <p>Entry 2: { entry2 }</p>
          <p>Result: { result }</p>
        </div>
        <br />
        <div>
          Entry 1:
          <input type='text' onChange={this.handleEntry1} />
        </div>
        <br />
        <div>
          Entry 2:
          <input type='text' onChange={this.handleEntry2} />
        </div>
        <div>
          <button onClick={this.handleAddition} type='submit'>Add</button>
        </div>
      </div>
    )
  }
}
```

We set up the initial state to an object which will expect some input. This is the `App` component. When an input is captured in the entry field, React will create a new *tree of elements* that will contain the new state for `entry1`. React will compare the new tree of elements with the old one to figure out what needs to change in the actual DOM, and performs these changes.

A new tree of elements is created each time state changes in the `App` component.

## Mounting/Unmounting on State Change

React will attempt to preserve the existing DOM tree so input state would not get destroyed. State changes trigger reconciliation. During reconciliation, React compares the trees to decide what to keep or mount and unmount.

To get an example of this, check out this pen I forked below:

<p data-height="467" data-theme-id="22729" data-slug-hash="WJPeME" data-default-tab="js,result" data-user="twhite96" data-embed-version="2" data-pen-title:="reconciliation-2 Pen" class="codepen">See the Pen <a href="https://codepen.io/twhite96/pen/WJPeME/">reconciliation-2 Pen</a> by Tiffany White (<a href="https://codepen.io/twhite96">@twhite96</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>



## Why This Matters

The way React handles state and state changes makes it really fast. You'll need to be careful to adhere to its heuristics and conventions or else performance will degrade. With that said, it is pretty easy to build a performant app in React.

## Wrapping Things Up

There are a few things I didn't go over in this article but I suggest you read the [React docs on reconciliation](https://reactjs.org/docs/reconciliation.html).
