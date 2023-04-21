---
ID: 2911
title: Destructuring Objects in ES6
# destructuring-objects-es6
author: Tiffany White
date: 2018-03-04 11:31:49
post_excerpt: >
  Destructuring is a way to extract values
  from nested arrays and objects.
layout: post
link: >
  https://tiffanywhite.tech/destructuring-objects-es6/
published: true
tags:
  - javascript
  - web development
categories:
  - ES6
---

<img src="https://res.cloudinary.com/twhiteblog/image/upload/c_scale,w_2827/v1527286051/adrian-tormo-316868-unsplash_tugcsv.jpg"/>

What is destructuring?

> Destructuring is a way to extract values from nested arrays and objects.

When you use *destructuring*, you are taking a JavaScript expression and extracting data from either arrays, objects, maps, and sets into their own variable. It also allows you to extract properties on an object or items from an array in multiples.

## Examples

```javascript
const car = {
  make: 'Subaru',
  model: 'BRZ',
  year: '2018',
  dealership: 'Cochran',
  city: 'Pittsburgh'
};

const make = car.make;
const model = car.model;
```

In this example, we have some pretty repetitive code where we need to create a variable from some value inside of an object.

Instead of creating multiple variables, we can destructure them to a single, sweet line:

`const {  make, model } = car;`

where we get a variable called **make** and a variable called **model** extract them from the `car` object and putting them into their own variables which are scoped to the parent block, in this case, the `window` since they aren't in a nested object.

If I wanted to add another property to the destructured object, I could do something like this:

`const { make, model, year } = car;`

where we get a top level variable inside our scope.

This is a good use of destructuring, but what if we want to get at data in nested arrays and objects?

Take this data we get from some web API:

```javascript
const weather = {
  city: 'Pittsburgh',
  state: 'Pennsylvania',
  local: {
    precipitation: {
      snowing: yes,
      raining: no,
    },
    coordinates: {
      lat: '40.4406° N',
      long: '79.9959° W'
    }
  }
};
```

I just want the latitude and longitude in this case. I could do:

```javascript
const lat = weather.local.coordinates.lat;
const long = weather.local.cooridinates.long;
```
but this is not easy to reason about.

*Destructuring to the rescue*:

```javascript
const { lat, long } = weather.local.coordinates;
console.log(lat, long);
```

In this instance we need to destructure `weather.local.coordinates` because we are destructuring an object a few levels deep.

## Other Fun Stuff

You can also rename *and* destructure variables in ES6.

How?

```javascript
const snowing = 'no';
const weather = {
  city: 'Pittsburgh',
  state: 'Pennsylvania',
  local: {
    precipitation: {
      snowing: 'yes',
      raining: 'no',
    },
    coordinates: {
      lat: '40.4406° N',
      long: '79.9959° W'
    }
  }
};
```
Here I already have a `snowing` variable. I also have a `snowing` key on the same object. You aren't able to do this, however, so you will need to rename the variable or the key within the object. In this instance, we can rename the `snowing` property to `snow` and the `raining` property to `rain`.

`const { snowing: snow, raining: rain } = weather.local.precipitaton;`

This will assign `weather.local.precipitaton` to a variable called `snow` and also to a variable called `rain`.
