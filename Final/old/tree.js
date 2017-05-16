var height = 200,
	width = 500,
	margin = { left: 50, right: 50, top: 50, bottom: 0 };

var tree = d3.tree().size([width,height]);

var svg = d3.select("body").append("svg")
			.attr("width", "100%")
			.attr("height", "100%");

var chartGroup = svg.append("g").
			.attr("transform", "translate("+ margin.left+","+margin.top+")");

d3.json("treeData.json").get(function(data){


	
})