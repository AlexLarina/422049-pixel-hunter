import HeaderView from "../view/header-view";
import GameTwoOfTwoView from "../view/game-two-of-two-view";
import TinderLikeGameView from "../view/game-tinder-like-view";
import OneOfThreeGame from "../view/game-one-of-three-view";
import StatsView from "../view/stats-view";
import {changeScreen} from "../game/util";
import {changeLevel} from "../game/game_state";
import {INITIAL_STATE, gameDataArray} from "../data/data";
import Application from "../app";

const getLevel = (level) => gameDataArray[level];

class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this._timer = null;
  }

  get element() {
    return this.view;
  }

  updateView() {
    this.view = this.getGameView(this.model.state);
    this.timer = this.view.querySelector(`.game__timer`);
    console.log(this.model.state);
    // console.log(this.getGameView(this.model.state));
  }

  getGameView(state) {
    let gameView;
    console.log('getGameView called');
    // console.log(state.level.type);
    switch (getLevel(state.level).type) {
      case `two-of-two`:
        console.log(`Two-of-two chosen`);
        gameView = new GameTwoOfTwoView(state, getLevel(state.level));
        console.log(gameView);
        break;
      case `tinder-like`:
        console.log(`Tinder like chosen`);
        gameView = new TinderLikeGameView(state, getLevel(state.level));
        console.log(gameView);
        break;
      case `one-of-three`:
        console.log(`One-of-three chosen`);
        gameView = new OneOfThreeGame(state, getLevel(state.level));
        break;
    }

    return gameView.element;
  }

  startGame() {
    this.model.initGame();
    this.updateView();
    this.startTimer();
  }

  changeLevel() {
    this.stopTimer();
    this.resetTimer();
    this.model.nextLevel();
    this.updateView();
    if (this.model.hasNextLevel()) {
      changeScreen(this.element);
      this.startTimer();
    } else {
      console.log(`GAME OVER!`);
      const statsView = new StatsView();
      // Application.showStats();
      changeScreen(statsView.element);
    }

    /*if (!this.isGameOver(state)) {
      changeScreen(this.element);
      this.startTimer();
    } else {

    } */
    // changeScreen(this.element);
    // this.startTimer();

  }

  isGameOver(state) {
    if (state.level === gameDataArray.length - 1) {
      return true;
    }
    return false;
  }

  updateHeader() {
    /* const header = new HeaderView(this.model.state);
    header.element.remove();
    this.header = header;
    this.element.insertAdjacentElement(`afterbegin`, this.header);*/
  }

  updateTime() {
    this.timer.innerText = ``;
    this.timer.innerText = this.model.state.time;
  }

  /* startGame() {
    this.changeLevel();
    this._tick();
  } */

  stopGame() {
    clearInterval(this._timer);
  }

  _tick() {
    console.log(this.model.state.time);
    if (this.model.state.time) {
      this.model.state.time--;
      this.updateTime();
    } else {
      console.log(`ChangeLevel should work here!`);
      this.changeLevel(this.model.state);
      return true;
    }
    /* this.model.tick();
    this.updateHeader();
    this._timer = setTimeout(() => this._tick(), 1000);*/
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

  handleAnswer() {

  }

  endGame() {

  }
}

export default GameScreen;
