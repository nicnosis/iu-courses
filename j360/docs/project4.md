---
layout: default
title: J360 - Project 4
footer: ''
highlight: 'assignments'
course: j360
---

# Project 4 - Sketch Showcase
## Description
You will use [Material Bootstrap](http://fezvrasta.github.io/bootstrap-material-design/) to create a site that showcases one of your p5.js sketches. It does not necessarily have to be the one you did for project 3. The idea is to create an attractive portfolio piece that shows employers that you:

 * Can use JavaScript
 * Can learn JS libraries, such as p5.js
 * Can create a site with bootstrap
 * Can understand and talk about your code

## Components
There are two main parts to this project: (1) The layout and hierarchy or your page and (2) your writing/code samples

#### Layout
This will be detailed in the YouTube tutorials. You will use bootstrap's [grid system](https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp) to create a site layout that has:
 * A jumbotron (large section at top)
 * A container for your p5 sketch
 * A section where you talk about the purpose of your sketch, why you did it, etc.
 * A section where you give some code examples to demonstrate your knowledge of the p5.js library

#### Writing
You want to make sure that this portfolio piece gives people a good understanding of your knowledge of code. You will use the `<pre>` and `<code>` tags to show code samples (this is explained in the tutorials). You do not necessarily have to show all of the code you used.

For example, if `random()` was a big part of your project, you might include something like this:


"I used random() to generate lines of varying lengths"
```js
var length = random(0, 200); // this gives a random number between 0 and 200
line(0, 0, 0, length); // draw a line of that length
```

There is __no requirement for length__ of your writing. You don't have to meet a certain word count or anything like that - the purpose of the writing segment is to show off your knowledge of p5.js in a portfolio piece. For most of you, the writing will be a couple of paragraphs talking about your project, and a code sample that gives the reader an idea of how your sketch works.

## Approach
First download the starter files (below).

Then complete the YouTube tutorials (below). This will give you your basic layout (e.g., rows/columns/grid).

Finally, you can focus on the writing component of the project.


<div class="card-block">
    <h4 class="card-title">Starter files</h4>
    <p class="card-text">Material Bootstrap has a lot of setup files. I have given you a template to use.</p>
    <a href="starter/material-starter.zip" class="btn btn-primary" target="_blank">Download</a>
 </div>

<div style="height:20px"></div>

## Tutorials
* [Part 1 - Introduction]()
* [Part 2 - Row/column layout]()
* [Part 3 - Adding in your code]()
* [Part 4 - Putting your sketch in a container]()
* [Part 5 - Finishing touches]()

#### box-shadow
For part 5 of the tutorials, you will need to copy this CSS code:
```css
box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
```

## Grading
You are awarded points for:

* __Writing__ - The entire purpose of this project is to talk about your experience with p5.js, and to showcase your knowledge of JavaScript and the p5.js library. Your writing, code examples, and general use of language should indicate you have a working understanding of the p5.js library and applied it to make a sketch.
* __Layout and Hierarchy__ - Your site should make use of the Material Bootstrap theme. You should have appropriate rows and columns set up. Your rationale for structuring your columns, sketch container, and other visual elements should make sense given your sketch. For example, if your sketch is very wide then you may want to keep it on its own row and talk about the code on another row.
* __Integration of Sketch__ - The sketch that you choose should fit nicely onto the page. It doesn't have to be perfect, but it should be clear that you made an effort to use correct rows and columns and got your sketch to fit inside the sketch-container.
* __Code Quality__ - Your code should be well organized. Did you indent your code properly? Are your variable names sensible and self-descriptive? Is your code thoroughly commented? Others should be able to look at your code and build off of it. Your project should follow conventions covered in class and be free of error-prone or unnecessary code.

### Points

| Component             | Points |
|:----------------------|-------:|
| Writing               |     25 |
| Layout and hierarchy  |     25 |
| Integration of Sketch |     25 |
| Code Quality          |     25 |
| **Total**            | **100** |

## Submission
After you are done writing code, you can upload the entire folder to your site. The best way is to drag and drop the entire folder in Cyberduck or whatever FTP program you're using.

Submit the link to your project on Canvas.

Your project is due __Friday, May 5th at 11:59pm__