class RandomWalker {

  constructor() {

    this.position = walkers.length ? createVector(random() > 0.5 ? width : 0, random() > 0.5 ? height : 0) : createVector(width / 2, height / 2);
    this.noiseSeedX = Math.floor(random(10000000));
    this.noiseSeedY = Math.floor(random(10000000));

    this.frozen = walkers.length ? false : true;
  }

  display() {

    //if (!this.frozen) return;
    ellipse(this.position.x, this.position.y, walkerSize);
  }

  calcNextPos() {

    if (this.frozen) return;

    this.noiseSeedX += 0.01;
    this.noiseSeedY += 0.01;

    this.position.x += noise(this.noiseSeedX) * 30 - 15;
    this.position.y += noise(this.noiseSeedY) * 30 - 15;

    if (this.position.x > width) this.position.x = 0;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y < 0) this.position.y = height;
  }

  freezeCheck() {

    for (const walker of walkers) {

      if (this.position.dist(walker.position) < walkerSize
        && walker.frozen) this.frozen = true;

    }
  }
}