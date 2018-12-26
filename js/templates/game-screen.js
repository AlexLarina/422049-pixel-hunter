import HeaderView from "../view/header-view";
import GameTwoOfTwoView from "../view/game-two-of-two-view";
import TinderLikeGameView from "../view/game-tinder-like-view";
import OneOfThreeGame from "../view/game-one-of-three-view";
import {changeScreen} from "../game/util";
import {INITIAL_STATE, GameType, TIMEOUT, BLINCKING_TIME} from "../data/data";
import Application from "../app";

class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this._timer = null;
  }

  get element() {
    return this.view;
  }

  startGame() {
    this.model.initGame();
    this.updateView();
    this.startTimer();
  }

  updateView() {
    this.view = this.getGameView(this.model.state);
    this.timer = this.view.querySelector(`.game__timer`);
  }

  getGameView(state) {
    let gameView;
    switch (state.levelsData[state.level].type) {
      case GameType.TWO_OF_TWO:
        gameView = new GameTwoOfTwoView(state, state.levelsData[state.level]);
        this.handleGameView(gameView, state);
        break;
      case GameType.TINDER_LIKE:
        gameView = new TinderLikeGameView(state, state.levelsData[state.level]);
        this.handleGameView(gameView, state);
        break;
      case GameType.ONE_OF_THREE:
        gameView = new OneOfThreeGame(state, state.levelsData[state.level]);
        this.handleGameView(gameView, state);
        break;
    }

    return gameView.element;
  }

  handleGameView(view, state) {
    view.onSaveAnswer = (correct) => {
      this.model.acceptAnswer((INITIAL_STATE.time - state.time), view.getResult());
      if (!correct) {
        this.model.die();
      }
      this.changeLevel(state);
    };
    view.onRestart = () => {
      Application.showGreeting();
    };
  }

  changeLevel() {
    this.stopTimer();
    this.resetTimer();
    if (this.model.hasNextLevel() && (!this.model.isDead())) {
      this.model.nextLevel();
      this.updateView();
      changeScreen(this.element);
      this.startTimer();
    } else {
      this.saveGameStats(this.model.state);
      Application.showStats(this.model.state);
    }
  }

  saveGameStats(state) {
    const currentGameResult = {
      stats: this.model.handleStats(),
      lives: state.lives
    };

    state.previousGames = currentGameResult;
  }

  updateTime() {
    this.timer.innerText = ``;
    this.timer.innerText = this.model.state.time;
  }

  _tick() {
    if (this.model.state.time) {
      this.model.state.time--;
      this.updateTime();
      this.blick();
      return false;
    }
    this.changeLevel(this.model.state);
    return true;
  }

  startTimer() {
    this._timer = setTimeout(() => {
      if (!this._tick()) {
        this.startTimer();
      }
    }, TIMEOUT);
  }

  stopTimer() {
    clearTimeout(this._timer);
  }

  resetTimer() {
    this.model.state.time = INITIAL_STATE.time;
  }

  blick() {
    if (this.model.state.time <= BLINCKING_TIME) {
      this.timer.classList.add(`blink`);
    }
  }
}

export default GameScreen;
