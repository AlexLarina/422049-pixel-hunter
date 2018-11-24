export const countGameScore = (answers, restOfLives) => {
  let totalScore = 0;

  if (answers.length < 10) {
    totalScore = -1;
  } else {
    answers.forEach((it) => {
      if (it.correctAnswer) {
        totalScore += 100;
      }

      if (it.time < 10) {
        totalScore += 50;
      }

      if (it.time > 20) {
        totalScore -= 50;
      }
    });

    totalScore += restOfLives * 50;
  }

  return totalScore;
};

