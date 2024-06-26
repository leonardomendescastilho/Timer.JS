import { state } from './state.js';
import { reset } from './actions.js';
import * as element from './elements.js';
import * as sounds from './sounds.js';

export function countDown() {
  clearTimeout(state.countDownId);
  const isRunning = state.isRunning;
  if (!isRunning) {
    return;
  }

  let minutes = Number(element.minutes.textContent);
  let seconds = Number(element.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    reset();
    sounds.kichenTimer.play();
    return;
  }

  updateDisplay(minutes, seconds);

  state.countDownId = setTimeout(() => {
    countDown();
  }, 1000);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  element.minutes.textContent = String(minutes).padStart(2, '0');
  element.seconds.textContent = String(seconds).padStart(2, '0');
}
