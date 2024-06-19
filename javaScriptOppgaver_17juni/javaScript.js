// Oppgave 1

function tallarrayløkke() {
    let tall = [34,53,2,3,34,26,26,85,3,4,98,2,12]
    document.getElementById("tallfelt").innerHTML = `Tall forlengs: `
    for (let i = 0; i < tall.length; i++) {
        funnetTall = tall[i]
        document.getElementById("tallfelt").innerHTML += `${funnetTall} `
    }

    document.getElementById("tallfelt").innerHTML += `
    
Tall baklengs: `

    for (let i = tall.length - 1; i > -1; i--) {
        funnetTall = tall[i]
        document.getElementById("tallfelt").innerHTML += `${funnetTall} `
    }

    document.getElementById("tallfelt").innerHTML += `
    
Annethvert tall: `

    for (let i = 0; i < tall.length; i += 2) {
        document.getElementById("tallfelt").innerHTML += `${tall[i]} `
    }

    document.getElementById("tallfelt").innerHTML += `
    
Alle tall i "tall" som er mindre enn 10: `

    for (let i = 0; i < tall.length; i++) {
        if (tall[i] < 10) {
            document.getElementById("tallfelt").innerHTML += `${tall[i]} `
        }
    }
    document.getElementById("tallfelt").innerHTML += `
    
Alle partall i "tall": `

    for (let i = 0; i < tall.length; i++) {
        if (tall[i] % 2 == 0) {
            document.getElementById("tallfelt").innerHTML += `${tall[i]} `
        }
    }
    document.getElementById("tallfelt").innerHTML += `
    
Summen av rekken "tall": `

    let sum = 0
    for (let i = 0; i < tall.length; i++) {
        sum += tall[i]
    }
    document.getElementById("tallfelt").innerHTML += `${sum} `

    document.getElementById("tallfelt").innerHTML += `
    
Primtallene i "tall": `

    let primtallsum = 0

    for (let i = 0; i < tall.length; i++) {
        if (tall[i] == 2) {
            document.getElementById("tallfelt").innerHTML += `${tall[i]} `
        }
        if (tall[i] > 1) {
            for (let j = 2; j < tall[i]; j++)
                if (tall[i] % j == 0) {
                    break
                }
                else {
                    document.getElementById("tallfelt").innerHTML += `${tall[i]} `
                    primtallsum += tall[i]
                    break
                }
        }
    }
    document.getElementById("tallfelt").innerHTML += `
    
Summen av primtallene i "tall": ${primtallsum}`

}

// Oppgave 2

function nyeTall() {
    let tall = [34,53,2,-3,34,26,-26,85,3,4,98,2,-12]
    document.getElementById("tallfeltTo").innerHTML = `tall = [34,53,2,-3,34,26,-26,85,3,4,98,2,-12]`
    let sumTall = 0
    for (let i = 0; i < tall.length; i++) {
        sumTall += tall[i]
    }
    document.getElementById("tallfeltTo").innerHTML += `
    
Summen av tall: ${sumTall}`

    document.getElementById("tallfeltTo").innerHTML += `
    
Negative tall i rekken: `

    for (let i = 0; i < tall.length; i++) {
        if (tall[i] < 0) {
            document.getElementById("tallfeltTo").innerHTML += `${tall[i]} `
        }
    }
    document.getElementById("tallfeltTo").innerHTML += `
    
Gjennomsnitt av arrayet: ${(sumTall / tall.length).toFixed(4)}`

    document.getElementById("tallfeltTo").innerHTML += `
    
Det minste av tallene: `
    let minsteTall = 1000
    for (let i = 0; i < tall.length; i++) {
        if (tall[i] < minsteTall) {
            minsteTall = tall[i]
        }
    }
    document.getElementById("tallfeltTo").innerHTML += `${minsteTall} `

    document.getElementById("tallfeltTo").innerHTML += `
    
Summen av partallene: `
sumTall = 0
    for (let i = 0; i < tall.length; i++) {
        if (tall[i] % 2 == 0) {
            sumTall += tall[i]
        }
    }
    document.getElementById("tallfeltTo").innerHTML += `${sumTall}`
}

// Oppgave 3

function tallfrekvens() {

    let tall = [4,5,2,3,4,6,1,2,0,9,7,6,8,5,6,4,2,3,4,7,3]
    let antall = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < tall.length; i++) {
        switch (tall[i]) {
            case 0:
                antall[0] += 1
                break
            case 1:
                antall[1] += 1
                break
            case 2:
                antall[2] += 1
                break
            case 3:
                antall[3] += 1
                break
            case 4:
                antall[4] += 1
                break
            case 5:
                antall[5] += 1
                break
            case 6:
                antall[6] += 1
                break
            case 7:
                antall[7] += 1
                break
            case 8:
                antall[8] += 1
                break
            case 9:
                antall[9] += 1
            
        }
    }
    document.getElementById("frekvens").innerHTML = `I arrayet finner man tallene med følgende frekvens: <br>`
    for (let i = 0; i < antall.length; i++) {
        document.getElementById("frekvens").innerHTML += `${i}: ${antall[i]} ganger. <br>`
    }
}