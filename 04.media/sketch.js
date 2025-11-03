let img;

function preload() {
  // The preload() function runs before setup() and draw()
  // It ensures the image is fully loaded before the sketch tries to display it.
  img = loadImage('military.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  image(img, 0, 0);
}
