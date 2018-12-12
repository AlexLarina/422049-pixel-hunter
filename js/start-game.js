import {INITIAL_STATE, gameDataArray} from "./data";
import {getHeader} from "./header";
import {changeLevel, canContinue} from "./game_state";
import {chooseGame} from "./game";
import {changeScreen} from "./util";
import {getCurrentStats} from "./current_stats";

let game;

const startGame = () => {
  // alert(`game started!`);
  game = Object.assign({}, INITIAL_STATE);
  updateGame(game);
};

const updateGame = (state) => {
  const level = gameDataArray[state.level];
  console.log(level);
  const header = getHeader(state);
  const stats = getCurrentStats();
  // console.log(level);

  // const levelScreen = renderLevel(state, level);
  const levelScreen = chooseGame(level, state);

  const container = document.createElement(`section`);
  container.innerHTML = ``;
  container.appendChild(header);
  container.appendChild(levelScreen);
  // container.appendChild(stats);

  /* const gameForm = container.querySelector(`.game__content`);
  gameForm.addEventListener(`click`, () => {
    game = changeLevel(game);
    updateGame(game);
    /* game.state++;
    updateGame(game);
    if (canContinue(game)) {
      game = changeLevel(game);
      // updateGame(game);
    }
  }); */

  changeScreen(container);

  return container;
};

export {startGame, updateGame};
