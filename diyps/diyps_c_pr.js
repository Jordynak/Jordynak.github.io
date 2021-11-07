var img;
var initials ='jk'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 240; // off white background



function setup() {
createCanvas(800, 800);  // canvas size
background(screenbg);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) { 
  
   
   
  //feet
   fill(255, 196, 128);
  noStroke();
    ellipse(mouseX, mouseY,20,20); //shape1 feet
  
   
   
   } else if (toolChoice == '2') {
  
  
  //body
  noStroke();
     fill(137, 201, 255);
  arc(mouseX, mouseY, 130,390, radians(180), radians (0)); //shape2
  
    } else if (toolChoice == '3') {
  
  //stomach
  noStroke();
      fill(87, 179, 255);
  arc(mouseX, mouseY, 100,200, radians(180), radians(0))  //shape3
  
    } else if (toolChoice == '4') {
      
  //hat
  noStroke();
      fill(255, 105, 105);
  rect(mouseX, mouseY, 30, 20, 100, 100); //shape4
      
      } else if (toolChoice == '5') {
  
      fill(0, 0, 0);
  ellipse(mouseX, mouseY, 100,50,120,40) //shape5
      
      } else if (toolChoice == '6') {
        
  noStroke();
        fill(0, 0, 0);
    ellipse(mouseX, mouseY,10,10); //shape6 draw hat
      
      } else if (toolChoice == '7') {
        
      fill(110, 110, 110);
  ellipse(mouseX, mouseY, 70,50,120,40) //shape7 top of hat
        
  } else if (toolChoice == '8') {
        
    
  //eyes
    
  fill(0, 0, 0);
  circle(mouseX, mouseY, 8,190,7) //shape8 draw eyes
    
  } else if (toolChoice == '9') {
    
    
  //beak
  fill(255, 196, 128);
  circle(mouseX, mouseY, 10,190,7) //shape9 draw beak
      
      } else if (toolChoice == '0') {
      
  //grass
   fill(107, 197, 85);
  triangle(mouseX, mouseY, 400, 800, 100, 800, 86, 55); //grass
        
      }

 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x50, y50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
     key = ""; // reset the key so that it doesn't keep taking screenshots
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
    filename=initials+day() + hour() + minute() +second();
    saveCanvas(filename, 'jpg');
 // }
}
