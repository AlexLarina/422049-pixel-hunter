import {getGreetingScreen} from "./greeting";
import HeaderView from "../view/header-view";

const getHeader = (state) => {
  const header = new HeaderView(state);
  header.onRestart = () => {
    getGreetingScreen();
  };
  return header.element;
};

export {getHeader};
