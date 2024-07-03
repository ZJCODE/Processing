// p5 js template

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#101010");
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
  text("🢣", width / 2.3, height / 2.3);
}

function mousePressed() {
  // 检查鼠标位置是否在文字区域内
  let d = dist(
    mouseX,
    mouseY,
    width / 2 + width / 2.3,
    height / 2 + height / 2.3
  );
  if (d < height / 10) {
    window.open(
      "https://zjcode.github.io/Processing/Case/index.html",
      "_blank"
    ); // 打开链接
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
