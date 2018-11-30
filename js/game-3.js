import {changeScreen, getElementFromTemplate} from './util';
import {greetingScreen} from './greeting';
import {getGameStats} from './stats';
import {initialState, srcData} from "./data";
import {gameQuestionTemplate} from "./game_question";
import {getHeader} from "./header";
import {getCurrentStats} from "./current_stats";

const dataOneOfThree = {
    "type": "one-of-three",
    "question": "Найдите рисунок среди изображений",
    "answers": [
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "painting"
      },
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "photo"
      }
    ]
  };

const OneOfThreeGame = (questionObj) => {
  const thirdGameTemplate = `
    ${getHeader(initialState)}
    <section class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
      ${new Array(1)
        .fill(gameQuestionTemplate(questionObj.answers[0].image.url, 1))
        .join(``)}
      ${new Array(1)
        .fill(gameQuestionTemplate(questionObj.answers[1].image.url, 2))
        .join(``)}
      ${new Array(1)
        .fill(gameQuestionTemplate(questionObj.answers[2].image.url, 3))
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
    changeScreen(getGameStats());
  });

  const backButton = thirdGameScreen.querySelector(`.back`);
   backButton.addEventListener(`click`, () => {
    changeScreen(greetingScreen);
  });

  return thirdGameScreen;
}


export {OneOfThreeGame, dataOneOfThree};
