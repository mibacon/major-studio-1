/* 
keep track of the mouse click positions
draw a polygon from all the mouse click positions
*/
var x = [];
var y = [];

function setup() {
	createCanvas(windowWidth,windowHeight);
console.log("hello world")
}

function draw() {
  background(100);
  stroke(200,0,0);
  
  noFill();
  rect(mouseX-50,mouseY-50,100,100,10);

  line(0,0,mouseX,mouseY);

  fill(30);
  beginShape();
  for(i=0; i <x.length; i++) {
   	vertex(x[i], y[i]);
   	textSize(32);
	fill(0, 150, 153);
   	text((x[i] + " ," + y[i]), x[i], y[i]);
   	fill(30,30,30, 15);
    }

  endShape(CLOSE);
}
	

function mouseReleased(){
	append(x, mouseX);
	append(y, mouseY);
	console.log(x, y);
	//console.log("click: " + mouseX + " " + mouseY);
}