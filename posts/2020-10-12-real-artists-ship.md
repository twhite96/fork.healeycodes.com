---
title: "Real Artists Ship: Portfolio Finished"
layout: post
tags: [portfolio, gatsby.js, ship it]
image: https://res.cloudinary.com/twhiteblog/image/upload/v1602538757/portfolio_vq0kye.jpg
description: Real artists ship so that's what I vow to do from here on in.
---

Real artists ship so that's what I vow to do from here on in.


{% notice primary %}
 📸 &nbsp; Photo by [Anas Alshanti](https://unsplash.com/@otenteko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/portfolio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
{% endnotice %}

This is monumental for me; I actually shipped something I said I was going to ship, and in less than a month. The thing I shipped is my [new portfolio](https://www.tiffanyrwhite.com/), built with Gatsby and based on the work of Jacob Martinez and heavily inspired by Brittany Chiang's portfolio [which I gush over in this post](/2020/07/08/portfolio-redesign-part-1-ideas/#portfolio-inspo).

It took me two weeks working on it every couple days for a couple hours a day. I took the *gatsby-simple-portfolio* theme, a simple starter, and made it my own.

## The easy part

I wanted the color theme to look like Brittany's because, well, I *really like it*. I used a tool for Mac called [Sip](https://sipapp.io/) to grab the colors from her site and went to work.

## The hard parts

There were several hard parts:

1. I wanted to have a downloadable resume in the resume button instead of a link to my resume site
2. I wanted to have navigation on the site instead of relying on *scroll-reveal* and scrolling all the way down the page
3. I wanted each nav item to scroll to its id on the page
4. I wanted a hamburger menu to show only on mobile

We'll tackle these in the next few sections.

### 1. Downloadable resume

For this I wanted a pdf file to download when users clicked the `resume` button. I didn't know or understand how people could download files, whether in Gatsby, or HTML in general.

I spent a lot of time in the [Gatsby documentation learning about the filesystem](https://www.gatsbyjs.com/docs/importing-assets-into-files/#querying-for-a-file-in-graphql-using-gatsby-source-filesystem) and how to store files. The example showed a GraphQL query but I didn't need GraphQL; this was a static site with no moving parts. The theme did not include GraphQL because it was basic. I could have added all of that but why? I just needed to serve up some images, links, and a pdf; there was no content and no pages.

I went back a couple pages in the docs and found what I needed.

I created a `download` directory in the `src` directory and placed the pdf in there. I then needed a way to download the pdf from that directory.

First, I added the directory to `gatsby-config.js` using the [`gatsby-source-filesystem`](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/) plugin:

```jsx
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `downloads`,
    path: `${__dirname}/src/downloads/`,
  },
}
```
Then I imported the pdf into the `About.jsx` component like so:

```js
// some other imports
import resumeDownload from "../../downloads/resume.pdf";
```
Next, I needed to figure out a way to download a file from a React component.

Initially, I thought I'd need to come up with some convoluted system to do this but it was as simple as using an anchor tag and a couple built-in React props:

```jsx
<span className="d-flex mt-3">
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="cta-btn cta-btn--resume"
    download
    href={resumeDownload}
  >
    Resume
  </a>
</span>
```

Now, when the user clicks the `Resume` button, a copy of my resume will download with some sort of UUID at the end[^1].

### 2. Navigation

Brittany Chiang's portfolio has an interesting navigation bar that I wanted to have. I picked a similar font to the one on her portfolio, and went about building the nav.

In order to get the numbers to be a separate color from the text, I wrapped the numbers in a `<span>` and added a class so that I could target just those spans:

```jsx
<span className="menu-numbers">01.</span> Intro &nbsp;
```

which results in this nice navbar at the top:

<figure>
    <img class="align-center" src="https://res.cloudinary.com/twhiteblog/image/upload/v1602632554/nav.png" />
    <figcaption class="caption-text">
       <a href="https://res.cloudinary.com/twhiteblog/image/upload/v1602632554/nav.png">
          <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#06d7d9">
            <path d="M19.0536842,0 L11.7951267,0 C11.2940351,0 10.8877973,0.40703125 10.8877973,0.909101562 C10.8877973,1.41117187 11.2940351,1.81820312 11.7951267,1.81820312 L16.8632359,1.81820312 L7.52432749,11.1753906 C7.16998051,11.5304297 7.16998051,12.1059766 7.52432749,12.4610156 C7.7014425,12.6385156 7.93364522,12.7272656 8.16584795,12.7272656 C8.39805068,12.7272656 8.6302924,12.6385547 8.80744639,12.4609766 L18.1463938,3.10382812 L18.1463938,8.18183594 C18.1463938,8.68390625 18.5526316,9.0909375 19.0537232,9.0909375 C19.5548148,9.0909375 19.9610526,8.68390625 19.9610526,8.18183594 L19.9610526,0.909101562 C19.9610136,0.40703125 19.5547758,0 19.0536842,0 Z" id="Shape"></path>
            <path d="M15.4244055,9.09089844 C14.9233138,9.09089844 14.517076,9.49792969 14.517076,10 L14.517076,18.1818359 L1.81461988,18.1818359 L1.81461988,5.45453125 L9.98050682,5.45453125 C10.4815984,5.45453125 10.8878363,5.0475 10.8878363,4.54542969 C10.8878363,4.04335938 10.4815984,3.63636719 9.98050682,3.63636719 L0.907329435,3.63636719 C0.406237817,3.63636719 0,4.04339844 0,4.54546875 L0,19.0909375 C0,19.5929688 0.406237817,20 0.907329435,20 L15.4244444,20 C15.9255361,20 16.3317739,19.5929688 16.3317739,19.0908984 L16.3317739,10 C16.3317349,9.49792969 15.9254971,9.09089844 15.4244055,9.09089844 Z" id="Shape"></path>
        </svg>
       </a>
    </figcaption>
</figure>

It took a little bit of CSS-fu to get it aligned properly, trying to not rely on the `react-bootstrap` CSS that came with the theme[^2].

### 3. Anchor tag scrolling

I forgot how this worked. I did some searching and found that I could add an `id` to the top node in the component tree and target each component that way:

```jsx
<section id="projects">
```

and in the `Nav`

```jsx
<a href="#projects" className="menu-text">
  <span className="menu-numbers">03.</span> Projects &nbsp;
</a>
```

Now, tapping any of those links in the nav take you to the section immediately instead of needing to scroll down the page[^3].


### 4. Creating a responsive hamburger nav

This was *the hardest part* about this project. I didn't use react-bootstrap for the navigation, which would have made this whole endeavor easier. Bootstrap has some utility classes that make adding a hambuger nav easy.

But since I wanted a custom nav, using Bootstrap wasn't going to work. So I built a hamburger nav from scratch. Only, *it was hard*. 

I wasn't sure how to do it in a React app. I did some searching and come across [a tutorial on CSS-Tricks](https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/) that gave a step by step guide on how to build a hambuger nav[^4]. The issue was I wanted the hamburger nav to show up *only* when the viewport reached `769px`.

I searched some more and found that I could make the hamburger icon its own component, called `Burger.jsx` and a mobile nav called `MobileNav.jsx`. I used styled-components to create both of these, with code from a video that *also* used the same code in that CSS-Tricks article[^5].

#### Mobile nav

For the mobile nav we have a simple unordered list of menu items that link to the sections ids of the sections of the portfolio:

```jsx
const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }

  // More styled component CSS
}
`
const MobileNav = ({ open }) => {
  return (
    <StyledList open={open}>
      <li>
        <a href="#hero" className="menu-text">
          <span className="menu-numbers">01.</span> Intro &nbsp;
        </a>
      </li>
      <li>
        {" "}
        <a href="#about" className="menu-text">
          <span className="menu-numbers">02.</span> About &nbsp;
        </a>
      </li>
      <li>
        {" "}
        <a href="#projects" className="menu-text">
          <span className="menu-numbers">03.</span> Projects &nbsp;
        </a>
      </li>
      <li>
        <a href="#contact" className="menu-text">
          <span className="menu-numbers">04.</span> Contact &nbsp;
        </a>
      </li>
    </StyledList>
  );
};
```
Here we use the `StyledList` to create the `MobileNav` passing in an `open` prop to the styled list.

Then, in `Burger.jsx` we set `open`'s state using the `useState` hook and setting the intial state to `false`:

```jsx
const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
  <>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    <MobileNav open={open}/>
    </StyledBurger>
    </>
  );
};
```

When someone taps or clicks on the burger part of the mobile nav, the new state returns true, and the mobile nav opens. Having `MobileNav` outisde `StyledBurger` tripped me up; I kept seeing two menus and no burger when testing on mobile. I moved the `MobileNav` inside the `StyledBurger` which worked and gave me the hamburger menu I wanted. But it was *always there*.

#### Media queries, breakpoints, and defeat

I tried to use media queries to get the hamburger menu to only show when the viewport reached `769px` >. Nothing I tried worked.

I kept searching and, in a moment of defeat, because I spent a couple days trying to figure this out, I used a little library called [react-socks, a React library to render components only on specific viewports](https://github.com/flexdinesh/react-socks). I was able to easily set the breakpoints I needed with an import and some nesting in `App.jsx`:

```jsx
<BreakpointProvider>
  <Breakpoint large up>       
    <Nav />
  </Breakpoint>
  <Breakpoint medium down>
    <Burger />
  </Breakpoint>
</BreakpointProvider>
```

Couldn't get any easier than that.

## Fixes

The navigation jumps a bit when loaded on mobile. I think it may have to do with the library or how I am implementing the mobile nav. In either case, I need to fix it.

There are some content fixes that need to happen as well so I will work on them this weekend.

## Conclusion

I shipped a thing I said I was going to ship and I am proud of that. I am not done shipping new projects. I am starting another this weekend and when that one is finished I want to build a full stack app with Next.js. 

I am a better dev and know much more now. Real artists ship. Now onto the next.

[^1]: I'm assuming it is a UUID; a weird combination of letters and numbers follow after the filename.
[^2]: Which has its own `Navbar` component but I needed a custom one, and all Bootstrap navs are unappealing. I also just wanted it quick and without the need to override stubborn Bootstrap utility classes with `!important` littered everywhere.
[^3]: I am going to wrap each anchor tag *scroll-reveal*'s `<Fade>` component for a smoother scroll experience.
[^4]: And with Hooks!
[^5]: The video creator didn't mention the article. It was a blatant copy of the CSS-Tricks article. Not sure how I feel about that, but will make sure to credit the author of the article and link to the repo.