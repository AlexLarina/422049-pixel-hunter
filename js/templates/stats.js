import {changeScreen} from '../game/util';
import {getGreetingScreen} from './greeting';
import StatsView from "../view/stats-view";

const getGameStats = () => {
  const statsScreen = new StatsView();
  statsScreen.onGreeting = () => {
    getGreetingScreen();
  };

  changeScreen(statsScreen.element);
};

export {getGameStats};
