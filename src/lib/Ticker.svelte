<script lang="ts">
  let { items } = $props()
</script>

{#snippet buttons()}
  {#each items as item, i}
      
  <button class="mx-4 brn btn-outline" id={i}>
    {item.title}
  </button>
  {/each}
{/snippet}

<div class="text-center text-accent mx-auto font-semibold text-lg my-12">
  The world needs more
</div>

<div class="relative flex overflow-x-hidden w-screen border border-accent py-4 mb-40">
  <div class="animate-marquee whitespace-nowrap">
    {@render buttons()}
  </div>

  <div class="absolute top-4 animate-marquee2 whitespace-nowrap">
    {@render buttons()}
  </div>
</div>
