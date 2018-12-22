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
}


export default TinderLikeGame;
