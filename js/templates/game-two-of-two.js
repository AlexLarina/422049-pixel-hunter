import {changeScreen, getElementFromTemplate} from '../game/util';
import {getQuestionWithAnswer} from "./game_question";
import {getCurrentStats} from "./current_stats";
import {updateGame} from "../game/start-game";
import {changeLevel, canContinue} from "../game/game_state";
import {getGameStats} from "./stats";
import {saveAnswer} from "../game/game";

const twoOfTwoGame = (level, state) => {
  const firstGameTemplate = `
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
  const answerArray = [];

  gameForm.addEventListener(`change`, () => {
    const answerData = new FormData(gameForm);

    if (answerData.has(`question1`) && answerData.has(`question2`)) {

      answerArray.push(answerData.getAll(`question1`));
      answerArray.push(answerData.getAll(`question2`));
      saveAnswer(state, answerArray);

      state = changeLevel(state);
      if (canContinue(state)) {
        updateGame(state);
      } else {
        changeScreen(getGameStats());
      }
      gameForm.reset();
    }
  });

  return firstGameScreen;
};

export {twoOfTwoGame};
