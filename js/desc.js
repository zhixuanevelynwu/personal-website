class Desc extends TXT {
  constructor(txt, x, y, fs = 20) {
    super(txt);
    this.x = x;
    this.y = y;
    this.fs = fs;
    this.w = textWidth(txt);
    this.h = fs;
  }

  thinking() {}

  display() {
    push();
    textAlign(LEFT);
    textSize(this.fs);
    noiseR = map(noise(noiseLocation), 0, 1, 220, 255);
    fill(noiseR, 150, 150);
    noiseLocation += 0.1;

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
      mouseX > this.x - this.w / 2 &&
      mouseX < this.x + this.w / 2 &&
      mouseY > this.y - this.h * 2 &&
      mouseY < this.y + this.h
    ) {
      return true;
    }
    return false;
  }
}
