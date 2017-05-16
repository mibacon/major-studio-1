
      var svg = d3.select("body").append("svg")
                .attr("width", "100%")
                .attr("height", 300)

      // var tooltip = d3.select("body").append("div").attr("class", "toolTip");
      
       var xScale = d3.scaleLinear()
       var xScale1 = d3.scaleLinear().range([0, 900])

       
        var x1 = 90;

        var type = {};
       
       d3.json("level3Sort.json", function(data) {
         
         var sumdata = (d3.sum(data, function(d) { return d.Amount }))
         var y = 66*2.5

         var vary = sumdata + y
          xScale.domain([0, vary]).range([0, 900]);

          svg.append("g").selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function(d){ 
              type[d.Type] = type[d.Type] || {};
              type[d.Type]["x1"] = x1;

              var oldx1=x1;
              type[d.Type]["x2"]= x1 + xScale((d.Amount)*(d.Proper))

              x1 = x1 + xScale(d.Amount)+2.5;
              type[d.Type]["x3"] = x1-2.5;
              return oldx1;
              })
            .attr("y", 20)
            .attr("width", function(d){return xScale(d.Amount)})
            .attr("height", 20)
            .attr("fill", function(d) {return d.color})
            // .on("mousemove", function(d){
              // d3.select("#picture")
              //     .attr("src", d.Image)
              //     .attr("float","left")
              //      .attr("width", "50%");
              //     // .attr("height", 150)
              //   d3.select("#import")
              //     .text(d.Type)
              //   d3.select("#pcat")
              //     .text(d.Color)
              //   d3.select("#icat")
              //     .text(d.Divert)
              // })
            // .on("mouseout", function(d){ 
            //   d3.select("#picture")
            //     .attr("src", "")})          
      });
        
       var x = 0;
        var typeCount = [];
        // var x4,x6, x7;

       d3.json("level4.json", function(data) {
      
         var sumdata1 = (d3.sum(data, function(d) { return d.Amount }))
         var y1 = 133*2.5
         var vary1 = sumdata1 + y1;
   
         xScale1.domain([0, vary1]);

          svg.append("g").selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function(d){

              if(typeCount[d.Type] == undefined) {
                type[d.Type]["x4"] = x;
                var x1 = type[d.Type]["x1"]
                var x4 = type[d.Type]["x4"]
                type[d.Type]["x5"] = x + xScale1(d.Amount);
                var x5=type[d.Type]["x5"]
                typeCount[d.Type] = 1;
                type[d.Type]["color"] = d.Color;
              }  else {
                type[d.Type]["x6"] = x
                var x6 = type[d.Type]["x6"]
                type[d.Type]["x7"] = x + xScale1(d.Amount);
                var x7 = type[d.Type]["x7"]
                type[d.Type]["color2"] = d.Color;
              }

              var oldx2=x;
              x = x + xScale1(d.Amount)+2.5;
              return oldx2;

              })
            .attr("y", 200)
            .attr("width", function(d){return xScale1(d.Amount)})
            .attr("height", 20)
            .attr("fill", function(d) {return d.Color})
            .attr("class", function(d) {return d.Divert})
            .on("mousemove", function(d){
              d3.select("#picture")
                .attr("src", d.Image)
                .style("display", "block")
                .attr("float","left")
                .attr("height", 150)
              d3.select("#import")
                .text(d.Type)
                .style("font-family", "Roboto Slab")
                .style("font-size", "24px")
                .style("display", "block")
              d3.select("#pcat")
                .style("font-size", "44px")
                .text(d.PerProper)
                .style("color", "#197f66")
                .style("display", "inline")
              d3.select("#plabel")
                .text("PROPERLY CATEGORIZED")
                .style("color", "#197f66")
                .style("display", "inline")
              d3.select("#icat")
                .text(d.PerImp)
                .style("font-size", "44px")
                .style("color", "#b25400")
                .style("display", "inline")
              d3.select("#ilabel")
                .text("IMROPERLY CATEGORIZED")
                .style("color", "#b25400")
                .style("display", "inline")
              })
            .on("mouseout", function(d){ 
              d3.select("#picture")
                .style("display", "none")
              d3.select("#import")
                .style("display", "none")
              d3.select("#pcat")
                .style("display", "none")
              d3.select("#plabel")
                .style("display", "none")
               d3.select("#icat")
                .style("display", "none")
               d3.select("#ilabel")
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

              var points = [
                {"x": obj["x1"], "y": 45},
                {"x": obj["x4"], "y": 195},
                {"x": obj["x5"], "y": 195},
                {"x": obj["x2"], "y": 45},         
                {"x": obj["x1"], "y": 45}
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


              var lineGraph = svg.append("g").append("path")
                            .attr("d", lineFunction(points))
                            .attr("fill", type[Type]["color"])
                            .attr("class", "Proper")
                            

              var lineGraph1 = svg.append("g").append("path")
                            .attr("d", lineFunction(points1))
                            .attr("fill", type[Type]["color2"])
                            .attr("class", "Improper")
             }


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
