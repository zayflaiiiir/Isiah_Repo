let player, enemy;

function setup()  {
  createCanvas(500, 500);
  
  //initiate, objects by calling constructor
  //nameofObject = new className()
  player = new player();
  enemy = new enemy(); 
}

function draw() {

}

class player1  {

  //**constructor */
  //like setup() function within class
  //constructor arguments are temporary and used to initialize values inside an object
  constructor(tempX, tempY, tempDiameter)
  {
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
  }

}