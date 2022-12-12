app.component('deck-input', {
    props: {
        cards: {
            type: Array,
            required: true
        },
        deck: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `<form action="">
            <textarea name="deckInput" id="deckInput" cols="40" rows="20">{{displayDeck(deck)}}</textarea>
            <ul>
                <li v-for="card in cards">{{card.title}}
            </ul>
            <p>Total Cards: 9/9</p>

            <button>Save Deck</button>
        </form>`,
    data() {
        return {
            text: "hello"
        }
    },
    methods: {
        displayDeck(deck) {
            // return cards.find(x => x.code === deck[0]).title
            return 'help\nnewline'
        }
    }
})