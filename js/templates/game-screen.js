import HeaderView from "../view/header-view";
import GameTwoOfTwoView from "../view/game-two-of-two-view";
import TinderLikeGameView from "../view/game-tinder-like-view";
import OneOfThreeGame from "../view/game-one-of-three-view";
import StatsView from "../view/stats-view";
import {changeScreen} from "../game/util";
import {INITIAL_STATE} from "../data/data";

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
    // console.log(this.model.state);
    // console.log(this.getGameView(this.model.state));
  }

  getGameView(state) {
    let gameView;
    // console.log('getGameView called');
    // console.log(state.level.type);
    switch (state.levelsData[state.level].type) {
      case `two-of-two`:
        // console.log(`Two-of-two chosen`);
        gameView = new GameTwoOfTwoView(state, state.levelsData[state.level]);
        gameView.onSaveAnswer = () => {
          this.model.acceptAnswer((INITIAL_STATE.time - state.time), gameView.getResult());
          this.changeLevel(state);
        };
        // console.log(gameView);
        break;
      case `tinder-like`:
        // console.log(`Tinder like chosen`);
        gameView = new TinderLikeGameView(state, state.levelsData[state.level]);
        gameView.onSaveAnswer = () => {
          this.model.acceptAnswer((INITIAL_STATE.time - state.time), gameView.getResult());
          this.changeLevel(state);
        };
        // console.log(gameView);
        break;
      case `one-of-three`:
        // console.log(`One-of-three chosen`);
        gameView = new OneOfThreeGame(state, state.levelsData[state.level]);
        gameView.onSaveAnswer = () => {
          this.model.acceptAnswer((INITIAL_STATE.time - state.time), gameView.getResult());
          this.changeLevel(state);
        };
        break;
    }

    return gameView.element;
  }

  changeLevel() {
    this.stopTimer();
    this.resetTimer();
    if (this.model.hasNextLevel()) {
      this.model.nextLevel();
      this.updateView();
      changeScreen(this.element);
      this.startTimer();
    } else {
      // console.log(`GAME OVER!`);
      const statsView = new StatsView(this.model.state);
      changeScreen(statsView.element);
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


  stopGame() {
    clearInterval(this._timer);
  }

  _tick() {
    // console.log(this.model.state.time);
    if (this.model.state.time) {
      this.model.state.time--;
      this.updateTime();
      this.blick();
    } else {
      // console.log(`ChangeLevel should work here!`);
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
