
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

//enemies



let state = "pregame"; //storing our states as Strings 

let stage= 0;

//player
let playerX = 10; //ellipse X, Y is our p1
let playerY = 400; //y position of p1
let move = 0;
let playerhealthX = 100; //player health bar
let playerSpeed = 0;

//enemy
let enemyX = 755;
let enemyY = 400;
let enemyHealth = 100;
let enemySpeed = 0;

//jump
let x, y, groundY;
let yVel, gravity, jumpHeight;
let isJumping = false;


let width = 768;
let height = 420;
 
function setup() 
{
  textAlign(CENTER);
  createCanvas (768, 420);
  textSize(20);

  playerX = 10;
  playerY = height - 20; //initial position on the ground
  groundY = height - 20;
  yVel = 0;
  gravity = 1;
  jumpHeight = -20;
}


function draw() 
{
  if (state == "pregame") 
	{
    preGame();
     
  } 
  /*
  else if (state == "character selection")
  {
    characterSelect();
  }
	*/

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
  stage++;
}

//let text = (r, g, b);
r= random(225, 0, 0);
g= random(0, 225, 0);
b= random(0, 0, 225);



      
function preGame() 
{
  background(37, 38, 23);

  
  
  noStroke(0);
  fill(49, 55, 89); [
  ellipse(360, 160, 500, 175),//////////
  fill(77, 87, 140),//////////////
  stroke(77, 87, 140),////////
  ellipse(360, 160, 400, 175)]
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
   
    fill(49, 55, 89)
    noStroke(0)
    ellipse(180, 385, 200, 28),
    fill(77, 87, 140)
    ellipse(180, 385, 85, 28),[
  
    fill(49, 55, 89),
    noStroke(0),
    ellipse(540, 385, 200, 28), 
    fill(77, 87, 140),
    ellipse(540, 385, 85, 28), ]
   
    fill(77, 87, 140);
    ellipse(360, 485, 240, 40);
    fill(37, 38, 23);
    ellipse(360, 460, 240, 43);
 
    fill(225, 0, 0);
  text("story", width/1.5, height/1.8);
  text("options", width/1.5, height/1.6);
  text('settings', width/1.5, height/1.4);
  
  
  

}

function characterSelect()
{
  //choose characters
  background(0, 180, 0);

  
}



function game() 
{
  /*
  player has 100 health if player drops to 100 he will die and game ends
- animate jump, dash attack commands

- player faces npc that also have individual life and if they reach 0 they die aswell

**IF SLASH TOUCHES NPC, NPC LOSES 20 HP (FOR EXAMPLE)
  */

  background(0, 0, 255);
  text("health bar", 70, 45);
  text("player advances to next stage when you reach 768", width/2, height/2 + 50);

  text("use arrow keys", width/2, height/2 - 50);

  

  //p1
  ellipse(playerX, yVel, 50, 50);
  
  //gravity
  yVel += gravity;
  y += yVel;

  
  //move keys
    playerX += move  
    if (keyIsDown(LEFT_ARROW))
      {
        playerX = playerX - 2;
      }
      if (keyIsDown(RIGHT_ARROW))
        {
          playerX = playerX + 3;
        }  

        //Jump action
        if (keyIsDown(UP_ARROW) && !isJumping && playerY >= groundY)
        {
          yVel = jumpHeight;
          isJumping = true;
        }

        //ground collision
        if (playerY >= groundY) {
          playerY = groundY;
          isJumping = false;
          yVel = 0; //stop falling when on the ground
        }

        /*  else if (keyIsDown(UP_ARROW))
          {
            playerY = playerY > 10;
          }
  
          if (playerY - 10 <= 100) {  ////if player.y + player.height < ground,,, if player is up in air
            playerY += gravity; 
          }
          playerY += yVel // y velocity
          yVel /= 1.2;
    */

  //player health bar
  fill(255, 0, 0);
  stroke(0);
  rect(10, 10, 100, 15);
  fill(0,255,0);
  stroke(0);
  rect(10, 10, playerhealthX, 15);
	
  //game is over when player health reaches 0 or enemy health reaches 0
  
    
}

function gameOver() 
{
  background(255, 0, 0);
  text("rip!", width/2, height/2);
  text("click to play again", width/2, height/2.3);



}

