import { state } from './state.js';
import * as timer from './timer.js';
import * as element from './elements.js';
import * as sounds from './sounds.js';

export function toggleRunning() {
  state.isRunning = element.htmlElement.classList.toggle('running');
  timer.countDown();
  sounds.buttonPressAudio.play();
}
export function reset() {
  const isRunning = state.isRunning;
  if (isRunning) {
    element.htmlElement.classList.remove('running');
    state.isRunning = false;
  }
  timer.updateDisplay();
}
export function set() {
  element.minutes.setAttribute('contenteditable', true);
  element.minutes.focus();
}

export function toggleMusic() {
  state.isMute = element.htmlElement.classList.toggle('music-on');
  if (state.isMute) {
    sounds.bgAudio.play();
    return;
  } 

  sounds.bgAudio.pause()
}
