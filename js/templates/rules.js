import RulesView from "../view/rules-view";

class RulesScreen {
  constructor(funcBack, funcForward) {
    this.rulesScreen = new RulesView();
    this.bind(funcBack, funcForward);
  }

  get element() {
    return this.rulesScreen.element;
  }

  bind(funcBack, funcForward) {
    this.bind.onGreeting = funcBack;
    this.bind.onGameStart = funcForward;
  }
}

export default RulesScreen;
