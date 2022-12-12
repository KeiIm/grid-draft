<template>
  <header>
    <h1>Grid Draft</h1>

    <!-- <RouterLink to="/">Home</RouterLink> -->
  </header>


  <div class="the-grid">
    <TheGrid />
    <PlayerDecks />
  </div>

  <div>
    <span>V-Model Test: </span>
    <input type="text" v-model="deckStore.testMessage"> / {{ deckStore.testMessage }}

    <!-- <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <br>
        <textarea v-model="message" placeholder="add multiple lines"></textarea>
        Don't do <textarea>{{text}}</textarea> -->
  </div>

  <!-- <RouterView /> -->
</template>

<script>
import TheGrid from './components/TheGrid.vue'
import PlayerDecks from './components/PlayerDecks.vue'
import { useCardStore } from './stores/CardStore'
import { useDeckStore } from './stores/DeckStore'
// import { RouterLink, RouterView } from 'vue-router'

export default {
  components: { TheGrid, PlayerDecks },
  setup() {
    const deckStore = useDeckStore()
    const cardStore = useCardStore()
    // fetch cards
    cardStore.getDefaultCards()

    return { deckStore, cardStore }
  }
}
</script>