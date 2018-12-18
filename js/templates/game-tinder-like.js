// import {updateGame} from "../game/start-game";
// import {changeLevel, canContinue} from "../game/game_state";
// import {getGameStats} from "./stats";
// import {saveAnswer} from "../game/game";
import TinderLikeGameView from "../view/game-tinder-like-view";


class TinderLikeGame {
  constructor(state, gameContinue, saveAnswer) {
    this.secondGameScreen = new TinderLikeGameView(state.level);
    this.bind(gameContinue, saveAnswer);
  }

  bind(gameContinue, saveAnswer) {
    this.secondGameScreen.onGameContinue = gameContinue;
    this.secondGameScreen.onSaveAnswer = saveAnswer;
  }

  /* const secondGameScreen = new TinderLikeGameView(level);
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

  return secondGameScreen.element; */
}


export default TinderLikeGame;
