const localStorageSchedule = 'workout-schedule';
const localStorageHistory = 'workout-history';

export function getSchedule() {
  return JSON.parse(localStorage.getItem(localStorageSchedule));
}

export function getWorkoutHistory() {
  return JSON.parse(localStorage.getItem(localStorageHistory) || '[]');
}

export function setSchedule(schedule) {
  localStorage.setItem(localStorageSchedule, JSON.stringify(schedule));
}

export function setWorkoutHistory(workoutHistory) {
  // const workoutHistory = getWorkoutHistory();
  // workoutHistory.unshift(workout);
  localStorage.setItem(localStorageHistory, JSON.stringify(workoutHistory));
}

// export function removeCity(cityId) {
//   const cities = getCities();
//   const filteredCities = cities.filter(x => x.id !== cityId);
//   localStorage.setItem(localStorageWorkout, JSON.stringify(filteredCities));
// }