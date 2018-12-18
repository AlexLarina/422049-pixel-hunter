import IntroView from '../view/intro-view';

class IntroScreen {
  constructor(click) {
    this.introScreen = new IntroView();
    this.bind(click);
  }

  get element() {
    return this.introScreen.element;
  }

  bind(click) {
    this.introScreen.onGreeting = click;
  }
}

export default IntroScreen;
