import * as NBA_API from './nba_api/util';
import Player from './player';
import * as d3 from 'd3';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  const allPlayers = [];

  NBA_API.getAllPlayers().then(data => {
    console.log(data);
    const info = JSON.parse(data).league.standard;
    info.forEach(player => allPlayers.push(new Player(player)));
  });
  const viz = d3.select('#graph').append('svg');
  viz.attr("width", 900).attr("height", 400);
  var nodes = [{x: 30, y: 50},
             {x: 50, y: 80},
             {x: 90, y: 120}];
  viz.selectAll("circle .nodes")
    .data(nodes)
    .enter()
    .append("svg:circle")
    .attr("class", "nodes")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", "10px")
    .attr("fill", "black");
  debugger
});
