import {LEVELS, CORRECT_SCORE, AnswerType, Bonuses} from "./data";

const countGameScore = (answers, restOfLives) => {
  return (answers.length < LEVELS) ? -1 : countAnswers(answers, restOfLives);
};

const countAnswers = (answers, restOfLives) => {
  let score = 0;
  answers.forEach((it) => {
    if (it.correctAnswer) {
      score += CORRECT_SCORE;
    }

    if (it.time < AnswerType.FAST) {
      score += Bonuses.FAST;
    }

    if (it.time > AnswerType.SLOW) {
      score += Bonuses.SLOW;
    }
  });

  score += restOfLives * Bonuses.LIVES;

  return score;
};

export {countGameScore};
