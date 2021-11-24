class Link extends TXT {
  constructor(txt, link, x, y, active = false, fs = 25) {
    super(txt);
    this.link = link;
    this.x = x;
    this.y = y;
    this.w = textWidth(txt);
    this.h = fs;
    this.fs = fs;
    this.active = active;
  }

  thinking() {}

  display() {
    push();
    textAlign(LEFT);

    textSize(this.fs);
    if (this.active) {
      noiseR = map(noise(noiseLocation), 0, 1, 220, 255);
      this.x = width * 0.15;
    } else {
      noiseR = map(noise(noiseLocation), 0, 1, 120, 200);
      this.x = width * 0.2;
    }

    fill(noiseR);
    noiseLocation += 0.1;

    if (this.collide() && !this.active) {
      noiseR = map(noise(noiseLocation), 0, 1, 200, 235);
      this.x = width * 0.18;
      fill(noiseR, 200, 200);
    }

    if (!this.doneDisplayText) {
      if (this.txtFrame % 1 == 0) {
        this.displayedText += this.txtArray[this.txtIndex++];
        if (this.txtIndex >= this.txtArray.length) this.doneDisplayText = true;
      }
      text(this.displayedText, this.x, this.y - 30);
      this.txtFrame++;
    } else {
      text(this.txt, this.x, this.y - 30);
    }
    stroke(noiseR, 90, 90, 50);
    strokeWeight(3);
    pop();
    this.thinking();
  }

  collide() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y - this.h * 2 &&
      mouseY < this.y + this.h
    ) {
      return true;
    }
    return false;
  }
}
