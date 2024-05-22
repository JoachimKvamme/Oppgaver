 

function skrivTilSide() {
    let n = Number(document.getElementById("brukerNummer").value)
    multito = tallGangerTo(n)
    multitre = tallGangerTre(n)
    halv = tallHalvert(n)
    kvadrere = tallKvadrert(n)
    
    document.getElementById("dittTall").innerHTML = n
    document.getElementById("talletHalvert").innerHTML = halv
    document.getElementById("dobletTall").innerHTML = multito
    document.getElementById("tripletTall").innerHTML = multitre
    document.getElementById("kvadrertTall").innerHTML = kvadrere


}


function tallGangerTo(n) {
    produkt = n * 2;
    return produkt;
}

function tallGangerTre(n) {
    produkt = n * 3
    return produkt
}

function tallHalvert(n) {
    produkt = n / 2
    return produkt
}

function tallKvadrert(n) {
    produkt = n ** 2
    return produkt
}