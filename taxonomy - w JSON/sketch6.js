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
	pad = total * 21/91;
	display(data.all,margin,topmargin)
	
}
		
function display(array, x, y){
	var count = 0;
	for(var i = 0; i < array.length; i++){
		if (array[i]["subtype"] && array[i]["subtype"].length){
			var c = display(array[i].subtype, x, y+20);
			rect(x,y,unit*c+(c-1)*pad,20);
			x = x + unit*c+(c)*pad;
			count += c;
		}else{
			rect(x,y,unit,20);
			count++;
			x = x + unit + pad;
		}
	} 
	return count;
}
		
		
		
		
	