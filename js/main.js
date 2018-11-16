'use strict';

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

const mainElement = document.querySelector(`#main`);

const addScreenSwitchers = () => {
  const arrowsNode = document.createElement(`div`);
  const arrowsTemplate =
  `<style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>`;

  arrowsNode.innerHTML = arrowsTemplate;
  arrowsNode.classList.add(`arrows__wrap`);

  document.body.appendChild(arrowsNode);
};

const selectSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

const screens = Array.from(document.querySelectorAll(`template`)).
map((it) => it.content);

let current = 0;
const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
};

const screenSwitchersHandler = () => {
  const arrowSwitchers = document.querySelectorAll(`.arrows__btn`);
  const backButton = arrowSwitchers[0];
  const forwardButton = arrowSwitchers[1];

  backButton.addEventListener(`click`, () => {
    select(current - 1);
  });

  forwardButton.addEventListener(`click`, () => {
    select(current + 1);
  });
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});


select(0);
addScreenSwitchers();
screenSwitchersHandler();
