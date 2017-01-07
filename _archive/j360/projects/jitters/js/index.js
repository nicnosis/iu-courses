var bugs = []; // holds bug objects
var dRange = [5, 50]; // diameter range
var play = true; // will pause if false
const N = 50; // number of bugs

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  background(0);

  // initialize bugs
  for (var i = 0; i < N; i++) {
    bugs[i] = new Jitter();
  }
}

function draw() {
  if (play) {
    for (var i = 0; i < bugs.length; i++) {
      bugs[i].update();
      bugs[i].display();
    }
  }
}

// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.d = random(dRange[0], dRange[1]); //diameter
  this.speed = random(1, 5);

  this.cs = [random(1, 9), random(1, 9), random(1, 9)]; // scalar for rgb
  this.color = color(0);
  this.sw = random(1, 4); // strokeWeight

  this.update = function() {
    this.x += random(-this.speed, this.speed);
    this.x = constrain(this.x, 0, width);
    this.y += random(-this.speed, this.speed);
    this.y = constrain(this.y, 0, height);

    this.d += random(-this.speed, this.speed);
    this.d = constrain(this.d, dRange[0], dRange[1]);

    this.color = makeColor(this.cs);
  }
  this.display = function() {
    stroke(this.color);
    strokeWeight(this.sw);
    ellipse(this.x, this.y, this.d, this.d);
  }

  // returns a color object
  function makeColor(cs) {
    return color(frameCount * cs[0] % 255, frameCount * cs[1] % 255, frameCount * cs[2] % 255);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (var i = 0; i < N; i++) {
    bugs[i] = new Jitter();
  }
  background(0);
}

function keyPressed() {
  play = !play;
}