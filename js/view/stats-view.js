import AbstractView from "./abstract-view";
import {AnswerType, Bonuses} from "../data/data";

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
      // console.log(`From stats backbutton clicked!`);
      this.onGreeting();
    });
  }

  onGreeting() {

  }

  showPreviousGamesStats(data) {
    const table = this.getResult(data);
    const resultElement = this.element.querySelector(`.result`);
    resultElement.innerHTML = table;
  }

  getResult(result) {
    result = result.reverse();
    return `<h2 class="result__title">${result[0].lives > 0 ? `Победа` : `Поражение`}!</h2>
    ${this.getResultTable(result)}`;
  }

  getResultTable(result) {
    return result.map((res, index) => `<table class="result__table">
          ${this.statsRow(res, index)}
          </table>`
    ).join(``);
  }

  statsRow(result, i) {
    return `<tr>
        <td class="result__number">${i + 1}.</td>
          <td>
          ${this.renderStats(result.stats)}
          </td>
          ${this.getResultTotal(result)}
          ${this.transcriptScore(result)}
          <td class="result__total  result__total--final">${this.getFinal(result)}</td>
          </tr>`;
  }

  getResultTotal(result) {
    return (this.isWin(result)) ? `<td class="result__points">× 100</td>
        <td class="result__total">${this.countScore(result)}</td>` : `<td class="result__total"></td>`;
  }

  countScore(result) {
    let total;
    total = result.stats.reduce((accumulator, currentValue) => {
      return currentValue === `correct` && (accumulator + AnswerTypeScore[currentValue]);
      // return accumulator + AnswerTypeScore[currentValue];
    });

    total += result.lives * 50;

    return total;
  }

  transcriptScore(result) {
    if (this.isWin(result)) {
      return `<tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">${this.countFast(result.stats)} <span class="stats__result stats__result--fast"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">${this.countFast(result.stats) * 50}</td>
        </tr>
        <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">${result.lives} <span class="stats__result stats__result--alive"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">${this.countLives(result)}</td>
        </tr>
        <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">${this.countSlow(result.stats)} <span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">× 50</td>
      <td class="result__total">${this.countSlow(result.stats) * (-50)}</td>
        </tr>`;
    }

    return ``;
  }

  isWin(result) {
    return result.lives > 0;
  }

  countFast(stats) {
    let num = 0;
    stats.forEach((it) => {
      if (it === `fast`) {
        num++;
      }
    });

    return num;
  }

  countSlow(stats) {
    let num = 0;
    stats.forEach((it) => {
      if (it === `slow`) {
        num++;
      }
    });

    return num;
  }

  countLives(result) {
    return result.lives * 50;
  }

  getFinal(result) {
    if (!this.isWin(result)) {
      return `fail`;
    } else {
      return this.countScore(result) + this.countSlow(result) + this.countFast(result) + this.countLives(result);
    }
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

