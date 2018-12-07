  const INITIAL_STATE = {
  time: 0,
  lives: 1,
  level: 0,
  answers: []
};

const srcData = {
  paintings: [
    // People
    `https://k42.kn3.net/CF42609C8.jpg`,

    // Animals
    `https://k42.kn3.net/D2F0370D6.jpg`,

    // Nature
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    // People
    `http://i.imgur.com/1KegWPz.jpg`,

    // Animals
    `https://i.imgur.com/DiHM5Zb.jpg`,

    // Nature
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

const gameDataArray = [
        {
          "type": "two-of-two",
          "question": "Угадайте для каждого изображения фото или рисунок?",
          "answers": [
            {
              "image": {
                "url": "http://placehold.it/468x458",
                "width": 468,
                "height": 458
              },
              "type": "photo"
            },
            {
              "image": {
                "url": "http://placehold.it/468x458",
                "width": 468,
                "height": 458
              },
              "type": "painting"
            }
          ]
        },
        {
          "type": "tinder-like",
          "question": "Угадай, фото или рисунок?",
          "answers": [
            {
              "image": {
                "url": "http://placehold.it/705x455",
                "width": 705,
                "height": 455
              },
              "type": "photo"
            }
          ]
        },
        {
          "type": "one-of-three",
          "question": "Найдите рисунок среди изображений",
          "answers": [
            {
              "image": {
                "url": "http://placehold.it/304x455",
                "width": 304,
                "height": 455
              },
              "type": "photo"
            },
            {
              "image": {
                "url": "http://placehold.it/304x455",
                "width": 304,
                "height": 455
              },
              "type": "painting"
            },
            {
              "image": {
                "url": "http://placehold.it/304x455",
                "width": 304,
                "height": 455
              },
              "type": "photo"
            }
          ]
        },
        {
          "type": "one-of-three",
          "question": "Найдите фото среди изображений",
          "answers": [
            {
              "image": {
                "url": "http://placehold.it/304x455",
                "width": 304,
                "height": 455
              },
              "type": "painting"
            },
            {
              "image": {
                "url": "http://placehold.it/304x455",
                "width": 304,
                "height": 455
              },
              "type": "painting"
            },
            {
              "image": {
                "url": "http://placehold.it/304x455",
                "width": 304,
                "height": 455
              },
              "type": "photo"
            }
          ]
        }
];

export {initialState, srcData, gameDataArray};
