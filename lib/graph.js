import * as d3 from 'd3';

class Graph {
  constructor(xScale, yScale, viz) {
    const xRange = d3.scaleLinear().range(xScale).domain([0,100]);
    const yRange = d3.scaleLinear().range(yScale).domain([100,0]);
    const xAxis = d3.axisBottom().scale(xRange);
    const yAxis = d3.axisLeft().scale(yRange);
    viz.append("svg:g").call(xAxis).attr("transform", 'translate(' + -10 + ',' + 400 + ')');
    viz.append("svg:g").call(yAxis).attr('transform', 'translate(' + 25 + ',' + 0 + ')');
  }
}

export default Graph;
