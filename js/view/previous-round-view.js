import AbstractView from "./abstract-view";

const AnswerTypeScore = {
  wrong: 0,
  correct: 100,
  fast: 150,
  slow: 50
};

class PreviousRound extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `<table class="result__table">
      <tr>
        <td class="result__number">2.</td>
        <td>
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--wrong"></li>
          </ul>
        </td>
        <td class="result__total">${this.countScore(this.data)}</td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>`;
  }

  countScore(data) {
    let total;
    if (!this.restLives(data)) {
      total = ``;
    } else {
      total = data.stats.reduce((accumulator, currentValue) => {
        return accumulator + AnswerTypeScore[currentValue];
      });
    }
    return total;
  }

  restLives(data) {
    return data.lives;
  }

}

export default PreviousRound;
