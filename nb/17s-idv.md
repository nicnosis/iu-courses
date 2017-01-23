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
### M 17.01.07
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


### W 01.11
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
### W 01.18
+ 2.1
+ 2.2
+ setting up local server

#### 2.1
talk about array.length, array.push(),talk about Math.methods

#### 2.2
https://bost.ocks.org/mike/circles/

```js
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
### M 01.23



