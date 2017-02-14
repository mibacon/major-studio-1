function setup() {
	createCanvas(600,600);
}

function draw() {
  //Draw a chess board on a square canvas, 8x8 black and white squares. Bonus: write the name of the field into each of the fields.
  //rect(x,y,w,h,[tl],[tr],[br],[bl])

		
	for(var i = 0; i<8; i++){
	  	for(var j = 0; j<8; j++) {
	   		var rectX = map(i,0,8,50,width);
	  		var rectY = map(j,0,8,50,height); 
	  		stroke(50);

	  		if (j%2==1) {
	  			if(i%2==0) {
	  			fill(0);
	  			rect(rectX,rectY,width/8,height/8);	
	  			} else {
	   			fill(255);
	  			rect(rectX,rectY,width/8,height/8);	
	  			}
	  		} else {
	  			if(i%2==1) {
	  			fill(0);
	  			rect(rectX,rectY,width/8,height/8);	
	  			} else {
	   			fill(255);
	  			rect(rectX,rectY,width/8,height/8);	 				
	  			}	
	  		}
  		}
  	}
  	var alpha = ["a","b","c","d","e","f","g","h"];
	var col = [1,2,3,4,5,6,7,8]
	for(k = 0; k < alpha.length; k++){
		for(l = 0; l<col.length;l++){
			//headers
			textAlign(CENTER);
			var alphaX = map(k,0,8,50, width);
			var colY = map(l,0,8,50,height);
			text(alpha[k],alphaX+width/16,25);
			text(col[l],25,colY+height/16);
			//labels
			var label = alpha[k] + col[l];
			text(label, alphaX+width/16, colY+height/16);
		}
	}	
}