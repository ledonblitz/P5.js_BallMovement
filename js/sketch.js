let ball;

let start = false;

let moveX = 1;
let moveY = 0;

let speed = 2;

function setup() {
  createCanvas(300, 300);
  ball = createVector(width / 2, height / 2);
  
}

function draw() {
  background(color('hsla(160, 100%, 50%, 0.5)'));
  if (start) {
    moveBall();
  }
  displayBall();
}

function mouseClicked() {
  moveX = 0;
  moveY = 0;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    start = true;
    moveY = -1;
    moveX = 0;
  } else if (keyCode === DOWN_ARROW) {
    moveY = 1;
    moveX = 0;
  } else if (keyCode === LEFT_ARROW) {
    moveX = -1;
    moveY = 0;
  } else if (keyCode === RIGHT_ARROW) {
    moveX = 1;
    moveY = 0;
  }
}

function moveBall() {
  ball.x += speed * moveX;
  ball.y += speed * moveY;

  if (ball.x < 0) {
    ball.x = width;
  } else if (ball.x > width) {
    ball.x = 0;
  }
  if (ball.y < 0) {
    ball.y = height;
  } else if (ball.y > height) {
    ball.y = 0;
  }
}

function displayBall() {
  fill(0, 125, 125);
  ellipse(ball.x, ball.y, 20, 20);
}