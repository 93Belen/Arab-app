<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Buttons from '../components/Buttons.vue'
import { useCounterStore } from '../stores/counter'
import { onMounted, ref } from 'vue'
const store = useCounterStore()
const letter = ref([])


const getLetter = () => {
store.changeChoosenLetter()
letter.value = store.alphabet[store.choosenLetter]
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
    <Buttons :letter='letter' @click="getLetter" />
  </main>
</template>
