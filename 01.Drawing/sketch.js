function setup() {
  
  createCanvas(400, 400);

}

function draw() {
  
  background(300); 
  
  //  coordinates for the center of the face
  let centerX = 200;
  let centerY = 200;
  
  // Set the color for the face
  fill(255, 204, 51); // Bright yellow
  
  // Draw the main face circle
  ellipse(centerX, centerY, 200, 200);

  // Blushing Cheeks
  fill(255, 150, 150, 150); // pink
  ellipse(centerX - 60, centerY + 20, 30, 15);
  ellipse(centerX + 60, centerY + 20, 30, 15);
  
  // Facial Features 
  
  // Set the color for the eyes and mouth features
  fill(50); // Dark color 
  
  // Left Eye 
  arc(centerX - 45, centerY - 25, 40, 40, radians(180), radians(360), CHORD); // Use CHORD to fill the shape
  
  // Right Eye 
  arc(centerX + 45, centerY - 25, 40, 40, radians(180), radians(360), CHORD);
  
  // Smile 
  arc(centerX, centerY + 40, 80, 50, radians(0), radians(180), CHORD);

  // Hands and Feet
  
  // Define the skin tone for the hands and feet
  let skinTone = color(255, 224, 189);
  fill(skinTone);
  
  // Left Hand
  ellipse(centerX - 70, centerY + 120, 80, 40);
  
  // Right Hand
  ellipse(centerX + 70, centerY + 120, 80, 40);
  
  // Left Foot
  ellipse(centerX - 40, centerY - 120, 50, 30);
  
  // Right Foot 
  ellipse(centerX + 40, centerY - 120, 50, 30);
  
}