import {changeScreen, getElementFromTemplate} from './util';
import {getHeader} from "./header";
import {getGreetingScreen} from './greeting';
import {getQuestionWithAnswer} from "./game_question";
import {getCurrentStats} from "./current_stats";

const twoOfTwoGame = (level, state) => {
  const firstGameTemplate = `
    ${getHeader(state)}
    <section class="game">
      <p class="game__task">${level.question}</p>
      <form class="game__content">
      ${getQuestionWithAnswer(level.answers[0].image.url, 1)}
      ${getQuestionWithAnswer(level.answers[1].image.url, 2)}
      </form>
     ${getCurrentStats()}
    </section>
  `;

  const firstGameScreen = getElementFromTemplate(firstGameTemplate);

  const gameForm = firstGameScreen.querySelector(`.game__content`);
  gameForm.addEventListener(`change`, () => {
    const answerData = new FormData(gameForm);
    if (answerData.has(`question1`) && answerData.has(`question2`)) {
      // alert(`answered!`);
      // getLevel(gameDataArray);
      // changeScreen(TinderLikeGame(dataTinderLike));
      state.level++;
      gameForm.reset();
    }
  });

  /* const backButton = firstGameScreen.querySelector(`.back`);
  backButton.addEventListener(`click`, () => {
    changeScreen(getGreetingScreen());
  }); */

  return firstGameScreen;
};

export {twoOfTwoGame};
