import {updateGame} from "../game/start-game";
import {changeLevel, canContinue} from "../game/game_state";
// import {getGameStats} from "./stats";
import {saveAnswer} from "../game/game";
import TinderLikeGameView from "../view/game-tinder-like-view";


const tinderLikeGame = (level, state) => {
  const secondGameScreen = new TinderLikeGameView(level);
  const answerArray = [];

  secondGameScreen.onSaveAnswer = () => {
    saveAnswer(state, answerArray);
  };

  secondGameScreen.onGameContinue = () => {
    state = changeLevel(state);
    if (canContinue(state)) {
      updateGame(state);
    } else {
      // getGameStats();
    }
  };

  return secondGameScreen.element;
};


export {tinderLikeGame};
