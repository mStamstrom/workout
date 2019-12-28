<script>
  import { startupConfig } from '../store/ConfigurationStore';

  let squats = 0;
  let benchpress = 0;
  let overheadPress = 0;
  let deadlift = 0;
  let bentRows = 0;
  let runningSpeed = 0;

  function saveStartupQuestions() {
    startupConfig.set({
      squats,
      benchpress,
      overheadPress,
      deadlift,
      bentRows,
      runningSpeed
    });
  }
</script>

<main>
  <form on:submit|preventDefault={saveStartupQuestions}>
    <h2>These questions will get your first workload right</h2>
    <label> How much can you lift for 10 squats?
      <input bind:value={squats} />
    </label>
    <label> How much can you lift on 10 benchpress?
      <input bind:value={benchpress} />
    </label>
    <label> How much can you lift on 10 overhead press?
      <input bind:value={overheadPress} />
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