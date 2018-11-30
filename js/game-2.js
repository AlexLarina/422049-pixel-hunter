import {changeScreen, getElementFromTemplate} from './util.js';
import {greetingScreen} from "./greeting";
import {thirdGameScreen} from "./game-3";
import {initialState, srcData} from "./data";
import {gameQuestionTemplateWithAnswer} from "./game_question";
import {currentStatsTemplate} from "./current_stats";

const secondGameTemplate = `
  <section class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
    ${new Array(1)
      .fill(gameQuestionTemplateWithAnswer(srcData.paintings[1], `question1`))
      .join(``)}
      <!--<div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>-->
    </form>
    <ul class="stats">
    ${new Array(10)
      .fill(currentStatsTemplate)
      .join(``)}
      <!--<li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--unknown"></li>-->
    </ul>
  </section>`;

const secondGameScreen = getElementFromTemplate(secondGameTemplate);

const gameForm = secondGameScreen.querySelector(`.game__content`);


gameForm.addEventListener(`change`, () => {
  const answerData = new FormData(gameForm);
  if (answerData.has(`question1`)) {
    changeScreen(thirdGameScreen);
    gameForm.reset();
  }
});

const backButton = secondGameScreen.querySelector(`.back`);
/* backButton.addEventListener(`click`, () => {
  changeScreen(greetingScreen);
}); */

export {secondGameScreen};
