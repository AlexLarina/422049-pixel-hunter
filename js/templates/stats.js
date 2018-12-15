import {changeScreen} from '../game/util';
import StatsView from "../view/stats-view";

const getGameStats = () => {
  const statsScreen = new StatsView();
  changeScreen(statsScreen.element);
};

export {getGameStats};
