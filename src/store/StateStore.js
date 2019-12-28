import { writable } from 'svelte/store';
import { startupConfig, weekSetup } from './ConfigurationStore';

const state = writable('configure');

startupConfig.subscribe((x) => {
  if (x) {
    state.set('weekConfiguration');
  }
});
weekSetup.subscribe((x) => {
  if (x) {
    state.set('weekStart');
  }
});


export default state;