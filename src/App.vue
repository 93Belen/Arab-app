<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="flex justify-center flex-col gap-10 pt-5 px-5">
  <header>
    <div class="">
      <nav class="flex w-full justify-around">
        <RouterLink to="/">Home</RouterLink>
       <RouterLink to="/about">Statistics</RouterLink>
      </nav>
    </div>
  </header>
  <div class="flex items-center justify-center content-center w-full">
    <RouterView />
  </div>
</div>
</template>