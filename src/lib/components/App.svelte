<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
  import { base } from '$app/paths';
  import  store  from "$lib/store";
  import { writable } from 'svelte/store';
  const expanded = writable(false)
</script>

<nav class="w-full h-auto p-5 text-2xl text-gray-400 bg-purple-800 flex">
  <ul class="flex items-center gap-5 ">
    <li>
  <a href="{base}/">Home</a>
  </li>
  <li>
    <button on:click={() => $expanded = !$expanded}>Lessons</button>
  </li>

 

  </ul>

</nav>
<div class="w-full h-auto p-5 text-2xl text-purple-400 bg-gray-800">
  This is an HTML element inside <span class="bg-slate-200 text-purple-950 w-auto font-mono p-1 rounded-sm">src/components/App.svelte</span>
</div>
<Canvas>
  <Scene />
</Canvas>
