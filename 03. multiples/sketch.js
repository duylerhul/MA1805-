let theText = ["some", "Text", "To", "Display"];
let word = theText[0];
let i = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(2); // The sketch updates 2 times per second
}

function draw() {
  background(220);

  // The text display
  textSize(50);
  // Displays the current 'word' at a random X position and the center Y position
  text(word, random(400), height / 2);

  // Change the value of word
  // 1. Get the next word from the list
  word = theText[i];
  
  // 2. Advance the index (i)
  i = i + 1;
  
  // 3. Check if the index is out of bounds and reset it (loop back to the start)
  if (i >= theText.length) {
    i = 0;
  }
  
  // console.log(i); // This line logs the index to the console
}
