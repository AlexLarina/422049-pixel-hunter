import {changeScreen, getElementFromTemplate} from '../game/util';
import {getGreetingScreen} from './greeting';

const getIntroScreen = () => {
  const introTemplate = `
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`;

  const introScreen = getElementFromTemplate(introTemplate);

  const asteriskButton = introScreen.querySelector(`.intro__asterisk`);

  asteriskButton.addEventListener(`click`, () => {
    changeScreen(getGreetingScreen());
  });

  return introScreen;
};

export {getIntroScreen};
