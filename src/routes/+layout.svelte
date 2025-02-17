<script>
	import '../app.css';
	let { children } = $props();

  import Navigation from "$lib/Navigation.svelte"
</script>

<svelte:head>
  <title>
    Refs | the phonebook for the internet
  </title>
</svelte:head>

<Navigation />

<div class="layout inter-400">
	{@render children()}
</div>

<style>
	.layout {
		background-color: var(--surface);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
</style>
