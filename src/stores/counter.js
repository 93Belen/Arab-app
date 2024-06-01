import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    isFlipped: false,
    right: [],
    wrong: [],
    alphabet: [
      ["ا", "Alif", "light"],
      ["ب", "Ba", "light"],
      ["ت", "Ta", "light"],
      ["ث", "Za", "light"],
      ["ج", "Yim", "light"],
      ["ح", "Ha", "light"],
      ["خ", "Ja", "heavy"],
      ["د", "Dal", "light"],
      ["ذ", "Dhal", "light"],
      ["ر", "Ra", "light/heavy"],
      ["ز", "Za", "light"],
      ["س", "Sin", "light"],
      ["ش", "Shin", "light"],
      ["ص", "Sad", "heavy"],
      ["ض", "Dad", "heavy"],
      ["ط", "Ta", "heavy"],
      ["ظ", "Dha", "heavy"],
      ["ع", "Ain", "light"],
      ["غ", "Ghain", "heavy"],
      ["ف", "Fa", "light"],
      ["ق", "Qaf", "heavy"],
      ["ك", "Kaf", "light"],
      ["ل", "Lam", "light"],
      ["م", "Mim", "light"],
      ["ن", "Nun", "light"],
      ["ه", "Ja", "light"],
      ["و", "Waw", "light"],
      ["ي", "Ya", "light"]
      
    ],
    completeAlphabet: [
    ["ا", "Alif", "light"],
    ["ب", "Ba", "light"],
    ["بـ", "Ba initial", "light"],
    ["ـبـ", "Ba middle", "light"],
    ["ـب", "Ba final", "light"],
    ["ت", "Ta", "light"],
    ["تـ", "Ta initial", "light"],
    ["ـتـ", "Ta middle", "light"],
    ["ـت", "Ta final", "light"],
    ["ث", "Za", "light"],
    ["ثـ", "Za initial", "light"],
    ["ـثـ", "Za middle", "light"],
    ["ـث", "Za final", "light"],
    ["ج", "Yim", "light"],
    ["جـ", "Yim initial", "light"],
    ["ـجـ", "Yim middle", "light"],
    ["ـج", "Yim final", "light"],
    ["ح", "Ha", "light"],
    ["حـ", "Ha initial", "light"],
    ["ـحـ", "Ha middle", "light"],
    ["ـح", "Ha final", "light"],
    ["خ", "Ja", "heavy"],
    ["خـ", "Ja initial", "heavy"],
    ["ـخـ", "Ja middle", "heavy"],
    ["ـخ", "Ja final", "heavy"],
    ["د", "Dal", "light"],
    ["دـ", "Dal inicial", "light"],
    ["ـدـ", "Dal media", "light"],
    ["ـد", "Dal final", "light"]
    ["ذ", "Dhal", "light"],
    ["ذـ", "Dhal inicial", "light"],
    ["ـذـ", "Dhal media", "light"],
    ["ـذ", "Dhal final", "light"]
    ["ر", "Ra", "light/heavy"],
    ["رـ", "Ra initial", "light/heavy"],
    ["ـرـ", "Ra middle", "light/heavy"],
    ["ـر", "Ra final", "light/heavy"],
    ["ز", "Zay", "light"],
    ["زـ", "Zay initial", "light"],
    ["ـزـ", "Zay middle", "light"],
    ["ـز", "Zay final", "light"]
    ["س", "Sin", "light"],
    ["سـ", "Sin initial", "light"],
    ["ـسـ", "Sin middle", "light"],
    ["ـس", "Sin final", "light"],
    ["ش", "Shin", "light"],
    ["شـ", "Shin initial", "light"],
    ["ـشـ", "Shin middle", "light"],
    ["ـش", "Shin final", "light"],
    ["ص", "Sad", "heavy"],
    ["صـ", "Sad initial", "heavy"],
    ["ـصـ", "Sad middle", "heavy"],
    ["ـص", "Sad final", "heavy"],
    ["ض", "Dad", "heavy"],
    ["ضـ", "Dad initial", "heavy"],
    ["ـضـ", "Dad middle", "heavy"],
    ["ـض", "Dad final", "heavy"],
    ["ط", "Taa", "heavy"],
    ["طـ", "Taa initial", "heavy"],
    ["ـطـ", "Taa middle", "heavy"],
    ["ـط", "Taa final", "heavy"],
    ["ظ", "Dhaa", "heavy"],
    ["ظـ", "Dhaa initial", "heavy"],
    ["ـظـ", "Dhaa middle", "heavy"],
    ["ـظ", "Dhaa final", "heavy"],
    ["ع", "Ayn", "light"],
    ["عـ", "Ayn initial", "light"],
    ["ـعـ", "Ayn middle", "light"],
    ["ـع", "Ayn final", "light"],
    ["غ", "Ghayn", "heavy"],
    ["غـ", "Ghayn initial", "heavy"],
    ["ـغـ", "Ghayn middle", "heavy"],
    ["ـغ", "Ghayn final", "heavy"],
    ["ف", "Fa", "light"],
    ["فـ", "Fa initial", "light"],
    ["ـفـ", "Fa middle", "light"],
    ["ـف", "Fa final", "light"],
    ["ق", "Qaf", "heavy"],
    ["قـ", "Qaf initial", "heavy"],
    ["ـقـ", "Qaf middle", "heavy"],
    ["ـق", "Qaf final", "heavy"],
    ["ك", "Kaf", "light"],
    ["كـ", "Kaf initial", "light"],
    ["ـكـ", "Kaf middle", "light"],
    ["ـك", "Kaf final", "light"],
    ["ل", "Lam", "light"],
    ["لـ", "Lam initial", "light"],
    ["ـلـ", "Lam middle", "light"],
    ["ـل", "Lam final", "light"],
    ["م", "Mim", "light"],
    ["مـ", "Mim initial", "light"],
    ["ـمـ", "Mim middle", "light"],
    ["ـم", "Mim final", "light"],
    ["ن", "Nun", "light"],
    ["نـ", "Nun initial", "light"],
    ["ـنـ", "Nun middle", "light"],
    ["ـن", "Nun final", "light"],
    ["ه", "Ha", "light"],
    ["هـ", "Ha initial", "light"],
    ["ـهـ", "Ha middle", "light"],
    ["ـه", "Ha final", "light"],
    ["و", "Waw", "light"],
    ["وـ", "Waw initial", "light"],
    ["ـوـ", "Waw middle", "light"],
    ["ـو", "Waw final", "light"]
    ["ي", "Ya", "light"],
    ["يـ", "Ya initial", "light"],
    ["ـيـ", "Ya middle", "light"],
    ["ـي", "Ya final", "light"]
    ],
    choosenLetter: 0,
    firstTimer: true
   }),
  actions: {
    flip(param) {
      this.isFlipped = param
    },
    addRight(param){
      this.right.push(param)
      let indexToRemove = this.wrong.indexOf(param)
      if(indexToRemove !== -1){
        this.wrong.splice(indexToRemove, 1)
      }
    },
    addWrong(param){
      this.wrong.push(param)
    },
    changeChoosenLetter(){
      const randomIndex = Math.floor(Math.random() * (this.alphabet.length - 1));
      this.choosenLetter = randomIndex
    },
    changeChoosenLetterFromComplete(){
      const randomIndex = Math.floor(Math.random() * (this.completeAlphabet.length - 1));
      this.choosenLetter = randomIndex
    },
    changeFirstTimer(){
      this.firstTimer = false;
    }
  },
  getters: {
    percentage(state) {
      const total = state.right.length + state.wrong.length;
      const rightPercentage = (state.right.length / total) * 100;
      if(state.right.length === 0 && state.wrong.length > 0){
        return 10
      }
      return rightPercentage;
    }
  },
})