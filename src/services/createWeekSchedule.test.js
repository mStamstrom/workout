import { createWeekSchedule } from './createWeekSchedule';
import * as confStore from '../store/ConfigurationStore';
jest.mock('../store/ConfigurationStore', () => ({
  workoutHistory: ({subscribe: (callback) => callback([
      {"week":"start up week",
      "day":"startup",
      "date":1577873138296,
      "exercises": [
        {"name":"backSquats","mainMuscleGroup":"legs","type":"strength","weightType":"barbell","order":1,"weight":"50"},
        {"name":"benchpress","mainMuscleGroup":"chest","type":"strength","weightType":"barbell","order":2,"weight":"50"},
        {"name":"bentRows","mainMuscleGroup":"upperback","type":"strength","weightType":"barbell","order":3,"weight":"30"},
        {"name":"pushPress","mainMuscleGroup":"shoulders","type":"strength","weightType":"barbell","order":2,"weight":"30"},
        {"name":"deadlift","mainMuscleGroup":"lowerback","type":"strength","weightType":"barbell","order":1,"weight":"50"},
        {"name":"running","order":1,"type":"cardio","speed":"20"}
      ]}
    ])
  })
}));

describe('createWeekSchedule', () => {
  it('when creating schedule for 3 days should return exercise days', () => {
    expect(createWeekSchedule(3, false).length).toBe(3);
  });
  it('when creating schedule with cardio should include a cardio day', () => {
    const schedule = createWeekSchedule(3, true);
    expect(schedule.some(days => days.exercises.some(x => x.type === 'cardio'))).toBeTruthy();
  });
  it('when creating schedule strength days should include order 1 to 4', () => {
    const exersies = createWeekSchedule(1, false)[0].exercises;
    expect(exersies[0].order).toBe(1);
    expect(exersies[1].order).toBe(2);
    expect(exersies[2].order).toBe(3);
    expect(exersies[3].order).toBe(4);
  });
  it('One day should not contain similar exercies', () => {
    const schedule = createWeekSchedule(3, false);
    const day1 = schedule[0];
    const doesDay1ContainSimilarExercises = day1.exercises.filter(x => x.mainMuscleGroup !== 'stomach').some(x => day1.exercises.some(y => x.mainMuscleGroup === y.mainMuscleGroup && x.name !== y.name));
    
    expect(doesDay1ContainSimilarExercises).toBeFalsy();
    const day2 = schedule[1];
    const doesDay2ContainSimilarExercises = day2.exercises.filter(x => x.mainMuscleGroup !== 'stomach').some(x => day2.exercises.some(y => x.mainMuscleGroup === y.mainMuscleGroup && x.name !== y.name));
    expect(doesDay2ContainSimilarExercises).toBeFalsy();

    const day3 = schedule[2];
    const doesDay3ContainSimilarExercises = day3.exercises.filter(x => x.mainMuscleGroup !== 'stomach').some(x => day3.exercises.some(y => x.mainMuscleGroup === y.mainMuscleGroup && x.name !== y.name));
    expect(doesDay3ContainSimilarExercises).toBeFalsy();

  });
  it('One day should not contain similar exercies when running is included', () => {
    const schedule = createWeekSchedule(3, true);
    
    const day2 = schedule[1];
    const doesDay2ContainSimilarExercises = day2.exercises.filter(x => x.mainMuscleGroup !== 'stomach').some(x => day2.exercises.some(y => x.mainMuscleGroup === y.mainMuscleGroup && x.name !== y.name));
    expect(doesDay2ContainSimilarExercises).toBeFalsy();

    const day3 = schedule[2];
    const doesDay3ContainSimilarExercises = day3.exercises.filter(x => x.mainMuscleGroup !== 'stomach').some(x => day3.exercises.some(y => x.mainMuscleGroup === y.mainMuscleGroup && x.name !== y.name));
    expect(doesDay3ContainSimilarExercises).toBeFalsy();

  });
});