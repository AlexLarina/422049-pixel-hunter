import AbstractView from "./abstract-view";
import CurrentStatsView from "./current-stats-view";
import {AnswerType, Bonuses} from "../data/data";

const timeIndex = 0;
const resultIndex = 1;

class StatsView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
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
        <h2 class="result__title">Победа!</h2>
        <table class="result__table">
          <tr>
            <td class="result__number">1.</td>
            <td colspan="2">
              <ul class="stats">
              ${new CurrentStatsView(this.state).template}
              </ul>
            </td>
            <td class="result__points">× 100</td>
            <td class="result__total">${this.getTotalScore(this.state.userAnswers)}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">${this.getSpeedBonus(this.state.userAnswers)}<span class="stats__result stats__result--fast"></span></td>
            <td class="result__points">× ${Bonuses.FAST}</td>
            <td class="result__total">${this.getSpeedBonus(this.state.userAnswers) * Bonuses.FAST}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${this.state.lives}<span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">× ${Bonuses.LIVES}</td>
            <td class="result__total">${this.state.lives * Bonuses.LIVES}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${this.slowSconce(this.state.userAnswers)} <span class="stats__result stats__result--slow"></span></td>
            <td class="result__points">× ${Bonuses.SLOW}</td>
            <td class="result__total">${this.slowSconce(this.state.userAnswers) * Bonuses.SLOW}</td>
          </tr>
          <tr>
            <td colspan="5" class="result__total  result__total--final">${this.getFinalScore(this.state, this.state.userAnswers)}</td>
          </tr>
        </table>
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

}

export default StatsView;

