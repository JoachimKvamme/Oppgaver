// Oppgave 1

function tellTil1238() {
    let telletall = 0
    while (telletall < 1238) {
        
        document.getElementById("tellefelt").innerHTML += `${telletall} `
        telletall += 1
    }
    document.getElementById("tellefelt").innerHTML += `

    Siste tall: ${telletall}`
}

// Oppgave 2

function partalløkke() {
    let teller = 0
    while (teller <= 2250) {
        if (teller % 2 == 0 && teller != 0) {
            document.getElementById("taltePar").innerHTML += `${teller} `
        }
        teller += 1
    }
}
