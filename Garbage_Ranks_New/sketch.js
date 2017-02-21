var districts = [];
var table;
var widthMargin = 250;
var heightMargin = 50;
var districtName;
var img;
// var myFont;

function preload(){
	table = loadTable("Ranks.csv","csv","header");
	// myFont = loadFont("Ubuntu-Regular.ttf");
}

function setup(){
	createCanvas(windowWidth,windowWidth);
	img = loadImage("Neighbourhoods_New_York_City_Map.PNG")
	// displayData();
	

	for (var i = 0; i < table.getRowCount(); i++){
		var districtName = table.get(i,1);
		var col1=table.get(i,2);
		var col2=table.get(i,3);
		var col3=table.get(i,4);
		var col4=table.get(i,5);
		districts.push(new District(districtName,col1,col2,col3,col4));
		// console.log(districts);
		// console.log(districtName);
		// console.log(col1);
		// console.log(col2);
	}


	
}

function draw() {
	background(255);
	
	stroke(0)
	textSize(30);
	textStyle(BOLD)
	textAlign(LEFT)
	// textFont(myFont)
	text("Garbage Rankings",widthMargin-150,heightMargin+5,400,100);
	textSize(20)
	text("NYC's biggest producers of garbage, ranked", widthMargin-150, heightMargin +75, 300,100)
	textStyle(NORMAL)
	text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		, widthMargin-150,heightMargin+100, 350,600)
	  image(img, widthMargin-150, heightMargin+700,img.width/3.5,img.height/3.5)
	line(widthMargin-150,height-heightMargin,widthMargin,height-heightMargin);
	textSize(12)
	text("Sources:",widthMargin-150,height-heightMargin+15)
	text("https://data.cityofnewyork.us/City-Government/DSNY-Monthly-Tonnage-Data/ebb7-mvp5",widthMargin-150,height-heightMargin+30)
	text("https://data.cityofnewyork.us/City-Government/Demographics-and-profiles-at-the-Public-Use-Microd/7q5y-m6mr",widthMargin-150,height-heightMargin+45)
	text("https://data.cityofnewyork.us/City-Government/Census-Demographics-at-the-NYC-Community-District-/5unr-w4sc",widthMargin-150,height-heightMargin+60)
	  
	textSize(14)
	textStyle(NORMAL)
	textAlign(LEFT)
	text("Biggest Garbage Producers (per person)",(width-widthMargin)*.25+40,heightMargin+75,150,100);
	text("Biggest Recycling Producers (per person)",(width-widthMargin)*.5-10, heightMargin+75,150,100);
	text("Median Age (high to low)",(width-widthMargin)*.75-10, heightMargin+75,100,100);
	text("Median Income (high to low)",width-widthMargin-15,heightMargin+75,100,100)

	for (var i = 0; i < table.getRowCount(); i++){
		districts[i].display();
		}
}

function mousePressed(){
	for (var i = 0; i < table.getRowCount(); i++){
			districts[i].clicked();
		}
	
}

function District (districtName,col1,col2,col3,col4){
	this.districtName = districtName,
	this.rankg = col1,
	this.rankr = col2,
	this.ranka = col3,
	this.x1 = width*.25,
	this.y1 = map(col1,1,55,widthMargin,height-heightMargin),
	this.x2 = (width-widthMargin)*.50,
	this.y2 = map(col2,1,55,widthMargin,height-heightMargin),
	this.x3 = (width-widthMargin)*.75
	this.y3 = map(col3,1,55,widthMargin,height-heightMargin),
	this.x4 = width - widthMargin,
	this.y4 = map(col4,1,55,widthMargin,height-heightMargin),
	this.width = 100,
	this.height= 25,
	this.col = color(225),
	this.on = false,
	this.display = function() {
				stroke(this.col)
				noFill();
				beginShape()
				vertex(this.x1,this.y1);
				vertex(this.x2,this.y2);
				vertex(this.x3,this.y3);
				vertex(this.x4,this.y4);
				endShape();

				fill(this.col);
				stroke(20);
				ellipse(this.x1,this.y1,this.height);
				ellipse(this.x2,this.y2,this.height);
				ellipse(this.x3,this.y3,this.height);
				ellipse(this.x4,this.y4,this.height);
				
				
				// rectMode(CENTER);
				// rect(this.x1,this.y1,this.width,this.height);
				// rect(this.x2,this.y2,this.width,this.height);
				fill(0);
				textAlign(CENTER,CENTER);
				text(col1,this.x1+1,this.y1);
				stroke(200)
				text(this.districtName,this.x1-30,this.y2-10)
				textAlign(CENTER,CENTER);
				// text(this.districtName,this.x2+10,this.y2)
				text(col4,this.x4-1,this.y4)
			}

	this.clicked= function() {
		// if((mouseX > this.x1 && mouseX < this.x1 + 100) && (mouseY > this.y1 && mouseY < this.y1+20)) {
		// 	ellipse(500,500,100,100);
		// }
		var dm1 = dist(mouseX,mouseY,this.x1,this.y1);
		if (dm1 < this.height/2)
		// 		// && (mouseY > this.y1 && mouseY < this.height)
			{
			this.on = !this.on;
			if (this.on) {
				this.col = color(200,50,100);
				stroke(this.col)

			}else {
				console.log("blurb")
			}
		} else {
			this.col = color(225);	
		//end of else
		}

		// var dm2 = dist(mouseX,mouseY,this.x2,this.y2);
		// if (dm2 < this.height/2)
		// // 		// && (mouseY > this.y1 && mouseY < this.height)
		// 	{
		// 	this.on = !this.on;
		// 	if (this.on) {
		// 		this.col = color(200,25,100);
		// 		stroke(this.col)

		// 	}else {
		// 		console.log("blurb")
		// 	}
		// } else {
		// 	this.col = color(225);	
		// }
		// var dm3 = dist(mouseX,mouseY,this.x3,this.y3);
		// if (dm3 < this.height/2)
		// // 		// && (mouseY > this.y1 && mouseY < this.height)
		// 	{
		// 	this.on = !this.on;
		// 	if (this.on) {
		// 		this.col = color(200,25,100);
		// 		stroke(this.col)

		// 	}else {
		// 		console.log("blurb")
		// 	}
		// } else {
		// 	this.col = color(225);		
		// }
		// var dm4 = dist(mouseX,mouseY,this.x4,this.y4);
		// if (dm4 < this.height/2)
		// // 		// && (mouseY > this.y1 && mouseY < this.height)
		// 	{
		// 	this.on = !this.on;
		// 	if (this.on) {
		// 		this.col = color(200,25,100);
		// 		stroke(this.col)

		// 	}else {
		// 		console.log("blurb")
		// 	}
		// } else {
		// 	this.col = color(225);		
		// //end of else
		// }
	//end of clicked.	
	}		
//end of function	
}

