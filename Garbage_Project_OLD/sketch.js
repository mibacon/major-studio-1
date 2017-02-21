var table;
var margin = 50;
var min,max;

function preload(){
	table = loadTable("2014-2016_garbage.csv","csv")
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	loadData();
	displayData();
	drawLabels();
}

function loadData() {
  	console.log("there are " + table.getColumnCount() + " columns in this table.")
  	min=100000000;
  	max=0;
  	for (var i = 1; i<table.getRowCount(); i++){
  		for (var j = 3; j<table.getColumnCount(); j++){
  			//how come when i just use table.get(i,j) i don't get full range?
  			var value = float(table.getString(i,j));
  			if(value<min){
  				min=value;
  			}	
  			if(value>max){
  				max=value;
  			}
  		}
  	}
  	console.log(min);
  	console.log(max);
 }

function displayData(){
	//x value should be mapped to width/getColumnCount() 
	//y value should be G's from csv
	//don't forget the margins
	//map(value,start1,stop1,start2,stop2)
	//vertex(x,y)
	
	
	for(var j=1; j<table.getRowCount(); j++){
		
		stroke(50);
		noFill();
		beginShape();
		for(var i=3; i<table.getColumnCount(); i++){
			var val = table.get(j,i);
		
		
			curveVertex(
				map(i,3,table.getColumnCount(),margin,width-margin),
				map(val,min,max,margin+15,height-margin)
				);
			
		}
		endShape();
		//where I try to get a clean line from first loop to second loop.
		/*vertex(
			width-margin,
			map(val,min,max,margin+15,height-margin)
			);
		vertex(width-margin,map(val2,min,max,margin+15,height-margin)
						)*/
			//begin second loop
			/*for(var k = 2; k<4; k+=2){
				for(var l = table.getColumnCount(); l>=3; l--){
					var val2 = table.get(k,l);
						
					curveVertex(
						map(l,table.getColumnCount(),3,margin,width-margin),
						map(val2,min,max,margin+15,height-margin)
						);
					
				}
				/*vertex(
						margin +15,
						map(val,min,max,margin+15,height-margin));
				
			} */
		
	}		
}

function drawLabels(){
	//text(str,x,y,x2,y2)
	//line(x1,y1,x2,y2)
	textAlign(CENTER);
	for(var i = 3; i<table.getColumnCount();i+=4){
		var label = table.getString(0,i);
		line(
			map(i,3,table.getColumnCount(),margin+30,width-margin),
			margin +15,
			map(i,3,table.getColumnCount(),margin+30,width-margin),
			height-margin
			);
		text(label,
			map(i,3,table.getColumnCount(),margin+30,width-margin),
			margin
			)
	}
	var min1 = table.get(1,2);
	var max1 = table.get(56,2);
	console.log(min1, max1);

	for(var j = 1; j<table.getRowCount(); j++){
		var colText = table.getString(j,1);
		textSize(10);
		text(
			colText,
			margin,
			map (j,1,table.getRowCount(),margin,height-margin)
		);
	}
	textSize(30)
	text("2014-2016 Garbage Production Across NYC",width/2,25)
}
