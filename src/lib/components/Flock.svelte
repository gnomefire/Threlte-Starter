<script>
    import {T, useTask} from '@threlte/core'
    import { HTML, TransformControls } from "@threlte/extras";
    import {World, RigidBody, Attractor, AutoColliders, Debug} from '@threlte/rapier'
    import {BoxGeometry, Color} from 'three'
    import {writable} from 'svelte/store'
	import { spring, tweened } from 'svelte/motion';
	import Goldfish from './models/goldfish.svelte'
	import AmethystCrystal from './models/amethyst_crystal.svelte';
	import CoralFish from './models/coral_fish.svelte';

    const particles = Array(20).fill(0)
    const attractorPosition = tweened([0, 0, 0], {duration: 5000, easing: (t) => t*t})
    const ticker = writable(0)
    const attractor1Strength = writable(2)
    const attractor2Strength = writable(2)
    const attractor3Strength = writable(5)
    const showControls = writable(true)
    useTask(
        () => {
           $ticker += 1
            if ($ticker/60  >= 10){
                attractorPosition.set([Math.random() * 50-25, Math.random() * 20-10, Math.random() * 2])
                ticker.set(0)
            }
        }
    )
</script>

<T.AmbientLight color={"#ffffff"} intensity={0.5} />
<HTML position ={[-20, 10, 0]}>
    <div class="text-purple-100">
        <input type="checkbox" bind:checked={$showControls} />
        <label for="showControls">{ $showControls ? 'Hide Controls' : 'Show Controls'}</label>
    </div>

</HTML>
<World  gravity={[0, -1, 0]}>
    <RigidBody type="fixed" lockRotations lockTranslations>
    <T.Mesh position={[0, -10, 0]}>
        <T.BoxGeometry args={[10, 1, 10]}  />
        <T.MeshStandardMaterial color={"gray"}   metalness={1} roughness={0.5} opacity={0.5} transparent/>
        <Attractor strength={$attractor1Strength}   />

        <HTML position={[0, -10, 0]}  >
            <div class="bg-gray-800 p-3 text-purple-100 {$showControls ? '' : 'hidden' }">
             <label for="attractor1">Attractor 1 : </label>
            <input id="attractor1" class="text-black"  type="number" min="-10" max="10" bind:value={$attractor1Strength} />
        </div>
        </HTML>
    </T.Mesh>
    <AutoColliders shape="cuboid" friction={0.5}/>
</RigidBody>
<RigidBody type="fixed" lockRotations lockTranslations>
    <T.Mesh position={[0, 15, 0]}>
        <T.BoxGeometry args={[10, 1, 10]}  />
        <T.MeshStandardMaterial color={"gray"}   metalness={1} roughness={0.5} opacity={0.5} transparent />
        <Attractor strength={$attractor2Strength}   />
        <HTML  position={[0, 0, 0]} visible={$showControls} >
            <div class="bg-gray-800 p-3 text-purple-100 {$showControls ? '' : 'hidden' }">
            <label for="attractor2">Attractor 2 : <input id="attractor2" class="text-black" type="number" min="-10" max="10" bind:value={$attractor2Strength} /></label>
            
        </div>
        </HTML>
    </T.Mesh>
    <AutoColliders shape="cuboid" friction={0.5}/>
</RigidBody>

    <T.Group position={$attractorPosition} rotation={[Math.cos(($attractorPosition[0]-1)/15), Math.cos($attractorPosition[1]/10), Math.sin($attractorPosition[2]/10)]}>
    <AmethystCrystal  rotation={[0, 0, 0]}/>
    <Attractor strength={$attractor3Strength} scale={[10,10,0]} >
    </Attractor>
    </T.Group>
    <T.Mesh receiveShadow position={[0, 0, -3]}>
        <HTML position={[0, 0, 0]} >
            <div class="bg-gray-800 p-3 text-purple-100 items-center {$showControls ? '' : 'hidden' }">
            <label for="attractor3" class="w-auto" >Attractor 3 : 
            <input id="attractor3" class="text-black" type="number" min="-10" max="10" bind:value={$attractor3Strength} />
            </label>
        </div>
        </HTML>
        <T.BoxGeometry args={[100, 100, 1]}  />
        <T.MeshStandardMaterial color={"gray"}   metalness={1} roughness={0.5} opacity={1} transparent />
    </T.Mesh>
    {#each particles as p,i}
    
<RigidBody
    
linearDamping={0.5}
angularDamping={0.5}
lockRotations
>
<AutoColliders shape="ball" friction={0.5}>
    <T.Mesh position={[10/particles.length * i, 6, 0]}
    castShadow
    receiveShadow
    
    >
    <T.SpotLight position={[0, 2, 0]} intensity={5}  color={new Color(Math.random() * 0xffffff)} angle={2} penumbra={0.1} distance={10}   />
        <T.SphereGeometry args={[1,i%3 +2,i%2+2]}  />
        <T.MeshStandardMaterial color={new Color(0xffffff)} opacity={0.15} transparent />
    </T.Mesh>
    <Attractor strength={Math.random()-0.5}  scale={[-10,-10,0]} />
    
</AutoColliders>
</RigidBody>
{/each}
<HTML position={[-20, 10, 0]}>

</HTML>
</World>