// Oppgave 1

function historiegenerator() {
    navn = document.getElementById("navn").value
    kjønn = document.getElementById("kjønn").value
    alder = Number(document.getElementById("alder").value)

    document.getElementById("fortelling").innerHTML = `Det var en gang en ${kjønn} som het ${navn}, og var født i ${2024 - alder}. Denne personen er nå ${alder} år, og har ${100 - alder} år igjen til 100-års-dagen sin!`
}

// Oppgave 2

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

// Oppgave 3

function fergepriser() {
    let antVoksne = Number(document.getElementById("antVoksne").value)
    let antBarn = Number(document.getElementById("antBarn").value)
    let antPensjonister = Number(document.getElementById("antPensjonister").value)

    let totalpris = ((antVoksne * 100) + (antBarn * 50) + (antPensjonister * 60))

    let enveisbillett = document.getElementById("tur").checked
    let turRetur = document.getElementById("turRetur").checked

    // Sjekker at brukeren har fylt inn alle de nødvendige feltene. Den første er ikke egentlig nødvendig, i hvert fall ikke i Edge.

    if (antVoksne == NaN || antBarn == NaN || antPensjonister == NaN) {
        document.getElementById("pris").innerHTML = `Vennligst fyll inn antall reisende`
        document.getElementById("pris").classList.add("errorStyle")
    } else if (!enveisbillett && !turRetur) {
        document.getElementById("pris").innerHTML = `Du må velge om du skal reise en vei eller tur/retur`
        document.getElementById("pris").classList.add("errorStyle")
    }
    // Regner ut billettprisene basert på om brukeren velger enveisbilletter eller tur/retur-billetter.
    else if (enveisbillett) {
        document.getElementById("pris").innerHTML = `Prisen for enveisbilletter for ${antVoksne} voksne, ${antBarn} barn og ${antPensjonister} honnør, er ${totalpris} kroner` 
        document.getElementById("pris").classList.remove("errorStyle")
    } 
    else if (turRetur) {
        document.getElementById("pris").innerHTML = `Prisen for billetter tur/retur for ${antVoksne} voksne, ${antBarn} barn og ${antPensjonister} honnør, er ${(totalpris * 2 * 0.75)} kroner` 
        document.getElementById("pris").classList.remove("errorStyle")
    }
}

// Oppgave 4

function bestillPizza() {
    let stor = document.getElementById("stor").checked
    let medium = document.getElementById("medium").checked
    let liten = document.getElementById("liten").checked
    let kylling = document.getElementById("kylling").checked
    let vegetar = document.getElementById("vegetar").checked

    let storrelse = ""
    let fyll = ""

    // sjekker at brukeren har valgt størrelse og fyll, og gir beskjed om ikke

    if (!stor && !medium && !liten) {
        document.getElementById("bestilling").innerHTML = "Du må velge størrelse"
        document.getElementById("bestilling").classList.add("errorStyle")
    } else if (!kylling && !vegetar) {
        document.getElementById("bestilling").innerHTML = "Du må velge fyll"
        document.getElementById("bestilling").classList.add("errorStyle")
    } 
    
    // Printer ut en bekreftelse på hvilken pizza brukeren har valgt og bestilt.

    else if (stor && kylling) {
        storrelse = "stor"
        fyll = "kylling"
        document.getElementById("bestilling").innerHTML = `Din bestilling av 1 ${storrelse} ${fyll}-pizza blir levert til deg innen 59 minutter!
        Takk for betillingen.`
        document.getElementById("bestilling").classList.remove("errorStyle")
    } else if (medium && kylling) {
        storrelse = "medium"
        fyll = "kylling"
        document.getElementById("bestilling").innerHTML = `Din bestilling av 1 ${storrelse} ${fyll}-pizza blir levert til deg innen 59 minutter!
        Takk for betillingen.`
        document.getElementById("bestilling").classList.remove("errorStyle")
    } else if (liten && kylling) {
        storrelse = "liten"
        fyll = "kylling"
        document.getElementById("bestilling").innerHTML = `Din bestilling av 1 ${storrelse} ${fyll}-pizza blir levert til deg innen 59 minutter!
        Takk for betillingen.`
        document.getElementById("bestilling").classList.remove("errorStyle")
    } else if (stor && vegetar) {
        storrelse = "stor"
        fyll = "vegetar"
        document.getElementById("bestilling").innerHTML = `Din bestilling av 1 ${storrelse} ${fyll}-pizza blir levert til deg innen 59 minutter!
        Takk for betillingen.`
        document.getElementById("bestilling").classList.remove("errorStyle")
    } else if (medium && vegetar) {
        storrelse = "medium"
        fyll = "vegetar"
        document.getElementById("bestilling").innerHTML = `Din bestilling av 1 ${storrelse} ${fyll}-pizza blir levert til deg innen 59 minutter!
        Takk for betillingen.`
        document.getElementById("bestilling").classList.remove("errorStyle")
    } else if (liten && vegetar) {
        storrelse = "liten"
        fyll = "vegetar"
        document.getElementById("bestilling").innerHTML = `Din bestilling av 1 ${storrelse} ${fyll}-pizza blir levert til deg innen 59 minutter!
        Takk for betillingen.`
        document.getElementById("bestilling").classList.remove("errorStyle")
    }
}


