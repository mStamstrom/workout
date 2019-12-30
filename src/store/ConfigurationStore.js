/**
 * Take care of start up configuration
 * 
 * Take care of choosen exercises for week
 */

 import { writable } from 'svelte/store';

 // change to custom stores
 // change to contain more than last workout
 export const workoutHistory = writable([]);

 export const weekSchedule = writable();