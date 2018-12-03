import {changeScreen, getElementFromTemplate} from './util';
import {getHeader} from "./header";
import {greetingScreen} from './greeting';
import {TinderLikeGame} from './game-2';
import {initialState, srcData} from "./data";
import {getQuestionWithAnswer} from "./game_question";
import {getCurrentStats} from "./current_stats";
import {dataTinderLike} from "./data";

const twoOfTwoGame = (questionObj) => {
  const firstGameTemplate = `
    ${getHeader(initialState)}
    <section class="game">
      <p class="game__task">${questionObj.question}</p>
      <form class="game__content">
      ${getQuestionWithAnswer(questionObj.answers[0].image.url, 1)}
      ${getQuestionWithAnswer(questionObj.answers[1].image.url, 2)}
      </form>
     ${getCurrentStats()}
    </section>
  `;

  const firstGameScreen = getElementFromTemplate(firstGameTemplate);

  const gameForm = firstGameScreen.querySelector(`.game__content`);
  gameForm.addEventListener(`change`, () => {
    const answerData = new FormData(gameForm);
    if (answerData.has(`question1`) && answerData.has(`question2`)) {
      console.log(`answered!`);
      changeScreen(TinderLikeGame(dataTinderLike));
      gameForm.reset();
    }
  });

  const backButton = firstGameScreen.querySelector(`.back`);
  backButton.addEventListener(`click`, () => {
    changeScreen(greetingScreen);
  });

  return firstGameScreen;
}

export {twoOfTwoGame, dataTwoOfTwo};
