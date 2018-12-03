import {changeScreen, getElementFromTemplate} from './util.js';
import {greetingScreen} from "./greeting";
import {OneOfThreeGame} from "./game-3";
import {initialState, srcData} from "./data";
import {getHeader} from "./header";
import {getCurrentStats} from "./current_stats";
import {getQuestionWithAnswer} from "./game_question";
import {dataOneOfThree} from "./data";

const TinderLikeGame = (questionObj) => {
  const secondGameTemplate = `
    ${getHeader(initialState)}
    <section class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
      ${getQuestionWithAnswer(questionObj.answers[0].image.url, 1)}
      </form>
      ${getCurrentStats()}
    </section>`;

  const secondGameScreen = getElementFromTemplate(secondGameTemplate);

  const gameForm = secondGameScreen.querySelector(`.game__content`);

  gameForm.addEventListener(`change`, () => {
    const answerData = new FormData(gameForm);
    if (answerData.has(`question1`)) {
      changeScreen(OneOfThreeGame(dataOneOfThree));
      gameForm.reset();
    }
  });

  const backButton = secondGameScreen.querySelector(`.back`);
  backButton.addEventListener(`click`, () => {
    changeScreen(greetingScreen);
  });

  return secondGameScreen;
};


export {TinderLikeGame, dataTinderLike};
