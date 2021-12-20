const canvas = document.getElementById('canvas');
canvas.width = frameWidth = window.innerWidth;
canvas.height = frameHeight = window.innerHeight;

const context = canvas.getContext ? canvas.getContext('2d') : null;

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', handleKeyUp);

if(context === null) {
  console.log("Couldn't load context.");
};

const windowCenter = [window.innerWidth/2, window.innerHeight/2];
const CIRCUMFERENCE = Math.PI * 2;

function clearFrame(ctx) {
  ctx.clearRect(0, 0, frameWidth, frameHeight);
}

function drawCircle(ctx, x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, CIRCUMFERENCE);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function Circle(ctx, r, [x, y], [h, s, l]) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.h = h;
  this.s = s;
  this.l = l;
  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, CIRCUMFERENCE);
    ctx.closePath();
    ctx.fillStyle = `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
    ctx.fill();
  };
};