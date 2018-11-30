
const gameQuestionTemplateWithAnswer = (src, question) => `
<div class="game__option">
        <img src="${src}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="${question}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="${question}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`;

const gameQuestionTemplate = (src, option) => `
<div class="game__option">
  <img src="${src}" alt="${option}" width="304" height="455">
</div>`;

export {gameQuestionTemplateWithAnswer, gameQuestionTemplate};
