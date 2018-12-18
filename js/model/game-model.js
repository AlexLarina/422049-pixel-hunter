import {INITIAL_STATE, gameDataArray} from "../data/data";
import {changeLevel, die} from "../game/game_state";
import tick from "../game/timer";

const getLevel = (level) => gameDataArray[level];

class GameModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.restart();
  }

  get state() {
    return this._state;
  }

  hasNextLevel() {
    return getLevel(this._state.level + 1) !== void 0;
  }

  nextLevel() {
    this._state = changeLevel(this._state);
  }

  die() {
    this._state = die(this._state);
  }

  restart() {
    this._state = INITIAL_STATE;
  }

  isDead() {
    return this._state.lives <= 0;
  }

  getCurrentLevel() {
    return getLevel(this._state);
  }

  tick() {
    this._state = tick(this._state);
  }
}

export default GameModel;
