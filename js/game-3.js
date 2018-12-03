import {changeScreen, getElementFromTemplate, getLevel} from './util';
import {greetingScreen} from './greeting';
import {getGameStats} from './stats';
import {initialState, srcData, gameDataArray} from "./data";
import {gameQuestionTemplate} from "./game_question";
import {getHeader} from "./header";
import {getCurrentStats} from "./current_stats";

const OneOfThreeGame = (questionObj) => {
  const thirdGameTemplate = `
    ${getHeader(initialState)}
    <section class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
      ${new Array(1)
        .fill(gameQuestionTemplate(questionObj.answers[0].image.url, 1))
        .join(``)}
      ${new Array(1)
        .fill(gameQuestionTemplate(questionObj.answers[1].image.url, 2))
        .join(``)}
      ${new Array(1)
        .fill(gameQuestionTemplate(questionObj.answers[2].image.url, 3))
        .join(``)}
      </form>
      ${getCurrentStats()}
    </section>`;

  const thirdGameScreen = getElementFromTemplate(thirdGameTemplate);

  const answerForm = thirdGameScreen.querySelector(`.game__content`);

  answerForm.addEventListener(`click`, () => {
    getLevel(gameDataArray);
    // changeScreen(getGameStats());
  });

  const backButton = thirdGameScreen.querySelector(`.back`);
   backButton.addEventListener(`click`, () => {
    changeScreen(greetingScreen);
  });

  return thirdGameScreen;
}


export {OneOfThreeGame, dataOneOfThree};
