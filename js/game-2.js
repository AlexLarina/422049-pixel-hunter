import {changeScreen, getElementFromTemplate} from './util.js';
import {greetingScreen} from "./greeting";
import {OneOfThreeGame, dataOneOfThree} from "./game-3";
import {initialState, srcData} from "./data";
import {getHeader} from "./header";
import {getCurrentStats} from "./current_stats";
import {getQuestionWithAnswer} from "./game_question";

const dataTinderLike = {
    "type": "tinder-like",
    "question": "Угадай, фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "http://placehold.it/705x455",
          "width": 705,
          "height": 455
        },
        "type": "photo"
      }
    ]
  };

const TinderLikeGame = (questionObj) => {
  const secondGameTemplate = `
    ${getHeader(initialState)}
    <section class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
      ${getQuestionWithAnswer(questionObj.answers[0].image.url, 1)}
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
      ${getCurrentStats()}
    </section>`;

  const secondGameScreen = getElementFromTemplate(secondGameTemplate);

  const gameForm = secondGameScreen.querySelector(`.game__content`);

  gameForm.addEventListener(`change`, () => {
    const answerData = new FormData(gameForm);
    if (answerData.has(`question1`)) {
      changeScreen(OneOfThreeGame(dataOneOfThree));
      gameForm.reset();
    }
  });

  const backButton = secondGameScreen.querySelector(`.back`);
  backButton.addEventListener(`click`, () => {
    changeScreen(greetingScreen);
  });

  return secondGameScreen;
};


export {TinderLikeGame, dataTinderLike};
