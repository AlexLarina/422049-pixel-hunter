import AbstractView from "./abstract-view";
import {QuestionWithAnswer} from "./question-view";
import CurrentStatsView from "./current-stats-view";
import HeaderView from "./header-view";

class TinderLikeGameView extends AbstractView {
  constructor(state, level) {
    super();
    this.state = state;
    this.level = level;
  }

  get template() {
    const question = new QuestionWithAnswer(this.level.answers[0].image.url, 1);
    const stats = new CurrentStatsView();

    return `
    ${new HeaderView(this.state, this.state.time).template}
    <section class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
      ${question.template}
      </form>
      ${stats.template}
    </section>`;
  }

  bind() {
    const gameForm = this.element.querySelector(`.game__content`);
    const answerArray = [];

    gameForm.addEventListener(`change`, () => {
      const answerData = new FormData(gameForm);
      if (answerData.has(`question1`)) {

        answerArray.push(answerData.getAll(`question2`));
        this.onSaveAnswer();
        this.onGameContinue();
      }
    });
  }

  onSaveAnswer() {

  }

  onGameContinue() {

  }
}

export default TinderLikeGameView;
