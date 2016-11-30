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
    // map mouseX to hue
    // map mouseY to speed

    // if tracing, { set background (0, 0.1) }. This will set a black background with 10% opacity

    // first push
    // use translate move to center of canvas

    // begin for loop. i gets 0, i less than angles.length, i plus plus
    // {

        // this is where our main loop occurs
        var _r; // radius for the circle we're drawing. you will assign it the value r/(i+1)
        //use rotate() with the angle at index `i` of the angles array

        // if we are tracing {
            // set stroke(60, 0.25). this is a dark gray stroke with 25% opacity
            // draw an ellipse at (0, 0) with width and height of _r * 2
        // end if }

        // start second push
        // use translate with _r to move to angle edge
        // use fill, providing four values: hue variable, 100 saturation, 100 brightness, and 50% opacity

        // draw a tiny ellipse at (0, 0)
        // pop to end second push

        // use translate with _r to move into position for next circle

        // the below line will set up the next angle - just leave it
        angles[i] = angles[i] + speed + (speed * i * .8) % 360;
    // end for loop }

    // pop to end first push

}