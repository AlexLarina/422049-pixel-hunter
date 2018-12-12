import {changeScreen, getElementFromTemplate} from './util';
import {gameQuestionTemplate} from "./game_question";
import {getCurrentStats} from "./current_stats";
import {updateGame} from "./start-game";
import {changeLevel, canContinue} from "./game_state";
import {getGameStats} from "./stats";
import {saveAnswer} from "./game";

const oneOfThreeGame = (level, state) => {
  const thirdGameTemplate = `
    <section class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
      ${new Array(1)
        .fill(gameQuestionTemplate(level.answers[0].image.url, 1))
        .join(``)}
      ${new Array(1)
        .fill(gameQuestionTemplate(level.answers[1].image.url, 2))
        .join(``)}
      ${new Array(1)
        .fill(gameQuestionTemplate(level.answers[2].image.url, 3))
        .join(``)}
      </form>
      ${getCurrentStats()}
    </section>`;

  const thirdGameScreen = getElementFromTemplate(thirdGameTemplate);

  const answerForm = thirdGameScreen.querySelector(`.game__content`);
  const answerArray = [];

  answerForm.addEventListener(`click`, (evt) => {

    answerArray.push(evt.target.src);
    saveAnswer(state, answerArray);

    state = changeLevel(state);

    if (canContinue) {
      updateGame(state);
    } else {
      changeScreen(getGameStats());
    }
  });

  return thirdGameScreen;
};

export {oneOfThreeGame};
