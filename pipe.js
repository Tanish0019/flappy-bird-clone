class Pipe {
  constructor() {
    this.x = width;
    this.velocity = 3;
    this.pipeTopLen = (random() * height * 2) / 5 + height / 5;
    this.gap = 100 + random() * 30;
    this.pipeBotLen = height - this.pipeTopLen - this.gap;
    this.pipeWidth = 30;
  }

  show = () => {
    fill(255);
    rect(this.x, 0, this.pipeWidth, this.pipeTopLen);
    rect(this.x, this.pipeTopLen + this.gap, this.pipeWidth, this.pipeBotLen);
  };

  update = () => {
    this.x -= this.velocity;
  };

  offScreen = () => {
    if (this.x < -this.pipeWidth) return true;

    return false;
  };

  checkCollision = bird => {
    if (
      bird.x + bird.radius > this.x &&
      bird.x - bird.radius < this.x + this.pipeWidth &&
      (bird.y - bird.radius < this.pipeTopLen ||
      bird.y + bird.radius > this.pipeTopLen + this.gap)
    ) {
      return true;
    }
    return false;
  }

  birdCrossed = bird => {
    if (bird.x - bird.radius === this.x + this.pipeWidth) {
      return true;
    }
    return false;
  }

  gameOver = () => {
    fill(255, 0, 0);
    rect(this.x, 0, this.pipeWidth, this.pipeTopLen);
    rect(this.x, this.pipeTopLen + this.gap, this.pipeWidth, this.pipeBotLen);
  }
}