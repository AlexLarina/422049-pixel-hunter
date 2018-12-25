import {INITIAL_STATE, AnswerType, Result} from "../data/data";
import {die} from "../game/game_state";


const timeIndex = 0;
const resultIndex = 1;

class GameModel {
  constructor(user, data) {
    this.user = user;
    this._state = null;
    this.levelsData = data;
  }

  get state() {
    return this._state;
  }

  initGame() {
    this._state = Object.assign({}, INITIAL_STATE, {userAnswers: []});
    this._state.levelsData = this.levelsData;
    this._state.userName = this.user;
  }

  acceptAnswer(spentTime, result) {
    this._state.userAnswers.push([spentTime, result]);
  }

  hasNextLevel() {
    return this.levelsData[this._state.level + 1] !== void 0;
  }

  nextLevel() {
    this._state.level++;
  }

  die() {
    this._state = die(this._state);
  }

  isDead() {
    return this._state.lives < 0;
  }

  handleStats() {
    const resultToUpload = [];
    this._state.userAnswers.forEach((element) => {
      switch (true) {
        case (element[resultIndex] === Result.WRONG):
          resultToUpload.push(Result.WRONG);
          break;
        case (element[resultIndex] === Result.CORRECT && element[timeIndex] <= AnswerType.SLOW && element[timeIndex] >= AnswerType.FAST):
          resultToUpload.push(Result.CORRECT);
          break;
        case (element[resultIndex] === Result.CORRECT && element[timeIndex] > AnswerType.SLOW):
          resultToUpload.push(Result.SLOW);
          break;
        case (element[resultIndex] === Result.CORRECT && element[timeIndex] < AnswerType.FAST):
          resultToUpload.push(Result.FAST);
          break;
        default:
          resultToUpload.push(Result.WRONG);
      }
    });
    return resultToUpload;
  }
}

export default GameModel;
