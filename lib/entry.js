import {getAllPlayers} from './nba_api/util';
import Player from './player';
import * as d3 from 'd3';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  const allPlayers = [];

  getAllPlayers().then(data => {
    // console.log(data);
    const info = JSON.parse(data).league.standard;
    info.forEach(player => allPlayers.push(new Player(player)));
  });
  const viz = d3.select('#graph').append('svg');
  viz.attr("width", 900).attr("height", 400);
});
