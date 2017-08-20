const root = "http://data.nba.net/10s";

export const getAllPlayers = () => {
  return $.ajax({
    method: 'GET',
    url: root + "/prod/v1/2017/players.json",
    dataType: 'jsonp',
    crossOrigin: true,
  });
};

// "/prod/v1/2017/players/{{personId}}_uber_stats.json"

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
