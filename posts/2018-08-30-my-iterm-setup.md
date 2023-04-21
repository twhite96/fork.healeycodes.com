---
title: My iTerm2 Setup
date: 2018-09-02 18:59
excerpt: iTerm2 is an terminal emulator for macOS.  It has a lot of features that don't come with the standard macOS terminal. Some people prefer the plain bash terminal, but I am not one of them, as aren't many other folks.
layout: post    
categories: Random
tags:
  - setups
  - iterm2
  - terminal
image: https://res.cloudinary.com/twhiteblog/image/upload/v1535582156/Header%20Images/goran-ivos-245581-unsplash.jpg
description: This is another setup post but this time, it's iTerm2.
---

The second post of this kind on this blog is my [iTerm2](https://iterm2.com/) setup.

## What is iTerm2?

iTerm2 is an terminal emulator for macOS. It has a lot of [features](https://iterm2.com/features.html) that don't come with the standard macOS terminal. Some people prefer the plain bash terminal, but I am not one of them, as aren't many other folks.

## So How Do I Customize My Terminal?

Most of this will work with the plain macOS terminal but whatever doesn't I will note that next to the item.

### First Thing: Get zsh and Oh My Zsh

[ZSH](https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH) or Z Shell is the most important part of my setup[^1]. It's simple to install with [Homebrew/brew](https://github.com/Homebrew/brew) on macOS and apt or apt-get on Linux.

Next, comes the sweet stuff that makes this all run: [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh). There are a lot of interesting plugins but I use just a fraction of them, which you place in your `.zshrc` profile:

```sh
plugins=(git dirhistory brew dircycle gitfast git-extras jsontools node npm osx repo sudo urltools web-search dirpersist history-substring-search last-working-dir safe-paste yarn zsh-completions)
```
Plugins extend the functionality of not only bash but git as well.

#### Zsh Aliases

Aliases are a hot topic in the dev community. Do you use them or don't you? This depends on your experience and personal preferences, in my opinion, so there is really no right or wrong answers.

Aliases allow you to type a few letters to initiate a command in your terminal. For instance, I have this to push to git: `gp`.

Some of my favorite aliases:

```sh
alias hero='git push heroku master'
alias takecare='tiny-care-terminal'
alias bsync='browser-sync start --server'
alias breload='browser-sync reload'
alias jopt='jpeg-recompress --accurate --quality medium --min 40'
alias popt='pngcrush -brute'
alias jekstw='bundle exec jekyll serve --host 0.0.0.0'
alias jeksth='bundle exec jekyll serve --port 4001 --host 0.0.0.0'
alias jeksd='bundle exec jekyll serve --port 4002 --host 0.0.0.0'
alias gitor='git remote add origin'
alias pushit='git push -u origin master'
alias ls='colorls --dark --sort-dirs --report -A --gs'
alias lc='colorls --tree --dark -A'
```

#### Zsh Themes

This is my favorite part of all this. 

You can add a zsh theme by downloading it from the creator's repo or just find one in Robby Russell's repo.

The default theme is `robbyrussell.zsh-theme` but you can install pretty much anything you like. You install a theme in your `.zshrc` file as follows:

`ZSH_THEME="robbyrussell"`

Here is what I was working with a few days ago:

<figure>
    <img src="https://res.cloudinary.com/twhiteblog/image/upload/v1535934513/My%20Terminal%20Setup%20Post/Screenshot2017-09-30_06-28-20_PM.jpg" />
    <figcaption>
      <a href="https://github.com/wesbos/Cobalt2-iterm">Wes Bos's Cobalt2 theme</a>
    </figcaption>
</figure>

This is a theme that uses [Powerline Patched Fonts](https://github.com/powerline/fonts) for the flag and iconography. This was my setup for a long time until I read [Ali's post](https://zen-of-programming.com/terminal-setup/). That post turned me on to a theme I already tried but was so used to Cobalt2 for everything[^2] I decided to switch it back.

But taking a look at her setup inspired me to take the leap. And now I am working with this:

![](https://res.cloudinary.com/twhiteblog/image/upload/v1535424037/My%20Terminal%20Setup%20Post/Screenshot-2018-08-27_06-44-35_PM.png)

I also learned how to open different panes in one iTerm window reading that post. I have five panes open on my external monitor:

![](https://res.cloudinary.com/twhiteblog/image/upload/v1535424076/My%20Terminal%20Setup%20Post/Screenshot-2018-08-27_10-41-01_PM.png)

#### But I Didn't Stop There

I wanted to use other iconography than the default spaceship icons because for whatever reason I couldn't get them to work.

As I read the issues for spaceship, I found an [issue](https://github.com/denysdovhan/spaceship-prompt/issues/401) about changing the glyphs to [Nerd Fonts](https://nerdfonts.com/). After reading [You’re Missing Out on a Better Mac Terminal Experience](https://medium.com/@caulfieldOwen/youre-missing-out-on-a-better-mac-terminal-experience-d73647abf6d7) on Medium I figured out how to get them to work.

Using spaceship's customizations I ended up with the headphone and flash glyphs instead of my machine name for the terminal prefix.

Here are some of the customizations I made:

```sh
SPACESHIP_PROMPT_ADD_NEWLINE="true"
SPACESHIP_CHAR_SYMBOL="\uf0e7"
SPACESHIP_CHAR_PREFIX="\uf025 "
SPACESHIP_CHAR_SUFFIX=" "
SPACESHIP_CHAR_COLOR_SUCCESS=yellow
SPACESHIP_PROMPT_DEFAULT_PREFIX="$USER"
SPACESHIP_PROMPT_FIRST_PREFIX_SHOW="true"
SPACESHIP_USER_SHOW="true"

# NODE
SPACESHIP_NODE_PREFIX="node:("
SPACESHIP_NODE_SUFFIX=") "
SPACESHIP_NODE_SYMBOL="\uf898 "
```

In that article, it mentions [colorls](https://github.com/athityakumar/colorls) which is a Ruby script that will let you add icons for folders, etc and change the colors of your `ls` command. After some fiddling, I got it to work:

<figure>
    <img src="https://res.cloudinary.com/twhiteblog/image/upload/v1535424038/My%20Terminal%20Setup%20Post/Screenshot-2018-08-27_06-58-43_PM.png" />
    <figcaption>
       Tree view
    </figcaption>
</figure>

<figure>
    <img src="https://res.cloudinary.com/twhiteblog/image/upload/v1535424037/My%20Terminal%20Setup%20Post/Screenshot-2018-08-27_06-48-58_PM.png" />
    <figcaption>
       List view with git statuses turned on
    </figcaption>
</figure>

### Other Plugins

#### Zsh Syntax Highlighting

I use [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) to highlight directories and other commands in the terminal. You can customize the color of the highlights by looking at the [highlighter docs](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/docs/highlighters.md).

#### Z - Jump Around

[z](https://github.com/rupa/z/) is a utility that allows you to jump to different directories by typing `z` and then the directory. You’ll have to `cd` around in directories for a bit to “train” it but once you do, it’s pretty easy to skip around in directories. It is a “frecent” tool: frequent and recent directories.

#### Exa: ls replacement

This command line utility is [exa](https://github.com/ogham/exa), which replaces `ls` with some nifty features is something I don't really use now that I have installed `colorls`. You can type `exa` and it will list the contents of your directory. You can get directory permissions, print each item on one line with the `-1` flag, and other custom controls.

## What Is Your Setup?

Want to share your setup? Send me [a tweet](https://twitter.com/TiffanyW_412).



[^1]: You can install other tools like Fish shell, but zsh is probably the most widely used, outside of bash itself.
[^2]: Slack, VSCode, Alfred...
