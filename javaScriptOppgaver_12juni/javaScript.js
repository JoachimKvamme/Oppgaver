// Oppgave 1

function partall() {
    let i = 0
    for (i = 0; i < 101; i++) {
        if (i % 2 == 0 && i != 0) {
            document.getElementById("partallDiv").innerHTML += `<p>${i}</p>`
        }
    }
}

function fjernPartall() {
    document.getElementById("partallDiv").innerHTML = ""
}

// Oppgave 2

function oddetall() {
    let i = 0
    for (i = 0; i < 101; i++)
        if (i % 2 != 0 && i != 0) {
            document.getElementById("oddetallDiv").innerHTML += `<p>${i}</p>`
        }
}

function fjernOddetall() {
    document.getElementById("oddetallDiv").innerHTML = ""
}

// Oppgave 3

function deleligPåFem() {
    let i = 0
    for (i = 0; i < 101; i++)
        if (i % 5 == 0 && i != 0) {
            document.getElementById("deltFemDiv").innerHTML += `<p>${i}</p>`
        }
}

// Oppgave 4

function deleligPåFemPar() {
    let i = 0
    for (i = 0; i < 101; i++)
        if (i % 5 == 0 && i != 0 && i % 2 == 0) {
            document.getElementById("deltFemParDiv").innerHTML += `<p>${i}</p>`
        }
}

// Oppgave 5

function deltÅtteOgTre() {
    let i = 0
    for (i = 1; i < 101; i++)
        if (i % 8 == 0 || i % 3 == 0) {
            document.getElementById("deltÅtteOgTreDiv").innerHTML += `<p>${i}</p>`
        }
}

// Oppgave 6 

function gjentaUtsagn() {
    let i
    let antallGjentagelser = Number(document.getElementById("gjentagelser").value)
    let brukerUtsagn = document.getElementById("brukerUtsagn").value

    for (i = 1; i <= antallGjentagelser; i++) {
        document.getElementById("gjentaUtsagnDiv").innerHTML += `<p>${brukerUtsagn}</p>`
    }
}

// Oppgave 7

function gangetSegSelv() {
    let i
    for (i = 0; i <= 100; i++) {
        let x = i * i
        document.getElementById("gangetSegSelvDiv").innerHTML += `<p>${i} x ${i} = ${x}</p>`
    }
}

// Oppgave 8

function whileEnTilSyv() {
    let i = 1
    while (i <= 7) {
        document.getElementById("whileEnTilSyvDiv").innerHTML += `<p>Her er tallet ${i}</p>`
        i += 1
    }
}

// Oppgave 9

function hvertFemteTall() {
    let i = 12
    while (i <= 98) {
        document.getElementById("hvertFemteTallDiv").innerHTML += `<p>${i}</p>`
        i += 5
    }
}

// Oppgave 10

function egenRekke() {
    let tall1 = Number(document.getElementById("tall1").value)
    let tall2 = Number(document.getElementById("tall2").value)

    let i 
    
    for (i = tall1; i <= tall2; i++) {
        document.getElementById("egenRekkeDiv").innerHTML += `<p>${i}</p>`
    }
}


function tomAlt() {
    document.getElementById("gjentaUtsagnDiv").innerHTML = ""
    document.getElementById("deltÅtteOgTreDiv").innerHTML = ""
    document.getElementById("deltFemParDiv").innerHTML = ""
    document.getElementById("deltFemDiv").innerHTML = ""
    document.getElementById("oddetallDiv").innerHTML = ""
    document.getElementById("partallDiv").innerHTML = ""
    document.getElementById("gangetSegSelvDiv").innerHTML = ""
    document.getElementById("whileEnTilSyvDiv").innerHTML = ""
    document.getElementById("hvertFemteTallDiv").innerHTML = ""
    document.getElementById("egenRekkeDiv").innerHTML = ""
}

