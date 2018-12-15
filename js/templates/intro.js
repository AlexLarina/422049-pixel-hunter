import {changeScreen} from '../game/util';
import {getGreetingScreen} from './greeting';
import IntroView from '../view/intro-view';

const getIntroScreen = () => {
  const introScreen = new IntroView();

  introScreen.onGreeting = () => {
    getGreetingScreen();
  };
  changeScreen(introScreen.element);
};

export {getIntroScreen};
