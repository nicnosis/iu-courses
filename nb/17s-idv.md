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

#### 6.4
solution:
```js
var rects = svg.selectAll("rect")
  .data(data)
  .enter().append("rect")
  .attr("width", barWidth)
  .attr("height", height)
  .attr("x", (d,i) => i * barWidth)
  .attr("fill", "blue")
  .on("mouseover", mouseover)
  .on("mouseout", mouseout)

function mouseover() {
  d3.select(this).transition()
    .duration(100)
    .attr("height", height/2)
    .attr("y", height/2)
    .attr("fill", "skyblue")
}
function mouseout() {
  d3.select(this).transition()
    .attr("height", height)
    .attr("y", 0)
    .attr("fill", "blue")
}
```

lastly css
```css
rect {
  shape-rendering: crispEdges;
}
```

## week 7
#### 7.1 maps
solution <https://bl.ocks.org/mbostock/19ffece0a45434b0eef3cc4f973d1e3d> ok

```
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

d3.json("us.json", function(error, us) {
  if (error) throw error;

  var conus = topojson.feature(us, {
    type: "GeometryCollection",
    geometries: us.objects.states.geometries.filter(function(d) {
      return d.id !== 2 // AK
        && d.id !== 15 // HI
        && d.id < 60; // outlying areas
    })
  });

  // ESRI:102004
  var path = d3.geoPath()
      .projection(d3.geoConicConformal()
          .parallels([33, 45])
          .rotate([96, -39])
          .fitSize([width, height], conus));

  svg.append("path")
      .datum(conus)
      .attr("d", path);
});

```

## week 8
#### 8.1
My solution: <http://codepen.io/novonagu/pen/evNZRa>

One solution: <http://codepen.io/gvenech/pen/rVaLBW?editors=0010>

#### leaflet simple csv thing
 * Download files
 * open starter folder
 * make config.js
 * fire it up - no basemap!
 * let's open up mapbox studio and get our baseurl

adding markers
```
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon:L.icon({
                iconUrl: './js/map/marker.png',
                shadowUrl: './js/map/marker-shadow.png',
                iconSize: [41,41],
                shadowSize:   [25, 25], // size of the shadow
                shadowAnchor: [12,-12]
            })
        });
    },
```

changing markerCluster colors
```
.marker-cluster-small {
	background-color: rgba(255, 177, 159, 0.6);
}
.marker-cluster-small div {
	background-color: rgba(255, 177, 159, 0.6);
}

.marker-cluster-medium {
	background-color: rgba(255, 146, 113, 0.6);
}
.marker-cluster-medium div {
	background-color: rgba(255, 146, 113, 0.6);
}

.marker-cluster-large {
	background-color: rgba(255, 99, 44, 0.6);
}
.marker-cluster-large div {
	background-color: rgba(255, 99, 44, 0.6);
}
```

## week 9
#### 9.1
bar chart refresher

solution:
```js
var data = [{
  name: "A",
  value: 4
}, {
  name: "B",
  value: 2
}, {
  name: "C",
  value: 5
}, {
  name: "D",
  value: 1
}, {
  name: "E",
  value: 3
}];

var svg = d3.select("svg")
  .attr("width", 200)
  .attr("height", 200);

var x = d3.scaleLinear()
  .range([0, 200])
  .domain([0, d3.max(data, d => d.value)]);
var y = d3.scaleBand()
  .range([200, 0])
  .domain(data.map(d => d.name))
  .padding(0.1);

var bars = svg.selectAll(".bar")
  .data(data)
  .enter().append("rect")
  .attr("class", "bar")
  .attr("fill", "teal")
  .attr("x", 0)
  .attr("y", d => y(d.name))
  .attr("width", d => x(d.value))
  .attr("height", y.bandwidth());
```

#### 9.2
[almighty solution](http://codepen.io/novonagu/pen/MpbqpZ)

 * [Select helper function from un-viz](https://github.com/novoNagu/un-viz-2016/blob/master/js/helpers.js)
 * [Dynamic Scatter plot based on Select input](http://bl.ocks.org/jfreels/6871643) jfreels
 * [Create an HTML select box using d3.js and create a paragraph referencing the selection](http://bl.ocks.org/jfreels/6734823) by jfreels

##### add mouse interactivity
```js
var bars = svg.selectAll(".bar")
  .data(data)
  .enter().append("rect")
  .attr("class", "bar")
  .attr("fill", "teal")
  .attr("x", 0)
  .attr("y", d => y(d.name))
  .attr("width", d => x(d.value)).attr("height", y.bandwidth())
  .on("mouseover", mouseover)
  .on("mouseout", mouseout)

function mouseover(d) {
  d3.select(this).transition().attr("fill", "blue")
}
function mouseout(d) {
  d3.select(this).transition().attr("fill", "teal")
}
```

##### add select
Next, make a `select` and populate with some options.
 * Adjust select by setting `display: block` in css

##### populating select menu
```js
var options = d3.select("#dd")
  .selectAll("option")
  .data(data)
  .enter().append("option")
  .attr("value", d => d.name)
  .text(d => d.name)
```

##### adding change function

## week 10
begin with course questionnaire

#### dimple single line chart
(1) students download starter, which includes
 * index.html
 * single-line.csv
 * stocks.csv

(2) Make a #chart div and an `svg` style rule, set `background-color: #eee;`

(3) bring in script tags
```
    <head>
      <script src="http://d3js.org/d3.v4.min.js"></script>
      <script src="http://dimplejs.org/dist/dimple.v2.3.0.min.js"></script>
    </head>
```

(4) make a chart container
```
    var svg = dimple.newSvg("#chart", 600, 400);
```

(5) load up data and spit it to console
```js
d3.csv("single-line.csv", function(data) {
//        window.dataset = data;
    console.log(data);
});
```

(6) finish it
```js
    d3.csv("single-line.csv", function(data) {
//        window.dataset = data;
        console.log(data);
        var myChart = new dimple.chart(svg, data);
        myChart.setBounds(60, 30, 505, 305);
        var x = myChart.addCategoryAxis("x", "date");
        x.addOrderRule("Date");
        myChart.addMeasureAxis("y", "close");
        var s = myChart.addSeries(null, dimple.plot.line);
        myChart.draw();
    });
```

(7) fix the x axis label
```
myChart.setBounds(60, 30, 505, 290);
```

(8) let's look at documentation to fix axis label font size
```js
var svg = dimple.newSvg("#chart", 600, 400);
d3.csv("single-line.csv", function(data) {
//        window.dataset = data;
    console.log(data);
    var myChart = new dimple.chart(svg, data);
//        myChart.setBounds(60, 30, 505, 305);
    myChart.setBounds(60, 20, 505, 290);

    var x = myChart.addCategoryAxis("x", "date");
    x.addOrderRule("Date");
    x.fontSize = "12";

    var y = myChart.addMeasureAxis("y", "close");
    y.fontSize = "12";

    var s = myChart.addSeries(null, dimple.plot.line);
    myChart.draw();
});
```

#### dimple scatter
We can duplicate our single-line.html file and reuse a lot of the code. Let's start here:

```js
var svg = dimple.newSvg("#chart", 600, 400);
d3.csv("iris.csv", function(data) {

});
```

Let's get to here:
```js
var svg = dimple.newSvg("#chart", 600, 400);
d3.csv("iris.csv", function(data) {
    console.log(data);
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 500, 330); // x,y: 60, 30, width 500 height 330
    myChart.addMeasureAxis("x", "sepal_width"); // linear
    myChart.addMeasureAxis("y", "sepal_length"); // linear
    myChart.draw();
});
```

We can't see anything, so we add in a series:
```js
    myChart.addSeries(["species"], dimple.plot.bubble);
    myChart.draw();
```

Still not much, so we need to add a unique identifier...

```js
var svg = dimple.newSvg("#chart", 600, 400);
d3.csv("iris.csv", function(data) {
    data.forEach(function(d, i) {
        d.id = i;
    });
    console.log(data);
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 500, 330); // x,y: 60, 30, width 500 height 330
    myChart.addMeasureAxis("x", "sepal_width"); // linear
    myChart.addMeasureAxis("y", "sepal_length"); // linear
    myChart.addSeries(["id", "species"], dimple.plot.bubble);
    myChart.draw();
});
```

#### Activity: Dimple stocks
(1) have everybody download starter files; open Finance in another tab

(2) Stocks we are interested in:
 * VHT - Vanguard Healthcare
 * LMT - Lockheed Martin

(3) Download both in Excel, make a "Symbol" column and set the symbols for both, combining them into one sheet. Move it into your dimple folder

(4) Duplicate your "single-line.html" file and call it "stocks.html". Open it in your editor

(5) let's get here
```js
var svg = dimple.newSvg("#chart", 600, 400);
d3.csv("stocks.csv", function(data) {
    console.log(data);
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 505, 290);
    var x = myChart.addCategoryAxis("x", "Date");
    var y = myChart.addMeasureAxis("y", "Close");
    myChart.addSeries("Symbol", dimple.plot.line);
    myChart.draw();
});
```

(6) solution
```js
var svg = dimple.newSvg("#chart", 600, 400);
d3.csv("stocks.csv", function(data) {

    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 505, 290);
    var x = myChart.addTimeAxis("x", "Date", "%d-%b-%y", "%m/%d/%Y")

    myChart.addMeasureAxis("y", "Close");
    myChart.addSeries("Symbol", dimple.plot.line);
    myChart.addLegend(60, 10, 500, 20, "right");
    myChart.draw();
    x.shapes.selectAll("text").attr("transform", "rotate(60)");
});
```