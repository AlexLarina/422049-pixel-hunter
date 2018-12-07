import {INITIAL_STATE, gameDataArray} from './data';
import { getHeader } from "./header";
import { changeLevel, canContinue } from './game-state';
import { renderLevel } from "./level";

let game;

const startGame = {
  game = Object.assign({}, INITIAL_STATE);

  const getLevel = () => gameDataArray[game.level];
  const levelContainer = document.createElement(`section`);
  levelContainer.innerHTML = ``;


  const updateGame = (state) => {
    const header = getHeader(state);
    const levelScreen = renderLevel(state, level);

    levelContainer.appendChild(header);
    levelContainer.appendChild(levelScreen);

    const gameForm = levelContainer.querySelector(`.game__content`);
    gameForm.addEventListener(`click`, () => {
      if(canContinue(game)) {
        game = changeLevel(game);
      }
    });
  }

  updateGame(game);
  changeScreen(levelContainer);
}

export {startGame}
