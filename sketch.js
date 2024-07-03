// p5 js template

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#101010");
  translate(width / 2, height / 2);
  textSize(64);
  textAlign(CENTER, CENTER);
  fill(255);
  text("Hello World", 0, -50);
  textSize(32);
  text("Something Interesting Gonna Happen Here", 0, 50);
}
//
