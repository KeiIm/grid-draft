<template>

    <h2 class="round">Pack {{ cardStore.pack }}: Player {{ deckStore.activePlayer }}'s turn</h2>

    <button @click="(deckStore.activePlayer === 1 ? cardStore.nextPack() : '')">Next Pack</button>
    <button
        @click="(cardStore.startOver(), player1Deck.splice(0, player1Deck.length), player2Deck.splice(0, player2Deck.length), deckStore.activePlayer = 1)">Start
        Fresh</button>
    <!-- :disabled="(deckStore.activePlayer === 1)" -->

    <table>
        <tr>
            <th></th>
            <th><button @click="takeCards(0, 3, 6)" :disabled="!isAvailable(0, 3, 6)">
                    Column 1</button></th>
            <th><button @click="takeCards(1, 4, 7)" :disabled="!isAvailable(1, 4, 7)">
                    Column 2</button></th>
            <th><button @click="takeCards(2, 5, 8)" :disabled="!isAvailable(2, 5, 8)">
                    Column 3</button></th>
        </tr>
        <tr>
            <th><button @click="takeCards(0, 1, 2)" :disabled="!isAvailable(0, 1, 2)">
                    Row 1</button></th>
            <td><img :src="cardStore.getImage(cards[0].code)"></td>
            <td><img :src="cardStore.getImage(cards[1].code)"></td>
            <td><img :src="cardStore.getImage(cards[2].code)"></td>
        </tr>
        <tr>
            <th><button @click="takeCards(3, 4, 5)" :disabled="!isAvailable(3, 4, 5)">
                    Row 2</button></th>
            <td><img :src="cardStore.getImage(cards[3].code)"></td>
            <td><img :src="cardStore.getImage(cards[4].code)"></td>
            <td><img :src="cardStore.getImage(cards[5].code)"></td>
        </tr>
        <tr>
            <th><button @click="takeCards(6, 7, 8)" :disabled="!isAvailable(6, 7, 8)">
                    Row 3</button></th>
            <td><img :src="cardStore.getImage(cards[6].code)"></td>
            <td><img :src="cardStore.getImage(cards[7].code)"></td>
            <td><img :src="cardStore.getImage(cards[8].code)"></td>
        </tr>
    </table>

    <!-- <td><img :src="cards[0].image"></td> -->
    <!--:class="{ disabledButton: deckStore.activePlayer === 2 }"  @click="firstFunction(); secondFunction();"  -->

</template>

<script>
import { useCardStore } from '../stores/CardStore'
import { useDeckStore } from '../stores/DeckStore'
import { storeToRefs } from 'pinia'
export default {
    setup() {
        const cardStore = useCardStore()
        const deckStore = useDeckStore()
        const { cards } = storeToRefs(cardStore)
        const { player1Deck, player2Deck } = storeToRefs(deckStore)
        return { cardStore, deckStore, cards, player1Deck, player2Deck }
    },
    methods: {
        takeCards(a, b, c) {
            this.deckStore.addCards(this.cardStore.cards[a], this.cardStore.cards[b], this.cardStore.cards[c]);
            this.deckStore.activePlayer === 1 ? this.cardStore.nextPack() : '';
            // addCards first swaps P2 to P1
            // previously separated by comma in @click=""
        },
        isAvailable(a, b, c) {
            if (!this.cardStore.cards[a].available && !this.cardStore.cards[b].available && !this.cardStore.cards[c].available) {
                return false;
            } else return true;
        }
    }
}


</script>