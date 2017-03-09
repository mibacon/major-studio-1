var data;
var myFont;
var margin = 50;
var topmargin = 150;
var hash = [];
var hash2 = [];
var hash3 = [];

var boxes = [];
var total, unit, pad;
var x = margin;

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
		if(label2 == "C&D"){
			col = [204,149,107];
		} else if (label2 == "E-Waste"){
			col = [255,229,210];
		} else if (label2 == "HHP"){
			col = [179,83,0];
		} else if (label2 == "Plastic Bags"){
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
	}
	console.log(boxes)
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


