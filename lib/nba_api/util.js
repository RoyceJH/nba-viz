const root = "http://data.nba.net/10s";

export const getAllPlayers = () => {
  return $.ajax({
    method: 'GET',
    url: "http://data.nba.net/10s/prod/v1/2017/players.json",
    dataType: 'jsonp'
  });
};
