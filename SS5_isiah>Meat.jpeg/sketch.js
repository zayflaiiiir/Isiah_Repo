/*  Title: Meat
continuosely draw a grid of rectangles (pixels) over the image.
the color of each rectangle is based on the pixel color at the corresponding position in the pixel array.
grid cells correspond to small chunks of the image.
*/





let meat; //declare your image as meat

let pixel = []; //declare pixel. = [] initialize the variable pixel as an empty array.

let cols, rows; //declare coloms and rows

let size = 8; //let pixel equal the size of 6

function preload()  { //preload our image and declare it as meat
  meat = loadImage("/image/_.jpeg");
}

function setup() {
  createCanvas(734, 403);

  //meat = load Pixels;
  meat.loadPixels(); //our image should now load pixels
  
  cols = width/size; //colomns equal the width of canvas divided by the size of pixel
  rows = height/size; //rows equal the height of the canvas divided by the size of pixels

  //create a 2d array of four loops called pixel that stores pixel data from my image
  for (let i=0; i<cols; i++) //loop variable i starts from 0 and goes up collomns in a grid
    { 
    pixel[i] = []; //initiate a new empty array at pixel[i]. pixel[i] will hold an array of pixel data for the specific colomn
    for (let j=0; j<rows; j++)  { //create inner loop that iterates through the rows. The loop variable j starts from 0 and goes up to rows -1. Rows represent the the number of rows in the grid.
      let x = i*size; //calculate the x position on the image. multiply the current colomn index i by the size of each grid cell (size). if i = 0, x = 0, and if i = 1, x =  size
      let y = j*size; //repeat for y position
      pixel[i][j] = meat.get(x,y); //retrieves color of pixel at the coordinates (x, y) from image //The get(x, y) function in p5.js returns the color of the pixel at position (x, y).
//it then stores that color in the pixel[i][j]
    }
  }
  
  console.log(pixel); /*js log the entire pixel array to the console
  it outputs the structure and contents of the pixel array to the browser's developer console.*/
  // comment to add grid / uncomment to remove grid
  noStroke(); //no grid
}

function draw() { //finally update canvas
  background(220); //doesn't matter

  image(meat, 0, 0);  //place image onto canvas

  for (let i=0; i<cols; i++)  { //outter loop runs through colomns (i goes from 0 to cols - 1), inner loop runs through rows (j goes from 0 to rows - 1)
    for (let j=0; j<rows; j++) {
      let x = i*size; //calculate x and y positions for each square on the grid
      let y = j*size;
      fill(pixel[i][j]) //information of color that was stored earlier
      rect(x,y,size,size); //draw rectangle at position (x, y) with w, h equal to size.
    }
  }

}





/*let meat;
let pixel = []; let cols, rows; let size = 10;

function preload()  {
  meat = loadImage("/Users/isiahbermudez/Documents/Meat>midterm_/image/_.jpeg");
}

function setup() {
  createCanvas(734, 403);

  meat = loadImage("/Users/isiahbermudez/Documents/Meat>midterm_/image/_.jpeg");

  cols = width/size;
  rows = height/size;

  for (let i=0; i<cols; i++)  {
    pixel[i] = [];
    for (let j=0; j<rows; j++)  {
      let x = i*size;
      let y = j*size;
      pixel[i][j] = meat(x, y);

    }
  }
  //print(pixel);
}

function draw() {
  background(220);

  image(meat, 0, 0);

  //for (let i=0; i<cols; i++)  {
 //   for
//  }
}
*/
