// First sketch
let sketch1 = function (p) {
  let canvas;

  p.setup = function () {
    canvas = p.createCanvas(300, 300);
    canvas.parent("example1");
    p.windowResized();
  };

  p.draw = function () {
    p.background(220);
    p.circle(p.width / 2, p.height / 2, p.width / 4);
  };

  p.windowResized = function () {
    let parentWidth = document.getElementById("example1").offsetWidth;
    p.resizeCanvas(parentWidth, parentWidth);
  };

  window.addEventListener("resize", p.windowResized);
};

// Second sketch
let sketch2 = function (p) {
  let canvas;

  p.setup = function () {
    canvas = p.createCanvas(300, 300);
    canvas.parent("example2");
    p.windowResized();
  };

  p.draw = function () {
    p.background(220);
    p.rectMode(p.CENTER);
    p.rect(p.width / 2, p.height / 2, p.width / 4);
  };

  p.windowResized = function () {
    let parentWidth = document.getElementById("example2").offsetWidth;
    p.resizeCanvas(parentWidth, parentWidth);
  };

  window.addEventListener("resize", p.windowResized);
};

// Second sketch
let sketch3 = function (p) {
  let canvas;

  p.setup = function () {
    canvas = p.createCanvas(300, 300);
    canvas.parent("example3");
    p.windowResized();
  };

  p.draw = function () {
    p.background(220);
    p.translate(p.width / 2, p.height / 2);
    p.triangle(
      -p.width / 8,
      p.height / 8,
      0,
      -p.height / 8,
      p.width / 8,
      p.height / 8
    );
  };

  p.windowResized = function () {
    let parentWidth = document.getElementById("example3").offsetWidth;
    p.resizeCanvas(parentWidth, parentWidth);
  };

  window.addEventListener("resize", p.windowResized);
};

// Second sketch
let sketch4 = function (p) {
  let canvas;

  p.setup = function () {
    canvas = p.createCanvas(300, 300);
    canvas.parent("example4");
    p.windowResized();
  };

  p.draw = function () {
    p.background(220);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(32);
    p.text("Hello", p.width / 2, p.height / 2);
  };

  p.windowResized = function () {
    let parentWidth = document.getElementById("example4").offsetWidth;
    p.resizeCanvas(parentWidth, parentWidth);
  };

  window.addEventListener("resize", p.windowResized);
};

new p5(sketch1);
new p5(sketch2);
new p5(sketch3);
new p5(sketch4);
