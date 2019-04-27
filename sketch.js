const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

let cnv;
let bird;
let pipes = [];
let score = 0;
let bestScore = 0;
let gameRunning = false;


function setup() {
	if (isMobile) {
		cnv = createCanvas(windowWidth, windowHeight);
	} else {
		cnv = createCanvas(320, 480);
	}
	bird = new Bird(isMobile);
	cnv.mouseClicked(gameStart);
}


function draw() {
	background(0);

	if (gameRunning) {	
		if (frameCount % 80 == 0) {
      pipes.push(new Pipe);
		}
		
		bird.update();
		bird.show();
    for (let i = pipes.length - 1; i > -1; i--) {
			pipes[i].update();
			pipes[i].show();
      if (pipes[i].checkCollision(bird)) {
				bestScore = max(bestScore, score);
				pipes[i].gameOver();
        gameOver();
			}
			if (pipes[i].birdCrossed(bird)) {
				score++;
				console.log(score);
			}
			if (pipes[i].offScreen()) {
        pipes.splice(i, 1);
      }
    }

    if (bird.checkCollision()) {
			bestScore = max(bestScore, score);
			console.log(bestScore);
      gameOver();
		}

	} else {	
		fill(255);
		bird.show();
		textAlign(CENTER)
		text('Click to start playing', width * 0.5, height / 2);
	}	
}

function keyPressed() {
	if (keyCode === 32 && gameRunning) {
    bird.fly();
	}
}

function touchStarted() {
	if (gameRunning) {
		bird.fly();
	}
}

function gameStart() {
	if (!gameRunning) {
		bird = new Bird(isMobile);
    gameRunning = true;
    pipes = [];
    loop();
	}
}

function gameOver() {
	bird.gameOver();
	fill(255)	
	rectMode(CENTER)
	rect(width/2, height/2, 200, 200, 5);
	rectMode(CORNER);
	fill(0);
	textAlign(CENTER);
	text("Score: " + score, width / 2, (height / 2) - 50);
	text("Best Score: " + bestScore, width / 2, (height / 2));
	text("Click to start playing again!", width / 2, (height / 2) + 50);
	score = 0;
	gameRunning = false;
	noLoop();
}