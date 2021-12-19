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

let NedTheCircle = new Circle(
  context, 
  20, 
  [...windowCenter], 
  [0, 20, 40]
);

let playAnimation = false;
let dx = 0;
let dy = 0;

function handleKeyPress(e) {

  console.log(`Key Press: ${e.code}`);

  if (e.code === 'Enter') {
    playAnimation = !playAnimation;
    // console.log('Animation Playing');
    requestAnimationFrame(animate);
  }

  if (e.code === 'ArrowRight') {
    dx = 10;
  }

  if (e.code === 'ArrowLeft') {
    dx = -10;
  }

  if (e.code === 'ArrowUp') {
    e.preventDefault();
    dy = -10;
  }

  if (e.code === 'ArrowDown') {
    e.preventDefault();
    dy = 10;
  }

}

function handleKeyUp(e) {
  if (e.code === 'ArrowRight' || 'ArrowLeft') {
    dx = 0;
  }

  if (e.code === 'ArrowUp' || 'ArrowDown') {
    dy = 0;
  }
}

function animate(timestamp) {

  console.log(`Animation Has Been Running For: ${Math.floor(timestamp / 1000)} seconds`);

  clearFrame(context);
  NedTheCircle.x += dx;
  NedTheCircle.y += dy;
  NedTheCircle.h += dx;
  NedTheCircle.draw();

  if (playAnimation) {
    requestAnimationFrame(animate);
  } else {
    // console.log('Animation Paused')
  }
}