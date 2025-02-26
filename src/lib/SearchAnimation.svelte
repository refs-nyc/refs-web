<script lang="ts">
  import { typewriter } from "$lib/transitions"
  import { onMount } from "svelte"
  import { fade } from "svelte/transition"
  import { flip } from "svelte/animate"

  let placeholder = $state("Search anything or paste a link!")
  let searchTerm = $state(placeholder)
  let index = $state(0)
  let results = $state([])
  let interval: ReturnType<typeof setInterval>

  const terms=  [
    "Tennis partners",
    "Hardware founders",
    "Chess club + Wes Anderson"
  ]
  let people = [
    {
      name: "Noëmie",
      location: "West Village, NYC",
      shared: 12,
      number: 3
    },
    {
      name: "Paul",
      location: "Greenpoint, Brooklyn",
      shared: 8,
      number: 2
    },
    {
      name: "Jackson",
      location: "Carrol Gardens, Brooklyn",
      shared: 8,
      number: 4
    },
    {
      name: "Jed",
      location: "East Village, NYC",
      shared: 8,
      number: 1
    },
    {
      name: "Anik",
      location: "FiDi, NYC",
      shared: 8,
      number: 8
    },
    {
      name: "Ilia",
      location: "West Village, NYC",
      shared: 12,
      number: 7
    },
    {
      name: "Jorge",
      location: "East Village, NYC",
      shared: 12,
      number: 5
    },
    {
      name: "Tom",
      location: "East Village, NYC",
      shared: 6,
      number: 6
    },
  ]
      
  shuffle(people)

  results = [...people].slice(0, 4)

  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  const nextTerm = () => {
    searchTerm = terms[index++ % terms.length]

    // Set the results
    results = []

    setTimeout(() => {
      const resultsLength = 3
      
      shuffle([people])
  
      results = [...people].slice(0, resultsLength)
    }, 200)
  }


  onMount(() => {
    setTimeout(() => {
      interval = setInterval(nextTerm, 5000)
      nextTerm()
    }, 2000)

    return () => clearInterval(interval)
  })
</script>


<div class="rounded-xl w-[320px] md:w-auto min-h-[480px] translate-x-10 md:translate-x-12 -rotate-[7deg] translate-y-12">
  <div class="relative max-w-screen-sm h-16 sm:h-24 overflow-hidden">
    <div class="border-2 rounded-full border-black p-2 flex items-center gap-4 absolute w-full bg-surface z-10">
      <img class="h-8 w-8 sm:w-12 sm:h-12" src="/icon.png" alt="Refs" >
        {#key searchTerm}
          <p class:opacity-50={searchTerm === placeholder} class="sm:text-xl" in:typewriter={{ delay: 200, speed: 20 }} out:typewriter={{ speed: 7 }}>{searchTerm}</p>
        {/key}
    </div>
    <div class="border-2 rounded-full border-black p-1 flex items-center gap-4 absolute w-full h-12 sm:h-16 scale-y-125 origin-top bg-black z-0"></div>
  </div>

  <div class="flex flex-col gap-4 py-4 w-full h-24 sm:h-40">
    {#each results as person, i (person.name)}
      <div animate:flip={{ duration: 100 }} in:fade={{delay: 900 +  i * 100}} out:fade={{ duration: 100 }} class="flex gap-4 w-full items-center">
        <img class="w-16 h-16 basis-16 sm:w-20 sm:h-20 sm:basis-20 shrink-0 aspect-square rounded-xl overflow-hidden object-cover" src="/people/{person.number}.jpg" alt="{person.name}" >
        <div class="flex flex-col w-full">
          <h2 class="text-lg">{person.name}</h2>
          <div class="w-full  flex justify-between">
            <small class="text-sm text-black/50">{person.location}</small>
            <small class="text-sm text-black/50 bg-surface2 rounded-full px-4 py-1 whitespace-nowrap">{person.shared} refs shared</small>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

