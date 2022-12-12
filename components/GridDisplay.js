app.component("grid-display", {
    props: {
        cards: {
            type: Array,
            required: true
        },
    },
    template:
        /*html*/
        `<table>
        Hello!
        <form>
            <div>
                <div></div>
                <button>Col 1</button>
                <button>Col 2</button>
                <button>Col 3</button>
            </div>
            <div>
                <button>Row 1</button>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <button>Row 2</button>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <button>Row 3</button>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </form>
        </table>`,
    data() {
        return {
            a: 'a'
        }
    }
})