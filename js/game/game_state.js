const LAST_LEVEL = 5;

const changeLevel = (state) => {
  if (typeof state.level !== `number`) {
    throw new Error(`Level should be of type number`);
  }

  if (state.level < 0) {
    throw new Error(`Level should not be negative value`);
  }

  const updatedState = Object.assign({}, state);
  if (state.level < LAST_LEVEL) {
    updatedState.level++;
  }

  return updatedState;
};

const canContinue = (state) => {
  return state.level < LAST_LEVEL;
};

const die = (game) => {
  if (!canContinue(game)) {
    throw new Error(`You can't continue anymore`);
  }

  const lives = game.lives - 1;

  return Object.assign({}, game, {
    lives
  });
};

export {changeLevel, canContinue, die};