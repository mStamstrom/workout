<script>
  import {selectedExercise} from '../store/DayStore';

  let rounds = [];
  for (let i = 1; i <= $selectedExercise.rounds; i++) {
    rounds = [...rounds, {
      round: i,
      weight: $selectedExercise.weight,
      reps: $selectedExercise.reps,
      done: false,
    }];
  };

</script>

<h1>Exercise {$selectedExercise.name}</h1>
<button>
  back
</button>
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
  .done {
    background-color: green;
  }
</style>