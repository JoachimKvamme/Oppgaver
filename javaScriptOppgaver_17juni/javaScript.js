let tall = [34,53,2,3,34,26,26,85,3,4,98,2,12]

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