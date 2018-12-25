import AbstractView from "./abstract-view";
import {AnswerType, Result, AnswerStatus} from "../data/data";

class CurrentStatsView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.levels = this.state.levelsData.length;
  }

  get template() {
    const currentStatsData = this.updateCurrentStats(this.state).concat(
        new Array(this.levels - this.state.level).fill(`<li class="stats__result stats__result--unknown"></li>`)
    );

    return `<ul class="stats">
    ${currentStatsData.join(``)}
    </ul>`;
  }

  updateCurrentStats(state) {
    const alreadyAnsweredArray = [];
    state.userAnswers.forEach((val) => {
      let answerStatus = this.getAnswerStatus(val);
      alreadyAnsweredArray.push(`<li class="stats__result stats__result--${answerStatus}"></li>`);
    });

    return alreadyAnsweredArray;
  }

  getAnswerStatus(answer) {
    let status;
    const timeIndex = 0;
    const resultIndex = 1;

    switch (true) {
      case (answer[resultIndex] === Result.WRONG):
        status = AnswerStatus.WRONG;
        break;
      case (answer[resultIndex] === Result.CORRECT && answer[timeIndex] <= AnswerType.SLOW && answer[timeIndex] >= AnswerType.FAST):
        status = AnswerStatus.CORRECT;
        break;
      case (answer[resultIndex] === Result.CORRECT && answer[timeIndex] > AnswerType.SLOW):
        status = AnswerStatus.SLOW;
        break;
      case (answer[resultIndex] === Result.CORRECT && answer[timeIndex] < AnswerType.FAST):
        status = AnswerStatus.FAST;
        break;
      default:
        status = AnswerStatus.UNKNOWN;
    }

    return status;
  }
}

export default CurrentStatsView;
