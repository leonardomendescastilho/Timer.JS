import { controls } from './elements.js';
import * as actions from './actions.js';
import * as element from './elements.js';
import * as timer from './timer.js';
import { state } from './state.js';

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] != 'function') {
      return;
    }
    actions[action]();
  });
}
export function setMinutes() {
  const isRegExNumber = /^\d$/;
  element.minutes.addEventListener('focus', () => {
    element.minutes.textContent = '';
  });
  element.minutes.addEventListener('keydown', (event) => {
    if (!isRegExNumber.test(event.key)) {
      event.preventDefault();
    }
  });

  element.minutes.addEventListener('blur', (event) => {
    const newMinutes = Number(event.target.textContent);

    let time = newMinutes > 60 ? 60 : newMinutes;

    state.minutes = time;
    state.seconds = 0;

    timer.updateDisplay();
    element.minutes.removeAttribute('contenteditable');
  });
}
