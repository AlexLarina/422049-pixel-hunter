import {INITIAL_STATE, gameDataArray} from "./data";
import {getHeader} from "./header";
import {chooseGame} from "./game";
import {changeScreen} from "./util";

let game;

const startGame = () => {
  game = Object.assign({}, INITIAL_STATE);
  updateGame(game);
};

const updateGame = (state) => {
  const level = gameDataArray[state.level];
  const header = getHeader(state);

  const levelScreen = chooseGame(level, state);

  const container = document.createElement(`section`);
  container.innerHTML = ``;

  container.appendChild(header);
  container.appendChild(levelScreen);

  changeScreen(container);

  return container;
};

export {startGame, updateGame};
