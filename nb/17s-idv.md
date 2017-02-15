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

## week 4
#### 4.1
Use this: <https://bost.ocks.org/mike/bar/>

(1) practice a basic append
```
d3.select("body")
  .append("div")
  .text("hi!")
```

(2) practice data join
```
d3.selectAll("p")
   .data(data)
   .enter().append("p")
   .text(d => d)
```

(3) making a primitive chart  
(3a) first go to HTML and make a `.chart` div  
(3b)
```js
d3.select(".chart")
  .selectAll("div")
  .data(data)
  .enter().append("div")
  .style("width", d => d * 10 + "px")
  .text(d => d)
```
(3c) let's style it
```css
.chart div {
  font: 10px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}
```
(4) Let's scale it to fit
```
var x = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, 420])

d3.select(".chart")
  .selectAll("div")
  .data(data)
  .enter().append("div")
  .style("width", d => x(d) + "px")
  .text(d => d)
```

#### 4.2
```
var width = 420,
    barHeight = 20;

var x = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([0, width]);

var chart = d3.select(".chart")
  .attr("width", width)
  .attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
  .data(data)
  .enter().append("g")
  .attr("transform", (d,i) => "translate(0," + i*barHeight + ")");

bar.append("rect")
  .attr("width", d => x(d.value))
  .attr("height", barHeight - 1);

bar.append("text")
      .attr("x", d => x(d.value) - 3)
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(d => d.value);
```

#### 4.3
Use this <https://bl.ocks.org/d3noob/bdf28027e0ce70bd132edc64f1dd7ea4>
```js
var margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
   },
   width = 720 - margin.left - margin.right,
   height = 480 - margin.top - margin.bottom;

var svg = d3.select("svg")
   .attr("width", width + margin.left + margin.right)
   .attr("height", height + margin.top + margin.bottom)
   .append("g")
   .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);

// Scale the range of the data in the domains
x.domain(data.map(function(d) {
   return d.salesperson;
}));
y.domain([0, d3.max(data, function(d) {
   return d.sales;
})]);

// append the rectangles for the bar chart
svg.selectAll(".bar")
   .data(data)
   .enter().append("rect")
   .attr("class", "bar")
   .attr("x", function(d) {
      return x(d.salesperson);
   })
   .attr("width", x.bandwidth())
   .attr("y", function(d) {
      return y(d.sales);
   })
   .attr("height", function(d) {
      return height - y(d.sales);
   });

// add the x Axis
svg.append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(x));

// add the y Axis
svg.append("g")
   .call(d3.axisLeft(y));
```

## week 5
 * [5.1 solution](http://codepen.io/novonagu/pen/MJBpKM)
 * [5.2 solution](http://codepen.io/novonagu/pen/ygqMMm)
 * [color scales doc](https://github.com/d3/d3-scale/blob/master/README.md#schemeCategory10)
 * [Histrogram II](https://bl.ocks.org/mbostock/b2fee5dae98555cf78c9e4c5074b87c3)
 * [Scatterplot v4](http://bl.ocks.org/weiglemc/6185069)
 * [Scatterplot old](https://bl.ocks.org/mbostock/3887118)

## week 6
#### 6.1 iris scatter plot with interaction
solution: <http://codepen.io/novonagu/pen/jydPed>

(1) setup scales
```js
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);
var color = d3.scaleOrdinal(d3.schemeCategory10);
```

(2) set domains
```js
  // set domains
  x.domain(d3.extent(data, d => d.sepalWidth));
  y.domain(d3.extent(data, d => d.sepalLength));
  
  // draw circles
  var circle = svg.selectAll(".dot")
    .data(data)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("r", 3.5)
    .attr("cx", d => x(d.sepalWidth))
    .attr("cy", d => y(d.sepalLength))
    .style("fill", d => color(d.species))
```

(3) setup legends
```js
  // setup legend selection
  var legend = svg.selectAll(".legend")
    .data(color.domain())
    .enter().append("g")
    .attr("class", "legend")
    .attr("transform", (d,i) => "translate(0," + i*20 + ")");

  // draw legend rectangles
  legend.append("rect")
    .attr("x", width - 18)
    .attr("width", 18)
    .attr("height", 18)
    .style("fill", color);

  // daw legend text
  legend.append("text")
    .attr("x", width - 24)
    .attr("y", 9)
    .attr("dy", 5)
    .style("text-anchor", "end")
    .text(d => d);
```
(5) let's add a basic mouseover
```js
.attr("mouseover", function(d) {console.log(d) })
```

(6) go to HTML and start filling in spans
(7) remember to use `.on()`
```js
circle.on("mouseover", function(d) {
  d3.select("#species").html(d.species);
  d3.select("#petalLength").html(d.petalLength);
  console.log("mouseover at " + (d3.event.pageX) + ", " + (d3.event.pageY))
});
```
(8) make bullets nicer
```css
li {
  font-size: 14px;
  list-style-type: none;
}
```

#### 6.2 circle dragging
solution - <http://codepen.io/novonagu/pen/jVBELX>

(1) setup our SVG style
```css
svg {
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 5px;
}
```

(2) make our circles array
```js
var circles = d3.range(20).map(function() {
  return {
    x: Math.round(Math.random() * width),
    y: Math.round(Math.random() * height),
    r: 16 + Math.random() * 24
  }
});
```

(3) draw our circles and (4) setup drag events
```js
svg.selectAll("circle")
  .data(circles)
  .enter().append("circle")
  .attr("cx", d => d.x)
  .attr("cy", d => d.y)
  .attr("r", d => d.r)
  .style("fill", (d,i) => color(i))
  .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended)
  );

function dragstarted(d) {
  d3.select(this).raise().classed("active", true);
}

function dragged(d) {
  d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
}

function dragended(d) {
  d3.select(this).classed("active", false);
}
```
#### 6.3
First let's do transition on just the body:
```js
d3.select("body")
  .transition()
    .style("background-color", "red");
```

Now we add some rectangles
```js
var rects = svg.selectAll("rect")
  .data(data)
  .enter().append("rect")
  .attr("width", 50)
  .attr("height", 50)
  .attr("y", (d,i) => 50*i)
  .style("fill", "black")
```

Now we can add mouseover
```js
function mouseover() {
  d3.select(this).transition()
    .style("fill", "black");
}
```

Now let's make it dynamic
```js
function mouseover() {
  d3.select(this).transition()
    .style("fill", d => "rgb(150, 0," + d + ")");
}
```

Now do something with `mouseout`
```js
function mouseout() {
  d3.select(this).transition()
    .attr("width", 100)
}
```
