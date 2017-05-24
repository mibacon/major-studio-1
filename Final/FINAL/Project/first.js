var svg = d3.select("#toggleText").append("svg")
        .attr("width", 1200)
        .attr("height", 60)

        var xScale = d3.scaleLinear().range([0, 1200])
        var xScale1 = d3.scaleLinear().range([0, 1200])
        var xScale2 = d3.scaleLinear().range([0, 1200])
        var x = 0, 
            xL = 0;

 
    // var tooltip = svg.append('g').append("text").attr("class", "toolTip");

        d3.json("level1.json", function(data) {

          xScale.domain([0, d3.sum(data, function(d) { return d.amount })]);

          svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function(d){   
              var oldx=x;
              x = x + xScale(d.amount);
              return oldx;
              })
            .attr("y", 40)
            .attr("width", function(d){
              return xScale(d.amount) - 2.5;
              })
            .attr("height", 20)
            .attr("fill", function(d){ return d.color})
            .on("mousemove", function(d){
                d3.select("#hovtext")
                  .text(d.tooltip)
                  .style("font-family", "Roboto Slab")
                  .style("font-size", "2em")
                  .style("display", "block")
                  .style("left", (d3.event.pageX - 34) + "px") 
                  .style("top", (d3.event.pageY +40) + "px")
                  .style("opacity", 1)
                  .style("position", "absolute")

                d3.select("#hlabel")
                  .style("font-size", "1em")
                  .style("display", "inline")
                  // .style("margin-left", "40%")
                  .style("left", (d3.event.pageX - 34) + "px")
                  .style("top", (d3.event.pageY + 100) + "px")
                  .style("opacity", 1)
                  .style("position", "absolute")
                })
             .on("mouseout", function(d){ 
               d3.select("#hovtext")
                  // .style("opacity", 0);
                  .style("display", "none");
               d3.select("#hlabel")
                  // .style("opacity", 0);
                  .style("display", "none");
            });
            

            svg.selectAll("text.legend")
                .data(data)
                .enter().append("text")
                .attr("class", "legend")
                .attr("x", function(d){   
                    var oldxL=xL;
                    xL = xL + xScale(d.amount);
                    return oldxL;
                    })
                .text(function(d){return d.name})
                .attr("fill","white")
                .style("font-size", "14px")
                .attr('y', 30);
      });



      var svg1 = d3.select("#toggleText2").append("svg")
                .attr("width", 1200)
                .attr("height", 40);

        var x1 = 0;
        var x1L = 0;
       d3.json("level2.json", function(data) {
          sum2 = d3.sum(data, function(d) { return d.Amount })
          xScale1.domain([0, d3.sum(data, function(d) { return d.Amount})]);

          svg1.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function(d){   
              var oldx1=x1;
              x1 = x1 + xScale(d.Amount);
              return oldx1;
              })
            .attr("y", 10)
            .attr("width", function(d){
              return xScale(d.Amount)-2.5
              })
            .attr("height", 20)
            .attr("fill", function(d){ return d.color})
            .on("mousemove", function(d){
                d3.select("#hov")
                  .text(d.Type)
                  .style("font-family", "Roboto Slab")
                  .style("font-size", "1em")
                  .style("display", "block")
                  .style("left", (d3.event.pageX - 34) + "px") 
                  .style("top", (d3.event.pageY +40) + "px")
                  .style("opacity", 1)
                  .style("position", "absolute")
                  
                d3.select("#hovtext1")
                  .text(d.tooltip)
                  .style("font-family", "Roboto Slab")
                  .style("font-size", "2em")
                  .style("display", "block")
                  .style("left", (d3.event.pageX - 34) + "px") 
                  .style("top", (d3.event.pageY +60) + "px")
                  .style("opacity", 1)
                  .style("position", "absolute")
                  // .style("margin-left", "40%")
                d3.select("#hlabel1")
                  .style("font-size", "1em")
                  .style("display", "block")
                  .style("left", (d3.event.pageX - 34) + "px") 
                  .style("top", (d3.event.pageY +100) + "px")
                  .style("opacity", 1)
                  .style("position", "absolute")
                  // .style("margin-left", "40%")
                  .attr("x", d3.event.pageX - 50 + "px")
                })
             .on("mouseout", function(d){ 
               d3.select("#hov")
                  .style("display", "none")
               d3.select("#hovtext1")
                  .style("display", "none")
               d3.select("#hlabel1")
                  .style("display", "none")
            });
            // svg1.selectAll(".legend")
            //     .data(data)
            //     .enter()
            //     .append("text")
            //     .selectAll("text")
            //     .attr('y', 30)
            //      .style('text-anchor', 'start')
            //       .attr('transform', 'rotate(-45 -10 10)')
            //     .attr("class", "legend")
            //     .attr("x", function(d){   
            //          var oldx1L=x1L;
            //           x1L = x1L + xScale(d.Amount);
            //           return oldx1L;
            //   })
            //     .text(function(d){return d.Type })
                 
            //       .style("fill", "white")
                
               
      });


      var svg2 = d3.select("#toggleText3").append("svg")
                .attr("width", 1200)
                .attr("height", 40);
                
        var x2 = 0;
       d3.json("level3Sort.json", function(data) {
          xScale2.domain([0, d3.sum(data, function(d) { return d.Amount })]);
          sum3 = d3.sum(data, function(d) { return d.Amount })
          svg2.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            // .attr("x", 20)
            .attr("x", function(d){   
              var oldx2=x2;
              x2 = x2 + xScale(d.Amount);
              return oldx2;
              })
            .attr("y", 10)
            .attr("width", function(d){
              return xScale(d.Amount)-2.5;
              })
            .attr("height", 20)
            .attr("fill", function(d){ return d.color})
              .on("mousemove", function(d){
                d3.select("#hov1")
                  .text(d.Type)
                  .style("font-family", "Roboto Slab")
                  .style("font-size", "1em")
                  .style("display", "block")
                  .style("left", (d3.event.pageX - 34) + "px") 
                  .style("top", (d3.event.pageY +40) + "px")
                  .style("opacity", 1)
                  .style("position", "absolute")
                d3.select("#hovtext2")
                  .text(d.tooltip)
                  .style("font-family", "Roboto Slab")
                  .style("font-size", "2em")
                  .style("display", "block")
                  .style("left", (d3.event.pageX - 34) + "px") 
                  .style("top", (d3.event.pageY +60) + "px")
                  .style("opacity", 1)
                  .style("position", "absolute")
                  // .style("margin-left", "40%")
                d3.select("#hlabel2")
                  .style("font-size", "1em")
                  .style("display", "block")
                  .style("left", (d3.event.pageX - 34) + "px") 
                  .style("top", (d3.event.pageY +100) + "px")
                  .style("opacity", 1)
                  .style("position", "absolute")
               
                d3.select("#hbox")
                  .text(d.desc)
                  .style("display", "inline-block")
                  .stye("position", "fixed")
                  .style("padding-left", "75%")
                })
             .on("mouseout", function(d){ 
                d3.select("#hov1")
                  .style("display", "none")
               d3.select("#hovtext2")
                  .style("display", "none")
               d3.select("#hlabel2")
                  .style("display", "none")
               d3.select("#hbox")
                  .style("display", "none")
            });  
      });