var data;

var margin = 50;
var topmargin = 150;

var total, unit, pad;

function preload(){
	data=loadJSON('test.json');
}

function setup(){
	
	createCanvas(windowWidth,windowHeight);
	total = width/91;
	unit = total * 80/91;
	pad = total * 11/91;
	
	var x = margin;
	var x2 = margin;
	var x3 = margin;

	
	var l1= Object.keys(data.all).length;
	// console.log(pl)

	var l2 = Object.keys(data.all[0].subtype).length;

	var l3 = Object.keys(data.all[0].subtype[0].subtype3).length;
	console.log(l3)

	// console.log(data.all.subtype.length)
	// 	for (var i=0; i<data.all.length; i++){
	// 		for(var j = 0; j<subtype.length; j++){

	// 		}

	// 	var cat = data.alll[i].units;
	// 	var w = cat*unit + (cat-1)*pad;

	// 	noStroke();
	// 	fill(data.all[i].color)
	// 	rect(x, topmargin, w, 20);
	// 	x = x + w + pad;

	// 	for(var j=0; j<data.alli].subtype.length; j++){
	// 		var cat2 = data.all[i].subtype[j].l2units;
	// 		var w2 = cat2*unit + (cat2-1)*pad;
			
	// 		noStroke();
	// 		fill(data.all[i].subtype[j].l2color)
	// 		rect(x2, topmargin+25, w2, 20);
	// 		x2 = x2 + w2 + pad;

	// 			for(var k=0; k<data.all[i].subtype[j].subtype3.length; k++){
	// 				var cat3 = data.all[i].subtype[j].subtype3[k].l3units;
	// 				var w3 = cat3*unit + (cat3-1)*pad;
					
	// 				noStroke();
	// 				fill(data.all[i].subtype[j].subtype3[k].l3color)
	// 				rect(x3, topmargin+50, w3, 20);
	// 				x3 = x3 + w3 + pad;
	// 			}
			
	// 	}
	// }


}

		// for(var j = 0; j<data.subcategories[i].l2subcategories.length; j++){
		// 		var cat1 = data.subcategories[i].l2subcategories[j];
		// 		// var w = cat1.l2units*unit+(cat1[j].l2units-1)*pad;
		// 		// fill(data.subcategories[i].l2color)
				
		// 		console.log(cat1)
		// }
		



//rect(x,y,w,h)
// }

function Box(a,w,x,y,c){
	this.x = x;
	this.y = y;
	this.w = (w*unit + (w-1)*pad);
	this.h = 20;
	this.label = a;
	this.col = color(c);
	this.display = function(){
		// text(this.label,this.x,this.y-10);
		stroke(0)
		fill(this.col)
		rect(this.x,this.y,this.w,this.h);
	}
	this.rollOver = function(){
		if(mouseX > this.x && mouseX < this.x+this.w 
			&& mouseY > this.y && mouseY < this.y + this.h){
			// this.w = this.w*1.1;
			textSize(24)
			textFont(myFont)
			fill(255)
			text(this.label, margin, height*.67)
		}
	}

}