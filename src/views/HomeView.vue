<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Buttons from '../components/Buttons.vue'
import { useCounterStore } from '../stores/counter'
import { onMounted, ref, watch } from 'vue'

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
  <main>
    <HelloWorld :letter='letter' />
    <div>

    </div>
    <progress class="progress w-full" 
    :class="{ 
      'progress-error': percentage <= 30,
      'progress-warning': percentage < 50 && percentage > 30,
      'progress-success': percentage >= 50,
      'progress-info': typeof percentage !== number,
       }" 
    :value="percentage" max="100" />
    <Buttons :letter='letter' :getLetter="getLetter" />
  </main>
</template>
