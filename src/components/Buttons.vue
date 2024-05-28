<script setup>
import { useCounterStore } from '../stores/counter'
import { ref, watch } from 'vue'

const store = useCounterStore()
const isFlipped = ref(store.state.isFlipped)
console.log(isFlipped.value)

watch(() => store.state.isFlipped, (newValue) => {
  isFlipped.value = newValue
  console.log(isFlipped.value)
})
</script>

<template>
<div v-if="isFlipped">
  <p>Hola</p>
</div>
</template>
