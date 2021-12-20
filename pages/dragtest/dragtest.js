const canvas = document.getElementById('canvas');
canvas.width = frameWidth = 600;
canvas.height = frameHeight = 400;

const context = canvas.getContext ? canvas.getContext('2d') : null;

if(context === null) {
  console.log("Couldn't load context.");
};

const windowCenter = [frameWidth/2, frameHeight/2];
const CIRCUMFERENCE = Math.PI * 2;

function clearFrame(ctx) {
  ctx.clearRect(0, 0, frameWidth, frameHeight);
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

let circle = new Circle(context, 50, [...windowCenter], [60, 50, 60]);
circle.draw();

function clickAndDrag(e) {
  if (e.clientX <= frameWidth && e.clientY <= frameHeight) {
    clearFrame(context);
    circle.x = e.clientX;
    circle.y = e.clientY;
    circle.draw();
    console.log(`[${e.clientX},${e.clientY}]`);
  }
}



window.addEventListener('mousedown', event => {

  canvas.style.cursor = "move";
  window.addEventListener('mousemove', clickAndDrag);

})

window.addEventListener('mouseup', event => {

  canvas.style.cursor = 'default';
  window.removeEventListener('mousemove', clickAndDrag);

})

