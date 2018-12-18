// import {updateGame} from "../game/start-game";
// import {changeLevel, canContinue} from "../game/game_state";
// import {getGameStats} from "./stats";
// import {saveAnswer} from "../game/game";
import GameTwoOfTwoView from "../view/game-two-of-two-view";

class TwoOfTwoGame {
  constructor(state, gameContinue, saveAnswer) {
    this.firstGameScreen = new GameTwoOfTwoView(state.level);
    this.bind(gameContinue, saveAnswer);
  }

  bind(gameContinue, saveAnswer) {
    this.firstGameScreen.onGameContinue = gameContinue;
    this.firstGameScreen.onSaveAnswer = saveAnswer;
  }

  /* const firstGameScreen = new GameTwoOfTwoView(level);
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
  return firstGameScreen.element; */
}

export default TwoOfTwoGame;
