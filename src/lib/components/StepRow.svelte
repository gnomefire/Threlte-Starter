<script>
    import Step from './Step.svelte';
   export let steps = 16
   export let currentStep = 0
   export let state = 'stopped'
   export let note = 'C4'
</script>
{#each Array(steps) as step, i} 

<Step position={i-8}  stepNumber={i} {currentStep} {state} {note} />
   
  {/each}