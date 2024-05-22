function celsius_fahrenheitKalkulator() {

    let celsius = document.getElementById("celsius").value
    fahrenheit = (celsius * (9/5) + 32)
    document.getElementById("resultat").innerHTML = fahrenheit
}

function fahrenheit_celsiusKalkulator() {
    let fahrenheit = document.getElementById("fahrenheit").value
    celsius = (fahrenheit - 32) / 1.8
    document.getElementById("resultat2").innerHTML = celsius
}