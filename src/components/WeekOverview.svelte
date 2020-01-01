<script>
  import { weekSchedule } from '../store/ConfigurationStore';
  import { selectedDay } from '../store/DayStore';
  import { dayOverview } from '../constants/states';
  import state from '../store/StateStore';

  function selectDay(day) {
    selectedDay.set(day);
    state.set(dayOverview);
  }
</script>

<h1>Week overview</h1>
{#each $weekSchedule as day}
  <section>
    <button on:click={selectDay(day)}>Day {day.day}
      {#each day.exercises as exercise}
        <span>{exercise.name}, </span>
      {/each}
    </button>
  </section>
{/each}