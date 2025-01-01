<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
  <title>
    Refs | the phonebook for the internet
  </title>
</svelte:head>

<div class="layout inter-400">
  <a href="/" class="flex flex-col items-center justify-center text-xl mb-6">
    <img class="w-16" src="/icon.png" alt="Refs" />
    <h1 class="inter-700 l">Refs</h1>
  </a>
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
