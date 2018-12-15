import {changeScreen} from '../game/util';
import {getRulesScreen} from './rules';
import GreetingView from "../view/greeting-view";

const getGreetingScreen = () => {
  const greetingScreen = new GreetingView();

  greetingScreen.onGetRules = () => {
    getRulesScreen();
  };

  changeScreen(greetingScreen.element);
};

export {getGreetingScreen};

