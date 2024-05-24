
// Oppgave 1

function antallTegn() {
    tekst = document.getElementById("tekst").value
    document.getElementById("resultat").innerHTML = tekst.length
}

function storeBokstaver() {
    tekst = document.getElementById("tekst").value
    document.getElementById("resultat").innerHTML = tekst.toUpperCase();
}

function smaaBokstaver() {
    tekst = document.getElementById("tekst").value
    document.getElementById("resultat").innerHTML = tekst.toLowerCase();
}

// Oppgave 2

function loggInn() {
    let brukernavn = document.getElementById("brukernavn").value
    let passord = document.getElementById("passord").value

    if (brukernavn == "test_person" && passord == "1234512345") {
        document.getElementById("innloggingsresultat").innerHTML = `Hurra! Velkommen ${brukernavn}, du klarte å logge inn.`
    } else {
        document.getElementById("innloggingsresultat").innerHTML = `Her har noe gått galt. Enten eksisterer ikke brukernavnet ${brukernavn}, eller passordet er feil.`
    }
}

// Oppgave 3

function epostGenerator() {
    let fornavn = document.getElementById("fornavn").value.toLowerCase();
    let mellomnavn = document.getElementById("mellomnavn").value.toLowerCase();
    let etternavn = document.getElementById("etternavn").value.toLowerCase();

    if (!(fornavn.trim() == "" && etternavn.trim() == "") && (mellomnavn == "")) {
        document.getElementById("epost").innerHTML = `${fornavn}-${etternavn.slice(0,2)}@alf.no`

    } else if (!(fornavn.trim() == "" && mellomnavn.trim() == "" && etternavn.trim() == "")) {
        document.getElementById("epost").innerHTML = `${fornavn}.${mellomnavn[0]}.${etternavn}@alf.no`
    } else {
        document.getElementById("epost").innerHTML = "Du må skrive inn minst et fornavn og et etternavn."
    }
}

// Oppgave 4


