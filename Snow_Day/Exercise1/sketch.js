function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
  	//Draw a rectangle, an ellipse and a triangle, each with different colors for outlines and fill.
  	//ellipse(x,y,w,[h])
  	//rect(x,y,w,h,[tl],[tr],[br],[bl])
  	//triangle(x1,y1,x2,y2,x3,y3)
  	//fill(v1,[v2],[v3],[a])
  	//stroke(v1,[v2],[v3],[a])
  	background(50);
  	fill(20,30,15);
  	stroke(200);
  	rect(20,20,300,300);
  	fill(0,200,215);
  	stroke(225);
  	ellipse(200,height/2,20);
  	stroke(150);
  	fill(225,60,150);
  	triangle(200,height/2,100,40,40,40);
}