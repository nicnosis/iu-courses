function setup() {
  // 1 change the canvas size to 400 by 400
  createCanvas(400, 400);
  // 2 change the background to darkgray. Make sure you have quotes around the text
  background("darkgray");
}

function draw() {
  stroke("white");

  // 3 make this line go all the way across
  // hint: the end coordinates will be 400,400
  line(0, 0, 400, 400);

  // 4 change the fill color to red
  fill("red");

  // 5 make the rectangle cover the right half of the sketch
  // hint: it should start at 200, 0, and be 200 pixels wide, 400 pixels tall
  rect(200, 0, 200, 400);

  // 6 change the fill color to green
  fill("green");

  // 7 draw this ellipse at 100, 100, with a diameter of 50
  ellipse(100, 100, 50);
}
