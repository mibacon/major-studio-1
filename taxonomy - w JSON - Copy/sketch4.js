var data;
var boxes = [];
var margin = 50;
var topmargin = 150;

var total, unit, pad;

function preload(){
	data=loadJSON('nested.json');
}

function setup(){
	
	createCanvas(windowWidth,windowHeight);
	total = width/91;
	unit = total * 80/91;
	pad = total * 11/91;
	

	var unitcount = 0;
	var level1 = [];
	var level2 = [];
	var level3 = [];
	var level4 = [];

	for (var i = 0; i < data.all.length; i++){
	var l1label = data.all[i].Diversion_Category;
	var l1size = 0;
		
		
		//let's go through the subcatgories of trash (e.g. C&D, HHP, etc.)
		for (var j = 0; j < data.all[i].subtype.length; j++){
			var l2label = data.all[i].subtype[j].l2cat;
			var l2size = 0;

			//if there are no subcategories to C&D, etc, count the unit.
			if (Object.keys(data.all[i].subtype[j].subtype3).length == 0){
				unitcount = unitcount + 1;
				l1size = l1size + 1;
				l2size = l2size  + 1;
				}

			//let's go through the sub-subcategories of C&D (e.g. lumber, or AV equipment)
			for (var k = 0; k < data.all[i].subtype[j].subtype3.length; k++){
				var l3label = data.all[i].subtype[j].subtype3[k].l3cat;
				var l3size = 0;
								
				//if there are no subcategories, count the unit.
				if (Object.keys(data.all[i].subtype[j].subtype3[k].subtype4).length == 0){
					unitcount = unitcount + 1;
					l1size = l1size + 1;
					l2size = l2size + 1;
					l3size = l3size +1;
				}
				
				//let's go through the next layer of categories
				for (var m = 0; m < data.all[i].subtype[j].subtype3[k].subtype4.length; m++){
					var l4label = data.all[i].subtype[j].subtype3[k].subtype4[m].l4cat;
					var l4size = 0
					
					unitcount = unitcount + 1;
					l1size = l1size + 1;
					l2size = l2size + 1;
					l3size = l3size + 1;
					l4size = l4size + 1;
				
					
					level4[l4label] = l4size;

				//end of m loop
				}
			
			
			
			level3[l3label] = l3size;
			//end of k loop	
			} 

			level2[l2label] = l2size;
			
		//end of j loop
		}
		// console.log(level2);
		level1[l1label] = l1size;

		// console.log(level3)
		// console.log(level4)
		var level1Keys = Object.keys(level1);
		var level2Keys = Object.keys(level2);
		var level3Keys = Object.keys(level3);

		//console.log(level2Keys);
		
		// var ilabel = data.all[i].Diversion_Category;
		var l1name = level1Keys[i];
		console.log(l1name);
		var l1unit = level1[l1name];
		console.log(l1unit)
		var l1Y = topmargin;
		var l1col = data.all[i].color;
		var l1X;
		var l1W = l1unit*unit + (l1unit-1)*pad;
			if(i == 0){
				l1X = margin;
			} else {
				l1X = l1X + l1W;
			}
		boxes.push(new Box(l1name,l1W,l1X,l1Y,l1col));

		for(var j = 0; j < data.all[i].subtype.length; j++){
			var jname = level2Keys[j];
			console.log(jname);
			var junit = level2[jname];
			console.log(junit)
			var jY = topmargin + 25;
			var jcol = data.all[0].subtype[j].l2color;
			var jX;
			
			if(j == 0){
				jX = margin;
			} else {
				jX = jX + jW;
			}
			console.log(jX)
			var jW = junit*unit + (junit-1)*pad;
			boxes.push(new Box(jname,jW,jX,jY,jcol));

			for(var k = 0; k < data.all[0].subtype[j].subtype3.length; k++){
				var kname = level3Keys[k];
				console.log("kname is " + kname);
				var kunit = level3[kname];
				console.log("kunit is " + kunit);
				var kY = topmargin + 50;
				var kcol = data.all[0].subtype[j].subtype3[k].l3color;
				var kX;
				var kW = kunit*unit + (kunit-1)*pad;
				if(k == 0){
					kX = margin;
				} else {
					kX = jX + kW + pad;
				}
				console.log("kx for " + kname + " is " + kX)
				console.log(unit)
				console.log(pad)
				boxes.push(new Box(kname,kW,kX,kY,kcol))
			}
			
		}	
		
	}	
		console.log(boxes)


			// for (var k = 0; k < data.all[0].subtype[j].subtype3.length; k++){
				

			// 	var l3label = data.all[0].subtype[j].subtype3[k].l3cat;
			// 	console.log(l3label + " is size " + l3size)
			// 	// var kX;
			// 	// if(k == 0){
			// 	// kX = jX;
			// 	// } else {
			// 	// 	kX = jX + kW;
			// 	// }
			// 	// var kY = topmargin + 50;
			// 	// var kcol = data.all[0].subtype[j].subtype3[k].l3color;

			// 	// var kW = l3size*unit+(l3size-1)*pad;
				
			// 	// boxes.push(new Box(l3label,kW,kX,kY,kcol));
			// }

							
				
				// 
				
				// console.log(l3label + " is " + l3size);
				// console.log("l3label is " + l3label);
				// console.log("l3size is " + l3size);
				
				// console.log("kW is " + kW);
				// console.log("unit is "+ unit);
				// console.log("pad is " + pad)
				// console.log(kX);
				
						

					//for some reason, in order for the m to loop, i needed this block of code. now it works without it...
					// if (l4 == 0){
					// 	console.log(l3label + "l4 = 0")
					// 	break
					// }
					// console.log(l4label + " " + l4size)			
		// var l4label = data.all[0].subtype[j].subtype3[k].subtype4[m].l4cat;
					// var mX;
					// if(m == 0){
					// 	mX = kX;
					// } else {
					// 	mX = kX + (l4size*unit) + (l4size-1)*pad;
					// }
					// var mY = topmargin + 75;
					// var mcol = data.all[0].subtype[j].subtype3[k].subtype4[m].l4color;
					
					// boxes.push(new Box(l4label,l4size,mX,mY,mcol));
					//this statement won't work. i can't go down to the subtype 5 level.
					// if (Object.keys(data.all[0].subtype[j].subtype3[k].subtype4[m].subtype5).length == 0){
					// 	unitcount = unitcount + 1;
					// 	l2size = l2size + 1;
					// 	// console.log(l3label + " is 0")
					// } else {
					// 	console.log(l3label + " has subtype5"); 
					// }
			

			
	

}
// 		// console.log(unitcount)
// 	// }
	
// 	// console.log(l2)
// 	// console.log(l3)
// 	// var l3 = Object.keys(data.all[0].subtype[0].subtype3).length;
// 	// console.log(l3)
// 	// console.log(l2)
// 	// console.log(data.all.subtype.length)
// 	// 	for (var i=0; i<data.all.length; i++){
// 	// 		for(var j = 0; j<subtype.length; j++){

// 	// 		}

// 	// 	var cat = data.alll[i].units;
// 	// 	var w = cat*unit + (cat-1)*pad;

// 	// 	noStroke();
// 	// 	fill(data.all[i].color)
// 	// 	rect(x, topmargin, w, 20);
// 	// 	x = x + w + pad;

// 	// 	for(var j=0; j<data.alli].subtype.length; j++){
// 	// 		var cat2 = data.all[i].subtype[j].l2units;
// 	// 		var w2 = cat2*unit + (cat2-1)*pad;
			
// 	// 		noStroke();
// 	// 		fill(data.all[i].subtype[j].l2color)
// 	// 		rect(x2, topmargin+25, w2, 20);
// 	// 		x2 = x2 + w2 + pad;

// 	// 			for(var k=0; k<data.all[i].subtype[j].subtype3.length; k++){
// 	// 				var cat3 = data.all[i].subtype[j].subtype3[k].l3units;
// 	// 				var w3 = cat3*unit + (cat3-1)*pad;
					
// 	// 				noStroke();
// 	// 				fill(data.all[i].subtype[j].subtype3[k].l3color)
// 	// 				rect(x3, topmargin+50, w3, 20);
// 	// 				x3 = x3 + w3 + pad;
// 	// 			}
			
// 	// 	}
// 	// }

// console.log(boxes)
// }


function draw(){
	// textFont(myFont);
	background(0);
	textSize(30);
	text("Taxonomy of NYC Garbage",margin,topmargin*.75)
	
	for(var i in boxes){
		boxes[i].display();
		boxes[i].rollOver();
	}
}		





function Box(a,w,x,y,c){
	this.x = x;
	this.y = y;
	this.w = w;
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
			// textFont(myFont)
			fill(255)
			text(this.label, margin, height*.67)
		}
	}

}