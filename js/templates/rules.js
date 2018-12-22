import RulesView from "../view/rules-view";

class RulesScreen {
  constructor(funcBack, funcForward) {
    this.rulesScreen = new RulesView();
    this.bind(funcBack, funcForward);
    this.userName = null;
  }

  get element() {
    this.userName = this.rulesScreen.getName();
    return this.rulesScreen.element;
  }

  bind(funcBack, funcForward) {
    this.rulesScreen.onGreeting = funcBack;
    this.rulesScreen.onGameStart = (userName) => funcForward(userName);
  }
}

export default RulesScreen;
