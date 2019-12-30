<script>
  import { weekSchedule } from '../store/ConfigurationStore';
</script>

<h1>Week overview</h1>
{#each $weekSchedule as day}
  <section>
    <span>Day {day.day}</span>
    {#each day.exercises as exercise}
      <span>{exercise.name}, </span>
    {/each}
  </section>
{/each}