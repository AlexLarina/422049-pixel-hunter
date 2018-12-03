const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 3,
  time: 0
});

const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }

  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }

  return Object.assign({}, game, {
    level
  });
};

const canContinue = (game) => game.lives - 1 > 0;

const die = (game) => {
  if (!canContinue(game)) {
    throw new Error(`You can't continue anymore`);
  }

  const lives = game.lives - 1;

  return Object.assign({}, game, {
    lives
  });
};

export {INITIAL_GAME, changeLevel, canContinue, die}
