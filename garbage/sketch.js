///Isiah  Bermudez/////////
//////studying Uncanny Valley////////
///With a focus on identity, drugs, gore////
///////Unknown death////////
////dissassociation/////
//
function setup() {
  createCanvas(720, 540);
}
function draw() {
  background(37, 38, 23);
  strokeWeight(3);  
  //create center line
  line(0, 270, 720, 270);
  line(360, 0, 360, 720);
  //left side of face
  line(180, 0, 180, 540);
  //right side of face
  line(540, 0, 540, 540);
  //bottom side of face
  line(0, 405, 720, 405);
  //this is lil bro forehead//////////////
  fill(49, 55, 89); [//////////////////////
  ////////////////////////////
  ellipse(360, 160, 500, 175),//////////
  fill(77, 87, 140),//////////////
  stroke(77, 87, 140),////////
  ellipse(360, 160, 400, 175)]/////////
    /////////////////////////////
  //////////////////////////////////////////
    //two sets of eyes
    //left eye
    fill(220, 77, 77,); [
    stroke(220, 77, 77,),
    ellipse(260, 320, 20, 10),
    ellipse(97, 310, 20, 10) ]

    fill(250, 250, 220); [
    stroke(250, 250, 220),
    ellipse(180, 310, 175, 70) ]
    //right eye
    fill(220, 77, 77)
    stroke(220, 77, 77,)
    ellipse(460, 320, 20, 10)
    ellipse(623, 310, 20, 10)
    fill(250, 250, 220),
    stroke(250, 250, 220)
    ellipse(540, 310, 175, 70)
    ///////MAYBE USE CURSOR FUNCTION TO CONTROL PUPILS WITH EYESS
  ///start making nose at a downward position
  //////CURVES AND ARCS ARE HARD AF FOR NO REASON////
    fill(49, 55, 89); [
      noStroke(0),
      ellipse(308, 395, 50, 26),
      ellipse(408, 395, 50, 26),
      ellipse(360, 405, 115, 56),
      bezier(360, 320, 325, 325, 325, 325, 320, 385),
      bezier(360, 320, 385, 325, 385, 325, 400, 380),
      triangle(320, 385, 400, 385, 360, 320),]
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
    //teeth
    //settle for mouth
    fill(77, 87, 140);
    ellipse(360, 485, 240, 40);
    fill(37, 38, 23);
    ellipse(360, 460, 240, 43);
    //chin
    //fill(117, 73, 72);  [
    //ellipse(360, 540, 280, 45),
    //fill(199, 60, 56),
    //ellipse(360, 540, 300, 45)  ]
    }
