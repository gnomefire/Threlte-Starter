<script lang="ts">
  import { T } from '@threlte/core'
  import {ContactShadows, HTML, OrbitControls} from '@threlte/extras'
  import { Collider, RigidBody, AutoColliders, World } from '@threlte/rapier'
	import { writable } from 'svelte/store';
  import { BoxGeometry, SphereGeometry, CylinderGeometry, ConeGeometry, Mesh } from 'three'
  const inputText = writable("Hello, World!")
  const radius = 1
  const shapes = [
    {
      geometry: new BoxGeometry(radius * Math.random(), radius* Math.random(), radius * Math.random()),
      autoCollider: 'cuboid',
      color: 'hotpink'
    },
    {
      geometry: new SphereGeometry(radius * Math.random()),
      autoCollider: 'ball',
      color: 'cyan'
    },
    {
      geometry: new CylinderGeometry(radius * Math.random(), radius * Math.random(), radius * 2),
      autoCollider: 'convexHull',
      color: 'lime'
    },
    {
      geometry: new ConeGeometry(radius* Math.random(), radius * 3, 10),
      autoCollider: 'convexHull',
      color: 'orange'
    }
  ]
  const bodies = new Array(50).fill(0).map((_, index) => {
    const position: Parameters<Vector3['set']> = [
      Math.random() * 5 - 2.5,
      Math.random() * 5,
      Math.random() * 5 - 2.5
    ]
    const rotation: Parameters<Euler['set']> = [
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10
    ]
    const shape = shapes[Math.floor(Math.random() * shapes.length)]
    return {
      id: index,
      position,
      rotation,
      ...shape
    }
  })
</script>

<World>

  <T.PerspectiveCamera position={[0, 3, 10]}  makeDefault>
  <OrbitControls target.y={1} maxPolarAngle={Math.PI *0.4} />
  </T.PerspectiveCamera>
  <ContactShadows />

  <T.AmbientLight intensity={0.5}/>
  <T.DirectionalLight position={[1, 1, 1]} intensity={.1} castShadow/>
  <T.DirectionalLight position={[-1, 1, 1]} intensity={.1} castShadow/>


<T.Group>
  <RigidBody >
    <AutoColliders shape={'cuboid'} restitution={.5}>
      <T.Mesh position={[0, 3, 0]}>
        <HTML position={[0, 0.5, 0]}  scale={0.25} >
          <div class="w-full h-auto p-5 text-2xl text-purple-400 bg-gray-800">
            <p>Output: {$inputText}</p>
          </div>
        </HTML>
        <T.BoxGeometry args={[1, 1, 1]} />
        <T.MeshStandardMaterial color={'hotpink'} />
      </T.Mesh>
    </AutoColliders>
  </RigidBody>
</T.Group>
<T.Group>
  <RigidBody type={'fixed'} >
    <AutoColliders shape={'cuboid'} restitution={1.5}>
  <T.Mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, 0]} receiveShadow>
    <T.PlaneGeometry args={[100, 100]} />
    <T.MeshStandardMaterial color={'purple'} />
    <HTML transform position={[0, -4, -2]}>
      <div class="w-full h-auto p-5 text-2xl text-purple-400 bg-gray-800">
       <label for="input">Input: <input bind:value={$inputText} /></label>  
      </div>
      
    </HTML>
    
  </T.Mesh>
  </AutoColliders>  
</RigidBody>
</T.Group>

</World>