let x = 0;
let y = 0;
let px = 0;
let py = 0;
let easing = 0.1;
let gif_createImg;

function preload() {
  gif_createImg = createImg("images/squid.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
if (mouseIsPressed) {
  strokeWeight(5)
  line(mouseX, mouseY, pmouseX, pmouseY);
}
gif_createImg.position(mouseX, mouseY/2);
  brush();
}


function brush(){

  x += (mouseX - x) * easing;
  y += (mouseY - y) * easing;
  strokeWeight(15);
  line(x, y, px, py);

  px = x;
  py = y;
}

function mousePressed(){
 background(220);
}
