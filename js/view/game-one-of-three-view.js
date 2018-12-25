import AbstractView from "./abstract-view";
import {Question} from "./question-view";
import CurrentStatsView from "./current-stats-view";
import HeaderView from "./header-view";
import {Result, ANSWER_TYPE_PAINTING} from "../data/data";

class OneOfThreeGameView extends AbstractView {
  constructor(state, level) {
    super();
    this.level = level;
    this.state = state;
    this.result = null;
  }

  get template() {
    const question1 = new Question(this.level.answers[0].image.url, 1);
    const question2 = new Question(this.level.answers[1].image.url, 2);
    const question3 = new Question(this.level.answers[2].image.url, 3);

    return `
    ${new HeaderView(this.state, this.state.time).template}
    <section class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
      ${question1.template}
      ${question2.template}
      ${question3.template}
      </form>
      ${new CurrentStatsView(this.state).template}
    </section>`;
  }

  getResult() {
    return this.result;
  }

  bind() {
    const backButton = this.element.querySelector(`.back`);
    const answerForm = this.element.querySelector(`.game__content`);

    answerForm.addEventListener(`click`, (evt) => {
      const answerNumber = evt.target.alt.split(` `)[1];
      if (this.level.answers[answerNumber - 1].type === ANSWER_TYPE_PAINTING) {
        this.result = Result.CORRECT;
        this.onSaveAnswer(true);
      } else {
        this.result = Result.WRONG;
        this.onSaveAnswer(false);
      }
      this.onGameContinue();
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

export default OneOfThreeGameView;

