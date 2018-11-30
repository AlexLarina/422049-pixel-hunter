import {changeScreen, getElementFromTemplate} from './util';
import {greetingScreen} from './greeting';
import {statsScreen} from './stats';
import {initialState, srcData} from "./data";
import {gameQuestionTemplate} from "./game_question";
import {currentStatsTemplate} from "./current_stats";

const thirdGameTemplate = `
  <section class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
    ${new Array(1)
      .fill(gameQuestionTemplate(srcData.paintings[2], `Option 1`))
      .join(``)}
    ${new Array(1)
      .fill(gameQuestionTemplate(srcData.photos[2], `Option 2`))
      .join(``)}
    ${new Array(1)
      .fill(gameQuestionTemplate(srcData.photos[1], `Option 3`))
      .join(``)}
      <!--<div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 3" width="304" height="455">
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

const thirdGameScreen = getElementFromTemplate(thirdGameTemplate);

const answerForm = thirdGameScreen.querySelector(`.game__content`);

answerForm.addEventListener(`click`, () => {
  changeScreen(statsScreen);
});

const backButton = thirdGameScreen.querySelector(`.back`);
/* backButton.addEventListener(`click`, () => {
  changeScreen(greetingScreen);
}); */

export {thirdGameScreen};
