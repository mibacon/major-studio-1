function setup() {
	createCanvas(windowWidth,windowHeight);
}
var shape;

function mouseReleased(){
	if(mouseX < width/2) {
		shape = 1
	} else {
		shape = 2
	}
}

function draw(){
	background(0);
	if (shape == 1) {
		fill(100,180,200);
		rect(width/3,(height/2)-100,200,200);
	} else if (shape == 2){
		fill(100,180,200);
		ellipse((width/3)+100,height/2,200);
	} else {
		noFill(shape);
	}
}