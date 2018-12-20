import {INITIAL_STATE, gameDataArray} from "../data/data";
import {changeLevel, die} from "../game/game_state";
import tick from "../game/timer";

// const getLevel = (level) => gameDataArray[level];

class GameModel {
  constructor(playerName, data) {
    this.playerName = playerName;
    this._state = null;
    this.levelsData = data;
  }

  get state() {
    return this._state;
  }

  initGame() {
    this._state = Object.assign({}, INITIAL_STATE, {userAnswers: []});
    this._state.levelsData = this.levelsData;
  }

  acceptAnswer(spentTime, result) {
    this._state.userAnswers.push([spentTime, result]);
  }

  hasNextLevel() {
    return this.levelsData[this._state.level + 1] !== void 0;
    // return getLevel(this._state.level + 1) !== void 0;
  }

  nextLevel() {
    // this._state = changeLevel(this._state);
    this._state.level++;
  }

  die() {
    // кажется, это тут не используется
    this._state = die(this._state);
  }

  restart() {
    this._state = INITIAL_STATE;
  }

  isDead() {
    return this._state.lives <= 0;
  }

  getCurrentLevel() {
    // return getLevel(this._state);
    // console.log(getLevel(this._state));
  }

  tick() {
    this._state = tick(this._state);
  }
}

export default GameModel;
