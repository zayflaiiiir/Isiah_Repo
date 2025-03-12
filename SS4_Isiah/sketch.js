//Isiah Bermudez
///D1gital Fetus
///

let ellipse = pupil;
let pupil1Y = (mouseX, 270, 50, 50);
let pupil2Y = (mouseX, 270, 50, 50);
let maxGrow = 100;
let grow = 50;

function setup()  {
  createCanvas(720, 540);
  //randomizeColors();
  
}

function draw() {
  background(37, 38, 23);
  //forehead
  noStroke(0);
  fill(49, 55, 89); 
  ellipse(360, 160, 500, 175),//////////
  fill(77, 87, 140),//////////////
  stroke(77, 87, 140),////////
  ellipse(360, 160, 400, 175)

  fill(220, 77, 77,); 
    stroke(220, 77, 77,),
    ellipse(260, 320, 20, 10),
    ellipse(97, 310, 20, 10) 
 
    fill(250, 250, 220); 
    stroke(250, 250, 220),
    ellipse(180, 310, 175, 70) 

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
    ellipse(180, 385, 85, 28),
    //shading/////
    fill(49, 55, 89),
    noStroke(0),
    ellipse(540, 385, 200, 28), 
    fill(77, 87, 140),
    ellipse(540, 385, 85, 28), 

    fill(77, 87, 140);
    ellipse(360, 485, 240, 40);
    fill(37, 38, 23);
    ellipse(360, 460, 240, 43);

    strokeWeight(5);
  fill(37, 38, 23),
    ellipse(pupil1Y);//grow, grow);
   
    //pupil 2
  strokeWeight(5);
  fill(37, 38, 23),
  ellipse(pupil2Y); //grow, grow);
  //pupil2Y = pupil2Y + 5;

  //create pill for mouse
  //let eyes follow
  

  noStroke();
  fill (255, 122, 72);
  ellipse (mouseX, mouseY, 65, 35);

}
function mousePressed()  {
  background(37, 38, 23);
  circle1Y = 0;
}
