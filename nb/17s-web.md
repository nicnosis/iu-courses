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
#### 0308
Start with 8.1 - JS Objects I
Then go to 9.1 - line rect width height
Then if time permits go to 9.3 - ball object

#### 9.3
solution <http://codepen.io/novonagu/pen/yMJoed>

## week 10
#### evaluation
Start by having students do informal questionnaire

#### constrain I
Use this <https://p5js.org/reference/#/p5/constrain>

1. Look at the documentation together
2. Try using `constrain()` in the console log to get an idea for how the values work
3. make wall variables, draw straight lines
4. draw a single ellipse in the middle
5. draw two ellipses
6. make `cx` variable
7. import jQuery and make debug for variables `mouseX` and `cx`
8. Use `cx` on the ellipse

```js
var leftWall = 200;
var rightWall = 400;
function setup() {
  createCanvas(600, 400);
  stroke(128);
}
function draw() {
  background(30); // gray bg
  
  var cx = constrain(mouseX, leftWall, rightWall);
  
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);
  
  ellipse(mouseX, 100, 50, 50);
  ellipse(cx, 300, 50, 50);
  
  logMouse(); // log coordinates
}
function logMouse() {
  console.log("(x, y): " + "(" + round(mouseX) + ", " + round(mouseY) + ")");
}
```

#### 10.4 introducing map
```js
function setup() {
  createCanvas(100, 100);
}
function draw() {
  background(155);
  line(25, 0, 25, 100);
  line(75, 0, 75, 100);
  
  ellipse(mouseX, 25, 10, 10);
  var mapx = map(mouseX, 0, 100, 25, 75);
  ellipse(mapx, 75, 10, 10);
}
```
now refactor using variables for those static values
```js
var start;
var stop;

function setup() {
  createCanvas(200, 200);
  start = width/4;
  stop = width/4 * 3;
}
function draw() {
  background(155);
  line(start, 0, start, height);
  line(stop, 0, stop, height);
  
  ellipse(mouseX, 50, 10, 10);
  var mapx = map(mouseX, 0, width, start, stop);
  ellipse(mapx, 100, 10, 10);
}
```

#### 10.5 map with inner and outer rectangles
(1) start by drawing the whole thing on the board

(2) make a rectangle, draw our first circle
```js
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(200);
  
  fill(50);
  rect(100, 100, 100, 100);
  
  fill("crimson");
  ellipse(mouseX, mouseY, 20, 20);
}
```

(3) finish the thing
```js
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(200);
  
  fill(50);
  rect(100, 100, 100, 100);
  
  fill("crimson");
  ellipse(mouseX, mouseY, 20, 20);
  
  var mapx = map(mouseX, 0, width, 100, 200);
  var mapy = map(mouseY, 0, height, 100, 200);
  fill("yellow");
  ellipse(mapx, mapy, 10, 10);
}
```

(4) finally, try flipping input and output ranges to see what happens


#### 10.6 mapping circle radius
(1) first get an ellipse on the canvas
```js
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(50);

  ellipse(width/2, height/2, 50, 50);
}
```

(2) now let's map mouseX to radius
```js
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(50);
  
  var r = map(mouseX, 0, width, 10, 100);
  ellipse(width/2, height/2, r, r);
}
```

(3) now let's map mouseX => w and mouseY => h
```js
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(50);
  
  var w = map(mouseX, 0, width, 10, 100);
  var h = map(mouseY, 0, height, 10, 100);
  // ellipse(width/2, height/2, 50, 50);
  ellipse(width/2, height/2, w, h);
}
```

(4) now let's map mouseX => gray
```js
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(127);

  var w = map(mouseX, 0, width, 10, 100);
  var h = map(mouseY, 0, height, 10, 100);
  
  var white = map(mouseY, 0, height, 0, 255);
  fill(white);
  
  ellipse(width/2, height/2, w, h);
}
```

## week 11
#### introducing random()
(1) start by calling random() from console, explain min/max parameter

(2) Make an ellipse, pick random x coordinate for it. Make sure to explain the difference between doing this in `setup` vs `draw`

```js
var x = random(0, width);
ellipse(x, height/2, 20, 20);
```

(3) Let's practice randomizing...
 * x and y position
 * width and height
 * red/green/blue

SOLUTION:
```js
var x = 100;
var y = 100;

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  var x = random(100, 300);
  var y = random(0, height);
  var diameter = random(10, 30);
  
  var red = random(0, 255);
  var green = random(0, 50);
  var blue = random(0, 255);
  
  fill(red, green, blue, 100);
  ellipse(x, y, diameter, diameter);
}
```

#### transformations: push and pop
(1) explain coordinate system and draw the system with quadrants on the board. Draw a couple of lines and ellipses normally then begin push

(2) show translate

(3) show rotate

SOLUTION:
```js
function setup() {
  createCanvas(400, 400);
  background(200);
  strokeWeight(2); // 2 pixel stroke width
}
function draw() {
  push();
  translate(width/2, height/2);
  rotate(PI/4); // 45 degrees
  
  fill(0, 0, 200);
  ellipse(0, 0, 20, 20); // this line is the same as
  ellipse(40, 20, 20, 20);
  line(-100, 0, 100, 0);
  line(0, -100, 0, 100);
  
  pop();
  ellipse(0, 0, 20, 20); // this line
}
```

#### random, rotate, lines
Let's start by getting here:

```js
function setup() {
  createCanvas(400, 400);
  background("#eee");
}

function draw() {
  stroke("#ccc");
  line(-width, 0, width, 0);
  line(0, -height, 0, height);
  
  stroke(random(255));
  var y = random(0, height);
  var length = random(0, width);
  line(0, y, length, y);
}
```

THEN HERE
```js
function setup() {
  createCanvas(400, 400);
  background("#eee");
}

function draw() {
  push();
  translate(width/2, height/2);
  stroke("#ccc");
  line(-width, 0, width, 0);
  line(0, -height, 0, height);
  
  var y = random(-200, 200);
  var length = random(-200, 200);
  var value = random(0, 255);
  stroke(value);
  line(0, y, length, y);

  pop();
}
```

FINALLY HERE
```js
function setup() {
  createCanvas(400, 400);
  background("#eee");
}

function draw() {
  push();
  translate(width/2, height/2);
  stroke("#ccc");
  line(-width, 0, width, 0);
  line(0, -height, 0, height);
  
  var angle = random(0, 2*PI); // rotate between 0 and 360 deg
  rotate(angle);
  var length = random(100, 200);
  stroke(random(0, 255), 0, 100);
  line(0, 0, 0, length);
  ellipse(0, 0, 50, 50);
  ellipse(0, length, 10, 10);
  pop();
}
```

#### 10.4 random colors array
(1) Review random by using console. Try using `random()` and `random(min, max)`

(2) Briefly go over arrays. Make an array of words and pick one randomly

```js
var words = [ "apple", "bear", "cat", "dog" ];
var word = random(words);  // select random word
text(word,10,50);  // draw the word
```

(3)
 * Get a photo from google images. Download it.
 * Open colormind in a new tab. Upload your image
 * Make an array with strings containing your colors
 * try this

 ```js
 function setup() {
   createCanvas(400, 400);
   var col = random(colors);
   background(col);
 }
 ```

Finished product:

```js
var colors = [
  '#BEC399',
  '#66B4CE',
  '#2777D2',
  '#29528C',
  '#122A47'
];

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  var x = random(0, width);
  var y = random(0, height);
  var d = random(5, 20);
  
  var fillcol = random(colors);
  fill(fillcol);
  var strokecol = random(colors);
  stroke(strokecol);
  
  ellipse(x, y, d, d);
}
```

#### 11.5 - keyboard events
Start by getting a ball to display. Remember to cover objects
```js
var ball = {
  x: 100,
  y: 100
}
function setup() {
  createCanvas(400, 400);
  background(60)
}
function draw() {
  ellipse(ball.x, ball.y, 20, 20);
}
```

Let's get a simple keyPressed function going:

```js
function keyPressed() {
  console.log('hi');
}
```

solution:

```js
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    ball.x--;
  } else if (keyCode === RIGHT_ARROW) {
    ball.x++;
  } else if (keyCode === UP_ARROW) {
    ball.y--;
  } else if (keyCode === DOWN_ARROW) {
    ball.y++;
  }
}
```