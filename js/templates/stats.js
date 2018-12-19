import StatsView from "../view/stats-view";

class GameStatsScreen {
  constructor(click) {
    this.statsScreen = new StatsView();
    this.bind(click);
  }

  get element() {
    return this.statsScreen.element;
  }

  bind(click) {
    this.statsScreen.onGreeting = click;
  }
}

export default GameStatsScreen;
