import * as NBA_API from './nba_api/util';
import Player from './player';
import * as d3 from 'd3';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  const allPlayers = [];

  NBA_API.getAllPlayers().then(data => {
    const info = JSON.parse(data).league.standard;
    info.forEach(player => allPlayers.push(new Player(player)));
  });
  const viz = d3.select('#canvas').append('svg');
  viz.attr("width", 900);
  viz.attr("height", 400);
  var nodes = [{x: 100, y: 200},
              {x: 300, y: 400},
              {x: 500, y: 200}];
              viz.text("The Graph")
                  .select("#graph");
                  debugger
  viz.selectAll("circle .nodes")
    .data(nodes)
    .enter()
    .append("svg:circle")
    .attr("class", "nodes")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });

  viz.selectAll("circle .nodes")
    .data(nodes)
    .enter()
    .append("svg:circle")
    .attr("class", "nodes")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", "20px")
    .attr("fill", "blue");
});
