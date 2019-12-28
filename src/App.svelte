<script>
	import StartupQuestions from './components/StartupQuestions.svelte';
	import WeekConfiguration from './components/WeekConfiguration.svelte';
	import state from './store/StateStore';

	// let state = '';
	// stateStore.subscribe(x => state = x);
	
</script>

<main>
	{#if $state === 'configure'}
		<StartupQuestions />
	{:else if $state === 'weekConfiguration'}
		<WeekConfiguration />
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>