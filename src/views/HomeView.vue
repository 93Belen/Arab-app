<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Buttons from '../components/Buttons.vue'
import { useCounterStore } from '../stores/counter'
import { onMounted, ref } from 'vue'
const store = useCounterStore()
const letter = ref('')


const getLetter = () => {
const newLetter = store.getRandomLetter
letter.value = newLetter
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
    <Buttons />
  </main>
</template>
