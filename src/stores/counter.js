import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    isFlipped: false,
    right: 0,
    wrong: [],
    alphabet: [
    ["ا", "Alif"],
    ["ب", "Ba"],
    ["ت", "Ta"],
    ["ث", "Za"],
    ["ج", "Yim"],
    ["ح", "Ha"],
    ["خ", "Ja"],
    ["د", "Dal"],
    ["ذ", "Dhal"],
    ["ر", "Ra"],
    ["ز", "Za"],
    ["س", "Sin"],
    ["ش", "Shin"],
    ["ص", "Saad"],
    ["ض", "Daad"],
    ["ط", "Taa"],
    ["ظ", "Zaa"],
    ["ع", "Ayn"],
    ["غ", "Ghayn"],
    ["ف", "Fa"],
    ["ق", "Qaf"],
    ["ك", "Kaf"],
    ["ل", "Lam"],
    ["م", "Mim"],
    ["ن", "Nun"],
    ["ه", "Ha"],
    ["و", "Waw"],
    ["ي", "Ya"],
    ]
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
  getters: {
    getRandomLetter(state) {
      const randomIndex = Math.floor(Math.random() * state.alphabet.length);
      return state.alphabet[randomIndex]
    }
  }
})