<script>
  import { Toggle } from 'flowbite-svelte';
  import { goto } from "$app/navigation"
  import { page } from "$app/state"
  import PocketBase from 'pocketbase'
  import { fade } from "svelte/transition"
  import Icon from "@iconify/svelte";

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
  <div onclick={(e) => goto(page.url.pathname, { noScroll: true })} class="absolute inset-0 z-10 bg-black/30"></div>
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
  <div onclick={(e) => goto(page.url.pathname, { noScroll: true })} class="absolute inset-0 z-10 bg-black/30"></div>
  <div class="flex flex-col gap-4 w-screen p-8 sm:w-auto sm:min-w-[400px] bg-surface rounded-sm z-20 relative">
    <h1 class="mb-2 rounded-sm">Thanks for signing up!<br><br> We'll send you an invitation to our beta soon</h1>
  </div>
</div>
{/if}

<footer class="bg-surface px-4 pb-6 text-3xl text-muted-light flex justify-end gap-3 w-full">
  <a href="/">
    <Icon icon="bi:instagram" />
  </a>
  <a href="#download">
    <svg class="w-12" width="32" height="32" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.5865 30.4778C27.4852 30.4778 30.6457 27.3173 30.6457 23.4186C30.6457 19.5199 27.4852 16.3594 23.5865 16.3594C19.6878 16.3594 16.5273 19.5199 16.5273 23.4186C16.5273 27.3173 19.6878 30.4778 23.5865 30.4778Z" fill="#7A7A7A"/>
      <path d="M23.5865 38.8108C20.5427 38.8108 17.5672 37.9082 15.0364 36.2172C12.5056 34.5261 10.533 32.1226 9.3682 29.3105C8.20339 26.4984 7.89861 23.404 8.49243 20.4187C9.08625 17.4333 10.552 14.6911 12.7043 12.5388C14.8566 10.3865 17.5988 8.92079 20.5841 8.32697C23.5694 7.73315 26.6638 8.03792 29.4759 9.20274C32.2881 10.3676 34.6916 12.3401 36.3827 14.8709C38.0737 17.4018 38.9763 20.3772 38.9763 23.4211C38.9763 27.5027 37.3549 31.4171 34.4687 34.3033C31.5826 37.1894 27.6681 38.8108 23.5865 38.8108ZM23.5865 12.1352C21.3544 12.1352 19.1724 12.7971 17.3164 14.0372C15.4605 15.2773 14.014 17.0399 13.1598 19.1021C12.3056 21.1644 12.0821 23.4336 12.5175 25.6228C12.953 27.812 14.0279 29.823 15.6062 31.4014C17.1846 32.9797 19.1955 34.0546 21.3848 34.49C23.574 34.9255 25.8432 34.702 27.9054 33.8478C29.9676 32.9936 31.7303 31.5471 32.9704 29.6911C34.2105 27.8352 34.8724 25.6532 34.8724 23.4211C34.8724 20.4279 33.6833 17.5573 31.5668 15.4408C29.4503 13.3242 26.5797 12.1352 23.5865 12.1352Z" fill="#7A7A7A"/>
      <path d="M23.5865 46.8385C18.9546 46.8385 14.4267 45.465 10.5755 42.8917C6.72418 40.3183 3.72248 36.6607 1.94993 32.3814C0.177383 28.1021 -0.286396 23.3933 0.617241 18.8504C1.52088 14.3075 3.75135 10.1346 7.02659 6.85935C10.3018 3.58411 14.4747 1.35364 19.0176 0.450005C23.5605 -0.453632 28.2693 0.0101472 32.5487 1.78269C36.828 3.55524 40.4856 6.55695 43.0589 10.4082C45.6322 14.2595 47.0057 18.7874 47.0057 23.4193C47.0057 29.6304 44.5384 35.5872 40.1464 39.9792C35.7544 44.3711 29.7977 46.8385 23.5865 46.8385ZM23.5865 3.34562C19.6163 3.34562 15.7353 4.52292 12.4342 6.72864C9.13308 8.93436 6.5602 12.0694 5.04087 15.7374C3.52154 19.4054 3.12402 23.4415 3.89856 27.3354C4.67311 31.2293 6.58494 34.8061 9.39229 37.6135C12.1996 40.4208 15.7764 42.3326 19.6703 43.1072C23.5642 43.8817 27.6004 43.4842 31.2683 41.9649C34.9363 40.4456 38.0714 37.8727 40.2771 34.5716C42.4828 31.2705 43.6601 27.3895 43.6601 23.4193C43.6601 18.0954 41.5452 12.9896 37.7807 9.22505C34.0162 5.46051 28.9104 3.34562 23.5865 3.34562Z" fill="#7A7A7A"/>
    </svg>      
  </a>
</footer>

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


