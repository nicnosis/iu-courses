var R = 15; // radius of ellipse

// Used these to make your lines and constrain your ellipse
var leftWall = 100;
var rightWall = 200;
var topWall = 100;
var bottomWall = 200;

var cx; // use to constrain x position of ellipse
var cy; // use to constrain y position of ellipse

// map this to mouseX value
// you should use 0 and width as input values, 0 and 255 as output
var red = 0; 

// map this to mouseY value
// you should use 0 and height as input values, 0 and 255 as output
var blue = 0; 

function setup() {
  createCanvas(300, 300);
  stroke (255); //white stroke
}

function draw() {
  // use the map() method with red and blue variables.
  red = map (mouseX, 0, width, 0, 255); //keep
  blue = map (mouseY, 0, height, 0, 255);
  
  
  background(0); //black background
  // background(red, 0, blue);
  background(red, 0, blue);
  
  fill (127); //grayish color
  rect(100, 100, 100, 100); // keep
  
  line(leftWall, 0, leftWall, height); //keep
  line(rightWall, 0, rightWall, height);
  line(0, topWall, width, topWall); // keep
  line(0, bottomWall, width, bottomWall);
  
  // draw ellipse
  // cx = constrain(mouseX, lower limit, upper limit);
  // cy = constrain(mouseY, lower limit, upper limit);
  cx = constrain(mouseX, leftWall + R, rightWall - R);
  cy = constrain(mouseY, topWall + R, bottomWall - R);
  
  // you will have to change mouseX and mouseY
  // ellipse(mouseX, mouseY, R*2, R*2); // keep
  fill(255); // white
  ellipse(cx, cy, R*2, R*2);
}