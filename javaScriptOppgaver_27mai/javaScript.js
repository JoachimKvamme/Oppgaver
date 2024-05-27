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

