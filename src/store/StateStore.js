import { writable } from 'svelte/store';
import { workoutHistory, weekSchedule } from './ConfigurationStore';
import * as states from '../constants/states';

const state = writable(states.startup);

workoutHistory.subscribe((workouts) => {
  if (workouts && workouts.length > 0) {
    state.set(states.weekConfiguration);
  }
});
weekSchedule.subscribe((x) => {
  if (x) {
    state.set(states.weekOverview);
  }
});


export default state;