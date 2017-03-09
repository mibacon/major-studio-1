var data;
var myFont;
var margin = 50;
var topmargin = 150;

var total, unit, pad;

function preload(){
	data=loadJSON('test.json');
	myFont = loadFont('Raleway-Thin.ttf');
}

function setup(){
	
	createCanvas(windowWidth,windowHeight);
	textFont(myFont);
	background(0);
	fill(255);
	textSize(30);
	text("Taxonomy of NYC Garbage",margin,topmargin*.75)
	
	total = width/91;
	unit = total * 80/91;
	pad = total * 11/91;
	var x = margin;
	var x2 = margin;
	var x3 = margin;

	// var hash = {};
	// for(var i in data.all){
	// 	var clean= data.all[i].Diversion_Category;
	// 	if (hash[clean] >= 1) {
	// 		hash[clean] ++;
	// 	} else {
	// 		hash[clean] = 1;
	// 	}
	// }


	for (var i=0; i<data.level1.length; i++){
		var cat = data.level1[i].units;
		var w = cat*unit + (cat-1)*pad;

		noStroke();
		fill(data.level1[i].color)
		rect(x, topmargin, w, 20);
		x = x + w + pad;

		for(var j=0; j<data.level1[i].subtype.length; j++){
			var cat2 = data.level1[i].subtype[j].l2units;
			var w2 = cat2*unit + (cat2-1)*pad;
			
			noStroke();
			fill(data.level1[i].subtype[j].l2color)
			rect(x2, topmargin+25, w2, 20);
			x2 = x2 + w2 + pad;

				for(var k=0; k<data.level1[i].subtype[j].subtype3.length; k++){
					var cat3 = data.level1[i].subtype[j].subtype3[k].l3units;
					var w3 = cat3*unit + (cat3-1)*pad;
					
					noStroke();
					fill(data.level1[i].subtype[j].subtype3[k].l3color)
					rect(x3, topmargin+50, w3, 20);
					x3 = x3 + w3 + pad;
				}
			
		}
	}


}

		// for(var j = 0; j<data.subcategories[i].l2subcategories.length; j++){
		// 		var cat1 = data.subcategories[i].l2subcategories[j];
		// 		// var w = cat1.l2units*unit+(cat1[j].l2units-1)*pad;
		// 		// fill(data.subcategories[i].l2color)
				
		// 		console.log(cat1)
		// }
		



//rect(x,y,w,h)
// }