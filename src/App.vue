<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="">
      <nav class="flex w-full justify-around text-[red]">
        <RouterLink to="/">Home</RouterLink>
       <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>