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
   giraffe = loadImage('jordynak.github.io/diyps/giraffe.png');
   turtle = loadImage('jordynak.github.io/diyps/turtle.png');
   snail = loadImage('jordynak.github.io/diyps/snail.png');
   bird = loadImage('jordynak.github.io/diyps/bird.png');
   penguin = loadImage('jordynak.github.io/diyps/penguin.png');
   bow = loadImage('jordynak.github.io/diyps/bow.png');
   watch = loadImage('jordynak.github.io/diyps/watch.png');
   eyeglass = loadImage('jordynak.github.io/diyps/eye.png');
   hat = loadImage('jordynak.github.io/diyps/hat.png');
   mustache = loadImage('jordynak.github.io/diyps/mustache.png');
   grass = loadImage('jordynak.github.io/diyps/grass.png');
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
 image(giraffe.png, mouseX, mouseY, 50, 50);
    
 } else if (toolChoice == '2') {
 image(turtle.png, mouseX, mouseY, 50, 50);
  
 } else if (toolChoice == '3') {
image(snail.png, mouseX, mouseY, 50, 50);
  
} else if (toolChoice == '4') {
image(bird.png, mouseX, mouseY, 50, 50);
  
} else if (key == '5') {
image(penguin.png, mouseX, mouseY, 90, 90);
  
} else if (toolChoice == '6') {
image(bow.png, mouseX, mouseY, 20, 20);
  
} else if (toolChoice == '7') {
image(watch.png, mouseX, mouseY, 20, 20);
 
} else if (toolChoice == '8') {
image(eye.png, mouseX, mouseY, 20, 20);
  
} else if (toolChoice == '9') {
image(hat.png, mouseX, mouseY, 20, 20);
  
} else if (toolChoice == '0') {
   image(mustache.png, mouseX, mouseY, 20, 20);
 
} else if (key == 'g' || key == 'G') {
    image(grass.png, mouseX, mouseY, 50, 50);
 
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
