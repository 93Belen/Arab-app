<script setup>
import { useCounterStore } from '../stores/counter'
import { ref, watch } from 'vue'

const store = useCounterStore()
const isFlipped = ref(store.isFlipped)

watch(() => store.isFlipped, (newValue) => {
  isFlipped.value = newValue
  console.log(isFlipped.value)
})
</script>

<template>
<div v-if="isFlipped">
  <p>Hola</p>
</div>
</template>
