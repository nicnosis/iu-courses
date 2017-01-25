---
layout: home
title: J460 - Notes
footer: ''
highlight: home
course: nb
---
# j460 - Spring 2017

week 1
------

### M 1.07
Intros
 * Let’s play a silly game -
 * First letter of your first name - use as noun or adjective to describe yourself
 * e.g., near-sighted Nicolas, Leah the Leopard, manic-depressive Martha
 * Who are you? What are you doing here?

 * Syllabus
 * Let’s look at vizzes
 * SublimeText
 * Codepen - basic tags `h1` `h2` `p` `ul li`

 Homework
 * Fill out your Canvas Bio
 * A couple of sentences to help me understand who you are and what you’re doing here.
 * Add a pic if you have one handy


### W 1.11
#### 1.1
```
h2
ul>li*3
p
ol>li*3
```
try making a link

#### 1.2 enter/exit

week 2
------
### W 1.18
+ 2.1
+ 2.2
+ setting up local server

#### 2.1
talk about array.length, array.push(),talk about Math.methods

#### 2.2
https://bost.ocks.org/mike/circles/

```
var dataArray = [5,11,18];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

svg.selectAll("rect")
           .data(dataArray)
      .enter().append("rect")
                .attr("height",function(d,i){ return d*15; })
                .attr("width","50")
                .attr("fill","pink")
                .attr("x",function(d,i){ return 60*i; })
                .attr("y",function(d,i){ return 300-(d*15); });
```

week 3
------
### M 1.23
#### svg path element
Begin by setting a width and height for our `svg`

Let's make a path manually in HTML:
```
<path d="M150 0 L75 200 L225 200 Z" />
```


```
var data = [{x: 5, y: 5}, {x:10, y:15}, {x:20, y: 7}, {x:30, y:18}, {x:40, y:10}];

var svg = d3.select('body')
    .append('svg')
    .attr('height', '100%')
    .attr('width', '100%');

var line = d3.line()
    .x(d => d.x*6)
    .y(d => d.y*4)
    .curve(d3.curveBasis);

svg.append('path').attr('d', line(data))
    .attr('stroke', 'blue')
    .attr('fill', 'none')
```

#### d3 area chart
Start by explaining the two array variables. Also show what we have in `html`. Add height, width and area generators

```
var w = 1000;
var h = 200;
var svg = d3.select("svg")
  .attr("width", w)
  .attr("height", h);
var area = d3.area()
  .x(function(d, i) { return i*30; })
  .y0(function(d) { return h - d; })
  .y1(h);

svg.append("path").attr("d", area(scores));
```
let's make some circles:
```
var circle = svg.selectAll("circle")
  .data(scores)
  .enter().append("circle")
  .attr("cx", function(d,i) {
    return i*30;
  })
  .attr("cy", function(d) {
    return h - d;
  })
  .attr("r", 5);
```

#### simpleHTTPServer
run `python -v`

### Wed 1.25
#### 3.2 area chart
```js
var data = [2, 3, 5, 10, 12];

var squares = data.map(square);
d3.select("#squares")
  .selectAll("p")
  .data(data)
  .enter().append("p")
  .text(function(d){return d;})

function sayHi() {
    console.log("hi");
}
function add(a, b) {
    return a+b;
}
function square(a) {
    return a*a;
}
```

#### 3.3 function practice
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map>

#### 3.4 function
```js
// make an array and populate with 50 points
var points = [];
for (var i = 0; i < 50; i++) {
  var point = {
    x: Math.random(),
    y: Math.random()
  };
  points.push(point);
}

var svg = d3.select("svg");
var circle = svg.selectAll("circle")
  .data(points)
  .enter().append("circle")
  .attr("cx", function(d) { return d.x * 400 })
  .attr("cy", function(d) { return d.y * 400 })
  .attr("r", 5);
```