// p5 js template

let in_index = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function index_page() {
  translate(width / 2, height / 2);
  textFont("Quicksand");
  textSize(height / 8);
  textAlign(CENTER, CENTER);
  fill(220);
  text("Generative Art", 0, -height / 15);
  textSize(height / 20);
  fill(200);
  text("Something Interesting", 0, height / 15); // 假设这是你想要点击的链接
  textFont("Noto Sans Symbols 2");
  fill(180);
  textSize(height / 15);
  text("🢣", width / 2.5, height / 2.3);
}

function another_page() {
  fill(220);
  text("Click to go back", width / 2, height / 10);
  textFont("Noto Sans Symbols 2");
  fill(180);
  textSize(height / 15);
  text("🢢", width / 10, height / 1.07);
}

function draw() {
  background("#101010");
  if (in_index) index_page();
  else another_page();
}

function mousePressed() {
  // 检查鼠标位置是否在文字区域内
  if (in_index) {
    let d = dist(
      mouseX,
      mouseY,
      width / 2 + width / 2.5,
      height / 2 + height / 2.3
    );
    if (d < height / 10) {
      in_index = false;
    }
  } else {
    let d = dist(mouseX, mouseY, width / 10, height / 1.07);
    if (d < height / 10) {
      in_index = true;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
