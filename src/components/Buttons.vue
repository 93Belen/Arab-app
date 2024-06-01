<script setup>
import { useCounterStore } from '../stores/counter'
import { Icon } from '@iconify/vue';
import { onMounted, ref, watch, defineComponent } from 'vue'
import { VOnboardingWrapper, useVOnboarding } from 'v-onboarding'
import 'v-onboarding/dist/style.css'

const steps = [
  { attachTo: { element: '#button-v' }, content: { title: "Click this here if you got it right!" } },
  { attachTo: { element: '#button-x' }, content: { title: "And here if you didn't" } },
]

const wrapper = ref(null)
const { start, goToStep, finish } = useVOnboarding(wrapper)


const store = useCounterStore()
const isFlipped = ref(store.isFlipped)
const props = defineProps(['letter', 'getLetter'])

watch(() => store.isFlipped, (newValue) => {
  isFlipped.value = newValue
  console.log(isFlipped.value)
  if(newValue && store.firstTimer){
    start()
    store.changeFirstTimer()
  }
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
<VOnboardingWrapper ref="wrapper" :steps="steps" />
<div v-if="isFlipped" class="flex justify-around py-5">
  <button id="button-v" @click="addToRight" class="rounded-full"><Icon icon="gravity-ui:circle-chevron-down-fill" width="50px" height="50px"  style="color: #77bb41" /></button>
  <button id="button-x" @click="addToWrong" class="rounded-full"><Icon icon="gravity-ui:circle-xmark-fill" width="50px" height="50px"  style="color: #ff6251" /></button>
</div>
</template>
