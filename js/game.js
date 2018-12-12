import {getElementFromTemplate} from "./util";
import {getCurrentStats} from "./current_stats";
import {twoOfTwoGame} from "./game-TwoOfTwo";
import {tinderLikeGame} from "./game-TinderLike";
import {oneOfThreeGame} from "./game-OneOfThree";
import {getRulesScreen} from "./rules";

const chooseGame = (level, state) => {
  let gameScreen;
  switch (level.type) {
    case `two-of-two`:
      gameScreen = twoOfTwoGame(level, state);
      break;
    case `tinder-like`:
      gameScreen = tinderLikeGame(level, state);
      break;
    case `one-of-three`:
      gameScreen = oneOfThreeGame(level, state);
      break;
    default:
      gameScreen = getRulesScreen();
  }

  return gameScreen;
};

const getLevelGameForm = (level) => {
  let formTemplate = ``;
  switch (level.type) {
    case `two-of-two`:
      formTemplate = `<form class="game__content">
      ${[...level.answers].map((answer, i) => `
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

const saveAnswer = (state, level, evt) => {
  const answerObject = {
    src: ``
  };
  if (level.type === `one-of-three`) {
    answerObject.src = evt.target.src;
  } else {
    const option = evt.target.parent.parent;
    answerObject.src = option.querySelector(`img`).src;
  }

  state.answers.push(answerObject);
};

export {renderLevel, chooseGame, saveAnswer};
