let x = 0;
let y = 0;
let px = 0;
let py = 0;
let easing = 0.1;
let gif_createImg;
let gif_createImg2;


function preload() {
  gif_createImg2 = createImg("images/down.gif");
  gif_createImg = createImg("images/squid.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
if (mouseIsPressed) {
  strokeWeight(5)
  stroke(0,0,255);
  line(mouseX, mouseY, pmouseX, pmouseY);
  line(width - mouseX, height - mouseY, pmouseX, pmouseY);
}

gif_createImg.position(mouseX, mouseY/2);

  brush();
}


function brush(){
  gif_createImg2.position(mouseX/1.2, mouseY/1.4);

  x += (mouseX - x) * easing;
  y += (mouseY - y) * easing;
  strokeWeight(15);
  stroke(0);
  line(x, y, px, py);

  px = x;
  py = y;
}

function mousePressed(){
 background(255);

}
