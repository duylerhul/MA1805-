let rgb = (255.0/0);
let words = ( "what", 
  "are",
   "array",
  "duy")
let select = 0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(30,30,50);
  triangle(30,20,40,50,90,10);
  circle( 100, 20, 40);
}

if ( select == 0 ){
  rgb = (255,0,0);
 } else {
  rgb = (0, 255, 0);
 }


  fill (rgb)
  let i=i;
  while(i<400) {
    let r = random(50);
    curcle(i, i+300, r); 
    i++;
  }
{
  textSize(30);
  text (select, 60, 50)
  text (words(1), 100,100);
}
function mouseClicked9() {
  if (select == 0) {
    slect = 1;
  } else {
select =0 ; 
  }
  return false; 
}
  
