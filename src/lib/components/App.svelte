<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
  import { base } from '$app/paths';
  import  store  from "$lib/store";
  import { writable } from 'svelte/store';
  const expanded = writable(false)
</script>


<div class="w-full h-auto p-5 text-2xl text-purple-400 bg-gray-800">
  Physics is fun!
</div>
<Canvas>
  <Scene />
</Canvas>
