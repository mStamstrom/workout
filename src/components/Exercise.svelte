<script>
  import {selectedExercise} from '../store/DayStore';
  import state from '../store/StateStore';
  import { dayOverview } from '../constants/states';


  let rounds = [];
  for (let i = 1; i <= $selectedExercise.rounds; i++) {
    rounds = [...rounds, {
      round: i,
      weight: $selectedExercise.weight,
      reps: $selectedExercise.reps,
      rest: $selectedExercise.rest,
      done: false,
    }];
  };

  function goBack() {
    state.set(dayOverview);
  }

  function startExercise() {

  }

</script>

<header>
  <button on:click={goBack}>
    back
  </button>
  <h1>Exercise {$selectedExercise.name}</h1>
</header>
<section>
  <h2>{$selectedExercise.rounds} rounds</h2>
    <div
    class="round"
  >
    <span>reps: {$selectedExercise.reps}</span>
    {#if $selectedExercise.weight}
      <span>, weight: {$selectedExercise.weight}kg</span>
    {/if}
  </div>
  <div class="rest">
    Rest {$selectedExercise.rest}s
  </div>
</section>
<section>
  <button class="start" on:click={startExercise}>
    Start
  </button>
</section>
<style>
  header {
    display: flex;
  }

  h1 {
    margin: auto;
  }

  .start {
    width: 100%;
    margin-top: 12px;
  }
  section {
    width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .round {
    border-top: 1px solid white;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
  }
  .rest {
    width: 100%;
    border-bottom: 1px solid white;
    padding-bottom: 12px;
  }
</style>