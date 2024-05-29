import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    isFlipped: false,
    right: 0,
    wrong: []
   }),
  actions: {
    flip(param) {
      this.isFlipped = param
    },
    addRight(){
      this.right++
    },
    addWrong(param){
      this.wrong.push(param)
    }
  },
})