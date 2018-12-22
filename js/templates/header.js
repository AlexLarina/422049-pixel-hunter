import HeaderView from "../view/header-view";

class Header {
  constructor(state, click) {
    this.state = state;
    this.header = new HeaderView(state, state.time);
    this.bind(click);
  }

  get element() {
    return this.header.element;
  }

  bind(click) {
    this.header.onRestart = click;
  }
}

export default Header;

