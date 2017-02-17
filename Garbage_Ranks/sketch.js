var table, min, max,cnv;
var margin =50;

function preload(){
	table = loadTable("Analysis_Rankings.csv","csv")
}

function setup() {
	cnv=createCanvas(windowWidth,windowHeight);
	cnv.mouseOver(drawLine);
	loadData();
	displayData();
	drawLabels();
}

function loadData() {
  	console.log("there are " + table.getRowCount() + " rows in the table");
  	min=56
  	max=0

}

function displayData(){
	//x value should be mapped to width/getColumnCount() 
	//y value should be G's from csv
	//don't forget the margins
	//map(value,start1,stop1,start2,stop2)
	//vertex(x,y)
	for(var j=1; j<table.getRowCount(); j++){
		beginShape();
		noFill();
		
		for(var i=2; i<4; i++){
		
			var val = table.get(j,i);
			var x =	map(i,2,4,margin+100,width-margin);
			vertex(
				x,
				map(val,min,max,margin+15,height-margin)
			);
		
			vertex(
				x+50,
				map(val,min,max,margin+15,height-margin)
			);
		
		rect(map(i,2,4,margin+100,width-margin),
			map(val,min,max,margin+15,height-margin),
			50,
			5)
		}
	endShape();
	}

}

function drawLine(){
	if(mouseX > 15){
		line(0,0,width,height);
	}
}
function drawLabels(){

	//textAlign(CENTER);
	for(var i = 2; i<4;i++){
		var label1 = table.getString(0,i);
		fill(20);
		console.log(label1);
		textAlign(CENTER)
		text(label1,map(i,2,4,margin+120,width-margin),margin);
}
		//text("label1",20,20);
		/*text(label,
			map(i,2,4,margin+100,width-margin),
			margin + 15
			)*/
	//}
	/*for(var j = 1; j<table.getRowCount(); j++){
		var colText = table.getString(0,j);
		textSize(10);
		text(
			colText,
			margin,
			map (j,1,table.getRowCount(),margin,height-margin)
		);
	}*/
}