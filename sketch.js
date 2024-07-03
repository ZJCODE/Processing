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
  textSize(16);
  text("Click Me", 0, 150); // 假设这是你想要点击的链接
}

function mousePressed() {
  // 检查鼠标位置是否在“Click Me”文字区域内
  let d = dist(mouseX, mouseY, width / 2, height / 2 + 150);
  if (d < 50) {
    // 假设100是根据文字大小和间距大致估算的点击区域半径
    window.open(
      "https://zjcode.github.io/Processing/Case/index.html",
      "_blank"
    ); // 打开链接
  }
}
