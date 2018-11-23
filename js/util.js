export const getElementFromTemplate = (template) => {
  const wrapper = document.createElement(`section`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

const mainElement = document.querySelector(`#main`);

export const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

export const resetAnswers = (answers) => {
  answers.forEach((it) => {
    it.removeAttribute(`checked`);
    /*if (it.checked) {
      it.removeAttribute(`checked`);
    }*/
    // console.log(it.checked);
  });
};
