---
title: "Piping in a Node API from Glitch to a React Frontend"
layout: post
tags: [React, create-react-app]
image: https://res.cloudinary.com/twhiteblog/image/upload/v1581491834/IMG_0767_wanmww.jpg
---

*Creating the frontend was the hardest part for me.*

Not because I am unfamiliar with React per se, but consuming APIs *in* a React app was new to me.

All of this time programming and I have very little experience with the Fetch API[^1] though I am [rewriting my Wikipedia Viewer freeCodeCamp project](https://github.com/twhite96/wikipedia-viewer) to use fetch. So getting the hang of how that works was a bit of a time waster.

## The stack
I used CRA, or create-react-app, [Shards UI](https://designrevision.com/downloads/shards-react/)[^2], and am currently trying to implement a spinner using `React.lazy()` and `React.suspense`.

## Consuming the API
All I basically had to do was create the scaffold with `npx create-react-app dummy-glitch-api` and voila, a scaffold.

Creating each component was easy enough, and I consumed the API in the `User` component:

```js
export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      // isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://faker-api.glitch.me/api/user")
      .then(res => res.json())
      .then(user => this.setState({ user }))
      .catch(err => console.log(err));
  }
  ```

This is basically fetching my API from the the `api` directory. The response is json and we wait for the response to finish.

In the `App` component, we create several `User` components so that each card has different data.

```js
   <div>
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
```

This gives us what we want for the most part.

## Loading spinner
This is where I am having difficulty. I started using it with plain old React from a year or two ago. Then I realized that `React.lazy()` and `React.suspense` exists.

The spinner is a work in progress but it is coming along.

## Result
It is far too late at night and I am getting tired but I wanted to get these posts out.

You can find the resulting app at [Faker Data](https://fakerdata.tiffstuff.dev) and you can [visit the repo on GitHub](https://github.com/twhite96/dummy-glitch-api-frontend) to poke around, fresh with a *Deploy to Netlify* button!


[^1]: Haven't needed to consume any data from an API for a long time.
[^2]: I didn't need this. I could have used styled-components. My first instinct when building an app is to grab a UI library when maybe I don't need one.