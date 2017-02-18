---
layout: default
title: J360 - Project 2
footer: ''
highlight: 'assignments'
course: j360
---
# Project 2 - Bootstrap
## Description
You will create a basic portfolio site using Bootstrap. Apply your knowledge of HTML, CSS, and the Bootstrap framework to create an attractive and functional portfolio. Your site will feature four main sections:

* `Jumbotron` - Header area made with bootstrap's `jumbotron` class
* `About` - A picture of you with a brief description of your experience and the services you provide
* `Carousel` - A gallery with images of work you have created
* `Contact` - A contact section with a form

### Emmet
Your workflow will be greatly accelerated if you use [Emmet](http://emmet.io) for SublimeText. If you are using another editor and want to use Emmet, contact me and I can help you set it up.

You should watch these tutorials by Adi Purdila before beginning:

* [Introducing Emmet Syntax](https://www.youtube.com/watch?v=83krBnWfUNY)
* [Building Bootstrap with Emmet](https://www.youtube.com/watch?v=z3d4u4Wnkdc)

## Demo
I cannot provide a live website of what your project should look like, as that would enable you to appropriate the source code. Instead, I've uploaded a demo to YouTube:

Watch - [Project 2 Demo](https://youtu.be/Yb5pd1-QYGI)

## Starter Files
Use this to start with - [Project 2 Starter Files](../../legacy/j360/projects/p2/project2-starter.zip)

## Components
### Jumbotron
Here, you will need to make a `<div>` with the class "jumbotron"
Inside that div, make a div with the classes "container" and "text-center"
    Inside that container, put an `<h1>` with your site name, and a
    `<p>` with one sentence about your site

See - [Bootstrap components - jumbotron](https://getbootstrap.com/components/#jumbotron)

### About
You will make a `<div>` with class "page-header" and id "section-about"
Inside that div, make an `<h2>` that says "About"

Your syntax might look something like this:

```html
<h2>About. <small>Get to know me!</small></h2>
```

Below that, make a row with two columns.
The first column will be a div with class '`col-lg-4`'.  
Inside this column, use the img tag to insert a picture.
Choose an image of appropriate dimensions (not too big/small/wide) and make sure that that img has the classes "img-responsive" and "img-rounded". A good image size would be about 400x400 pixels.

The second column will be a div with class '`col-lg-8`'.  
Inside this column, put a lorem ipsum or a description of yourself.
You may reuse the text from the first part of the project.

To make your row and columns, the syntax might look something like this:

```html
<div class="row">
	<div class="col-lg-4">
		...
	</div>
	<div class="col-lg-8">
		...
	</div>	
</div>
```
### Carousel
You will make a carousel gallery with three images. This can be easily adapted for any portfolio pieces you want to insert.

Here's two examples of implementation:

* Example 1 [W3 Schools](http://www.w3schools.com/bootstrap/bootstrap_carousel.asp)
* Example 2 [Tutorial Republic](http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-carousel.php)

I don't care what kind of carousel you use - as long as it has three images and cycles through them correctly. Use the three images in the included 'images' folder.

To receive full credit, your gallery must have left/right buttons that allow you to cycle through the images correctly.

### Contact
As the contact forms can be complicated, much of the code is provided for you in the starter file. You will need to create a `<textarea>` for the contact form.

Your `<textarea>` should have these attributes:

    name="contact-message"
    id="contact-message"
    class="form-control"
    and give it the placeholder text "Message"

W3 Schools has [a useful example](http://www.w3schools.com/tags/tag_textarea.asp) on textareas. If you scroll down, you will see the `attributes` defined in a table.

Note that this contact form will not be functional; it is just for display purposes.

## Grading
In grading, you are awarded points for:

* Proper use of HTML tags and classes
* Proper positioning of elements (e.g., correct column sizes)
* Responsive-friendly design (it should work on smaller displays)
* Readability and organization of code - indent properly!

|Component|Points |
| ---     |-----: |
| Jumbotron | 25 |
| About | 25    |
| Carousel | 25    |
| Contact | 25    |
|**Total**|**100**|

## Submission
After you are done writing code, you can upload the entire folder to your site. The best way is to drag and drop the entire folder.

Submit the link to your assignment on Canvas.

#### **Due Friday 3/10 at 11:59pm**