# Mustache Fix for my static site generator

I'd been stuck on generating the mustache templates in files when running `build.rb` in the CLI.

```rb
# :nodoc:
class Index < Mustache
  def head
    puts '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>'
  end
end
```

This isn't the right approach and as I read more of the docs I've come to understand that much like JSX you've got to run your logic inside of curly braces and looking at this [demo](http://mustache.github.io/#demo) solves this particular issue.

Next, it's writing these templates to a file with an `.html` file extension and moving them to the the proper directories.

This only takes care of the HTML though; I'll need another tool to generate the basic CSS and JavaScript.