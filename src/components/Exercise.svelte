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
      done: false,
    }];
  };

  function goBack() {
    state.set(dayOverview);
  }

</script>

<header>
  <button on:click={goBack}>
    back
  </button>
  <h1>Exercise {$selectedExercise.name}</h1>
</header>
<section>
  {#each rounds as round}
    <button
      on:click={() => round.done = !round.done}
      class:done="{round.done}"
    >
      <span>rounds: {round.round}</span>
      <span>weight: {round.weight}</span>
      <span>reps: {round.reps}</span>
    </button>
  {/each}
</section>
<style>
  header {
    display: flex;
  }

  h1 {
    margin: auto;
  }

  .done {
    background-color: green;
  }
</style>