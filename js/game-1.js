import {changeScreen, getElementFromTemplate} from './util';
import {getHeader} from "./header";
import {greetingScreen} from './greeting';
import {secondGameScreen} from './game-2';
import {initialState, srcData} from "./data";
import {getQuestionWithAnswer} from "./game_question";
import {getCurrentStats} from "./current_stats";

const questionObjectTwoOfTwo = {
    "type": "two-of-two",
    "question": "Угадайте для каждого изображения фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "http://placehold.it/468x458",
          "width": 468,
          "height": 458
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "http://placehold.it/468x458",
          "width": 468,
          "height": 458
        },
        "type": "painting"
      }
    ]
  };

const twoOfTwoGame = (questionObj) => {
  const firstGameTemplate = `
    ${getHeader(initialState)}
    <section class="game">
      <p class="game__task">${questionObj.question}</p>
      <form class="game__content">
      ${getQuestionWithAnswer(questionObj.answers[0].image.url, questionObj.answers[0].type)}
      ${getQuestionWithAnswer(questionObj.answers[1].image.url, questionObj.answers[1].type)}
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
     ${getCurrentStats()}
    </section>
  `;

  const firstGameScreen = getElementFromTemplate(firstGameTemplate);

  const gameForm = firstGameScreen.querySelector(`.game__content`);
  gameForm.addEventListener(`change`, () => {
    const answerData = new FormData(gameForm);
    if (answerData.has(`question1`) && answerData.has(`question2`)) {
      console.log(`answered!`);
      changeScreen(secondGameScreen);
      gameForm.reset();
    }
  });

  return firstGameScreen;
}


export {twoOfTwoGame, questionObjectTwoOfTwo};
