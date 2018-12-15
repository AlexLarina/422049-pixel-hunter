import AbstractView from "./abstract-view";
import {QuestionWithAnswer} from "./question-view";
import CurrentStatsView from "./current-stats-view";

class GameTwoOfTwoView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    const question1 = new QuestionWithAnswer(this.level.answers[0].image.url, 1);
    const question2 = new QuestionWithAnswer(this.level.answers[0].image.url, 2);
    const stats = new CurrentStatsView();

    return `
    <section class="game">
      <p class="game__task">${this.level.question}</p>
      <form class="game__content">
      ${question1.template}
      ${question2.template}
      </form>
      ${stats.template}
    </section>
  `;
  }

  bind() {
    const gameForm = this.element.querySelector(`.game__content`);
    const answerArray = [];

    gameForm.addEventListener(`change`, () => {
      const answerData = new FormData(gameForm);

      if (answerData.has(`question1`) && answerData.has(`question2`)) {

        answerArray.push(answerData.getAll(`question1`));
        answerArray.push(answerData.getAll(`question2`));

        this.onSaveAnswer();
        this.onGameContinue();
        gameForm.reset();
      }
    });
  }

  onSaveAnswer() {

  }

  onGameContinue() {

  }
}

export default GameTwoOfTwoView;
