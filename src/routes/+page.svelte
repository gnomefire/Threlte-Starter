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
    background: rgb(124, 147, 196);
  }
</style>
