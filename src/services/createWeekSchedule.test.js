import createWeekSchedule from './createWeekSchedule';

describe('createWeekSchedule', () => {
  it('testing jest', () => {
    expect(createWeekSchedule(3, true).length).toBe(3);
  });
});