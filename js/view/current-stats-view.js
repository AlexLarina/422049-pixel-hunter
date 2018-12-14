import AbstractView from "./abstract-view";

class CurrentStatsView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<ul class="stats">
    ${new Array(10)
      .fill(`<li class="stats__result stats__result--wrong"></li>`)
      .join(``)}
    </ul>`;
  }
}

export default CurrentStatsView;
