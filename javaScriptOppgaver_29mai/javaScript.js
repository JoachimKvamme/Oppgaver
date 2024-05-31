// Oppgave 1

let vareliste = ``

function leggTilVare() {
    vare = document.getElementById("vare").value
    vareliste += `- ${vare} <br>`
    document.getElementById("vareliste").innerHTML = `${vareliste}`

    document.getElementById("vare").value = ""
    document.getElementById("vare").focus
}

// Oppgave 2

let bokliste = ``

function leggTilBok() {
    let bok = document.getElementById("bok").value
    bokliste += `- ${bok} \n`
    document.getElementById("boklisteVisning").readOnly = true
    document.getElementById("boklisteVisning").value = `${bokliste}`

}

// Oppgave 3
let klikk = 0
function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num != 1;
      for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }

// Oppgave 4

function klikkteller() {
    klikk += 1
    document.getElementById("antallKlikk").innerHTML = `${klikk}`

    if (isPrime(klikk)) {
        document.getElementById("antallKlikk").style.backgroundColor = "blue"
    }
    else if (klikk % 2 == 0){
        document.getElementById("antallKlikk").style.backgroundColor = "green"
    } else if (klikk % 2 != 0){
        document.getElementById("antallKlikk").style.backgroundColor = "red"
    }

}

// Oppgave 5







