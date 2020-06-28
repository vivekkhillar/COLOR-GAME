var colors = [];
    //Colors array holds the 6 random colors  
 
var keyColor;
    //keyColor is the solution to the rgb color
 
var colorDisplay = document.querySelector("#colorDisplay");  
    //colorDisplay is the variable selecting the one secret color to display in h1 tag
    
var msg = document.querySelector("#message");  
    //msg is the variable selecting the message id element for showing messages like try again etc.
    
var reset = document.querySelector("#reset");
    //reset is the NEW COLORS button
    
var h1 = document.querySelector("h1");
    //h1 is the heading
    
var circles = document.querySelectorAll(".circle");
    // circles will be an array holding the 6 circles
 
//add an event listener to NEW COLORS button
reset.addEventListener("click", initialize);
 
//We will call this function as soon as the body of HTML loads
function initialize(){
  circlesColor();
  circlesListen();
}
 
//circlesColor function is for giving background colors to the circles
function circlesColor(){
  colors = [];              
  reset.textContent = "new colors";    
  h1.style.background = " #EB4D4D";
  reset.style.borderColor = "#EB4D4D";  
  msg.textContent = "";          
  for(var i=0; i<circles.length; i++)    
    colors.push(generateRandomColor());
  pickKeyColor();              
}
 
//circlesListen is for adding event listeners to the circles
function circlesListen(){
 
/*Loop for all 6 circles to change their background colors and add event Listeners*/
  for(var i=0; i<circles.length; i++){
    circles[i].style.background = colors[i];
    circles[i].addEventListener("click", function() {
      if(this.style.background === keyColor)      
        winningState(); //Adding a condition for winning State
      else {
          this.style.background = "white";
          msg.textContent = "Try Again";
        }
    });
  };
}
//winningState function changes the background of h1 and all the circles
function winningState(){
  //Loop for setting the background of all circles to keyColor
  for(var i=0; i<circles.length; i++)        
    circles[i].style.background = keyColor;    
  h1.style.background = keyColor;
  msg.textContent = "Correct!";
  reset.textContent = "Play Again?";
  reset.style.borderColor = keyColor;
}
 
//pickKeyColor function pick one random color for solution from the 6 circles
function pickKeyColor(){
  var numCircles = circles.length;  //numCircles will be 6
  var keyColorIndex = Math.floor((Math.random()) * numCircles);    
  
  //We get a number from 0 to 5 at random
  keyColor = colors[keyColorIndex];
  colorDisplay.textContent = keyColor;
}
 
//generateRandom Color is for generating a RGB random color
function generateRandomColor(){
  var r = Math.floor((Math.random()) * 255);
  var g = Math.floor((Math.random()) * 255);
  var b = Math.floor((Math.random()) * 255);
  return ("rgb("+r+", "+g+", "+b+")");
}