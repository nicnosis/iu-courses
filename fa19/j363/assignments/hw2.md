---
layout: default
title: J363 - Homework Two
footer: ''
highlight: 'assignments'
term: 'fa19'
course: 'j363'
---
# Homework Two - <small>Styling a page with CSS</small>
## Description
_Pizza Bruh_, a local Pizza restaurant, needs your help.
_Pizza Bruh_ has a basic HTML site, but no CSS.
You will use CSS to refine its appearance.
You should consider the designs of other food/restaurant websites.

You are free to innovate and experiment creatively. I will provide a list of CSS properties you must use, but how you implement them is completely up to you.

<div class="card-block">
  <p class="card-text">Here's an example from one of our students:</p>
  <a href="pdf/hw2-finished.pdf" class="btn btn-primary text-white" target="_blank">View Example</a>
</div>

### Reference
You should finish your CSS Codecademy lessons before attempting this assignment.

These references will serve you well:
 * [CSS Examples](https://www.w3schools.com/css/css_examples.asp)
 * [CSS Templates](https://www.w3schools.com/css/css_templates.asp)
 * [CSS-Tricks snippets](https://css-tricks.com/snippets/css/)

## Starter Files
You are given some starter files.

<div class="card-block">
  <p class="card-text">Starter files for Homework Two.</p>
  <a href="start/hw2-start.zip" class="btn btn-primary text-white" target="_blank">Download</a>
</div>

## Grading and Requirements
Homeworks are worth `five points` in this course. Grading criteria are detailed below.

### Style `3 pts.`
You will be evaluated on your ability to apply CSS.

Create a new file called `styles.css` and link to it in `index.html`.  You will need to put a [&lt;link&gt; tag](https://www.w3schools.com/tags/tag_link.asp) in the `<head>` of your document.

#### Navigation
You will want to change the navigation. I recommend [this guide](https://www.w3schools.com/css/css_navbar.asp) from W3Schools for ideas.

#### Images
By default, the images are too large. I recommend using CSS to fix this.

You will want to:
1. Assign a class to the `<img>` elements in `index.html`
2. Reference this class in `styles.css`. You might do something like this:

```css
.small {
  width: 400px;
}
```

#### Buttons
The default "order now" buttons are not very exciting. Use CSS to make them more presentable. You might find [this guide](https://www.w3schools.com/css/css3_buttons.asp) helpful.

#### Required properties
Implement each property from the following list at least once. How you choose to use them is up to you (unless otherwise specified). For example, you could use `background-color` on the `<body>` element or the `<main>` element.

 * [font-family](https://www.w3schools.com/cssref/pr_font_font-family.asp) - You may find [Google Fonts](https://fonts.google.com/) useful.
 * [font-size](https://www.w3schools.com/cssref/pr_font_font-size.asp)
 * [background-color](https://www.w3schools.com/cssref/pr_background-color.asp)
 * [color](https://www.w3schools.com/cssref/pr_text_color.asp)
 * [width](https://www.w3schools.com/cssref/pr_dim_width.asp)
 * [margin](https://www.w3schools.com/cssref/pr_margin.asp) or [padding](https://www.w3schools.com/cssref/pr_padding.asp)

#### Optional properties
You may also choose to implement these: _(and any other properties you may want)_

 * [border](https://www.w3schools.com/cssref/pr_border.asp)
 * [text-transform](https://www.w3schools.com/cssref/pr_text_text-transform.asp)

### File and folder names `1 pt.`
 * DO NOT use spaces in your filenames. Use hyphens instead
 * DO NOT use capital letters in your filenames
 * Your site folder should be named `hw2-lastname-firstname` _(e.g., hw2-aguirre-nicolas)_
 * You will submit a `.zip` file. Right-click on your site folder and choose `compress`. Make sure this file is called `hw2-lastname-firstname.zip`

### Code Quality `1 pt.`
Your code should:

 * Be free of extraneous whitespaces
 * Use proper indentation to show structure with nested tags - It should be easy to read for me
 * Follow conventions described in class and in the reading _(e.g., do not capitalize tags, use quotation marks when specifying an attribute)_

#### HTML
Changes to HTML be minimal. Here are things you'll probably do:

1. Create a &lt;link&gt; tag in the `<head>` to import your `styles.css`
2. Assign classes or ids to elements as you need. There is no right/wrong way to do this; use your intuition.
3. Use the classes or ids as selectors in your CSS.

##### example
###### _index.html_ :

```html
<div class="description">
  ...
</div>
```
###### _styles.css_ :

```css
.description {
  font-size: 14px;
  font-family: somefont;
}
```

## Submission - Canvas
Submit your compressed file _(zip)_ to: `CANVAS > ASSIGNMENTS > HOMEWORK 2`

#### **Due Friday 2/8/2019 at 11:59pm**
