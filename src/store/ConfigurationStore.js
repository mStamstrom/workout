/**
 * Take care of start up configuration
 * 
 * Take care of choosen exercises for week
 */

 import { writable } from 'svelte/store';
 import { getWorkoutHistory, setWorkoutHistory } from '../store/localStorage';

  function setupWorkoutHistory() {
    const { update, subscribe} = writable(getWorkoutHistory());
    return {
      update: (workout) => update(workouts => {
        workouts.unshift(workout);
        setWorkoutHistory(workouts);
      }),
      subscribe,
    }
 }
 export const workoutHistory = setupWorkoutHistory();


//  function createWeekSchedule() {
//    const {set, subscribe} = writable();
//  }
 export const weekSchedule = writable();