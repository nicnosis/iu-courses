---
layout: default
title: J460 - Assignment 3
footer: ''
highlight: 'assignments'
course: j460
---
# Assignment 3 + elective
## Description
I have chosen to __combine__ the `elective assignment` with assignment 3. This way, we will be able to take our time and you can produce a quality portfolio piece without feeling rushed or anxious.

For assignment 3, you will find and prepare your own data, make a visualization, and add a short write-up about the experience. The purpose of this assignment is to make a compelling and attractive portfolio piece and give you some independence as an aspiring data viz practitioner.

__Don't freak out!__ I will be helping you every step of the way. Since this assignment is more free-form and open-ended, I will use more class time to work with individuals. You are expected to come up with the idea and find some data, but I am more than willing to help you along the way (especially on code-related material).

Important to note is that you **do not necessarily have to use d3.js** for this assignment. You may find it helpful to use other tools that are less programming-intensive such [Tableau](https://www.tableau.com/academic/students). I want you to produce an interactive visualization project; how you do it is less important.

The main steps to this assignment are:

1. Come up with an idea and create a project plan
2. Find your data
3. Choose an appropriate visualization (e.g., bar chart, scatterplot, map)
4. Work on your assignment
5. Create a write-up/analysis for this project that details your process and experience

#### Where do I start?
__Read this whole document, then read it again.__ You have plenty of time for this assignment, so relax and take your time in coming up with ideas and getting data.

## Part 1 - Get your idea
Coming up with an outline/plan/idea will make everything significantly easier. If you spend time getting good data and writing out a plan for this project, the execution phase will be much easier. Remember that the more information you have, the more I can help. I am happy to find examples and links that may assist you in your endeavors. If you submit your idea very late in the semester, or you haven't given much thought to it, I will be less inclined to help.

First, download the starter files for this project:

<a class="btn btn-secondary" href="viz-starter.zip" target="_blank">download starter files</a>

Then, you'll notice there's a file called `plan.html`. This is where you will go about detailing the plan for your project. This will not only make it easier to get started, but also help you in your `writeup` at the end. Remember that employers are interested in seeing your creative process.

#### Questions to answer
__First__, tell me what your broad topic is, (e.g., sports, health, politics)

__Then__, tell me what specific questions you are looking to answer. E.g., "Which countries have the highest alcohol consumption per capita?" "How many Playstation 4 units have been sold?" "Where do the most traffic accidents occur?"

__Next__, tell me what kind of visualizations you plan to use. E.g., a line chart that shows number of Netflix viewers over time

__Finally__, provide a list of links/resources that you plan to use in building your project. For instance, you might link to a page where you found a `csv` file that you can use to build a bar chart, or an article that talks about the subject you're researching.

Remember that this project will be __much easier__ if it's something that you care/know about. For example, if you are interested in sports, you might be able to find some data related to the subject. If you are researching pollution and emissions for another class, you might want to create a visualization on the subject.

## Part 2 - Finding data
#### Getting the right data
 * __What you want__ - CSV, TSV, and JSON files that you can just load in and start visualizing
 * __What you don't want__ - Messy, poorly formatted data; PDF files; HTML tables; anything where you have to do significant work in copying/pasting/rearranging data
 * __A useful strategy__ is to look at example visualizations, perhaps on [b.locks](https://bl.ocks.org/) and take a look at the type of data they used. E.g., if you find a bar chart example where the dataset looks similar to the data you have, then a bar chart might be a good choice.

#### Where to find data
I have added a `datasets` section to the site. Check the link below.

Make sure that you __take your time__ finding data; if you are thorough and methodical in your selection of data it will actually make the project a lot easier and less time-consuming.

<a class="btn btn-secondary" href="../datasets.html" target="_blank">view datasets</a>

#### IU Research Help
If you still find this assignment daunting, you might benefit from [scheduling an appointment](https://libraries.indiana.edu/consult) with an IU research assistant.

## Part 3 - Choosing a visualization
At this point, you want to have some idea of how you will bring your data into a visualization. You might say something like, "I want to visualize world population with a choropleth map," or, "I want to show infant mortality rates over time with a line chart." Once you have a concrete idea like this, it's just a matter of finding some starter code and fitting your data into it.

[This article](https://eazybi.com/blog/data_visualization_and_chart_types/) is a great starting point.

Some questions to think about:

 * Are you showing change over time? A line chart (such as the stock market example we did) might be a good fit
 * Are you comparing parts of a whole? A stacked bar chart might work nicely
 * Is location important? You might consider using a map
 * How can I encode numbers/information? For example, for assignment 1 you encoded information with x and y position, radius, and color.

#### Tools
You may use any number of tools, including d3.js.

A good way to generate quick prototypes is to use [RAWGraphs](http://rawgraphs.io/) - this will give you an idea of what kind of visualizations will/won't work for your dataset. You can also check out [d3 builder](https://my.infocaptor.com/free_data_visualization.php) - this allows you to upload a CSV and work in the browser.

Here are some viz tools you might consider:

 * [dimple](http://dimplejs.org/)
 * [c3](http://c3js.org/) - Make sure you are using __d3.v3__. Version 4 won't work
 * [highcharts](http://www.highcharts.com/demo)
 * [Tableau](https://www.tableau.com/academic/students)

#### Examples
I've created a page with links to several examples, including some starter code.

__You are allowed__ to use others' code and modify it for your own use, as long as you credit it somewhere on your page. You should also mention your data sources.

<a class="btn btn-secondary" href="../examples.html" target="_blank">view examples</a>

## Part 4 - Work
The sooner you get a dataset and idea, the better. You are expected to make progress on a regular basis. I will be doing less lecturing, and more helping individuals in class. This means that if you don't come to class prepared, with your progress on this assignment, I won't be able to help.

## Part 5 - Write-up
This part exists to show people your process and experience in creating a visualization. Spending some time on the write-up will differentiate you from other students. A good write-up conveys to employers that:

1. You are methodical and detail-oriented in your work
2. You care about the process of your work and not just the outcome
3. You have a skillset that can produce the same quality of work

#### Stuff to discuss in your write-up

1. How you started; your research process
2. Examples/tools/links you looked at that were helpful, or anything that inspired you
3. Challenges you overcame, and lessons you learned
4. What you might have done differently next time

__Make sure__ you give credit to any code referenced, and any data sources.

## Requirements
Your project must have:

1. Your project plan, `plan.html`
2. At least one visualization. More would be great. If you are doing fewer visualizations, then you are expected to produce more writing.
3. Basic web page styling - Nothing fancy here, but you might want to add in a nicer font using CSS
4. A write-up that details your process, lessons learned, and challenges you overcame.
5. Attribution for any code referenced, and any data used.

Aside from this, the project is open-ended. If you want to do more writing, or introduce other material such as image galleries, videos, or anything of the sort, that's totally fine.

## Grading
* __Ideation__ - Did you spend time reviewing and analyzing examples? Is your idea actionable? You will be awarded more points if it is evident that you took time to brainstorm and think about your project before beginning.
* __Rigor__ - This means the perceived level of difficulty for this project - it should be challenging, but realistic given the time frame. Is this project challenging for your level of skill? Is your project a carbon copy of somebody else's work, or did you innovate and make changes?
* __Aesthetics__ - Your project should be polished, presentable, and have the level of quality that an employer or client might expect.
* __Technical Skill__ - This means your HTML/CSS/JavaScript knowledge.
* __Code Quality__ - Your code should be well organized. Did you indent your code properly? Are your variable names sensible and self-descriptive? Is your code thoroughly commented? Others should be able to look at your code and build off of it. Your project should follow conventions covered in class and be free of error-prone or unnecessary code.
* __Writeup__ - Your writeup should give the reader an idea of what you went through to create this project. This is the kind of thing that will differentiate you from others and make you more attractive to employers.

## Submission
You will submit two things: Your project plan, and your final project. Both can be submitted via Canvas.

Your `project plan` is due __Friday, April 7th at 11:59pm__

Your `final project` is due __Friday, May 5th at 11:59pm__