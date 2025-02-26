<script lang="ts">
  
  let { label, link, icon, depth = 12, widthClass = "w-40" }: { label: string, link: string, icon?: boolean } = $props()
  const translations = $state([
    0,
    depth * 0.2,
    depth
  ])
  const scales = $state([
    1,
    0.85,
    0.7
  ])
  let clientHeight = $state(0)
  let mouseState = $state(0) // 0 for up, 1 for over, 2 for down
  let transformClass = $derived(translations[mouseState])
  let scaleClass = $derived(scales[mouseState])

</script>


<a
  class="relative {widthClass}"
  onmousedown={() => {
    console.log("onmousedown") 
    mouseState = 2
  }}
  onmouseup={() => {
    console.log("onmouseup") 
    mouseState = 1
  }}
  onmouseenter={() => {
    console.log("onmouseenter") 
    mouseState = 1
  }}
  onmouseleave={() => {
    console.log("onmouseleave") 
    mouseState = 0
  }}
  href={link}
  data-sveltekit-noscroll
  >
  <!-- <div class="border-2 rounded-full border-black p-2 flex items-center gap-4 absolute w-full bg-surface z-10"></div> -->
  <div
    style:transform="translateY({transformClass}px)"
    bind:clientHeight class="flex gap-2 items-center justify-center pt-2 pb-3 px-4 rounded-full border-2 border-black bg-surface relative z-10 transition-transform {widthClass}">
    {#if icon}
      <img class="w-12 h-12" src="/icon.png" alt="Refs" >
    {/if}
    <span class="text-black font-semibold text-lg text-center">
      {label}
    </span>
  </div>
  <div
    style:height="{clientHeight + depth}px"
    style:transform="scaleY({scaleClass})"
    class="border-2 origin-bottom transition-all rounded-full border-black p-1 flex items-center gap-4 absolute top-0 z-0 {widthClass} h-full bg-black"></div> 
</a>