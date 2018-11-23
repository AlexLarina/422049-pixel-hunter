import {changeScreen, getElementFromTemplate} from './util.js';
import {greetingScreen} from "./greeting";

const introTemplate = `
<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`;

export const introScreen = getElementFromTemplate(introTemplate);

const asteriskButton = introScreen.querySelector(`.intro__asterisk`);

asteriskButton.addEventListener(`click`, () => {
  changeScreen(greetingScreen);
});


