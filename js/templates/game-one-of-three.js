// import {updateGame} from "../game/start-game";
// import {changeLevel, canContinue} from "../game/game_state";
// import {getGameStats} from "./stats";
// import {saveAnswer} from "../game/game";
import OneOfThreeGameView from "../view/game-one-of-three-view";

class OneOfThreeGame {
  constructor(state, gameContinue, saveAnswer) {
    this.thirdGameScreen = new OneOfThreeGameView(state.level);
    this.bind(gameContinue, saveAnswer);
  }

  bind(gameContinue, saveAnswer) {
    this.thirdGameScreen.onGameContinue = gameContinue;
    this.thirdGameScreen.onSaveAnswer = saveAnswer;
  }
  /* const thirdGameScreen = new OneOfThreeGameView(level);
  const answerArray = [];

  thirdGameScreen.onSaveAnswer = () => {
    saveAnswer(state, answerArray);
  };

  thirdGameScreen.onGameContinue = () => {
    state = changeLevel(state);
    if (canContinue(state)) {
      updateGame(state);
    } else {
      // getGameStats();
    }
  };

  return thirdGameScreen.element; */
}

export default OneOfThreeGame;
