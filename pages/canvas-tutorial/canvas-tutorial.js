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

  // *********** Research Path2D() and SVG path integration further *********

}

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

// 6x6 Red/Green Spectrum Grid
((xOffset, yOffset) => {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx2.fillStyle = `rgb( ${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0 )`;
      ctx2.fillRect(j * 25 + xOffset, i * 25 + yOffset, 25, 25)    
    }  
  };
})(0, 0);

// Grid Play #1
((xOffset, yOffset) => {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx2.fillStyle = `hsl( ${Math.floor(360 - 60 * i)}, 50%, ${Math.floor(85 - 15 * j)}% )`;
      ctx2.fillRect(i * 25 + xOffset, j * 25 + yOffset, 25, 25)    
    }  
  };
})(150, 0);

// Grid Play #2
((xOffset, yOffset, rows, columns) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {

      let iOffset = 360 / rows;
      let jOffset = 100 / columns;
      ctx2.fillStyle = `hsl( ${Math.floor(360 - iOffset * i)}, 60%, ${Math.floor(100 - jOffset * j)}% )`;

      let boxWidth = 150 / rows;
      let boxHeight = 150 / columns;
      ctx2.fillRect(i * boxWidth + xOffset, j * boxHeight + yOffset, boxWidth, boxHeight);    
    }  
  };
})(300, 0, 150, 150);

// Grid Play #2
((xOffset, yOffset, rows, columns) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {

      let iOffset = 100 / rows;
      let jOffset = 100 / columns;
      ctx2.fillStyle = `hsl( 360, ${Math.floor(100 - iOffset * i)}%, ${Math.floor(100 - jOffset * j)}% )`;

      let boxWidth = 150 / rows;
      let boxHeight = 150 / columns;
      ctx2.fillRect(i * boxWidth + xOffset, j * boxHeight + yOffset, boxWidth, boxHeight);    
    }  
  };
})(450, 0, 150, 150);

// Grid Play #3
((xOffset, yOffset, rows, columns) => {

  let cosGradient = (item, steps) => .5 * Math.cos( (2 * Math.PI * steps * item) / 100 + Math.PI ) + .5;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {

      let iOffset = 100 / rows;
      let jOffset = 100 / columns;
      ctx2.fillStyle = `hsl( 0, 0%, ${ cosGradient(i, iOffset) * cosGradient(j, jOffset) * 100 }% )`;

      let boxWidth = 150 / rows;
      let boxHeight = 150 / columns;
      ctx2.fillRect(i * boxWidth + xOffset, j * boxHeight + yOffset, boxWidth, boxHeight);    
    }  
  };
})(600, 0, 150, 150);

// Grid Play #4
((xOffset, yOffset, rows, columns) => {

  let cosGradient = (item, steps) => .5 * Math.cos( (2 * Math.PI * steps * item) / 100 + Math.PI ) + .5;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {

      let iOffset = 100 / rows;
      let jOffset = 100 / columns;
      ctx2.fillStyle = `rgba( 255, 0, 0, ${ cosGradient(i, iOffset) * cosGradient(j, jOffset) * 100 }% )`;

      let boxWidth = 150 / rows;
      let boxHeight = 150 / columns;
      ctx2.fillRect(i * boxWidth + xOffset, j * boxHeight + yOffset, boxWidth, boxHeight);    
    }  
  };
})(0, 150, 15, 15);

// Grid Play #5
((xOffset, yOffset, rows, columns) => {

  let cosGradient = (item, steps) => .5 * Math.cos( (2 * Math.PI * steps * item) / 100 + Math.PI ) + .5;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {

      let iOffset = 100 / rows;
      let jOffset = 100 / columns;
      ctx2.fillStyle = `hsl( ${ cosGradient(i, iOffset) * cosGradient(j, jOffset) * 360 }, 50%, 50% )`;

      let boxWidth = 150 / rows;
      let boxHeight = 150 / columns;
      ctx2.fillRect(i * boxWidth + xOffset, j * boxHeight + yOffset, boxWidth, boxHeight);    
    }  
  };
})(150, 150, 30, 30);

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');

ctx3.strokeStyle = "white";

const hilbert = ( xOrigin, yOrigin, step ) => {
  
  const UP = Math.PI * 3/2;
  const LEFT = Math.PI;
  const RIGHT = Math.PI * 2;
  const DOWN = Math.PI * 1/2;

  const TRAVELUP = (vector) => vector;
  const TRAVELLEFT = (vector) => vector - Math.PI * 1/2;
  const TRAVELRIGHT = (vector) => vector + Math.PI * 1/2;
  const TRAVELDOWN = (vector) => vector + Math.PI;

  const A = (x, y, step, vector) => {
    
    let coordinates = [];

    ctx3.beginPath();
    ctx3.moveTo(x, y);

    x += Math.cos( TRAVELLEFT(vector) ) * step;
    y += Math.sin( TRAVELLEFT(vector) ) * step;
    ctx3.lineTo(x, y);

    x += Math.cos( TRAVELUP(vector) ) * step;
    y += Math.sin( TRAVELUP(vector) ) * step;
    ctx3.lineTo(x, y);

    x += Math.cos( TRAVELRIGHT(vector) ) * step;
    y += Math.sin( TRAVELRIGHT(vector) ) * step;
    ctx3.lineTo(x, y);

    ctx3.stroke()

    coordinates = [x, y];
    return coordinates

  }

  const B = (x, y, step, vector) => {
    
    let coordinates = [];

    ctx3.beginPath();
    ctx3.moveTo(x, y);

    y += Math.sin( TRAVELRIGHT(vector) ) * step;
    x += Math.cos( TRAVELRIGHT(vector) ) * step;
    ctx3.lineTo(x, y);

    x += Math.cos( TRAVELUP(vector) ) * step;
    y += Math.sin( TRAVELUP(vector) ) * step;
    ctx3.lineTo(x, y);

    x += Math.cos( TRAVELLEFT(vector) ) * step;
    y += Math.sin( TRAVELLEFT(vector) ) * step;
    ctx3.lineTo(x, y);

    ctx3.stroke()
    
    coordinates = [x, y];
    return coordinates

  }

  const C = (x, y, step, vector) => {
    
    let coordinates = [];

    ctx3.beginPath();
    ctx3.moveTo(x, y);

    y += Math.sin( TRAVELUP(vector) ) * step;
    x += Math.cos( TRAVELUP(vector) ) * step;
    ctx3.lineTo(x, y);

    x += Math.cos( TRAVELRIGHT(vector) ) * step;
    y += Math.sin( TRAVELRIGHT(vector) ) * step;
    ctx3.lineTo(x, y);

    x += Math.cos( TRAVELDOWN(vector) ) * step;
    y += Math.sin( TRAVELDOWN(vector) ) * step;
    ctx3.lineTo(x, y);

    ctx3.stroke()

    coordinates = [x, y];
    return coordinates

  }

  const D = (x, y, step, vector) => {
    
    let coordinates = [];

    ctx3.beginPath();
    ctx3.moveTo(x, y);

    y += Math.sin( TRAVELUP(vector) ) * step;
    x += Math.cos( TRAVELUP(vector) ) * step;
    ctx3.lineTo(x, y);

    x += Math.cos( TRAVELLEFT(vector) ) * step;
    y += Math.sin( TRAVELLEFT(vector) ) * step;
    ctx3.lineTo(x, y);

    x += Math.cos( TRAVELDOWN(vector) ) * step;
    y += Math.sin( TRAVELDOWN(vector) ) * step;
    ctx3.lineTo(x, y);

    ctx3.stroke()

    coordinates = [x, y];
    return coordinates

  }

  let coordinates = [xOrigin, yOrigin];
  coordinates = A(coordinates[0], coordinates[1], step, UP);
  coordinates = A(coordinates[0], coordinates[1], step, RIGHT);
  coordinates = A(coordinates[0], coordinates[1], step, DOWN);
  coordinates = A(coordinates[0], coordinates[1], step, LEFT);

}

hilbert(150, 150, 50);