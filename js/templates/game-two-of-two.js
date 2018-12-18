import {updateGame} from "../game/start-game";
import {changeLevel, canContinue} from "../game/game_state";
// import {getGameStats} from "./stats";
import {saveAnswer} from "../game/game";
import GameTwoOfTwoView from "../view/game-two-of-two-view";

const twoOfTwoGame = (level, state) => {
  const firstGameScreen = new GameTwoOfTwoView(level);
  const answerArray = [];
  firstGameScreen.onSaveAnswer = () => {
    saveAnswer(state, answerArray);
  };

  firstGameScreen.onGameContinue = () => {
    state = changeLevel(state);
    if (canContinue(state)) {
      updateGame(state);
    } else {
      // getGameStats();
    }
  };
  return firstGameScreen.element;
};

export {twoOfTwoGame};
