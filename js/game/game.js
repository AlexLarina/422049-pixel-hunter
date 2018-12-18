import TwoOfTwoGame from "../templates/game-two-of-two";
import TinderLikeGame from "../templates/game-tinder-like";
import OneOfThreeGame from "../templates/game-one-of-three";
// import {getRulesScreen} from "../templates/rules";

const chooseGame = (level, state) => {
  let gameScreen;
  switch (level.type) {
    case `two-of-two`:
      gameScreen = new TwoOfTwoGame(level, state);
      break;
    case `tinder-like`:
      gameScreen = new TinderLikeGame(level, state);
      break;
    case `one-of-three`:
      gameScreen = new OneOfThreeGame(level, state);
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
