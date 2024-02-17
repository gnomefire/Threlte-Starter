<script lang="ts">
    import { T, useTask } from '@threlte/core'
    import {interactivity, TransformControls, HTML} from '@threlte/extras'
	import { writable } from 'svelte/store';
    import { spring } from 'svelte/motion';
    import { Color } from "three";

    export let position = 0
    export let min = 0
    export let max = 1
    export let step = 0.01
    const fillColor =  spring(0, {damping: 0.001, stiffness: 0.2})
    const rotation = spring(0)
    const now = writable(new Date())

    useTask(
        () => {
            if ($now.getSeconds()%5 === 1){
                rotation.set($rotation+Math.PI/360*5)
 }           fillColor.set(Math.abs(Math.sin(($rotation)))*255)
           now.set(new Date())
        }
    )
   
   interactivity()
</script>
<HTML>
    <div>
        <p class="text-white">{(($rotation%(Math.PI*2))/Math.PI*180).toFixed(0)} : {$now.getSeconds()}</p>
    </div>
</HTML>
<T.Group position={0,position,0}>
    <T.Mesh rotation.z={$rotation} rotation.x={-Math.PI/2}>
        <T.CylinderGeometry args={[1]}  />
        <T.MeshStandardMaterial color={"blue"} />
    </T.Mesh>
</T.Group>