<script>
  import { Toggle } from 'flowbite-svelte';
  import { goto } from "$app/navigation"
  import { page } from "$app/state"
  import PocketBase from 'pocketbase'
  import { fade } from "svelte/transition"

  import { Input, Label, Button } from 'flowbite-svelte';
	import '../app.css';
  const pocketbase = new PocketBase("https://refs.enabler.space")
	let { children } = $props();

  let showPopup = $state(false)
  let email = $state("")
  let checked = $state(false)
  let success = $state(false)
  let os = "android"
  let cell = $state("")
    let disabled = $state(false)

  const onSubmit = async (e) => {
      e.preventDefault()
      disabled = true

      try {
        console.log(os, email, cell)
        const record = await pocketbase.collection("signups").create({ email, os, cell })
        if (record) {
          success = true
        }
      } catch (error) {
        console.error(error)
      } finally {
        disabled = false
      }
    }

    $effect(() => {
      os = checked ? "ios" : "android"
    })


  $effect(() => {
    showPopup = page.url.hash?.includes("download") 
  })

  import Navigation from "$lib/Navigation.svelte"
</script>

<svelte:head>
  <title>
    Refs | the phonebook for the internet
  </title>
</svelte:head>

<Navigation />

<div class="layout overflow-y-scroll w-screen inter-400 overflow-x-hidden">
	{@render children()}
</div>

<!-- Sign up form -->
{#if showPopup && !success}
<div transition:fade class="fixed inset-0 z-20 flex flex-col justify-center items-center ">
  <div onclick={(e) => goto(page.url.pathname)} class="absolute inset-0 z-10 bg-black/30"></div>
  <form onsubmit={onSubmit} action="/" class="signup-form flex flex-col gap-4 w-screen p-8 sm:w-auto sm:min-w-[400px] bg-surface rounded-sm z-20 relative">
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
  
</div>
{/if}
{#if showPopup && success}
<div transition:fade class="fixed inset-0 z-20 flex flex-col justify-center items-center ">
  <div onclick={(e) => goto(page.url.pathname)} class="absolute inset-0 z-10 bg-black/30"></div>
  <div class="flex flex-col gap-4 w-screen p-8 sm:w-auto sm:min-w-[400px] bg-surface rounded-sm z-20 relative">
    <h1 class="mb-2 rounded-sm">Thanks for signing up!<br><br> We'll send you an invitation to our beta soon</h1>
  </div>
</div>
{/if}

<style>
  .signup-form {
    display: flex;
    flex-flow: column nowrap;
    width: 400px;
  }

  .l {
    font-size: 2rem;
  }

  .layout {
		background-color: var(--surface);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 0.5rem;
	}
</style>


