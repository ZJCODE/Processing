// p5 js template

let in_index = true;
let particles = [];
let particles_num = 20;
let mVel = 0.5;

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
    return dist < min(width, height) / 3;
  }

  render() {
    fill(120);
    circle(this.pos.x, this.pos.y, min(width, height) / 100);
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
        strokeWeight(0.3);
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
  textAlign(CENTER, CENTER);
  translate(width / 2, height / 2);
  textFont("Quicksand");
  textSize(min(width, height) / 8);
  fill(220);
  text("Generative Art", 0, -height / 15);
  textSize(min(width, height) / 20);
  fill(200);
  text("Something Interesting", 0, height / 15);
  pop();
}

function draw() {
  background("#101010");
  index_page();
  linked_dots();
}

function mousePressed() {
  // 检查鼠标位置是否在文字区域内
  window.open("https://zjcode.github.io/Processing/Case/index.html"); // 打开链接
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  init_dot();
}
