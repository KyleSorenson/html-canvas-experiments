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

let dragStart;
let dragEnd;

// let mouseDownCoordinates = {
//   x: 0,
//   y: 0
// }

let prevX = 0;
let circleInitX = circle.x;

window.addEventListener('mousedown', e => {
  // mouseDownCoordinates = {
  //   x: e.clientX,
  //   y: e.clientY
  // }
  prevX = e.clientX;
  canvas.style.cursor = "move";
  window.addEventListener('mousemove', clickAndDrag);

})

window.addEventListener('mouseup', e => {
  canvas.style.cursor = 'default';
  window.removeEventListener('mousemove', clickAndDrag);
  circleInitX = circle.x;

})

function clickAndDrag(e) {
  // let circleInitPos = {
  //   x: circle.x,
  //   y: circle.y
  // }
  // let coordinateOffset = {
  //   x: e.clientX - mouseDownCoordinates.x,
  //   y: e.clientY - mouseDownCoordinates.y
  // }
  let mouseMoveX = e.clientX;
  let newX = mouseMoveX - prevX;
  // let circleInitX = circle.x;
  if (e.clientX >= 0 && e.clientX <= frameWidth && e.clientY >=0 && e.clientY <= frameHeight) {
    clearFrame(context);
    circle.x = circleInitX + newX;
    // circle.y = coordinateOffset.y;
    circle.draw();
    // console.log(`
    // MouseDown: [${mouseDownCoordinates.x},${mouseDownCoordinates.y}]
    // Offset: [${coordinateOffset.x},${coordinateOffset.y}]
    // Circle: [${circle.x += coordinateOffset.x},${circle.x += coordinateOffset.x}]
    // `);
    context.fillText(`Mouse Down: ${prevX}`, 10, 20);
    context.fillText(`Mouse Move: ${mouseMoveX}`, 10, 35);
    context.fillText(`Offset: ${newX}`, 10, 50);
    context.fillText(`Circle Start: ${circleInitX}`, 10, 65);
    context.fillText(`Circle Current: ${circle.x}`, 10, 80);
    // console.log(`
    // MouseDown: ${prevX},
    // Offset: ${newX},
    // Circle: ${circle.x}
    // `);
  }
  // prevX = newX;
}
