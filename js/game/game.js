import {twoOfTwoGame} from "../templates/game-two-of-two";
import {tinderLikeGame} from "../templates/game-tinder-like";
import {oneOfThreeGame} from "../templates/game-one-of-three";
// import {getRulesScreen} from "../templates/rules";

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
    // default:
    //  gameScreen = getRulesScreen();
  }

  return gameScreen;
};

const saveAnswer = (state, answer) => {
  state.answers.push(answer);
};

export {chooseGame, saveAnswer};
