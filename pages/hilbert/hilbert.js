const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Vectors
const UP = Math.PI * 3/2;
const LEFT = Math.PI;
const RIGHT = Math.PI * 2;
const DOWN = Math.PI * 1/2;

// Turtle Constructor
function Turtle(x, y, vector, step) {
  
  this.x = x;
  this.y = y;
  this.vector = vector;
  this.step = step;

  this.move = function() {
    this.x += Math.cos(this.vector) * this.step;
    this.y += Math.sin(this.vector) * this.step;
  };

  this.right = function () {
    this.vector += Math.PI * 1/2;
  }

  this.left = function () {
    this.vector -= Math.PI * 1/2;
  }
}

function moveAndDraw(turtle, context) {
  turtle.move();
  context.lineTo(turtle.x, turtle.y);
}

function hilbertPatternA (turtle, context) {
  turtle.left();
  moveAndDraw(turtle, context);

  turtle.right();
  moveAndDraw(turtle, context);

  turtle.right();
  moveAndDraw(turtle, context);
}

function hilbertPatternB (turtle, context) {
  turtle.right();
  moveAndDraw(turtle, context);

  turtle.left();
  moveAndDraw(turtle, context);

  turtle.left();
  moveAndDraw(turtle, context);
}

function hilbertPatternC (turtle, context) {
  moveAndDraw(turtle, context);

  turtle.right();
  moveAndDraw(turtle, context);

  turtle.right();
  moveAndDraw(turtle, context);
}

function hilbertPatternD (turtle, context) {
  moveAndDraw(turtle, context);

  turtle.left();
  moveAndDraw(turtle, context);

  turtle.left();
  moveAndDraw(turtle, context);
}

let t = new Turtle(300, 300, UP, 20);

ctx.beginPath();
ctx.moveTo(t.x, t.y);

  // hilbertPatternC
  hilbertPatternB(t, ctx);

  t.right();
  moveAndDraw(t, ctx);

  hilbertPatternC(t, ctx);

  t.left();
  moveAndDraw(t, ctx);

  hilbertPatternA(t,ctx);

  moveAndDraw(t, ctx);

  hilbertPatternB(t, ctx);

  //hilbertPatternD

  moveAndDraw(t, ctx);

  hilbertPatternA(t, ctx);

  t.left();
  moveAndDraw(t, ctx);

  hilbertPatternD(t, ctx);

ctx.strokeStyle = "white";
ctx.stroke();