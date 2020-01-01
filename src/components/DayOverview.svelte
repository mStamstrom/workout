<script>
  import { selectedDay, selectedExercise } from '../store/DayStore';
  import state from '../store/StateStore';
  import * as states from '../constants/states';

  function setSelectedExercise(exercise) {
    state.set(states.exercise);
    selectedExercise.set(exercise);
  }
</script>
<h1>day {$selectedDay.day} overview</h1>
<section>
  {#each $selectedDay.exercises as exercise}
    <button on:click={setSelectedExercise(exercise)}>
      {exercise.name}
    </button>
  {/each}
</section>