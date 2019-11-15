let x = 0;
let y = 0;
let px = 0;
let py = 0;
let easing = 0.1;
let gif_createImg;
let gif_createImg2;

let osc;
let pNoise;
let music;
let amplitude;
let volHistory = [];


function preload() {
  gif_createImg2 = createImg("images/down.gif");
  gif_createImg = createImg("images/squid.gif");
    music = loadSound('underwater-bubbles.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 135, 150);
  osc = new p5.Oscillator('triangle');
  amplitude = new p5.Amplitude();
  // osc.setType('triangle');

}

function draw() {
// if (mouseIsPressed) {
//   strokeWeight(1)
//    stroke(map(mouseY, 0, 600, 0, 255, true));
//    noFill();
//   ellipse(mouseX, mouseY, 10, 10);
//   ellipse(width - mouseX, height - mouseY, 10, 10);
// }

gif_createImg.position(mouseX, mouseY/2);

  brush();

  let level = amplitude.getLevel();

  pNoise = noise(frameCount / 20) * 100;

  osc.freq(map(mouseX, 0, width, 60, 1200) + pNoise);

  osc.amp(map(sin(frameCount / 20), -1, 1, 0.05, .2));
  // osc.amp(map(mouseY, 0, height, 0.2, 0));

  volHistory.push(level);
noFill();
strokeWeight(1);
stroke(242, 152, 116);
beginShape();

  for (let i = 0; i < volHistory.length; i++){
    let y = map(volHistory[i], 0, 1, height, 0);
    vertex(i, y);
  }
endShape();
// stroke(252, 3, 244);
stroke(255);
  ellipse(mouseX, mouseY, level * 100, level * 100);
  ellipse(mouseX+20, mouseY+20, level * 200, level * 200);
  // ellipse(mouseX+40, mouseY+40, level * 300, level * 300);

  if (volHistory.length > width - 50){
    volHistory.splice(0,1);
  }

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
  background(0, 135, 150);
  osc.start();
  music.play();
}

function mouseReleased(){
  osc.stop();
  music.stop();
}
