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