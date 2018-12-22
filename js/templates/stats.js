import StatsView from "../view/stats-view";

class GameStatsScreen {
  constructor(state, click) {
    this.state = state;
    this.statsScreen = new StatsView(this.state);
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
