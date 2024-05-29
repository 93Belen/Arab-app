import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ isFlipped: false }),
  actions: {
    flip(param) {
      this.isFlipped = param
    },
  },
})