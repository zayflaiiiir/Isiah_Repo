/* talk about practice!
lets create a health bar
player starts at 250 health and takes 50 damage with each hit
*/

let health = 250; //health you start with
let death = 0; //takes 5 hits to die and reach 0
let maxHealth = 300; //max health p1 can have

function setup()  {
  createCanvas(760, 340);
}

function updateHealth(health, maxHealth) {
  noStroke();
  fill(255, 0, 0);
  rect(10, 10, map(maxHealth, 0, death, 0, width/1.5), 20);
}


function draw() {
  background(0);

  keyPressed();
  checkCollision(); //when sprite p1 collides with npc actions and commands
  updateHealth(health, maxHealth); //this is my health souce/bar that goes up and down

  /*death = min(maxHealth, death);

  noStroke();
  fill(255, 0, 0);
  rect(10, 10, map(maxHealth, 0, death, 0, width/1.5), 20);

  */
}