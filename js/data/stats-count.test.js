import {countGameScore} from './stats-count';
import {assert} from 'chai';

const LackOfAnswers = [
  {
    correctAnswer: true,
    time: 15
  },
  {
    correctAnswer: true,
    time: 15
  }
];

const OrdinaryAnswers = [
  {
    correctAnswer: true,
    time: 15
  },
  {
    correctAnswer: true,
    time: 15
  },
  {
    correctAnswer: true,
    time: 15
  },
  {
    correctAnswer: true,
    time: 15
  },
  {
    correctAnswer: true,
    time: 15
  },
  {
    correctAnswer: true,
    time: 15
  },
  {
    correctAnswer: true,
    time: 15
  },
  {
    correctAnswer: true,
    time: 15
  },
  {
    correctAnswer: true,
    time: 15
  },
  {
    correctAnswer: true,
    time: 15
  }
];

const AllFastAnswers = [
  {
    correctAnswer: true,
    time: 9
  },
  {
    correctAnswer: true,
    time: 9
  },
  {
    correctAnswer: true,
    time: 9
  },
  {
    correctAnswer: true,
    time: 9
  },
  {
    correctAnswer: true,
    time: 9
  },
  {
    correctAnswer: true,
    time: 9
  },
  {
    correctAnswer: true,
    time: 9
  },
  {
    correctAnswer: true,
    time: 9
  },
  {
    correctAnswer: true,
    time: 9
  },
  {
    correctAnswer: true,
    time: 9
  }
];

const SlowAnswers = [
  {
    correctAnswer: true,
    time: 35
  },
  {
    correctAnswer: true,
    time: 35
  },
  {
    correctAnswer: true,
    time: 35
  },
  {
    correctAnswer: true,
    time: 35
  },
  {
    correctAnswer: true,
    time: 35
  },
  {
    correctAnswer: true,
    time: 35
  },
  {
    correctAnswer: true,
    time: 35
  },
  {
    correctAnswer: true,
    time: 35
  },
  {
    correctAnswer: true,
    time: 35
  },
  {
    correctAnswer: true,
    time: 35
  }
];

const DifferentAnswers = [
  {
    correctAnswer: true,
    time: 9
  },
  {
    correctAnswer: true,
    time: 9
  },
  {
    correctAnswer: true,
    time: 9
  },
  {
    correctAnswer: true,
    time: 35
  },
  {
    correctAnswer: true,
    time: 35
  },
  {
    correctAnswer: true,
    time: 35
  },
  {
    correctAnswer: true,
    time: 15
  },
  {
    correctAnswer: true,
    time: 15
  },
  {
    correctAnswer: true,
    time: 15
  },
  {
    correctAnswer: true,
    time: 15
  }
];

describe(`Game final score calculating`, () => {

  it(`Game fails if there is no full number of answers`, () => {
    assert.equal(countGameScore(LackOfAnswers, 3), -1);
  });

  it(`All answers are right, all lives remained`, () => {
    assert.equal(countGameScore(OrdinaryAnswers, 3), 1150);
  });

  it(`All answers are right and fast, all lives remained`, () => {
    assert.equal(countGameScore(AllFastAnswers, 3), 1650);
  });

  it(`All answers are right, but slow, 2 lives remained`, () => {
    assert.equal(countGameScore(SlowAnswers, 2), 600);
  });

  it(`All answers are right, 3 fast, 3 slow, 4 ordinary, 2 lives remained`, () => {
    assert.equal(countGameScore(DifferentAnswers, 2), 1100);
  });

});
