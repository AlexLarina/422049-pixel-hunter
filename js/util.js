import {rulesScreen} from './rules';
import {twoOfTwoGame} from './game-1';
import {TinderLikeGame} from './game-2';
import {OneOfThreeGame} from "./game-3";
import {getGameStats} from './stats';

const getElementFromTemplate = (template) => {
  const wrapper = document.createElement(`section`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

const mainElement = document.querySelector(`#main`);

const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};


const getLevel = (questions) => {
  questions.forEach(function (it) {
    switch (it.type) {
      case 'two-of-two':
        changeScreen(twoOfTwoGame(it));
        break;
      case 'tinder-like':
        changeScreen(TinderLikeGame(it))
        break;
      case 'one-of-three':
        changeScreen(OneOfThreeGame(it))
        break;
      default:
        changeScreen(rulesScreen);
    }
  });

  changeScreen(getGameStats);
}

export {getElementFromTemplate, changeScreen, mainElement, getLevel};
