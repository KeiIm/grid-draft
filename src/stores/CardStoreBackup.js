import { defineStore } from 'pinia'

export const useCardStore = defineStore('cardStore', {
  state: () => ({
    cards: [
      { available: true, code: 30001, title: "René \"Loup\" Arcemont: Party Animal", image: "https://static.nrdbassets.com/v1/large/30001.jpg" },
      { available: true, code: 30002, title: "Wildcat Strike", image: "https://static.nrdbassets.com/v1/large/30002.jpg" },
      { available: true, code: 30003, title: "Carnivore", image: "https://static.nrdbassets.com/v1/large/30003.jpg" },
      { available: true, code: 30004, title: "Botulus", image: "https://static.nrdbassets.com/v1/large/30004.jpg" },
      { available: true, code: 30005, title: "Buzzsaw", image: "https://static.nrdbassets.com/v1/large/30005.jpg" },
      { available: true, code: 30006, title: "Cleaver", image: "https://static.nrdbassets.com/v1/large/30006.jpg" },
      { available: true, code: 30007, title: "Fermenter", image: "https://static.nrdbassets.com/v1/large/30007.jpg" },
      { available: true, code: 30008, title: "Leech", image: "https://static.nrdbassets.com/v1/large/30008.jpg" },
      { available: true, code: 30009, title: "Cookbook", image: "https://static.nrdbassets.com/v1/large/30009.jpg" },
      { available: true, code: 30010, title: "Zahya Sadeghi: Versatile Smuggler", image: "https://static.nrdbassets.com/v1/large/30010.jpg" },
      { available: true, code: 30011, title: "Mutual Favor", image: "https://static.nrdbassets.com/v1/large/30011.jpg" },
      { available: true, code: 30012, title: "Tread Lightly", image: "https://static.nrdbassets.com/v1/large/30012.jpg" },
      { available: true, code: 30013, title: "Docklands Pass", image: "https://static.nrdbassets.com/v1/large/30013.jpg" },
      { available: true, code: 30014, title: "Pennyshaver", image: "https://static.nrdbassets.com/v1/large/30014.jpg" },
      { available: true, code: 30015, title: "Carmen", image: "https://static.nrdbassets.com/v1/large/30015.jpg" },
      { available: true, code: 30016, title: "Marjanah", image: "https://static.nrdbassets.com/v1/large/30016.jpg" },
      { available: true, code: 30017, title: "Tranquilizer", image: "https://static.nrdbassets.com/v1/large/30017.jpg" },
      { available: true, code: 30018, title: "Red Team", image: "https://static.nrdbassets.com/v1/large/30018.jpg" },
      { available: true, code: 30019, title: "Tāo Salonga: Telepresence Magician", image: "https://static.nrdbassets.com/v1/large/30019.jpg" },
      { available: true, code: 30020, title: "Creative Commission", image: "https://static.nrdbassets.com/v1/large/30020.jpg" },
      { available: true, code: 30021, title: "VRcation", image: "https://static.nrdbassets.com/v1/large/30021.jpg" },
      { available: true, code: 30022, title: "DZMZ Optimizer", image: "https://static.nrdbassets.com/v1/large/30022.jpg" },
      { available: true, code: 30023, title: "Pantograph", image: "https://static.nrdbassets.com/v1/large/30023.jpg" },
      { available: true, code: 30024, title: "Conduit", image: "https://static.nrdbassets.com/v1/large/30024.jpg" },
      { available: true, code: 30025, title: "Echelon", image: "https://static.nrdbassets.com/v1/large/30025.jpg" },
      { available: true, code: 30026, title: "Unity", image: "https://static.nrdbassets.com/v1/large/30026.jpg" },
      { available: true, code: 30027, title: "Telework Contract", image: "https://static.nrdbassets.com/v1/large/30027.jpg" }
    ],
    loading: false,
    pack: 1
  }),
  actions: {
    getImage(code) {
      return "https://static.nrdbassets.com/v1/large/" + code + ".jpg"
    },
    nextPack() {
      this.pack += 1;
      if (this.cards.length >= 18) {
        this.cards = this.cards.splice(9);
      } else {
        this.cards.splice(0, this.cards.length)
        this.cards.push(
          { available: false, code: 30001, title: "René \"Loup\" Arcemont: Party Animal", image: "https://static.nrdbassets.com/v1/large/30001.jpg" },
          { available: false, code: 30002, title: "Wildcat Strike", image: "https://static.nrdbassets.com/v1/large/30002.jpg" },
          { available: false, code: 30003, title: "Carnivore", image: "https://static.nrdbassets.com/v1/large/30003.jpg" },
          { available: false, code: 30004, title: "Botulus", image: "https://static.nrdbassets.com/v1/large/30004.jpg" },
          { available: false, code: 30005, title: "Buzzsaw", image: "https://static.nrdbassets.com/v1/large/30005.jpg" },
          { available: false, code: 30006, title: "Cleaver", image: "https://static.nrdbassets.com/v1/large/30006.jpg" },
          { available: false, code: 30007, title: "Fermenter", image: "https://static.nrdbassets.com/v1/large/30007.jpg" },
          { available: false, code: 30008, title: "Leech", image: "https://static.nrdbassets.com/v1/large/30008.jpg" },
          { available: false, code: 30009, title: "Cookbook", image: "https://static.nrdbassets.com/v1/large/30009.jpg" }
        )
      }
    },
    startOver() {
      this.pack = 1
      this.cards.splice(0, this.cards.length);
      this.cards.push(
        { available: true, code: 30001, title: "René \"Loup\" Arcemont: Party Animal", image: "https://static.nrdbassets.com/v1/large/30001.jpg" },
        { available: true, code: 30002, title: "Wildcat Strike", image: "https://static.nrdbassets.com/v1/large/30002.jpg" },
        { available: true, code: 30003, title: "Carnivore", image: "https://static.nrdbassets.com/v1/large/30003.jpg" },
        { available: true, code: 30004, title: "Botulus", image: "https://static.nrdbassets.com/v1/large/30004.jpg" },
        { available: true, code: 30005, title: "Buzzsaw", image: "https://static.nrdbassets.com/v1/large/30005.jpg" },
        { available: true, code: 30006, title: "Cleaver", image: "https://static.nrdbassets.com/v1/large/30006.jpg" },
        { available: true, code: 30007, title: "Fermenter", image: "https://static.nrdbassets.com/v1/large/30007.jpg" },
        { available: true, code: 30008, title: "Leech", image: "https://static.nrdbassets.com/v1/large/30008.jpg" },
        { available: true, code: 30009, title: "Cookbook", image: "https://static.nrdbassets.com/v1/large/30009.jpg" },
        { available: true, code: 30010, title: "Zahya Sadeghi: Versatile Smuggler", image: "https://static.nrdbassets.com/v1/large/30010.jpg" },
        { available: true, code: 30011, title: "Mutual Favor", image: "https://static.nrdbassets.com/v1/large/30011.jpg" },
        { available: true, code: 30012, title: "Tread Lightly", image: "https://static.nrdbassets.com/v1/large/30012.jpg" },
        { available: true, code: 30013, title: "Docklands Pass", image: "https://static.nrdbassets.com/v1/large/30013.jpg" },
        { available: true, code: 30014, title: "Pennyshaver", image: "https://static.nrdbassets.com/v1/large/30014.jpg" },
        { available: true, code: 30015, title: "Carmen", image: "https://static.nrdbassets.com/v1/large/30015.jpg" },
        { available: true, code: 30016, title: "Marjanah", image: "https://static.nrdbassets.com/v1/large/30016.jpg" },
        { available: true, code: 30017, title: "Tranquilizer", image: "https://static.nrdbassets.com/v1/large/30017.jpg" },
        { available: true, code: 30018, title: "Red Team", image: "https://static.nrdbassets.com/v1/large/30018.jpg" },
        { available: true, code: 30019, title: "Tāo Salonga: Telepresence Magician", image: "https://static.nrdbassets.com/v1/large/30019.jpg" },
        { available: true, code: 30020, title: "Creative Commission", image: "https://static.nrdbassets.com/v1/large/30020.jpg" },
        { available: true, code: 30021, title: "VRcation", image: "https://static.nrdbassets.com/v1/large/30021.jpg" },
        { available: true, code: 30022, title: "DZMZ Optimizer", image: "https://static.nrdbassets.com/v1/large/30022.jpg" },
        { available: true, code: 30023, title: "Pantograph", image: "https://static.nrdbassets.com/v1/large/30023.jpg" },
        { available: true, code: 30024, title: "Conduit", image: "https://static.nrdbassets.com/v1/large/30024.jpg" },
        { available: true, code: 30025, title: "Echelon", image: "https://static.nrdbassets.com/v1/large/30025.jpg" },
        { available: true, code: 30026, title: "Unity", image: "https://static.nrdbassets.com/v1/large/30026.jpg" },
        { available: true, code: 30027, title: "Telework Contract", image: "https://static.nrdbassets.com/v1/large/30027.jpg" }
      )
    }
  }
})
