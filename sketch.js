// p5 js template

let in_index = true;
let particles = [];
let particles_num = 20;
let mVel = 0.3;

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-mVel, mVel), random(-mVel, mVel));
  }

  update() {
    this.pos.add(this.vel);
    this.bounce();
  }

  check(val) {
    const dist = p5.Vector.dist(val, this.pos);
    return dist < 100;
  }

  render() {
    fill(150);
    textSize(min(width, height) / 60);
    text("◉", this.pos.x, this.pos.y);
  }

  bounce() {
    if (this.pos.x > width || this.pos.x < 0) {
      this.vel.x *= -1;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      this.vel.y *= -1;
    }
  }
}

function linked_dots() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].render();

    for (let y = 0; y < particles.length; y++) {
      if (
        particles[i].check(particles[y].pos) &&
        particles[i] != particles[y]
      ) {
        strokeWeight(0.2);
        stroke(255, 50); // 增加线的透明度
        line(
          particles[i].pos.x,
          particles[i].pos.y,
          particles[y].pos.x,
          particles[y].pos.y
        );
      }
    }
  }
}

function init_dot() {
  particles = [];
  for (let i = 0; i < particles_num; i++) {
    particles.push(new Particle());
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  init_dot();
}

// 计算箭头位置的函数
function calculateArrowPosition(isRight) {
  // 基于是否是右侧箭头，返回计算后的位置
  let basePos = min(max(width / 10, 30), 60);
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
  if (in_index) {
    index_page();
    linked_dots();
  } else {
    another_page();
  }
}

function mousePressed() {
  // 检查鼠标位置是否在文字区域内
  if (in_index) {
    let d = dist(
      mouseX,
      mouseY,
      width + calculateArrowPosition(true),
      height - height / 30
    );
    if (d < height / 10) {
      in_index = false;
    }
  } else {
    let d = dist(
      mouseX,
      mouseY,
      calculateArrowPosition(false),
      height - height / 30
    );
    if (d < height / 10) {
      in_index = true;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  init_dot();
}
