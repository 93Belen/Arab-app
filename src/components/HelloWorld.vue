<script setup>
import { ref, watch } from 'vue'
import { useCounterStore } from '../stores/counter'
const store = useCounterStore()
const props = defineProps(['letter', 'getLetter'])
let countdownValue = ref(10)
let intervalId; // Define intervalId variable

const isFlipped = ref(false)
const flipCard = () => {
  isFlipped.value = !isFlipped.value
  store.flip(isFlipped.value)
}
watch(() => store.isFlipped, (newValue) => {
  isFlipped.value = newValue
  if(newValue){
    clearInterval(intervalId); // Clear interval when conditions are no longer met
    intervalId = undefined; // Reset intervalId
    countdownValue.value = 10
  }
})

function countdown() {
    let remainingSeconds = 10;
    intervalId = setInterval(function() {
        if (remainingSeconds === 0) {
            remainingSeconds = 10 
            store.addWrong(props.letter)
            clearInterval(intervalId); // Clear interval when countdown finishes
            props.getLetter()
            return;
        } else {
            remainingSeconds--;
            console.log(remainingSeconds)
            countdownValue.value = remainingSeconds
        }
    }, 1000);
}

watch(() => {
    return [store.right.length > 40, store.percentage > 40];
}, ([condition1, condition2]) => {
    if (condition1 && condition2) {
        countdown();
    } else {
        clearInterval(intervalId); // Clear interval when conditions are no longer met
        intervalId = undefined; // Reset intervalId
        countdownValue.value = 10
    }
});





</script>

<template>
<div class="maincontainer relative w-[250px] h-[150px] rounded-lg">
<div class="thecard text-center absolute w-full h-full"
@click="flipCard"
 :class="{ 
   'flipped': isFlipped
 }"
>
    <div
     :class="{ 
      'shadow-[0px_0px_5px_5px_rgba(204,48,46,0.5)]' : (countdownValue === 1),
      'shadow-transparent' : (countdownValue === 0 || countdownValue > 1),
 }"
     class="thefront absolute w-full rounded-lg h-full bg-[#C1C1C1]  backdrop-blur-md grid grid-rows-[20%_80%]">
      <span v-show="(countdownValue > 0 && countdownValue < 6 && store.percentage > 40)" class="countdown justify-right flex justify-end items-center pr-5">
        <span :style="{ '--value': countdownValue }"></span>
      </span>
      <div class="h-full flex justify-center items-center row-start-2">
        <p class="text-6xl self-center">{{ props.letter[0] }}</p>
      </div>
    </div>
    <div class="theback absolute w-full rounded-lg h-full bg-[#E3E3E3] content-center backdrop-blur-md">
      <p v-show="isFlipped" class="text-6xl">{{ props.letter[1] }}</p>
      <p v-show="isFlipped" class="text-lg italic font-light">{{props.letter[2]}}</p>
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