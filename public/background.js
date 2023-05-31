let colors;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); 
  noStroke();
  colors = [color(255, 0, 120), color(255, 0, 90), color(255, 0, 60)];
}

function draw() {
  background(0);
  
  let circleResolution = int(map(mouseY + 100, 0, height, 2, 80));
  let radius = mouseX - width / 2 + 0.5 * (0 - 200);
  let angle = TWO_PI / circleResolution;
  
  beginShape();
  for (let i = 0; i <= circleResolution; i++) {
    let x = 0 + cos(angle * i) * radius;
    let y = 0 + sin(angle * i) * radius;
    fill(colors[i % colors.length]);
    ellipse(width / 2 + x, height / 2 + y, 5, 5);
  }
  endShape();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
