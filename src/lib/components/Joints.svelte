<script>
    import { T, useTask } from '@threlte/core'
    import {World,  RigidBody, Collider, useRevoluteJoint, AutoColliders} from '@threlte/rapier';
	import { onMount } from 'svelte';
	import { Mesh, PlaneGeometry, Vector3 } from 'three';
    
    
onMount(() => {
})
</script>

<RigidBody  >
    <T.Mesh position={[-1, 1, 0]}>
        <T.BoxGeometry args={[1, 1, 1]} />
        <T.MeshBasicMaterial color={'red'} />
    </T.Mesh>
</RigidBody>
<RigidBody >
    <T.Mesh position={[2, 2, 0]}>
        <T.BoxGeometry args={[1, 1, 1]} />
        <T.MeshBasicMaterial color={'blue'} />
    </T.Mesh>
</RigidBody>
<RigidBody type={'fixed'} >
    <T.Mesh rotation={[-Math.PI / 2, 0, 0]}>
        <T.PlaneGeometry args={[10, 10]} />
        <T.MeshBasicMaterial color={'green'} />
    </T.Mesh>
</RigidBody>
