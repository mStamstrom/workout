<script>
  import { createWeekSchedule } from '../services/createWeekSchedule';
  import { weekSchedule } from '../store/ConfigurationStore';

  let excersiseDays = 0;

  function startWeek() {
    const schedule = createWeekSchedule(excersiseDays);
    console.log('schedule', schedule);
    weekSchedule.set(schedule);
  }
</script>

<h1>Week configuration</h1>
<form on:submit|preventDefault={startWeek}>
  <label>How many days? <input bind:value={excersiseDays} /></label>
  <button>submit</button>
</form>