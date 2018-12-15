import AbstractView from "./abstract-view";
import {Question} from "./question-view";
import CurrentStatsView from "./current-stats-view";

class OneOfThreeGameView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    const question1 = new Question(this.level.answers[0].image.url, 1);
    const question2 = new Question(this.level.answers[0].image.url, 2);
    const question3 = new Question(this.level.answers[0].image.url, 3);

    const stats = new CurrentStatsView();

    return `
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

