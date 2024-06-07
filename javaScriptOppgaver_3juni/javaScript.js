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
    // Henter vekt og høyde som brukeren har skrevet inn fra et HTML-dokument, og regner ut kroppsmasseindeks. 
   
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

// Oppgave 5

function dato() {
    let dagStreng = parseInt(document.getElementById("datoStreng").value.slice(0, 2), 10)
    let mmStreng = document.getElementById("datoStreng").value.slice(3)
    
    switch (mmStreng) {
        case "01":
            document.getElementById("dato").innerHTML = `${dagStreng}. januar`
            break
        case "02":
            document.getElementById("dato").innerHTML = `${dagStreng}. februar`
            break
        case "03":
            document.getElementById("dato").innerHTML = `${dagStreng}. mars`
            break
        case "04":
            document.getElementById("dato").innerHTML = `${dagStreng}. april`
            break
        case "05":
            document.getElementById("dato").innerHTML = `${dagStreng}. mai`
            break
        case "06":
            document.getElementById("dato").innerHTML = `${dagStreng}. juni`
            break
        case "07":
            document.getElementById("dato").innerHTML = `${dagStreng}. juli`
            break
        case "08":
            document.getElementById("dato").innerHTML = `${dagStreng}. august`
            break
        case "09":
            document.getElementById("dato").innerHTML = `${dagStreng}. september`
            break
        case "10":
            document.getElementById("dato").innerHTML = `${dagStreng}. oktober`
            break
        case "11":
            document.getElementById("dato").innerHTML = `${dagStreng}. november`
            break
        case "12":
            document.getElementById("dato").innerHTML = `${dagStreng}. desember`
            break
        default:
            document.getElementById("dato").innerHTML = `Du har tastet inn en ugyldig dato, eller en dato i et ugyldig format.`
    }
    
    document.getElementById("datoStreng").focus()

}

// Oppgave 6

function skuddår() {
    let år = document.getElementById("år").value

    if ((år % 4 == 0) && !(år % 100 == 0) || (år % 400 == 0)) {
        document.getElementById("resultatSkuddår").innerHTML = `${år} er et skuddår.`
    } else {
        document.getElementById("resultatSkuddår").innerHTML = `${år} er ikke et skuddår.`
    }

    document.getElementById("år").focus()
}
