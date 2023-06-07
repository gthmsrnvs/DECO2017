// setup() is called once when the program starts. It's used to define initial environment properties.
function setup() {
  // create a canvas that spans the entire window
  let canvas = createCanvas(windowWidth, windowHeight);
  
  // position the canvas at the top left corner of the window
  canvas.position(0, 0);
  
  // set the z-index of the canvas to -1, which places it behind all other HTML elements
  canvas.style('z-index', '-1'); 
  
  // disable drawing the stroke (outline) of shapes
  noStroke();
  
  // define an array of colors to be used in the sketch
  colors = [color(255, 0, 120), color(255, 0, 90), color(255, 0, 60)];
}

// draw() is called continuously after setup(). It's used to execute the lines of code contained inside its block until the program is stopped or noLoop() is called.
function draw() {
  // map the x position of the mouse to a range between 0 and 255 for the red color component
  let r = map(mouseX, 0, width, 0, 255);
  
  // map the y position of the mouse to a range between 0 and 255 for the green color component
  let g = map(mouseY, 0, height, 0, 255);
  
  // set the blue color component to a constant value of 200
  let b = 200;
  
  // set the fill color for shapes, with an alpha value of 50 for semi-transparency
  fill(r, g, b, 50);
  
  // draw an ellipse at the mouse position with a width and height of 100
  ellipse(mouseX, mouseY, 100, 100);
}

// windowResized() is a p5.js function that is called whenever the browser window is resized.
function windowResized() {
  // resize the canvas to the new window dimensions
  resizeCanvas(windowWidth, windowHeight);
}
