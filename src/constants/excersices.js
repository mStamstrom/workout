export const legs = 'legs';
export const lowerback = 'lowerback';
export const stomach = 'stomach';
export const chest = 'chest';
export const shoulders = 'shoulders';
export const upperback = 'upperback';
export const arms = 'arms';

export const muscleGroups = [legs, lowerback, stomach, chest, shoulders, upperback, arms];

export const backSquats = {
  muscleGroups: [legs],
  type: 'strength',
  order: 1,
};
export const deadlift = {
  muscleGroups: [legs, lowerback],
  type: 'strength',
  order: 1
};
export const benchpress = {
  muscleGroups: [chest, arms],
  type: 'strength',
  order: 2
};
export const bentRows = {
  muscleGroups: [upperback, arms],
  type: 'strength',
  order: 3
};
export const pullups = {
  muscleGroups: [upperback, arms],
  type: 'strength',
  order: 3
};
export const sumoLift = {
  muscleGroups: [lowerback, upperback, arms],
  type: 'strength',
  order: 3
};
export const pushPress = {
  muscleGroups: [shoulders, arms],
  type: 'strength',
  order: 2
};
export const frontSquats = {
  muscleGroups: [legs],
  type: 'strength',
  order: 2
};
export const plateTwists = {
  muscleGroups: [stomach],
  type: 'strength',
  order: 4
};
export const situps = {
  muscleGroups: [stomach],
  type: 'strength',
  order: 4
};
export const legRaises = {
  muscleGroups: [stomach],
  type: 'strength',
  order: 4
};
export const plateCocoons = {
  muscleGroups: [stomach],
  type: 'strength',
  order: 4
};
export const running = {
  order: 1,
  type: 'cardio',
};

export const exercies = [backSquats, deadlift, benchpress, pullups, bentRows, pushPress, sumoLift, frontSquats, plateTwists, situps, legRaises, plateCocoons, running];