window.onload = oppstart()

function registrer() {
    let fnavn = document.getElementById("fornavn").value
    let enavn = document.getElementById("etternavn").value

    localStorage.setItem("fornavn", fnavn)
    localStorage.setItem("etternavn", enavn)

}

function oppstart() {
    let fnavn = localStorage.getItem("fornavn")
    let enavn = localStorage.getItem("etternavn")

    if (fnavn === null) {
        fnavn = "Ikke registrert"
    } 
    if (enavn === null) {
        enavn = "Ikke registrert"
    }

    document.getElementById("utskrift").innerHTML = `${fnavn} ${enavn}`

}

function bakgrunnvelger() {
    farge = document.getElementById("farge").value
    localStorage.setItem("farge", farge)
}

function bakgrunn() {
    
}