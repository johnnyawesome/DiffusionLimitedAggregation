class RandomWalker {

  constructor() {

    this.position = walkers.length ? createVector(random() > 0.5 ? width : 0, random() > 0.5 ? height : 0) : createVector(width / 2, height / 2);
    this.noiseSeedX = Math.floor(random(10000000));
    this.noiseSeedY = Math.floor(random(10000000));
    this.frozen = walkers.length ? false : true;
  }

  //Display the walker
  display() {
    ellipse(this.position.x, this.position.y, walkerSize);
  }

  //Calculate the walker's next position
  calcNextPos() {

    if (this.frozen) return;

    this.position.x += noise(this.noiseSeedX += 0.01) * 30 - 15;
    this.position.y += noise(this.noiseSeedY += 0.01) * 30 - 15;

    //Wrap around the edges of the canvas
    if (this.position.x > width) this.position.x = 0;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y < 0) this.position.y = height;
  }

  //Check if the walker gets frozen
  freezeCheck() {

    for (const walker of walkers) {

      if (this.position.dist(walker.position) < walkerSize
        && walker.frozen) this.frozen = true;

    }
  }
}