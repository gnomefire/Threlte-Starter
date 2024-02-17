<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import {ContactShadows, GLTF, HTML, OrbitControls, interactivity} from '@threlte/extras'
  import { Collider, RigidBody, AutoColliders, World } from '@threlte/rapier'
	import { onDestroy, onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { writable } from 'svelte/store';
  import Threlte from './models/threlte.svelte'
  import * as Tone from 'tone'
  import TheFishParticle from './models/the_fish_particle.svelte'
  import AmethystCrystal from './models/amethyst_crystal.svelte'
  import Flock from './Flock.svelte'
	import Goldfish from './models/goldfish.svelte';
  const rotation= spring(0, {damping: 0.3})
  const steps= writable(16)
  const currentStep = writable(0)
  const activeSteps=writable(<number[]>[])
  const time = writable(0)
  const state = writable(Tone.Transport.state)

//play a note every quarter-note
//play another note every off quarter-note, by starting it "8n"
const bpm =writable(120)


  onMount(() => {
    
    interactivity()
  })
  onDestroy(() => {
    
  })
  useTask(

    () => {
      if($state === 'started'){
        Tone.Transport.bpm.value = $bpm 
        $currentStep = Tone.Transport.seconds /30 * $bpm % $steps
        
        Tone.Transport.start();
      }
      else if($state === 'stopped'){
        Tone.Transport.stop();
        
      }
      else if($state === 'paused'){
        Tone.Transport.pause();
      
        
      }
      
      
      
    }, 
  )
  const pauseTransport = () => {
    Tone.Transport.pause();
    state.set(Tone.Transport.state)
  }
  const startTransport = () => {
    Tone.Transport.start();
    state.set(Tone.Transport.state)
  }
</script>
<T.PerspectiveCamera position={[0, 5,20]} makeDefault fov={75} >
  <OrbitControls target.x ={0} target.y={-1} target.z={0}/>
</T.PerspectiveCamera>
<T.Group position.z={-6} receiveShadow>
 
  <Flock />
</T.Group>
<!-- <Threlte position.y={-3}  position.z={2}  scale={2} rotation.y={-Math.PI/4}/> -->