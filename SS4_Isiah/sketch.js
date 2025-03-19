
/*
mid term game

run-and-gun action level game with traditional hand drawn design
American exchange student in Kyoto japan is possesed by a cursed Ōdachi swordsman found on a school trip to the museum
Kyoto is hacked by a cursed ai spirit who is posessing the lives of kyoto residents through cellulor usage

CONTROLS
up down left right keypad = right left bottom top
a - light attack(1 2 3)
A - heavy attack(roundhouse kick)
down a - body attack
s - slash
S - stab
B - block

MOVELIST
< or >, b - parry
jump, A - jump smash attack
duck, A - Ippo uppercut
right*2(left*2) S - heavenly strike
Z up up - air jump
s s s S - Bludgening strike
s s DOWN a - slice kick
double jump S - arrow head

*/

let toggle = true; 
let state = "pregame"; //storing our states as Strings 

let ellipseX = 10; //ellipse X, Y is our p1
let ellipseY = 0; //y position of p1
let move = 0;
let health = 100; //health bar

//jump
let yVel = 0;
let gravity = 10

let width = 768;
let height = 420;
 
function setup() 
{
  textAlign(CENTER);
  createCanvas (768, 420);
  textSize(20);
}


function draw() 
{
  if (state == "pregame") 
	{
    preGame();
     
  } 
	else if (state == "game") 
	{
    game();
  } 
	else if (state == "game over") 
	{
    gameOver();
  }
	
  print(state);
}

function mousePressed() 
{
  if (state == "pregame") 
	{
    state = "game";
  } 
	else if (state == "game over") 
	{
    state = "pregame";
  }
}

//let text = (r, g, b);
r= random(225, 0, 0);
g= random(0, 225, 0);
b= random(0, 0, 225);



      
function preGame() 
{
  background(0,255,0);

  //fill(r, g, b);
  text("story", width/1.5, height/1.8);
  text("options", width/1.5, height/1.6);
  text('settings', width/1.5, height/1.4);
  
  
  

}

//function characters()
//{
  //background(0, 180, 0);

  
//}



function game() 
{
  background(0, 0, 255);
  text("health bar", 70, 45);
  //p1
  ellipse(ellipseX, ellipseY, 100, 100);
  ellipseY = ellipseY+5;

  //function keyIsDown()  {
    ellipseX += move
  
    if (keyIsDown(LEFT_ARROW))
      {
        ellipseX = ellipseX - 2;
      }
      if (keyIsDown(RIGHT_ARROW))
        {
          ellipseX = ellipseX + 3;
        }  

        //keyis up then player jumps
        if (keyIsDown(UP_ARROW))
        {
          ellipseY = ellipseY - 10;
        }
          else if (keyIsDown(UP_ARROW))
          {
            ellipseY = ellipseY > 10;
          }
  
          if (ellipseY + 10 <= 100) {  ////if player.y + player.height < ground,,, if player is up in air
            ellipseY += gravity; 
          }
          ellipseY += yVel // y velocity
          yVel /= 1.2
    
  //player health bar
  fill(255, 0, 0);
  stroke(0);
  rect(10, 10, 100, 15);
  fill(0,255,0);
  stroke(0);
  rect(10, 10, health, 15);
	
  //game is over when ellipse reaches right of screen
  if (ellipseY > width) 
	{ 
    state = "game over";
    ellipseY = (width/12, 400); //reset ellipseY value
  }
}

function gameOver() 
{
  background(255, 0, 0);
  text("everyone loses!", width/2, height/2);
  text("click to play again.", width/2, height/2 + 50);



}

