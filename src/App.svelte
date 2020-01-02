<script>
	import StartupQuestions from './components/StartupQuestions.svelte';
	import WeekConfiguration from './components/WeekConfiguration.svelte';
	import WeekOverview from './components/WeekOverview.svelte';
	import DayOverview from './components/DayOverview.svelte';
	import Exercise from './components/Exercise.svelte';
	import state from './store/StateStore';
	import * as states from './constants/states';

	/**
	 * TODO: 
	 * Add routing, https://medium.com/swlh/simple-svelte-3-app-with-router-44fe83c833b6
	 * 
	 */
</script>

<main>
	{#if $state === states.startup}
		<StartupQuestions />
	{:else if $state === states.weekConfiguration}
		<WeekConfiguration />
	{:else if $state === states.weekOverview}
		<WeekOverview />
	{:else if $state === states.dayOverview}
		<DayOverview />
	{:else if $state === states.exercise}
		<Exercise />
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