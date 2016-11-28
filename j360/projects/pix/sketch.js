var img; // Declare var to hold img
var r, g, b, a;
var x, y;
var rs = 16; // rectangle size

function setup() {
    createCanvas(600, 400);
    pixelDensity(1);

    img = loadImage("orbital.jpg");
    noStroke();
}

function draw() {
    image(img, 0, 0, img.width, img.height);

    rs = ceil(map(mouseX, 0, width, 1, 16));

    loadPixels();
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            if (x % rs == 0) {
                if (y % rs == 0) {
                    r = pixels[index+0];
                    g = pixels[index+1];
                    b = pixels[index+2];
                    a = pixels[index+3];

                    fill(color(r,g,b,a));
                    rect(x, y, rs, rs);
                }
            }
        }
    }
    // updatePixels();
}