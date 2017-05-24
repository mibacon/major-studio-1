 var svg3 = d3.select("#chart").append("svg")
                .attr("width", "100%")
                .attr("height", 250)
                
                // svg3.append("rect")
                //   .attr("x", 315)
                //   .attr("y", 235)
                //   .attr("width", 600)
                //   .attr("height", 1)
                //   .attr("fill", "white")

      
       var xscale4 = d3.scaleLinear()
       var xscale3 = d3.scaleLinear().range([0, 900])

       
        var x3 = 90;
        var type = {};
       
       d3.json("level3Sort.json", function(data) {
         
         var sumdata = (d3.sum(data, function(d) { return d.Amount }))
         var y = 66*2.5

         var vary = sumdata + y
          xscale4.domain([0, vary]).range([0, 900]);

          svg3.append("g").selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function(d){ 
              type[d.Type] = type[d.Type] || {};
              type[d.Type]["x1"] = x3;

              var oldx3=x3;
              type[d.Type]["x2"]= x3 + xscale4((d.Amount)*(d.Proper))

              x3 = x3 + xscale4(d.Amount)+2.5;
              type[d.Type]["x3"] = x3-2.5;
              return oldx3;
              })
            .attr("y", 20)
            .attr("width", function(d){return xscale4(d.Amount)})
            .attr("height", 20)
            .attr("fill", function(d) {return d.color})

      });
        
       var x4 = 0;
        var typeCount = [];

       d3.json("level4.json", function(data) {
      
         var sumdata1 = (d3.sum(data, function(d) { return d.Amount }))
         var y1 = 133*2.5
         var vary1 = sumdata1 + y1;
   
         xscale3.domain([0, vary1]);

          svg3.append("g").selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function(d){

              if(typeCount[d.Type] == undefined) {
                type[d.Type]["x4"] = x4;
                type[d.Type]["x5"] = x4 + xscale3(d.Amount);
                typeCount[d.Type] = 1;
                type[d.Type]["color"] = d.Color;
              }  else {
                type[d.Type]["x6"] = x4
                type[d.Type]["x7"] = x4 + xscale3(d.Amount);
                type[d.Type]["color2"] = d.Color;
              }

              var oldx4=x4;
              x4 = x4 + xscale3(d.Amount)+2.5;
              return oldx4;

              })
            .attr("y", 200)
            .attr("width", function(d){return xscale3(d.Amount)})
            .attr("height", 20)
            .attr("fill", function(d) {return d.Color})
            .attr("class", function(d) {return d.Divert})
            .on("mousemove", function(d){
              d3.select(".import")
                .text(d.Type)
                .style("font-family", "Roboto Slab")
                .style("font-size", "24px")
                .style("display", "block")
             d3.select("#picture")
                .attr("src", d.Image)
                .style("display", "block")
                .attr("float","left")
                .style("margin-top", "10px")
                .attr("width", 150)
              d3.select(".icat")
                .text(d.PerImp)
                .style("fill", "white")
                .style("font-size", "62px")
                .style("display", "block")
              d3.select(".ilabel")
                .text("IMROPERLY CATEGORIZED")
                .style("fill", "white")
                .style("display", "block")
              })
            .on("mouseout", function(d){ 
              d3.select("#picture")
                .style("display", "none")
              d3.select(".import")
                .style("display", "none")
              d3.select(".icat")
                .style("display", "none")
               d3.select(".ilabel")
                 .style("display", "none");
               })
    //         .on("click",function(d){
    //             .selectAll("*:not (." + d.Type) +" \" ")
    //               .style("opacity", 0.5)
    // //               // var circleUnderMouse = this;
    // //               // d3.selectAll("rect").transition().style('opacity',function () {
    // //               // return (this === circleUnderMouse) ? 1.0 : 0.5;
    //          });

            // })
           

          for (var Type in type){
              var obj = type[Type];
              var obj1 = type[Type];

              var points0 = [
                {"x": obj["x1"], "y": 45},
                {"x": obj["x1"], "y": 45},
                {"x": obj["x2"], "y": 45},
                {"x": obj["x2"], "y": 45}
                ]

              var points = [
                {"x": obj["x1"], "y": 45},
                {"x": obj["x4"], "y": 195},
                {"x": obj["x5"], "y": 195},
                {"x": obj["x2"], "y": 45},         
                {"x": obj["x1"], "y": 45}
              ]

              var point0b = [
                {"x": obj1["x2"], "y": 45},
                {"x": obj1["x2"], "y": 45},
                {"x": obj1["x3"], "y": 45},
                {"x": obj1["x3"], "y": 45}
              ]
              var points1 = [
                {"x": obj1["x2"], "y": 45},
                {"x": obj1["x6"], "y": 195},
                {"x": obj1["x7"], "y": 195},
                {"x": obj1["x3"], "y": 45},         
                {"x": obj1["x2"], "y": 45}
              ]

              var lineFunction = d3.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; });


              var lineGraph = svg3.append("g").append("path")
                            .attr("d", lineFunction(points0))
                            .transition()
                              .duration(1000)
                              .attr("d", lineFunction(points))
                              .attr("fill", type[Type]["color"])
                              .attr("class", "Proper")

                            

              var lineGraph1 = svg3.append("g").append("path")
                            .attr("d", lineFunction(point0b))
                            .transition()
                            .duration(1000)
                            .attr("d", lineFunction(points1))
                            .attr("fill", type[Type]["color2"])
                            .attr("class", "Improper")
             }
                          // d3.select("#displayText4")
                          //   .on("click", function() { 
                          //     .selectAll("path")
                              
                          //   })  

  });

  d3.selectAll(".btn").on("click",function(){
    var val = d3.select(event.target).html();
    if(val=="IMPROPERLY CATEGORIZED"){
      d3.selectAll(".Proper").style("display", "none")
      d3.selectAll(".Improper").style("display", "block")
    } else if (val == "PROPERLY CATEGORIZED"){
      d3.selectAll(".Improper").style("display", "none")
      d3.selectAll(".Proper").style("display", "block")
    } else {
      d3.selectAll(".Improper").style("display", "block")
      d3.selectAll(".Proper").style("display", "block")
    }
});