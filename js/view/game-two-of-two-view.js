import AbstractView from "./abstract-view";
import {QuestionWithAnswer} from "./question-view";
import CurrentStatsView from "./current-stats-view";
import HeaderView from "./header-view";
import {Result} from "../data/data";

class GameTwoOfTwoView extends AbstractView {
  constructor(state, level) {
    super();
    this.state = state;
    this.level = level;
    this.result = null;
  }

  get template() {
    const question1 = new QuestionWithAnswer(this.level.answers[0].image.url, 1);
    const question2 = new QuestionWithAnswer(this.level.answers[1].image.url, 2);

    return `
    ${new HeaderView(this.state, this.state.time).template}
    <section class="game">
      <p class="game__task">${this.level.question}</p>
      <form class="game__content">
      ${question1.template}
      ${question2.template}
      </form>
      ${new CurrentStatsView(this.state).template}
    </section>
  `;
  }

  getResult() {
    return this.result;
  }

  bind() {
    const backButton = this.element.querySelector(`.back`);
    const gameForm = this.element.querySelector(`.game__content`);
    const compareAnswerHash = {
      paint: `painting`,
      photo: `photo`
    };

    const answerData = new FormData(gameForm);

    gameForm.addEventListener(`change`, (evt) => {
      answerData.set(evt.target.name, evt.target.value);
      if (answerData.has(`question1`) && answerData.has(`question2`)) {

        if (compareAnswerHash[answerData.getAll(`question1`)[0]] === this.level.answers[0].type &&
          compareAnswerHash[answerData.getAll(`question2`)[0]] === this.level.answers[1].type) {
          this.result = Result.CORRECT;
          this.onSaveAnswer(true);
        } else {
          this.result = Result.WRONG;
          this.onSaveAnswer(false);
        }
        this.onGameContinue();
        gameForm.reset();
      }
    });

    backButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onRestart();
    });
  }

  onSaveAnswer() {

  }

  onGameContinue() {

  }

  onRestart() {

  }
}

export default GameTwoOfTwoView;
