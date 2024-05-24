function epostgenerator() {
    brukerValg = document.getElementById("epost").value
    document.getElementById("ferdigEpost").innerHTML = 
    `Din epost:
     ${brukerValg}@test.no`
}