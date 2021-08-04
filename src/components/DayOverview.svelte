<script>
  import { selectedDay, selectedExercise } from '../store/DayStore';
  import state from '../store/StateStore';
  import * as states from '../constants/states';

  function setSelectedExercise(exercise) {
    state.set(states.exercise);
    selectedExercise.set(exercise);
  }
  
  function goBack() {
    state.set(states.weekOverview);
  }
</script>

<header>
  <button on:click={goBack}>
    back
  </button>
  <h1>Day {$selectedDay.day} overview</h1>
</header>
<section>
  {#each $selectedDay.exercises as exercise}
    <button class="exercise" on:click={setSelectedExercise(exercise)}>
      {exercise.name}
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

  .exercise {
    margin-top: 12px;
    width: 100%;
    height: 40px;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 400px;
  }
</style>