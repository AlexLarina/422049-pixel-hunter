import {changeScreen, getElementFromTemplate} from './util.js';
// import {getGreetingScreen} from "./greeting";
import {getHeader} from "./header";
import {getCurrentStats} from "./current_stats";
import {getQuestionWithAnswer} from "./game_question";
import {updateGame} from "./start-game";
import {changeLevel, canContinue} from "./game_state";
import {getGameStats} from "./stats";

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
      console.log(`cancontinue = ` + canContinue(state));
      if (canContinue) {
        state = changeLevel(state);
        updateGame(state);
      } else {
        changeScreen(getGameStats());
      }
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
