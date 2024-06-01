<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from './stores/counter'
import { onMounted, ref, watch, defineComponent } from 'vue'
import { VOnboardingWrapper, useVOnboarding } from 'v-onboarding'
import 'v-onboarding/dist/style.css'
const store = useCounterStore();

const steps = [
  { attachTo: { element: '#statistic' }, content: { description: "View your errors here!" } },
]

const wrapper = ref(null)
const { start, goToStep, finish } = useVOnboarding(wrapper)

watch(() => store.wrong.length, (length) => {
    if(length === 1){
      start()
    }
})

</script>

<template>
<VOnboardingWrapper ref="wrapper" :steps="steps" />
<div class="flex justify-center flex-col gap-10 pt-5 px-5">
  <header>
    <div class="">
      <nav class="flex w-full justify-around">
        <RouterLink to="/">Home</RouterLink>
       <RouterLink id="statistic" to="/about">Statistics</RouterLink>
      </nav>
    </div>
  </header>
  <div class="flex items-center justify-center content-center w-full text-black">
    <RouterView />
  </div>
</div>
</template>

<style>
.v-onboarding-item{
 max-width: 80vw;
 margin: auto;
}

.v-onboarding-item__header {
 display: none;
}
.v-onboarding-item__description {
color: black;
font-size: 16px;

}
.v-onboarding-item__actions button {
font-size: 14px;
max-width: 150px;
margin: auto;
}


</style>