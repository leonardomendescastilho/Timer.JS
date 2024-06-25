import { initialState } from './state.js';
import * as events from './events.js';

export function start(minutes, seconds) {
  initialState.minutes = minutes;
  initialState.seconds = seconds;

  events.registerControls()
}

export function reset() {
  initialState.minutes = 0;
  initialState.seconds = 0;
  console.log(initialState);
}
