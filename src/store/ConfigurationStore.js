/**
 * Take care of start up configuration
 * 
 * Take care of choosen exercises for week
 */

 import { writable } from 'svelte/store';

 // change to custom stores
 export const startupConfig = writable();

 export const weekSchedule = writable();