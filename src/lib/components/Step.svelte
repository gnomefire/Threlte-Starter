<script lang="ts">
    import { onMount } from 'svelte';
    import { T } from "@threlte/core";
	import { Vector3 } from 'three';
	import { writable } from 'svelte/store';
	import * as Tone from 'tone'
	import { HTML } from '@threlte/extras';
  import {base } from "$app/paths";
    export let position = 0
    export let stepNumber = 0
    export let rotation = 0
    export let note = 'C4'
    export let currentStep = 0
    export let state = 'stopped'
    const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
    const sampleNames= ['kick1', 'kick2', 'snare1', 'snare2', 'hh1', 'hh2', 'oh1', 'oh2']
    const samples = {"kick1": "kick1.wav",
            "kick2": "kick2.wav",
            "snare1": "snare1.wav",
            "snare2": "snare2.wav",
            "hh1": "hh1.wav",
            "hh2": "hh2.wav",
            "oh1": "oh1.wav",
            "oh2": "oh2.wav",}

   const sampleUrls = {
       'C4': samples.kick1,
       'D4': samples.kick2,
       'E4': samples.snare1,
       'F4': samples.snare2,
       'G4': samples.hh1,
       'A4': samples.hh2,
       'B4': samples.oh1,
       'C5': samples.oh2
   };
   
   const sampler = new Tone.Sampler({
       urls: sampleUrls,
       release: 1,
       baseUrl: `${base}sounds/808/`
   });
   sampler.toDestination();
    const playSample = (noteName : string) => {
        sampler.triggerAttack(noteName)
    }
</script>
<T.Group>
    <T.Mesh position.x={position} rotation.x={Math.PI/2}>
        <T.BoxGeometry args={[1/2, 1, 1/4]} />
        <HTML rotation.x={-Math.PI/2} scale ={0.25}>
            <select bind:value={note}>

            {#each sampleNames as sampleName,i}
              <option value={notes[i]} selected={sampleName === 'kick1'}>{sampleName}</option>
              
            {/each}
            </select>
        </HTML>
    <T.MeshStandardMaterial color={Math.floor(currentStep) == stepNumber ? 'orange' : 'violet'}  />
    {#if Math.floor(currentStep) === stepNumber && state === 'started'}
    <T.PointLight position={[0, 2, 0]} intensity={2} />
    {playSample(note)}
    {/if}
  </T.Mesh>
</T.Group>