// Oppgave 1

let arr = [1, 2.3, -4, 5.7, -7.2, 13, 59]


function hoyesteTall() {

    let måltall = 0
    for (let i of arr) {
        if (i > måltall) {
            måltall = i
        }
    }
    document.getElementById("ofLøkkeResultat").innerHTML = `Det høyeste tallet i arrayet er: ${måltall}`
}

function stigendeTall() {

    let sortertArr = arr.toSorted(function(a,b) {return a - b})
    document.getElementById("sortertSamling").innerHTML = `Arrayet sortert: ${sortertArr}`
}

function synkendeTall() {
    let sortertArr = arr.toSorted(function(a,b) {return b - a})
    document.getElementById("reversertSamling").innerHTML = `Samlingen synker: ${sortertArr}`
}

function leggTil92() {
    arr.push(92)
    document.getElementById("92").innerHTML = `Arrayet: ${arr}`
}

function arrLengde() {
    document.getElementById("lengde").innerHTML = `Lengden: ${arr.length}`
}

function sjekkArray() {
    if (Array.isArray(arr)) {
        document.getElementById("erArray").innerHTML = `'arr' er et array.`
    } else {
        document.getElementById("erArray").innerHTML = `'arr' er ikke et array.`
    }
}

function fjernFørste() {
    arr.shift()
    document.getElementById("arrayMinus").innerHTML = `'arr' minus første element: ${arr}`
}

function absolutteTall() {
    let absoluttArr = []
    for (let x of arr) {
        absoluttArr.push(Math.abs(x))
    }
    document.getElementById("absoluttTall").innerHTML = `'arr' (${arr}) i absolutte tall: ${absoluttArr}`
}