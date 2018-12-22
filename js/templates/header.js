// import {getGreetingScreen} from "./greeting";
import HeaderView from "../view/header-view";

/* const getHeader = (state) => {
  const header = new HeaderView(state);
  header.onRestart = () => {
    // getGreetingScreen();
  };
  return header.element;
}; */

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
// export {getHeader};
