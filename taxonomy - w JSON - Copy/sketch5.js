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
	
	var count = 0;
	var mCount = [];
	var kCount = [];
		// console.log(l1);
		//let's go through the subcatgories of trash (e.g. C&D, HHP, etc.)
		for (var j = 0; j < data.all[0].subtype.length; j++){
			
			var name = data.all[0].subtype[j].l2cat;
			// console.log("l1 name is " + name)
			// if(Object.keys(data.all[0].subtype[j].subtype3).length == 0) {
			// 	count = count + 1;
			// }
			for(var k = 0; k < data.all[0].subtype[j].subtype3.length;k++){
				var name2 = data.all[0].subtype[j].subtype3[k].l3cat;
				// console.log("l2 name is " + name2)
				if(Object.keys(data.all[0].subtype[j].subtype3[k].subtype4).length == 0) {
				count = count + 1;
				}		
				for(var m = 0; m < data.all[0].subtype[j].subtype3[k].subtype4.length; m++){
					var name3 = data.all[0].subtype[j].subtype3[k].subtype4[m].l4cat;
					// console.log("l3 name is " + name3)
					count = count + 1;

					if (mCount[name3] >= 1){
		            	mCount[name3] += 1;
		            }
		         	 else{
		            	mCount[name3] = 1;
		            }
					
			// 		for(var n = 0; n < data.all[0].subtype[j].subtype3[k].subtype4[m].length; n++){
			// 			var name4 = data.all[0].subtype[j].subtype3[k].subtype4[m].subtype5[n].l5cat;
			// 			console.log("l4 name is " + name4)
			// // 			// if (Object.keys(data.all[0].subtype[j].subtype3[k].subtype4[m].subtype5).length == 0){
			// // 			// 	console.log("no subtype5")
			// // 			// } else {
			// // 				// console.log("has subtype5")
			// // 			// }
			// 		}
				}
				if (kCount[name2] >= 1){
	            	kCount[name2] += 1;
	            }
	         	 else{
	            	kCount[name2] = 1;
	            }
			}
		}
		console.log(count)
		console.log(mCount)
		console.log(kCount)
	}


		
		
		
		
	