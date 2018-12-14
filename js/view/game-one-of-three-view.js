import AbstractView from "./abstract-view";
import {Question} from "./question-view";
import CurrentStatsView from "./current-stats-view";

class OneOfThreeGameView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    // пока непонятно, как тут сделать
    let question = new Question();
    const stats = new CurrentStatsView();

    return `
    <section class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
      ${Array.from({length: 3}).map((value, index) => question(value, index))
        .join(``)}
      </form>
      ${stats}
    </section>`;
  }

  bind() {
    const answerForm = this.element.querySelector(`.game__content`);
    const answerArray = [];

    answerForm.addEventListener(`click`, (evt) => {

      answerArray.push(evt.target.src);
      saveAnswer(state, answerArray);

      state = changeLevel(state);
      if (canContinue(state)) {
        updateGame(state);
      } else {
        this.onGetGameStats();
      }
    });
  }

  onGetGameStats() {

  }
}

export default OneOfThreeGameView;
