class RandomWalker {

  constructor() {

    this.position = walkers.length ? createVector(random(650), random(650), random(-500, -950)) : createVector(0, 0, 0);
    this.noiseSeedX = Math.floor(random(10000000));
    this.noiseSeedY = Math.floor(random(10000000));
    this.noiseSeedZ = Math.floor(random(10000000));
    this.frozen = walkers.length ? false : true;
  }

  display() {

    //if (!this.frozen) return;

    push();
    translate(this.position);
    sphere(walkerSize);
    pop();
  }

  calcNextPos() {

    if (this.frozen) return;

    this.noiseSeedX += 0.01;
    this.noiseSeedY += 0.01;
    this.noiseSeedZ += 0.01;

    this.position.x = (this.position.x += noise(this.noiseSeedX) * 30 - 15) % 650;
    this.position.y = (this.position.y += noise(this.noiseSeedY) * 30 - 15) % 650;
    this.position.z = (this.position.z += noise(this.noiseSeedZ) * 30 - 15) % 650;
  }

  freezeCheck() {

    for (const walker of walkers) {

      if (this.position.dist(walker.position) < walkerSize * 2
        && walker.frozen) this.frozen = true;

    }
  }
}