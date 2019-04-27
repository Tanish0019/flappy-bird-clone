class Bird {
	constructor(isMobile) {
		if (isMobile) {
			this.x = 80;
			this.upForce = 3.2;
			this.gravity = 0.35;
		} else {
			this.x = 50;
      this.upForce = 4.6;
      this.gravity = 0.25;
		}
		this.y = height / 2;
		this.velocity = 0;
		this.radius = 15;
		this.airResistance = 0.6;
	}

	show = () => {
		fill(255);
		stroke(0);
		circle(this.x, this.y, 2 * this.radius);
	}

	update = () => {
		this.velocity += this.gravity;
		this.y += this.velocity;
	}

	checkCollision = () => {
		if (this.y + this.radius > height || this.y < 0 + this.radius) {
		  return true;
		}
		
		return false;
	}

	fly = () => {
		this.velocity -= this.upForce;
	}

	gameOver = () => {
		fill(255, 0, 0);
		circle(this.x, this.y, 2 * this.radius);
	}
}