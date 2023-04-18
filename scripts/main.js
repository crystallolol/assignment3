const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const backgroundImage = new Image();
      backgroundImage.src = 'images/galaxy_bg.jpg';
      backgroundImage.onload = function() {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      };

const stickFigureImage = new Image();
stickFigureImage.src = 'images/rock.png';
let stickFigureX = 10;
let stickFigureY = 5;

const  playerImage = document.getElementById('source');
playerImage.src = 'images/spaceship.png';

let x = 0;
let y = 0;
let vx = 0;
let vy = 0;

function update(){
  ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
   // Draw stick figure
   ctx.drawImage(stickFigureImage, stickFigureX, stickFigureY);
  x += vx;
  y += vy;
  ctx.drawImage(playerImage, x, y, 50, 50);
  requestAnimationFrame(update)
}
update()

function draw() {

  // Draw stick figure
  ctx.drawImage(stickFigureImage, stickFigureX, stickFigureY);
  ctx.drawImage(stickFigureImage, stickFigureX-100, stickFigureY+200);
  ctx.drawImage(stickFigureImage, stickFigureX+200, stickFigureY+400);
  // Update position
  stickFigureX += 8;

  // Loop animation
  if (stickFigureX > canvas.width) {
    stickFigureX = -stickFigureImage.width;
  }

  // Call animation again
  requestAnimationFrame(draw);
}

// Start animation
draw();