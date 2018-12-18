import IntroScreen from "./templates/intro";
import GreetingScreen from "./templates/greeting";
import {changeScreen} from "./game/util";

class Application {
  showIntro() {
    const introScreen = new IntroScreen(this.showGreeting.bind(this));
    changeScreen(introScreen.element);
  }

  showGreeting() {
    const greetingScreen = new GreetingScreen();
    changeScreen(greetingScreen.element);
  }
}

export default Application;
