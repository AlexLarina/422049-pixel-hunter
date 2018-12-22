import AbstractView from "./abstract-view";
import {QuestionWithAnswer} from "./question-view";
import CurrentStatsView from "./current-stats-view";
import HeaderView from "./header-view";
import {die} from "../game/game_state";

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
    const gameForm = this.element.querySelector(`.game__content`);
    const compareAnswerHash = {
      paint: `painting`,
      photo: `photo`
    };

    gameForm.addEventListener(`change`, (evt) => {
      const answerData = new FormData(gameForm);

      answerData.set(evt.target.name, evt.target.value);
      // console.log(compareAnswerHash[answerData.getAll(`question1`)[0]]);

      if (answerData.has(`question1`)) {
        if (compareAnswerHash[answerData.getAll(`question1`)[0]] === this.level.answers[0].type) {
          this.result = `correct`;
          // console.log(`RIGHT ANSWER!`);
        } else {
          this.result = `wrong`;
          die(this.state);
          // console.log(`WRONG ANSWER!`);
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
