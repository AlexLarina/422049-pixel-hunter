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


export const backButtonHandler = (currentScreen, backScreen) => {
  const backButton = currentScreen.querySelector(`.back`);
  backButton.addEventListener(`click`, () => {
    changeScreen(backScreen);
  });
};
