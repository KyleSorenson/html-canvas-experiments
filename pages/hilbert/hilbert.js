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

function hilbertPatternA(turtle, context, n) {
  
  if (n === 0) {

    turtle.left();

    moveAndDraw(turtle, context);
    turtle.right();
    
    moveAndDraw(turtle, context);

    turtle.right();
    moveAndDraw(turtle, context);

    turtle.left();

  } else {

    turtle.left();
    
    hilbertPatternB(turtle, context, n-1);

    moveAndDraw(turtle, context);
    turtle.right();

    hilbertPatternA(turtle, context, n-1);

    moveAndDraw(turtle, context);

    hilbertPatternA(turtle, context, n-1);

    turtle.right();
    moveAndDraw(turtle, context);

    hilbertPatternB(turtle, context, n-1);

    turtle.left();
    
  }
};

function hilbertPatternB(turtle, context, n) {
  
  if (n === 0) {

    turtle.right();

    moveAndDraw(turtle, context);
    turtle.left();

    moveAndDraw(turtle, context);

    turtle.left();
    moveAndDraw(turtle, context);

    turtle.right();

  } else {

    turtle.right();
    
    hilbertPatternA(turtle, context, n-1);

    moveAndDraw(turtle, context);
    turtle.left();

    hilbertPatternB(turtle, context, n-1);

    moveAndDraw(turtle, context);

    hilbertPatternB(turtle, context, n-1);

    turtle.left();
    moveAndDraw(turtle, context);

    hilbertPatternA(turtle, context, n-1);

    turtle.right();

  }
};

let t = new Turtle(10, 10, DOWN, 10);

ctx.beginPath();
ctx.moveTo(t.x, t.y);

// movement instructions here
hilbertPatternA(t, ctx, 5);

ctx.lineWidth = 2;
ctx.lineCap = "square";
ctx.strokeStyle = "hsl(80, 30%, 30%)";
ctx.stroke();
