import HeaderView from "../view/header-view";
import {chooseGame} from "../game/game";

class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.content = chooseGame(this.model.getCurrentLevel(), this.model.state);

    this._timer = null;
  }

  get element() {
    return this.level.element;
  }

  stopGame() {
    clearInterval(this._timer);
  }


}

export default GameScreen;
