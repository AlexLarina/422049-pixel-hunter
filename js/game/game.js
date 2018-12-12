import {twoOfTwoGame} from "../templates/game-TwoOfTwo";
import {tinderLikeGame} from "../templates/game-TinderLike";
import {oneOfThreeGame} from "../templates/game-OneOfThree";
import {getRulesScreen} from "../templates/rules";

const chooseGame = (level, state) => {
  let gameScreen;
  switch (level.type) {
    case `two-of-two`:
      gameScreen = twoOfTwoGame(level, state);
      break;
    case `tinder-like`:
      gameScreen = tinderLikeGame(level, state);
      break;
    case `one-of-three`:
      gameScreen = oneOfThreeGame(level, state);
      break;
    default:
      gameScreen = getRulesScreen();
  }

  return gameScreen;
};

const saveAnswer = (state, answer) => {
  state.answers.push(answer);
};

export {chooseGame, saveAnswer};
