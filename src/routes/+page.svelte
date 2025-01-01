<script lang="ts">
    import { Toggle } from 'flowbite-svelte';
    import { Input, Label, Button } from 'flowbite-svelte';
    import PocketBase from 'pocketbase'

    const pocketbase = new PocketBase("https://refs.enabler.space")
    
    let checked = $state(false)
    let email = $state("")
    let cell = $state("")
    let disabled = $state(false)
    let success = $state(false)

    let os = "android"

    const onSubmit = async (e) => {
      e.preventDefault()
      disabled = true

      try {
        console.log(os, email, cell)
        const record = await pocketbase.collection("signups").create({ email, os, cell })
        if (record) success = true
      } catch (error) {
        console.error(error)
      } finally {
        disabled = false
      }
      // console.log("on submit")
    }

    $effect(() => {
      os = checked ? "ios" : "android"
    })
</script>

<form onsubmit={onSubmit} action="/" class="signup-form flex flex-col gap-4 w-screen p-8 sm:w-auto sm:min-w-[400px]">
  
  <div class="w-full">
    <Label for="email" class="mb-2">Sign up for early access</Label>
    <Input bind:value={email} type="text" id="email" placeholder="you@me.us" required />
  </div>

  <div class="flex flex-col items-stretch">
    <Label for="cell" class="mb-2">Operating system</Label>
  <div class="flex justify-center items-center">
    <small>Android</small>
    <div class="ml-2">
      <Toggle size="large" bind:checked></Toggle>
    </div>
    <small>iOS</small>
    </div>
  </div>
  <div class="flex flex-col items-start">
    <Label for="cell" class="mb-2">Phone number</Label>
    <Input bind:value={cell} type="tel" id="cell" placeholder="123-45-678" pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"} required />
  </div>

  <Button onclick={onSubmit} {disabled}>Submit</Button>
</form>

{#if success}
<div onclick={() => { success = false }} class="fixed inset-0 flex flex-col justify-center items-center bg-[#efede3]/10 backdrop-blur-sm">
  <div class="bg-white drop-shadow-lg w-[460px] h-[140px] flex flex-col justify-center items-center text-center inter-500 rounded-md">
    <h1 class="mb-2 rounded-sm">Thanks for signing up!<br><br> We'll send you an invitation to our beta soon</h1>
  </div>
</div>
{/if}

<style>
  .signup-form {
    display: flex;
    flex-flow: column nowrap;
  }

  .l {
    font-size: 2rem;
  }
</style>
