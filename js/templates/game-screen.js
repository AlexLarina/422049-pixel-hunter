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

  changeLevel() {

  }

  updateHeader() {

  }

  updateTime() {

  }

  startGame() {
    this.changeLevel();
    this._tick();
  }

  stopGame() {
    clearInterval(this._timer);
  }

  _tick() {
    this.model.tick();
    this.updateHeader();
    this._timer = setTimeout(() => this._tick(), 1000);
  }

  answer() {

  }

  endGame() {

  }
}

export default GameScreen;
