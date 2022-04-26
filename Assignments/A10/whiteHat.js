const svg2 = d3.select("#white_hat")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

d3.csv("sea_levels_2015.csv",
    function (d) {
        return {date: d3.timeParse("%Y-%m-%d")(d.Time), value: +d.GMSL, uncertainty: +d.uncertainty}
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
            -200,
            d3.max(dataset, function (d) {
                return +d.value;
            })
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
        .attr("fill", "rgba(255,0,0,0.53)")
        .attr("stroke", "none")
        .attr("transform", `translate(${margin.left})`)
        .attr("d", d3.area()
            .x(function(d) { return xScale(d.date) })
            .y0(function(d) { return yScale(d.value + d.uncertainty/2) })
            .y1(function(d) { return yScale(d.value - d.uncertainty/2) })
        );

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
        .attr('x', 0)
        .attr('y', height/2)
        .attr('font-size', 10)
        .text("Feet");
    svg.append("text")
        .attr('x', width/2)
        .attr('y', 20)
        .text("1880-2013 Global Mean Sea Level")
        .style("font-size", 15)
        .attr('text-anchor', 'middle')
    svg.append("text")
        .attr('x', margin.left + 10)
        .attr('y', margin.top)
        .style('font-size', 10)
        .text("Added y axis label");
    svg.append("text")
        .attr('x', margin.left + 10)
        .attr('y', margin.top + 10)
        .style('font-size', 10)
        .text("Changed y axis domain to fit the data without unnecessary values");
    svg.append("text")
        .attr('x', margin.left + 10)
        .attr('y', margin.top + 20)
        .style('font-size', 10)
        .text("Added uncertainty area with line to show uncertainty of measurements");
});
