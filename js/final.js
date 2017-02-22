//                                                  **** Final Plots ****
// Plot 1
// Line plot of age group versus Survival Rate 
var svg1 = dimple.newSvg("#visualization1", 600, 400);                      // Create new SVG element with div id
d3.csv("data/age-distribution.csv", function(data){                         // Load csv and callback
    var chart = new dimple.chart(svg1, data);                               // Create new chart variable with the data
    x = chart.addCategoryAxis("x", "Age Group");                            // Add x category axis
    x.addOrderRule(["0-15", "15-30", "30-45", "45-60", "more than 60"]);    // Ordering x scale
    var axis = chart.addMeasureAxis("y", "Survival Rate in Percentage");    // Add Y axis
    chart.addSeries(null,dimple.plot.scatter);                              // Add first plot as points
    chart.addSeries(null,dimple.plot.line);                                 // Add second plot as a line plot
    axis.overrideMin = 0;
    axis.overrideMax = 100;
    svg1.append("text")                                                     // Add title, and font styles and allignment
        .attr("x", chart._xPixels() + chart._widthPixels() / 2)
        .attr("y", chart._yPixels() - 20)
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .text("Rate of Survival versus age");  
chart.draw();
}); 

// Plot 2
// Bar plot of travelling alone or with companion versus survival rate
var svg2 = dimple.newSvg("#visualization2", 600, 400);
d3.csv("data/companion.csv", function(data){
    var chart = new dimple.chart(svg2, data);
    x = chart.addCategoryAxis("x", "Alone/Not Alone");
    var axis = chart.addMeasureAxis("y", "Survival Rate in Percentage");
    axis.overrideMin = 0;
    axis.overrideMax = 100;
    chart.addSeries(null, dimple.plot.bar);                                 // Add bar plot
    svg2.append("text")
        .attr("x", chart._xPixels() + chart._widthPixels() / 2)
        .attr("y", chart._yPixels() - 20)
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .text("Rate of Survival versus having companion or not");
    chart.draw();
});

// Plot 3
// Bar plot of passengers travelling in different class versus survival rate
var svg3 = dimple.newSvg("#visualization3",600, 400);
d3.csv("data/gender-class.csv", function(data){
    var chart = new dimple.chart(svg3, data);
    chart.addCategoryAxis("x", ["Class"]);
    var axis = chart.addMeasureAxis("y", "Survival Rate in Percentage");
    axis.overrideMin = 0;
    axis.overrideMax = 100;
    chart.addSeries("Sex", dimple.plot.bar);                            // Adding bar plot with dividing for male/female
    svg3.append("text")
        .attr("x", chart._xPixels() + chart._widthPixels() / 2)
        .attr("y", chart._yPixels() - 20)
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .text("Rate of Survival versus Class of Travel");
chart.addLegend(70, 30, 510, 20, "right");
chart.draw();
});  