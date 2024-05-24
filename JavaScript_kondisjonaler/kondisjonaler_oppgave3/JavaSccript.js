function utregning() {
    let antallSekunder = Number(document.getElementById("sekunder").value)
    let timer = parseInt(antallSekunder / 3600)
    let minutter = parseInt((antallSekunder%3600)/60)
    let sekunder = ((antallSekunder%3600)%60)

    document.getElementById("resultat").innerHTML = `${antallSekunder} er ${timer} timer, ${minutter} minutter og ${sekunder} sekunder.`
    document.getElementById("formattertResultat").innerHTML = `${timer}: ${minutter}: ${sekunder}`
}