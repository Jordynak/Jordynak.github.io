var giraffe;
var turtle;
var snail;
var bird;
var penguin;
var bow;
var watch;
var eyeglass;
var hat;
var mustache;
var grass;
var initials ='jk';
var choice = '1'; 

function preload() {
   giraffe = loadImage('gentlemen/giraffe.png');
   turtle = loadImage('gentlemen/turtle.png');
   snail = loadImage('gentlemen/snail.png');
   bird = loadImage('gentlemen/bird.png');
   penguin = loadImage('gentlemen/penguin.png');
   bow = loadImage('gentlemen/bow.png');
   watch = loadImage('gentlemen/watch.png');
   eyeglass = loadImage('gentlemen/eye.png');
   hat = loadImage('gentlemen/hat.png');
   mustache = loadImage('gentlemen/mustache.png');
   grass = loadImage('gentlemen/grass.png');
}

function setup() {
createCanvas(700, 500);
background(0, 128, 255);

}

function draw() {
  if (keyIsPressed) {
    choice = key;
    clear_print();
  }
  if (mouseIsPressed){
    newkeyChoice(choice);
  }
}
function newkeyChoice(toolChoice) {

 if (toolChoice == '1' ) {
 image(giraffe, mouseX, mouseY, 50, 50);
    
 } else if (toolChoice == '2') {
 image(turtle, mouseX, mouseY, 50, 50);
  
 } else if (toolChoice == '3') {
image(snail, mouseX, mouseY, 50, 50);
  
} else if (toolChoice == '4') {
image(bird, mouseX, mouseY, 50, 50);
  
} else if (key == '5') {
image(penguin, mouseX, mouseY, 90, 90);
  
} else if (toolChoice == '6') {
image(bow, mouseX, mouseY, 20, 20);
  
} else if (toolChoice == '7') {
image(watch, mouseX, mouseY, 20, 20);
 
} else if (toolChoice == '8') {
image(eye, mouseX, mouseY, 20, 20);
  
} else if (toolChoice == '9') {
image(hat, mouseX, mouseY, 20, 20);
  
} else if (toolChoice == '0') {
   image(mustache, mouseX, mouseY, 20, 20);
 
} else if (key == 'c' || key == 'C') {
    image(grass, mouseX, mouseY, 50, 50);
 
  }
 }
 
function testbox(r, g, b) {
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
  if (key == 'x' || key == 'X') {
    background(0, 128, 255);
  } else if (key == 'p' || key == 'P') {
     saveme();
     key = "";
  }
}

function saveme(){
    filename=initials+day() + hour() + minute() +second();
    saveCanvas(filename, 'jpg');
 // }
}
