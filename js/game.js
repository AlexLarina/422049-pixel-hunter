import {getElementFromTemplate} from "./util";
import {getCurrentStats} from "./current_stats";

/* const getLevel = (questions) => {
  questions.forEach(function (it) {
    switch (it.type) {
      case `two-of-two`:
        changeScreen(twoOfTwoGame(it));
        break;
      case `tinder-like`:
        changeScreen(TinderLikeGame(it));
        break;
      case `one-of-three`:
        changeScreen(OneOfThreeGame(it));
        break;
      default:
        changeScreen(rulesScreen);
    }
  });

  changeScreen(getGameStats);
}; */

const getLevelGameForm = (level) => {
  const formTemplate = ``;
  switch (level.type) {
    case `two-of-two`:
      formTemplate = `<form class="game__content">
      ${[...level.answers].map((i, answer) => `
        <div class="game__option">
          <img src="${answer.image.url}" alt="Option ${i + 1}}" width="${answer.image.width}" height="${answer.image.height}">
          <label class="game__answer game__answer--photo">
            <input class="visually-hidden" name="question${i + 1}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input class="visually-hidden" name="question${i + 1}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        `).join(``)}
      </form>`;
      break;
    case `tinder-like`:
      formTemplate = `<form class="game__content game__content--wide">
      ${[...level.answers].map((i, answer) => `
        <div class="game__option">
          <img src="${answer.image.url}" alt="Option 1" width="${answer.image.width}" height="${answer.image.height}">
          <label class="game__answer  game__answer--photo">
            <input class="visually-hidden" name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input class="visually-hidden" name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        `).join(``)}
      </form>`;
      break;
    case `one-of-three`:
      formTemplate = `<form class="game__content game__content--triple">
      ${[...level.answers].map((i, answer) => `
        <div class="game__option">
          <img src="${answer.image.url}" alt="Option ${i + 1}" width="${answer.image.width}" height="${answer.image.height}">
        </div>
        `).join(``)}
      </form>`;
      break;
  }

  return formTemplate;
};

const renderLevel = (state, level) => {
  const gameLevelTemplate = `
    <section class="game">
      <p class="game__task">${level.question}</p>
      ${getLevelGameForm(level)}
      ${getCurrentStats(state)}
    `;

  const screen = getElementFromTemplate(gameLevelTemplate);

  return screen;
};

export {renderLevel};
