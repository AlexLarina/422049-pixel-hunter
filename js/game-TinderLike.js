import {changeScreen, getElementFromTemplate} from './util.js';
import {getGreetingScreen} from "./greeting";
import {getHeader} from "./header";
import {getCurrentStats} from "./current_stats";
import {getQuestionWithAnswer} from "./game_question";

const tinderLikeGame = (level, state) => {
  const secondGameTemplate = `
    ${getHeader(state)}
    <section class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
      ${getQuestionWithAnswer(level.answers[0].image.url, 1)}
      </form>
      ${getCurrentStats()}
    </section>`;

  const secondGameScreen = getElementFromTemplate(secondGameTemplate);

  const gameForm = secondGameScreen.querySelector(`.game__content`);

  gameForm.addEventListener(`change`, () => {
    const answerData = new FormData(gameForm);
    if (answerData.has(`question1`)) {
      // getLevel(gameDataArray);
      // changeScreen(OneOfThreeGame(dataOneOfThree));
      state.level++;
      gameForm.reset();
    }
  });

  /* const backButton = secondGameScreen.querySelector(`.back`);
  backButton.addEventListener(`click`, () => {
    changeScreen(getGreetingScreen());
  }); */

  return secondGameScreen;
};


export {tinderLikeGame};
