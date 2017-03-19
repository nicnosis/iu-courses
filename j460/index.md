---
layout: home
title: J460 - Interactive Data Visualization
footer: ''
highlight: home
course: j460
---
## week 1
 * `read()` [the syllabus]({{site.baseurl}}/j460/docs/idv-syllabus.pdf)
 * `fillOut()` your Canvas profile biography
 * `register()` on both [Codecademy](https://www.codecademy.com/learn) and [Codepen](http://codepen.io/)
 * `Experienced students` Complete Mike Bostock's [let's make a bar chart](https://bost.ocks.org/mike/bar/) tutorial. Use [this](http://codepen.io/mbostock/pen/Jaemg) codepen template
 * `get()` a domain name and webhosting. Two recommended ways of doing this are:
   * Through [asmallorange.com](http://asmallorange.com) (this is less than $5 a month!)
   * Through [IU Pages](https://access.iu.edu/Accounts) accounts.

#### In Class
 * `Lesson` 1.1 - [HTML Refresher](http://codepen.io/novonagu/pen/pRyjge)
 * `Lesson` 1.2 - [d3 enter() and exit()](http://codepen.io/novonagu/pen/OWVaBz)

#### At Home
 * Make sure you have a domain/hosting for class on Wednesday.
 * `read()` [Chapter 3](http://chimera.labs.oreilly.com/books/1230000000345/ch03.html) of Scott Murray's _Interactive Data Visualization for the Web_. Yes, the whole thing.

## week 2
 * This week, we will try to ensure that everybody has hosting, and that everybody has [set up a local web server](http://chimera.labs.oreilly.com/books/1230000000345/ch04.html#_setting_up_a_web_server).

#### In Class
 * `Lesson` 2.1 - [JS Refresher](http://codepen.io/novonagu/pen/rjWQQj)
 * `Lesson` 2.2 - [Intro to SVG](http://codepen.io/novonagu/pen/jyyBow)

#### At Home
 * `read()` [Chapter 5](http://chimera.labs.oreilly.com/books/1230000000345/ch05.html)

## week 3
#### In Class
 * `Lesson` 3.1 - [Intro to Generators](http://codepen.io/novonagu/pen/VPWbwB)
 * `Lesson` 3.2 - [d3 area chart](http://codepen.io/novonagu/pen/VPbEGJ)
 * `Lesson` 3.3 - [JS function practice](http://codepen.io/novonagu/pen/VPzOXB)
 * `Lesson` 3.4 - [d3 scatter plot](http://codepen.io/novonagu/pen/BpdgQj)

#### At Home
 * `read()` w3schools: [svg path](http://www.w3schools.com/graphics/svg_path.asp)
 * `read()` w3schools: [JS Variables](http://www.w3schools.com/js/js_variables.asp)
 * `read()` w3schools: [JS Functions](http://www.w3schools.com/js/js_functions.asp)
 * `watch()` [tutorial: svg circles](https://youtu.be/eyhnHVV09MQ)
 * `if` you're using OSX, `watch()` [tutorial: OSX simple http server](https://youtu.be/_sum8fooazo)
 * Practice using your simple HTTP server
   * OSX users use terminal command `python -m SimpleHTTPServer 8888`
   * Windows users use command `py -m http.server`

## week 4
At this point, you should have:
 * A domain name with hosting
 * An HTTP server. This can be done with the `python` script in terminal. If you are a PC User who doesn't have it working, you might consider getting PHPStorm.

[PHPStorm](https://www.jetbrains.com/student/) is a fantastic editor and it's free for students. It has a built-in HTTP server.

#### In Class
 * `Lesson` 4.1 - [d3 bar chart 1](http://codepen.io/novonagu/pen/EZopqE)
 * `Lesson` 4.2 - [d3 bar chart 2](http://codepen.io/novonagu/pen/LxegGp)
 * `Lesson` 4.3 - [d3 bar chart 3](http://codepen.io/novonagu/pen/bgamoK)

#### At Home
 * `read()` Mike Bostock - [Thinking With Joins](https://bost.ocks.org/mike/join/)
 * `read()` Mike Bostock - [Introducing d3-scale](https://medium.com/@mbostock/introducing-d3-scale-61980c51545f)
 * `read()` [Chapter 7](http://chimera.labs.oreilly.com/books/1230000000345/ch07.html)

## week 5
#### In Class
 * `Lesson` 5.1 - [d3 scatter plot (iris)](http://codepen.io/novonagu/pen/wgxoOz)
 * `Lesson` 5.2 - [d3 multi-line chart with legend](http://codepen.io/novonagu/pen/bgjqRO)

#### At Home
 * `start()` [Assignment 1](docs/assignment1.html)

## week 6
#### In Class
 * `Lesson` 6.1 - [interaction - mouseover event](http://codepen.io/novonagu/pen/dNaYaq)
 * `Lesson` 6.2 - [interaction - drag event](http://codepen.io/novonagu/pen/bgzVXV)
 * `practice()` using [RAWGraphs](http://rawgraphs.io/). Use one of these datasets:
   * [iris.csv](data/iris.csv)
   * [nations.json](data/nations.json)
 * `Lesson` 6.3 - [d3 transitions I](http://codepen.io/novonagu/pen/wgOYXr)
 * `Lesson` 6.4 - [d3 transitions II](http://codepen.io/novonagu/pen/oBVQVp)

#### At Home
 * `read()` [Chapter 10](http://chimera.labs.oreilly.com/books/1230000000345/ch10.html)

## week 7
#### In Class
 * Before we start, let's take a look at [John Burn-Murdoch's version](https://bl.ocks.org/johnburnmurdoch/bcdb4e85c7523a2b0e64961f0d227154) of the health/wealth of nations scatterplot
 * We will begin working with geospatial data (maps).
   * We will begin our discussion on the topic of [map projections](https://github.com/d3/d3-geo-projection)
   * Use this data: [us.json](data/us.json)
   * Use this site for handling large [JSON](https://en.wikipedia.org/wiki/JSON) data: [jsonviewer](http://jsonviewer.stack.hu/)
   * Use this site for map prototypes: [mapstarter.com](http://mapstarter.com/)
 * `download()` - [Intro to Maps](demo/intro-to-maps.zip)

#### At Home
 * `finish()` [Assignment 1](docs/assignment1.html). Note that the due date has been extended to __Sun Feb 26th__

## week 8
#### In Class
##### Monday
 * We're going to continue exploring map-making tools. We are particularly interested in [Leaflet](http://leafletjs.com/), an open-source JavaScript mapping library.
 * You will need to go to [Mapbox](https://www.mapbox.com/studio/signup/) and register an account. This will give you an 'access token' for their map services.
 * `Lesson` 8.1 - [Intro to Leaflet](http://codepen.io/novonagu/pen/aJOXdr)

##### Wednesday
Today we're going to plot point data with Leaflet. We will need a few things...
 * Let's open [Mapbox Studio](https://www.mapbox.com/studio/) in another tab
 * `download()` [leaflet-simple-csv](https://github.com/perrygeo/leaflet-simple-csv) - this is a useful plugin for using CSV format data with Leaflet
 * `download()` [exercise files](demo/0301_exercise.zip) for today

## week 9
#### In Class
 * `visit()` [USGS Earthquake Data](https://earthquake.usgs.gov/earthquakes/feed/v1.0/csv.php)
 * `visit()` [csvjson](http://www.csvjson.com/csv2json)
 * `watch()` [The Best Stats You've Ever Seen](https://www.ted.com/talks/hans_rosling_shows_the_best_stats_you_ve_ever_seen)
 * `Lesson` 9.1 - [Bar chart refresher](http://codepen.io/novonagu/pen/jBVpbM)
 * `Lesson` 9.2 - [Drop down menu](http://codepen.io/novonagu/pen/KWNBxX)

#### At Home
 * `start()` [Assignment 2](docs/assignment2.html)

## week 10
This week, we will spend some time exploring [dimple](http://dimplejs.org/index.html), a powerful JS library that builds off of d3.

#### In Class
 * `complete()` this [informal course questionnaire](https://goo.gl/forms/lnvcey3IBm1F5c3h1)
 * `visit()` [dimple documentation](http://dimplejs.org/index.html)
 * `download()` [dimple starter files](docs/dimple-starter.zip)

