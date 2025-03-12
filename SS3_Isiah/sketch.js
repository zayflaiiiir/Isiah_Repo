///WELCOME TO ASSIGNMENT 2////
/////YOU ARE LOOKING AT TITLE: D1G1T4L FETUS///
//BY ISIAH BERMUDEZ MARCH 1ST, 2025///
let x, y, r, g, b;
let circle1X = 180;
let circle1Y = 300;
let circle2X = 540;
let circle2Y = 300;
let maxGrow = 100;
let grow = 50;
//let Move = 0;
//let yMove = 0;

function setup() {
  createCanvas(720, 540);
  
}

function draw() {
  background(37, 38, 23);
  
  //this is lil bro forehead//////////////
  
  noStroke(0);
  fill(49, 55, 89); 
  ellipse(360, 160, 500, 175),//////////
  fill(77, 87, 140),//////////////
  stroke(77, 87, 140),////////
  ellipse(360, 160, 400, 175)
  
    //two sets of eyes
    //left eye
    fill(220, 77, 77,); 
    stroke(220, 77, 77,),
    ellipse(260, 320, 20, 10),
    ellipse(97, 310, 20, 10) 
 
    fill(250, 250, 220); 
    stroke(250, 250, 220),
    ellipse(180, 310, 175, 70) 
    
    //right eye
    fill(220, 77, 77)
    stroke(220, 77, 77,)
    ellipse(460, 320, 20, 10)
    ellipse(623, 310, 20, 10)
   
    fill(250, 250, 220),
    stroke(250, 250, 220)
    ellipse(540, 310, 175, 70)
    

  ///start making nose at a downward position
    fill(49, 55, 89); [
      noStroke(0),
      ellipse(308, 395, 50, 26),
      ellipse(408, 395, 50, 26),
      ellipse(360, 405, 115, 56),
      bezier(360, 320, 325, 325, 325, 325, 320, 385),
      bezier(360, 320, 385, 325, 385, 325, 400, 380),
      triangle(320, 385, 400, 375, 360, 320),]
      fill(77, 87, 140)
      ellipse(360, 405, 85, 36),
    //cheek boness
    ///shading///
    fill(49, 55, 89)
    noStroke(0)
    ellipse(180, 385, 200, 28),
    fill(77, 87, 140)
    ellipse(180, 385, 85, 28),[
    //shading/////
    fill(49, 55, 89),
    noStroke(0),
    ellipse(540, 385, 200, 28), 
    fill(77, 87, 140),
    ellipse(540, 385, 85, 28), ]
    //how can i draw something multiple times
    //settle for mouth
    fill(77, 87, 140);
    ellipse(360, 485, 240, 40);
    fill(37, 38, 23);
    ellipse(360, 460, 240, 43);

    //grow pupil
    //max grow is 100
    if (grow < maxGrow) {
      grow ++- 100;

    }

    if (grow < maxGrow) {
      grow --+ 100;
    }
    
    //move pupil 1
    //circle1X += 2;
    //move pupil 2
    //circle2X += 2;
    //pupil 1
  noStroke(0) ;
  fill(37, 38, 23),
    ellipse(circle1X, circle1Y, grow, grow);
     //pupil 2
  noStroke(0);
  fill(37, 38, 23),
  ellipse(circle2X, circle2Y, grow, grow);

  r = random(0, 255);
  g = 0;
  b = random(0, 255);
  x = random(0, 600);
  y = random(0, 400);

  noStroke();
  fill (random);
  ellipse (mouseX, mouseY, 65, 35);

  
}
function mousePressed()
{
  //let d = dist(mouseX, mouseY, x1, y1);

  //if (d < 100)
  maxGrow = random(100, -50);
  grow = random(100, -50);

}
