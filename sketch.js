var gif_createImg;

function preload() {
  gif_createImg = createImg("images/squid.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
if (mouseIsPressed) {
  line(mouseX, mouseY, pmouseX, pmouseY);
}
gif_createImg.position(mouseX, mouseY/2);
}
