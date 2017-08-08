import * as NBA_API from './nba_api/util';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  let call = NBA_API.getAllPlayers;
  call().then(players => console.log(players));
});
