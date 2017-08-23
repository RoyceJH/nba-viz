import * as d3 from 'd3';

class Graph {
  constructor(xScale, yScale, viz) {
    this.xScale = xScale;
    this.yScale = yScale;
    this.viz = viz;
    this.appendGraph();
    this.createNode();
  }

  appendGraph() {
    const xRange = d3.scaleLinear().range(this.xScale).domain([0,100]);
    const yRange = d3.scaleLinear().range(this.yScale).domain([100,0]);
    const xAxis = d3.axisBottom().scale(xRange);
    const yAxis = d3.axisLeft().scale(yRange);
    this.viz.append("svg:g").call(xAxis)
      .attr("transform", 'translate(' + -10 + ',' + 400 + ')');
    this.viz.append("svg:g").call(yAxis)
      .attr('transform', 'translate(' + 25 + ',' + 0 + ')');
  }

  createNode() {

  }

}

export default Graph;
