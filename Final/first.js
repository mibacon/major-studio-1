var svg = d3.select("#toggleText").append("svg")
        .attr("width", 1200)
        .attr("height", 60)

        var xScale = d3.scaleLinear().range([0, 1200])
        var xScale1 = d3.scaleLinear().range([0, 1200])
        var xScale2 = d3.scaleLinear().range([0, 1200])
        var x = 0, 
            xL = 0;

 
    var tooltip = svg.append('g').append("text").attr("class", "toolTip");

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
              tooltip
                // .style("left", d3.event.pageX + 10 + "px")
                .attr("x", d3.event.pageX - 50 + "px")
                .attr("y", 20)
                .style("display", "block")
                .style("opacity", 1)
                .style("fill", "white")
                .text(d.tooltip);
                })
              .on("mouseout", function(d){ tooltip.style("display", "none");});
            

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
                .attr('y', 30);
      });



      var svg1 = d3.select("#toggleText2").append("svg")
                .attr("width", 1200)
                .attr("height", 60);

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
            .attr("y", 40)
            .attr("width", function(d){
              return xScale(d.Amount)-2.5
              })
            .attr("height", 20)
            .attr("fill", function(d){ return d.color})

            // svg1.selectAll("legend")
            //     .data(data)
            //     .enter().append("text")
            //     .attr("class", "legend")
            //     .attr("x", function(d){   
            //         var oldx1L=x1L;
            //         x1L = x1L + xScale(d.Amount);
            //         return oldx1L;
            //         })
            //     .text(function(d){return d.Type})
            //     .attr('y', 30)
            //     .style("text-anchor", "start")
            //       .attr("dx", "-.8em")
            //       .attr("dy", ".15em")
            //       .attr("transform", "rotate(-65)" );
               
      });


      var svg2 = d3.select("#toggleText3").append("svg")
                .attr("width", 1200)
                .attr("height", 60);

        var x3 = 0;
        var x3L = 0;
       d3.json("level3Sort.json", function(data) {
          xScale2.domain([0, d3.sum(data, function(d) { return d.Amount })]);
          sum3 = d3.sum(data, function(d) { return d.Amount })
          svg2.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            // .attr("x", 20)
            .attr("x", function(d){   
              var oldx3=x3;
              x3 = x3 + xScale(d.Amount);
              return oldx3;
              })
            .attr("y", 40)
            .attr("width", function(d){
              return xScale(d.Amount)-2.5;
              })
            .attr("height", 20)
            .attr("fill", function(d){ return d.color});
      });