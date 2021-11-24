class Button {
  constructor(txt, link, x = width * 0.7, y = height * 0.6, fs = 20) {
    this.txt = txt;
    this.link = link;
    this.x = x;
    this.y = y;
    this.w = textWidth(txt) + 90;
    this.h = fs + 40;
    this.a = createA(this.link, this.txt, "_blank");
  }

  display() {
    push();
    rectMode(CENTER);
    textAlign(CENTER);
    textSize(this.fs);
    noiseR = map(noise(noiseLocation), 0, 1, 150, 255);
    stroke(noiseR, 150, 150);
    strokeWeight(2.5);
    noFill();
    rect(this.x, this.y, this.w, this.h, 5);
    fill(noiseR, 150, 150);
    noStroke();
    this.a.position(this.x - 90, this.y - 10);
    text(this.txt, this.x, this.y + 8);
    pop();
  }
}
