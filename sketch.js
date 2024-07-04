// p5 js template

let in_index = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function index_page() {
  push();
  translate(width / 2, height / 2);
  textFont("Quicksand");
  textSize(min(width, height) / 8);
  textAlign(CENTER, CENTER);
  fill(220);
  text("Generative Art", 0, -height / 15);
  textSize(min(width, height) / 20);
  fill(200);
  text("Something Interesting", 0, height / 15); // 假设这是你想要点击的链接
  pop();
  push();
  translate(width, 0);
  textFont("Noto Sans Symbols 2");
  fill(180);
  textSize(min(width, height) / 15);
  text("🢣", -min(max(width / 10, 60), 80), height - height / 30);
  point(-min(max(width / 10, 60), 80), height - height / 30);
  pop();
}

function another_page() {
  fill(220);
  text("Click to go back", width / 2, height / 10);
  textFont("Noto Sans Symbols 2");
  fill(180);
  textSize(min(width, height) / 15);
  text(
    "🢢",
    min(max(width / 10, 60), 80) - min(width, height) / 15,
    height - height / 30
  );
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
      width - min(max(width / 10, 60), 80),
      height - height / 30
    );
    if (d < height / 10) {
      in_index = false;
    }
  } else {
    let d = dist(
      mouseX,
      mouseY,
      min(max(width / 10, 60), 80) - height / 15,
      height - height / 30
    );
    if (d < height / 10) {
      in_index = true;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
