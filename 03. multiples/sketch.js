let theText = ["some", "text", "to", "display"];
let word = theText[0];
let i = 0;

function setup() {
  createCanvas (400,400);
  frameRate(2);
}


function draw(){
  background(220);

  textSize(32);
  text(word, random(400), height/2);

  word = theText[i]
  i=i +1;
  if (i>=theText.length){
    i=0;
  }
  console.log(i)
}
