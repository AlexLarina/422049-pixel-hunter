const tick = (state) => {
  if (state.time <= 0) {
    return 0;
  }

  state.time--;
  const updatedState = Object.assign({}, state);
  return updatedState;
};

export default tick;
