import { exercises } from '../constants/exersices';
import { workoutHistory } from '../store/ConfigurationStore';

let latestWorkouts;

function setLatestWorkout(workouts) {
  latestWorkouts = exercises.map((exercise) => {
    
    // find latest workout for exercise
    const latestWorkout = workouts.find(x => x.exercises.some(y => y.name === exercise.name));
    if (!latestWorkout) {
      if (exercise.weightType === 'barbell') {
        return {
          ...exercise,
          weight: 30,
          reps: 8,
          rounds: 4,
        };
      } else if (exercise.weightType === 'freeWeights') {
        return {
          ...exercise,
          weight: 15,
          reps: 15,
          rounds: 4,
        };
      } else if (exercise.weightType === 'bodyWeight') {
        return {
          ...exercise,
          reps: 20,
          rounds: 4,
        };
      }
    }
    const latestExercise = latestWorkout.exercises.find(x => x.name === exercise.name);
    return {...latestExercise, 
      reps: 8,
      rounds: 4
    };
  });
}
workoutHistory.subscribe(workouts => {
  
  if (workouts && workouts.length > 0) {
    setLatestWorkout(workouts);
  }
});


function getNextExerciesIndex(orderLevel, remainingExercises) {
  let exerciseIndex = remainingExercises.findIndex(x => x.order === orderLevel);
  if (exerciseIndex === -1) {
    exerciseIndex = remainingExercises.findIndex(x => x.order === orderLevel + 1);
  }
  return exerciseIndex;
}

export function createWeekSchedule(exercisesDays) {
  let schedule = [];
  if (!latestWorkouts) return schedule;
  let remainingExercises = [...latestWorkouts];

  for (let i = schedule.length; i < exercisesDays; i++) {
    const exercises = [];
    for (let y = 1; y <= 4; y++) {
      const exerciseIndex = getNextExerciesIndex(y, remainingExercises, exercises);
      
      exercises.push(remainingExercises[exerciseIndex]);
      remainingExercises.splice(exerciseIndex, 1);
    }
    schedule.push({
      index: i,
      day: i + 1,
      exercises,
    });
  }
  
  return schedule;
}