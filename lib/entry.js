import { getAllPlayers, getAllTeams } from './nba_api/util';
import Player from './player';
import Team from './team';
import Graph from './graph';
import * as d3 from 'd3';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  let allPlayers;
  let allTeams;

  getAllPlayers().then((data) => {
    allPlayers = createPlayers(data);
  });

  getAllTeams().then(data => {
    allTeams = createTeams(data);
  });

  const viz = d3.select('#graph').append('svg');
  viz.attr("width", 900).attr("height", 600);

  const g = new Graph([40, 400], [40, 400], viz);
});

const createPlayers = (data) => {
  const info = JSON.parse(data).league.standard;
  return info.map(player => new Player(player));
};

const createTeams = (data) => {
  const info = JSON.parse(data).league.standard;
  return info.map(team => new Team(team));
};
