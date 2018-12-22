import AbstractView from "./abstract-view";
import CurrentStatsView from "./current-stats-view";
import {AnswerType, Bonuses} from "../data/data";
import PreviousRound from "./previous-round-view";

const timeIndex = 0;
const resultIndex = 1;

const AnswerTypeScore = {
  wrong: 0,
  correct: 100,
  fast: 150,
  slow: 50
};

class StatsView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <header class="header">
        <button class="back">
          <span class="visually-hidden">Вернуться к началу</span>
          <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
            <use xlink:href="img/sprite.svg#arrow-left"></use>
          </svg>
          <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
            <use xlink:href="img/sprite.svg#logo-small"></use>
          </svg>
        </button>
      </header>
      <section class="result">
      
      </section>`;
  }

  getTotalScore(answers) {
    const correctAnswers = answers.filter((it) => {
      return it[resultIndex] === `correct`;
    });
    return correctAnswers.length * 100;
  }

  getSpeedBonus(answers) {
    const fastAnswers = answers.filter((it) => {
      return it[resultIndex] === `correct` && it[timeIndex] < AnswerType.FAST;
    });

    return fastAnswers.length;
  }

  slowSconce(answers) {
    const fastAnswers = answers.filter((it) => {
      return it[resultIndex] === `correct` && it[timeIndex] > AnswerType.SLOW;
    });

    return fastAnswers.length;
  }

  getFinalScore(state, answers) {
    return this.getTotalScore(answers) + this.getSpeedBonus(answers) * Bonuses.FAST
      + state.lives * Bonuses.LIVES + this.slowSconce(answers) * Bonuses.SLOW;
  }

  bind() {
    const backButton = this.element.querySelector(`.back`);
    backButton.addEventListener(`click`, () => {
      console.log(`From stats backbutton clicked!`);
      this.onGreeting();
    });
  }

  onGreeting() {

  }

  showPreviousGamesStats(data) {
    /* let total;
    if (!this.restLives(data)) {
      total = ``;
    } else {
      total = data.stats.reduce((accumulator, currentValue) => {
        return accumulator + AnswerTypeScore[currentValue];
      });
    }
    return total; */
    const table = this.getResult(data);
    const resultElement = this.element.querySelector(`.result`);
    resultElement.innerHTML = table;
  }

  restLives(data) {
    return data.lives;
  }

  getResult(result) {
    result = result.reverse();
    return `<h2 class="result__title">${result[0].lives > 0 ? `Победа` : `Поражение`}!</h2>
    ${this.getResultTable(result)}`;
  }

  getResultTable(result) {
    result = result.reverse();
    return result.map((res, index) => `<table class="result__table"><tr>
        <td class="result__number">${index + 1}.</td>
          <td>
          ${this.statsRow(res, index)}
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
          </tr></table>`
    ).join(``);
  }

  statsRow(result, i) {
    return `<tr>
        <td class="result__number">${i + 1}.</td>
          <td>
          ${this.renderStats(result.stats)}
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
          </tr>`;
  }

  renderStats(answers) {
    return `<ul class="stats">
       ${answers.map((answer) =>
    `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
       ${new Array(10 - answers.length)
      .fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
         </ul>`;
  }
}

export default StatsView;

