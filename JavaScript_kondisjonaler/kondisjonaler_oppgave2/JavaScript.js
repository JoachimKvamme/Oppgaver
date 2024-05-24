function celsius_fahrenheitKalkulator() {

    let celsius = Number(document.getElementById("celsius").value)
    if (typeof(celsius) != number) {
        document.getElementById(feilmelding).innerHTML = "Vennligst tast ett eller flere siffer"
    } 
    fahrenheit = (celsius * (9/5) + 32)
    document.getElementById("resultat").innerHTML = fahrenheit
}

function fahrenheit_celsiusKalkulator() {
    let fahrenheit = Number(document.getElementById("fahrenheit").value)
    celsius = (fahrenheit - 32) / 1.8
    document.getElementById("resultat2").innerHTML = celsius
}