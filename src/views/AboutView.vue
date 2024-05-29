<script setup>
import { useCounterStore } from "../stores/counter";

const store = useCounterStore()
const errors = store.wrong

</script>



<template>
  <div class="about w-full text-center">
    <h1>Erros:</h1>
    <ul class="flex flex-col">
      <li class="flex w-full justify-around" :class="{ 'bg-[#E3E3E3]': index % 2 === 0 }" v-for="(error, index) in errors" :key="error">
        <p>{{ error[0] }}</p>
        <p>{{ error[1] }}</p>
      </li>
    </ul>
  </div>
</template>
