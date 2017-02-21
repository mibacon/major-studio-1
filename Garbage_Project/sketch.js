
var table;
var margin = 150;
var bottomMargin = 50;
var min,max,color,val;



function preload(){
	//table = loadTable("2014-2016_garbage.csv","csv")
	table = loadTable("Garbage0axis.csv","csv");

}

function setup() {
	createCanvas(windowWidth,windowHeight);
	loadData();
	displayData();
	drawLabels();

}

function loadData() {
  	console.log("there are " + table.getColumnCount() + " columns in this table.")
  	min=100000000000;
  	max=0;
  	
  	for (var i = 1; i<table.getRowCount(); i++){
  		for (var j = 2; j<37; j++){
  			//how come when i just use table.get(i,j) i don't get full range?
  			var value = table.getNum(i,j);

  			if(value<min){
  				min=value;
  			}	
  			if(value>max){
  				max=value;
  			}
  		}
  	}
  	console.log("the min is " + min);
  	console.log("the max is " + max);
 }

function displayData(){
	//x value should be mapped to width/getColumnCount() 
	//y value should be G's from csv

	//map(value,start1,stop1,start2,stop2)
	//vertex(x,y)
	
	background(0)
	for(var i=1; i<55; i++){
		boro = table.getString(i,0);
		var b,g;
		stroke(map(val,min,max,0,50),g,b);
		fill(map(val,min,max,0,255),color,100);
		if(boro == "Manhattan"){
			color = 0;
			g = 100;
			b = 100
		} else if (boro == "Staten Island"){
			color = 75;
			g = 100;
			b= 100;
		} else if (boro == "Bronx"){
			color = 120;
			g = 115;
			b = 100;
		} else if (boro == "Brooklyn") {
			color = 175;
			g = color;
			b = 100;
		}else {
			color = 225;
			g= color;
			b = 100;
		}
		beginShape();
			curveVertex(margin,
			map(val,min,max,height-bottomMargin,margin+15))	
		for(var j=2; j<37; j++){
			val = table.getNum(i,j);
			
			curveVertex(
				map(j,2,37,margin,width-margin),
				map(val,min,max,height-bottomMargin,margin+15)
				);

		//end of j loop	
		}
		var lastPoint = table.getNum(i,37);
		curveVertex(
			width-margin,
			map(lastPoint,min,max,height-bottomMargin,margin+15)
			)
		var nextPoint = table.getNum(i+1,37);
		curveVertex(
			width-margin,
			map(nextPoint,min,max,height-bottomMargin,margin+15))
		//begin second loop
		
		for(var k = 37; k>1; k--){
			var val2 = table.getNum(i+1,k);

			curveVertex(
				map(k,37,2,width-margin,margin),
				map(val2,min,max,height-bottomMargin,margin+15)
						);
		//end of k loop				
		}
			curveVertex(margin,
			map(val2,min,max,height-bottomMargin,margin+15))	
		
	
		
	//i loop end
	endShape(CLOSE);
	}
	

//function end		
}

function drawLabels(){
	var min1 = table.getNum(1,2);
	var max1 = table.getNum(55,2);
	//text(str,x,y,x2,y2)
	//line(x1,y1,x2,y2)
	
	//labels for Boro
	textAlign(LEFT);

	for(var i = 55; i>=1; i--){
		var columnText = table.getString(i,0);
		var x1 = table.getString(i-1,0)
		
		if (columnText !== x1) {
			
			fill(255)
			stroke(1)

			text(
				columnText, 
				width-margin+20, 
				map(
					i,
					1,
					table.getRowCount(),
					map(min,min,max,height-bottomMargin-10,margin+15), 
					map(max,min,max,height-bottomMargin-10,margin+15)
				)
			)

		} else {
			console.log("no way")	
				
		}
			
	}


	//month lines
	for(var j = 2; j<38;j++){
		var label = table.getString(0,j);
		stroke(200,200,200);
		line(
			//map(j,2,table.getColumnCount(),margin,width-margin)
			map(j,2,37,margin,width-margin),
			margin,
			map(j,2,37,margin,width-margin),
			margin + 15
			);
	}
	//year lines
	for(var j = 2; j<37;j+=12){
		var label = table.getString(0,j);
		stroke(255);
		strokeWeight(2);
		line(
			map(j,2,37,margin,width-margin),
			margin-30,
			map(j,2,37,margin,width-margin),
			margin + 15
			);
		//labels for months
		fill(255)
		stroke(1);
		textAlign(LEFT)
		text(label,
			map(j,2,37,margin+10,width-margin),
			margin-15
			)
	}
	var lastCol = table.getString(0,37)
		text(lastCol,map())
	console.log("min1 = " + min1 + ", max2 = " + max1);

	textAlign(LEFT)
	textSize(30)
	textStyle(BOLD)
	text("Cumulative Garbage Production in NYC",margin-5,margin-85)
	textStyle(NORMAL)
	textSize(30)
	text("2014 \u2013 2016",margin-5,margin-50)
	textSize(12)
	text("Sources:",margin, height-30)
	text("https://data.cityofnewyork.us/City-Government/DSNY-Monthly-Tonnage-Data/ebb7-mvp5",margin,height-15)

}

