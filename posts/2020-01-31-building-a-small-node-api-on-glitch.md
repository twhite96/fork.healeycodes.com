---
title: "Building A Small Node API On Glitch"
layout: post
tags: [APIs, Glitch, Node]
image: https://res.cloudinary.com/twhiteblog/image/upload/v1581489715/IMG_0762_ahmlyr.jpg
---

At the end of last year, I decided I wanted to try my hand at building and consuming my own API.

First, I needed to decide what data I was going to use. Second, I needed a place to host the API, and third, I needed someplace to consume the API and display it.

I knew the stack I was going to use on the backend: Node.js and Express. I decided that I'd host it on [Glitch](https://glitch.com)[^1] as a simple, free way to create a proof-of-concept API.

## The data

I used [Faker.js](https://github.com/marak/Faker.js/)'s API to create dummy data for a list of contacts.

Using the API is as simple as calling a few methods in your response, for instance:

```js
  res.json({
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
    // image: faker.image.avatar()
  });
});
```

## Structure of the API

I have a directory called `/api` that holds my `user.js` that just holds the main route to the root of the project.

I also have a `public` directory that holds static files.

## End result

This is really simple to build. Glitch helps you along but I already was familiar with writing APIs[^2]. The Glitch project is below.

<!-- Copy and Paste Me -->
<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/faker-api?path=server.js&previewSize=0"
    title="faker-api on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>


[^1]: I made an account, remixed a couple projects that I never touched, and just didn't know what to use Glitch for. I found one use at least.
[^2]: Using tutorials so I wanted to do this *myself* and is part of the motivation for this whole project.