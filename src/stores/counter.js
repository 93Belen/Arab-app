import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const state = {
    isFlipped: false
  }

  function flip(param) {
    state.isFlipped = param
  }

  return { state, flip }
})
