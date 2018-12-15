import {changeScreen} from '../game/util';
import {getGreetingScreen} from './greeting';
import {startGame} from '../game/start-game';
import RulesView from "../view/rules-view";

const getRulesScreen = () => {
  const rulesScreen = new RulesView();

  rulesScreen.onGreeting = () => {
    getGreetingScreen();
  };

  rulesScreen.onGameStart = () => {
    startGame();
  };

  changeScreen(rulesScreen.element);
};

export {getRulesScreen};
