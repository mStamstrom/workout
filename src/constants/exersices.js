export const legs = 'legs';
export const lowerback = 'lowerback';
export const stomach = 'stomach';
export const chest = 'chest';
export const shoulders = 'shoulders';
export const upperback = 'upperback';
export const arms = 'arms';

export const muscleGroups = [legs, lowerback, stomach, chest, shoulders, upperback, arms];

export const backSquats = {
  name: 'backSquats',
  mainMuscleGroup: legs,
  type: 'strength',
  weightType: 'barbell',
  rest: 120,
  order: 1,
};
export const deadlift = {
  name: 'deadlift',
  mainMuscleGroup: lowerback,
  type: 'strength',
  weightType: 'barbell',
  rest: 120,
  order: 1
};
export const benchpress = {
  name: 'benchpress',
  mainMuscleGroup: chest,
  type: 'strength',
  weightType: 'barbell',
  rest: 120,
  order: 2
};
export const bentRows = {
  name: 'bentRows',
  mainMuscleGroup: upperback,
  type: 'strength',
  weightType: 'barbell',
  rest: 120,
  order: 3
};
export const pullups = {
  name: 'pullups',
  mainMuscleGroup: upperback,
  type: 'strength',
  weightType: 'bodyWeight',
  rest: 90,
  order: 3
};
export const sumoLift = {
  name: 'sumoLift',
  mainMuscleGroup: lowerback,
  type: 'strength',
  weightType: 'barbell',
  rest: 120,
  order: 3
};
export const pushPress = {
  name: 'pushPress',
  mainMuscleGroup: shoulders,
  type: 'strength',
  weightType: 'barbell',
  rest: 120,
  order: 2
};
export const frontSquats = {
  name: 'frontSquats',
  mainMuscleGroup: legs,
  type: 'strength',
  weightType: 'barbell',
  rest: 120,
  order: 2
};
export const plateTwists = {
  name: 'plateTwists',
  mainMuscleGroup: stomach,
  type: 'strength',
  weightType: 'freeWeights',
  rest: 60,
  order: 4
};
export const situps = {
  name: 'situps',
  mainMuscleGroup: stomach,
  type: 'strength',
  weightType: 'bodyWeight',
  rest: 60,
  order: 4
};
export const legRaises = {
  name: 'legRaises',
  mainMuscleGroup: stomach,
  type: 'strength',
  weightType: 'bodyWeight',
  rest: 60,
  order: 4
};
export const plateCocoons = {
  name: 'plateCocoons',
  mainMuscleGroup: stomach,
  type: 'strength',
  weightType: 'freeWeights',
  rest: 60,
  order: 4
};
// export const running = {
//   name: 'running',
//   order: 1,
//   type: 'cardio',
// };

export const exercises = [backSquats, deadlift, benchpress, pullups, bentRows, pushPress, sumoLift, frontSquats, plateTwists, situps, legRaises, plateCocoons];