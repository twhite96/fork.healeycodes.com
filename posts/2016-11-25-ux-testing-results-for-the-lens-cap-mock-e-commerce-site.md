---
title: UX Testing Results for The Lens Cap Mock E-Commerce Site
modified:
categories: cs_0134 ux_testing assignments
excerpt: I asked six users of various technical ability to test The Lens Cap’s UX-- its responsiveness, its legibility, its resolution, and whether they were able to find what they needed in search, etc.
tags: [ux,testing,pitt]
date: 2016-11-25T00:00:30-04:00
---
## Summary

I asked six users of various technical ability to test The Lens Cap’s UX: its responsiveness, its legibility, its resolution, and whether they were able to find what they needed in search, etc. I asked them to tell me which devices they used and asked for suggestions on how to make the site better, what surprised them, good or bad, about the site, and also if anything frustrated them while using it.

Here are the results:

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQM6YytnYBlXnyhNWWpB_AJx2DJ8xGP-mEODsqF_TqbO-r4ZPdXZyGwr08xhlaUqUv0SVLk8hAvB_Td/embed?start=false&loop=false&delayms=3000" frameborder="0" width="900" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

### Extended Questions

#### What were some areas that frustrated you when using the site?

* User 1: *"I didn’t understand how to filter by type"*.
* User 2:  n/a
* User 3: *"There is a lack of vertical rhythm, making the site too colourless isn't pleasant, there are no boundaries on main elements, there is no visual guidance, and the carousel isn't really a good idea in terms of displaying content. Calls to action weren't clearly defined."*
* User 4: *"There is no content hierarchy; it's important on e-commerce sites."*
* User 5: *"The content looks like a bit unstructured."*
* User 6: *"The search function kind of fades into the design and it took me a moment to figure out where it was."*


#### What were some surprises, good or bad when using the site

* User 1: *"I was surprised I couldn't find the search feature."*
* User 2: n/a
* User 3: *"Responsiveness was weird, that's bad. Typography is clear, it surprisingly works well."*
* User 4: *"Good, it's simple to use. Bad? The ordering at the menu."*
* User 5: *"the menu, is bad... not sure"*
* User 6: *"Most surprising was the resizing photos on hover."*

##### Suggestions

###### Do you have any specific suggestions to improve the site?

* User 1: *"Make the search easier to find and perhaps give instructions to the user on how to filter by type?"*
* User 2: *"contact and pricing sections need more UI/UX work"*
* User 3: *"Use semantic guides and visual guides. Take a look at the modular scale to improve font sizes. Take a look at the material colour collections. And work with defined (xs, sm, md, lg) sizes, so that responsiveness isn't an issue."*
* User 4: *"Content hierarchy is paramount in a site like this one."*
* User 5: *"nono, overall i liked the site... it's not a production site but works as a prototype."*
* User 6: *"contact and pricing sections need more UI/UX work"*

## Observations

### Devices

Most people used a PC or Mac when accessing The Lens Cap, some of the users using more than one device. I could have improved the testing by asking the load times for each device and what kind of connection on each. As I started the test, I was expecting to have less technical users but it turned out most of my users were tech savvy; all but one was a developer/designer.

### Site Speed

The site loaded fairly quickly— there were no load times over 2s. Even so, I’d like to make sure each load time on each device is under 2s. [Studies suggest](https://blog.kissmetrics.com/speed-is-a-killer/) that users will bounce off a site if it loads in >2s. I’d like to get the load speed down and can do so with minification of JavaScript, adding scripts to the bottom of the page, and eliminating unnecessary libraries.

I could also optimize the images further or serve them over a CDN.

### Resolution

The resolution of the site was consistent across devices, without any elements becoming blurry.

### Attractiveness

Five out of the 6 users found the site appealing with 3 finding it very visually appealing. The lone user who said it was less than appealing found the layout, use of the carousel, and lack of vibrant colors a turn off. I fretted over the use of color a lot during this project. In the end, I went with my preference instead of what my users may want. The use of material color design, etc was something I thought about and while this user was in the minority, I know the conventional wisdom is to have more than just the neutral brown, gray, black, etc.

### Element Speed

The carousel loaded the slowest out of all the elements. Half of users had the carousel load quickly, between 0-1s, 2 had the carousel load between 1-2s, and one user answered that the carousel loaded in a very slow 2-3s.

To reduce speed, I’d probably have to add less features to the script’s object. Though some of the elements of the carousel weren’t rendering, I left them in the main object. Slick.js carousel optimization was tricky for me on such great connections.

### Search

Most people could not find the search because it was so laid into the design. The amount of users who could find things easily and those who couldn’t were scattered evenly along the continuum of “1” being very easy and “5”being very hard.

Making the search part of the menu could have helped this instead of using the search as part of the pricing page.

### Fonts/Copy

The font choice, Lato, was the correct one, with all users being able to read the text. It wasn’t too small or to light. I feel the color could be darker in some areas for older eyes.

## Conclusion
For my first site built with a template and then overhauled, it was a moderate success. I am not a designer, and I don’t want to be a designer, and so my knowledge of color and harmony are limited. I am willing to learn through places like Treehouse, Sitepoint, etc.

I have gained enough knowledge from this test to know where I need to improve.