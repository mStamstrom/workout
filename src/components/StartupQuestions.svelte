<script>
  import { workoutHistory } from '../store/ConfigurationStore';
  import * as exercises from '../constants/exersices';

  let backSquats = 0;
  let benchpress = 0;
  let pushPress = 0;
  let deadlift = 0;
  let bentRows = 0;
  let runningSpeed = 0;

  function saveStartupQuestions() {
    workoutHistory.update({
        week: 'start up week',
        day: 'startup',
        date: Date.now(),
        exercises: [
          {...exercises.backSquats, weight: backSquats},
          {...exercises.benchpress, weight: benchpress},
          {...exercises.bentRows, weight: bentRows},
          {...exercises.pushPress, weight: pushPress},
          {...exercises.deadlift, weight: deadlift},
          {...exercises.running, speed: runningSpeed},
        ],
      });
  }
</script>

<main>
  <form on:submit|preventDefault={saveStartupQuestions}>
    <h2>These questions will get your first workload right</h2>
    <label> How much can you lift for 10 backSquats?
      <input bind:value={backSquats} />
    </label>
    <label> How much can you lift on 10 benchpress?
      <input bind:value={benchpress} />
    </label>
    <label> How much can you lift on 10 overhead press?
      <input bind:value={pushPress} />
    </label>
    <label> How much can you lift on 10 deadlift?
      <input bind:value={deadlift} />
    </label>
    <label> How much can you lift on 10 bent rows?
      <input bind:value={bentRows} />
    </label>
    <label> How fast can you run 5 km?
      <input bind:value={runningSpeed} />
    </label>
    <button>Submit</button>
  </form>
</main>

<style>
</style>