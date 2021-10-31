function setup() {
  createCanvas(800, 800);
  strokeWeight(0);
}
function draw() {
  background(255, 204, 0);
  
  //background stripes
  fill('orange');
  rect(0, 0, 10, 8000);
  rect(50, 0, 10, 8000);
  rect(100, 0, 10, 8000);
  rect(150, 0, 10, 8000);
  rect(200, 0, 10, 8000);
  rect(250, 0, 10, 8000);
  rect(300, 0, 10, 8000);
  rect(350, 0, 10, 8000);
  rect(400, 0, 10, 8000);
  rect(450, 0, 10, 8000);
  rect(500, 0, 10, 8000);
  rect(550, 0, 10, 8000);
  rect(600, 0, 10, 8000);
  rect(650, 0, 10, 8000);
  rect(700, 0, 10, 8000);
  rect(750, 0, 10, 8000);
  rect(800, 0, 10, 8000);
  
  //hair
  fill('black');
  arc(400, 700, 600, 1350, radians(180), radians(0));
  rect(100, 700, 600, 300);
  
  //skin
  fill('tan');
  ellipse(400, 300, 400, 450);

  //eye shapes
  fill('grey');
  arc(320, 330, 70, 70, radians(180), radians(0));
  arc(480, 330, 70, 70, radians(180), radians(0));
  
  //nose + mouth
  fill('pink');
  arc(400, 440, 70, 35, radians(0), radians(180));
  triangle(380, 390, 400, 280, 420, 390);
  
  //bangs
  fill('black');
  arc(400, 300, 430, 500, radians(180), radians(0));
  
  //eye smiles
  fill('tan');
  arc(320, 330, 30, 30, radians(180), radians(0));
  arc(480, 330, 30, 30, radians(180), radians(0));
  
  //bangs Separated
  triangle(235, 300, 240, 300, 238, 220);
  triangle(290, 300, 300, 300, 295, 170);
  triangle(380, 300, 386, 300, 383, 200);
  triangle(440, 300, 446, 300, 443, 160);
  triangle(470, 300, 478, 300, 474, 180);
  triangle(550, 300, 558, 300, 554, 230);
  
  //neck
  rect(355, 500, 90, 130);
  
  //shirt
  fill('brown');
  arc(400, 920, 600, 600, radians(180), radians(0));
  
  // turtleneck
  fill('white');
  arc(400, 630, 150, 120, radians(0), radians(180));
  rect(325, 560, 150, 70);
  
  //freckles left
  ellipse(300, 360, 5, 5);
  ellipse(320, 380, 5, 5);
  ellipse(283, 384, 5, 5);
  ellipse(360, 370, 5, 5);
  ellipse(340, 354, 5, 5);
  ellipse(343, 385, 5, 5);
  
  //freckles right
  ellipse(505, 385, 5, 5);
  ellipse(490, 354, 5, 5);
  ellipse(518, 370, 5, 5);
  ellipse(445, 384, 5, 5);
  ellipse(485, 380, 5, 5);
  ellipse(457, 360, 5, 5);
}
