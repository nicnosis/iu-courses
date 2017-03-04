---
layout: home
title: J360 - Notes
footer: ''
highlight: home
course: nb
---
# j360 - Spring 2017
## week 1
### Mon 01.09
#### Schedule
* Intros
* Syllabus
* Examples
* SublimeText
* Codepen
    * Go over some basic tags
    * `h1`
    * `p`
    * `ul li`

#### Homework
* Fill out your Canvas Bio
* A couple of sentences to help me understand who you are and what you’re doing here.

### Wed 01.11
* Reminder: No class Monday (1/16)
* Mention 65% rule at start of lecture
* SublimeText
 * Go over interface.
 * CMD+SHIFT+P => snippet: add HTML
 * `<p>` => snippet
* html
* css
* Mess around with stuff on the homepage
* add style rules
* Mess around with CSS zen garden

 Find out why there aren’t enough chairs in FF060  
 Find out why people can’t save stuff

## week 2
### Wed 01.18
+ Codepen lessons
+ CSS zen garden
+ troubleshooting hosting

#### 2.1
go through selector{property:value} syntax
some tags+ h1, h2
+ p
+ ul>li

some properties
+ color
+ background-color
+ font-size
+ line-height

+ exporting your pen
+ take into sublime
+ explain the <link> tag

cover elements inspector  
live CSS changes

#### 2.2
Google web fonts:
+ visit the site first, look at pairings
+ remind students of the two things we have to do:
(1) declare rules in CSS
(2) load stylesheet in HTML

Some new properties:
+ letter-spacing
+ text-shadow
 divs and spans
 id and class

Remaining time: help individuals with hosting and stuff

## week 3
### Mon 01.23
+ Review 2.2 - fonts

#### CSS Box Model
```

body {
  font-family: Arial;
}

div {
  background-color: steelblue;
  width: 300px;
}

.fancy {
  margin-top: 15px;
  padding: 10px;
  border: 2px solid orange;
  border-radius: 10px;
  box-shadow: 3px 3px 10px #333;
} 

.caps {
  text-transform: uppercase;
}
```


+ hw1 - due next Friday (2/3)
    + Download file
    + Edit it
    + Upload to your site
    + Post link on canvas

Cyberduck demonstration - get people to upload


### Wed 01.25
#### 3.3 - blockquote
Reminder that 1em == 16px  
solution:
```css
body {
  font-family: 'Source Sans Pro', sans-serif;
  color: #333;
}
blockquote {
  background: #eee;
  border-left: 10px solid #aca;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "“" "”" "‘" "’";
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #aca;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
    /*   display: inline; */
}
```

#### 3.4
<http://getbootstrap.com/examples/jumbotron/>

#### 3.5
<http://www.w3schools.com/cssref/css3_pr_transform.asp>
#### Let's see how our FTP progress is going

## week 4
#### 4.1 basics
(1) Need to pull in the Bootstrap CSS first

(2) Make a jumbotron: `.jumbotron>h1`
```html
<div class="jumbotron">
    <h1 class="text-center">my header</h1>
</div>
```

(3) Make a page-header: `.page-header>h2+small`
```html
<div class="page-header">
    <h2>This is a header. <small>This text is small.</small></h2>
</div>
```

(4) Make some rows and columns:
```html
.container
.row
.column
.col-*-*
```

#### 4.2 nav
```html
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
```

#### 4.3 tabs
```html
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">Home</a></li>
    <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
    <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h3>Menu 1</h3>
      <p>...</p>
    </div>
    <div id="menu2" class="tab-pane fade">
      <h3>Menu 2</h3>
      <p>...</p>
    </div>
  </div>
```

## week 5
#### 5.1 JS Functions
Try using `onclick="..."` attribute

```js
function sayHi() {
    console.log("hi");
}

function add(a, b) {
    return a + b;
}

function square(n) {
    return n * n;
}
```

#### 5.2
```js
$(document).ready(function() { console.log("ready!"); });
$(function() { console.log("ready!"); });
```

Define the function:
```js
function fn() {
  console.log("hi");
}
```
Pass the function as an argument to $():
```javascript
$(fn);
```

#### 5.3 selectors

```html
<ul class="my-list">
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>
```
```js
$(".my-list").click(function() {
    $(this).hide();
});
```

## week 6
#### 6.1

First make an HTML button
```html
<button class="btn btn-primary">Click me!</button>
```

First make a .click thing for the button
```js
$("button").click(function() {
    console.log("hi");
});
```

Next manually add selector
```js
$("button").click(function() {
    $("p").toggle();
});
```

Next add variable
```js
$("button").click(function() {
    var el = "p";
    $(el).toggle();
});
```

Next let's try list items
```js
var el = "ul li";
```

#### 6.2
First write something in the text/num fields

Then, write some CSS for `span`

Now we want to change HTML
```html
<span id="value1"></span> + <span id="value2">3</span> = <span id="sum"></span>
```

First without the unary operators
```js
$(function(){
	var html = $("#value1").html() + $("#value2").html();
	console.log(html);
	$("#sum").html(html);
});
```

then with
```js
$(function(){
	var html = +$("#value1").html() + +$("#value2").html();
	console.log(html);
	$("#sum").html(html);
});
```

use JQuery's .html() to change
the content of #text and #num
$(selector).html(content);

#### 6.3
FIRST LETS CHANGE OUR INPUT FORM
```html
<input type="text" class="form-control" id="inputSpeed" placeholder="enter in milliseconds">
```
LETS ADD A BUTTON

```html
<button class="btn btn-default">Toggle</button>
```

```js
var speed = 1000;

$("button").click(function() {
  var value = $(selector).val();
  $("#square").toggle(value);
});

$("form").submit(function(e){ return false; });
```

#### 6.4
USE THIS - <https://css-tricks.com/examples/jQueryStop/>

First let's make some squares
```html
<!-- Add your squares here -->
<div class="square" id="sq1"></div>
<div class="square" id="sq2"></div>
<!--                       -->
```

Add CSS rules
```css
/* Add your .square selector here */
.square {
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 10px;
  background: coral;
}
```

let's animate stuff
 * First use selector ".square"
 * Then use selector "#sq1"
 * Then make a hover or click event
```js
$("#sq1").animate({
  left: '250px',
  opacity: '0.5',
  height: '150px',
  width: '150px'
});
```
Add a callback
```js
$("#sq1").hover(function() {
  $(this).animate({
    opacity: '0.5',
    height: '150px',
    width: '150px'
  });
}, function() {
  $(this).animate({
    opacity: '1',
    width: '50px',
    height: '50px'
  });
});
```

#### 6.5
before diving into waves, talk a bit about javascript for loops
```js
for (var i = 0; i < 10; i++) {
    $("body").append("number: " + i);
}
```

css first
```css
/* Add your .wave selector here */
.wave {
  float: left;
  background: blue;
  height: 100px;
  width: 20px;
  position: relative;
}
```

first get here and explain why it's bad
```js
  var wave = $("<div>", {"class": "wave"});

  wave.hover(function() {
    $(this).animate({ top: "20px", height: "80px" });
  }, function() {
    $(this).animate({ top: "0px", height: "100px" });
  });

  $("#waves").append(wave);

  var wave2 = $("<div>", {"class": "wave"});

  wave2.hover(function() {
    $(this).animate({ top: "20px" });
  }, function() {
    $(this).animate({ top: "0px" });
  });

  $("#waves").append(wave2);
```

SOLUTION:
```js
for (var i = 0; i < 20; i++) {
    var wave = $("<div>", {"class": "wave"});

  wave.hover(function() {
    $(this).animate({ top: "20px", height: "80px" });
  }, function() {
    $(this).animate({ top: "0px", height: "100px" });
  });

  $("#waves").append(wave);
}
```

## week 7
#### 7.1
Students make an array.var people = ["Jon", "Bill", "Sally"];  
try `console.log(people);`  
try `console.log("Hello " + people[0]);`

#### 7.2
Try adding a new element to an array by specifying an index that doesn't exist yet  
Try adding a new element by using **.push()**

#### 7.3

try using .sort(), .reverse(), and adding in new elements  
mention muscle memory and repetition as being crucial learning conditions  
try making an array that contains two arrays in it

#### 7.4
```js
// (1) make array
var friends = ["Bob", "Cindy", "Adam"];

// (2) make string
var html = "";

// (3) loop
for (var i = 0; i < friends.length; i++) {
    html += "<li>";
    html += friends[i];
    html += "</li>";
}

// (4) populate ul#friends
$("#friends").html(html);
````
now repeat, this time using a `<select>` with `<option>`

## week 8
#### 8.6
Start by importing the CDN
```
function setup() {
	background(128); // 0 == black; 255 == white
	ellipse (60, 60, 50, 50); // try changing these parameters
}
function draw() {
  
}
```

#### 8.7 mouse events
```
function setup() {
  createCanvas(640, 480); // Makes a 'canvas' div, 640 by 480 pixels
}

function draw() {
  if (mouseIsPressed) {
    fill(0);  // fill black if mouse button is pressed
  } else {
    fill(255);// fill white if mouse button is not pressed
  }
  ellipse(mouseX, mouseY, 80, 80); // draw an 80x80 ellipse at mouse position
}
```

## week 9
#### 9.1


#### 9.2
```
var x; var y; var movingRight = true;
var speed = 4;
function setup() {
  createCanvas(600, 480);
  background(128);
  x = 0;
  y = height/2;
}

function draw() {
  background(128);
  speed = +$("#speed").val();
  
  // 1 adjust x position
  if (movingRight) { x += speed; }
  else { x -= speed; }

  if (x < 25) { movingRight = true }
  if (x > width - 25) { movingRight = false; }
  
  // 2 draw ellipse
  ellipse(x, y, 50, 50);
  ellipse(width - x, y, 50, 50);
}
```
#### 9.3
solution <http://codepen.io/novonagu/pen/yMJoed>