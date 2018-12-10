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

  const getLevel = () => gameDataArray[game.level];
  const levelContainer = document.createElement(`section`);
  levelContainer.innerHTML = ``;


  const updateGame = (state) => {
    const level = getLevel();
    // console.log(level);
    const header = getHeader(state);
    const stats = getCurrentStats();

    // const levelScreen = renderLevel(state, level);
    const levelScreen = chooseGame(level);

    levelContainer.appendChild(header);
    levelContainer.appendChild(levelScreen);
    levelContainer.appendChild(stats);

    const gameForm = levelContainer.querySelector(`.game__content`);
    gameForm.addEventListener(`click`, () => {
      if (canContinue(game)) {
        game = changeLevel(game);
        // updateGame(game);
      }
    });
  };

  updateGame(game);
  changeScreen(levelContainer);

};

export {startGame};
