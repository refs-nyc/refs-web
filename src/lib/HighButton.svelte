<script lang="ts">
  
  let { label, link, icon, depth = 12, widthClass = "w-40" }: { label: string, link: string, icon?: boolean } = $props()
  let clientHeight = $state(0)
  let mouseState = $state(0) // 0 for up, 1 for over, 2 for down

  const translations = [
    0,
    depth * 0.2,
    depth
  ]
  const scales = [
    1,
    0.85,
    0.7
  ]
</script>


<a
  class="relative {widthClass}"
  onmousedown={() => mouseState = 2}
  onmouseup={() => mouseState = 1}
  onmouseenter={() => mouseState = 1}
  onmouseleave={() => mouseState = 0}
  href={link}
  data-sveltekit-noscroll
  >
  <!-- <div class="border-2 rounded-full border-black p-2 flex items-center gap-4 absolute w-full bg-surface z-10"></div> -->
  <div
    style:transform="translateY({translations[mouseState]}px)"
    bind:clientHeight class="flex gap-2 items-center justify-center pt-2 pb-3 px-4 rounded-full border-2 border-black bg-surface relative z-10 transition-transform">
    {#if icon}
      <img class="w-12 h-12" src="/icon.png" alt="Refs" >
    {/if}
    <span class="text-black font-semibold text-lg text-center">
      {label}
    </span>
  </div>
  <div
    style:height="{clientHeight + depth}px"
    style:transform="scaleY({scales[mouseState]})"
    class="border-2 origin-bottom transition-all rounded-full border-black p-1 flex items-center gap-4 absolute top-0 z-0 w-full h-full bg-black"></div> 
</a>