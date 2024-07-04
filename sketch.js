// p5 js template

let in_index = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

// 计算箭头位置的函数
function calculateArrowPosition(isRight) {
  // 基于是否是右侧箭头，返回计算后的位置
  let basePos = min(max(width / 10, 60), 80);
  return isRight ? -basePos : basePos - min(width, height) / 15;
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
  let arrowPos = calculateArrowPosition(true); // 使用函数计算右侧箭头位置
  text("🢣", arrowPos, height - height / 30);
  pop();
}

function another_page() {
  fill(220);
  text("Click to go back", width / 2, height / 10);
  textFont("Noto Sans Symbols 2");
  fill(180);
  textSize(min(width, height) / 15);
  let arrowPos = calculateArrowPosition(false); // 使用函数计算左侧箭头位置
  text("🢢", arrowPos, height - height / 30);
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
