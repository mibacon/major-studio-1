function setup() {
	createCanvas(windowWidth,windowHeight);
}

function draw() {
  //draw 25 circles, along a vertical line in the center of the screen, evenly spaced. 
  //Make each circle larger than the previous one, and have each of them have a different color.
  //ellipse(x,y,w,[h])
  for (var i = 0; i<25; i++){
  	var circHeight = map(i, 0, 25, 0, height);
  	var circWidth = map(i,0,25,5,20);
  	var circColer = map(i,0,25,0,255);
  	fill(circColer,100,circColer)
  	ellipse(width/2,i * 30,circWidth);
  }
}