<script setup>
import { useCounterStore } from '../stores/counter'
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue';

const store = useCounterStore()
const isFlipped = ref(store.isFlipped)

watch(() => store.isFlipped, (newValue) => {
  isFlipped.value = newValue
  console.log(isFlipped.value)
})
watch(() => store.right, () => {
  console.log(store.right)
})
watch(() => store.wrong.length, () => {
  console.log(store.wrong)
})

const addToRight = () =>{
  store.addRight()
  store.flip()
}

const addToWrong = () =>{
  store.addWrong('letter')
  store.flip()
}

</script>

<template>
<div v-if="isFlipped" class="flex justify-around py-5">
  <button @click="addToRight" class="rounded-full"><Icon icon="gravity-ui:circle-chevron-down-fill" width="50px" height="50px"  style="color: #77bb41" /></button>
  <button @click="addToWrong" class="rounded-full"><Icon icon="gravity-ui:circle-xmark-fill" width="50px" height="50px"  style="color: #831100" /></button>
</div>
</template>
