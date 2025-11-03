let x = 10;
let y = 50;
let size = 50;

let speedX= 4;
let speedY= 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //  background
  background(200);

  
   //  Draw the square
  fill(0, 150, 255); // colour
  rect(x, y, size, size);
  
  //  Make it move
  x = x + speedX;
  y = y + speedY;
if (x < 0) {
    speedX = speedX * -1; // Bounce off left wall
  }
  // Right wall 
  if (x + size > width) {
    speedX = speedX * -1; // Bounce off right wall
  }

  // Top wall 
  if (y < 0) {
    speedY = speedY * -1; // Bounce off top wall
  }
  // Bottom wall 
  if (y + size > height) {
    speedY = speedY * -1; // Bounce off bottom wall
  }
}
