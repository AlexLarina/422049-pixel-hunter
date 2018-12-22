const canContinue = (state) => {
  return state.lives > 0;
};

const die = (state) => {
  if (!canContinue(state)) {
    throw new Error(`You can't continue anymore`);
  }

  const lives = state.lives - 1;

  return Object.assign({}, state, {
    lives
  });
};

export {canContinue, die};
