const INITIAL_STATE = Object.freeze({
  time: 30,
  lives: 3,
  level: 0,
  answers: []
});

const AnswerType = {
  FAST: 10,
  SLOW: 20
};

const Bonuses = {
  FAST: 50,
  SLOW: -50,
  LIVES: 50
};

export {INITIAL_STATE, AnswerType, Bonuses};
