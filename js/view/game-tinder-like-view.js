import AbstractView from "./abstract-view";
import {QuestionWithAnswer} from "./question-view";
import CurrentStatsView from "./current-stats-view";
import HeaderView from "./header-view";
import {Result} from "../data/data";

class TinderLikeGameView extends AbstractView {
  constructor(state, level) {
    super();
    this.state = state;
    this.level = level;
    this.result = null;
  }

  get template() {
    const question = new QuestionWithAnswer(this.level.answers[0].image.url, 1);

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
    const backButton = this.element.querySelector(`.back`);
    const gameForm = this.element.querySelector(`.game__content`);
    const compareAnswerHash = {
      paint: `painting`,
      photo: `photo`
    };

    gameForm.addEventListener(`change`, (evt) => {
      const answerData = new FormData(gameForm);

      answerData.set(evt.target.name, evt.target.value);

      if (answerData.has(`question1`)) {
        if (compareAnswerHash[answerData.getAll(`question1`)[0]] === this.level.answers[0].type) {
          this.result = Result.CORRECT;
          this.onSaveAnswer(true);
        } else {
          this.result = Result.WRONG;
          this.onSaveAnswer(false);
        }
        this.onGameContinue();
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

export default TinderLikeGameView;
