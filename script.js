var studente = {
    nome: "Marco",
    cognome: "Rossi",
    eta: 20,
}

console.log(studente["nome"] + " " + studente["cognome"])



var arrayClasse = [
    {
        nome: "Luca",
        cognome: "Bianchi",
        eta: 22
    },

    {
        nome: "Giovanni",
        cognome: "Verdi",
        eta: 21
    },

    {
        nome: "Andrea",
        cognome: "Neri",
        eta: 19
    }
]

var nuovoStudente = {
    "nome": prompt("Inserisci il tuo nome"),
    "cognome": prompt("Inserisci il tuo cognome"),
    "eta": prompt("Inserisci la tua età")
}

arrayClasse.push(nuovoStudente)

console.log(arrayClasse[0]["nome"] + " " + arrayClasse[0]["cognome"])
console.log(arrayClasse[1]["nome"] + " " + arrayClasse[1]["cognome"])
console.log(arrayClasse[2]["nome"] + " " + arrayClasse[2]["cognome"])
console.log(nuovoStudente["nome"] + " " + nuovoStudente["cognome"])

console.log(arrayClasse)

