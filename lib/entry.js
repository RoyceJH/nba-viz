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
  const viz = d3.select('canvas');
  viz.attr("width", 900);
  viz.attr("height", 400);
  debugger
});
