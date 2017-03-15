var data;
var myFont;
var margin = 50;
var topmargin = 150;
var hash = [];
var hash2 = [];
var hash3 = [];
var hash4 = [];
var hash5 = [];

var boxes = [];
var total, unit, pad;


function preload(){
	data=loadJSON('level1.json');
	myFont = loadFont('Raleway-Thin.ttf');
}

function setup(){
	var label;
	createCanvas(windowWidth,windowHeight);

	total = width/91;
	unit = total * 80/91;
	pad = total * 11/91;

	
	for(var i in data.all){
		var clean = data.all[i].Diversion_Category;
		if (hash[clean] >= 1) {
			hash[clean] ++;
		} else {
			hash[clean] = 1;
		}	
	} 
	var keys = Object.keys(hash)
	for(var i = 0; i < keys.length; i++){
		label = keys[i];
		var typeUnit = hash[label];
		// console.log(typeUnit);
		var x1;

		if(i == 0){
			x1 = margin;
			// console.log("hellow");
		} else {
			var newkeys = keys[i-1];
			var oldUnit = hash[newkeys];
			// console.log(oldUnit)
			x1 = x1 + oldUnit*unit + (oldUnit-1)*pad;
		}
		var col;
		if(label == "Refuse"){
			col = [128,93,67]
		} else if (label == "Organics Suitable for Composting"){
			col = [0,172,179]
		} else if (label == "Designated MGP"){
			col = [32,108,128]
		} else {
			col = [51,174,204]
		}
		y1 = topmargin
		boxes[i] = new Box(label,typeUnit,x1,y1,col);
	}
		
	
	for(var i in data.all){
		var clean = data.all[i].Category;
		if (hash2[clean] >= 1) {
			hash2[clean] ++;
		} else {
			hash2[clean] = 1;
		}	
	} 
	var keys2 = Object.keys(hash2)
	for(var i = 0; i < keys2.length; i++){
		var label2 = keys2[i];
		var typeUnit2 = hash2[label2];


		var x2;

		if(i == 0){
			x2 = margin;
			// console.log("hellow");
		} else {
			var newkeys2 = keys2[i-1];
			var oldUnit2 = hash2[newkeys2];
			// console.log(oldUnit2)
			x2 = x2 + oldUnit2*unit + (oldUnit2-1)*pad;
		}
		y2 = topmargin +25
		//color
		var col;
		if(label2 == "Construction & Demolition"){
			col = [204,149,107];
		} else if (label2 == "E-Waste"){
			col = [255,229,210];
		} else if (label2 == "Harmful Household Products"){
			col = [179,83,0];
		} else if (label2 == "Retail Bags/Sleeves"){
			col = [128, 93, 67];
		} else if (label2 == "Textiles"){
			col = [128,115,105];
		} else if (label2 == "Other"){
			col = [204, 149, 107];
		} else if (label2 == "Paper-Organics" || label2 == "Organics"){
			col = [0,172,179]
		} else if (label2 == "Metal" || label2 == "Glass"|| label2 == "PaperMGP" || label2 == "Plastic"){
			col = [32,108,128]
		} else {
			col = [51,174,204]
		
		}
		
		boxes.push(new Box(label2,typeUnit2,x2,y2,col));
		// console.log(boxes)
	}
	
	for(var i in data.all){
		var clean = data.all[i].Material;
		if (hash3[clean] >= 1) {
			hash3[clean] ++;
		} else {
			hash3[clean] = 1;
		}	
	}
		// console.log(hash3)
		var keys3 = Object.keys(hash3)
		// console.log(keys3)
		for(var i = 0; i < keys3.length; i++){
			var label3 = keys3[i];
			var typeUnit3 = hash3[label3];

			console.log(label3)
			var x3;

			if(i == 0){
				x3 = margin;
				
			} else {
			var newkeys3 = keys3[i-1];
			var oldUnit3 = hash3[newkeys3];
			
			x3 = x3 + oldUnit3*unit + (oldUnit3-1)*pad;
			}
		
		y3 = topmargin + 50
		//color
		var col;
		if(label3 == "Untreated Dimensional Lumber/Pallets/Crates" || label3 == "Treated/Contaminated Wood" || label3 == "Other C&D Debris Not Elsewhere Classified"){
			col = [204,149,107];
		} else if (label3 == "Audio/Visual Equipment" || label3 == "Computer Monitors" || label3 == "Televisions" || label3 == "Other Computer Equipment"){
			col = [255,229,210];
		} else if (label3 == "Oil Filters" || label3 == "Antifreeze" ||label3 == "Wet-Cell Batteries" ||label3 == "Water-Based Adhesives/Glues" ||label3 == "Latex Paint" ||
					label3 == "Oil-Based Paint/Solvent" ||label3 == "Pesticides/Herbicides/Rodenticides" ||label3 == "Dry-Cell Batteries" ||label3 == "Fluorescent Tubes/CFLs" || 
					label3 == "Mercury-Laden Wastes" || label3 == "Compressed Gas Cylinders/Fire Extinguishers" ||label3 == "Home Medical Products" ||label3 == "Other Potentially Harmful Wastes"){
			col = [179,83,0];
		} else if (label3 == "Non-Clothing" || label3 == "Clothing" || label3 == "Shoes/Rubber/Leather"){
			col = [128,115,105];
		} else if (label3 == "Other Nonrecyclable Paper" || label3 == "Plastic - Other" || label3 == "Organics" || label3 == "Miscellaneous Inorganics"){
			col = [204, 149, 107];
		} else if (label3 == "Compostable/Soiled/Waxed OCC/Kraft" || label3 == "Yard Waste" || label3 == "Food"){
			col = [0,172,179]
		} else if (label3 == ""){
			col = 0;
		} else {
			col = [32,108,128]
		} 
		
		boxes.push(new Box(label3,typeUnit3,x3,y3,col));
	console.log(boxes)
		}

		for(var i in data.all){
		var clean = data.all[i].SubMaterial;
		if (hash4[clean] >= 1) {
			hash4[clean] ++;
		} else {
			hash4[clean] = 1;
		}	
		}
		// console.log(hash3)
		var keys4 = Object.keys(hash4)
		// console.log(keys3)
		for(var i = 0; i < keys4.length; i++){
			var label4 = keys4[i];
			var typeUnit4 = hash4[label4];

			console.log(label4)
			var x4;

			if(i == 0){
				x4 = margin;
			} else {
			var newkeys4 = keys4[i-1];
			var oldUnit4 = hash4[newkeys4];
			x4 = x4 + oldUnit4*unit + (oldUnit4-1)*pad;
			}
		
		y4 = topmargin + 75

		var col;
		if(label4 == "TV Peripherals (Covered)" || label4 == "Other (Non-Covered)"){
			col = [255,229,210];
		} else if (label4 == "Expanded Polystyrene" || label4 == "Film" || label4 == "Non-C&D Wood" || label4 == "Carpet/Upholstery"
					|| label4 == "Disposable Diapers/Sanitary Products" || label4 == "Animal By-Products"|| label4 == "Fines"|| label4 == "Miscellaneous Organics"){
			col = [204, 149, 107];
		} else if (label4 == ""){
			col = 0;
		} else {
			col = [32,108,128]
		} 
		
		boxes.push(new Box(label4,typeUnit4,x4,y4,col));
	}
	for(var i in data.all){
		var clean = data.all[i].SubSub;
		if (hash5[clean] >= 1) {
			hash5[clean] ++;
		} else {
			hash5[clean] = 1;
		}	
		}
		// console.log(hash3)
		var keys5 = Object.keys(hash5)
		// console.log(keys3)
		for(var i = 0; i < keys5.length; i++){
			var label5 = keys5[i];
			var typeUnit5 = hash5[label5];

			console.log(label5)
			var x5;

			if(i == 0){
				x5 = margin;
			} else {
			var newkeys5 = keys5[i-1];
			var oldUnit5 = hash5[newkeys5];
			x5 = x5 + oldUnit5*unit + (oldUnit5-1)*pad;
			}
		
		y5 = topmargin + 100;

		var col;
		if(label5 == "Refuse Bags" || label5 == "All Other Film"){
			col = [204, 149, 107];
		} else if (label5 == ""){
			col = 0;
		} else {
			col = [32,108,128]
		} 
		
		boxes.push(new Box(label5,typeUnit5,x5,y5,col));
	}
}
	
function draw(){
	textFont(myFont);
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


