---
title: "Building a Static Site Generator with Ruby"
layout: post
tags: [portfolio, ruby, rubylang, static site generator]
image: https://res.cloudinary.com/twhiteblog/image/upload/v1608253261/generator.jpg
description: Adventures in building a static site generator in Ruby.
excerpt: Adventures in building a static site generator in Ruby.
---

<!--more-->


{% notice tip %}
📸 &nbsp; Photo by [Jayphen Simpson](https://unsplash.com/@jayphen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/generator?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
{% endnotice %}

## Motivation for this app

I wanted to show that I could build something, even if it was small, on my own, with little guidance.
[Ben Halpern started a thread](https://dev.to/ben/one-thing-led-to-another-and-i-built-my-own-static-site-generator-today-5enj) about his generator on DEV and I took his scaffold and ran with it.

There is a bit of a difference between our scripts however. Instead of just _reading_ the files and writing to them, I _create_ the files, read them, and _then_ write to them.

## Working with Ruby for the first time in 6 years...

...and I didn't really _do_ much with the Ruby I was learning back then as I went straight from Ruby to Python[^1].

So I was basically starting from scratch. This meant reading a lot of documentation and experimenting with different things.

## Ruby, the easy parts

The scaffold was basically set up for me.

I only remembered a few Ruby methods and ways of working in it, so having a little there for me to work with was extremely helpful.

## Then the not so easy parts

Working in Ruby, when coming from JavaScript, can be extremely difficult. No semicolons to end an expression, indentation matters, the way you define a method[^2], etc.

The initial scaffold I worked with looked a bit like this:

```ruby
prod_build = ARGV[0] == "for_prod"

# Read files
meta_html =       File.open("workspace/meta.partial.html").read
style_css =       File.open("workspace/style.partial.css").read
body_html =       File.open("workspace/body.partial.html").read
json_data =       File.open("workspace/data.json").read
scaffold_js =     File.open("workspace/scaffold.partial.js").read
dynamic_js =      File.open("workspace/dynamic.partial.js").read
analytics_html =  File.open("workspace/analytics.partial.html").read
base_html =       File.open("workspace/base.html").read
test_html = ""

unless prod_build
  test_html = File.open("workspace/test.dev.html").read
end

# Create built page
build_string = base_html
  .gsub("{{ meta }}", meta_html)
  .gsub("{{ style }}", style_css)
  .gsub("{{ html }}", body_html)
  .gsub("{{ data }}", json_data)
  .gsub("{{ scaffold_script }}", scaffold_js)
  .gsub("{{ dynamic_script }}", dynamic_js)
  .gsub("{{ analytics }}", analytics_html)
  .gsub("{{ test }}", test_html)

# Write to target page

if prod_build
  puts "Production build.... index.html"
  File.write("index.html", build_string)
else
  puts "Development build.... wip-index.html"
  File.write("wip-index.html", build_string)
end
```

I was getting stuck on the `build_string` method: what is it doing? What does `.gsub()` do?

## File I/O
I went through *a lot* of iterations of this script.

At one point I had a few methods where I'd capture input from the cli like so:

```ruby
prod_build = ARGV[0] = "production_build"

# Capture input

print "Enter page name: "
page = gets

print "Enter script name: "
script = gets

print "Enter style name: "
style = gets

# Read files

def page_partials(page)
  pages = "site/#{page}.html"
  page = File.open(pages).read
end

def script_partials(script)
  scripts = "site/#{script}.js"
  script = File.open(scripts).read
end

def style_partial(style)
  styles = "site/#{style}.css"
  style = File.open(styles).read
end

puts page_partials(page)
puts script_partials(script)
puts style_partials(style)

head_html   = File.open("site/_head.html").read
seo_html    = File.open("site/_seo.html").read
main_css    = File.open("site/_main.css").read
# body_html   = File.open("site/_body.html").read
# scaffold_js = File.open("site/_scaffold.js").read
# scripts_js  = File.open("site/_scripts.js").read
# base_html   = File.open("site/base.html").read
# posts_html   = File.open("site/posts.html").read
dev_html    = ""


unless prod_build
  dev_html = File.open("site/dev_html").read
end

# Create page

build_string = base_html
  .gsub("{{ head }}", "#{page_partials}")
  .gsub("{{ seo }}", seo_html)
  .gsub("{{ main }}", main_css)
  .gsub("{{ dev }}", dev_html)

  # Write to index page

if prod_build
  puts "Building index.html..."
  File.write("index.html", build_string)
else
  puts "Building dev index... dev.index.html"
  File.write("dev.index.html", build_string)
end
```

This didn't build *at all*; I could eventually get the input, but I would get `NameError`s in the console, for a file not existing.

I didn't know why. So I did some dev sleuthing!

{% notice info %}
🕵🏽‍♀️ &nbsp; StackOverflow, RubyDoc, blogs, and some silence really helped me think through a lot of this, as well as a *very long* break.
{% endnotice %}

I realized that the `build_string` method was basically using `.gsub()` to write some Handlebars syntax to the base_html that had already been created in Ben's version of this script. I didn't have files created already, which was one reason why the console was throwing so many errors.

## Okay so how do we stop the red lines of death?

I made a note in a comment in my `build.rb` script so that when I worked on it later, I had an idea of what I had discovered earlier.

{% notice warning %}
⚠️ I know some devs state that your code should be self-documenting. That's certainly a take, but not one I buy. I *needed* to remember this, as I had been bitten by not writing comments in my code before, and when coming back to pick the project back up, I was completely lost, even though I had a decent naming convention. **Comment your code**!
{% endnotice %}

The script looked something like this[^3]:


```ruby
prod_build = ARGV[0] = "production_build"

# Capture input
# require 'fileutils'
print "Enter page name: "
page = gets


# Read files

def page_partial(page)
  # Had the right idea here, 
  # but the string interpolation wasn't really necessary
  pages = "#{page}.html"
  page = File.open(pages, "w").read
end

def script_partial(script)
  scripts = "#{script}.js"
  script = File.open(scripts, "w").read
end

def style_partial(style)
  styles = "#{style}.css"
  style = File.open(styles, "w").read
end


style_partial.puts ""
# puts page_partial(page)
# puts script_partial(script)
# puts style_partial(style)

# FileUtils.mv %w(), 'site/'
head_html   = File.open("site/_head.html").read
seo_html    = File.open("site/_seo.html").read
main_css    = File.open("site/_main.css").read
body_html   = File.open("site/_body.html").read
scaffold_js = File.open("site/_scaffold.js").read
scripts_js  = File.open("site/_scripts.js").read
base_html   = File.open("site/base.html").read
posts_html   = File.open("site/posts.html").read
dev_html    = ""


unless prod_build
  dev_html = File.open("site/dev_html").read
end

# Create page partial
# i.e. creating the build.html file and using .gsub to add
# all the handlebars template html to the page
# In this case head, seo, main, and dev, etc
build_string = base_html
  .gsub("{{ head }}", "#{page_partial}")
  .gsub("{{ seo }}", seo_html)
  .gsub("{{ main }}", main_css)
  .gsub("{{ dev }}", dev_html)
```

Better, but there were still some issues.

My understanding of File I/O in Ruby was rudimentary. However, it kind of made sense though I wasn't sure what `File.open()`, etc did.

I rewrote the script, but was still getting this error:

```sh
undefined local variable or method head_html. Did you mean dev_html?
```

Apparently I wasn't initializing the variables. I did this by using the `.puts` method when creating new files with the `open()` method.

This didn't work; I was still getting the error and after some digging, found my answer on the Holy Grail, *[StackOverflow](https://stackoverflow.com/questions/30269493/ruby-error-undefined-local-variable-or-method)*.

My issue was the *variable scope*. Not much of an OOP gal, but I needed to make the variables in my methods either constants, global, or instance variables. I used instance variables, which you can define with the `@` symbol like so:

```ruby
prod_build = ARGV[0] = "production_build"


head_file = "head.html"
@write_head = File.open(head_file, "w")
@write_head.puts "!DOCTYPE"
```

Now, my script ran and generated the files I wanted and added some basic markup to each file.

## Whew
That was quite the marathon. I am not doing well; physically I am better than I was, but emotionally, well, things are not good. Finishing this project was a boost to my mood and has given me a glimmer of hope, no matter how small, at least for now.

[^1]: I learned a little Ruby at a meetup in Pittsburgh that not only taught me a few Ruby tricks, but also taught me GitHub exists. Python didn't last long for me either; I found freeCodeCamp at the beginning of its existence and JavaScript became a focus of the curriculum shortly after I joined. Since then, I have't really looked back.
[^2]: I'm not sure if Ruby has functions or not, as it is an opinionated OOP language. Everything I've read just mentions methods.
[^3]: Christ that's fugly. Ugh. 😉
