---
layout: default
title: Procedural Art - Homework Two
footer: ''
highlight: 'assignments'
term: 'fa19'
course: 'pro'
---
# Homework Two --- <small>Interface Controller</small>
## Description
You will use [dat.GUI](https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage) to create an interface that you use to control a p5 sketch.

## Starter Pen
Fork this starter pen 

<div class="card-block">
  <p class="card-text">Starter Pen for Homework Two.</p>
  <a href="https://codepen.io/novonagu/pen/vYBajXq" class="btn btn-primary text-white" target="_blank">View Pen</a>
</div>

## View Demo
<div class="card-block">
  <p class="card-text">Your goal is to match this demo.</p>
  <a href="hw2-demo.html" class="btn btn-primary text-white" target="_blank">View Demo</a>
</div>

## Stuff you have to do
 * Add the necessary properties to `Options`:
   * `this.x`, initialize it at 50
   * `this.d`, initialize it at 10
   * `this.speed`, initialize it at 0.05. This is the amount that gets added to the global variable `angle` which determines each ellipse's angular position
   * If you are doing extra credit, you can create `this.paused` and set it to false
 * In `setup` you need to use `gui.add` to add your options
   * `x` should be between 0 and 100
   * `d` should be between 5 and 50
   * `speed` should be between -0.5 and 0.5
 * Add this point you might find it helpful to type `ops` in the console to see the options object and its properties
 * When you draw your ellipses, replace the static numbers with `ops.x` or `ops.d`
 * When adding to `angle` you should use `ops.speed`
 * If doing extra credit, use `!ops.paused` (meaning, ops.paused is false) to control whether or not angle is incremented. 


## Submit to Canvas
Submit your Codepen URL to `Canvas > Assignments > Unit One > HW2`

#### **Due Sunday September 29th @ 11:59pm**