let s;
let scl = 20;
let food;
let score = 0;
function setup(){
	createCanvas(window.innerWidth,window.innerHeight);
	s=new Snake();
	frameRate(10);
	piclocation();
	
}
function piclocation(){
	let cols = floor(width/scl);
	let rows = floor(height/scl);
	food = createVector(floor(random(cols)),floor(random(rows)));
	food.mult(scl);
}
function draw(){
	background(125);
	s.show();
	s.update();
	if(s.eat(food)){
	piclocation();
	score++;
	}
	fill(125,12,112);
	rect(food.x,food.y,scl,scl);
	fill(255);
	textSize(25);
	text('score: '+score,20,20);
	
	
}
function keyPressed() {
	if(keyCode===UP_ARROW){
		s.dir(0,-1);
	}
	else if(keyCode===DOWN_ARROW){
		s.dir(0,1);
	}
	else if(keyCode===LEFT_ARROW){
		s.dir(-1,0);
	}
	else if(keyCode===RIGHT_ARROW){
		s.dir(1,0);
	}
	
}