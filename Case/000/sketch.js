// Define the sketches
let sketches = [
  {
    title: "Circle Sketch",
    sketch: function (p) {
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
    },
  },
  {
    title: "Rectangle Sketch",
    sketch: function (p) {
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
    },
  },
  {
    title: "Triangle Sketch",
    sketch: function (p) {
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
    },
  },
  {
    title: "Text Sketch",
    sketch: function (p) {
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
    },
  },
  // Add more sketches as needed
];

// Function to dynamically create grid items
function createGridItem(id, title) {
  // Result example:
  // <div class="grid-item">
  //   <h2>Circle Sketch</h2>
  //   <div id="example1"></div>
  // </div>
  // Add the grid item to the grid container

  let gridContainer = document.getElementById("grid-container");

  let gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  let h2 = document.createElement("h2");
  h2.textContent = title;
  gridItem.appendChild(h2);

  let div = document.createElement("div");
  div.id = id;
  gridItem.appendChild(div);

  gridContainer.appendChild(gridItem);
}

// Create grid items and instantiate sketches
sketches.forEach((sketchObj, index) => {
  let id = "example" + (index + 1);
  createGridItem(id, sketchObj.title);
  new p5(sketchObj.sketch, id);
});
