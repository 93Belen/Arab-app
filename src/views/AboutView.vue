<script setup>
import { useCounterStore } from "../stores/counter";

const store = useCounterStore()
const errors = store.wrong
const uniqueErros = errors.filter((error, index) => {
  return errors.indexOf(error) === index
})
const howManyTimes = (item) => {
  let count = errors.filter(error => error === item)
  return count.length
}


</script>



<template>
  <div class="about w-[80%] text-center">
    <h1 class="text-white">Errors:</h1>
    <ul class="flex flex-col gap-y-[1px]">
      <li class="flex w-full justify-around"
      :class="{
      'bg-[#EBAA59] text-black': howManyTimes(error) > 1 && howManyTimes(error) <= 2,
      'bg-[#E48E50] text-black': howManyTimes(error) > 2 && howManyTimes(error) <= 3,
      'bg-[#D75B3D] text-black': howManyTimes(error) > 3 && howManyTimes(error) <= 4,
      'bg-[#CC302E] text-black': howManyTimes(error) > 4 && howManyTimes(error) <= 5,
      'bg-[#E3E3E3]': index % 2 === 0,
      'bg-[white]': index % 2 !== 0,
      }"
       v-for="(error, index) in uniqueErros" :key="error">
        <p>{{ error[0] }}</p>
        <p>{{ error[1] }}</p>
      </li>
    </ul>
  </div>
</template>
