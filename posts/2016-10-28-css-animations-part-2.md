---
ID: 2006
title: CSS Animations, Part 2
# css-animations-part-2
author: Tiffany White
date: 2016-10-28 00:14:30
layout: post
link: >
  https://tiffanywhite.tech/css-animations-part-2/
published: true
tags: uncategorized
categories:
  - css
  - css animations
---
<h2 id="transition-timing-functions-delays-and-transforms">Transition Timing Functions, Delays, and Transforms</h2>

<p>You can do some really cool things with CSS that I wasn’t sure I would like.</p>

<p>I’m a big time JavaScript lover <sup id="fnref:1"><a href="#fn:1" class="footnote">1</a></sup> and so I like to do things programmatically if I can. The perf benefits between <a href="https://davidwalsh.name/css-js-animation">CSS and JavaScript are negligible</a> <sup id="fnref:2"><a href="#fn:2" class="footnote">2</a></sup>.</p>

<p>So in Part 2 of this series, I want to talk about CSS timing functions, delays, and transforms.</p>

<h3 id="timing-functions">Timing Functions</h3>

<p>Some of the most basic timing functions, which allow you to determine when a transition starts or stops, are <code class="highlighter-rouge">ease</code>, <code class="highlighter-rouge">ease-out</code>, and, <code class="highlighter-rouge">ease-in-out</code>. These are pretty self-explanatory. But how could you use them?</p>

<p>You could use them to ease on hover an image overlay:</p>

<div class="language-css highlighter-rouge"><pre class="highlight"><code><span class="nc">.img-overlay</span> <span class="p">{</span>
  <span class="err">//</span> <span class="err">Set</span> <span class="err">background</span> <span class="err">color</span> <span class="err">of</span> <span class="err">the</span> <span class="err">overlay</span>
  <span class="nl">background-color</span><span class="p">:</span> <span class="m">#000000</span>
  <span class="p">//</span> <span class="n">Define</span> <span class="n">what</span> <span class="n">property</span> <span class="n">we</span> <span class="n">are</span> <span class="n">transitioning</span>
  <span class="n">transition-property</span><span class="p">:</span> <span class="n">opacity</span><span class="p">;</span>
<span class="p">}</span>

<span class="nc">.img-overlay</span><span class="nd">:hover</span> <span class="p">{</span>
  <span class="err">//</span> <span class="err">Set</span> <span class="err">the</span> <span class="err">opacity</span>
  <span class="nl">opacity</span><span class="p">:</span> <span class="m">.06</span><span class="p">;</span>
  <span class="err">//</span> <span class="err">Use</span> <span class="err">the</span> <span class="err">transition-delay</span> <span class="err">transition</span>
  <span class="err">//</span> <span class="err">to</span> <span class="err">delay</span> <span class="err">when</span> <span class="err">a</span> <span class="err">transition</span> <span class="err">starts</span>
  <span class="nl">transition-delay</span><span class="p">:</span> <span class="m">.4s</span><span class="p">;</span>
  <span class="err">//</span> <span class="err">Add</span> <span class="err">a</span> <span class="err">transition-timing-function</span>
  <span class="err">//</span> <span class="err">to</span> <span class="err">ease</span> <span class="err">the</span> <span class="err">transition</span> <span class="err">out</span> <span class="err">on</span> <span class="err">hover</span>
  <span class="nl">transition-timing-function</span><span class="p">:</span> <span class="n">ease-out</span><span class="p">;</span>
<span class="p">}</span>
</code></pre>
</div>

<h3 id="css-transforms">CSS Transforms</h3>

<p>These are really cool. I think that they are great in moderation. Some of the transforms can make the user experience fun if not overdone. Let’s take a look at some CSS transforms.</p>

<p>CSS transforms move, rotate, skew, and scale elements on the page relative to their respective containers. The center position is the default position, which starts at 0. For instance, the default is <code class="highlighter-rouge">transform-origin: 0;</code>.</p>

<p>This means that when you skew, rotate, scale and element, it will do so relative the the center of the image, button, etc in its container.</p>

<p>You can also use the CSS shorthand property <code class="highlighter-rouge">transform</code> to chain together different transforms. It also defaults to the center position on any property you specify.</p>

<p>One of my favorite CSS transforms is the <code class="highlighter-rouge">scale()</code> function. It will make the image, button, etc larger relative to its own container. For instance:</p>

<div class="language-css highlighter-rouge"><pre class="highlight"><code><span class="nc">.element</span> <span class="p">{</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="nl">height</span><span class="p">:</span> <span class="m">20px</span><span class="p">;</span>
  <span class="err">//</span> <span class="err">Use</span> <span class="err">the</span> <span class="err">transform</span> <span class="err">scale</span> <span class="err">function</span>
  <span class="err">//</span> <span class="err">to</span> <span class="err">scale</span> <span class="err">the</span> <span class="err">element</span> <span class="err">outwards</span>
  <span class="err">//</span> <span class="err">35px</span> <span class="err">from</span> <span class="err">the</span> <span class="err">center</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="n">scale</span><span class="p">(</span><span class="m">35</span><span class="p">);</span>
<span class="p">}</span>
</code></pre>
</div>
<p>This will scale the image quite large on the page.</p>

<p>What if we want it to only scale when we hover?</p>

<p>Well, we could add <code class="highlighter-rouge">transform</code> to a <code class="highlighter-rouge">transition</code> like this:</p>

<div class="language-css highlighter-rouge"><pre class="highlight"><code><span class="nc">.img-fluid</span> <span class="p">{</span>
  <span class="err">//</span> <span class="err">Select</span> <span class="err">the</span> <span class="err">img-fluid</span> <span class="err">class</span> <span class="err">and</span> <span class="err">transition</span>
  <span class="err">//</span> <span class="err">The</span> <span class="err">transform</span> <span class="err">property</span> <span class="err">for</span> <span class="err">500</span> <span class="err">milliseconds</span>
  <span class="nl">transition</span><span class="p">:</span> <span class="n">transform</span> <span class="m">.5s</span><span class="p">;</span>
<span class="p">}</span>

<span class="nc">.img-fluid</span><span class="nd">:hover</span> <span class="p">{</span>
  <span class="err">//</span> <span class="err">Transform</span> <span class="err">the</span> <span class="err">img-fluid</span> <span class="err">class</span> <span class="err">with</span> <span class="err">the</span> <span class="err">scale</span> <span class="err">function</span>
  <span class="err">//</span> <span class="err">This</span> <span class="err">will</span> <span class="err">scale</span> <span class="err">the</span> <span class="err">image</span> <span class="err">on</span> <span class="err">hover</span> <span class="err">1.1px</span> <span class="err">from</span> <span class="err">center</span>
  <span class="nl">transform</span><span class="p">:</span> <span class="n">scale</span><span class="p">(</span><span class="m">1.1</span><span class="p">);</span>
<span class="p">}</span>
</code></pre>
</div>
<p>How cool is that?</p>

<h3 id="on-to-part-3">On to Part 3…</h3>

<p>I will be writing about CSS shorthand properties for <code class="highlighter-rouge">transition</code> and <code class="highlighter-rouge">transform</code>.</p>

<div class="footnotes">
  <ol>
    <li id="fn:1">
      <p>I know it’s popular to crap on JavaScript but <em>I</em> really like it. <a href="#fnref:1" class="reversefootnote">↩</a></p>
    </li>
    <li id="fn:2">
      <p>As long as you’re not using a heavy library. I’m looking at you, jQuery. <a href="#fnref:2" class="reversefootnote">↩</a></p>
    </li>
  </ol>
</div>