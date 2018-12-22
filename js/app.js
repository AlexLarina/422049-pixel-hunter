import IntroScreen from "./templates/intro";
import GreetingScreen from "./templates/greeting";
import RulesScreen from "./templates/rules";
import GameModel from "./model/game-model";
import GameScreen from "./templates/game-screen";
import GameStatsScreen from "./templates/stats";
import Backend from "./game/backend";
import {changeScreen} from "./game/util";

let LEVELS_DATA;

const getLevelData = (data) => {
  LEVELS_DATA = data;
  return LEVELS_DATA;
};

class Application {
  static startGame() {
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
    const statsScreen = new GameStatsScreen(state, this.showGreeting.bind(this));
    changeScreen(statsScreen.element);

    Backend.uploadResults(state.previousGames, state.userName).
    then(() => Backend.downloadResults(state.userName)).
    then((data) => statsScreen.showPreviousGamesStats(data)).
    catch(this.showError);
  }

  static showError() {

  }
}

export default Application;
