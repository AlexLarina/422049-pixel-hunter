import AbstractView from "./abstract-view";
import {QuestionWithAnswer} from "./question-view";
import CurrentStatsView from "./current-stats-view";
import HeaderView from "./header-view";

class TinderLikeGameView extends AbstractView {
  constructor(state, level) {
    super();
    this.state = state;
    this.level = level;
    // this._answers = [];
    this.result = null;
  }

  get template() {
    const question = new QuestionWithAnswer(this.level.answers[0].image.url, 1);
    // const stats = new CurrentStatsView();

    return `
    ${new HeaderView(this.state, this.state.time).template}
    <section class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
      ${question.template}
      </form>
      ${new CurrentStatsView(this.state).template}
    </section>`;
  }

  getResult() {
    return this.result;
  }

  bind() {
    const gameForm = this.element.querySelector(`.game__content`);
    const compareAnswerHash = {
      paint: `painting`,
      photo: `photo`
    };

    gameForm.addEventListener(`change`, (evt) => {
      const answerData = new FormData(gameForm);

      answerData.set(evt.target.name, evt.target.value);
      console.log(compareAnswerHash[answerData.getAll(`question1`)[0]]);

      if (answerData.has(`question1`)) {
        if (compareAnswerHash[answerData.getAll(`question1`)[0]] === this.level.answers[0].type) {
          // this._answers.push(`true`);
          this.result = `correct`;
          console.log(`RIGHT ANSWER!`);
        } else {
          this.result = `wrong`;
          // this._answers.push(`false`);
          console.log(`WRONG ANSWER!`);
        }
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
