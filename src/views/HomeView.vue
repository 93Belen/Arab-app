<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Buttons from '../components/Buttons.vue'
import { useCounterStore } from '../stores/counter'
import { onMounted, ref, watch, defineComponent } from 'vue'
import { VOnboardingWrapper, useVOnboarding } from 'v-onboarding'
import 'v-onboarding/dist/style.css'

const steps = [
  { attachTo: { element: '#card' }, content: { title: "Guess what letter this is, and when you are ready, click it to see the answer!" } },
  { attachTo: { element: '#percentage' }, content: { title: "This bar will tell you what percentage you got right!" } },

]

onMounted(() => {
  if(store.firstTimer){
    start()
  }
  })

const wrapper = ref(null)
const { start, goToStep, finish } = useVOnboarding(wrapper)

const store = useCounterStore()
const letter = ref([])
const percentage = ref(store.percentage)

watch(() => store.percentage, (newValue) => {
  percentage.value = newValue
})



const getLetter = () => {
if(store.right.length > 25){
  store.changeChoosenLetterFromComplete()
  letter.value = store.completeAlphabet[store.choosenLetter]
}
else{
  store.changeChoosenLetter()
  letter.value = store.alphabet[store.choosenLetter]
}
console.log(letter.value)
console.log(percentage.value)
}
onMounted(() => {
  getLetter()
  console.log(letter.value)
})

</script>

<template>
<VOnboardingWrapper ref="wrapper" :steps="steps" />
  <main>
    <HelloWorld id="card" :letter='letter' :getLetter="getLetter" />
    <progress id="percentage" class="progress w-full" 
    :class="{ 
      'progress-error': percentage <= 30,
      'progress-warning': percentage < 50 && percentage > 30,
      'progress-success': percentage >= 50,
      'progress-info': typeof percentage !== number,
       }" 
    :value="percentage" max="100" />
    <Buttons id="buttons" :letter='letter' :getLetter="getLetter" />
  </main>
</template>
