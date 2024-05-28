<script setup>
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'
const store = useCounterStore()

const isFlipped = ref(false)
const flipCard = () => {
  isFlipped.value = !isFlipped.value
  store.flip(isFlipped)
}



</script>

<template>
<div class="maincontainer relative w-[250px] h-[150px] rounded-lg">
<div class="thecard border-2 text-center rounded-lg border-black absolute w-full h-full"
@click="flipCard"
 :class="{ 'flipped': isFlipped}"
>
    <div class="thefront absolute w-full h-full bg-[yellow] content-center">
      <p class="text-6xl">Front</p>
    </div>
    <div class="theback absolute w-full h-full bg-[lightblue] content-center">
      <p class="text-6xl">Back</p>
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