import AbstractView from "./abstract-view";
import {Question} from "./question-view";
import CurrentStatsView from "./current-stats-view";
import HeaderView from "./header-view";
import {die} from "../game/game_state";

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
      // console.log(this.level.answers[answerNumber - 1].type);
      if (this.level.answers[answerNumber - 1].type === `painting`) {
        this.onSaveAnswer(true);
        this.result = `correct`;
        this.onSaveAnswer(true);
      } else {
        this.result = `wrong`;
        this.onSaveAnswer(false);
        // die(this.state);
      }
      // this.onSaveAnswer();
      this.onGameContinue();
    });

    backButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      // console.log(`From level screen clicked!`);
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

