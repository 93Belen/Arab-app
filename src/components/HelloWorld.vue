<script setup>
import { ref, watch } from 'vue'
import { useCounterStore } from '../stores/counter'
const store = useCounterStore()
const letter = defineProps(['letter'])

const isFlipped = ref(false)
const flipCard = () => {
  isFlipped.value = !isFlipped.value
  store.flip(isFlipped.value)
}
watch(() => store.isFlipped, (newValue) => {
  isFlipped.value = newValue
})





</script>

<template>
<div class="maincontainer relative w-[250px] h-[150px] rounded-lg">
<div class="thecard text-center absolute w-full h-full"
@click="flipCard"
 :class="{ 'flipped': isFlipped}"
>
    <div class="thefront absolute w-full rounded-lg h-full bg-[#C1C1C1] content-center backdrop-blur-md">
      <p class="text-6xl">{{ letter.letter[0] }}</p>
    </div>
    <div class="theback absolute w-full rounded-lg h-full bg-[#E3E3E3] content-center backdrop-blur-md">
      <p v-show="isFlipped" class="text-6xl">{{ letter.letter[1] }}</p>
      <p v-show="isFlipped" class="text-lg italic font-light">{{letter.letter[2]}}</p>
    </div>
  </div>
</div>
</template>

<style lang="css" scoped>

.thecard {
transform-style: preserve-3d;
transition: all 0.5s ease;
}
.thecard.flipped {
  transform: rotateY(180deg);
}
.thefront {
  backface-visibility: hidden;
}
.theback {
  backface-visibility: hidden;
  transform:  rotateY(180deg);
}


</style>