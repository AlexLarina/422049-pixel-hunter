import AbstractView from "./abstract-view";
import {AnswerType} from "../data/data";

class CurrentStatsView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.levels = this.state.levelsData.length;
  }

  get template() {
    // const currentStatsData = new Array(this.levels).fill(`<li class="stats__result stats__result--unknown"></li>`);
    const currentStatsData = this.updateCurrentStats(this.state).concat(
        new Array(this.levels - this.state.level).fill(`<li class="stats__result stats__result--unknown"></li>`)
    );

    return `<ul class="stats">
    ${currentStatsData.join(``)}
    </ul>`;
  }

  updateCurrentStats(state) {
    const alreadyAnsweredArray = [];
    state.userAnswers.forEach((val, index) => {
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
      case (answer[resultIndex] === `wrong`):
        status = `wrong`;
        break;
      case (answer[resultIndex] === `correct` && answer[timeIndex] <= AnswerType.SLOW && answer[timeIndex] >= AnswerType.FAST):
        status = `correct`;
        break;
      case (answer[resultIndex] === `correct` && answer[timeIndex] > AnswerType.SLOW):
        status = `slow`;
        break;
      case (answer[resultIndex] === `correct` && answer[timeIndex] < AnswerType.FAST):
        status = `fast`;
        break;
      default:
        status = `unknown`;
    }

    return status;
  }
}

export default CurrentStatsView;
