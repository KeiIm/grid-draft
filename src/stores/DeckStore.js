import { defineStore } from 'pinia'
// import { useCardStore } from './CardStore'
// const cardStore = useCardStore

export const useDeckStore = defineStore('deckStore', {
    state: () => ({
        player1Deck: [],
        player2Deck: [],
        activePlayer: 1,
        testMessage: "hello"
    }),
    getters: {
        listPlayer1Deck() {
            const deck = [];
            for (card in this.player1Deck) {
                deck.push(card)
            }
            return deck
        }
    },
    actions: {
        addCards(card1, card2, card3) {

            if (this.activePlayer === 1) {
                card1.available ? this.player1Deck.push(card1) : ''
                card2.available ? this.player1Deck.push(card2) : ''
                card3.available ? this.player1Deck.push(card3) : ''
            }
            if (this.activePlayer === 2) {
                card1.available ? this.player2Deck.push(card1) : ''
                card2.available ? this.player2Deck.push(card2) : ''
                card3.available ? this.player2Deck.push(card3) : ''
            }
            card1.available = false;
            card2.available = false;
            card3.available = false;

            this.changePlayer();
        },
        changePlayer() {
            this.activePlayer === 1 ? this.activePlayer = 2 : this.activePlayer = 1;
        }
    }
})

// this.player1Deck.push(card1, card2, card3)
// cardStore.nextPack()