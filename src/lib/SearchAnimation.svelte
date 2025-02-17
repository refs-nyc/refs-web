<script lang="ts">
  let placeholder = "Search anything or paste a link!"  
  let searchTerm = ""

  const terms=  [
    "Tennis partners",
    "Hardware founders",
    "Chess club + Wes Anderson"
  ]

  let results = [
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

</script>

<div class="rounded-xl">
  <div class="relative max-w-screen-sm h-20">
    <div class="border-2 rounded-full border-black p-2 flex items-center gap-4 absolute w-full bg-surface z-10">
      <img class="w-12 h-12" src="/icon.png" alt="Refs" >
      <p class="text-black/50 text-xl" id="">{placeholder}</p>
    </div>
    <div class="border-2 rounded-full border-black p-1 flex items-center gap-4 absolute w-full h-16 scale-y-125 origin-top bg-black z-0"></div>
  </div>

  <div class="flex flex-col gap-4 py-4 w-full">
    {#each results as person (person.name)}
      <div class="flex gap-4 w-full items-center">
        <img class="w-20 h-20 basis-20 shrink-0 aspect-square rounded-xl overflow-hidden object-cover" src="/people/{person.number}.jpg" alt="{person.name}" >
        <div class="flex flex-col w-full">
          <h2 class="text-lg">{person.name}</h2>
          <div class="w-full  flex justify-between">
            <small class="text-sm text-black/50">{person.location}</small>
            <small class="text-sm text-black/50 bg-surface2 rounded-full px-4 py-1">{person.shared} refs shared</small>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

