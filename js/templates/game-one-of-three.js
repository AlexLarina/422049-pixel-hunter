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
}

export default OneOfThreeGame;
