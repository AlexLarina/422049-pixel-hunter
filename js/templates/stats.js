import StatsView from "../view/stats-view";

class GameStatsScreen {
  constructor(data, state, click) {
    this.data = data;
    this.state = state;
    this.statsScreen = new StatsView(this.state, this.data);
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
