import AbstractView from "./abstract-view";
import GameTwoOfTwoView from "./game-two-of-two-view";
import TinderLikeGameView from "./game-tinder-like-view";
import OneOfThreeGame from "./game-one-of-three-view";

class LevelView extends AbstractView {
  constructor(state, level, header) {
    super();
    this.state = state;
    this.level = level;
    this.header = header.element;
  }

  get template() {
    let gameScreen;
    switch (this.level.type) {
      case `two-of-two`:
        gameScreen = new GameTwoOfTwoView(this.level);
        break;
      case `tinder-like`:
        gameScreen = new TinderLikeGameView(this.level);
        break;
      case `one-of-three`:
        gameScreen = new OneOfThreeGame(this.level);
        break;
    }

    return gameScreen;
  }

  addHeader() {
    this.element.insertAdjacentElement(`afterbegin`, this.header);
  }

  onSaveAnswer() {

  }

  bind() {
    // clicking on Amswers
  }
}

export default LevelView;
