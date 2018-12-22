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
}

export default TwoOfTwoGame;
