<script lang="ts">
	import SearchAnimation from '$lib/SearchAnimation.svelte';
  import { onMount } from "svelte"
  import { fade } from "svelte/transition"

	import Ticker from '$lib/Ticker.svelte';
	import HighButton from '$lib/HighButton.svelte';
  
  let showTagline = $state(false)
    
  onMount(() => {
    console.log("on mount")
    setTimeout(() => {
      console.log("calllback")
      showTagline = true
    }, 2000)
  })
</script>

<div class="mt-32 lg:mt-0 max-w-screen-xl mx-auto px-4 lg:px-0">
  <div class="min-h-[75vh] grid md:grid-cols-2 gap-4 items-center">
    <h1 class="h1xlnormal mb-20 sm:mb-0">
      <span class="h1xl">
        Stop waiting for an algorithm to tell you who to meet.  </span>

        {#if showTagline}
          <span class="inline-block" in:fade>
            Find them yourself.
          </span>
        {/if}
    </h1>

    <div class="mb-64 sm:mb-0">
      <SearchAnimation />
    </div>
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
    <div class="relative h-[70dvh] md:h-auto sm:-translate-x-32">
      <div class="w-full absolute sm:left-1/2 top-1/2 sm:-translate-x-32 lg:-translate-x-1/2 -translate-y-1/2 rotate-[7deg] scale-[0.8] lg:scale-[0.5]">
        <img class="w-full hidden sm:block" src="/SMOLPROFILE.png" alt="Anna's Profile on Refs">
        <img class="w-full sm:hidden aspect-[1/1.7] overflow-hidden object-cover object-top -translate-x-4 sm:-translate-x-0" src="/SMOLPROFILE.png" alt="Anna's Profile on Refs">
      </div>
    </div>

    <div class="flex mb-32 sm:mb-0 flex-col gap-12">
      <h1 class="h1xl text-accent leading-[50px]">
        Refs is a phonebook for the internet. 
      </h1>
      <h2 class="h2normal leading-snug">
        Create a grid full of links, <span class="font-bold">photos, places, interests.</span><br class="mb-2">

        <span class="hidden sm:inline-block">
          Then <span class="font-bold">search for anyone</span> by the refs they add!
        </span>
        </h2>

        <div class="my-6 select-none sm:hidden">
          <div class="track w-screen -translate-x-[66vw] lg:-translate-x-[2vw] flex gap-[8vw] lg:gap-[4vw]">
            <div class="w-[72vw] lg:w-[32vw] shrink-0">
              <div class="aspect-square w-full overflow-hidden rounded-lg">
                <img class="aspect-square w-full object-cover " src="/Carousel-1.png" alt="">
              </div>
              <div class="flex flex-col gap-2 my-4">
                <h1 class="font-semibold text-lg">Afrofuturism</h1>
                <p class="text-muted-light">pathways to unknown worlds etc etc</p>
              </div>
            </div>
            
            <div class="w-[72vw] lg:w-[32vw] shrink-0">
              <div class="aspect-square w-full overflow-hidden rounded-lg">
                <img class="aspect-square w-full object-cover " src="/Carousel-0.jpg" alt="">
              </div>
              <div class="flex flex-col gap-2 my-4">
                <h1 class="font-semibold text-lg">Tennis</h1>
                <p class="text-muted-light">Need an early bird who will trade off sign up at the Fort Greene courts</p>
              </div>
            </div>
            
            <div class="w-[72vw] lg:w-[32vw] shrink-0">
              <div class="aspect-square w-full overflow-hidden rounded-lg">
                <img class="aspect-square w-full object-cover " src="/Carousel-2.png" alt="">
              </div>
              <div class="flex flex-col gap-2 my-4">
                <h1 class="font-semibold text-lg">Poetic Computation</h1>
                <p class="text-muted-light">A website can be a poem,  a poem can be a website</p>
              </div>
            </div>
          </div>
        
        </div>

        <h2 class="sm:hidden h2normal leading-snug">
        Then <span class="font-bold">search for anyone</span> by the refs they add!
      </h2>
      <HighButton label="Download" link="#download"></HighButton>
    </div>
  </div>
</div>

