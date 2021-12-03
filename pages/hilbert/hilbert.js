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

function hilbertPatternA (turtle, context, n) {
  
  if (n > 0) {
    
    hilbertPatternD(turtle, context, n-1);

    turtle.left();
    moveAndDraw(turtle, context);

    hilbertPatternC(turtle, context, n-1);

    turtle.right();
    moveAndDraw(turtle, context);

    hilbertPatternA(turtle, context, n-1);

    turtle.right();
    moveAndDraw(turtle, context);

    hilbertPatternB(turtle, context, n-1);
    
  } else {
    
    turtle.left();
    moveAndDraw(turtle, context);
  
    turtle.right();
    moveAndDraw(turtle, context);
  
    turtle.right();
    moveAndDraw(turtle, context);
  
  }
}

function hilbertPatternB (turtle, context, n) {
  
  if (n > 0) {

    hilbertPatternC(turtle, context, n-1);

    turtle.right();
    moveAndDraw(turtle, context);

    hilbertPatternD(turtle, context, n-1);

    turtle.left();
    moveAndDraw(turtle, context);

    hilbertPatternB(turtle, context, n-1);

    turtle.left();
    moveAndDraw(turtle, context);

    hilbertPatternA(turtle, context, n-1);
  
  } else {

    turtle.right();
    moveAndDraw(turtle, context);

    turtle.left();
    moveAndDraw(turtle, context);

    turtle.left();
    moveAndDraw(turtle, context);

  }
}

function hilbertPatternC (turtle, context, n, vector) {

  if (n > 0) {

    hilbertPatternB(turtle, context, n-1);

    turtle.vector = vector;
    
    moveAndDraw(turtle, context);
    
    hilbertPatternC(turtle, context, n-1);
    
    turtle.vector = vector;
    turtle.right();

    moveAndDraw(turtle, context);
    
    hilbertPatternA(turtle, context, n-1);
    
    turtle.vector = vector;
    turtle.right();
    turtle.right();

    moveAndDraw(turtle, context);

    hilbertPatternB(turtle, context, n-1);

  } else {

    moveAndDraw(turtle, context);

    turtle.right();
    moveAndDraw(turtle, context);

    turtle.right();
    moveAndDraw(turtle, context);

  }
}

function hilbertPatternD (turtle, context, n) {

  if (n > 0) {
    
    hilbertPatternA(turtle, context, n-1);

    moveAndDraw(turtle, context);
    
    hilbertPatternD(turtle, context, n-1);

    turtle.left();
    moveAndDraw(turtle, context);

    hilbertPatternB(turtle, context, n-1);
    
    turtle.left();
    moveAndDraw(turtle, context);
    
    hilbertPatternA(turtle, context, n-1);
  
  } else {
  
    moveAndDraw(turtle, context);
  
    turtle.left();
    moveAndDraw(turtle, context);
  
    turtle.left();
    moveAndDraw(turtle, context);
  
  }
}

let t = new Turtle(300, 300, UP, 30);

ctx.beginPath();
ctx.moveTo(t.x, t.y);

// movement instructions here
hilbertPatternC(t, ctx, 1, UP);

ctx.strokeStyle = "white";
ctx.stroke();