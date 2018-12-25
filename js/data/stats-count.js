import {LEVELS, CORRECT_SCORE, AnswerType, Bonuses} from "./data";

const countGameScore = (answers, restOfLives) => {
  let totalScore = 0;

  if (answers.length < LEVELS) {
    totalScore = -1;
  } else {
    answers.forEach((it) => {
      if (it.correctAnswer) {
        totalScore += CORRECT_SCORE;
      }

      if (it.time < AnswerType.FAST) {
        totalScore += Bonuses.FAST;
      }

      if (it.time > AnswerType.SLOW) {
        totalScore += Bonuses.SLOW;
      }
    });

    totalScore += restOfLives * Bonuses.LIVES;
  }

  return totalScore;
};

export {countGameScore};
