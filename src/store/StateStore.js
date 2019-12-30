import { writable } from 'svelte/store';
import { workoutHistory, weekSchedule } from './ConfigurationStore';

const state = writable('configure');

workoutHistory.subscribe((workouts) => {
  if (workouts && workouts.length > 0) {
    state.set('weekConfiguration');
  }
});
weekSchedule.subscribe((x) => {
  if (x) {
    state.set('weekStart');
  }
});


export default state;