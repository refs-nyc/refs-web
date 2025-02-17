<script lang="ts">
	import SearchAnimation from '$lib/SearchAnimation.svelte';
  import { onMount } from "svelte"
  import { fade } from "svelte/transition"

	import Ticker from '$lib/Ticker.svelte';
  
  let showTagline = $state(false)
    


    onMount(() => {
      console.log("on mount")
      setTimeout(() => {
        console.log("calllback")
        showTagline = true
      }, 2000)
    })
</script>

<div class="max-w-screen-xl mx-auto px-4 lg:px-0">
  <div class="min-h-[91vh] grid md:grid-cols-2 gap-4 items-center">
    <h1 class="h1xlnormal">
      <span class="h1xl">
        Stop waiting for an algorithm to tell you who to meet.  </span>

        {#if showTagline}
          <span class="inline-block" in:fade>
            Find them yourself.
          </span>
        {/if}
    </h1>

    <SearchAnimation />
  </div>
</div>

<Ticker items={[
  { title: "Club Chess" },
  { title: "Wes Anderson Fans" },
  { title: "Conferencegoers" },
  { title: "Freud Brunch" },
  { title: "Virginia Woolf Book Club" },
  { title: "Tennis Partners" },
]}>
  <button>Click Me</button>
  <span style="margin: 0 1rem;">Some scrolling text...</span>
  <a href="https://example.com" target="_blank">Visit Example</a>
</Ticker>

<div class="max-w-screen-xl mx-auto px-4 lg:px-0">
  <div class="min-h-[90vh] grid md:grid-cols-2 gap-4 items-center">
    <div class="relative">
      <div class="w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[7deg] scale-[0.6]">

        <img class="w-full " src="/profile.svg" alt="Anna's Profile on Refs">
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h1 class="h1xl">
        Refs is a phonebook for the internet. 
      </h1>
      <h2 class="h2">
        Create a grid full of links, photos, places, interests.<wbr>
        Then search for anyone by the refs they add!
      </h2>
    </div>
  </div>
</div>
