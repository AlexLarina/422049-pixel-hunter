import {INITIAL_STATE, AnswerType} from "../data/data";
import {die} from "../game/game_state";
import tick from "../game/timer";

const Result = {
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`
};

const timeIndex = 0;
const resultIndex = 1;

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
  }

  nextLevel() {
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

  tick() {
    this._state = tick(this._state);
  }

  handleStats() {
    const resultToUpload = [];
    this._state.userAnswers.forEach((element) => {
      switch (true) {
        case (element[resultIndex] === `wrong`):
          resultToUpload.push(Result.WRONG);
          break;
        case (element[resultIndex] === `correct` && element[timeIndex] <= AnswerType.SLOW && element[timeIndex] >= AnswerType.FAST):
          resultToUpload.push(Result.CORRECT);
          break;
        case (element[resultIndex] === `correct` && element[timeIndex] > AnswerType.SLOW):
          resultToUpload.push(Result.SLOW);
          break;
        case (element[resultIndex] === `correct` && element[timeIndex] < AnswerType.FAST):
          resultToUpload.push(Result.FAST);
          break;
        default:
          resultToUpload.push(Result.WRONG);
      }
    });
    console.log(`На сервер уедет вот такая штука: `);
    console.log(resultToUpload);
    return resultToUpload;
  }
}

export default GameModel;
