//for the first ellipse 
var xPos = 300; //this is x-coordinate (x position of ellipse in canvas)
var yPos = 150; //this is y-coordinate (y position of ellipse in canvas)
var h = 10;// the height of the ellipse 
var w = 10; // the width of the ellipse
// for the second ellipse
var xPos1 = 110; //this is x-coordinate (x position of ellipse in canvas)
var yPos1 = 100; //this is y-coordinate (y position of ellipse in canvas)
var h1 =10;
var w1=10;
draw = function() {
    
    background(29, 40, 115);
    fill(255, 242, 0);
    //first ellipse 
    ellipse(xPos, yPos, w, h);
    //second ellipse
    ellipse(xPos1, yPos1, w1, h1);
    //first ellipse 
    // to move ellipse in the x and y cordinate of canvas 
    xPos -=1; // decriment of x-cordinate
    yPos +=1; // incriment of y-cordinate 
    // to change the size of the height and the width of the ellipse
    h -=0.05;
    w -=0.05;
    //second ellipse
    // to move ellipse in the x and y cordinate of canvas 
    xPos1 +=1; //incriment of y-cordinate 
    yPos1 -=1; //decriment of x-cordinate 
    // to change the size of the height and the width of the ellipse
    h1 -=0.1;
    w1 -=0.1;
    
};



