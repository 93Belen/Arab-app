<script setup>
import { useCounterStore } from '../stores/counter'
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue';


const store = useCounterStore()
const isFlipped = ref(store.isFlipped)
const props = defineProps(['letter', 'getLetter'])

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
  store.addRight(props.letter)
  store.flip(false)
  props.getLetter()
}

const addToWrong = () =>{
  store.addWrong(props.letter)
  store.flip(false)
  props.getLetter()
}

</script>

<template>
<div v-if="isFlipped" class="flex justify-around py-5">
  <button @click="addToRight" class="rounded-full"><Icon icon="gravity-ui:circle-chevron-down-fill" width="50px" height="50px"  style="color: #77bb41" /></button>
  <button @click="addToWrong" class="rounded-full"><Icon icon="gravity-ui:circle-xmark-fill" width="50px" height="50px"  style="color: #ff6251" /></button>
</div>
</template>
