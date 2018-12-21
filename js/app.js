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
  download() {
    // window.fetch(`https://es.dump.academy/pixel-hunter/questions`).
    // then(checkStatus).
    // then((_response) => _response.json()).
    const backend = new Backend();
    backend.downloadData().
    then((data) => getLevelData(data)).
    then((_response) => this.showIntro()).
    catch(this.showError);
  }

  showIntro() {
    const introScreen = new IntroScreen(this.showGreeting.bind(this));
    changeScreen(introScreen.element);
  }

  showGreeting() {
    const greetingScreen = new GreetingScreen(this.showRules.bind(this));
    changeScreen(greetingScreen.element);
  }

  showRules() {
    const rulesScreen = new RulesScreen(this.showGreeting.bind(this), this.showGame.bind(this));
    changeScreen(rulesScreen.element);
  }

  showGame(userName) {
    const model = new GameModel(userName, LEVELS_DATA);
    const gameScreen = new GameScreen(model, this.showStats.bind(this));
    gameScreen.startGame();
    changeScreen(gameScreen.element);
  }

  showStats(state) {
    const statsScreen = new GameStatsScreen(this.showGreeting.bind(this));
    const backend = new Backend();
    backend.uploadResults(state.previousGames, state.playerName).
    then(() => backend.downloadResults(state.playerName)).
    then((data) => changeScreen(statsScreen(data).element)).
    catch(this.showError);
    // changeScreen(statsScreen.element);
  }

  showError() {

  }
}

export default Application;
