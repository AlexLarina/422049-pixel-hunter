import AbstractView from "./abstract-view";
import {Question} from "./question-view";
import CurrentStatsView from "./current-stats-view";
import HeaderView from "./header-view";

class OneOfThreeGameView extends AbstractView {
  constructor(state, level) {
    super();
    this.level = level;
    this.state = state;
  }

  get template() {
    const question1 = new Question(this.level.answers[0].image.url, 1);
    const question2 = new Question(this.level.answers[0].image.url, 2);
    const question3 = new Question(this.level.answers[0].image.url, 3);

    const stats = new CurrentStatsView();

    return `
    ${new HeaderView(this.state, this.state.time).template}
    <section class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
      ${question1.template}
      ${question2.template}
      ${question3.template}
      </form>
      ${stats}
    </section>`;
  }

  bind() {
    const answerForm = this.element.querySelector(`.game__content`);
    const answerArray = [];

    answerForm.addEventListener(`click`, (evt) => {

      answerArray.push(evt.target.src);
      this.onSaveAnswer();
      this.onGameContinue();
    });
  }

  onSaveAnswer() {

  }

  onGameContinue() {

  }
}

export default OneOfThreeGameView;

