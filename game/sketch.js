var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState = "L1";
var img;

function preload() {
img = loadImage('https://jordynak.github.io/images/fly.png');
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textSize(20);
  
}//end setup ==========


function draw() {
  
  background(220);
if (gameState == "L1"){
levelOne();
}
if (gameState =="L2"){
    levelTwo();
}
if (gameState =="L3"){
    levelThree();
}
  if (gameState =="L4"){
    levelFour();
}
    if (gameState =="L5"){
    levelFive();
}
    
  
text(("Score:"+ score), width/2, 40);
} // end draw ==========
  

function levelOne(){
  
      // R, G & B integer values
background(78, 163, 208);

 text("level 1", width/2, height-20)
var distToBall = dist(ballx, bally, mouseX, mouseY);
  
if (distToBall<ballSize/2){
ballx = random(width);
bally = random(height);
score = score +1;
} //if distToBall
  
  if(score>=5) {
  gameState ="L2";

}
  
//ellipse(ballx, bally, ballSize,ballSize);
  image(img,ballx, bally, ballSize, ballSize);
  
line(ballx+ballSize/3, bally+ballSize/3, mouseX, mouseY);
  
} //end level one ==========


function levelTwo(){
  
      // R, G & B integer values
background(62, 128, 162);

  text("Level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
    ballx=random(width);
    bally=random(height);
    score = score +1
  }
  if (score>=10){
 gameState = "L3"
   background(255);
  }
  // line(ballx, bally, mouseX, mouseY);
  
  //ellipse(ballx, bally, ballSize,ballSize);
  image(img,ballx, bally, ballSize, ballSize);
  
  } //end level two ==========
  
  
function levelThree(){
  
      // R, G & B integer values
background(45, 91, 114);

  text("Level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
    ballx=random(width);
    bally=random(height);
    score = score +1
    // ballSize= ballSize -1;
  }
 if (score>=20){
   gameState = "L4"
// background(random(255));
}
  
  // line(ballx, bally, mouseX, mouseY);
  
//ellipse(ballx, bally, ballSize,ballSize);
  image(img,ballx, bally, ballSize, ballSize);
  
  } //end level three ==========

  
function levelFour(){
  
      // R, G & B integer values
background(31, 62, 78);

  text("Level 4", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
    ballx=random(width);
    bally=random(height);
    score = score +1
    // ballSize= ballSize -1;
  }
 if (score>=30){
   gameState = "L5"
// background(random(255));
}
  
  // line(ballx, bally, mouseX, mouseY);
  
//ellipse(ballx, bally, ballSize,ballSize);
  image(img,ballx, bally, ballSize, ballSize);
  
  } //end level four ==========


function levelFive(){
  
      // R, G & B integer values
background(17, 34, 43);

  text("Level 5", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
    ballx=random(width);
    bally=random(height);
    score = score +1
    ballSize= ballSize -1;
  }
 //if (score>=45){
  // gameState = "L6"
// background(random(255));
//}
  
  // line(ballx, bally, mouseX, mouseY);
  
//ellipse(ballx, bally, ballSize,ballSize);
  image(img,ballx, bally, ballSize, ballSize);
  
  } //end level five ==========

