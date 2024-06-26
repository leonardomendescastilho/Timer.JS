import { state } from './state.js';
import * as events from './events.js';
import * as timer from './timer.js';

export function start(minutes, seconds) {
  state.minutes = minutes;
  state.seconds = seconds;

  events.registerControls()
  timer.updateDisplay()
  events.setMinutes()
}

export function reset() {
  state.minutes = 0;
  state.seconds = 0;
  timer.updateDisplay()
}
