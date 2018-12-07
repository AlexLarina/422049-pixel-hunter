const getQuestionWithAnswer = (src, number) =>{
  const templateWithAnswer = `
  <div class="game__option">
          <img src="${src}" alt="Option 1" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input class="visually-hidden" name="question${number}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input class="visually-hidden" name="question${number}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>`;

  return templateWithAnswer;
}

const gameQuestionTemplate = (src, option) => `
<div class="game__option">
  <img src="${src}" alt="Option ${option}" width="304" height="455">
</div>`;

export {getQuestionWithAnswer, gameQuestionTemplate};
