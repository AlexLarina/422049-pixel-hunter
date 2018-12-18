import GreetingView from "../view/greeting-view";

class GreetingScreen {
  constructor(click) {
    this.greetingScreen = new GreetingView();
    this.bind(click);
  }

  get element() {
    return this.greetingScreen.element;
  }

  bind(click) {
    this.bind.onClick = click;
  }
}

export default GreetingScreen;

