import IntroScreen from "./templates/intro";
import GreetingScreen from "./templates/greeting";
import RulesScreen from "./templates/rules";
import GameModel from "./model/game-model";
import GameScreen from "./templates/game-screen";
import GameStatsScreen from "./templates/stats";
import {changeScreen} from "./game/util";

class Application {
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
    const model = new GameModel(userName);
    const gameScreen = new GameScreen(model);
    gameScreen.startGame();
  }

  showStats() {
    const statsScreen = new GameStatsScreen(this.showGreeting.bind(this));
    changeScreen(statsScreen.element);
  }
}

export default Application;
