import { defineStore } from 'pinia'

export const useCardStore = defineStore('cardStore', {
  state: () => ({
    defaultCards: [
      { available: true, code: 30001, title: "René \"Loup\" Arcemont: Party Animal" },
      { available: true, code: 30002, title: "Wildcat Strike" },
      { available: true, code: 30003, title: "Carnivore" },
      { available: true, code: 30004, title: "Botulus" },
      { available: true, code: 30005, title: "Buzzsaw" },
      { available: true, code: 30006, title: "Cleaver" },
      { available: true, code: 30007, title: "Fermenter" },
      { available: true, code: 30008, title: "Leech" },
      { available: true, code: 30009, title: "Cookbook" },
      { available: true, code: 30010, title: "Zahya Sadeghi: Versatile Smuggler" },
      { available: true, code: 30011, title: "Mutual Favor" },
      { available: true, code: 30012, title: "Tread Lightly" },
      { available: true, code: 30013, title: "Docklands Pass" },
      { available: true, code: 30014, title: "Pennyshaver" },
      { available: true, code: 30015, title: "Carmen" },
      { available: true, code: 30016, title: "Marjanah" },
      { available: true, code: 30017, title: "Tranquilizer" },
      { available: true, code: 30018, title: "Red Team" },
      { available: true, code: 30019, title: "Tāo Salonga: Telepresence Magician" },
      { available: true, code: 30020, title: "Creative Commission" },
      { available: true, code: 30021, title: "VRcation" },
      { available: true, code: 30022, title: "DZMZ Optimizer" },
      { available: true, code: 30023, title: "Pantograph" },
      { available: true, code: 30024, title: "Conduit" },
      { available: true, code: 30025, title: "Echelon" },
      { available: true, code: 30026, title: "Unity" },
      { available: true, code: 30027, title: "Telework Contract" }
    ],
    cards: [
      { available: true, code: 30001, title: "René \"Loup\" Arcemont: Party Animal" },
      { available: true, code: 30002, title: "Wildcat Strike" },
      { available: true, code: 30003, title: "Carnivore" },
      { available: true, code: 30004, title: "Botulus" },
      { available: true, code: 30005, title: "Buzzsaw" },
      { available: true, code: 30006, title: "Cleaver" },
      { available: true, code: 30007, title: "Fermenter" },
      { available: true, code: 30008, title: "Leech" },
      { available: true, code: 30009, title: "Cookbook" },
      { available: true, code: 30010, title: "Zahya Sadeghi: Versatile Smuggler" },
      { available: true, code: 30011, title: "Mutual Favor" },
      { available: true, code: 30012, title: "Tread Lightly" },
      { available: true, code: 30013, title: "Docklands Pass" },
      { available: true, code: 30014, title: "Pennyshaver" },
      { available: true, code: 30015, title: "Carmen" },
      { available: true, code: 30016, title: "Marjanah" },
      { available: true, code: 30017, title: "Tranquilizer" },
      { available: true, code: 30018, title: "Red Team" },
      { available: true, code: 30019, title: "Tāo Salonga: Telepresence Magician" },
      { available: true, code: 30020, title: "Creative Commission" },
      { available: true, code: 30021, title: "VRcation" },
      { available: true, code: 30022, title: "DZMZ Optimizer" },
      { available: true, code: 30023, title: "Pantograph" },
      { available: true, code: 30024, title: "Conduit" },
      { available: true, code: 30025, title: "Echelon" },
      { available: true, code: 30026, title: "Unity" },
      { available: true, code: 30027, title: "Telework Contract" }
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
          { available: false, code: 30001, title: "René \"Loup\" Arcemont: Party Animal" },
          { available: false, code: 30002, title: "Wildcat Strike" },
          { available: false, code: 30003, title: "Carnivore" },
          { available: false, code: 30004, title: "Botulus" },
          { available: false, code: 30005, title: "Buzzsaw" },
          { available: false, code: 30006, title: "Cleaver" },
          { available: false, code: 30007, title: "Fermenter" },
          { available: false, code: 30008, title: "Leech" },
          { available: false, code: 30009, title: "Cookbook" }
        )
      }
    },
    startOver() {
      this.pack = 1
      this.cards.splice(0, this.cards.length);
      // this.cards.push(...this.defaultCards)
      // The above doesn't refresh availability
      this.cards.push(
        { available: true, code: 30001, title: "René \"Loup\" Arcemont: Party Animal" },
        { available: true, code: 30002, title: "Wildcat Strike" },
        { available: true, code: 30003, title: "Carnivore" },
        { available: true, code: 30004, title: "Botulus" },
        { available: true, code: 30005, title: "Buzzsaw" },
        { available: true, code: 30006, title: "Cleaver" },
        { available: true, code: 30007, title: "Fermenter" },
        { available: true, code: 30008, title: "Leech" },
        { available: true, code: 30009, title: "Cookbook" },
        { available: true, code: 30010, title: "Zahya Sadeghi: Versatile Smuggler" },
        { available: true, code: 30011, title: "Mutual Favor" },
        { available: true, code: 30012, title: "Tread Lightly" },
        { available: true, code: 30013, title: "Docklands Pass" },
        { available: true, code: 30014, title: "Pennyshaver" },
        { available: true, code: 30015, title: "Carmen" },
        { available: true, code: 30016, title: "Marjanah" },
        { available: true, code: 30017, title: "Tranquilizer" },
        { available: true, code: 30018, title: "Red Team" },
        { available: true, code: 30019, title: "Tāo Salonga: Telepresence Magician" },
        { available: true, code: 30020, title: "Creative Commission" },
        { available: true, code: 30021, title: "VRcation" },
        { available: true, code: 30022, title: "DZMZ Optimizer" },
        { available: true, code: 30023, title: "Pantograph" },
        { available: true, code: 30024, title: "Conduit" },
        { available: true, code: 30025, title: "Echelon" },
        { available: true, code: 30026, title: "Unity" },
        { available: true, code: 30027, title: "Telework Contract" }
      )
    }
  }
})
