<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Buttons from '../components/Buttons.vue'
import { useCounterStore } from '../stores/counter'
import { onMounted, ref } from 'vue'

const store = useCounterStore()
const letter = ref([])


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
    <progress class="progress progress-success w-full" value="50" max="100" />
    <Buttons :letter='letter' :getLetter="getLetter" />
  </main>
</template>
