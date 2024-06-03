// Oppgave 1 & 3

function tipping() {
    let tippevalg = document.getElementById("valg").value.toLowerCase()

    if (tippevalg == "h") {
        document.getElementById("duHarTippet").innerHTML = "Du har tippet på hjemmeseier."
    } else if (tippevalg == "u") {
        document.getElementById("duHarTippet").innerHTML = "Du har tippet på uavgjort."
    } else if (tippevalg == "b") {
        document.getElementById("duHarTippet").innerHTML = "Du har tippet på borteseier."
    } else {
        document.getElementById("duHarTippet").innerHTML = `'${tippevalg}' er ikke et gyldig alternativ. Du må skrive inn enten 'h', 'u' eller 'b'.`
    }
}

// Oppgave 2

function tippingTo() {
    let tippevalg = document.getElementById("tippevalg").value.toLowerCase()

    switch (tippevalg) {
        case 'h': 
            document.getElementById("duHarTippetTo").innerHTML = "Du har tippet på hjemmeseier."
            break
        case 'u':
            document.getElementById("duHarTippetTo").innerHTML = "Du har tippet på uavgjort."
            break
        case 'b':
            document.getElementById("duHarTippetTo").innerHTML = "Du har tippet på borteseier."
            break
        default:
            document.getElementById("duHarTippetTo").innerHTML = `'${tippevalg}' er ikke et gyldig alternativ. Du må skrive inn enten 'h', 'u' eller 'b'.`
    }

}

// Oppgave 4

function kmiKalkulator() {
    let vekt = Number(document.getElementById("vekt").value)
    let høyde = Number(document.getElementById("høyde").value)
    høyde = (høyde / 100)
    let kmi = (vekt / høyde**2)

    if (kmi < 18.5) {
        document.getElementById("kmi").innerHTML = `Din kroppsmasseindeks er ${kmi}. Dette regnes som undervekt (kmi < 18.5).`
    } else if (kmi >= 18.5 && kmi < 25) {
        document.getElementById("kmi").innerHTML = `Din kroppsmasseindeks er ${kmi}. Dette regnes som normalvekt (25 > kmi > 18.5).`
    } else if (kmi >= 25 && kmi < 30) {
        document.getElementById("kmi").innerHTML = `Din kroppsmasseindeks er ${kmi}. Dette regnes som overvekt (30 > kmi > 25).`
    } else {
        document.getElementById("kmi").innerHTML = `Din kroppsmasseindeks er ${kmi}. Dette regnes som alvorlig overvekt (kmi > 30).`
    }


}
