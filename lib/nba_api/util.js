const root = "https://data.nba.net/10s";

const logger = (data) => {
  console.log(data);
};

export const getAllPlayers = () => {
  return $.ajax({
    method: 'GET',
    url: root + "/prod/v1/2017/players.json",
    dataType: 'jsonp',
    crossOrigin: true,
  });
};

export const getPlayerStats = (playerId) => {
  return $.ajax({
    method: 'GET',
    url: root + `/prod/v1/2017/players/${playerId}_profile.json`,
    dataType: 'jsonp',
    crossOrigin: true,
  });
};

export const getAllTeams = () => {
  return $.ajax({
    method: 'GET',
    url: root + `/prod/v1/2017/teams.json`,
    dataType: 'jsonp',
    crossOrigin: true,
  });
};
