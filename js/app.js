var app = new Vue({
    el: "#aufgabenApp",
    data: {
        aufgaben: [{
                beschreibung: "Deep Purple - Machine Head",
                fertig: true
            },
            {
                beschreibung: "Black Sabbath - Never Say Die!",
                fertig: false
            },
            {
                beschreibung: "Led Zeppelin - Remasters",
                fertig: false
            },
            {
                beschreibung: "CCR - Chronicle",
                fertig: false
            },
            {
                beschreibung: "David Bowie - Legacy",
                fertig: false
            }, {
                beschreibung: "Jan Hammer - Crocett's Theme",
                fertig: false
            },
        ],
        neueAufgabe: ''
    },
    computed: {
        erledigt() {
            return this.aufgaben.filter(aufgabe => aufgabe.fertig);
        },
        nichterledigt() {
            return this.aufgaben.filter(aufgabe => !aufgabe.fertig);
        },
    },

    methods: {
        aufgabeHinzu() {
            this.aufgaben.push({
                beschreibung: this.neueAufgabe, fertig: false});
            this.neueAufgabe = '';
        },
        loeschen(index) {
            this.aufgaben.splice(index, 1);
        },
        erledigtWechseln(index) {
            this.aufgaben[index].fertig = this.aufgaben[index].fertig ? false : true;
        }
    }
});