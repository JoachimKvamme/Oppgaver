function historiegenerator() {
    navn = document.getElementById("navn").value
    kjønn = document.getElementById("kjønn").value
    alder = Number(document.getElementById("alder").value)

    document.getElementById("fortelling").innerHTML = `Det var en gang en ${kjønn} som het ${navn}, og var født i ${2024 - alder}. Denne personen er nå ${alder} år, og har ${100 - alder} år igjen til 100-års-dagen sin!`
}

let mål = 0
let liv = 0

function gjettespillStart() {
    mål = Math.floor((Math.random() * 100) + 1);
    liv = 10
    document.getElementById("liv").innerHTML = `Gjenværende forsøk: ${liv}`
}

function sjekkGjetning() {
    gjetning = document.getElementById("gjetning").value
    if (gjetning > mål && liv > 0) {
        document.getElementById("resultat").innerHTML = `Du gjettet for høyt!`
        liv += -1
        document.getElementById("liv").innerHTML = `Gjenværende forsøk: ${liv}`
    } else if (gjetning < mål && liv > 0) {
        document.getElementById("resultat").innerHTML = `Du gjettet for lavt!`
        liv += -1
        document.getElementById("liv").innerHTML = `Gjenværende forsøk: ${liv}`
    } else if (gjetning == mål) {
        document.getElementById("resultat").innerHTML = `Du gjettet riktig! Du vinner!`
    } else if (liv < 1) {
        document.getElementById("resultat").innerHTML = `Du gikk tom for liv, du taper!`
    }
}

