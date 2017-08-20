import {getPlayerStats} from './nba_api/util';

class Player {
  constructor({firstName, lastName, personId, yearsPro}) {
    this.playerName = firstName + " " + lastName;
    this.personId = personId;
    this.yearsPro = yearsPro;
    this.stats = {};
    this.getStats();
    this.bindings();
  }

  bindings() {
    this.getStats = this.getStats.bind(this);
  }

  getStats() {
    getPlayerStats(this.personId).then((data) => {
      const profile = JSON.parse(data).league.standard.stats;
      this.stats[2016] = profile.latest;
      this.stats.career = profile.careerSummary;
      profile.regularSeason.season.forEach((sn) => {
        this.stats[`${sn.seasonYear}`] = sn.total;
      });
    });
  }
}

export default Player;
