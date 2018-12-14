import AbstractView from "./abstract-view";
import {QuestionWithAnswer} from "./question-view";
import CurrentStatsView from "./current-stats-view";

class TinderLikeGameView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    const question = new QuestionWithAnswer(this.level.answers[0].image.url, 1);
    const stats = new CurrentStatsView();

    return `
    <section class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
      ${question}
      </form>
      ${stats}
    </section>`;
  }

  bind() {
    const gameForm = this.element.querySelector(`.game__content`);
    const answerArray = [];

    gameForm.addEventListener(`change`, () => {
      const answerData = new FormData(gameForm);
      if (answerData.has(`question1`)) {

        answerArray.push(answerData.getAll(`question2`));
        saveAnswer(state, answerArray);

        state = changeLevel(state);
        if (canContinue(state)) {
          updateGame(state);
        } else {
          this.onGetGameStats();
        }
        gameForm.reset();
      }
    });
  }

  onGetGameStats() {

  }
}

export default TinderLikeGameView;
