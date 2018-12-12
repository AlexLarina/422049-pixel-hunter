import {changeScreen, getElementFromTemplate} from './util';
import {getGreetingScreen} from './greeting';
import {gameQuestionTemplate} from "./game_question";
import {getHeader} from "./header";
import {getCurrentStats} from "./current_stats";

const oneOfThreeGame = (level, state) => {
  const thirdGameTemplate = `
    ${getHeader(state)}
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

  answerForm.addEventListener(`click`, () => {
    // getLevel(gameDataArray);
    // changeScreen(getGameStats());
    state.level++;
  });

  /* const backButton = thirdGameScreen.querySelector(`.back`);
  backButton.addEventListener(`click`, () => {
    changeScreen(getGreetingScreen());
  }); */

  return thirdGameScreen;
};

export {oneOfThreeGame};
