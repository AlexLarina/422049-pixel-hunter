import AbstractView from "./abstract-view";
import {Question} from "./question-view";
import CurrentStatsView from "./current-stats-view";
import HeaderView from "./header-view";

class OneOfThreeGameView extends AbstractView {
  constructor(state, level) {
    super();
    this.level = level;
    this.state = state;
    this.result = null;
    // this._answers = [];
  }

  get template() {
    const question1 = new Question(this.level.answers[0].image.url, 1);
    const question2 = new Question(this.level.answers[1].image.url, 2);
    const question3 = new Question(this.level.answers[2].image.url, 3);

    // const stats = new CurrentStatsView();

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
    const answerForm = this.element.querySelector(`.game__content`);

    answerForm.addEventListener(`click`, (evt) => {
      const answerNumber = evt.target.alt.split(` `)[1];
      console.log(this.level.answers[answerNumber - 1].type);
      if (this.level.answers[answerNumber - 1].type === `painting`) {
        // this._answers.push(`true`);
        this.result = `correct`;
      } else {
        // this._answers.push(`false`);
        this.result = `wrong`;
      }
      // answerArray.push(evt.target.src);
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

