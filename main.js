function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_gameover=loadSound("gameover.wav");
	mario_kill=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav")
	setSprites();// To load image for the game
	MarioAnimation();// To load all animations 
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
video.parent("game_console")

posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}

function draw() {
	game()// Start the mario game
}

function modelloaded(){
	console.log("Model is loaded")
}

function gotposes(results){
	if(results.length>0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}


