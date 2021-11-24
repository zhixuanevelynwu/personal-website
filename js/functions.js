let startFrame = 0;
let startR = 100;
let startO = 30;
let fade = false;

function startAnimation() {
  for (let i = 0; i < allWorms.length; i++) {
    allWorms[i].lightUp(width / 2, height / 2, startR);
  }
  startFrame++;
  startR += startO;
  if (startR > width / 2 && fade == false) {
    startO *= -1;
    fade = true;
  }
}

function displayWorms() {
  for (let i = 0; i < allWorms.length; i++) {
    allWorms[i].moveAndDisplay();
  }
}

let myFont;
function preload() {
  myFont = loadFont("Share_Tech_Mono/ShareTechMono-Regular.ttf");
}
