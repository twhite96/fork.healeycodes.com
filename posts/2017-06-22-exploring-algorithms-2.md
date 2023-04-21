---
ID: 2021
title: Exploring Algorithms
# exploring-algorithms-2
author: Tiffany White
date: 2017-06-22 21:06:48
layout: post
link: >
  https://tiffanywhite.tech/exploring-algorithms-2/
published: true
tags: uncategorized
categories:
  - "Tiffany's Posts"
---


<h2 id="&quot;what-is-meant-by-an-algorithm&quot;">What Is Meant by an Algorithm?</h2>
Algorithms are simple: they are a set of instructions broken down into simple steps in order to complete a larger task.

For example, if I want to make a recipe for stuffed peppers, I would usually follow steps such as:
<blockquote>
<ol>
 	<li>Preheat oven to 350°F.</li>
 	<li>Cut out stem ends of bell peppers.</li>
 	<li>Discard stems.</li>
 	<li>Scoop out seeds.</li>
 	<li>Bring 8 cups water to a boil in a large pot and blanch the peppers until tender-crisp, about 1 minute.</li>
 	<li>Drain.</li>
 	<li>Cool under cold running water.</li>
 	<li>Set aside…</li>
</ol>
</blockquote>
And so on.

This is a really simple example of an algorithm.
<h2 id="&quot;using-algorithms-in-java&quot;">Using Algorithms in Java</h2>
In Computer Science, there are well established methods given to students to help them master algorithms. One of them is the speeding ticket scenario, where you are making a text-based system to calculate fines for speeding, speeding in a construction zone, DUI, and being under 21 with a DUI, etc.

https://www.youtube.com/embed/XSLj46Lfpfk

Here, we step through getting the data with a few conditionals:
<div class="&quot;language-java">
<pre class="&quot;highlight&quot;"><code><span class="&quot;kd&quot;">public</span> <span class="&quot;kd&quot;">static</span> <span class="&quot;kt&quot;">void</span> <span class="&quot;nf&quot;">main</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">String</span> <span class="&quot;n&quot;">args</span><span class="&quot;o&quot;">[])</span>
	<span class="&quot;o&quot;">{</span>
		<span class="&quot;c1&quot;">// Create a scanner to read from keyboard</span>
		<span class="&quot;n&quot;">Scanner</span> <span class="&quot;n&quot;">kbd</span> <span class="&quot;o&quot;">=</span> <span class="&quot;k&quot;">new</span> <span class="&quot;n&quot;">Scanner</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">in</span><span class="&quot;o&quot;">);</span>

       <span class="&quot;c1&quot;">// declare and assign values to variables that we can use later</span>
		<span class="&quot;n&quot;">String</span> <span class="&quot;n&quot;">firstName</span><span class="&quot;o&quot;">=</span><span class="&quot;s&quot;">"N/A"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">lastName</span><span class="&quot;o&quot;">=</span><span class="&quot;s&quot;">"N/A"</span><span class="&quot;o&quot;">;</span>
		<span class="&quot;kt&quot;">int</span> <span class="&quot;n&quot;">age</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">,</span> <span class="&quot;n&quot;">speedLimit</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">,</span> <span class="&quot;n&quot;">actualSpeed</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">,</span> <span class="&quot;n&quot;">mphOverLimit</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">;</span>
		<span class="&quot;kt&quot;">int</span> <span class="&quot;n&quot;">baseFine</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">,</span> <span class="&quot;n&quot;">underAgeFine</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">,</span> <span class="&quot;n&quot;">zoneFine</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">,</span> <span class="&quot;n&quot;">totalFine</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">;</span>


   <span class="&quot;c1&quot;">//################ Input ######################</span>
   <span class="&quot;c1&quot;">// Here, the person calculating the fine would enter the data which is</span>
   <span class="&quot;c1&quot;">// read in by the scanner object</span>
   <span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">println</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"Enter your first name and last name. &gt; "</span><span class="&quot;o&quot;">);</span>
   <span class="&quot;n&quot;">firstName</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">kbd</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">next</span><span class="&quot;o&quot;">();</span>
   <span class="&quot;n&quot;">lastName</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">kbd</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">next</span><span class="&quot;o&quot;">();</span>
   <span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">println</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"Enter your age. &gt; "</span><span class="&quot;o&quot;">);</span>
   <span class="&quot;n&quot;">age</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">kbd</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">nextInt</span><span class="&quot;o&quot;">();</span>
   <span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">println</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"Enter the speed limit. &gt; "</span><span class="&quot;o&quot;">);</span>
   <span class="&quot;n&quot;">speedLimit</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">kbd</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">nextInt</span><span class="&quot;o&quot;">();</span>
   <span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">println</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"Enter your actual speed. &gt; "</span><span class="&quot;o&quot;">);</span>
   <span class="&quot;n&quot;">actualSpeed</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">kbd</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">nextInt</span><span class="&quot;o&quot;">();</span>
   <span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">println</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"Did the violation occur in a construction zone? Enter yes or no. &gt; "</span><span class="&quot;o&quot;">);</span>
   <span class="&quot;n&quot;">String</span> <span class="&quot;n&quot;">inConstructionZone</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">kbd</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">next</span><span class="&quot;o&quot;">();</span>


   <span class="&quot;c1&quot;">//########### Speed Limit Fines #########</span>
   <span class="&quot;c1&quot;">// Algorithm, step by step, giving the computer instructions on how to calculate</span>
   <span class="&quot;c1&quot;">// the fine using conditionals</span>
	 <span class="&quot;k&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">actualSpeed</span> <span class="&quot;o&quot;">&gt;</span> <span class="&quot;n&quot;">speedLimit</span><span class="&quot;o&quot;">)</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">actualSpeed</span> <span class="&quot;o&quot;">-</span> <span class="&quot;n&quot;">speedLimit</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>
   <span class="&quot;k&quot;">else</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>
   <span class="&quot;k&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">&lt;</span> <span class="&quot;mi&quot;">5</span><span class="&quot;o&quot;">)</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">baseFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>
	 <span class="&quot;k&quot;">else</span> <span class="&quot;nf&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">&lt;=</span> <span class="&quot;mi&quot;">20</span><span class="&quot;o&quot;">)</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">baseFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">/</span> <span class="&quot;mi&quot;">5</span> <span class="&quot;o&quot;">*</span> <span class="&quot;mi&quot;">30</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>
	 <span class="&quot;k&quot;">else</span> <span class="&quot;nf&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">&gt;</span> <span class="&quot;mi&quot;">20</span><span class="&quot;o&quot;">)</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">baseFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">/</span> <span class="&quot;mi&quot;">5</span> <span class="&quot;o&quot;">*</span> <span class="&quot;mi&quot;">50</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>

	 <span class="&quot;c1&quot;">//########### Zone Fines ############</span>

   <span class="&quot;k&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">&lt;</span> <span class="&quot;mi&quot;">5</span><span class="&quot;o&quot;">)</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">zoneFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>
   <span class="&quot;k&quot;">else</span> <span class="&quot;nf&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"yes"</span><span class="&quot;o&quot;">)</span> <span class="&quot;o&quot;">||</span> <span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"y"</span><span class="&quot;o&quot;">)</span> <span class="&quot;o&quot;">||</span> <span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"Yes"</span><span class="&quot;o&quot;">)</span> <span class="&quot;o&quot;">||</span> <span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"YES"</span><span class="&quot;o&quot;">))</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">zoneFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">baseFine</span> <span class="&quot;o&quot;">*</span> <span class="&quot;n&quot;">baseFine</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>
	 <span class="&quot;k&quot;">else</span> <span class="&quot;nf&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"no"</span><span class="&quot;o&quot;">)</span> <span class="&quot;o&quot;">||</span> <span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"n"</span><span class="&quot;o&quot;">)</span> <span class="&quot;o&quot;">||</span> <span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"No"</span><span class="&quot;o&quot;">)</span> <span class="&quot;o&quot;">||</span> <span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"NO"</span><span class="&quot;o&quot;">))</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">zoneFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>

	 <span class="&quot;c1&quot;">//############## Age Fines #############</span>

	 <span class="&quot;k&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">age</span> <span class="&quot;o&quot;">&lt;</span> <span class="&quot;mi&quot;">21</span> <span class="&quot;o&quot;">&amp;&amp;</span> <span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">&gt;</span> <span class="&quot;mi&quot;">20</span><span class="&quot;o&quot;">)</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">underAgeFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">300</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>
	 <span class="&quot;k&quot;">else</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">underAgeFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>

   <span class="&quot;c1&quot;">//############# Total Charges ##############</span>

	 <span class="&quot;n&quot;">totalFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">baseFine</span> <span class="&quot;o&quot;">+</span> <span class="&quot;n&quot;">zoneFine</span> <span class="&quot;o&quot;">+</span> <span class="&quot;n&quot;">underAgeFine</span><span class="&quot;o&quot;">;</span>
	   <span class="&quot;c1&quot;">// Telling the JVM to print out each formatted scanner input on a new line</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">println</span><span class="&quot;o&quot;">();</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"name: %s, %sn"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">lastName</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">firstName</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"age: %d yrs.n"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">age</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"actual speed: %d mph.n"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">actualSpeed</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"speed limit: %d mph.n"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">speedLimit</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"mph over limit: %d mph.n"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"base fine: $%dn"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">baseFine</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"zone fine: $%dn"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">zoneFine</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"under age fine: $%dn"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">underAgeFine</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"total fine: $%dn"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">totalFine</span> <span class="&quot;o&quot;">);</span>
	<span class="&quot;o&quot;">}</span> <span class="&quot;c1&quot;">// END MAIN</span>
<span class="&quot;o&quot;">}</span> <span class="&quot;c1&quot;">// END CLASS</span>
</code></pre>
</div>
<h2 id="&quot;some-more-complex-algorithms&quot;">Some More Complex Algorithms</h2>
There are more complex, established algorithms that use data structures like arrays, dictionaries, and linked lists. Most algorithms are judged on their complexity and effieciency, where efficiency does not necessarily mean speed.

For example, the <a href="&quot;https://en.wikipedia.org/wiki/Bubble_sort&quot;">Bubble Sort</a> algorithm sorts the values in an array from smallest to largest by assessing the first index and comparing it with the next. If the first value is larger than the second, the bubble sort algorithm swaps the two values.

Here is a version of the bubble sort algorithm in pseudocode:
<div class="&quot;language-bash">
<pre class="&quot;highlight&quot;"><code>procedure bubbleSort<span class="&quot;o&quot;">(</span> list : array of items <span class="&quot;o&quot;">)</span>

   loop <span class="&quot;o&quot;">=</span> list.count;

   <span class="&quot;k&quot;">for </span>i <span class="&quot;o&quot;">=</span> 0 to loop-1 <span class="&quot;k&quot;">do</span>:
      swapped <span class="&quot;o&quot;">=</span> <span class="&quot;nb&quot;">false

      </span><span class="&quot;k&quot;">for </span>j <span class="&quot;o&quot;">=</span> 0 to loop-1 <span class="&quot;k&quot;">do</span>:

         // compare the adjacent elements
         <span class="&quot;k&quot;">if </span>list[j] &gt; list[j+1] <span class="&quot;k&quot;">then</span>
            // swap them
            swap<span class="&quot;o&quot;">(</span> list[j], list[j+1] <span class="&quot;o&quot;">)</span>
            swapped <span class="&quot;o&quot;">=</span> <span class="&quot;nb&quot;">true
         </span>end <span class="&quot;k&quot;">if

      </span>end <span class="&quot;k&quot;">for</span>

      // <span class="&quot;k&quot;">if </span>no number was swapped that means
      // array is sorted now, <span class="&quot;nb&quot;">break </span>the loop

      <span class="&quot;k&quot;">if</span><span class="&quot;o&quot;">(</span>not swapped<span class="&quot;o&quot;">)</span> <span class="&quot;k&quot;">then
         </span><span class="&quot;nb&quot;">break
      </span>end <span class="&quot;k&quot;">if

   </span>end <span class="&quot;k&quot;">for

</span>end procedure <span class="&quot;k&quot;">return </span>list
</code></pre>
</div>
This a simple algorithm yet if you’re new to algorithms and programming in general, it may seem a bit daunting.

To see the implementation in java:




<h2 id="&quot;what-is-meant-by-an-algorithm&quot;">What Is Meant by an Algorithm?</h2>
Algorithms are simple: they are a set of instructions broken down into simple steps in order to complete a larger task.

For example, if I want to make a recipe for stuffed peppers, I would usually follow steps such as:
<blockquote>
<ol>
 	<li>Preheat oven to 350°F.</li>
 	<li>Cut out stem ends of bell peppers.</li>
 	<li>Discard stems.</li>
 	<li>Scoop out seeds.</li>
 	<li>Bring 8 cups water to a boil in a large pot and blanch the peppers until tender-crisp, about 1 minute.</li>
 	<li>Drain.</li>
 	<li>Cool under cold running water.</li>
 	<li>Set aside…</li>
</ol>
</blockquote>
And so on.

This is a really simple example of an algorithm.
<h2 id="&quot;using-algorithms-in-java&quot;">Using Algorithms in Java</h2>
In Computer Science, there are well established methods given to students to help them master algorithms. One of them is the speeding ticket scenario, where you are making a text-based system to calculate fines for speeding, speeding in a construction zone, DUI, and being under 21 with a DUI, etc.

https://www.youtube.com/embed/XSLj46Lfpfk

Here, we step through getting the data with a few conditionals:
<div class="&quot;language-java">
<pre class="&quot;highlight&quot;"><code><span class="&quot;kd&quot;">public</span> <span class="&quot;kd&quot;">static</span> <span class="&quot;kt&quot;">void</span> <span class="&quot;nf&quot;">main</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">String</span> <span class="&quot;n&quot;">args</span><span class="&quot;o&quot;">[])</span>
	<span class="&quot;o&quot;">{</span>
		<span class="&quot;c1&quot;">// Create a scanner to read from keyboard</span>
		<span class="&quot;n&quot;">Scanner</span> <span class="&quot;n&quot;">kbd</span> <span class="&quot;o&quot;">=</span> <span class="&quot;k&quot;">new</span> <span class="&quot;n&quot;">Scanner</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">in</span><span class="&quot;o&quot;">);</span>

       <span class="&quot;c1&quot;">// declare and assign values to variables that we can use later</span>
		<span class="&quot;n&quot;">String</span> <span class="&quot;n&quot;">firstName</span><span class="&quot;o&quot;">=</span><span class="&quot;s&quot;">"N/A"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">lastName</span><span class="&quot;o&quot;">=</span><span class="&quot;s&quot;">"N/A"</span><span class="&quot;o&quot;">;</span>
		<span class="&quot;kt&quot;">int</span> <span class="&quot;n&quot;">age</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">,</span> <span class="&quot;n&quot;">speedLimit</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">,</span> <span class="&quot;n&quot;">actualSpeed</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">,</span> <span class="&quot;n&quot;">mphOverLimit</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">;</span>
		<span class="&quot;kt&quot;">int</span> <span class="&quot;n&quot;">baseFine</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">,</span> <span class="&quot;n&quot;">underAgeFine</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">,</span> <span class="&quot;n&quot;">zoneFine</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">,</span> <span class="&quot;n&quot;">totalFine</span><span class="&quot;o&quot;">=</span><span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">;</span>


   <span class="&quot;c1&quot;">//################ Input ######################</span>
   <span class="&quot;c1&quot;">// Here, the person calculating the fine would enter the data which is</span>
   <span class="&quot;c1&quot;">// read in by the scanner object</span>
   <span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">println</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"Enter your first name and last name. &gt; "</span><span class="&quot;o&quot;">);</span>
   <span class="&quot;n&quot;">firstName</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">kbd</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">next</span><span class="&quot;o&quot;">();</span>
   <span class="&quot;n&quot;">lastName</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">kbd</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">next</span><span class="&quot;o&quot;">();</span>
   <span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">println</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"Enter your age. &gt; "</span><span class="&quot;o&quot;">);</span>
   <span class="&quot;n&quot;">age</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">kbd</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">nextInt</span><span class="&quot;o&quot;">();</span>
   <span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">println</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"Enter the speed limit. &gt; "</span><span class="&quot;o&quot;">);</span>
   <span class="&quot;n&quot;">speedLimit</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">kbd</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">nextInt</span><span class="&quot;o&quot;">();</span>
   <span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">println</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"Enter your actual speed. &gt; "</span><span class="&quot;o&quot;">);</span>
   <span class="&quot;n&quot;">actualSpeed</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">kbd</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">nextInt</span><span class="&quot;o&quot;">();</span>
   <span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">println</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"Did the violation occur in a construction zone? Enter yes or no. &gt; "</span><span class="&quot;o&quot;">);</span>
   <span class="&quot;n&quot;">String</span> <span class="&quot;n&quot;">inConstructionZone</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">kbd</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">next</span><span class="&quot;o&quot;">();</span>


   <span class="&quot;c1&quot;">//########### Speed Limit Fines #########</span>
   <span class="&quot;c1&quot;">// Algorithm, step by step, giving the computer instructions on how to calculate</span>
   <span class="&quot;c1&quot;">// the fine using conditionals</span>
	 <span class="&quot;k&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">actualSpeed</span> <span class="&quot;o&quot;">&gt;</span> <span class="&quot;n&quot;">speedLimit</span><span class="&quot;o&quot;">)</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">actualSpeed</span> <span class="&quot;o&quot;">-</span> <span class="&quot;n&quot;">speedLimit</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>
   <span class="&quot;k&quot;">else</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>
   <span class="&quot;k&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">&lt;</span> <span class="&quot;mi&quot;">5</span><span class="&quot;o&quot;">)</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">baseFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>
	 <span class="&quot;k&quot;">else</span> <span class="&quot;nf&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">&lt;=</span> <span class="&quot;mi&quot;">20</span><span class="&quot;o&quot;">)</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">baseFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">/</span> <span class="&quot;mi&quot;">5</span> <span class="&quot;o&quot;">*</span> <span class="&quot;mi&quot;">30</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>
	 <span class="&quot;k&quot;">else</span> <span class="&quot;nf&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">&gt;</span> <span class="&quot;mi&quot;">20</span><span class="&quot;o&quot;">)</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">baseFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">/</span> <span class="&quot;mi&quot;">5</span> <span class="&quot;o&quot;">*</span> <span class="&quot;mi&quot;">50</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>

	 <span class="&quot;c1&quot;">//########### Zone Fines ############</span>

   <span class="&quot;k&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">&lt;</span> <span class="&quot;mi&quot;">5</span><span class="&quot;o&quot;">)</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">zoneFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>
   <span class="&quot;k&quot;">else</span> <span class="&quot;nf&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"yes"</span><span class="&quot;o&quot;">)</span> <span class="&quot;o&quot;">||</span> <span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"y"</span><span class="&quot;o&quot;">)</span> <span class="&quot;o&quot;">||</span> <span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"Yes"</span><span class="&quot;o&quot;">)</span> <span class="&quot;o&quot;">||</span> <span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"YES"</span><span class="&quot;o&quot;">))</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">zoneFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">baseFine</span> <span class="&quot;o&quot;">*</span> <span class="&quot;n&quot;">baseFine</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>
	 <span class="&quot;k&quot;">else</span> <span class="&quot;nf&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"no"</span><span class="&quot;o&quot;">)</span> <span class="&quot;o&quot;">||</span> <span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"n"</span><span class="&quot;o&quot;">)</span> <span class="&quot;o&quot;">||</span> <span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"No"</span><span class="&quot;o&quot;">)</span> <span class="&quot;o&quot;">||</span> <span class="&quot;n&quot;">inConstructionZone</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">equals</span><span class="&quot;o&quot;">(</span><span class="&quot;s&quot;">"NO"</span><span class="&quot;o&quot;">))</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">zoneFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>

	 <span class="&quot;c1&quot;">//############## Age Fines #############</span>

	 <span class="&quot;k&quot;">if</span> <span class="&quot;o&quot;">(</span><span class="&quot;n&quot;">age</span> <span class="&quot;o&quot;">&lt;</span> <span class="&quot;mi&quot;">21</span> <span class="&quot;o&quot;">&amp;&amp;</span> <span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">&gt;</span> <span class="&quot;mi&quot;">20</span><span class="&quot;o&quot;">)</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">underAgeFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">300</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>
	 <span class="&quot;k&quot;">else</span>
	 <span class="&quot;o&quot;">{</span>
		 <span class="&quot;n&quot;">underAgeFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;mi&quot;">0</span><span class="&quot;o&quot;">;</span>
	 <span class="&quot;o&quot;">}</span>

   <span class="&quot;c1&quot;">//############# Total Charges ##############</span>

	 <span class="&quot;n&quot;">totalFine</span> <span class="&quot;o&quot;">=</span> <span class="&quot;n&quot;">baseFine</span> <span class="&quot;o&quot;">+</span> <span class="&quot;n&quot;">zoneFine</span> <span class="&quot;o&quot;">+</span> <span class="&quot;n&quot;">underAgeFine</span><span class="&quot;o&quot;">;</span>
	   <span class="&quot;c1&quot;">// Telling the JVM to print out each formatted scanner input on a new line</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">println</span><span class="&quot;o&quot;">();</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"name: %s, %sn"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">lastName</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">firstName</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"age: %d yrs.n"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">age</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"actual speed: %d mph.n"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">actualSpeed</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"speed limit: %d mph.n"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">speedLimit</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"mph over limit: %d mph.n"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">mphOverLimit</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"base fine: $%dn"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">baseFine</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"zone fine: $%dn"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">zoneFine</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"under age fine: $%dn"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">underAgeFine</span> <span class="&quot;o&quot;">);</span>
		<span class="&quot;n&quot;">System</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">out</span><span class="&quot;o&quot;">.</span><span class="&quot;na&quot;">format</span><span class="&quot;o&quot;">(</span> <span class="&quot;s&quot;">"total fine: $%dn"</span><span class="&quot;o&quot;">,</span><span class="&quot;n&quot;">totalFine</span> <span class="&quot;o&quot;">);</span>
	<span class="&quot;o&quot;">}</span> <span class="&quot;c1&quot;">// END MAIN</span>
<span class="&quot;o&quot;">}</span> <span class="&quot;c1&quot;">// END CLASS</span>
</code></pre>
</div>
<h2 id="&quot;some-more-complex-algorithms&quot;">Some More Complex Algorithms</h2>
There are more complex, established algorithms that use data structures like arrays, dictionaries, and linked lists. Most algorithms are judged on their complexity and effieciency, where efficiency does not necessarily mean speed.

For example, the <a href="&quot;https://en.wikipedia.org/wiki/Bubble_sort&quot;">Bubble Sort</a> algorithm sorts the values in an array from smallest to largest by assessing the first index and comparing it with the next. If the first value is larger than the second, the bubble sort algorithm swaps the two values.

Here is a version of the bubble sort algorithm in pseudocode:
<div class="&quot;language-bash">
<pre class="&quot;highlight&quot;"><code>procedure bubbleSort<span class="&quot;o&quot;">(</span> list : array of items <span class="&quot;o&quot;">)</span>

   loop <span class="&quot;o&quot;">=</span> list.count;

   <span class="&quot;k&quot;">for </span>i <span class="&quot;o&quot;">=</span> 0 to loop-1 <span class="&quot;k&quot;">do</span>:
      swapped <span class="&quot;o&quot;">=</span> <span class="&quot;nb&quot;">false

      </span><span class="&quot;k&quot;">for </span>j <span class="&quot;o&quot;">=</span> 0 to loop-1 <span class="&quot;k&quot;">do</span>:

         // compare the adjacent elements
         <span class="&quot;k&quot;">if </span>list[j] &gt; list[j+1] <span class="&quot;k&quot;">then</span>
            // swap them
            swap<span class="&quot;o&quot;">(</span> list[j], list[j+1] <span class="&quot;o&quot;">)</span>
            swapped <span class="&quot;o&quot;">=</span> <span class="&quot;nb&quot;">true
         </span>end <span class="&quot;k&quot;">if

      </span>end <span class="&quot;k&quot;">for</span>

      // <span class="&quot;k&quot;">if </span>no number was swapped that means
      // array is sorted now, <span class="&quot;nb&quot;">break </span>the loop

      <span class="&quot;k&quot;">if</span><span class="&quot;o&quot;">(</span>not swapped<span class="&quot;o&quot;">)</span> <span class="&quot;k&quot;">then
         </span><span class="&quot;nb&quot;">break
      </span>end <span class="&quot;k&quot;">if

   </span>end <span class="&quot;k&quot;">for

</span>end procedure <span class="&quot;k&quot;">return </span>list
</code></pre>
</div>
This a simple algorithm yet if you’re new to algorithms and programming in general, it may seem a bit daunting.

To see the implementation in java:





https://www.youtube.com/embed/RqfWvIsYmsc