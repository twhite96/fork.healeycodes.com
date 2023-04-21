---
ID: 1010
title: Expanding and Diving Into Small Apps
# diving-into-small-apps
author: Tiffany White
date: 2016-03-28 01:49:21
layout: post
link: >
  https://tiffanywhite.tech/diving-into-small-apps/
published: true
tags: uncategorized
categories:
  - General Updates
  - Programming
---


<figure><a href="https://helloburgh.me/wp-content/uploads/2016/03/app.jpeg" rel="attachment wp-att-1014"><img class="aligncenter size-large wp-image-1014" src="https://helloburgh.me/wp-content/uploads/2016/03/app-1024x683.jpeg" alt="apps" width="700" height="467" /></a></figure>I have completed both front-end projects for Free Code Camp and I have taken a longer than usual break from programming for personal reasons <em>but</em> I miss it and am raring to get back to regularity.

I am going to be going back to Free Code Camp to finish out the JavaScript track since they have added <em>even more</em> content— feels like I can’t keep up, which is frustrating but it’s good for the community.

I also, however, know that all the tutorials in the world won’t help you actually build anything of use if you aren’t practicing. This is why I have what I call my <strong>address-book-demo</strong> which I will need to call something more sexy, as launching pad to showcase what I’ve learned outside of the hosted CodePen pens from Free Code Camp.
<h2>Small Apps and Workflows</h2>
One of the most used apps on my Mac besides Keyboard Maestro, TextExpander, and various text editors, Ulysses, is a souped-up app and file launcher called Alfred.app. You can search for files, folders, launch apps, like Spotlight. But where it really shines is in it’s 3rd party <em>workflows</em>.
<h3>What is a <em>”Workflow”</em>?</h3>
A workflow is a little python, ruby, or AppleScript script you build to extend Alfred functionality. You can use APIs from popular web services like <em>Todoist</em>, <em>Trello</em>, and even <em>Hacker News</em> to show and act on information from those web services.

You can script apps like <em>DEVONthink Pro Office</em>, <em>Slack</em>, <em>Atom Editor</em>, the list goes on. Simply put, it makes your Mac an amazing productivity tool. You don’t have to open <em>Todoist</em> to add a task, hit ⌘ + Tab and you can go to work.
<h3>What I Want to Do</h3>
I want to build a few Alfred workflows for my own use cases. Not everyone needs a Ulysses workflow and there may be some already out there. Ulysses doesn’t have a robust API but they do have a nice url scheme you can script to add functionality to a Ulysses workflow.

I want to build workflows for Pages.app, Ulysses.app, and Quiver.app, the programmers notebook.

HappenApps has just opened up a Quiver scripting library I want to play with. I have a prebuilt Quiver workflow I want to build upon. You can find the source on <a href="https://github.com/HappenApps/Quiver/issues/92" target="_blank">GitHub</a>.

I need a refresher on Python and there is an Alfred-workflow library to help you get started on workflows.

You need to install it using <code>pip</code>

<pre class="lang:python decode:1 " >pip install alfred-workflow</pre>

<span style="line-height: 1.5;">You can install this in your workflow folder so, /path/to/your/workflow and it will generally install for that whole folder tree if you add more workflow subfolders to your top-level folder that holds all your workflow folders.</span>

You can find an example of a Pinboard client in Alfred here:
<pre class="lang:python decode:1 " ># encoding: utf-8
import sys
import argparse
from workflow import Workflow, ICON_WEB, ICON_WARNING, web

def get_recent_posts(api_key):
&quot;&quot;&quot;Retrieve recent posts from Pinboard.in

Returns a list of post dictionaries.

&quot;&quot;&quot;
url = 'https://api.pinboard.in/v1/posts/recent'
params = dict(auth_token=api_key, count=100, format='json')
r = web.get(url, params)

# throw an error if request failed
# Workflow will catch this and show it to the user
r.raise_for_status()

# Parse the JSON returned by pinboard and extract the posts
result = r.json()
posts = result['posts']
return posts

def search_key_for_post(post):
&quot;&quot;&quot;Generate a string search key for a post&quot;&quot;&quot;
elements = []
elements.append(post['description']) # title: of post
elements.append(post['tags']) # post tags
elements.append(post['extended']) # description
return u' '.join(elements)

def main(wf):

# build argument parser to parse script args and collect their
# values
parser = argparse.ArgumentParser()
# add an optional (nargs='?') --setkey argument and save its
# value to 'apikey' (dest). This will be called from a separate &quot;Run Script&quot;
# action with the API key
parser.add_argument('--setkey', dest='apikey', nargs='?', default=None)
# add an optional query and save it to 'query'
parser.add_argument('query', nargs='?', default=None)
# parse the script's arguments
args = parser.parse_args(wf.args)

####################################################################
# Save the provided API key
####################################################################

# decide what to do based on arguments
if args.apikey: # Script was passed an API key
# save the key
wf.settings['api_key'] = args.apikey
return 0 # 0 means script exited cleanly

####################################################################
# Check that we have an API key saved
####################################################################

api_key = wf.settings.get('api_key', None)
if not api_key: # API key has not yet been set
wf.add_item('No API key set.',
'Please use pbsetkey to set your Pinboard API key.',
valid=False,
icon=ICON_WARNING)
wf.send_feedback()
return 0

####################################################################
# View/filter Pinboard posts
####################################################################

query = args.query
# Retrieve posts from cache if available and no more than 600
# seconds old

def wrapper():
&quot;&quot;&quot;<code>cached_data</code> can only take a bare callable (no args),
so we need to wrap callables needing arguments in a function
that needs none.
&quot;&quot;&quot;
return get_recent_posts(api_key)

posts = wf.cached_data('posts', wrapper, max_age=600)

# If script was passed a query, use it to filter posts
if query:
posts = wf.filter(query, posts, key=search_key_for_post, min_score=20)

# Loop through the returned posts and add a item for each to
# the list of results for Alfred
for post in posts:
wf.add_item(title:=post['description'],
subtitle=post['href'],
arg=post['href'],
valid=True,
icon=ICON_WEB)

# Send the results to Alfred as XML
wf.send_feedback()
return 0

if __name__ == u&quot;__main__&quot;:
wf = Workflow()
sys.exit(wf.run(main))</pre>
Neat, huh?
<h2>When Will You be Doing This? Why?</h2>
I need to build up my portfolio. I have a few freelance projects lined up (one is a potential client but I can do better than her previous web dev, that’s almost a given. She should hire me). I need to keep grinding away at projects so I look good to prospective employers.

I need to finish up some loose ends at Free Code Camp and I want to start Code Clinic Python with Lynda.com and Treehouse Python course refreshers. Need to manage my time better. This past week was awful for me.
<h2>Thoughts</h2>



<figure><a href="https://helloburgh.me/wp-content/uploads/2016/03/app.jpeg" rel="attachment wp-att-1014"><img class="aligncenter size-large wp-image-1014" src="https://helloburgh.me/wp-content/uploads/2016/03/app-1024x683.jpeg" alt="apps" width="700" height="467" /></a></figure>I have completed both front-end projects for Free Code Camp and I have taken a longer than usual break from programming for personal reasons <em>but</em> I miss it and am raring to get back to regularity.

I am going to be going back to Free Code Camp to finish out the JavaScript track since they have added <em>even more</em> content— feels like I can’t keep up, which is frustrating but it’s good for the community.

I also, however, know that all the tutorials in the world won’t help you actually build anything of use if you aren’t practicing. This is why I have what I call my <strong>address-book-demo</strong> which I will need to call something more sexy, as launching pad to showcase what I’ve learned outside of the hosted CodePen pens from Free Code Camp.
<h2>Small Apps and Workflows</h2>
One of the most used apps on my Mac besides Keyboard Maestro, TextExpander, and various text editors, Ulysses, is a souped-up app and file launcher called Alfred.app. You can search for files, folders, launch apps, like Spotlight. But where it really shines is in it’s 3rd party <em>workflows</em>.
<h3>What is a <em>”Workflow”</em>?</h3>
A workflow is a little python, ruby, or AppleScript script you build to extend Alfred functionality. You can use APIs from popular web services like <em>Todoist</em>, <em>Trello</em>, and even <em>Hacker News</em> to show and act on information from those web services.

You can script apps like <em>DEVONthink Pro Office</em>, <em>Slack</em>, <em>Atom Editor</em>, the list goes on. Simply put, it makes your Mac an amazing productivity tool. You don’t have to open <em>Todoist</em> to add a task, hit ⌘ + Tab and you can go to work.
<h3>What I Want to Do</h3>
I want to build a few Alfred workflows for my own use cases. Not everyone needs a Ulysses workflow and there may be some already out there. Ulysses doesn’t have a robust API but they do have a nice url scheme you can script to add functionality to a Ulysses workflow.

I want to build workflows for Pages.app, Ulysses.app, and Quiver.app, the programmers notebook.

HappenApps has just opened up a Quiver scripting library I want to play with. I have a prebuilt Quiver workflow I want to build upon. You can find the source on <a href="https://github.com/HappenApps/Quiver/issues/92" target="_blank">GitHub</a>.

I need a refresher on Python and there is an Alfred-workflow library to help you get started on workflows.

You need to install it using <code>pip</code>

<pre class="lang:python decode:1 " >pip install alfred-workflow</pre>

<span style="line-height: 1.5;">You can install this in your workflow folder so, /path/to/your/workflow and it will generally install for that whole folder tree if you add more workflow subfolders to your top-level folder that holds all your workflow folders.</span>

You can find an example of a Pinboard client in Alfred here:
<pre class="lang:python decode:1 " ># encoding: utf-8
import sys
import argparse
from workflow import Workflow, ICON_WEB, ICON_WARNING, web

def get_recent_posts(api_key):
&quot;&quot;&quot;Retrieve recent posts from Pinboard.in

Returns a list of post dictionaries.

&quot;&quot;&quot;
url = 'https://api.pinboard.in/v1/posts/recent'
params = dict(auth_token=api_key, count=100, format='json')
r = web.get(url, params)

# throw an error if request failed
# Workflow will catch this and show it to the user
r.raise_for_status()

# Parse the JSON returned by pinboard and extract the posts
result = r.json()
posts = result['posts']
return posts

def search_key_for_post(post):
&quot;&quot;&quot;Generate a string search key for a post&quot;&quot;&quot;
elements = []
elements.append(post['description']) # title: of post
elements.append(post['tags']) # post tags
elements.append(post['extended']) # description
return u' '.join(elements)

def main(wf):

# build argument parser to parse script args and collect their
# values
parser = argparse.ArgumentParser()
# add an optional (nargs='?') --setkey argument and save its
# value to 'apikey' (dest). This will be called from a separate &quot;Run Script&quot;
# action with the API key
parser.add_argument('--setkey', dest='apikey', nargs='?', default=None)
# add an optional query and save it to 'query'
parser.add_argument('query', nargs='?', default=None)
# parse the script's arguments
args = parser.parse_args(wf.args)

####################################################################
# Save the provided API key
####################################################################

# decide what to do based on arguments
if args.apikey: # Script was passed an API key
# save the key
wf.settings['api_key'] = args.apikey
return 0 # 0 means script exited cleanly

####################################################################
# Check that we have an API key saved
####################################################################

api_key = wf.settings.get('api_key', None)
if not api_key: # API key has not yet been set
wf.add_item('No API key set.',
'Please use pbsetkey to set your Pinboard API key.',
valid=False,
icon=ICON_WARNING)
wf.send_feedback()
return 0

####################################################################
# View/filter Pinboard posts
####################################################################

query = args.query
# Retrieve posts from cache if available and no more than 600
# seconds old

def wrapper():
&quot;&quot;&quot;<code>cached_data</code> can only take a bare callable (no args),
so we need to wrap callables needing arguments in a function
that needs none.
&quot;&quot;&quot;
return get_recent_posts(api_key)

posts = wf.cached_data('posts', wrapper, max_age=600)

# If script was passed a query, use it to filter posts
if query:
posts = wf.filter(query, posts, key=search_key_for_post, min_score=20)

# Loop through the returned posts and add a item for each to
# the list of results for Alfred
for post in posts:
wf.add_item(title:=post['description'],
subtitle=post['href'],
arg=post['href'],
valid=True,
icon=ICON_WEB)

# Send the results to Alfred as XML
wf.send_feedback()
return 0

if __name__ == u&quot;__main__&quot;:
wf = Workflow()
sys.exit(wf.run(main))</pre>
Neat, huh?
<h2>When Will You be Doing This? Why?</h2>
I need to build up my portfolio. I have a few freelance projects lined up (one is a potential client but I can do better than her previous web dev, that’s almost a given. She should hire me). I need to keep grinding away at projects so I look good to prospective employers.

I need to finish up some loose ends at Free Code Camp and I want to start Code Clinic Python with Lynda.com and Treehouse Python course refreshers. Need to manage my time better. This past week was awful for me.
<h2>Thoughts</h2>




I am super busy. I started another blog for making. You can find it <a href="http://tiffanyrwhite.tech" target="_blank">here</a>. So there’s a lot going on but I need to put programming first.