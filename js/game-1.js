import {changeScreen, getElementFromTemplate} from './util';
import {getHeader} from "./header";
import {greetingScreen} from './greeting';
import {secondGameScreen} from './game-2';
import {initialState, srcData} from "./data";
import {gameQuestionTemplateWithAnswer} from "./game_question";
import {currentStatsTemplate} from "./current_stats";

const firstGameTemplate = `
  ${getHeader(initialState)}
  <section class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
    ${new Array(1)
          .fill(gameQuestionTemplateWithAnswer(srcData.paintings[0], `question1`))
          .join(``)}
    ${new Array(1)
          .fill(gameQuestionTemplateWithAnswer(srcData.photos[0], `question2`))
          .join(``)}
      <!--<div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question2" type="radio" value="paint">
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
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>-->
    </ul>
  </section>
`;

const firstGameScreen = getElementFromTemplate(firstGameTemplate);

const gameForm = firstGameScreen.querySelector(`.game__content`);
gameForm.addEventListener(`change`, () => {
  const answerData = new FormData(gameForm);
  if (answerData.has(`question1`) && answerData.has(`question2`)) {
    changeScreen(secondGameScreen);
    gameForm.reset();
  }
});

const backButton = firstGameScreen.querySelector(`.back`);
/* backButton.addEventListener(`click`, () => {
  changeScreen(greetingScreen);
}); */

export {firstGameScreen};
