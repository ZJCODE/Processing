// p5 js template

let grids = [];
let num = 15;

function init() {
  grids = [];
  for (let i = 0; i < num; i++) {
    let x = Math.floor(random(width));
    let y = Math.floor(random(height));
    let w = Math.floor(random(1, 5));
    let g = Math.floor(random(10, 50));
    let size1 = Math.floor(random(1, 10));
    let size2 = Math.floor(random(1, 10));
    let r = random(PI);
    grids.push(new Grid(x, y, w, g, size1, size2, r));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  init();
}

function draw() {
  background(0);
  for (let grid of grids) {
    grid.show();
    // text show grid info
    // push();
    // translate(grid.x, grid.y);
    // fill(255);
    // noStroke();
    // text(`w:${grid.w} g:${grid.g} s1:${grid.size1} s2:${grid.size2}`, 0, 0);
    // pop();
  }
}

// click to reset
function mousePressed() {
  init();
}

// 构建一个 Grid 类
// 用于在以 (x,y) 为中心 使用宽度为 w 的 横竖线条构建间隔为 g 的 size1*size2 的网格 并旋转 r 角度

class Grid {
  constructor(x, y, w, g, size1, size2, r) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.g = g;
    this.size1 = size1;
    this.size2 = size2;
    this.r = r; // new property for rotation angle
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.r); // rotate by the specified angle
    stroke(255, 100);
    strokeWeight(this.w);
    for (let i = -this.size1; i <= this.size1; i++) {
      line(-this.size2 * this.g, i * this.g, this.size2 * this.g, i * this.g);
    }
    for (let i = -this.size2; i <= this.size2; i++) {
      line(i * this.g, -this.size1 * this.g, i * this.g, this.size1 * this.g);
    }
    pop();
  }
}
