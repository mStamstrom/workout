<script>
  import createWeekSchedule from '../services/createWeekSchedule';
  let excersiseDays = 0;
  let includeRunning = false;

  function startWeek() {
    const schedule = createWeekSchedule(excersiseDays, includeRunning);
    console.log('schedule', schedule);
  }
</script>

<h1>Week configuration</h1>
<form on:submit|preventDefault={startWeek}>
  <label>How many days? <input bind:value={excersiseDays} /></label>
  <label>Include running? <input type="checkbox" bind:checked={includeRunning} /></label>
  <button>submit</button>
</form>