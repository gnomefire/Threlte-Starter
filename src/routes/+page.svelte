<script lang="ts">
  import App from '$lib/components/App.svelte'
  import { base } from "$app/paths";
	import { writable } from 'svelte/store';
  import store from '$lib/store';
  const expanded = writable(false)

</script>

<div>
  <App />
</div>

<style>
  :global(body) {
    margin: 0;
  }

  div {
    width: 100vw;
    height: 100vh;
    background: rgb(13, 19, 32);
    background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
  }
</style>
