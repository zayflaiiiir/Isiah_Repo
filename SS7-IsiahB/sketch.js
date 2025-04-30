/*
returning to my first ever sketch digital fetus 
i'll now use classes and arrays to bring this thing to life
*/


/*
create classes for eyes
*/


class face //this is the face of the fetus and will allow to move face by itself
{

}

let eyes = [];

class iris  //this is the eyes of the face ill duplicate the eyes using a two loop array
{
  constructor() 
  {
    this.x, this.y = 180, 300;

  }
move()  
{
  if (keyIsDown(RIGHT_ARROW)) {
    this.x = this.x++;
  }
  if (keyIsDown(LEFT_ARROW))
  this.x = this.x--;
  }
}

function setup() {
  createCanvas(800, 540);
  background(110);
}

function draw() {
  background(220);
  forehead();
  eye1();
  eye2();
  nose();
  details();
  mouth();
}

function forehead() {
  noStroke(0);
  fill(49, 55, 89); 
  ellipse(360, 160, 500, 175),//////////
  fill(77, 87, 140),//////////////
  stroke(77, 87, 140),////////
  ellipse(360, 160, 400, 175)
}

function eye1() {
  fill(220, 77, 77,); 
    stroke(220, 77, 77,),
    ellipse(260, 320, 20, 10),
    ellipse(97, 310, 20, 10) 
 
    fill(250, 250, 220); 
    stroke(250, 250, 220),
    ellipse(180, 310, 175, 70) 
}

function eye2() {
  fill(220, 77, 77)
    stroke(220, 77, 77,)
    ellipse(460, 320, 20, 10)
    ellipse(623, 310, 20, 10)
   
    fill(250, 250, 220),
    stroke(250, 250, 220)
    ellipse(540, 310, 175, 70)
}

function nose() {
  fill(49, 55, 89); 
    noStroke(0)
    ellipse(308, 395, 50, 26)
    ellipse(408, 395, 50, 26)
    ellipse(360, 405, 115, 56)
    bezier(360, 320, 325, 325, 325, 325, 320, 385)
    bezier(360, 320, 385, 325, 385, 325, 400, 380)
    triangle(320, 385, 400, 375, 360, 320)
    fill(77, 87, 140)
    ellipse(360, 405, 85, 36)
}

function details()  {
  fill(49, 55, 89)
    noStroke(0)
    ellipse(180, 385, 200, 28)
    fill(77, 87, 140)
    ellipse(180, 385, 85, 28)
    fill(49, 55, 89)
    noStroke(0)
    ellipse(540, 385, 200, 28) 
    fill(77, 87, 140)
    ellipse(540, 385, 85, 28)
}

function mouth()  {
  fill(77, 87, 140);
  ellipse(360, 485, 240, 40);
  fill(37, 38, 23);
  ellipse(360, 460, 240, 43);
}