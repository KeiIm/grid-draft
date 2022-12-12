app.component("deck-output", {
    props: {
        cards: {
            type: Array,
            required: true
        },
    },
    template:
        /*html*/
        `<div id="playerOneDecklist">
            <p v-for="card in cards">{{card.title}}</p>

            <p>Total Cards: 9/9</p>
        </div>`,
    data() {
        return {
            draftedDeck: []
        }
    },
    computed: {
        deckSize() {
            return this.draftedDeck.length;
        }
    },
    methods: {
        addToP1Deck(card) {
            this.$emit('add-to-p1-deck')
        }
    }
})