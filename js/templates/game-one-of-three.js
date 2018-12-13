import {changeScreen, getElementFromTemplate} from '../game/util';
import {gameQuestionTemplate} from "./game_question";
import {getCurrentStats} from "./current_stats";
import {updateGame} from "../game/start-game";
import {changeLevel, canContinue} from "../game/game_state";
import {getGameStats} from "./stats";
import {saveAnswer} from "../game/game";

const oneOfThreeGame = (level, state) => {
  const thirdGameTemplate = `
    <section class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
      ${Array.from({length: 3}).map((value, index)=>gameQuestionTemplate(level.answers[index].image.url, index + 1))
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
    if (canContinue(state)) {
      updateGame(state);
    } else {
      changeScreen(getGameStats());
    }
  });

  return thirdGameScreen;
};

export {oneOfThreeGame};
