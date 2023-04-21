---
title: "Bugfix: Spelunking in Someone Else's Code"
layout: post
tags: [Bug fixing]
image: /assets/images/posts/2019/bugfix.png
---

I love [CodeSandbox](https://codesandbox.io/). It has pretty much replaced CodePen for me unless I am fiddling around with CSS or freeCodeCamp front-end projects.

I like going through the sandboxes and picking out different ones to look at, take apart, and figure out how they work.

While going through [React Tutorial for Beginners](https://egghead.io/courses/the-beginner-s-guide-to-react) by [Kent C. Dodds](https://kentcdodds.com/) on [Egghead.io](https://egghead.io) I decided I would look for sandboxes that correlate with the course as I was using Codesandbox to build out the stopwatch we were building in that course.

I found a [sandbox](https://codesandbox.io/s/v1vqomk697) which I forked and found it to be buggy.

Why didn't the stopwatch work? Glancing at the code for a few seconds, I saw some obvious problems right away.

Here is an example of the stopwatch being broken:

<iframe src="https://embed.cl.ly/89f29a329f05?nobranding=1&notitle=1" width="575" height="400" style="border:none" frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe><br />

## Bugfix 1

The first thing I noticed was on line 7:

```js{7}
class StopWatch extends React.Component {
  state = { lapse: 0, running: false };
  handleRunClick = () => {
    const startTime = Date.now() - this.state.lapse;
    setInterval(() => {
      this.setState({
        lapse: Date.now - startTime
      });
    });
    this.setState({
      running: true
    });
  };
  ```
`Date.now()` needs parentheses. `Date` is an an object constructor with `.now()` being a method. When we click on the start button, React doesn't know what to do here; we aren't setting the state of `lapse` to be a number, which we expect. By adding the parentheses, we get the start button to work. No more `NaNms`.

But now we have another problem: *the timer won't stop*.

<iframe src="https://embed.cl.ly/00f839e040df?nobranding=1&notitle=1" width="575" height="400" style="border:none" frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe>

I also removed the `console.log(Math.random());` because I felt it was unneeded.

## Bugfix 2: Getting the Stopwatch to Stop and Clear

Each time the button is clicked, we set the state to either `running` or `lapse`. The timer runs when we click `start` but clicking `stop` or `clear` doesn't seem to work. How can we fix this?

We can create a timer update function that accepts the current state. We can accomplish this by using native DOM APIs such as `setInterval()` and `clearInterval()`. We can run conditional logic to see if the timer is running:

```js
//updater function
this.setState(state => {
  if (state.running) {
    clearInterval(this.timer);
  } else {
    const startTime = Date.now() - this.state.lapse;
    this.timer = setInterval(() => {
      this.setState({
        lapse: Date.now() - startTime
      });
    });
  }
```
and use `Date.now()` to get the timestamp in ms, assign it a `startTime` variable to compare the current time to the amount of time that has passed. When we click the start button, it sets the `startTime` to the current timestamp. We also need to return a new state as state is *not* mutable..

```js{17,5-13}
class StopWatch extends React.Component {
  state = { lapse: 0, running: false };
  handleRunClick = () => {
    //updater function
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.lapse;
        this.timer = setInterval(() => {
          this.setState({
            lapse: Date.now() - startTime
          });
        });
      }
      // returning a new state
      // to not mutate our original state
      return { running: !state.running };
    });
  };
```

Okay so this *partially* works. But as you can see below, if I click `clear` while the stopwatch timer is running, it *doesn't* clear the timer, and it also doesn't allow me to *stop* the timer, either.

<iframe src="https://embed.cl.ly/64d34da82d2d?nobranding=1&notitle=1" width="575" height="400" style="border:none" frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe>

How do we fix this particular bug?

If we look back at the previous code, we can see we are using `clearInterval()` to reset the stopwatch timer. In our current iteration, our `handleOnClear` method is just *setting* the state without *clearing* the previous state.

```js
handleOnClear = () => {
  this.setState({
    lapse: 0,
    running: false
  });
};
```

We can fix this by adding `clearInterval()` and passing in the timer function to the `handleOnClear` method to clear the state.

```js
handleOnClear = () => {
  clearInterval(this.timer);
  this.setState({
    lapse: 0,
    running: false
  });
};
```

This will give us the results we want.

<iframe src="https://embed.cl.ly/77ecb442e8bb?nobranding=1&notitle=1" width="575" height="400" style="border:none" frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe>

## Potential Problem?

There is a memory leak in this particular iteration. The timer will run until it is *explicitly* stopped in the DOM. We can use a [React lifecycle method](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class) to stop all processes in the DOM when this component is mounted or unmounted.

For this we can use `componentWillUnmount` to tell React to unmount the component once it is done rendering.

```js
componentWillUnmount() {
  clearInterval(this.timer);
}
```

## Thoughts and Conclusions

I find it much more enjoyable fixing *other people's* bugs than my own. This was a fun exercise and I plan on doing it more regularly and blogging about it.

This stopwatch is a stupid simple component but if you are just scratching the surface of React like me, I am sure digging into something like this stopwatch and figuring out how it works is an excellent exercise and use of one's time.

<iframe src="https://codesandbox.io/embed/wyz76w95n8" style="width:100%; height:400px!important; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

