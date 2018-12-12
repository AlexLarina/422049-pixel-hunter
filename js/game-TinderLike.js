import {changeScreen, getElementFromTemplate} from './util.js';
import {getCurrentStats} from "./current_stats";
import {getQuestionWithAnswer} from "./game_question";
import {updateGame} from "./start-game";
import {changeLevel, canContinue} from "./game_state";
import {getGameStats} from "./stats";
import {saveAnswer} from "./game";

const tinderLikeGame = (level, state) => {
  const secondGameTemplate = `
    <section class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
      ${getQuestionWithAnswer(level.answers[0].image.url, 1)}
      </form>
      ${getCurrentStats()}
    </section>`;

  const secondGameScreen = getElementFromTemplate(secondGameTemplate);

  const gameForm = secondGameScreen.querySelector(`.game__content`);
  const answerArray = [];

  gameForm.addEventListener(`change`, () => {
    const answerData = new FormData(gameForm);
    if (answerData.has(`question1`)) {

      answerArray.push(answerData.getAll(`question2`));
      saveAnswer(state, answerArray);

      state = changeLevel(state);
      if (canContinue) {
        updateGame(state);
      } else {
        changeScreen(getGameStats());
      }
      gameForm.reset();
    }
  });

  return secondGameScreen;
};


export {tinderLikeGame};
