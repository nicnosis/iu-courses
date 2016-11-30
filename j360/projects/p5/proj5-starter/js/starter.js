var NUMANGLES = 10; // number of angles
var angles = new Array(NUMANGLES); // make an array to hold all our angles
var r; // radius of central circle
var i; // counter
var speed = 1; // speed of central angle
var hue = 0; // will hold our hue (color) value, ranging from 0 to 360
var tracing = false; // if true, we will trace the canvas
var paused = false; // if true, animation will stop

function setup() {
  createCanvas(400, 400);
  noFill();
  r = height / 4;
  angleMode(DEGREES);
  colorMode(HSB); // hue-saturation-brightness
  for (var i = 0; i < angles.length; i++) {
    angles[i] = 90; // all angles initialize north
  }
}

function draw() {
  if (!paused) {
    // map mouseX to hue
    hue = map(mouseX, 0, width, 0, 360);
    // map mouseY to speed
    speed = map(mouseY, 0, height, -4, 4);

    if (!tracing) {
      background(0, 0.1);
    }

    push(); // 1
    translate(width / 2, height / 2); // move to center of canvas

    for (var i = 0; i < angles.length; i++) {
      var _r = r / (i + 1); // radius for the circle we're drawing
      rotate(angles[i]); // rotate circle

      if (!tracing) {
        stroke(60, 0.25);
        ellipse(0, 0, _r * 2, _r * 2);
      }

      push(); // 2
      translate(0, _r); // move to angle edge
      fill(hue, 100, 100, 0.5);
      ellipse(0, 0, 6, 6); // draw a tiny circle
      pop(); // 2

      translate(0, _r); // move into position for next circle
      angles[i] = angles[i] + speed + (speed * i * .8) % 360;
    }
    pop(); // 1
  }
}