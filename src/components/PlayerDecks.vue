<template>

    <div>
        Player 1's picks ({{ player1Deck.length }} drafted)
        <ul>
            <li v-for="{ code, title } in player1Deck" :key="code" @click="(selectedCode = code)">{{ title }} </li>
        </ul>
    </div>
    <div>
        Player 2's picks ({{ player2Deck.length }} drafted)
        <ul>
            <li v-for="{ code, title } in player2Deck" :key="code" @click="(selectedCode = code)">{{ title }}</li>
        </ul>
    </div>
    <img v-if="selectedCode" :src="cardStore.getImage(selectedCode)">

</template>

<script>

import { useCardStore } from '../stores/CardStore'
import { useDeckStore } from '../stores/DeckStore'
import { storeToRefs } from 'pinia'
export default {
    setup() {
        const cardStore = useCardStore()
        const deckStore = useDeckStore()
        const { player1Deck, player2Deck } = storeToRefs(deckStore)
        return { cardStore, deckStore, player1Deck, player2Deck }
    },
    data() {
        return {
            selectedCode: ''
        }
    }
}

</script>