function kmiKalkulator() {
    høyde = (Number(document.getElementById("cm").value) / 100)
    vekt = Number(document.getElementById("kg").value)
    kmi = vekt / (høyde * høyde)
    document.getElementById("kmi").innerHTML = `Basert på din vekt, ${vekt}kg, og høyde, ${høyde} centimeter, har du en kroppsmasse-indeks på ${kmi}.`
}