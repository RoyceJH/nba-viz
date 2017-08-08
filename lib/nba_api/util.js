const root = "http://data.nba.net/10s";

const logger = (data) => {
  console.log(data);
};

export const getAllPlayers = () => {
  return $.ajax({
    method: 'GET',
    url: "https://data.nba.net/10s/prod/v1/2017/players.json&callback=?",
  });
};
