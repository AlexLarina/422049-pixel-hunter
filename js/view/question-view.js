import AbstractView from "./abstract-view";

class Question extends AbstractView {
  constructor(src, option) {
    super();
    this.src = src;
    this.option = option;
  }

  get template() {
    return `
    <div class="game__option">
      <img src="${this.src}" alt="Option ${this.option}" width="304" height="455">
    </div>`;
  }
}

class QuestionWithAnswer extends AbstractView {
  constructor(src, number) {
    super();
    this.src = src;
    this.number = number;
  }

  get template() {
    return `
    <div class="game__option">
    <img src="${this.src}" alt="Option 1" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="question${this.number}" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="question${this.number}" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>`;
  }
}

export {Question, QuestionWithAnswer};
