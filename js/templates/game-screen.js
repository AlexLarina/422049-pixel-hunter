import HeaderView from "../view/header-view";
import LevelView from "../view/level-view";
import {changeScreen} from "../game/util";

class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.level = new LevelView(this.model.state, this.model.getCurrentLevel(), this.header);

    this._timer = null;
  }

  get element() {
    return this.level.element;
  }

  changeLevel() {
    const level = new LevelView(this.model.state, this.model.getCurrentLevel(), this.header);
    this.level = level;
    this.updateHeader();
    level.onSaveAnswer = this.handleAnswer.bind(this);
    changeScreen(level.element);
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    header.element.remove();
    this.header = header;
    this.element.insertAdjacentElement(`afterbegin`, this.header);
  }

  updateTime() {
    this.header.updateTime(this.model.state.time);
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

  handleAnswer() {

  }

  endGame() {

  }
}

export default GameScreen;
