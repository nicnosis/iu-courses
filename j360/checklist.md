Review this checklist to ensure you understand the concepts covered. You are encouraged to ask for clarification, review, or examples for anything that has been covered so far - I am happy to do in-class demonstrations.

## MarkDown
You may recall that Markdown is a language used to generate HTML.  
For instance, using this syntax in Markdown:

~~~markdown
# This is an h1
## This is an h2

[IU](http://iu.edu)
~~~

Will give you this HTML:

~~~html
<h1>This is an h1</h1>
<h2>This is an h2</h2>

<a href="http://iu.edu">IU</a>
~~~
Before you proceed:

* Have you installed [Package Control](https://packagecontrol.io/) for SublimeText?
* Do you have Markdown Preview installed?
* Do you know how to create, open, and edit a Markdown (.md) file in SublimeText?
* Do you know how to use Markdown Preview to save a `.md` file as a `.html` file?


## HTML
Make sure you understand the difference between the `<head>` and `<body>` of an HTML document. The head is loaded first, and contains vital information to the browser such as where to look for CSS rules. The body contains the structure of the website; the visual elements you see on a page correspond to elements (_tags_) in the body of an HTML file.

We only have a few uses for the `<head>` tag so far:

### Head
* Do you know how to use the `<link>` tag to link a stylesheet (_CSS file_)?
* Do you know how to import a font from Google Fonts?
* Do you know how to change the `<title>` of your webpage?

### Body
The `<body>` is made of tags, generally enclosed in angle brackets: `<tagname>`  
Make sure you are comfortable using these tags, and have a good understanding of their uses:

* h1, h2, h3...
* p
* ul, li _(unordered lists; list items)_
* br _(line break)_
* div
* a _(link)_
* img

Also ensure that you know how to assign a class to an HTML element, and that you are comfortable using Chrome's 'inspect' tool.

## CSS
Ensure that you are familiar with the 'Selector-Property-Value' model of CSS:

~~~css
selector {
	property: value;
}
~~~

a more concrete example:

~~~css
h1 {
	color: red;
}

body {
	background-color: blue;
	font-size: 16px;
	font-family: 'Open Sans', sans-serif;
}
~~~
The **selector** corresponds to an HTML tag, such as an `h1` or a `div`.
**Properties** describe the visual characteristics of the element that you want to change - font size or text color for example. A new **value** is then specified for those properties.

You should feel comfortable making basic changes to document styling with CSS at this point. Ensure that you are familiar with the following:

* Changing `font`, `font-size`, and text `color` of an element
* Changing `background-color` of an element
* Changing dimensions (`width`/`height`) of an image

Ensure that you know how to assign a class to an element in HTML, and then select it in CSS. An example follows:

~~~html
<div class="important">...content...</div>
~~~

This will assign the class 'important' to that `<div>`. To change its appearance in CSS:

~~~css
.important {
	font-color: red;
}
~~~

The dot syntax - `.classname` is used to reference a class defined in an `html` file.