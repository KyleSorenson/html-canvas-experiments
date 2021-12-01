// the canvas element (canvas 1) is the DOM node in the HTML document
// the canvas context (ctx1) is the object that javascript can access to render graphics to the page. It can be 2d or "webgl" (3d)

const canvas1 = document.getElementById('canvas1');

if (canvas1.getContext) {
  const ctx1 = canvas1.getContext('2d');
    
  // Hello World
  ctx1.font = "40pt Calibri";
  ctx1.fillStyle = "blue";
  ctx1.fillText("Hello World!", 10, 50);

  // Overlapping Rectangles
  ctx1.fillStyle = 'rgb(200, 0, 0)';
  ctx1.fillRect(300, 10, 50, 50);

  ctx1.fillStyle = 'rgba(0, 0, 200, .5)';
  ctx1.fillRect(330, 30, 50, 50)

  // <canvas> only supports rectangles and paths (lists of points connected by lines).
  // All shapes must be created by combining paths

  // Basic rectangle methods (clear rect is basically an eraser)
  ctx1.strokeStyle = "white";
  ctx1.fillStyle = "white";
  ctx1.fillRect(425, 25, 100, 100);
  ctx1.clearRect(445, 45, 60, 60);
  ctx1.strokeRect(450, 50, 50, 50);

  // Basic path methods
  ctx1.beginPath();
  ctx1.moveTo(20, 150);
  ctx1.lineTo(120, 150);
  ctx1.lineTo(70, 240);
  ctx1.fill();

  // Sample smiley face using arcs
  ctx1.beginPath();
  ctx1.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx1.moveTo(110, 75);
  ctx1.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
  ctx1.moveTo(65, 65);
  ctx1.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
  ctx1.moveTo(95, 65);
  ctx1.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
  ctx1.stroke();

  // Speech bubble using quadratic curves
  ((xOffset,yOffset) => {
    ctx1.beginPath();
    ctx1.moveTo(75 + xOffset, 25 + yOffset);
    ctx1.quadraticCurveTo(25 + xOffset, 25 + yOffset, 25 + xOffset, 62.5 + yOffset);
    ctx1.quadraticCurveTo(25 + xOffset, 100 + yOffset, 50 + xOffset, 100 + yOffset);
    ctx1.quadraticCurveTo(50 + xOffset, 120 + yOffset, 30 + xOffset, 125 + yOffset);
    ctx1.quadraticCurveTo(60 + xOffset, 120 + yOffset, 65 + xOffset, 100 + yOffset);
    ctx1.quadraticCurveTo(125 + xOffset, 100 + yOffset, 125 + xOffset, 62.5 + yOffset);
    ctx1.quadraticCurveTo(125 + xOffset, 25 + yOffset, 75 + xOffset, 25 + yOffset);
    ctx1.stroke();
  })(0,240);

  // Heart using bezier curves
  ((xOffset,yOffset) => {
    ctx1.beginPath();
    ctx1.moveTo(75 + xOffset, 40 + yOffset);
    ctx1.bezierCurveTo(75 + xOffset, 37 + yOffset, 70 + xOffset, 25 + yOffset, 50 + xOffset, 25 + yOffset);
    ctx1.bezierCurveTo(20 + xOffset, 25 + yOffset, 20 + xOffset, 62.5 + yOffset, 20 + xOffset, 62.5 + yOffset);
    ctx1.bezierCurveTo(20 + xOffset, 80 + yOffset, 40 + xOffset, 102 + yOffset, 75 + xOffset, 120 + yOffset);
    ctx1.bezierCurveTo(110 + xOffset, 102 + yOffset, 130 + xOffset, 80 + yOffset, 130 + xOffset, 62.5 + yOffset);
    ctx1.bezierCurveTo(130 + xOffset, 62.5 + yOffset, 130 + xOffset, 25 + yOffset, 100 + xOffset, 25 + yOffset);
    ctx1.bezierCurveTo(85 + xOffset, 25 + yOffset, 75 + xOffset, 37 + yOffset, 75 + xOffset, 40 + yOffset);
    ctx1.fill();
  })(140, 60);

}