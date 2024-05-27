
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
        document.getElementById("innloggingsresultat").style.backgroundColor = "green";
    } else {
        document.getElementById("innloggingsresultat").innerHTML = `Her har noe gått galt. Enten eksisterer ikke brukernavnet ${brukernavn}, eller passordet er feil.`
        document.getElementById("innloggingsresultat").style.backgroundColor = "red";
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

function pris() {
    reisestrekning = document.getElementById("reisedistanse").value;
    alder = document.getElementById("alder").value;

    if (alder < 13) {
        let pris = (reisestrekning * 3.52) * 0.5;
        document.getElementById("billettpris").innerHTML = `Fergebilletten koster ${pris}, når turen er på ${reisestrekning} kilometer, for en reisende på ${alder} år.`
    }
    else if (alder > 66) {
        let pris = ((reisestrekning * 3.52) * 0.8);
        document.getElementById("billettpris").innerHTML = `Fergebilletten koster ${pris}, når turen er på ${reisestrekning} kilometer, for en reisende på ${alder} år.`
    }
    else if (alder > 12) {
        let pris = (reisestrekning * 3.52);
        document.getElementById("billettpris").innerHTML = `Fergebilletten koster ${pris} kroner, når turen er på ${reisestrekning} kilometer, for en reisende på ${alder} år.`
    }
}
function prisFlere() {

        let strekning = document.getElementById("reisestrekningFlere").value;
        let reisendeBarn = document.getElementById("reisendeBarn").value;
        let reisendeVoksne = document.getElementById("reisendeVoksne").value;
        let reisendeGamle = document.getElementById("reisendeGamle").value;

        let pris = (strekning * (reisendeVoksne * 3.52)) + (strekning * (reisendeBarn * 3.52 * 0.5)) + (strekning * (reisendeGamle * 3.52 * 0.8))
        document.getElementById("billettprisFlere").innerHTML = `For ${reisendeBarn} barn, ${reisendeVoksne} voksne og ${reisendeGamle} pensjonister, koster en tur på ${strekning} kilometer ${pris} kroner.`
    }



