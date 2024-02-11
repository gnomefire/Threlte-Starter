<script lang="ts">
import { T, useTask } from '@threlte/core';
import { ContactShadows, Float, Grid, HTML, OrbitControls, Portal } from '@threlte/extras';
	import { spring } from 'svelte/motion';
const rotation = spring([0, 0, 0], {
  stiffness: 0.1,
  damping: 0.25
})
useTask(
  (d) => {
    rotation.set([0, $rotation[1] +0.01, 0])
  }
)
</script>

<T.PerspectiveCamera
  makeDefault
  position={[-10, 10, 10]}
  near={0.1}
  far={100}
  fov={15}
>
  <OrbitControls
    enableZoom={false}
    enableDamping
    autoRotateSpeed={0.5}
    target.y={1.5}
  />
</T.PerspectiveCamera>

<T.DirectionalLight
  intensity={0.1}
  position.x={5}
  position.y={10}
/>
<T.DirectionalLight
  intensity={0.2}
  position.x={-5}
  position.y={10}
/>
<T.DirectionalLight
  intensity={0.4}
  position.x={-5}
  position.y={10}
  position.z={-5}
/>
<T.DirectionalLight
  intensity={0.4}
  position.x={5}
  position.y={10}
  position.z={5}
/>

<Grid
  position.y={-0.001}
  cellColor="#ffffff"
  sectionColor="#ffffff"
  sectionThickness={0}
  fadeDistance={25}
  cellSize={2}
/>

<ContactShadows
  scale={10}
  blur={2}
  far={2.5}
  opacity={0.5}
/>

<Float
  floatIntensity={0.5}
  floatingRange={[0, .1]}
>


  
  <T.Mesh
    position.y={1.2}
    position.z={-0.75}
    rotation.x={$rotation[1]}
    rotation.y={-Math.PI * 0.25}
    >
    <T.BoxGeometry />
    <T.MeshStandardMaterial color="#0059BA" />
  </T.Mesh>
</Float>
<HTML position={[0, 2, 2]}
scale={0.25}
rotation.x={$rotation[1]}
 occlude
transform>
<div class="w-auto p-3 bg-slate-500 text-lg text-violet-950"><p>This is an HTML element inside <span class="bg-slate-200 text-purple-950 w-auto font-mono p-1 rounded-sm">src/components/Scene.svelte</span></p> </div>
</HTML>


 
