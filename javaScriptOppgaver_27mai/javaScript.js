// Oppgave 1

function hei() {
    navnefelt = document.getElementById("navnefelt").value
    if (navnefelt.trim() == "") {
        document.getElementById("melding").innerHTML = "Vennligst skriv inn ditt navn."
    } else {
        document.getElementById("melding").innerHTML = `Hei ${navnefelt}.`
    }

}

// Oppgave 2

function kalkulator() {
    let tall1 = Number(document.getElementById("tall1").value);
    let tall2 = Number(document.getElementById("tall2").value);
    let operasjon = document.getElementById("operator").value;

    if (operasjon == "addisjon") {
        sum = (tall1 + tall2)
        document.getElementById("resultat").innerHTML = `${tall1} + ${tall2} = ${sum}`
    }
    else if (operasjon == "subtraksjon") {
        sum = (tall1 - tall2)
        document.getElementById("resultat").innerHTML = `${tall1} - ${tall2} = ${sum}`
    }
    else if (operasjon == "multiplikasjon") {
        sum = (tall1 * tall2)
        document.getElementById("resultat").innerHTML = `${tall1} * ${tall2} = ${sum}`
    }
    else if (operasjon == "divisjon") {
        sum = (tall1 / tall2)
        document.getElementById("resultat").innerHTML = `${tall1} / ${tall2} = ${sum}`
    }

}

// Oppgave 3

function farge() {
    let rød = document.getElementById("rød").checked
    let grønn = document.getElementById("grønn").checked
    let blå = document.getElementById("blå").checked

    if (rød) {
        document.getElementById("valgtFarge").innerHTML = `Du valgte rød.`
    }
    else if (grønn) {
        document.getElementById("valgtFarge").innerHTML = `Du valgte grønn.`
    }
    else if (blå) {
        document.getElementById("valgtFarge").innerHTML = `Du valgte blå.`
    }
}

// Oppgave 4

function rødverdi() {
    verdi = document.getElementById("rødverdi").value
    document.getElementById("rødverdiUt").innerHTML = `Rødverdi: ${verdi}`
}

function grønnverdi() {
    verdi = document.getElementById("grønnverdi").value
    document.getElementById("grønnverdiUt").innerHTML = `Grønnverdi: ${verdi}`
}

function blåverdi() {
    verdi = document.getElementById("blåverdi").value
    document.getElementById("blåverdiUt").innerHTML = `Blåverdi: ${verdi}`
}

function velgBakgrunn() {
    rødverdi = parseInt(document.getElementById("rødverdi").value)
    grønnverdi = parseInt(document.getElementById("grønnverdi").value)
    blåverdi = parseInt(document.getElementById("blåverdi").value)

    document.getElementById("body").style.backgroundColor = `rgb(${rødverdi}, ${grønnverdi}, ${blåverdi})`
}

// Oppgave 5

function handleliste() {
    brød = document.getElementById("brød").checked
    egg = document.getElementById("egg").checked
    melk = document.getElementById("melk").checked
    olje = document.getElementById("olje").checked
    epler = document.getElementById("epler").checked
    pasta = document.getElementById("pasta").checked
    kjøtt = document.getElementById("kjøtt").checked
    fisk = document.getElementById("fisk").checked
    vin = document.getElementById("vin").checked

    if (brød) {
        document.getElementById("handleliste").innerHTML += `Brød <br>`
    }
    if (melk) {
        document.getElementById("handleliste").innerHTML += `Melk <br>`
    }
    if (egg) {
        document.getElementById("handleliste").innerHTML += `Egg <br>`
    }
   
    if (olje) {
        document.getElementById("handleliste").innerHTML += `Olje <br>`
    }
    if (epler) {
        document.getElementById("handleliste").innerHTML += `Epler <br>`
    }
    if (pasta) {
        document.getElementById("handleliste").innerHTML += `Pasta <br>`
    }
    if (kjøtt) {
        document.getElementById("handleliste").innerHTML += `Kjøtt <br>`
    }
    if (fisk) {
        document.getElementById("handleliste").innerHTML += `Fisk <br>`
    }
    if (vin) {
        document.getElementById("handleliste").innerHTML += `Vin <br>`
    }
}

function klarer() {
    document.getElementById("handleliste").innerHTML = `Handleliste: <br>`
}

// Oppgave 6

function karakterkalkulator() {
    oppgave1 = Number(document.getElementById("oppgave1").value)
    oppgave2 = Number(document.getElementById("oppgave2").value)
    oppgave3 = Number(document.getElementById("oppgave3").value)
    oppgave4 = Number(document.getElementById("oppgave4").value)
    oppgave5 = Number(document.getElementById("oppgave5").value)

    snitt = ((oppgave1+oppgave2+oppgave3+oppgave4+oppgave5) / 5)
    
    if (snitt < 1.5) {
        document.getElementById("karakter").innerHTML = `Endelig karakter: F`
        document.getElementById("snitt").innerHTML = `Elevens snitt: ${snitt}`
    }
    
    else if (snitt < 2.5) {
        document.getElementById("karakter").innerHTML = `Endelig karakter: E`
        document.getElementById("snitt").innerHTML = `Elevens snitt: ${snitt}`
    }
    else if (snitt < 3.5) {
        document.getElementById("karakter").innerHTML = `Endelig karakter: D`
        document.getElementById("snitt").innerHTML = `Elevens snitt: ${snitt}`
    }
    else if (snitt < 4.5) {
        document.getElementById("karakter").innerHTML = `Endelig karakter: C`
        document.getElementById("snitt").innerHTML = `Elevens snitt: ${snitt}`
    }
    else if (snitt < 5.5) {
        document.getElementById("karakter").innerHTML = `Endelig karakter: B`
        document.getElementById("snitt").innerHTML = `Elevens snitt: ${snitt}`
    }
    else if (snitt < 6) {
        document.getElementById("karakter").innerHTML = `Endelig karakter: A`
        document.getElementById("snitt").innerHTML = `Elevens snitt: ${snitt}`
    }
}

// Oppgave 7
// Jeg gjorde om input-feltene til type="tekst" for å kunne legge til et steg som validerer verdiene, siden ugyldige verdier ellers ikke var mulige.

function lønnskalkulator() {
    timer = Number(document.getElementById("timer").value)
    timepris = Number(document.getElementById("timepris").value)
    lønn = (timer * timepris)

    if (Number.isNaN(lønn)) {
        document.getElementById("status").innerHTML = `Dette er ikke et tall. Vennligst bruk kun sifre.`
        document.getElementById("status").style.backgroundColor = "red"

    } else {
        document.getElementById("lønn").innerHTML = `Lønn: ${lønn}`
        document.getElementById("status").innerHTML = "Verdiene er gyldige"
        document.getElementById("status").style.backgroundColor = "green"
    }

}

// Oppgave 8

