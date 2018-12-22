import HeaderView from "../view/header-view";
import GameTwoOfTwoView from "../view/game-two-of-two-view";
import TinderLikeGameView from "../view/game-tinder-like-view";
import OneOfThreeGame from "../view/game-one-of-three-view";
import {changeScreen} from "../game/util";
import {INITIAL_STATE} from "../data/data";
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
      case `two-of-two`:
        gameView = new GameTwoOfTwoView(state, state.levelsData[state.level]);
        gameView.onSaveAnswer = (correct) => {
          this.model.acceptAnswer((INITIAL_STATE.time - state.time), gameView.getResult());
          if (!correct) {
            this.model.die();
          }
          this.changeLevel(state);
        };
        gameView.onRestart = () => {
          Application.showGreeting();
        };
        break;
      case `tinder-like`:
        gameView = new TinderLikeGameView(state, state.levelsData[state.level]);
        gameView.onSaveAnswer = (correct) => {
          this.model.acceptAnswer((INITIAL_STATE.time - state.time), gameView.getResult());
          if (!correct) {
            this.model.die();
          }
          this.changeLevel(state);
        };
        gameView.onRestart = () => {
          Application.showGreeting();
        };
        break;
      case `one-of-three`:
        gameView = new OneOfThreeGame(state, state.levelsData[state.level]);
        gameView.onSaveAnswer = (correct) => {
          this.model.acceptAnswer((INITIAL_STATE.time - state.time), gameView.getResult());
          if (!correct) {
            this.model.die();
          }
          this.changeLevel(state);
        };
        gameView.onRestart = () => {
          Application.showGreeting();
        };
        break;
    }

    return gameView.element;
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
    } else {
      this.changeLevel(this.model.state);
      return true;
    }
    return false;
  }

  startTimer() {
    this._timer = setTimeout(() => {
      if (!this._tick()) {
        this.startTimer();
      }
    }, 1000);
  }

  stopTimer() {
    clearTimeout(this._timer);
  }

  resetTimer() {
    this.model.state.time = INITIAL_STATE.time;
  }

  blick() {
    if (this.model.state.time <= 5) {
      this.timer.classList.add(`blink`);
    }
  }
}

export default GameScreen;
