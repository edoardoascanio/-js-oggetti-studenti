var studente = {
    nome: "Marco",
    cognome: "Rossi",
    eta: 20,
}

for (var key in studente) {
    console.log(key + ":" + studente[key])
}


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

for (var i = 0; i < arrayClasse.length; i++) {
    var alunno = arrayClasse[i];

    console.log("Studente " + (i + 1) + ":Nome = " + alunno.nome + "; Cognome = " + alunno.cognome)
}




var nuovoStudente = {
    "nome": prompt("Inserisci il tuo nome"),
    "cognome": prompt("Inserisci il tuo cognome"),
    "eta": prompt("Inserisci la tua età")
}

arrayClasse.push(nuovoStudente)

console.log(arrayClasse)

