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

const Result = {
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`
};

const AnswerStatus = {
  WRONG: `wrong`,
  CORRECT: `correct`,
  FAST: `fast`,
  SLOW: `slow`,
  UNKNOWN: `unknown`
};

const GameType = {
  TWO_OF_TWO: `two-of-two`,
  TINDER_LIKE: `tinder-like`,
  ONE_OF_THREE: `one-of-three`
};

const TIMEOUT = 1000;
const BLINCKING_TIME = 5;
const ANSWER_TYPE_PAINTING = `painting`;
const LEVELS = 10;
const CORRECT_SCORE = 100;

export {INITIAL_STATE, AnswerType, Bonuses, Result, AnswerStatus,
  GameType, TIMEOUT, BLINCKING_TIME, ANSWER_TYPE_PAINTING, LEVELS, CORRECT_SCORE};
