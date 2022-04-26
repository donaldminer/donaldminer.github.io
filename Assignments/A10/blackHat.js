const margin = {top: 60, right: 40, bottom: 100, left: 50},
    width = 800 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

const svg = d3.select("#black_hat")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

let formatTime = d3.timeFormat("%Y");

d3.csv("sea_levels_2015.csv",
    function (d) {
        return {date: d3.timeParse("%Y-%m-%d")(d.Time), value: d.GMSL}
    }).then(function (data) {

    let dataset = data;

    let xScale = d3.scaleTime()
        .domain([
            d3.min(dataset, function (d) {
                return d.date;
            }),
            d3.max(dataset, function (d) {
                return d.date;
            })
        ])
        .range([0, width-margin.right]);

    let yScale = d3.scaleLinear()
        .domain([
            d3.min(dataset, function (d) {
                return +d.value;
            }),
            500
        ])
        .range([height - margin.bottom, margin.top]);

    let line = d3.line()
        .x(function (d) {
            return xScale(d.date);
        })
        .y(function (d) {
            return yScale(d.value);
        })
    let svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    svg.append("path")
        .datum(dataset)
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("class", "line")
        .attr("transform", `translate(${margin.left})`)
        .attr("d", line);
    svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "black");


    svg.append("g")
        .attr("transform", `translate(${margin.left}, ${height - margin.bottom})`)
        .call(d3.axisBottom(xScale))
        .style("text-anchor", "end");
    svg.append("g")
        .attr("transform", `translate(${margin.left})`)
        .call(d3.axisLeft(yScale));
    svg.append("text")
        .attr('x', 450)
        .attr('y', 20)
        .text("1880-2013 Global Mean Sea Level")
        .style("font-size", 15)
        .attr('text-anchor', 'middle');
    svg.append("text")
        .attr('x', margin.left + 10)
        .attr('y', margin.top)
        .style('font-size', 10)
        .text("This visualization needs axis labels");
    svg.append("text")
        .attr('x', margin.left + 10)
        .attr('y', margin.top+10)
        .style('font-size', 10)
        .text("Has too high of a y-axis domain makes the change not seem as large");
    svg.append("text")
        .attr('x', margin.left + 10)
        .attr('y', margin.top+20)
        .style('font-size', 10)
        .text("Does not take into account uncertainty of data.");
});
