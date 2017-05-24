var chart = d3.select("#chart1").append("svg")
                .attr("width", 300)
                .attr("height", 200)
                .style("display", "block")
				.style("margin", "auto")

                // .style("padding-left", "20px")
     var yScale = d3.scaleLinear().range([200, 0]),
     		xBar = d3.scaleBand().rangeRound([0, 300]).padding(0.1);

     var tip1 = d3.tip().attr('class', 'd3-tip').html(function(d) { 
     	return "<strong>"+ d.type + ": 	</strong> <span style='color:orangered'> <br>" + d3.format(",")(d.amount) + " tons </span>"; });
		chart.call(tip1);
    
     d3.json("chart1.json", function(data){

     	xBar.domain(data.map(function(d) { return d.type; }));
     	yScale.domain([0, d3.max(data, function(d) { return d.amount }) ])

		

     		chart.selectAll(".bar")
     			.data(data)
     			.enter()
     			.append("rect")
     			.attr("class", "bar")
     			.attr("x", function(d,i) { return xBar(d.type)})
     			.attr("width", xBar.bandwidth())
     			.attr("y", function(d) {return yScale(d.amount)})
     			.attr("height", function(d) {return 200 - yScale(d.amount)})
     			.attr("fill", "white")
     			.on('mouseover', tip1.show)
      			.on('mouseout', tip1.hide)
     })

		var pieData = [
			{"name": "Other Refuse Sent to Landfills", "percent": 68.23},
			{"name": "Organics Suitable for Composting", "percent": 31.77} 
			]
			
		var chart2 = d3.select("#chart2").append("svg")
			.attr("height", 200)
			.attr("width", 200)
			// .style("padding-left", 20)
			.style("display", "block")
			.style("margin", "auto")
			.attr("align","center")

		
		var g = chart2.append("g")
			.attr("transform", "translate(" + 100 + "," + 100 + ") rotate (55)")
		
			// chart2.append("text").attr("class", "tip")

		
			var pie = d3.pie()
	    			.sort(null)
	    			.value(function(d) { return d.percent; });

			var path = d3.arc()
	    			.outerRadius(100)
	    			.innerRadius(0);

	    	d3.select("#chart2")
	    		.append("div")
	    		.attr("class", "tip")
	    		.style("display", "none")
	    	
	    	// tooltip.append("div")
	    	// 	.attr("class", "count")

			var arc = g.selectAll(".arc")
	    			.data(pie(pieData))
	    			.enter().append("g")
	      			.attr("class", "arc");

	  			arc.append("path")
	      			.attr("d", path)
					.attr("id", "part")
	      			.attr("fill", "white")
	      			.on("mouseover ", function(d){
              			d3.selectAll(".tip")
              			.html(d.data.name + "<br> <span style ='color:orangered'  style='text-align: center' >" + d.data.percent +"% </span")
              			.style("display", "inline")
                  		.style("left", (d3.event.pageX - 34) + "px") 
                  		.style("top", (d3.event.pageY - 100) + "px")
                  		.style("position", "absolute")
                	})
                	.on("mouseout", function(d) {
                		d3.selectAll(".tip").style("display", "none")
                	})

// var chart2 =d3.selectAll("#chart2").append("svg")
// 				.attr("width", 300)
//                 .attr("height", 200)

// var g = chart2.append("g")
// 			.attr("transform", "translate(" + 10 + "," + 10 + ")")


// 		var pie = d3.pie()
// 		    .sort(null)
// 		    .value(function(d) { return d.amount; });



// 		var path = d3.arc()
// 		    .outerRadius(40)
// 		    .innerRadius(0);

// 			d3.csv("pie.csv", function(data) {
			
// 			var arc = g.selectAll(".arc")
// 			    .data(pie(data))
// 			    .enter().append("g")
// 			      .attr("class", "arc")

// 			  arc.append("path")
// 			      .attr("d", path)
// 			      .attr("class", "part")
// 			      .attr("fill", "white")
// 			})