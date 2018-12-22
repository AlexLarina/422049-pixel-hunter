import IntroScreen from "./templates/intro";
import GreetingScreen from "./templates/greeting";
import RulesScreen from "./templates/rules";
import GameModel from "./model/game-model";
import GameScreen from "./templates/game-screen";
import GameStatsScreen from "./templates/stats";
import Backend from "./game/backend";
import {changeScreen} from "./game/util";

/* const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}; */

let LEVELS_DATA;

const getLevelData = (data) => {
  LEVELS_DATA = data;
  return LEVELS_DATA;
};

class Application {
  static startGame() {
    // window.fetch(`https://es.dump.academy/pixel-hunter/questions`).
    // then(checkStatus).
    // then((_response) => _response.json()).
    // const backend = new Backend();
    Backend.downloadData().
    then((data) => getLevelData(data)).
    then((_response) => this.showIntro()).
    catch(this.showError);
  }

  static showIntro() {
    const introScreen = new IntroScreen(this.showGreeting.bind(this));
    changeScreen(introScreen.element);
  }

  static showGreeting() {
    const greetingScreen = new GreetingScreen(this.showRules.bind(this));
    changeScreen(greetingScreen.element);
  }

  static showRules() {
    const rulesScreen = new RulesScreen(this.showGreeting.bind(this), this.showGame.bind(this));
    changeScreen(rulesScreen.element);
  }

  static showGame(user) {
    const model = new GameModel(user, LEVELS_DATA);
    const gameScreen = new GameScreen(model, this.showStats.bind(this));
    gameScreen.startGame();
    changeScreen(gameScreen.element);
  }

  static showStats(state) {
    // const statsView = new StatsView(this.model.state);
    //const previousGames = Backend.downloadResults(state.playerName);
    //console.log(`previousGames[0]:`);
    //console.log(previousGames[0]);
    const statsScreen = new GameStatsScreen(state, this.showGreeting.bind(this));
    changeScreen(statsScreen.element);

    // const backend = new Backend();
    Backend.uploadResults(state.previousGames, state.userName).
    then(() => Backend.downloadResults(state.userName)).
    then((data) => statsScreen.showPreviousGamesStats(data)).
    catch(this.showError);
    // changeScreen(statsScreen.element);
  }

  static showError() {

  }
}

export default Application;
